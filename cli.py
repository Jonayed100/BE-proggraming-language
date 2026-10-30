"""
BE command line.

This file makes the `be` command work in the terminal:

    be run hello.be     run a file
    be hello.be         same thing
    be                  interactive mode (type code line by line)
    be --version        show the version
    be --help           show help
"""

import os
import sys

from . import __version__
from .errors import BeError, BeSyntaxError, format_error
from .interpreter import Interpreter
from .lexer import tokenize
from .parser import parse

HELP = f"""BE {__version__} - the Banglish programming language

Usage:
  be run file.be      run a file
  be file.be          same as above
  be                  interactive mode: type code line by line
  be --version        show the version
  be --help           show this help

Example file, hello.be:
  dhoro nam = "Shuvo"
  dekhao "Amar nam {{nam}}"
"""

OPENERS = {"(", "[", "{"}
CLOSERS = {")", "]", "}"}
EXIT_WORDS = {"exit", "quit", "ber"}

RED = "\033[31m"
DIM = "\033[2m"
RESET = "\033[0m"


def configure_output():
    """Make sure all letters print correctly, even on older Windows terminals."""
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8")
        except (AttributeError, ValueError):
            pass
    if os.name == "nt":
        os.system("")  # turns on colors in older Windows terminals


def colors_on(stream):
    return stream.isatty() and "NO_COLOR" not in os.environ


def paint(text, color, stream):
    return f"{color}{text}{RESET}" if colors_on(stream) else text


def show_error(error, source, filename, stream=None):
    """Print a BE error in red, with the wrong line and a ^ under the problem."""
    stream = stream or sys.stderr
    if error.source is not None:
        source, filename = error.source, error.filename  # the mistake is in an `anao` file
    text = format_error(error, source, filename)
    first, _, rest = text.partition("\n")
    print(paint(first, RED, stream) + ("\n" + rest if rest else ""), file=stream)


def read_source(path):
    """Read a .be file. Returns (source, path, problem)."""
    if not os.path.exists(path) and os.path.exists(path + ".be"):
        path += ".be"  # `be run hello` also finds hello.be
    if not os.path.exists(path):
        return None, path, f"File not found: {path}\nYou are in this folder: {os.getcwd()}"
    if os.path.isdir(path):
        return None, path, f"{path} is a folder, not a file. Give the name of a .be file."
    try:
        with open(path, encoding="utf-8-sig") as handle:  # utf-8-sig also handles Notepad files
            return handle.read(), path, None
    except UnicodeDecodeError:
        return None, path, f"Couldn't read {path}. Save the file with UTF-8 encoding."


def run_file(path):
    source, path, problem = read_source(path)
    if problem:
        print(problem, file=sys.stderr)
        return 1
    interpreter = Interpreter()
    try:
        interpreter.run(parse(source), path=path)
    except BeError as error:
        sys.stdout.flush()
        show_error(error, source, os.path.basename(path))
        return 1
    except KeyboardInterrupt:
        print("\nProgram stopped (Ctrl+C).", file=sys.stderr)
        return 130
    except BrokenPipeError:
        # The output was closed early (for example, piped into `head`). Stop quietly.
        devnull = os.open(os.devnull, os.O_WRONLY)
        os.dup2(devnull, sys.stdout.fileno())
        return 0
    return 0


def needs_more_lines(source):
    """In interactive mode, keep reading while a { [ or ( is still open."""
    try:
        tokens = tokenize(source)
    except BeSyntaxError:
        return False  # let the parser show the real error
    depth = 0
    for token in tokens:
        if token.type in OPENERS:
            depth += 1
        elif token.type in CLOSERS:
            depth -= 1
    return depth > 0


def repl():
    try:
        import readline  # noqa: F401  (arrow keys and history on Mac and Linux)
    except ImportError:
        pass
    print(f"BE {__version__} - the Banglish programming language")
    print(paint("Type code and press Enter. Type exit to leave.", DIM, sys.stdout))
    interpreter = Interpreter()
    buffer = []
    while True:
        prompt = "be> " if not buffer else "... "
        try:
            line = input(prompt)
        except EOFError:
            print()
            break
        except KeyboardInterrupt:
            print("\n(Type exit to leave)")
            buffer = []
            continue

        if not buffer and line.strip().lower() in EXIT_WORDS:
            break
        buffer.append(line)
        source = "\n".join(buffer)
        if needs_more_lines(source):
            continue
        buffer = []
        try:
            interpreter.run(parse(source), echo=True)
        except BeError as error:
            show_error(error, source, None, sys.stdout)
        except KeyboardInterrupt:
            print("\nStopped.")
    print("Bye!")
    return 0


def main(argv=None):
    args = sys.argv[1:] if argv is None else argv
    configure_output()

    if not args:
        return repl()

    first = args[0]
    if first in ("-h", "--help", "help"):
        print(HELP)
        return 0
    if first in ("-v", "--version", "version"):
        print(f"BE {__version__}")
        return 0
    if first == "run":
        if len(args) < 2:
            print("Which file? For example: be run hello.be", file=sys.stderr)
            return 2
        return run_file(args[1])
    return run_file(first)
