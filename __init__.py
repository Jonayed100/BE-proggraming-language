"""
BE - the Banglish programming language.

Write code with Bangla words in English letters:

    dhoro nam = "Shuvo"
    dekhao "Amar nam {nam}"

    shreni Manush {
        kaj shuru(nam) { ei.nam = nam }
        kaj parichoy() { ferot "Ami {ei.nam}" }
    }

Created by Jonayed Hossain.
"""

from .errors import BeError
from .interpreter import Interpreter
from .parser import parse

__version__ = "3.0.0"


def run_source(source, output=None, input_fn=None, path=None):
    """Run BE code given as a string. Handy for tests and for using BE from Python.

    `path` is the file the code came from, so `anao` can find files next to it.
    """
    interpreter = Interpreter(output=output, input_fn=input_fn)
    interpreter.run(parse(source), path=path)
    return interpreter


__all__ = ["BeError", "Interpreter", "parse", "run_source", "__version__"]
