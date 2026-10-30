"""
BE syntax tree nodes.

The parser turns tokens into a tree made of these small objects. Each class is
one kind of thing a BE program can contain. For example

    dhoro x = 2 + 3

becomes

    LetStmt(name="x", value=BinOp("+", Number(2), Number(3)))

The interpreter (interpreter.py) walks this tree and runs it.
`line` and `col` remember where each piece was written, for error messages.
"""

from dataclasses import dataclass, field


# ---------------------------------------------------------------- expressions
# Expressions are things that produce a value: 5, "hello", x + 1, jog(2, 3)


@dataclass
class Number:
    value: object
    line: int = 0


@dataclass
class String:
    value: str
    line: int = 0


@dataclass
class Template:
    parts: list  # plain text (str) and expressions, joined together when run
    line: int = 0


@dataclass
class Bool:
    value: bool
    line: int = 0


@dataclass
class Null:
    line: int = 0


@dataclass
class ListLiteral:
    items: list
    line: int = 0


@dataclass
class DictLiteral:
    pairs: list  # list of (key expression, value expression)
    line: int = 0


@dataclass
class Name:
    name: str
    line: int = 0
    col: int = 0


@dataclass
class BinOp:
    op: str  # + - * / % == != < > <= >= IN
    left: object
    right: object
    line: int = 0
    col: int = 0


@dataclass
class Logical:
    op: str  # AND / OR
    left: object
    right: object
    line: int = 0


@dataclass
class Unary:
    op: str  # "-" or NOT
    operand: object
    line: int = 0
    col: int = 0


@dataclass
class Call:
    callee: object
    args: list
    kwargs: list = field(default_factory=list)  # named inputs: list of (name, expression)
    line: int = 0
    col: int = 0


@dataclass
class Attribute:
    target: object  # obj.name
    name: str
    line: int = 0
    col: int = 0


@dataclass
class This:
    line: int = 0  # ei
    col: int = 0


@dataclass
class SuperAttr:
    name: str      # upor.name
    line: int = 0
    col: int = 0


@dataclass
class FuncExpr:
    params: list   # kaj (a, b) { ... } used as a value
    body: object
    line: int = 0
    defaults: dict = field(default_factory=dict)  # input name -> default value expression


@dataclass
class Index:
    target: object
    index: object
    line: int = 0
    col: int = 0


# ----------------------------------------------------------------- statements
# Statements are things that do something: make a variable, print, loop.


@dataclass
class Block:
    statements: list = field(default_factory=list)


@dataclass
class LetStmt:
    name: str
    value: object
    line: int = 0


@dataclass
class AssignStmt:
    target: object  # Name, Index or Attribute
    op: str         # "=", "+=", "-=", "*=", "/="
    value: object
    line: int = 0
    col: int = 0


@dataclass
class PrintStmt:
    values: list
    line: int = 0


@dataclass
class IfStmt:
    branches: list  # list of (condition, Block)
    else_block: object = None
    line: int = 0


@dataclass
class WhileStmt:
    condition: object
    body: Block
    line: int = 0


@dataclass
class ForRangeStmt:
    var: str
    start: object
    end: object
    step: object  # None means "count by 1 (or -1)"
    body: Block
    line: int = 0


@dataclass
class RepeatStmt:
    count: object  # ghuro 5 bar { ... }
    body: Block
    line: int = 0


@dataclass
class ForEachStmt:
    var: str
    iterable: object
    body: Block
    line: int = 0


@dataclass
class BreakStmt:
    line: int = 0


@dataclass
class ContinueStmt:
    line: int = 0


@dataclass
class FuncDef:
    name: str
    params: list
    body: Block
    line: int = 0
    defaults: dict = field(default_factory=dict)  # input name -> default value expression


@dataclass
class ReturnStmt:
    value: object
    line: int = 0


@dataclass
class ClassDef:
    name: str
    parent: object   # expression for the parent shreni, or None
    methods: list    # FuncDef nodes
    line: int = 0


@dataclass
class ThrowStmt:
    value: object
    line: int = 0


@dataclass
class TryStmt:
    body: Block
    error_name: object  # the variable that gets the error message, or None
    handler: object     # the nahole block, or None
    line: int = 0


@dataclass
class ImportStmt:
    path: str
    line: int = 0
    col: int = 0


@dataclass
class ExprStmt:
    expr: object
    line: int = 0


@dataclass
class Program:
    statements: list
