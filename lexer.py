"""
BE lexer (also called a tokenizer).

The lexer reads the program as plain text and cuts it into small pieces called
tokens. For example

    dhoro boyosh = 22

becomes five tokens:

    LET   NAME(boyosh)   =   NUMBER(22)   NEWLINE

The parser (parser.py) then reads these tokens instead of raw text.

BE code is written in English letters. Bangla or any other letters may only
appear inside text (" ") and comments (#).

The lexer also understands text templates: "Amar nam {nam}" puts the value of
nam inside the text.
"""

from dataclasses import dataclass

from .errors import BeSyntaxError
from .keywords import WORD_TO_JOB


@dataclass
class Token:
    type: str      # what kind of token: NAME, NUMBER, STRING, LET, "+", ...
    value: object  # the actual text or number
    line: int      # line number, starting at 1
    col: int       # column number, starting at 1
    start: int = 0  # position in the source text where the token starts
    end: int = 0    # position just after the token ends

    def __repr__(self):
        return f"Token({self.type}, {self.value!r}, line {self.line})"


@dataclass
class TemplatePart:
    """A {...} piece inside a text template, still as raw source code."""

    source: str
    line: int
    col: int
    offset: int = 0  # where the code starts in the whole program text


# Symbols made of two characters must be checked before one-character symbols,
# otherwise "==" would be read as "=" followed by "=".
TWO_CHAR_SYMBOLS = {"==", "!=", "<=", ">=", "+=", "-=", "*=", "/="}
ONE_CHAR_SYMBOLS = set("+-*/%=<>(){}[],:.")

ESCAPES = {"n": "\n", "t": "\t", "\\": "\\", '"': '"', "'": "'", "0": "\0", "{": "{", "}": "}"}


def _is_digit(ch):
    return ch != "" and "0" <= ch <= "9"


def _starts_name(ch):
    return ch != "" and (ch == "_" or ("a" <= ch <= "z") or ("A" <= ch <= "Z"))


def _continues_name(ch):
    return _starts_name(ch) or _is_digit(ch)


class Lexer:
    def __init__(self, source, line=1, col=1):
        self.source = source
        self.pos = 0
        self.line = line
        self.col = col
        self.tokens = []

    # ---- small helpers -------------------------------------------------

    def peek(self, offset=0):
        index = self.pos + offset
        return self.source[index] if index < len(self.source) else ""

    def advance(self):
        ch = self.source[self.pos]
        self.pos += 1
        if ch == "\n":
            self.line += 1
            self.col = 1
        else:
            self.col += 1
        return ch

    def add(self, type_, value, line, col, start):
        self.tokens.append(Token(type_, value, line, col, start, self.pos))

    # ---- main loop -----------------------------------------------------

    def tokenize(self):
        while self.pos < len(self.source):
            ch = self.peek()
            line, col, start = self.line, self.col, self.pos

            if ch in " \t\r\ufeff\u00a0":
                self.advance()

            elif ch == "#":
                # A comment: skip everything until the end of the line.
                while self.pos < len(self.source) and self.peek() != "\n":
                    self.advance()

            elif ch == "\n":
                self.advance()
                # Several empty lines in a row become one NEWLINE token.
                if not self.tokens or self.tokens[-1].type != "NEWLINE":
                    self.add("NEWLINE", "\\n", line, col, start)

            elif ch == ";":
                # A semicolon works like pressing Enter.
                self.advance()
                if self.tokens and self.tokens[-1].type != "NEWLINE":
                    self.add("NEWLINE", ";", line, col, start)

            elif _is_digit(ch):
                self.read_number(line, col, start)

            elif ch in "\"'":
                self.read_string(line, col, start)

            elif _starts_name(ch):
                self.read_name(line, col, start)

            elif ch + self.peek(1) in TWO_CHAR_SYMBOLS:
                symbol = self.advance() + self.advance()
                self.add(symbol, symbol, line, col, start)

            elif ch in ONE_CHAR_SYMBOLS:
                self.advance()
                self.add(ch, ch, line, col, start)

            elif not ch.isascii():
                raise BeSyntaxError(
                    f"'{ch}' can't be used in code. BE code is written in English letters; "
                    "Bangla and other letters can only go inside text (\" \") or comments (#).",
                    line,
                    col,
                )

            else:
                raise BeSyntaxError(f"BE doesn't understand the symbol '{ch}'. Remove it or fix it.", line, col)

        self.add("EOF", None, self.line, self.col, self.pos)
        return self.tokens

    # ---- pieces ----------------------------------------------------------

    def read_number(self, line, col, start):
        text = ""
        while _is_digit(self.peek()):
            text += self.advance()
        if self.peek() == "." and _is_digit(self.peek(1)):
            text += self.advance()
            while _is_digit(self.peek()):
                text += self.advance()
            self.add("NUMBER", float(text), line, col, start)
        else:
            self.add("NUMBER", int(text), line, col, start)

    def read_string(self, line, col, start):
        quote = self.advance()
        parts = []   # pieces of plain text and TemplateParts
        chars = []   # plain text collected so far
        while True:
            if self.pos >= len(self.source) or self.peek() == "\n":
                raise BeSyntaxError(
                    f"This text never ends. Did you forget the closing {quote}?",
                    line,
                    col,
                )
            ch = self.peek()
            if ch == quote:
                self.advance()
                break
            if ch == "\\":
                self.advance()
                if self.pos >= len(self.source):
                    continue
                code = self.advance()
                chars.append(ESCAPES.get(code, "\\" + code))
            elif ch == "{":
                if chars:
                    parts.append("".join(chars))
                    chars = []
                parts.append(self.read_template_part(quote))
            elif ch == "}":
                raise BeSyntaxError(
                    "This '}' inside text has no '{' before it. To write a plain '}', type \\}",
                    self.line,
                    self.col,
                )
            else:
                chars.append(self.advance())
        if chars or not parts:
            parts.append("".join(chars))
        if len(parts) == 1 and isinstance(parts[0], str):
            self.add("STRING", parts[0], line, col, start)
        else:
            self.add("TEMPLATE", parts, line, col, start)

    def read_template_part(self, quote):
        """Read the {...} inside a template and return it as raw code."""
        open_line, open_col = self.line, self.col
        self.advance()  # the {
        code_line, code_col, code_start = self.line, self.col, self.pos
        depth = 0
        code = []
        inner_quote = None
        while True:
            if self.pos >= len(self.source) or self.peek() == "\n" or (
                self.peek() == quote and inner_quote is None
            ):
                raise BeSyntaxError(
                    "A '{' inside text is never closed with '}'. To write a plain '{', type \\{",
                    open_line,
                    open_col,
                )
            ch = self.advance()
            if inner_quote is not None:
                if ch == inner_quote:
                    inner_quote = None
            elif ch in "\"'":
                inner_quote = ch
            elif ch == "{":
                depth += 1
            elif ch == "}":
                if depth == 0:
                    break
                depth -= 1
            code.append(ch)
        text = "".join(code)
        if not text.strip():
            raise BeSyntaxError(
                "Put something inside { }, like {nam}. To write plain braces, type \\{ \\}",
                open_line,
                open_col,
            )
        return TemplatePart(text, code_line, code_col, code_start)

    def read_name(self, line, col, start):
        text = self.advance()
        while self.pos < len(self.source) and _continues_name(self.peek()):
            text += self.advance()
        self.add(WORD_TO_JOB.get(text, "NAME"), text, line, col, start)


def tokenize(source, line=1, col=1):
    """Shortcut: turn source text into a list of tokens."""
    return Lexer(source, line, col).tokenize()
