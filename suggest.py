"""
"Did you mean...?" hints.

When you misspell something, BE looks for the closest word it knows and
suggests it: 'dekhaoo' -> "Did you mean 'dekhao'?"
"""

import difflib

from .keywords import WORD_FOR, WORD_TO_JOB

CUTOFF = 0.75  # how similar (0 to 1) a word must be before BE suggests it


# English words people know (from English or from Python), and the BE word for each.
# A mistake like print("hi") or server() then says: Did you mean 'dekhao'? / Did you mean 'website'?
# Keywords are named by their job, so a renamed keyword (be/keywords.py) is still suggested.
KEYWORD_HINTS = {
    "print": "PRINT", "let": "LET", "var": "LET", "if": "IF", "then": "THEN", "else": "ELSE", "elif": "ELSE",
    "while": "WHILE", "for": "FOR", "times": "TIMES", "each": "EACH", "until": "UNTIL", "step": "STEP",
    "break": "BREAK", "continue": "CONTINUE", "def": "FUNC", "function": "FUNC", "func": "FUNC", "return": "RETURN",
    "class": "CLASS", "self": "THIS", "this": "THIS", "super": "SUPER", "import": "IMPORT", "try": "TRY",
    "except": "ELSE", "catch": "ELSE", "raise": "THROW", "throw": "THROW", "True": "TRUE", "true": "TRUE",
    "False": "FALSE", "false": "FALSE", "None": "NULL", "null": "NULL", "and": "AND", "or": "OR", "not": "NOT",
}
# Ready-made functions: these are suggested anywhere
NAME_HINTS = {
    "input": "jiggesh", "len": "lomba", "int": "shonkha", "float": "shonkha", "str": "lekha", "type": "dhoron",
    "append": "jukto", "max": "boro", "min": "choto", "sum": "jogfol", "sorted": "shajao", "reversed": "ulta",
    "round": "gol", "sqrt": "borgomul", "abs": "poromman", "sleep": "ghumao", "server": "website",
}
# Methods and fields: suggested only on a window, a website or a dictionary that has the BE word
FIELD_HINTS = {
    "path": "pata", "route": "pata", "folder": "fileguli", "static": "fileguli", "run": "chalao", "test": "porikkha",
    "params": "ongsho", "form": "ghor", "query": "prosno", "method": "poddhoti", "body": "lekha",
    "headers": "tottho", "status": "abostha", "type": "dhoron", "text": "lekha", "label": "lekha",
    "button": "botam", "entry": "ghor", "input": "ghor", "row": "sari", "color": "rong", "background": "pechon",
    "size": "akar", "close": "bondho", "after": "pore", "split": "bhag", "join": "jora", "replace": "bodlao",
    "upper": "boro_hater", "lower": "choto_hater", "strip": "parishkar", "keys": "chabi", "values": "man",
    "pop": "bad_dao", "index": "kothay", "find": "kothay",
}


def english_hints(fields):
    """The English word -> BE word table. fields=True adds method and field names."""
    table = {word: WORD_FOR[job] for word, job in KEYWORD_HINTS.items()}
    table.update(NAME_HINTS)
    if fields:
        table.update(FIELD_HINTS)
    return table


def closest(word, candidates, fields=True):
    """The candidate most like `word`, or None if nothing is close enough.
    An English word with a BE meaning (print -> dekhao) is suggested first."""
    candidates = [c for c in candidates if c != word]
    english = english_hints(fields).get(word)
    if english in candidates:
        return english
    lowered = {c.lower(): c for c in candidates}
    if word.lower() in lowered:
        return lowered[word.lower()]  # only the capital letters are different
    matches = difflib.get_close_matches(word.lower(), list(lowered), n=1, cutoff=CUTOFF)
    return lowered[matches[0]] if matches else None


def closest_keyword(word, jobs=None):
    """The keyword most like `word`, or None. `jobs` limits the search, e.g. {"FROM"}."""
    words = [w for w, job in WORD_TO_JOB.items() if jobs is None or job in jobs]
    return closest(word, words)


def hint(suggestion):
    return f" Did you mean '{suggestion}'?" if suggestion else ""
