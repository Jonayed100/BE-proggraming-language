"""
BE parser.

The parser reads the list of tokens from the lexer and builds a syntax tree
(see ast_nodes.py). It is a "recursive descent" parser: there is one method
per grammar rule, and the methods call each other.

Grammar (what BE code is allowed to look like):

    program     := statement*
    statement   := "dhoro" NAME "=" expr
                 | "dekhao" [expr ("," expr)*]
                 | "jodi" expr ["tahole"] block
                       ("nahole" "jodi" expr ["tahole"] block)* ["nahole" block]
                 | "jotokkhon" expr block
                 | "ghuro" NAME "=" expr "theke" expr ["porjonto"] ["dhap" expr] block
                 | "ghuro" expr "bar" block
                 | "protiti" NAME expr "theke" block
                 | "kaj" NAME "(" [param ("," param)*] ")" block      param := NAME ["=" expr]
                 | "shreni" NAME ["theke" expr] "{" ("kaj" ...)* "}"
                 | "ferot" [expr]
                 | "thamo" | "agao"
                 | "chesta" block ["nahole" [NAME] block]
                 | "chhuro" expr
                 | "anao" STRING
                 | expr [("=" | "+=" | "-=" | "*=" | "/=") expr]
    block       := "{" statement* "}"

    expr        := or_expr
    or_expr     := and_expr ("othoba" and_expr)*
    and_expr    := not_expr ("ebong" not_expr)*
    not_expr    := "na" not_expr | comparison
    comparison  := sum [("==" | "!=" | "<" | ">" | "<=" | ">=" | "moddhe") sum]
    sum         := product (("+" | "-") product)*
    product     := unary (("*" | "/" | "%") unary)*
    unary       := "-" unary | postfix
    postfix     := primary ("(" args ")" | "[" expr "]" | "." NAME)*
    args        := [arg ("," arg)*]        arg := expr | NAME "=" expr
    primary     := NUMBER | STRING | TEMPLATE | "sotti" | "mittha" | "kichuna"
                 | NAME | "ei" | "upor" "." NAME | "kaj" "(" params ")" block
                 | "(" expr ")" | "[" items "]" | "{" pairs "}"
"""

from . import ast_nodes as ast
from .errors import BeSyntaxError
from .keywords import KEYWORDS, WORD_FOR
from .lexer import TemplatePart, tokenize
from .suggest import closest_keyword, hint
from .values import format_number

COMPARISON_OPS = {"==", "!=", "<", ">", "<=", ">=", "IN"}
ASSIGN_OPS = {"=", "+=", "-=", "*=", "/="}


def describe(token, eof_word="the end of the file"):
    """A friendly description of a token, for error messages."""
    if token.type == "NEWLINE":
        return "the end of the line"
    if token.type == "EOF":
        return eof_word
    if token.type == "NAME":
        return f"the name '{token.value}'"
    if token.type == "NUMBER":
        return f"the number {format_number(token.value)}"
    if token.type == "STRING":
        return f'the text "{token.value}"'
    if token.type == "TEMPLATE":
        return "text"
    return f"'{token.value}'"


def word(job):
    """The BE word for a keyword job, e.g. word("LET") -> "dhoro"."""
    return WORD_FOR.get(job, job)


