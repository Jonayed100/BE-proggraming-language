"""
Keep everything in step with be/keywords.py and the built-in functions.

Run this from the project folder after you change a keyword or add a
built-in function:

    python tools/sync.py

It rewrites:
  - vscode-be/syntaxes/be.tmLanguage.json  (VS Code colors)
  - vscode-be/package.json                 (version number)
  - vscode-be/be-language-<version>.vsix    (the VS Code package to install)
  - playground/keywords.js                  (keywords for the JavaScript version)
  - playground/examples.js                  (the examples shown in the playground)
  - playground/be-web.js                    (keywords.js + be.js in one file, for your own web pages)
  - playground/lessons.js                   (the Learn BE lessons, from learn/course.md)
  - installer/be.iss                        (the version number of the Windows installer)
"""

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from be import __version__  # noqa: E402
from be.builtin_functions import BUILTINS  # noqa: E402
from be.computer import ALSO_IN_BROWSER, BROWSER_ONLY, COMPUTER_BUILTINS  # noqa: E402
from be.keywords import KEYWORDS  # noqa: E402
from be.suggest import FIELD_HINTS, english_hints  # noqa: E402

GROUPS = {
    "keyword-control": ("keyword.control.be", [
        "PRINT", "IF", "THEN", "ELSE", "WHILE", "FOR", "TIMES", "EACH", "FROM",
        "UNTIL", "STEP", "BREAK", "CONTINUE", "RETURN", "TRY", "THROW", "IMPORT",
    ]),
    "keyword-declaration": ("storage.type.be", ["LET", "FUNC", "CLASS"]),
    "keyword-logic": ("keyword.operator.logical.be", ["AND", "OR", "NOT", "IN"]),
    "constant": ("constant.language.be", ["TRUE", "FALSE", "NULL", "THIS", "SUPER"]),
}

NAME = r"[A-Za-z_][A-Za-z0-9_]*"


def words_regex(words):
    alternatives = "|".join(sorted(set(words), key=len, reverse=True))
    return rf"\b({alternatives})\b"


def make_grammar():
    builtin_names = list(BUILTINS) + [n for n in COMPUTER_BUILTINS if n not in BUILTINS]
    repository = {
        "comment": {"name": "comment.line.number-sign.be", "match": "#.*$"},
        "template": {
            "name": "meta.template.expression.be",
            "begin": r"(?<!\\)\{",
            "end": r"\}",
            "beginCaptures": {"0": {"name": "punctuation.section.embedded.begin.be"}},
            "endCaptures": {"0": {"name": "punctuation.section.embedded.end.be"}},
            "patterns": [{"include": "#code"}],
        },
        "string-double": {
            "name": "string.quoted.double.be",
            "begin": '"',
            "end": '"|$',
            "patterns": [{"name": "constant.character.escape.be", "match": r"\\."}, {"include": "#template"}],
        },
        "string-single": {
            "name": "string.quoted.single.be",
            "begin": "'",
            "end": "'|$",
            "patterns": [{"name": "constant.character.escape.be", "match": r"\\."}, {"include": "#template"}],
        },
        "definition": {
            "match": rf"\b({KEYWORDS['FUNC']}|{KEYWORDS['CLASS']})\s+({NAME})",
            "captures": {"1": {"name": "storage.type.be"}, "2": {"name": "entity.name.function.be"}},
        },
        "number": {"name": "constant.numeric.be", "match": r"\b[0-9]+(\.[0-9]+)?\b"},
        "builtin": {
            "name": "support.function.builtin.be",
            "match": rf"\b({'|'.join(sorted(builtin_names, key=len, reverse=True))})\b(?=\s*\()",
        },
        "function-call": {"name": "entity.name.function.call.be", "match": rf"\b{NAME}(?=\s*\()"},
        "operator": {"name": "keyword.operator.be", "match": r"==|!=|<=|>=|\+=|-=|\*=|/=|[-+*/%=<>]"},
    }
    for key, (scope, jobs) in GROUPS.items():
        repository[key] = {"name": scope, "match": words_regex(KEYWORDS[job] for job in jobs)}
    code = [
        "comment", "string-double", "string-single", "definition", "keyword-control",
        "keyword-declaration", "keyword-logic", "constant", "number", "builtin",
        "function-call", "operator",
    ]
    repository["code"] = {"patterns": [{"include": f"#{name}"} for name in code]}
    return {
        "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
        "name": "BE",
        "scopeName": "source.be",
        "comment": "Made by tools/sync.py from be/keywords.py. Do not edit by hand.",
        "patterns": [{"include": "#code"}],
        "repository": repository,
    }


