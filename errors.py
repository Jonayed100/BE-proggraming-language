"""
BE errors.

Every mistake BE can report is one of the classes below. Each has a kind
("Syntax error", "Name error", ...), a message, and the line and column where
it happened.
"""


class BeError(Exception):
    """Base class for every BE error."""

    kind = "Error"

    def __init__(self, message, line=None, col=None):
        super().__init__(message)
        self.message = message
        self.line = line
        self.col = col
        # Set when the mistake is inside a file brought in with `anao`.
        self.filename = None
        self.source = None

    def __str__(self):
        if self.line is not None:
            return f"{self.kind} (line {self.line}): {self.message}"
        return f"{self.kind}: {self.message}"


class BeSyntaxError(BeError):
    """The code is written wrongly, so BE can't understand it."""

    kind = "Syntax error"


class BeNameError(BeError):
    """A variable or function name was used before it was made."""

    kind = "Name error"


class BeTypeError(BeError):
    """An operation was used on the wrong kind of value."""

    kind = "Type error"


class BeRuntimeError(BeError):
    """Something went wrong while the program was running."""

    kind = "Runtime error"


class BeThrownError(BeError):
    """An error the program raised itself with `chhuro`."""

    kind = "Error"


def format_error(error, source=None, filename=None):
    """Turn a BeError into a friendly multi-line message.

    If the source code is given, the wrong line is shown too, with a ^ under
    the exact spot when BE knows the column.
    """
    where = f" [{filename}]" if filename else ""
    text = f"{error}{where}"
    if source is not None and error.line is not None:
        lines = source.splitlines()
        if 1 <= error.line <= len(lines):
            code_line = lines[error.line - 1]
            text += "\n    " + code_line.rstrip()
            if error.col is not None and error.col >= 1:
                # Keep tabs as tabs so the ^ lines up with the code above it.
                padding = "".join(
                    ch if ch == "\t" else " " for ch in code_line[: error.col - 1]
                )
                text += "\n    " + padding + "^"
    return text
