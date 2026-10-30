// Made by tools/sync.py from be/keywords.py and be/builtin_functions.py. Do not edit by hand.
const BE_WORDS = {
  "version": "3.0.0",
  "keywords": {
    "LET": "dhoro",
    "PRINT": "dekhao",
    "IF": "jodi",
    "THEN": "tahole",
    "ELSE": "nahole",
    "WHILE": "jotokkhon",
    "FOR": "ghuro",
    "TIMES": "bar",
    "EACH": "protiti",
    "FROM": "theke",
    "UNTIL": "porjonto",
    "STEP": "dhap",
    "BREAK": "thamo",
    "CONTINUE": "agao",
    "FUNC": "kaj",
    "RETURN": "ferot",
    "CLASS": "shreni",
    "THIS": "ei",
    "SUPER": "upor",
    "IMPORT": "anao",
    "TRY": "chesta",
    "THROW": "chhuro",
    "TRUE": "sotti",
    "FALSE": "mittha",
    "NULL": "kichuna",
    "AND": "ebong",
    "OR": "othoba",
    "NOT": "na",
    "IN": "moddhe"
  },
  "builtins": {
    "lomba": {
      "min": 1,
      "max": 1
    },
    "jiggesh": {
      "min": 0,
      "max": 1
    },
    "shonkha": {
      "min": 1,
      "max": 1
    },
    "lekha": {
      "min": 1,
      "max": 1
    },
    "dhoron": {
      "min": 1,
      "max": 1
    },
    "jukto": {
      "min": 2,
      "max": 2
    },
    "bad_dao": {
      "min": 1,
      "max": 2
    },
    "elomelo": {
      "min": 2,
      "max": 2
    },
    "gol": {
      "min": 1,
      "max": 2
    },
    "boro": {
      "min": 1,
      "max": null
    },
    "choto": {
      "min": 1,
      "max": null
    },
    "jogfol": {
      "min": 1,
      "max": 1
    },
    "shajao": {
      "min": 1,
      "max": 2
    },
    "ulta": {
      "min": 1,
      "max": 1
    },
    "bhag": {
      "min": 1,
      "max": 2
    },
    "jora": {
      "min": 1,
      "max": 2
    },
    "bodlao": {
      "min": 3,
      "max": 3
    },
    "boro_hater": {
      "min": 1,
      "max": 1
    },
    "choto_hater": {
      "min": 1,
      "max": 1
    },
    "parishkar": {
      "min": 1,
      "max": 1
    },
    "kothay": {
      "min": 2,
      "max": 2
    },
    "chabi": {
      "min": 1,
      "max": 1
    },
    "man": {
      "min": 1,
      "max": 1
    },
    "borgomul": {
      "min": 1,
      "max": 1
    },
    "poromman": {
      "min": 1,
      "max": 1
    },
    "shomoy": {
      "min": 0,
      "max": 0
    },
    "json_banao": {
      "min": 1,
      "max": 2
    },
    "json_porho": {
      "min": 1,
      "max": 1
    }
  },
  "hints": {
    "names": {
      "print": "dekhao",
      "let": "dhoro",
      "var": "dhoro",
      "if": "jodi",
      "then": "tahole",
      "else": "nahole",
      "elif": "nahole",
      "while": "jotokkhon",
      "for": "ghuro",
      "times": "bar",
      "each": "protiti",
      "until": "porjonto",
      "step": "dhap",
      "break": "thamo",
      "continue": "agao",
      "def": "kaj",
      "function": "kaj",
      "func": "kaj",
      "return": "ferot",
      "class": "shreni",
      "self": "ei",
      "this": "ei",
      "super": "upor",
      "import": "anao",
      "try": "chesta",
      "except": "nahole",
      "catch": "nahole",
      "raise": "chhuro",
      "throw": "chhuro",
      "True": "sotti",
      "true": "sotti",
      "False": "mittha",
      "false": "mittha",
      "None": "kichuna",
      "null": "kichuna",
      "and": "ebong",
      "or": "othoba",
      "not": "na",
      "input": "jiggesh",
      "len": "lomba",
      "int": "shonkha",
      "float": "shonkha",
      "str": "lekha",
      "type": "dhoron",
      "append": "jukto",
      "max": "boro",
      "min": "choto",
      "sum": "jogfol",
      "sorted": "shajao",
      "reversed": "ulta",
      "round": "gol",
      "sqrt": "borgomul",
      "abs": "poromman",
      "sleep": "ghumao",
      "server": "website"
    },
    "fields": {
      "path": "pata",
      "route": "pata",
      "folder": "fileguli",
      "static": "fileguli",
      "run": "chalao",
      "test": "porikkha",
      "params": "ongsho",
      "form": "ghor",
      "query": "prosno",
      "method": "poddhoti",
      "body": "lekha",
      "headers": "tottho",
      "status": "abostha",
      "type": "dhoron",
      "text": "lekha",
      "label": "lekha",
      "button": "botam",
      "entry": "ghor",
      "input": "ghor",
      "row": "sari",
      "color": "rong",
      "background": "pechon",
      "size": "akar",
      "close": "bondho",
      "after": "pore",
      "split": "bhag",
      "join": "jora",
      "replace": "bodlao",
      "upper": "boro_hater",
      "lower": "choto_hater",
      "strip": "parishkar",
      "keys": "chabi",
      "values": "man",
      "pop": "bad_dao",
      "index": "kothay",
      "find": "kothay"
    }
  },
  "computer_only": [
    "python",
    "ghumao",
    "file_porho",
    "file_lekho",
    "file_jog",
    "file_ache",
    "web_theke"
  ]
};
if (typeof module !== "undefined") module.exports = BE_WORDS;
else globalThis.BE_WORDS = BE_WORDS;
