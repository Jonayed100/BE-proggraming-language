"""
BE interpreter.

The interpreter walks the syntax tree made by the parser and runs it, one
node at a time. There is one method per kind of node:

    exec_<Statement>  runs a statement     (e.g. exec_PrintStmt)
    eval_<Expression> works out a value     (e.g. eval_BinOp)

Variables live in Environment objects, linked to the one outside them.
The rule is simple:

  - A variable made inside a kaj (function) belongs to that kaj.
  - A variable made anywhere else belongs to the whole program, even if it
    was made inside jodi { } or a loop. So it is still there afterwards.
  - Only the loop variable (the i in `ghuro i = ...`, the phol in
    `protiti phol ...`) and the error name in `chesta ... nahole bhul` stay
    inside their own { }.

`dhoro x = 5` always makes a new x (inside a kaj, a new local x, even if the
program has an x too). `x = 5` without dhoro changes x if it already exists,
and makes it otherwise.
"""

import inspect
import os
import sys

from . import ast_nodes as ast
from .builtin_functions import BUILTINS
from .errors import BeError, BeNameError, BeRuntimeError, BeThrownError, BeTypeError
from .keywords import WORD_FOR
from .suggest import closest, hint
from .values import (
    BE_FUNCTION_TYPES,
    BeClass,
    BeFunction,
    BeInstance,
    BoundMethod,
    BuiltinFunction,
    be_equal,
    is_be_value,
    is_number,
    is_true,
    is_whole,
    to_display,
    to_repr,
    type_name,
)

MAX_CALL_DEPTH = 400  # how deep functions may call themselves (recursion); the browser can't go much deeper
INIT_METHOD = "shuru"  # the method that runs when an object is made: Manush("Rahim")
THIS_KEY = "\0ei"      # where `ei` is kept inside a method (not a name people can type)

# Value words people might type where a variable name goes, for "did you mean".
VALUE_WORDS = [WORD_FOR["TRUE"], WORD_FOR["FALSE"], WORD_FOR["NULL"]]


# Signals: Python exceptions used to jump out of loops and functions.
class BreakSignal(Exception):
    pass


class ContinueSignal(Exception):
    pass


class ReturnSignal(Exception):
    def __init__(self, value):
        super().__init__()
        self.value = value


class Environment:
    """A box of variables, linked to the box around it."""

    def __init__(self, parent=None, function_scope=False, method_class=None):
        self.values = {}
        self.parent = parent
        self.function_scope = function_scope  # True for a whole function or the whole program
        self.method_class = method_class      # the shreni whose method is running here

    def define(self, name, value):
        self.values[name] = value

    def find(self, name):
        env = self
        while env is not None:
            if name in env.values:
                return env
            env = env.parent
        return None

    def visible_names(self):
        names = []
        env = self
        while env is not None:
            names.extend(name for name in env.values if not name.startswith("\0"))
            env = env.parent
        return names

    def missing(self, name, line, col):
        suggestion = closest(name, self.visible_names() + VALUE_WORDS + list(WORD_FOR.values()), fields=False)
        if suggestion:
            message = f"'{name}' is not defined.{hint(suggestion)}"
        else:
            message = f"'{name}' is not defined. Give it a value first, for example: {name} = 0"
        return BeNameError(message, line, col)

    def get(self, name, line, col=None):
        env = self.find(name)
        if env is None:
            raise self.missing(name, line, col)
        return env.values[name]

    def owner(self):
        """The Environment of the kaj (function) or whole program this one is inside."""
        env = self
        while not env.function_scope:
            env = env.parent
        return env

    def assign(self, name, value):
        env = self.find(name)
        if env is None or env.parent is None:
            # A new name (or one that is only a built-in function, like lomba):
            # keep it for the whole kaj / program. Built-ins themselves never change.
            env = self.owner()
        env.values[name] = value

    def current_method_class(self):
        env = self
        while env is not None:
            if env.method_class is not None:
                return env.method_class
            env = env.parent
        return None


def default_output(text):
    print(text, flush=True)


def plural(count, word):
    return f"{count} {word}" if count == 1 else f"{count} {word}s"