def js_file(variable, data, made_from):
    body = json.dumps(data, ensure_ascii=False, indent=2)
    return (
        f"// Made by tools/sync.py from {made_from}. Do not edit by hand.\n"
        f"const {variable} = {body};\n"
        f'if (typeof module !== "undefined") module.exports = {variable};\n'
        f"else globalThis.{variable} = {variable};\n"
    )


def make_keywords_js():
    data = {
        "version": __version__,
        "keywords": KEYWORDS,
        "builtins": {name: {"min": low, "max": high} for name, (_, low, high) in BUILTINS.items()},
        "hints": {"names": english_hints(False), "fields": FIELD_HINTS},
        "computer_only": [
            name for name in COMPUTER_BUILTINS if name not in BROWSER_ONLY and name not in ALSO_IN_BROWSER
        ],
    }
    return js_file("BE_WORDS", data, "be/keywords.py and be/builtin_functions.py")


# Apps and websites also run in the playground (they show in its preview)
PLAYGROUND_FOLDERS = ["app", "website"]
TEXT_FILES = {".be", ".css", ".js", ".html", ".txt", ".json", ".svg"}


def make_examples_js():
    examples_dir = ROOT / "examples"
    paths = sorted(examples_dir.glob("*.be"))
    for folder in PLAYGROUND_FOLDERS:
        paths += sorted((examples_dir / folder).glob("*.be"))
    examples = [
        {"name": path.relative_to(examples_dir).as_posix(), "code": path.read_text(encoding="utf-8")}
        for path in paths
    ]
    # Files the examples read: anao "lib/..." and a website's CSS folder
    extra = sorted((examples_dir / "lib").rglob("*.be"))
    for folder in PLAYGROUND_FOLDERS:
        extra += [p for p in sorted((examples_dir / folder).rglob("*")) if p.is_file() and p.suffix in TEXT_FILES
                  and p.parent != examples_dir / folder]
    files = {path.relative_to(ROOT).as_posix(): path.read_text(encoding="utf-8") for path in extra}
    return js_file("BE_EXAMPLES", {"examples": examples, "files": files}, "the examples/ folder")


def check_javascript():
    """Warn about built-in functions the JavaScript version doesn't have."""
    engine = (ROOT / "playground" / "be.js").read_text(encoding="utf-8")
    for name in BUILTINS:
        if f'"{name}":' not in engine:
            print(f"  Warning: '{name}' is missing from playground/be.js, so it won't work in the browser.")


def write(path, text):
    path.write_text(text, encoding="utf-8")
    print(f"Wrote {path.relative_to(ROOT)}")


def main():
    write(ROOT / "vscode-be" / "syntaxes" / "be.tmLanguage.json", json.dumps(make_grammar(), indent=2) + "\n")

    package_path = ROOT / "vscode-be" / "package.json"
    package = json.loads(package_path.read_text(encoding="utf-8"))
    package["version"] = __version__
    package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")
    for old in (ROOT / "vscode-be").glob("*.vsix"):
        old.unlink()
    subprocess.run([sys.executable, str(ROOT / "vscode-be" / "build_vsix.py")], check=True)

    write(ROOT / "playground" / "keywords.js", make_keywords_js())
    write(ROOT / "playground" / "examples.js", make_examples_js())
    engine = (ROOT / "playground" / "be.js").read_text(encoding="utf-8")
    header = (
        f"/* BE {__version__} for web pages. Add <script src=\"be-web.js\"></script>, then write BE code\n"
        "   inside <script type=\"text/be\"> ... </script>. Made by tools/sync.py: do not edit by hand. */\n"
    )
    write(ROOT / "playground" / "be-web.js", header + make_keywords_js() + "\n" + engine)

    # The Learn BE page's lessons and exercises
    sys.path.insert(0, str(ROOT / "tools"))
    import build_learn  # noqa: E402

    build_learn.main()

    installer = ROOT / "installer" / "be.iss"
    if installer.exists():
        text = installer.read_text(encoding="utf-8")
        write(installer, re.sub(r'#define AppVersion "[^"]*"', f'#define AppVersion "{__version__}"', text))
    check_javascript()
    print("All done. Now run: python -m pytest")


if __name__ == "__main__":
    main()
