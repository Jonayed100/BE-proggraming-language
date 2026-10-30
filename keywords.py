"""
BE keywords.

Every keyword in BE lives in this one file. Each keyword has exactly one
spelling, written in English letters (Banglish).

The CAPITAL name on the left is the keyword's job inside BE. Never change it.
The word on the right is what people type. To rename a keyword, change only
the word on the right. For example, to make print `lekho`:

    "PRINT": "lekho",

The old word stops working, so replace it in the examples and tests too
(in VS Code: Ctrl+Shift+H, turn on Match Whole Word, Replace All). Then run:

    python tools/sync.py
    python -m pytest

sync.py updates the VS Code colors and the JavaScript version to match.
"""

KEYWORDS = {
    # Variables and printing
    "LET": "dhoro",          # dhoro x = 5            (optional: x = 5 also works)
    "PRINT": "dekhao",       # dekhao "Hello", x

    # Decisions
    "IF": "jodi",            # jodi x > 5 { ... }
    "THEN": "tahole",        # optional: jodi x > 5 tahole { ... }
    "ELSE": "nahole",        # nahole { ... }   nahole jodi ... { ... }

    # Loops
    "WHILE": "jotokkhon",    # jotokkhon x < 10 { ... }
    "FOR": "ghuro",          # ghuro i = 1 theke 10 { ... }
    "TIMES": "bar",          # ghuro 5 bar { ... }
    "EACH": "protiti",       # protiti phol fol theke { ... }
    "FROM": "theke",         # used by ghuro, protiti and shreni
    "UNTIL": "porjonto",     # optional: ghuro i = 1 theke 10 porjonto { ... }
    "STEP": "dhap",          # ghuro i = 0 theke 10 dhap 2 { ... }
    "BREAK": "thamo",        # stop the loop now
    "CONTINUE": "agao",      # skip to the next round of the loop

    # Functions, classes and files
    "FUNC": "kaj",           # kaj jog(a, b) { ferot a + b }    or    kaj (x) { ... }
    "RETURN": "ferot",       # ferot a + b
    "CLASS": "shreni",       # shreni Manush { kaj shuru(nam) { ei.nam = nam } }
    "THIS": "ei",            # the object a method was called on
    "SUPER": "upor",         # upor.shuru(nam): call the parent shreni's method
    "IMPORT": "anao",        # anao "hishab.be"

    # Mistakes
    "TRY": "chesta",         # chesta { ... } nahole bhul { ... }
    "THROW": "chhuro",       # chhuro "Something went wrong"

    # Values
    "TRUE": "sotti",         # true
    "FALSE": "mittha",       # false
    "NULL": "kichuna",       # nothing / no value

    # Logic
    "AND": "ebong",          # x > 1 ebong x < 10
    "OR": "othoba",          # x < 1 othoba x > 10
    "NOT": "na",             # na sotti  -> false
    "IN": "moddhe",          # "a" moddhe ["a", "b"]  -> true
}


def _check():
    seen = {}
    for job, spelling in KEYWORDS.items():
        if not isinstance(spelling, str) or not spelling.isascii() or not spelling.isidentifier():
            raise ValueError(f"keywords.py: '{spelling}' can't be a keyword. Use English letters, digits and _ only.")
        if spelling in seen:
            raise ValueError(f"keywords.py: '{spelling}' is used twice ({seen[spelling]} and {job}). Pick another word.")
        seen[spelling] = job
    return {spelling: job for job, spelling in KEYWORDS.items()}


# word -> job, e.g. "jodi" -> "IF"
WORD_TO_JOB = _check()

# job -> word, e.g. "IF" -> "jodi"
WORD_FOR = dict(KEYWORDS)