class Interpreter:
    def __init__(self, output=None, input_fn=None):
        self.output = output or default_output
        self.input_fn = input_fn or input
        self.call_depth = 0
        self.folders = [os.getcwd()]  # where `anao` and files are looked for (the current file's folder)
        self.imported = set()

        from .computer import COMPUTER_BUILTINS  # computer-only functions: files, websites, apps

        self.builtins = Environment(function_scope=True)
        for name, (fn, low, high) in {**BUILTINS, **COMPUTER_BUILTINS}.items():
            self.builtins.define(name, BuiltinFunction(name, fn, low, high))
        self.globals = Environment(self.builtins, function_scope=True)

        # Find each node's method once, so running is faster.
        self._exec = {}
        self._eval = {}
        for name in dir(self):
            if name.startswith("exec_"):
                self._exec[getattr(ast, name[5:])] = getattr(self, name)
            elif name.startswith("eval_"):
                self._eval[getattr(ast, name[5:])] = getattr(self, name)

        # BE functions call Python functions underneath, so Python needs room.
        sys.setrecursionlimit(max(sys.getrecursionlimit(), 20000))

    @property
    def folder(self):
        """The folder of the file that is running now."""
        return self.folders[-1]

    # ---- entry point -------------------------------------------------------

    def run(self, program, echo=False, path=None):
        """Run a whole program.

        echo=True (interactive mode) prints the value of a line that is only an
        expression, like a calculator. `path` is the program's file, so `anao`
        and file functions can find files next to it.
        """
        if path is not None:
            full = os.path.abspath(path)
            self.folders.append(os.path.dirname(full))
            self.imported.add(full)
        try:
            for statement in program.statements:
                if echo and isinstance(statement, ast.ExprStmt):
                    value = self.evaluate(statement.expr, self.globals)
                    if value is not None:
                        self.output(to_repr(value))
                else:
                    self.execute(statement, self.globals)
        except RecursionError:
            self.call_depth = 0
            raise BeRuntimeError(
                "The program went too deep (too much recursion). "
                "Does a function call itself without a stopping condition?"
            ) from None
        finally:
            if path is not None:
                self.folders.pop()

    # ---- statements --------------------------------------------------------

    def execute(self, node, env):
        self._exec[type(node)](node, env)

    def execute_block(self, block, env):
        inner = Environment(env)
        for statement in block.statements:
            self.execute(statement, inner)

    def exec_LetStmt(self, node, env):
        env.owner().define(node.name, self.evaluate(node.value, env))

    def exec_PrintStmt(self, node, env):
        parts = [to_display(self.evaluate(value, env)) for value in node.values]
        self.output(" ".join(parts))

    def exec_ExprStmt(self, node, env):
        self.evaluate(node.expr, env)

    def exec_AssignStmt(self, node, env):
        target = node.target

        if isinstance(target, ast.Name):
            if node.op != "=":
                old = env.get(target.name, target.line, target.col)
                value = self.binary(node.op[0], old, self.evaluate(node.value, env), node.line, None)
            else:
                value = self.evaluate(node.value, env)
            env.assign(target.name, value)
            return

        if isinstance(target, ast.Attribute):
            obj = self.evaluate(target.target, env)
            value = self.evaluate(node.value, env)
            if node.op != "=":
                old = self.get_attribute(obj, target.name, target.line, target.col)
                value = self.binary(node.op[0], old, value, node.line, None)
            self.set_attribute(obj, target.name, value, target.line, target.col)
            return

        # target is an Index: list[i] = value  or  dictionary["key"] = value
        container = self.evaluate(target.target, env)
        index = self.evaluate(target.index, env)
        value = self.evaluate(node.value, env)
        if node.op != "=":
            old = self.get_index(container, index, target.line, target.col)
            value = self.binary(node.op[0], old, value, node.line, None)
        self.set_index(container, index, value, target.line, target.col)

    def exec_IfStmt(self, node, env):
        for condition, block in node.branches:
            if is_true(self.evaluate(condition, env)):
                self.execute_block(block, env)
                return
        if node.else_block is not None:
            self.execute_block(node.else_block, env)

    def loop_round(self, body, env):
        """Run one round of a loop. Returns False when the loop must stop (thamo)."""
        try:
            self.execute_block(body, env)
        except BreakSignal:
            return False
        except ContinueSignal:
            pass
        return True

    def exec_WhileStmt(self, node, env):
        while is_true(self.evaluate(node.condition, env)):
            if not self.loop_round(node.body, env):
                break

    def exec_ForRangeStmt(self, node, env):
        start = self.evaluate(node.start, env)
        end = self.evaluate(node.end, env)
        step = self.evaluate(node.step, env) if node.step is not None else None
        for value in (start, end) + ((step,) if step is not None else ()):
            if not is_number(value):
                raise BeTypeError(
                    f"'{WORD_FOR['FOR']}' needs numbers for its start, end and '{WORD_FOR['STEP']}', "
                    f"not a {type_name(value)}.",
                    node.line,
                )
        if step is None:
            step = 1 if start <= end else -1  # count down when start is bigger
        if step == 0:
            raise BeRuntimeError(f"'{WORD_FOR['STEP']}' can't be 0, or the loop would never end.", node.line)

        current = start
        while (step > 0 and current <= end) or (step < 0 and current >= end):
            loop_env = Environment(env)  # a fresh i every round, so a kaj made inside keeps its own i
            loop_env.define(node.var, current)
            if not self.loop_round(node.body, loop_env):
                break
            current += step

    def exec_RepeatStmt(self, node, env):
        count = self.evaluate(node.count, env)
        if not is_whole(count) or count < 0:
            raise BeTypeError(
                f"'{WORD_FOR['FOR']} ... {WORD_FOR['TIMES']}' needs a whole number that is 0 or more, "
                f"not {to_repr(count)}.",
                node.line,
            )
        for _ in range(int(count)):
            if not self.loop_round(node.body, env):
                break

    def exec_ForEachStmt(self, node, env):
        collection = self.evaluate(node.iterable, env)
        if isinstance(collection, (list, str)):
            items = list(collection)  # a copy, so changing the list inside the loop is safe
        elif isinstance(collection, dict):
            items = list(collection.keys())
        elif isinstance(collection, tuple):
            items = list(collection)
        else:
            raise BeTypeError(
                f"'{WORD_FOR['EACH']}' only works on a list, text or dictionary, "
                f"not on a {type_name(collection)}.",
                node.line,
            )
        for item in items:
            loop_env = Environment(env)  # a fresh variable every round, so a kaj made inside keeps its own
            loop_env.define(node.var, item)
            if not self.loop_round(node.body, loop_env):
                break

    def exec_BreakStmt(self, node, env):
        raise BreakSignal()

    def exec_ContinueStmt(self, node, env):
        raise ContinueSignal()

    def exec_FuncDef(self, node, env):
        # Like variables, a kaj made inside jodi { } or a loop is kept afterwards.
        env.owner().define(node.name, BeFunction(node.name, node.params, node.body, env, None, node.defaults))

    def exec_ClassDef(self, node, env):
        parent = None
        if node.parent is not None:
            parent = self.evaluate(node.parent, env)
            if not isinstance(parent, BeClass):
                raise BeTypeError(
                    f"A {WORD_FOR['CLASS']} can only come from another {WORD_FOR['CLASS']}, "
                    f"not from a {type_name(parent)}.",
                    node.line,
                )
        cls = BeClass(node.name, parent, {})
        for method in node.methods:
            cls.methods[method.name] = BeFunction(method.name, method.params, method.body, env, cls, method.defaults)
        env.owner().define(node.name, cls)

    def exec_ReturnStmt(self, node, env):
        value = self.evaluate(node.value, env) if node.value is not None else None
        raise ReturnSignal(value)

    def exec_ThrowStmt(self, node, env):
        raise BeThrownError(to_display(self.evaluate(node.value, env)), node.line)

    def exec_TryStmt(self, node, env):
        depth = self.call_depth
        try:
            self.execute_block(node.body, env)
        except BeError as error:
            self.call_depth = depth
            if node.handler is None:
                return
            handler_env = Environment(env)
            if node.error_name:
                handler_env.define(node.error_name, error.message)
            self.execute_block(node.handler, handler_env)

    def exec_ImportStmt(self, node, env):
        from .parser import parse  # imported here to avoid a loop between files

        path = os.path.join(self.folder, node.path)
        if not os.path.exists(path) and os.path.exists(path + ".be"):
            path += ".be"
        full = os.path.abspath(path)
        if full in self.imported:
            return  # each file is brought in only once
        if not os.path.isfile(full):
            raise BeRuntimeError(
                f'The file "{node.path}" was not found. Is it in the same folder as this file?',
                node.line,
                node.col,
            )
        with open(full, encoding="utf-8-sig") as handle:
            source = handle.read()
        self.imported.add(full)
        try:
            program = parse(source)
            self.folders.append(os.path.dirname(full))
            try:
                for statement in program.statements:
                    self.execute(statement, self.globals)
            finally:
                self.folders.pop()
        except BeError as error:
            if error.filename is None:
                error.filename = os.path.basename(full)
                error.source = source
            raise

    # ---- expressions -------------------------------------------------------

    def evaluate(self, node, env):
        return self._eval[type(node)](node, env)

    def eval_Number(self, node, env):
        return node.value

    def eval_String(self, node, env):
        return node.value

    def eval_Template(self, node, env):
        return "".join(
            part if isinstance(part, str) else to_display(self.evaluate(part, env))
            for part in node.parts
        )

    def eval_Bool(self, node, env):
        return node.value

    def eval_Null(self, node, env):
        return None

    def eval_ListLiteral(self, node, env):
        return [self.evaluate(item, env) for item in node.items]

    def eval_DictLiteral(self, node, env):
        result = {}
        for key_node, value_node in node.pairs:
            key = self.evaluate(key_node, env)
            self.check_key(key, node.line, None)
            result[key] = self.evaluate(value_node, env)
        return result

    def eval_Name(self, node, env):
        return env.get(node.name, node.line, node.col)

    def eval_This(self, node, env):
        return env.get(THIS_KEY, node.line, node.col)

    def eval_SuperAttr(self, node, env):
        cls = env.current_method_class()
        this = env.get(THIS_KEY, node.line, node.col)
        if cls.parent is None:
            raise BeRuntimeError(
                f"'{cls.name}' has no parent {WORD_FOR['CLASS']}, so '{WORD_FOR['SUPER']}' can't be used here.",
                node.line,
                node.col,
            )
        method = cls.parent.find_method(node.name)
        if method is None:
            raise BeNameError(
                f"The parent {WORD_FOR['CLASS']} '{cls.parent.name}' has no method '{node.name}'."
                + hint(closest(node.name, list(cls.parent.all_method_names()))),
                node.line,
                node.col,
            )
        return BoundMethod(this, method)

    def eval_FuncExpr(self, node, env):
        return BeFunction(None, node.params, node.body, env, env.current_method_class(), node.defaults)

    def eval_Attribute(self, node, env):
        obj = self.evaluate(node.target, env)
        return self.get_attribute(obj, node.name, node.line, node.col)

    def eval_Unary(self, node, env):
        value = self.evaluate(node.operand, env)
        if node.op == "NOT":
            return not is_true(value)
        if not is_number(value):
            raise BeTypeError(f"'-' only works on numbers, not on a {type_name(value)}.", node.line, node.col)
        return -value

    def eval_Logical(self, node, env):
        left = is_true(self.evaluate(node.left, env))
        if node.op == "AND":
            return left and is_true(self.evaluate(node.right, env))
        return left or is_true(self.evaluate(node.right, env))

    def eval_BinOp(self, node, env):
        left = self.evaluate(node.left, env)
        right = self.evaluate(node.right, env)
        return self.binary(node.op, left, right, node.line, node.col)

    def binary(self, op, a, b, line, col):
        if op == "+":
            if isinstance(a, str) or isinstance(b, str):
                return to_display(a) + to_display(b)  # "Boyosh: " + 22
            if is_number(a) and is_number(b):
                return a + b
            if isinstance(a, list) and isinstance(b, list):
                return a + b
        elif op == "*":
            if is_number(a) and is_number(b):
                return a * b
            if isinstance(a, (str, list)) and is_whole(b):
                return a * int(b)  # "-" * 20
            if isinstance(b, (str, list)) and is_whole(a):
                return b * int(a)
        elif op in ("-", "/", "%"):
            if is_number(a) and is_number(b):
                if op == "-":
                    return a - b
                if b == 0:
                    raise BeRuntimeError("Can't divide by zero.", line, col)
                if op == "%":
                    return a % b
                if isinstance(a, int) and isinstance(b, int) and a % b == 0:
                    return a // b  # 10 / 2 is 5, not 5.0
                return a / b
        elif op == "==":
            return be_equal(a, b)
        elif op == "!=":
            return not be_equal(a, b)
        elif op == "IN":
            return self.contains(b, a, line, col)
        elif op in ("<", ">", "<=", ">="):
            if (is_number(a) and is_number(b)) or (isinstance(a, str) and isinstance(b, str)):
                if op == "<":
                    return a < b
                if op == ">":
                    return a > b
                if op == "<=":
                    return a <= b
                return a >= b
            raise BeTypeError(f"'{op}' can't compare a {type_name(a)} with a {type_name(b)}.", line, col)
        raise BeTypeError(
            f"Can't use '{op}' between a {type_name(a)} ({to_repr(a)}) and a {type_name(b)} ({to_repr(b)}).",
            line,
            col,
        )

    def contains(self, container, item, line, col):
        """x moddhe container"""
        word = WORD_FOR["IN"]
        if isinstance(container, list):
            return any(be_equal(value, item) for value in container)
        if isinstance(container, str):
            if not isinstance(item, str):
                raise BeTypeError(f"'{word}' with text needs text on the left, not a {type_name(item)}.", line, col)
            return item in container
        if isinstance(container, dict):
            self.check_key(item, line, col)
            return item in container
        raise BeTypeError(
            f"'{word}' needs a list, text or dictionary on the right, not a {type_name(container)}.", line, col
        )

    # ---- calling ---------------------------------------------------------------

    def eval_Call(self, node, env):
        function = self.evaluate(node.callee, env)
        args = [self.evaluate(arg, env) for arg in node.args]
        kwargs = {name: self.evaluate(value, env) for name, value in node.kwargs}
        if isinstance(node.callee, ast.Name):
            name = node.callee.name
        elif isinstance(node.callee, ast.Attribute):
            name = node.callee.name
        else:
            name = None
        return self.call(function, args, node.line, node.col, name, kwargs)

    def call(self, function, args, line, col=None, name=None, kwargs=None):
        kwargs = kwargs or {}

        if isinstance(function, BuiltinFunction):
            if kwargs:
                raise BeTypeError(f"'{function.name}' doesn't take named inputs.", line, col)
            self.check_arg_count(function.name, function.min_args, function.max_args, len(args), line, col)
            try:
                return function.fn(self, args, line)
            except BeError as error:
                if error.col is None:
                    error.col = col
                raise

        if isinstance(function, BoundMethod):
            return self.call_function(function.function, args, kwargs, line, col, this=function.instance)

        if isinstance(function, BeFunction):
            return self.call_function(function, args, kwargs, line, col)

        if isinstance(function, BeClass):
            instance = BeInstance(function)
            init = function.find_method(INIT_METHOD)
            if init is not None:
                self.call_function(init, args, kwargs, line, col, this=instance, label=function.name)
            elif args or kwargs:
                raise BeTypeError(
                    f"'{function.name}' takes no inputs. Add {WORD_FOR['FUNC']} {INIT_METHOD}(...) "
                    f"inside the {WORD_FOR['CLASS']} to give it some.",
                    line,
                    col,
                )
            return instance

        if callable(function) and not is_be_value(function):
            return self.call_python(function, args, kwargs, line, col, name)

        label = f"'{name}'" if name else "This"
        raise BeTypeError(
            f"{label} is a {type_name(function)}, not a function, so it can't be called with ( ).", line, col
        )

    @staticmethod
    def check_arg_count(name, low, high, given, line, col):
        if given >= low and (high is None or given <= high):
            return
        if high is None:
            need = f"at least {plural(low, 'input')}"
        elif low == high:
            need = plural(low, "input")
        else:
            need = f"{low} to {high} inputs"
        was = "was" if given == 1 else "were"
        raise BeTypeError(f"'{name}' takes {need}, but {given} {was} given.", line, col)

    def call_function(self, function, args, kwargs, line, col, this=None, label=None):
        label = label or function.name or WORD_FOR["FUNC"]
        params = function.params
        if len(args) > len(params):
            self.check_arg_count(label, len(params), len(params), len(args), line, col)
        values = dict(zip(params, args))
        for key, value in kwargs.items():
            if key not in params:
                raise BeTypeError(
                    f"'{label}' has no input called '{key}'." + hint(closest(key, params)), line, col
                )
            if key in values:
                raise BeTypeError(f"'{label}' got the input '{key}' twice.", line, col)
            values[key] = value
        for param in params:
            if param not in values and param not in function.defaults:
                raise BeTypeError(f"'{label}' is missing the input '{param}'.", line, col)

        if self.call_depth >= MAX_CALL_DEPTH:
            raise BeRuntimeError(
                f"'{label}' called itself more than {MAX_CALL_DEPTH} times. "
                "Does it have a stopping condition (base case)?",
                line,
                col,
            )
        call_env = Environment(function.closure, function_scope=True, method_class=function.owner_class)
        if this is not None:
            call_env.define(THIS_KEY, this)
        self.call_depth += 1
        try:
            for param in params:
                if param in values:
                    call_env.define(param, values[param])
                else:  # a default value, worked out now so it can use the inputs before it
                    call_env.define(param, self.evaluate(function.defaults[param], call_env))
            self.execute_block(function.body, call_env)
        except ReturnSignal as signal:
            return signal.value
        finally:
            self.call_depth -= 1
        return None

    def to_python(self, value, line):
        """Make a BE function callable from Python libraries (for example as a Flask route)."""
        if isinstance(value, BE_FUNCTION_TYPES + (BeClass,)) and not isinstance(value, BuiltinFunction):
            interp = self
            function = value.function if isinstance(value, BoundMethod) else value
            accepts = len(function.params) if isinstance(function, BeFunction) else None

            def python_function(*args, **kwargs):
                # Libraries sometimes pass extra inputs (like an event); a kaj () { } simply ignores them.
                inputs = list(args) if accepts is None else list(args)[:accepts]
                return interp.call(value, inputs, line, kwargs=kwargs)

            python_function.__name__ = getattr(value, "name", None) or "be_function"
            return python_function
        return value

    def check_native_inputs(self, function, args, kwargs, line, col, label):
        """Clear messages for a window's or website's methods, like window.botam("Go")."""
        params = list(inspect.signature(function).parameters.values())
        names = [p.name for p in params]
        low = sum(1 for p in params if p.default is inspect.Parameter.empty)
        if len(args) > len(params):
            self.check_arg_count(label, low, len(params), len(args), line, col)
        for key in kwargs:
            if key not in names:
                raise BeTypeError(f"'{label}' has no input called '{key}'." + hint(closest(key, names)), line, col)
            if names.index(key) < len(args):
                raise BeTypeError(f"'{label}' got the input '{key}' twice.", line, col)
        for i, param in enumerate(params[:low]):
            if i >= len(args) and param.name not in kwargs:
                raise BeTypeError(f"'{label}' is missing the input '{param.name}'.", line, col)

    def call_python(self, function, args, kwargs, line, col, name):
        native = getattr(getattr(function, "__self__", None), "_be_native", False)
        if native:
            self.check_native_inputs(function, args, kwargs, line, col, name or function.__name__)
        else:
            args = [self.to_python(arg, line) for arg in args]
            kwargs = {key: self.to_python(value, line) for key, value in kwargs.items()}
        try:
            result = function(*args, **kwargs)
        except BeError as error:
            if error.line is None:
                error.line, error.col = line, col
            raise
        except (ReturnSignal, BreakSignal, ContinueSignal):
            raise
        except RecursionError:
            raise
        except Exception as error:  # an error inside a Python library
            label = f"'{name}'" if name else "A Python function"
            raise BeRuntimeError(f"{label} failed: {type(error).__name__}: {error}", line, col) from None
        if isinstance(result, tuple):
            return list(result)
        return result

    # ---- fields and methods: obj.name ------------------------------------------

    def get_attribute(self, obj, name, line, col):
        if isinstance(obj, BeInstance):
            if name in obj.fields:
                return obj.fields[name]
            method = obj.cls.find_method(name)
            if method is not None:
                return BoundMethod(obj, method)
            known = list(obj.fields) + list(obj.cls.all_method_names())
            raise BeNameError(
                f"This {obj.cls.name} has no field or method '{name}'." + hint(closest(name, known)), line, col
            )
        if isinstance(obj, BeClass):
            method = obj.find_method(name)
            if method is not None:
                return method
            raise BeNameError(
                f"The {WORD_FOR['CLASS']} '{obj.name}' has no method '{name}'."
                + hint(closest(name, list(obj.all_method_names()))),
                line,
                col,
            )
        if isinstance(obj, dict):
            if name in obj:
                return obj[name]
            keys = [k for k in obj if isinstance(k, str)]
            raise BeRuntimeError(f'The dictionary has no key "{name}".' + hint(closest(name, keys)), line, col)
        if is_be_value(obj):
            raise BeTypeError(f"A {type_name(obj)} has no field '{name}'.", line, col)
        try:
            value = getattr(obj, name)
        except AttributeError:
            known = [n for n in dir(obj) if not n.startswith("_")]
            raise BeNameError(
                f"This {type_name(obj)} has no '{name}'." + hint(closest(name, known)), line, col
            ) from None
        return list(value) if isinstance(value, tuple) else value

    def set_attribute(self, obj, name, value, line, col):
        if isinstance(obj, BeInstance):
            obj.fields[name] = value
            return
        if isinstance(obj, dict):
            obj[name] = value
            return
        if is_be_value(obj):
            raise BeTypeError(f"Can't set '{name}' on a {type_name(obj)}.", line, col)
        try:
            setattr(obj, name, self.to_python(value, line))
        except Exception as error:
            raise BeRuntimeError(f"Can't set '{name}': {error}", line, col) from None

    def eval_Index(self, node, env):
        container = self.evaluate(node.target, env)
        index = self.evaluate(node.index, env)
        return self.get_index(container, index, node.line, node.col)

    # ---- list / dictionary helpers ---------------------------------------------

    @staticmethod
    def check_key(key, line, col):
        if isinstance(key, (list, dict)):
            raise BeTypeError(
                f"A dictionary key can't be a {type_name(key)}. Use text or a number.", line, col
            )

    @staticmethod
    def check_position(container, index, line, col):
        if not is_whole(index):
            raise BeTypeError(f"A position must be a whole number, not a {type_name(index)}.", line, col)
        index = int(index)
        size = len(container)
        if not -size <= index < size:
            what, things = ("list", "items") if isinstance(container, list) else ("text", "letters")
            if size == 0:
                raise BeRuntimeError(f"The {what} is empty, so there is no position {index}.", line, col)
            raise BeRuntimeError(
                f"The {what} has no position {index}. It has {size} {things} (positions 0 to {size - 1}).",
                line,
                col,
            )
        return index

    def get_index(self, container, index, line, col):
        if isinstance(container, (list, str)):
            return container[self.check_position(container, index, line, col)]
        if isinstance(container, dict):
            self.check_key(index, line, col)
            if index not in container:
                raise BeRuntimeError(f"The dictionary has no key {to_repr(index)}.", line, col)
            return container[index]
        if not is_be_value(container):
            try:
                return container[index]
            except Exception as error:
                raise BeRuntimeError(f"Can't read [{to_repr(index)}]: {error}", line, col) from None
        raise BeTypeError(f"Can't use [ ] to read from a {type_name(container)}.", line, col)

    def set_index(self, container, index, value, line, col):
        if isinstance(container, list):
            container[self.check_position(container, index, line, col)] = value
            return
        if isinstance(container, dict):
            self.check_key(index, line, col)
            container[index] = value
            return
        if isinstance(container, str):
            raise BeTypeError("Letters inside text can't be changed. Make a new text instead.", line, col)
        raise BeTypeError(f"Can't use [ ] to store a value in a {type_name(container)}.", line, col)


__all__ = ["Interpreter", "BeError"]