class Parser:
    def __init__(self, tokens):
        self.tokens = tokens
        self.pos = 0
        self.loop_depth = 0    # inside a loop? (for thamo / agao)
        self.func_depth = 0    # inside a function? (for ferot)
        self.method_depth = 0  # inside a shreni method? (for ei / upor)
        self.eof_word = "the end of the file"  # inside a "{...}" template, the end is the '}'

    # ---- small helpers -------------------------------------------------

    @property
    def current(self):
        return self.tokens[self.pos]

    def peek_type(self, offset=0):
        index = min(self.pos + offset, len(self.tokens) - 1)
        return self.tokens[index].type

    def check(self, *types):
        return self.current.type in types

    def advance(self):
        token = self.current
        if token.type != "EOF":
            self.pos += 1
        return token

    def match(self, *types):
        if self.check(*types):
            return self.advance()
        return None

    def error(self, message, token=None, jobs=None):
        """Make a syntax error pointing at `token`.

        If the token is a misspelled keyword, a "Did you mean" hint is added.
        `jobs` limits the hint to keywords that make sense at this spot.
        """
        token = token or self.current
        if token.type == "NAME":
            message += hint(closest_keyword(token.value, jobs))
        if token.type in ("EOF", "NEWLINE"):
            # Point just after the last real piece of code, so the right line is shown.
            for previous in reversed(self.tokens[: self.pos]):
                if previous.type not in ("EOF", "NEWLINE"):
                    return BeSyntaxError(message, previous.line, previous.col + (previous.end - previous.start))
        return BeSyntaxError(message, token.line, token.col)

    def expect(self, type_, what, hint_text=""):
        if self.check(type_):
            return self.advance()
        message = f"Expected {what} here, but found {describe(self.current, self.eof_word)}."
        jobs = {type_} if type_ in KEYWORDS else None
        if self.check("NAME") and closest_keyword(self.current.value, jobs):
            raise self.error(message, jobs=jobs)  # "Did you mean 'theke'?" is enough
        if hint_text:
            message += " " + hint_text
        raise self.error(message)

    def skip_newlines(self):
        while self.check("NEWLINE"):
            self.advance()

    def next_line_continues(self, *types):
        """A long expression can go on the next line if that line starts with an operator:

            dhoro html = "<h1>Hi</h1>"
                + "<p>More</p>"
        """
        if not self.check("NEWLINE"):
            return self.check(*types)
        ahead = self.pos
        while self.tokens[ahead].type == "NEWLINE":
            ahead += 1
        if self.tokens[ahead].type in types:
            self.pos = ahead
            return True
        return False

    def end_of_statement(self, first=None):
        """A simple statement must end at a new line, at '}' or at the end of the file."""
        if self.check("NEWLINE"):
            self.advance()
        elif self.check("EOF", "}"):
            pass
        else:
            if first is not None and first.type == "NAME":
                # "dekhaoo 5" or "jodii x > 1 {": the first word is probably a misspelled keyword.
                suggestion = closest_keyword(first.value)
                if suggestion:
                    raise BeSyntaxError(
                        f"'{first.value}' is not a BE word.{hint(suggestion)}",
                        first.line,
                        first.col,
                    )
            raise self.error(
                f"Expected the end of the line here, but found {describe(self.current, self.eof_word)}. "
                "Write one statement per line."
            )

    # ---- program and blocks ----------------------------------------------

    def parse_program(self):
        statements = []
        self.skip_newlines()
        while not self.check("EOF"):
            if self.check("}"):
                raise self.error("This '}' doesn't close any '{'. Remove it.")
            statements.append(self.statement())
            self.skip_newlines()
        return ast.Program(statements)

    def open_block(self, owner):
        self.skip_newlines()
        return self.expect("{", "'{'", f"Put the code for '{owner}' between {{ and }}.")

    def missing_close(self, open_brace):
        return BeSyntaxError(
            f"Missing '}}'. The '{{' opened on line {open_brace.line} is never closed.",
            open_brace.line,
            open_brace.col,
        )

    def block(self, owner):
        """Read { ... }. `owner` is the keyword that needs the block, for error messages."""
        open_brace = self.open_block(owner)
        statements = []
        while True:
            self.skip_newlines()
            if self.check("}"):
                self.advance()
                break
            if self.check("EOF"):
                raise self.missing_close(open_brace)
            statements.append(self.statement())
        return ast.Block(statements)

    def next_is_else(self):
        """Is the next real token (after any empty lines) 'nahole'? If not, nothing is used up."""
        saved = self.pos
        self.skip_newlines()
        if self.check("ELSE"):
            return True
        self.pos = saved
        return False

    # ---- statements --------------------------------------------------------

    def statement(self):
        kind = self.current.type
        handlers = {
            "LET": self.let_statement,
            "PRINT": self.print_statement,
            "IF": self.if_statement,
            "WHILE": self.while_statement,
            "FOR": self.for_statement,
            "EACH": self.each_statement,
            "FUNC": self.function_definition,
            "CLASS": self.class_definition,
            "RETURN": self.return_statement,
            "BREAK": self.loop_control,
            "CONTINUE": self.loop_control,
            "TRY": self.try_statement,
            "THROW": self.throw_statement,
            "IMPORT": self.import_statement,
        }
        if kind in handlers:
            return handlers[kind]()
        if kind == "ELSE":
            raise self.error(f"'{word('ELSE')}' needs a '{word('IF')}' or '{word('TRY')}' before it.")
        if kind == "THEN":
            raise self.error(f"'{word('THEN')}' can only come right after the condition of '{word('IF')}'.")
        return self.expression_statement()

    def let_statement(self):
        let = self.advance()
        name = self.expect("NAME", "a variable name", f"For example: {word('LET')} boyosh = 22")
        self.expect(
            "=", "'='", f"Give the new variable a starting value, for example: {word('LET')} {name.value} = 0"
        )
        value = self.expression()
        self.end_of_statement()
        return ast.LetStmt(name.value, value, let.line)

    def print_statement(self):
        token = self.advance()
        values = []
        if not self.check("NEWLINE", "EOF", "}"):
            values.append(self.expression())
            while self.match(","):
                values.append(self.expression())
        self.end_of_statement()
        return ast.PrintStmt(values, token.line)

    def condition_and_block(self):
        condition = self.expression()
        self.match("THEN")  # "tahole" is optional
        return condition, self.block(word("IF"))

    def if_statement(self):
        token = self.advance()
        branches = [self.condition_and_block()]
        else_block = None
        while self.next_is_else():
            self.advance()  # nahole
            if self.match("IF"):
                branches.append(self.condition_and_block())
            else:
                else_block = self.block(word("ELSE"))
                break
        return ast.IfStmt(branches, else_block, token.line)

    def while_statement(self):
        token = self.advance()
        condition = self.expression()
        body = self.loop_body(word("WHILE"))
        return ast.WhileStmt(condition, body, token.line)

    def for_statement(self):
        token = self.advance()
        if not (self.check("NAME") and self.peek_type(1) == "="):
            # ghuro 5 bar { ... }
            count = self.expression()
            self.expect(
                "TIMES",
                f"'{word('TIMES')}'",
                f"For example: {word('FOR')} 5 {word('TIMES')} {{ ... }}  or  "
                f"{word('FOR')} i = 1 {word('FROM')} 10 {{ ... }}",
            )
            body = self.loop_body(word("FOR"))
            return ast.RepeatStmt(count, body, token.line)

        example = f"For example: {word('FOR')} i = 1 {word('FROM')} 10 {{ ... }}"
        var = self.advance()
        self.advance()  # =
        start = self.expression()
        self.expect("FROM", f"'{word('FROM')}'", example)
        end = self.expression()
        self.match("UNTIL")  # "porjonto" is optional
        step = None
        if self.match("STEP"):
            step = self.expression()
        body = self.loop_body(word("FOR"))
        return ast.ForRangeStmt(var.value, start, end, step, body, token.line)

    def each_statement(self):
        token = self.advance()
        example = f"For example: {word('EACH')} phol fol_list {word('FROM')} {{ ... }}"
        var = self.expect("NAME", "a variable name", example)
        iterable = self.expression()
        self.expect("FROM", f"'{word('FROM')}'", example)
        body = self.loop_body(word("EACH"))
        return ast.ForEachStmt(var.value, iterable, body, token.line)

    def loop_body(self, owner):
        self.loop_depth += 1
        try:
            return self.block(owner)
        finally:
            self.loop_depth -= 1

    def loop_control(self):
        token = self.advance()
        if self.loop_depth == 0:
            raise self.error(
                f"'{token.value}' can only be used inside a loop ({word('FOR')}, {word('WHILE')}, "
                f"{word('EACH')}).",
                token,
            )
        self.end_of_statement()
        if token.type == "BREAK":
            return ast.BreakStmt(token.line)
        return ast.ContinueStmt(token.line)

    def parameters(self, example):
        """Read (a, b, c = 1). Returns (names, defaults)."""
        self.expect("(", "'('", example)
        params = []
        defaults = {}
        self.skip_newlines()
        if not self.check(")"):
            while True:
                param = self.expect("NAME", "an input name", example)
                if param.value in params:
                    raise self.error(
                        f"The input name '{param.value}' is used twice. Give each input its own name.",
                        param,
                    )
                params.append(param.value)
                if self.match("="):
                    defaults[param.value] = self.expression()
                elif defaults:
                    raise self.error(
                        "Inputs with a default value (like y = 1) must come after inputs without one.", param
                    )
                self.skip_newlines()
                if not self.match(","):
                    break
                self.skip_newlines()
        self.expect(")", "')'", example)
        return params, defaults

    def function_body(self, is_method=False):
        # A function has its own body: loops outside it do not count inside it.
        saved_loop_depth = self.loop_depth
        self.loop_depth = 0
        self.func_depth += 1
        if is_method:
            self.method_depth += 1
        try:
            return self.block(word("FUNC"))
        finally:
            self.func_depth -= 1
            if is_method:
                self.method_depth -= 1
            self.loop_depth = saved_loop_depth

    def function_definition(self, is_method=False):
        token = self.advance()
        example = f"For example: {word('FUNC')} jog(a, b) {{ {word('RETURN')} a + b }}"
        name = self.expect("NAME", "a function name", example)
        params, defaults = self.parameters(example)
        body = self.function_body(is_method)
        return ast.FuncDef(name.value, params, body, token.line, defaults)

    def class_definition(self):
        token = self.advance()
        example = f"For example: {word('CLASS')} Manush {{ {word('FUNC')} shuru(nam) {{ {word('THIS')}.nam = nam }} }}"
        name = self.expect("NAME", "a shreni name", example)
        parent = None
        if self.match("FROM"):
            parent = self.expression()
        open_brace = self.open_block(word("CLASS"))
        methods = []
        while True:
            self.skip_newlines()
            if self.check("}"):
                self.advance()
                break
            if self.check("EOF"):
                raise self.missing_close(open_brace)
            if not self.check("FUNC"):
                raise self.error(
                    f"Only {word('FUNC')} (methods) can go inside a {word('CLASS')}. {example}"
                )
            methods.append(self.function_definition(is_method=True))
        return ast.ClassDef(name.value, parent, methods, token.line)

    def return_statement(self):
        token = self.advance()
        if self.func_depth == 0:
            raise self.error(f"'{token.value}' can only be used inside a {word('FUNC')}.", token)
        value = None
        if not self.check("NEWLINE", "EOF", "}"):
            value = self.expression()
        self.end_of_statement()
        return ast.ReturnStmt(value, token.line)

    def try_statement(self):
        token = self.advance()
        body = self.block(word("TRY"))
        error_name = None
        handler = None
        if self.next_is_else():
            self.advance()  # nahole
            if self.check("IF"):
                raise self.error(
                    f"'{word('ELSE')} {word('IF')}' can't follow '{word('TRY')}'. "
                    f"Write: {word('TRY')} {{ ... }} {word('ELSE')} {{ ... }}"
                )
            if self.check("NAME"):
                error_name = self.advance().value
            handler = self.block(word("ELSE"))
        return ast.TryStmt(body, error_name, handler, token.line)

    def throw_statement(self):
        token = self.advance()
        value = self.expression()
        self.end_of_statement()
        return ast.ThrowStmt(value, token.line)

    def import_statement(self):
        token = self.advance()
        path = self.expect("STRING", "a file name in quotes", f'For example: {word("IMPORT")} "hishab.be"')
        self.end_of_statement()
        return ast.ImportStmt(path.value, token.line, path.col)

    def expression_statement(self):
        start = self.current
        expr = self.expression()
        if self.check(*ASSIGN_OPS):
            op_token = self.advance()
            if not isinstance(expr, (ast.Name, ast.Index, ast.Attribute)):
                raise self.error(
                    "A value can only be stored in a variable, a list item (t[0]), "
                    'a dictionary key (m["k"]) or a field (obj.name).',
                    op_token,
                )
            value = self.expression()
            self.end_of_statement()
            return ast.AssignStmt(expr, op_token.type, value, start.line, start.col)
        self.end_of_statement(first=start if isinstance(expr, ast.Name) else None)
        return ast.ExprStmt(expr, start.line)

    # ---- expressions -------------------------------------------------------

    def expression(self):
        return self.or_expr()

    def or_expr(self):
        left = self.and_expr()
        while self.next_line_continues("OR"):
            token = self.advance()
            self.skip_newlines()
            left = ast.Logical("OR", left, self.and_expr(), token.line)
        return left

    def and_expr(self):
        left = self.not_expr()
        while self.next_line_continues("AND"):
            token = self.advance()
            self.skip_newlines()
            left = ast.Logical("AND", left, self.not_expr(), token.line)
        return left

    def not_expr(self):
        if self.check("NOT"):
            token = self.advance()
            return ast.Unary("NOT", self.not_expr(), token.line, token.col)
        return self.comparison()

    def comparison(self):
        left = self.sum()
        if self.next_line_continues(*COMPARISON_OPS):
            token = self.advance()
            self.skip_newlines()
            left = ast.BinOp(token.type, left, self.sum(), token.line, token.col)
            if self.check(*COMPARISON_OPS):
                raise self.error(
                    "Two comparisons can't be chained. Instead of 1 < x < 10, write: "
                    f"1 < x {word('AND')} x < 10"
                )
        return left

    def sum(self):
        left = self.product()
        while self.check("-") or self.next_line_continues("+"):
            token = self.advance()
            self.skip_newlines()
            left = ast.BinOp(token.type, left, self.product(), token.line, token.col)
        return left

    def product(self):
        left = self.unary()
        while self.next_line_continues("*", "/", "%"):
            token = self.advance()
            self.skip_newlines()
            left = ast.BinOp(token.type, left, self.unary(), token.line, token.col)
        return left

    def unary(self):
        if self.check("-"):
            token = self.advance()
            return ast.Unary("-", self.unary(), token.line, token.col)
        return self.postfix()

    def postfix(self):
        expr = self.primary()
        while True:
            if self.check("("):
                token = self.advance()
                args, kwargs = self.call_arguments()
                expr = ast.Call(expr, args, kwargs, token.line, token.col)
            elif self.check("["):
                token = self.advance()
                self.skip_newlines()
                index = self.expression()
                self.skip_newlines()
                self.expect("]", "']'")
                expr = ast.Index(expr, index, token.line, token.col)
            elif self.next_line_continues("."):
                self.advance()
                name = self.expect("NAME", "a name after '.'", "For example: manush.nam")
                expr = ast.Attribute(expr, name.value, name.line, name.col)
            else:
                return expr

    def call_arguments(self):
        """Read the inputs of a call: f(1, 2, nam = "Shuvo")."""
        args, kwargs = [], []
        self.skip_newlines()
        while not self.check(")"):
            if self.check("NAME") and self.peek_type(1) == "=":
                name = self.advance()
                self.advance()  # =
                if any(existing == name.value for existing, _ in kwargs):
                    raise self.error(f"The input '{name.value}' is given twice.", name)
                kwargs.append((name.value, self.expression()))
            else:
                if kwargs:
                    raise self.error("Inputs without a name must come before named inputs (like nam = value).")
                args.append(self.expression())
            self.skip_newlines()
            if not self.match(","):
                break
            self.skip_newlines()
        self.skip_newlines()
        self.expect(")", "')'", "Did you forget a comma (,)?")
        return args, kwargs

    def comma_list(self, closer, read_item):
        """Read items separated by commas until `closer`. New lines are allowed inside."""
        items = []
        self.skip_newlines()
        while not self.check(closer):
            items.append(read_item())
            self.skip_newlines()
            if not self.match(","):
                break
            self.skip_newlines()
        self.skip_newlines()
        self.expect(closer, f"'{closer}'", "Did you forget a comma (,)?")
        return items

    def primary(self):
        token = self.current

        if token.type == "NUMBER":
            self.advance()
            return ast.Number(token.value, token.line)
        if token.type == "STRING":
            self.advance()
            return ast.String(token.value, token.line)
        if token.type == "TEMPLATE":
            self.advance()
            return self.template(token)
        if token.type == "TRUE":
            self.advance()
            return ast.Bool(True, token.line)
        if token.type == "FALSE":
            self.advance()
            return ast.Bool(False, token.line)
        if token.type == "NULL":
            self.advance()
            return ast.Null(token.line)
        if token.type == "NAME":
            self.advance()
            return ast.Name(token.value, token.line, token.col)
        if token.type == "THIS":
            if self.method_depth == 0:
                raise self.error(f"'{word('THIS')}' can only be used inside a method of a {word('CLASS')}.")
            self.advance()
            return ast.This(token.line, token.col)
        if token.type == "SUPER":
            if self.method_depth == 0:
                raise self.error(f"'{word('SUPER')}' can only be used inside a method of a {word('CLASS')}.")
            self.advance()
            self.expect(".", f"'.' after '{word('SUPER')}'", f"For example: {word('SUPER')}.shuru(nam)")
            name = self.expect("NAME", "a method name", f"For example: {word('SUPER')}.shuru(nam)")
            return ast.SuperAttr(name.value, name.line, name.col)
        if token.type == "FUNC" and self.peek_type(1) == "(":
            # kaj (x) { ... } used as a value
            self.advance()
            params, defaults = self.parameters(f"For example: {word('FUNC')} (x) {{ {word('RETURN')} x * 2 }}")
            body = self.function_body(is_method=self.method_depth > 0)
            return ast.FuncExpr(params, body, token.line, defaults)
        if token.type == "(":
            self.advance()
            self.skip_newlines()
            expr = self.expression()
            self.skip_newlines()
            self.expect(")", "')'", "Did you forget to close the bracket?")
            return expr
        if token.type == "[":
            self.advance()
            items = self.comma_list("]", self.expression)
            return ast.ListLiteral(items, token.line)
        if token.type == "{":
            self.advance()
            pairs = self.comma_list("}", self.dict_pair)
            return ast.DictLiteral(pairs, token.line)

        if token.type in ("NEWLINE", "EOF"):
            raise self.error(
                f"This line is unfinished. Expected a value here, but found {describe(token, self.eof_word)}."
            )
        raise self.error(f"BE didn't expect {describe(token)} here.")

    def template(self, token):
        """"Amar nam {nam}" -> Template(["Amar nam ", Name("nam")])"""
        parts = []
        for part in token.value:
            if not isinstance(part, TemplatePart):
                parts.append(part)
                continue
            inner = Parser(tokenize(part.source, part.line, part.col))
            inner.eof_word = "'}'"
            inner.method_depth = self.method_depth
            expr = inner.expression()
            if not inner.check("EOF"):
                raise inner.error("Write one value inside { }, like {nam} or {boyosh + 1}.")
            parts.append(expr)
        return ast.Template(parts, token.line)

    def dict_pair(self):
        key = self.expression()
        self.skip_newlines()
        self.expect(":", "':'", 'Dictionaries are written like this: {"nam": "Shuvo", "boyosh": 22}')
        self.skip_newlines()
        value = self.expression()
        return (key, value)


def parse(source):
    """Shortcut: turn BE source text into a Program tree."""
    return Parser(tokenize(source)).parse_program()
