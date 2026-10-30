/* BE 3.0.0 for web pages. Add <script src="be-web.js"></script>, then write BE code
   inside <script type="text/be"> ... </script>. Made by tools/sync.py: do not edit by hand. */
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

/*
 * BE in JavaScript.
 *
 * This is the same language as the Python version in the be/ folder, written
 * again in JavaScript so it runs inside web browsers (and Node.js). It must
 * print exactly what the Python version prints: `python -m pytest` checks
 * that when Node.js is installed.
 *
 * In a web page:
 *
 *   <script src="be.js"></script>          (keywords.js must be loaded first)
 *   <script type="text/be">
 *       dhoro button = khojo("#btn")
 *       button.addEventListener("click", kaj () { dekhao "Clicked!" })
 *   </script>
 *
 * Keywords are not written here. They come from keywords.js, which
 * tools/sync.py makes from be/keywords.py.
 *
 * Created by Jonayed Hossain. MIT License.
 */
(function (root, factory) {
  "use strict";
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(require("./keywords.js"), root);
  } else {
    root.BE = factory(root.BE_WORDS, root);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function (WORDS, GLOBAL) {
  "use strict";

  const VERSION = WORDS.version;
  const KEYWORDS = WORDS.keywords; // job -> word
  const WORD_FOR = Object.assign({}, KEYWORDS);
  const WORD_TO_JOB = new Map(Object.entries(KEYWORDS).map(([job, w]) => [w, job]));
  const word = (job) => WORD_FOR[job] || job;
  const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

  // ------------------------------------------------------------------- errors

  class BeError extends Error {
    constructor(message, line = null, col = null) {
      super(message);
      this.message = message;
      this.line = line;
      this.col = col;
      this.filename = null;
      this.source = null;
    }
    get kind() {
      return "Error";
    }
    toString() {
      if (this.line !== null && this.line !== undefined) return `${this.kind} (line ${this.line}): ${this.message}`;
      return `${this.kind}: ${this.message}`;
    }
  }
  class BeSyntaxError extends BeError {
    get kind() {
      return "Syntax error";
    }
  }
  class BeNameError extends BeError {
    get kind() {
      return "Name error";
    }
  }
  class BeTypeError extends BeError {
    get kind() {
      return "Type error";
    }
  }
  class BeRuntimeError extends BeError {
    get kind() {
      return "Runtime error";
    }
  }
  class BeThrownError extends BeError {
    get kind() {
      return "Error";
    }
  }

  function splitLines(text) {
    const lines = text.split(/\r\n|\r|\n/);
    if (lines.length && lines[lines.length - 1] === "") lines.pop();
    return lines;
  }

  function formatError(error, source, filename) {
    const where = filename ? ` [${filename}]` : "";
    let text = `${error.toString()}${where}`;
    if (source !== undefined && source !== null && error.line !== null && error.line !== undefined) {
      const lines = splitLines(source);
      if (error.line >= 1 && error.line <= lines.length) {
        const codeLine = lines[error.line - 1];
        text += "\n    " + codeLine.replace(/\s+$/u, "");
        if (error.col !== null && error.col !== undefined && error.col >= 1) {
          const padding = Array.from(codeLine)
            .slice(0, error.col - 1)
            .map((ch) => (ch === "\t" ? "\t" : " "))
            .join("");
          text += "\n    " + padding + "^";
        }
      }
    }
    return text;
  }

  // ------------------------------------------------------------ did you mean

  function longestMatch(a, b2j, alo, ahi, blo, bhi) {
    // Python difflib.SequenceMatcher.find_longest_match, without junk.
    let besti = alo;
    let bestj = blo;
    let bestsize = 0;
    let j2len = new Map();
    for (let i = alo; i < ahi; i++) {
      const newj2len = new Map();
      for (const j of b2j.get(a[i]) || []) {
        if (j < blo) continue;
        if (j >= bhi) break;
        const k = (j2len.get(j - 1) || 0) + 1;
        newj2len.set(j, k);
        if (k > bestsize) {
          besti = i - k + 1;
          bestj = j - k + 1;
          bestsize = k;
        }
      }
      j2len = newj2len;
    }
    return [besti, bestj, bestsize];
  }

  function ratio(first, second) {
    // Python difflib.SequenceMatcher(None, first, second).ratio()
    const a = Array.from(first);
    const b = Array.from(second);
    const b2j = new Map();
    b.forEach((ch, j) => {
      if (!b2j.has(ch)) b2j.set(ch, []);
      b2j.get(ch).push(j);
    });
    let matches = 0;
    const queue = [[0, a.length, 0, b.length]];
    while (queue.length) {
      const [alo, ahi, blo, bhi] = queue.pop();
      const [i, j, k] = longestMatch(a, b2j, alo, ahi, blo, bhi);
      if (k) {
        matches += k;
        if (alo < i && blo < j) queue.push([alo, i, blo, j]);
        if (i + k < ahi && j + k < bhi) queue.push([i + k, ahi, j + k, bhi]);
      }
    }
    const total = a.length + b.length;
    return total ? (2.0 * matches) / total : 1.0;
  }

  function pyLess(x, y) {
    // Compare text by code point, like Python.
    const a = Array.from(x);
    const b = Array.from(y);
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      const ca = a[i].codePointAt(0);
      const cb = b[i].codePointAt(0);
      if (ca !== cb) return ca < cb;
    }
    return a.length < b.length;
  }

  const CUTOFF = 0.75;

  // English words people know (print, len, server, r.params...) and the BE word for each: made by tools/sync.py
  const HINTS = WORDS.hints || { names: {}, fields: {} };
  const NAME_HINTS = Object.assign({}, HINTS.names);
  const FIELD_HINTS = Object.assign({}, HINTS.names, HINTS.fields);

  function closest(target, candidates, fields = true) {
    const english = (fields ? FIELD_HINTS : NAME_HINTS)[target];
    if (english !== undefined && hasOwn(fields ? FIELD_HINTS : NAME_HINTS, target) && english !== target && candidates.includes(english)) {
      return english;
    }
    const lowered = new Map();
    for (const c of candidates) if (c !== target) lowered.set(c.toLowerCase(), c);
    const low = target.toLowerCase();
    if (lowered.has(low)) return lowered.get(low);
    let best = null;
    let bestScore = -1;
    for (const x of lowered.keys()) {
      const score = ratio(x, low);
      if (score >= CUTOFF && (score > bestScore || (score === bestScore && pyLess(best, x)))) {
        best = x;
        bestScore = score;
      }
    }
    return best === null ? null : lowered.get(best);
  }

  function closestKeyword(text, jobs) {
    const words = [];
    for (const [w, job] of WORD_TO_JOB) if (!jobs || jobs.has(job)) words.push(w);
    return closest(text, words);
  }

  const hint = (suggestion) => (suggestion ? ` Did you mean '${suggestion}'?` : "");

  // ------------------------------------------------------------------- values

  class BeFunction {
    constructor(name, params, body, closure, ownerClass = null, defaults = null) {
      this.name = name;
      this.params = params;
      this.defaults = defaults || {};
      this.body = body;
      this.closure = closure;
      this.ownerClass = ownerClass;
    }
  }
  class BuiltinFunction {
    constructor(name, fn, minArgs, maxArgs) {
      this.name = name;
      this.fn = fn;
      this.minArgs = minArgs;
      this.maxArgs = maxArgs;
    }
  }
  class BeClass {
    constructor(name, parent, methods) {
      this.name = name;
      this.parent = parent;
      this.methods = methods;
    }
    findMethod(name) {
      for (let cls = this; cls; cls = cls.parent) if (cls.methods.has(name)) return cls.methods.get(name);
      return null;
    }
    allMethodNames() {
      const names = [];
      for (let cls = this; cls; cls = cls.parent) for (const n of cls.methods.keys()) if (!names.includes(n)) names.push(n);
      return names;
    }
  }
  class BeInstance {
    constructor(cls) {
      this.cls = cls;
      this.fields = new Map();
    }
  }
  class BoundMethod {
    constructor(instance, fn) {
      this.instance = instance;
      this.fn = fn;
    }
  }

  const isNumber = (v) => typeof v === "number";
  const isWhole = (v) => typeof v === "number" && Number.isInteger(v);
  const isText = (v) => typeof v === "string";
  const isList = (v) => Array.isArray(v);
  const isDict = (v) => v instanceof Map;
  const isBeFunction = (v) => v instanceof BeFunction || v instanceof BuiltinFunction || v instanceof BoundMethod;
  const isNull = (v) => v === null || v === undefined;
  const chars = (text) => Array.from(text);

  function isBeValue(v) {
    return (
      isNull(v) ||
      typeof v === "boolean" ||
      isNumber(v) ||
      isText(v) ||
      isList(v) ||
      isDict(v) ||
      isBeFunction(v) ||
      v instanceof BeClass ||
      v instanceof BeInstance
    );
  }

  function typeName(v) {
    if (typeof v === "boolean") return "boolean";
    if (isNumber(v)) return "number";
    if (isText(v)) return "text";
    if (isNull(v)) return "null";
    if (isList(v)) return "list";
    if (isDict(v)) return "dictionary";
    if (isBeFunction(v)) return "function";
    if (v instanceof BeClass) return "class";
    if (v instanceof BeInstance) return v.cls.name;
    if (isNative(v)) return v.beType;
    if (typeof v === "function") return "function";
    return "js object";
  }

  function beEqual(a, b) {
    if (typeof a === "boolean" || typeof b === "boolean") return a === b;
    if (isNumber(a) && isNumber(b)) return a === b;
    if (isList(a) && isList(b)) return a.length === b.length && a.every((x, i) => beEqual(x, b[i]));
    if (isDict(a) && isDict(b)) {
      if (a.size !== b.size) return false;
      for (const [k, v] of a) if (!b.has(k) || !beEqual(v, b.get(k))) return false;
      return true;
    }
    if (a instanceof BoundMethod && b instanceof BoundMethod) return a.instance === b.instance && a.fn === b.fn;
    if (isNull(a) && isNull(b)) return true;
    return a === b;
  }

  function isTrue(v) {
    if (isNull(v) || v === false) return false;
    if (isNumber(v)) return v !== 0;
    if (isText(v)) return v.length > 0;
    if (isList(v)) return v.length > 0;
    if (isDict(v)) return v.size > 0;
    return true;
  }

  function formatNumber(v) {
    if (Number.isNaN(v)) return "NaN";
    if (v === Infinity) return "Infinity";
    if (v === -Infinity) return "-Infinity";
    // Whole numbers print all their digits (exact up to about 16 digits in JavaScript).
    if (Number.isInteger(v) && Math.abs(v) < 1e21) return BigInt(v).toString();
    // Like Python's repr(): plain digits when the exponent is from -4 to 15.
    const [mantissa, expText] = v.toExponential().split("e");
    const exp = Number(expText);
    if (exp >= -4 && exp < 16) {
      const negative = mantissa.startsWith("-");
      const digits = mantissa.replace("-", "").replace(".", "");
      let text;
      if (exp < 0) text = "0." + "0".repeat(-exp - 1) + digits;
      else if (digits.length <= exp + 1) text = digits + "0".repeat(exp + 1 - digits.length);
      else text = digits.slice(0, exp + 1) + "." + digits.slice(exp + 1);
      return (negative ? "-" : "") + text;
    }
    return `${mantissa}e${exp < 0 ? "-" : "+"}${Math.abs(exp)}`;
  }

  function toDisplay(v) {
    return isText(v) ? v : toRepr(v);
  }

  function toRepr(v) {
    if (v === true) return "true";
    if (v === false) return "false";
    if (isNull(v)) return "null";
    if (isNumber(v)) return formatNumber(v);
    if (isText(v)) return '"' + v.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"';
    if (isList(v)) return "[" + v.map(toRepr).join(", ") + "]";
    if (isDict(v)) return "{" + Array.from(v, ([k, x]) => `${toRepr(k)}: ${toRepr(x)}`).join(", ") + "}";
    if (v instanceof BeFunction) return v.name ? `<function ${v.name}>` : "<function>";
    if (v instanceof BoundMethod) return `<function ${v.fn.name}>`;
    if (v instanceof BuiltinFunction) return `<built-in function ${v.name}>`;
    if (v instanceof BeClass) return `<class ${v.name}>`;
    if (v instanceof BeInstance) return `<${v.cls.name} object>`;
    if (isNative(v)) return `<${v.beType}>`;
    if (v instanceof NativeMethod) return `<function ${v.name}>`;
    if (typeof v === "function") return "<js function>";
    return "<js object>";
  }

  // -------------------------------------------------------------------- lexer

  const TWO_CHAR_SYMBOLS = new Set(["==", "!=", "<=", ">=", "+=", "-=", "*=", "/="]);
  const ONE_CHAR_SYMBOLS = new Set("+-*/%=<>(){}[],:.".split(""));
  const ESCAPES = { n: "\n", t: "\t", "\\": "\\", '"': '"', "'": "'", 0: "\0", "{": "{", "}": "}" };
  const SPACES = new Set([" ", "\t", "\r", "﻿", " "]);

  const isDigit = (ch) => ch.length === 1 && ch >= "0" && ch <= "9";
  const startsName = (ch) => ch.length === 1 && (ch === "_" || (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"));
  const continuesName = (ch) => startsName(ch) || isDigit(ch);
  const isAscii = (ch) => ch.codePointAt(0) < 128;

  class Token {
    constructor(type, value, line, col, start, end) {
      this.type = type;
      this.value = value;
      this.line = line;
      this.col = col;
      this.start = start;
      this.end = end;
    }
  }

  class TemplatePart {
    constructor(source, line, col, offset) {
      this.source = source;
      this.line = line;
      this.col = col;
      this.offset = offset;
    }
  }

  class Lexer {
    constructor(source, line = 1, col = 1) {
      this.chars = Array.from(source);
      this.pos = 0;
      this.line = line;
      this.col = col;
      this.tokens = [];
    }
    peek(offset = 0) {
      const i = this.pos + offset;
      return i < this.chars.length ? this.chars[i] : "";
    }
    advance() {
      const ch = this.chars[this.pos++];
      if (ch === "\n") {
        this.line += 1;
        this.col = 1;
      } else {
        this.col += 1;
      }
      return ch;
    }
    add(type, value, line, col, start) {
      this.tokens.push(new Token(type, value, line, col, start, this.pos));
    }
    lastIsNewline() {
      return this.tokens.length && this.tokens[this.tokens.length - 1].type === "NEWLINE";
    }
    tokenize() {
      while (this.pos < this.chars.length) {
        const ch = this.peek();
        const line = this.line;
        const col = this.col;
        const start = this.pos;
        if (SPACES.has(ch)) {
          this.advance();
        } else if (ch === "#") {
          while (this.pos < this.chars.length && this.peek() !== "\n") this.advance();
        } else if (ch === "\n") {
          this.advance();
          if (!this.tokens.length || !this.lastIsNewline()) this.add("NEWLINE", "\\n", line, col, start);
        } else if (ch === ";") {
          this.advance();
          if (this.tokens.length && !this.lastIsNewline()) this.add("NEWLINE", ";", line, col, start);
        } else if (isDigit(ch)) {
          this.readNumber(line, col, start);
        } else if (ch === '"' || ch === "'") {
          this.readString(line, col, start);
        } else if (startsName(ch)) {
          this.readName(line, col, start);
        } else if (TWO_CHAR_SYMBOLS.has(ch + this.peek(1))) {
          const symbol = this.advance() + this.advance();
          this.add(symbol, symbol, line, col, start);
        } else if (ONE_CHAR_SYMBOLS.has(ch)) {
          this.advance();
          this.add(ch, ch, line, col, start);
        } else if (!isAscii(ch)) {
          throw new BeSyntaxError(
            `'${ch}' can't be used in code. BE code is written in English letters; ` +
              `Bangla and other letters can only go inside text (" ") or comments (#).`,
            line,
            col
          );
        } else {
          throw new BeSyntaxError(`BE doesn't understand the symbol '${ch}'. Remove it or fix it.`, line, col);
        }
      }
      this.add("EOF", null, this.line, this.col, this.pos);
      return this.tokens;
    }
    readNumber(line, col, start) {
      let text = "";
      while (isDigit(this.peek())) text += this.advance();
      if (this.peek() === "." && isDigit(this.peek(1))) {
        text += this.advance();
        while (isDigit(this.peek())) text += this.advance();
      }
      this.add("NUMBER", Number(text), line, col, start);
    }
    readString(line, col, start) {
      const quote = this.advance();
      const parts = [];
      let text = [];
      for (;;) {
        if (this.pos >= this.chars.length || this.peek() === "\n") {
          throw new BeSyntaxError(`This text never ends. Did you forget the closing ${quote}?`, line, col);
        }
        const ch = this.peek();
        if (ch === quote) {
          this.advance();
          break;
        }
        if (ch === "\\") {
          this.advance();
          if (this.pos >= this.chars.length) continue;
          const code = this.advance();
          text.push(hasOwn(ESCAPES, code) ? ESCAPES[code] : "\\" + code);
        } else if (ch === "{") {
          if (text.length) {
            parts.push(text.join(""));
            text = [];
          }
          parts.push(this.readTemplatePart(quote));
        } else if (ch === "}") {
          throw new BeSyntaxError(
            "This '}' inside text has no '{' before it. To write a plain '}', type \\}",
            this.line,
            this.col
          );
        } else {
          text.push(this.advance());
        }
      }
      if (text.length || !parts.length) parts.push(text.join(""));
      if (parts.length === 1 && typeof parts[0] === "string") this.add("STRING", parts[0], line, col, start);
      else this.add("TEMPLATE", parts, line, col, start);
    }
    readTemplatePart(quote) {
      const openLine = this.line;
      const openCol = this.col;
      this.advance();
      const codeLine = this.line;
      const codeCol = this.col;
      const codeStart = this.pos;
      let depth = 0;
      const code = [];
      let innerQuote = null;
      for (;;) {
        if (this.pos >= this.chars.length || this.peek() === "\n" || (this.peek() === quote && innerQuote === null)) {
          throw new BeSyntaxError(
            "A '{' inside text is never closed with '}'. To write a plain '{', type \\{",
            openLine,
            openCol
          );
        }
        const ch = this.advance();
        if (innerQuote !== null) {
          if (ch === innerQuote) innerQuote = null;
        } else if (ch === '"' || ch === "'") {
          innerQuote = ch;
        } else if (ch === "{") {
          depth += 1;
        } else if (ch === "}") {
          if (depth === 0) break;
          depth -= 1;
        }
        code.push(ch);
      }
      const source = code.join("");
      if (!source.trim()) {
        throw new BeSyntaxError("Put something inside { }, like {nam}. To write plain braces, type \\{ \\}", openLine, openCol);
      }
      return new TemplatePart(source, codeLine, codeCol, codeStart);
    }
    readName(line, col, start) {
      let text = this.advance();
      while (this.pos < this.chars.length && continuesName(this.peek())) text += this.advance();
      this.add(WORD_TO_JOB.get(text) || "NAME", text, line, col, start);
    }
  }

  const tokenize = (source, line = 1, col = 1) => new Lexer(source, line, col).tokenize();

  // ------------------------------------------------------------------- parser

  const COMPARISON_OPS = ["==", "!=", "<", ">", "<=", ">=", "IN"];
  const ASSIGN_OPS = new Set(["=", "+=", "-=", "*=", "/="]);

  function describe(token, eofWord = "the end of the file") {
    if (token.type === "NEWLINE") return "the end of the line";
    if (token.type === "EOF") return eofWord;
    if (token.type === "NAME") return `the name '${token.value}'`;
    if (token.type === "NUMBER") return `the number ${formatNumber(token.value)}`;
    if (token.type === "STRING") return `the text "${token.value}"`;
    if (token.type === "TEMPLATE") return "text";
    return `'${token.value}'`;
  }

  class Parser {
    constructor(tokens) {
      this.tokens = tokens;
      this.pos = 0;
      this.loopDepth = 0;
      this.funcDepth = 0;
      this.methodDepth = 0;
      this.eofWord = "the end of the file";
    }
    get current() {
      return this.tokens[this.pos];
    }
    peekType(offset = 0) {
      return this.tokens[Math.min(this.pos + offset, this.tokens.length - 1)].type;
    }
    check(...types) {
      return types.includes(this.current.type);
    }
    advance() {
      const token = this.current;
      if (token.type !== "EOF") this.pos += 1;
      return token;
    }
    match(...types) {
      return this.check(...types) ? this.advance() : null;
    }
    error(message, token = null, jobs = null) {
      token = token || this.current;
      if (token.type === "NAME") message += hint(closestKeyword(token.value, jobs));
      if (token.type === "EOF" || token.type === "NEWLINE") {
        for (let i = this.pos - 1; i >= 0; i--) {
          const previous = this.tokens[i];
          if (previous.type !== "EOF" && previous.type !== "NEWLINE") {
            return new BeSyntaxError(message, previous.line, previous.col + (previous.end - previous.start));
          }
        }
      }
      return new BeSyntaxError(message, token.line, token.col);
    }
    expect(type, what, hintText = "") {
      if (this.check(type)) return this.advance();
      let message = `Expected ${what} here, but found ${describe(this.current, this.eofWord)}.`;
      const jobs = hasOwn(KEYWORDS, type) ? new Set([type]) : null;
      if (this.check("NAME") && closestKeyword(this.current.value, jobs)) throw this.error(message, null, jobs);
      if (hintText) message += " " + hintText;
      throw this.error(message);
    }
    skipNewlines() {
      while (this.check("NEWLINE")) this.advance();
    }
    nextLineContinues(...types) {
      if (!this.check("NEWLINE")) return this.check(...types);
      let ahead = this.pos;
      while (this.tokens[ahead].type === "NEWLINE") ahead += 1;
      if (types.includes(this.tokens[ahead].type)) {
        this.pos = ahead;
        return true;
      }
      return false;
    }
    endOfStatement(first = null) {
      if (this.check("NEWLINE")) {
        this.advance();
      } else if (this.check("EOF", "}")) {
        // fine
      } else {
        if (first !== null && first.type === "NAME") {
          const suggestion = closestKeyword(first.value, null);
          if (suggestion) throw new BeSyntaxError(`'${first.value}' is not a BE word.${hint(suggestion)}`, first.line, first.col);
        }
        throw this.error(
          `Expected the end of the line here, but found ${describe(this.current, this.eofWord)}. Write one statement per line.`
        );
      }
    }
    parseProgram() {
      const statements = [];
      this.skipNewlines();
      while (!this.check("EOF")) {
        if (this.check("}")) throw this.error("This '}' doesn't close any '{'. Remove it.");
        statements.push(this.statement());
        this.skipNewlines();
      }
      return { type: "Program", statements };
    }
    openBlock(owner) {
      this.skipNewlines();
      return this.expect("{", "'{'", `Put the code for '${owner}' between { and }.`);
    }
    missingClose(open) {
      return new BeSyntaxError(`Missing '}'. The '{' opened on line ${open.line} is never closed.`, open.line, open.col);
    }
    block(owner) {
      const open = this.openBlock(owner);
      const statements = [];
      for (;;) {
        this.skipNewlines();
        if (this.check("}")) {
          this.advance();
          break;
        }
        if (this.check("EOF")) throw this.missingClose(open);
        statements.push(this.statement());
      }
      return { type: "Block", statements };
    }
    nextIsElse() {
      const saved = this.pos;
      this.skipNewlines();
      if (this.check("ELSE")) return true;
      this.pos = saved;
      return false;
    }
    statement() {
      switch (this.current.type) {
        case "LET":
          return this.letStatement();
        case "PRINT":
          return this.printStatement();
        case "IF":
          return this.ifStatement();
        case "WHILE":
          return this.whileStatement();
        case "FOR":
          return this.forStatement();
        case "EACH":
          return this.eachStatement();
        case "FUNC":
          return this.functionDefinition(false);
        case "CLASS":
          return this.classDefinition();
        case "RETURN":
          return this.returnStatement();
        case "BREAK":
        case "CONTINUE":
          return this.loopControl();
        case "TRY":
          return this.tryStatement();
        case "THROW":
          return this.throwStatement();
        case "IMPORT":
          return this.importStatement();
        case "ELSE":
          throw this.error(`'${word("ELSE")}' needs a '${word("IF")}' or '${word("TRY")}' before it.`);
        case "THEN":
          throw this.error(`'${word("THEN")}' can only come right after the condition of '${word("IF")}'.`);
        default:
          return this.expressionStatement();
      }
    }
    letStatement() {
      const token = this.advance();
      const name = this.expect("NAME", "a variable name", `For example: ${word("LET")} boyosh = 22`);
      this.expect("=", "'='", `Give the new variable a starting value, for example: ${word("LET")} ${name.value} = 0`);
      const value = this.expression();
      this.endOfStatement();
      return { type: "LetStmt", name: name.value, value, line: token.line };
    }
    printStatement() {
      const token = this.advance();
      const values = [];
      if (!this.check("NEWLINE", "EOF", "}")) {
        values.push(this.expression());
        while (this.match(",")) values.push(this.expression());
      }
      this.endOfStatement();
      return { type: "PrintStmt", values, line: token.line };
    }
    conditionAndBlock() {
      const condition = this.expression();
      this.match("THEN");
      return [condition, this.block(word("IF"))];
    }
    ifStatement() {
      const token = this.advance();
      const branches = [this.conditionAndBlock()];
      let elseBlock = null;
      while (this.nextIsElse()) {
        this.advance();
        if (this.match("IF")) {
          branches.push(this.conditionAndBlock());
        } else {
          elseBlock = this.block(word("ELSE"));
          break;
        }
      }
      return { type: "IfStmt", branches, elseBlock, line: token.line };
    }
    whileStatement() {
      const token = this.advance();
      const condition = this.expression();
      const body = this.loopBody(word("WHILE"));
      return { type: "WhileStmt", condition, body, line: token.line };
    }
    forStatement() {
      const token = this.advance();
      if (!(this.check("NAME") && this.peekType(1) === "=")) {
        const count = this.expression();
        this.expect(
          "TIMES",
          `'${word("TIMES")}'`,
          `For example: ${word("FOR")} 5 ${word("TIMES")} { ... }  or  ${word("FOR")} i = 1 ${word("FROM")} 10 { ... }`
        );
        const body = this.loopBody(word("FOR"));
        return { type: "RepeatStmt", count, body, line: token.line };
      }
      const example = `For example: ${word("FOR")} i = 1 ${word("FROM")} 10 { ... }`;
      const variable = this.advance();
      this.advance();
      const start = this.expression();
      this.expect("FROM", `'${word("FROM")}'`, example);
      const end = this.expression();
      this.match("UNTIL");
      let step = null;
      if (this.match("STEP")) step = this.expression();
      const body = this.loopBody(word("FOR"));
      return { type: "ForRangeStmt", variable: variable.value, start, end, step, body, line: token.line };
    }
    eachStatement() {
      const token = this.advance();
      const example = `For example: ${word("EACH")} phol fol_list ${word("FROM")} { ... }`;
      const variable = this.expect("NAME", "a variable name", example);
      const iterable = this.expression();
      this.expect("FROM", `'${word("FROM")}'`, example);
      const body = this.loopBody(word("EACH"));
      return { type: "ForEachStmt", variable: variable.value, iterable, body, line: token.line };
    }
    loopBody(owner) {
      this.loopDepth += 1;
      try {
        return this.block(owner);
      } finally {
        this.loopDepth -= 1;
      }
    }
    loopControl() {
      const token = this.advance();
      if (this.loopDepth === 0) {
        throw this.error(
          `'${token.value}' can only be used inside a loop (${word("FOR")}, ${word("WHILE")}, ${word("EACH")}).`,
          token
        );
      }
      this.endOfStatement();
      return { type: token.type === "BREAK" ? "BreakStmt" : "ContinueStmt", line: token.line };
    }
    parameters(example) {
      this.expect("(", "'('", example);
      const params = [];
      const defaults = {};
      let hasDefault = false;
      this.skipNewlines();
      if (!this.check(")")) {
        for (;;) {
          const param = this.expect("NAME", "an input name", example);
          if (params.includes(param.value)) {
            throw this.error(`The input name '${param.value}' is used twice. Give each input its own name.`, param);
          }
          params.push(param.value);
          if (this.match("=")) {
            defaults[param.value] = this.expression();
            hasDefault = true;
          } else if (hasDefault) {
            throw this.error("Inputs with a default value (like y = 1) must come after inputs without one.", param);
          }
          this.skipNewlines();
          if (!this.match(",")) break;
          this.skipNewlines();
        }
      }
      this.expect(")", "')'", example);
      return [params, defaults];
    }
    functionBody(isMethod) {
      const savedLoopDepth = this.loopDepth;
      this.loopDepth = 0;
      this.funcDepth += 1;
      if (isMethod) this.methodDepth += 1;
      try {
        return this.block(word("FUNC"));
      } finally {
        this.funcDepth -= 1;
        if (isMethod) this.methodDepth -= 1;
        this.loopDepth = savedLoopDepth;
      }
    }
    functionDefinition(isMethod) {
      const token = this.advance();
      const example = `For example: ${word("FUNC")} jog(a, b) { ${word("RETURN")} a + b }`;
      const name = this.expect("NAME", "a function name", example);
      const [params, defaults] = this.parameters(example);
      const body = this.functionBody(isMethod);
      return { type: "FuncDef", name: name.value, params, defaults, body, line: token.line };
    }
    classDefinition() {
      const token = this.advance();
      const example = `For example: ${word("CLASS")} Manush { ${word("FUNC")} shuru(nam) { ${word("THIS")}.nam = nam } }`;
      const name = this.expect("NAME", "a shreni name", example);
      let parent = null;
      if (this.match("FROM")) parent = this.expression();
      const open = this.openBlock(word("CLASS"));
      const methods = [];
      for (;;) {
        this.skipNewlines();
        if (this.check("}")) {
          this.advance();
          break;
        }
        if (this.check("EOF")) throw this.missingClose(open);
        if (!this.check("FUNC")) throw this.error(`Only ${word("FUNC")} (methods) can go inside a ${word("CLASS")}. ${example}`);
        methods.push(this.functionDefinition(true));
      }
      return { type: "ClassDef", name: name.value, parent, methods, line: token.line };
    }
    returnStatement() {
      const token = this.advance();
      if (this.funcDepth === 0) throw this.error(`'${token.value}' can only be used inside a ${word("FUNC")}.`, token);
      let value = null;
      if (!this.check("NEWLINE", "EOF", "}")) value = this.expression();
      this.endOfStatement();
      return { type: "ReturnStmt", value, line: token.line };
    }
    tryStatement() {
      const token = this.advance();
      const body = this.block(word("TRY"));
      let errorName = null;
      let handler = null;
      if (this.nextIsElse()) {
        this.advance();
        if (this.check("IF")) {
          throw this.error(
            `'${word("ELSE")} ${word("IF")}' can't follow '${word("TRY")}'. Write: ${word("TRY")} { ... } ${word("ELSE")} { ... }`
          );
        }
        if (this.check("NAME")) errorName = this.advance().value;
        handler = this.block(word("ELSE"));
      }
      return { type: "TryStmt", body, errorName, handler, line: token.line };
    }
    throwStatement() {
      const token = this.advance();
      const value = this.expression();
      this.endOfStatement();
      return { type: "ThrowStmt", value, line: token.line };
    }
    importStatement() {
      const token = this.advance();
      const path = this.expect("STRING", "a file name in quotes", `For example: ${word("IMPORT")} "hishab.be"`);
      this.endOfStatement();
      return { type: "ImportStmt", path: path.value, line: token.line, col: path.col };
    }
    expressionStatement() {
      const start = this.current;
      const expr = this.expression();
      if (ASSIGN_OPS.has(this.current.type)) {
        const op = this.advance();
        if (expr.type !== "Name" && expr.type !== "Index" && expr.type !== "Attribute") {
          throw this.error(
            'A value can only be stored in a variable, a list item (t[0]), a dictionary key (m["k"]) or a field (obj.name).',
            op
          );
        }
        const value = this.expression();
        this.endOfStatement();
        return { type: "AssignStmt", target: expr, op: op.type, value, line: start.line, col: start.col };
      }
      this.endOfStatement(expr.type === "Name" ? start : null);
      return { type: "ExprStmt", expr, line: start.line };
    }
    expression() {
      return this.orExpr();
    }
    orExpr() {
      let left = this.andExpr();
      while (this.nextLineContinues("OR")) {
        const token = this.advance();
        this.skipNewlines();
        left = { type: "Logical", op: "OR", left, right: this.andExpr(), line: token.line };
      }
      return left;
    }
    andExpr() {
      let left = this.notExpr();
      while (this.nextLineContinues("AND")) {
        const token = this.advance();
        this.skipNewlines();
        left = { type: "Logical", op: "AND", left, right: this.notExpr(), line: token.line };
      }
      return left;
    }
    notExpr() {
      if (this.check("NOT")) {
        const token = this.advance();
        return { type: "Unary", op: "NOT", operand: this.notExpr(), line: token.line, col: token.col };
      }
      return this.comparison();
    }
    comparison() {
      let left = this.sum();
      if (this.nextLineContinues(...COMPARISON_OPS)) {
        const token = this.advance();
        this.skipNewlines();
        left = { type: "BinOp", op: token.type, left, right: this.sum(), line: token.line, col: token.col };
        if (this.check(...COMPARISON_OPS)) {
          throw this.error(`Two comparisons can't be chained. Instead of 1 < x < 10, write: 1 < x ${word("AND")} x < 10`);
        }
      }
      return left;
    }
    sum() {
      let left = this.product();
      while (this.check("-") || this.nextLineContinues("+")) {
        const token = this.advance();
        this.skipNewlines();
        left = { type: "BinOp", op: token.type, left, right: this.product(), line: token.line, col: token.col };
      }
      return left;
    }
    product() {
      let left = this.unary();
      while (this.nextLineContinues("*", "/", "%")) {
        const token = this.advance();
        this.skipNewlines();
        left = { type: "BinOp", op: token.type, left, right: this.unary(), line: token.line, col: token.col };
      }
      return left;
    }
    unary() {
      if (this.check("-")) {
        const token = this.advance();
        return { type: "Unary", op: "-", operand: this.unary(), line: token.line, col: token.col };
      }
      return this.postfix();
    }
    postfix() {
      let expr = this.primary();
      for (;;) {
        if (this.check("(")) {
          const token = this.advance();
          const [args, kwargs] = this.callArguments();
          expr = { type: "Call", callee: expr, args, kwargs, line: token.line, col: token.col };
        } else if (this.check("[")) {
          const token = this.advance();
          this.skipNewlines();
          const index = this.expression();
          this.skipNewlines();
          this.expect("]", "']'");
          expr = { type: "Index", target: expr, index, line: token.line, col: token.col };
        } else if (this.nextLineContinues(".")) {
          this.advance();
          const name = this.expect("NAME", "a name after '.'", "For example: manush.nam");
          expr = { type: "Attribute", target: expr, name: name.value, line: name.line, col: name.col };
        } else {
          return expr;
        }
      }
    }
    callArguments() {
      const args = [];
      const kwargs = [];
      this.skipNewlines();
      while (!this.check(")")) {
        if (this.check("NAME") && this.peekType(1) === "=") {
          const name = this.advance();
          this.advance();
          if (kwargs.some(([n]) => n === name.value)) throw this.error(`The input '${name.value}' is given twice.`, name);
          kwargs.push([name.value, this.expression()]);
        } else {
          if (kwargs.length) throw this.error("Inputs without a name must come before named inputs (like nam = value).");
          args.push(this.expression());
        }
        this.skipNewlines();
        if (!this.match(",")) break;
        this.skipNewlines();
      }
      this.skipNewlines();
      this.expect(")", "')'", "Did you forget a comma (,)?");
      return [args, kwargs];
    }
    commaList(closer, readItem) {
      const items = [];
      this.skipNewlines();
      while (!this.check(closer)) {
        items.push(readItem());
        this.skipNewlines();
        if (!this.match(",")) break;
        this.skipNewlines();
      }
      this.skipNewlines();
      this.expect(closer, `'${closer}'`, "Did you forget a comma (,)?");
      return items;
    }
    primary() {
      const token = this.current;
      switch (token.type) {
        case "NUMBER":
          this.advance();
          return { type: "Number", value: token.value, line: token.line };
        case "STRING":
          this.advance();
          return { type: "String", value: token.value, line: token.line };
        case "TEMPLATE":
          this.advance();
          return this.template(token);
        case "TRUE":
          this.advance();
          return { type: "Bool", value: true, line: token.line };
        case "FALSE":
          this.advance();
          return { type: "Bool", value: false, line: token.line };
        case "NULL":
          this.advance();
          return { type: "Null", line: token.line };
        case "NAME":
          this.advance();
          return { type: "Name", name: token.value, line: token.line, col: token.col };
        case "THIS":
          if (this.methodDepth === 0) throw this.error(`'${word("THIS")}' can only be used inside a method of a ${word("CLASS")}.`);
          this.advance();
          return { type: "This", line: token.line, col: token.col };
        case "SUPER": {
          if (this.methodDepth === 0) throw this.error(`'${word("SUPER")}' can only be used inside a method of a ${word("CLASS")}.`);
          this.advance();
          this.expect(".", `'.' after '${word("SUPER")}'`, `For example: ${word("SUPER")}.shuru(nam)`);
          const name = this.expect("NAME", "a method name", `For example: ${word("SUPER")}.shuru(nam)`);
          return { type: "SuperAttr", name: name.value, line: name.line, col: name.col };
        }
        case "FUNC":
          if (this.peekType(1) === "(") {
            this.advance();
            const [params, defaults] = this.parameters(`For example: ${word("FUNC")} (x) { ${word("RETURN")} x * 2 }`);
            const body = this.functionBody(this.methodDepth > 0);
            return { type: "FuncExpr", params, defaults, body, line: token.line };
          }
          break;
        case "(": {
          this.advance();
          this.skipNewlines();
          const expr = this.expression();
          this.skipNewlines();
          this.expect(")", "')'", "Did you forget to close the bracket?");
          return expr;
        }
        case "[": {
          this.advance();
          const items = this.commaList("]", () => this.expression());
          return { type: "ListLiteral", items, line: token.line };
        }
        case "{": {
          this.advance();
          const pairs = this.commaList("}", () => this.dictPair());
          return { type: "DictLiteral", pairs, line: token.line };
        }
        case "NEWLINE":
        case "EOF":
          throw this.error(`This line is unfinished. Expected a value here, but found ${describe(token, this.eofWord)}.`);
        default:
          break;
      }
      throw this.error(`BE didn't expect ${describe(token)} here.`);
    }
    template(token) {
      const parts = [];
      for (const part of token.value) {
        if (!(part instanceof TemplatePart)) {
          parts.push(part);
          continue;
        }
        const inner = new Parser(tokenize(part.source, part.line, part.col));
        inner.eofWord = "'}'";
        inner.methodDepth = this.methodDepth;
        const expr = inner.expression();
        if (!inner.check("EOF")) throw inner.error("Write one value inside { }, like {nam} or {boyosh + 1}.");
        parts.push(expr);
      }
      return { type: "Template", parts, line: token.line };
    }
    dictPair() {
      const key = this.expression();
      this.skipNewlines();
      this.expect(":", "':'", 'Dictionaries are written like this: {"nam": "Shuvo", "boyosh": 22}');
      this.skipNewlines();
      const value = this.expression();
      return [key, value];
    }
  }

  const parse = (source) => new Parser(tokenize(source)).parseProgram();

  // ----------------------------------------------------------------- builtins

  function pyMod(a, b) {
    const r = a % b;
    return r !== 0 && r < 0 !== b < 0 ? r + b : r;
  }

  function roundHalfUp(value, digits) {
    // Like Python's Decimal(repr(value)).quantize(..., ROUND_HALF_UP)
    const negative = value < 0 || Object.is(value, -0);
    const [mantissa, expText] = Math.abs(value).toExponential().split("e");
    const exp = Number(expText);
    let ds = mantissa.replace(".", "").split("").map(Number);
    let point = exp + 1;
    if (point < 0) {
      ds = new Array(-point).fill(0).concat(ds);
      point = 0;
    }
    const keep = point + digits;
    if (keep < 0) return negative ? -0 : 0;
    while (ds.length < keep + 1) ds.push(0);
    const roundUp = ds[keep] >= 5;
    ds = ds.slice(0, keep);
    if (roundUp) {
      let i = ds.length - 1;
      while (i >= 0) {
        if (ds[i] === 9) {
          ds[i] = 0;
          i -= 1;
        } else {
          ds[i] += 1;
          break;
        }
      }
      if (i < 0) {
        ds.unshift(1);
        point += 1;
      }
    }
    const whole = ds.slice(0, point).join("") || "0";
    const frac = ds.slice(point).join("");
    const result = Number(frac ? `${whole}.${frac}` : whole);
    return negative ? -result : result;
  }

  function parsePyNumber(text) {
    const clean = text.trim();
    if (/^[+-]?[0-9]+(_[0-9]+)*$/.test(clean)) return Number(clean.replace(/_/g, ""));
    const floatPattern = /^[+-]?(([0-9]+(_[0-9]+)*)(\.([0-9]+(_[0-9]+)*)?)?|\.[0-9]+(_[0-9]+)*)([eE][+-]?[0-9]+(_[0-9]+)*)?$/;
    if (floatPattern.test(clean)) return Number(clean.replace(/_/g, ""));
    return null;
  }

  function needList(name, v, line, which = "first") {
    if (!isList(v)) throw new BeTypeError(`${name}() needs a list as its ${which} input, not a ${typeName(v)}.`, line);
  }
  function needText(name, v, line, which = "first") {
    if (!isText(v)) throw new BeTypeError(`${name}() needs text as its ${which} input, not a ${typeName(v)}.`, line);
  }
  function needDict(name, v, line) {
    if (!isDict(v)) throw new BeTypeError(`${name}() needs a dictionary, not a ${typeName(v)}.`, line);
  }
  function comparable(name, values, line, verb = "compare") {
    if (values.every(isNumber) || values.every(isText)) return;
    throw new BeTypeError(`${name}() can only ${verb} all numbers or all text.`, line);
  }
  function lessThan(a, b) {
    return isText(a) ? pyLess(a, b) : a < b;
  }
  function pick(name, args, line, better) {
    let values;
    if (args.length === 1) {
      if (!isList(args[0])) throw new BeTypeError(`${name}() needs a list, or two or more values.`, line);
      values = args[0];
      if (!values.length) throw new BeRuntimeError(`${name}() got an empty list.`, line);
    } else {
      values = args;
    }
    comparable(name, values, line);
    let best = values[0];
    for (const v of values.slice(1)) if (better(v, best)) best = v;
    return best;
  }

  // JSON text with keys kept in order, like Python's json.dumps (plain objects would sort number keys first)
  function jsonText(v, indent, level) {
    if (v instanceof JsonObject || isList(v)) {
      const entries = isList(v) ? v.map((x) => [null, x]) : v.entries;
      if (!entries.length) return isList(v) ? "[]" : "{}";
      const [open, close] = isList(v) ? ["[", "]"] : ["{", "}"];
      const item = ([k, x]) => (k === null ? "" : JSON.stringify(k) + (indent ? ": " : ":")) + jsonText(x, indent, level + 1);
      if (!indent) return open + entries.map(item).join(",") + close;
      const pad = " ".repeat(indent * (level + 1));
      return open + "\n" + entries.map((e) => pad + item(e)).join(",\n") + "\n" + " ".repeat(indent * level) + close;
    }
    return JSON.stringify(v);
  }

  class JsonObject {
    constructor() {
      this.entries = [];
    }
  }

  function toJsonValue(v, line) {
    if (isNull(v) || typeof v === "boolean" || isText(v)) return isNull(v) ? null : v;
    if (isNumber(v)) {
      if (!Number.isFinite(v)) throw new BeRuntimeError("json_banao() can't save NaN or Infinity.", line);
      return v;
    }
    if (isList(v)) return v.map((x) => toJsonValue(x, line));
    if (isDict(v)) {
      const out = new JsonObject();
      for (const [k, x] of v) {
        let key;
        if (isText(k)) key = k;
        else if (isNull(k) || typeof k === "boolean" || isNumber(k)) key = toDisplay(k);
        else throw new BeTypeError(`json_banao() can't use a ${typeName(k)} as a key.`, line);
        out.entries.push([key, toJsonValue(x, line)]);
      }
      return out;
    }
    throw new BeTypeError(`json_banao() can't turn a ${typeName(v)} into JSON.`, line);
  }

  function fromJson(v) {
    if (isList(v)) return v.map(fromJson);
    if (v !== null && typeof v === "object") {
      const m = new Map();
      for (const k of Object.keys(v)) m.set(k, fromJson(v[k]));
      return m;
    }
    return v;
  }

  function textFind(text, item) {
    const a = chars(text);
    const b = chars(item);
    outer: for (let i = 0; i + b.length <= a.length; i++) {
      for (let j = 0; j < b.length; j++) if (a[i + j] !== b[j]) continue outer;
      return i;
    }
    return -1;
  }

  const BUILTIN_IMPLEMENTATIONS = {
    "lomba": (interp, args, line) => {
      const v = args[0];
      if (isText(v)) return chars(v).length;
      if (isList(v)) return v.length;
      if (isDict(v)) return v.size;
      throw new BeTypeError(`lomba() only works on text, a list or a dictionary, not on a ${typeName(v)}.`, line);
    },
    "jiggesh": (interp, args) => {
      const prompt = args.length ? toDisplay(args[0]) : "";
      const answer = interp.inputFn(prompt);
      return isNull(answer) ? "" : String(answer);
    },
    "shonkha": (interp, args, line) => {
      const v = args[0];
      if (isNumber(v)) return v;
      if (typeof v === "boolean") return v ? 1 : 0;
      if (isText(v)) {
        const n = parsePyNumber(v);
        if (n !== null && Number.isFinite(n)) return n;
        throw new BeTypeError(`"${v}" can't be turned into a number.`, line);
      }
      throw new BeTypeError(`shonkha() can't turn a ${typeName(v)} into a number.`, line);
    },
    "lekha": (interp, args) => toDisplay(args[0]),
    "dhoron": (interp, args) => typeName(args[0]),
    "jukto": (interp, args, line) => {
      needList("jukto", args[0], line);
      args[0].push(args[1]);
      return null;
    },
    "bad_dao": (interp, args, line) => {
      const items = args[0];
      needList("bad_dao", items, line);
      if (!items.length) throw new BeRuntimeError("Can't remove anything from an empty list.", line);
      const index = args.length > 1 ? args[1] : -1;
      if (!isWhole(index)) throw new BeTypeError("bad_dao() needs a whole number as the position.", line);
      if (!(-items.length <= index && index < items.length)) {
        throw new BeRuntimeError(
          `The list has no position ${index}. It has ${items.length} items (positions 0 to ${items.length - 1}).`,
          line
        );
      }
      return items.splice(index < 0 ? items.length + index : index, 1)[0];
    },
    "elomelo": (interp, args, line) => {
      const [low, high] = args;
      for (const v of [low, high]) if (!isWhole(v)) throw new BeTypeError("elomelo() needs two whole numbers.", line);
      if (low > high) throw new BeRuntimeError(`elomelo(${low}, ${high}): the first number can't be bigger than the second.`, line);
      return low + Math.floor(Math.random() * (high - low + 1));
    },
    "gol": (interp, args, line) => {
      const v = args[0];
      const digits = args.length > 1 ? args[1] : 0;
      if (!isNumber(v)) throw new BeTypeError(`gol() only works on numbers, not on a ${typeName(v)}.`, line);
      if (!isWhole(digits) || digits < 0) throw new BeTypeError("gol()'s second input must be a whole number, 0 or more.", line);
      if (!Number.isFinite(v)) return v;
      return roundHalfUp(v, digits);
    },
    "boro": (interp, args, line) => pick("boro", args, line, (a, b) => lessThan(b, a)),
    "choto": (interp, args, line) => pick("choto", args, line, (a, b) => lessThan(a, b)),
    "jogfol": (interp, args, line) => {
      needList("jogfol", args[0], line);
      let total = 0;
      for (const x of args[0]) {
        if (!isNumber(x)) throw new BeTypeError("jogfol() can only add up a list of numbers.", line);
        total = total + x;
      }
      return total;
    },
    "shajao": (interp, args, line) => {
      const items = args[0];
      needList("shajao", items, line);
      const keys = args.length > 1 ? items.map((item) => interp.call(args[1], [item], line)) : items.slice();
      comparable("shajao", keys, line, "sort");
      const order = items.map((_, i) => i);
      order.sort((i, j) => (lessThan(keys[i], keys[j]) ? -1 : lessThan(keys[j], keys[i]) ? 1 : 0));
      return order.map((i) => items[i]);
    },
    "ulta": (interp, args, line) => {
      const v = args[0];
      if (isList(v)) return v.slice().reverse();
      if (isText(v)) return chars(v).reverse().join("");
      throw new BeTypeError(`ulta() only works on a list or text, not on a ${typeName(v)}.`, line);
    },
    "bhag": (interp, args, line) => {
      const text = args[0];
      needText("bhag", text, line);
      if (args.length === 1) {
        const trimmed = text.trim();
        return trimmed === "" ? [] : trimmed.split(/\s+/);
      }
      needText("bhag", args[1], line, "second");
      if (args[1] === "") throw new BeRuntimeError("bhag()'s separator can't be empty text.", line);
      return text.split(args[1]);
    },
    "jora": (interp, args, line) => {
      needList("jora", args[0], line);
      const sep = args.length > 1 ? args[1] : "";
      needText("jora", sep, line, "second");
      return args[0].map(toDisplay).join(sep);
    },
    "bodlao": (interp, args, line) => {
      ["first", "second", "third"].forEach((which, i) => needText("bodlao", args[i], line, which));
      return args[0].split(args[1]).join(args[2]);
    },
    "boro_hater": (interp, args, line) => {
      needText("boro_hater", args[0], line);
      return args[0].toUpperCase();
    },
    "choto_hater": (interp, args, line) => {
      needText("choto_hater", args[0], line);
      return args[0].toLowerCase();
    },
    "parishkar": (interp, args, line) => {
      needText("parishkar", args[0], line);
      return args[0].trim();
    },
    "kothay": (interp, args, line) => {
      const [container, item] = args;
      if (isList(container)) {
        for (let i = 0; i < container.length; i++) if (beEqual(container[i], item)) return i;
        return -1;
      }
      if (isText(container)) {
        needText("kothay", item, line, "second");
        return textFind(container, item);
      }
      throw new BeTypeError(`kothay() only works on a list or text, not on a ${typeName(container)}.`, line);
    },
    "chabi": (interp, args, line) => {
      needDict("chabi", args[0], line);
      return Array.from(args[0].keys());
    },
    "man": (interp, args, line) => {
      needDict("man", args[0], line);
      return Array.from(args[0].values());
    },
    "borgomul": (interp, args, line) => {
      const v = args[0];
      if (!isNumber(v) || v < 0) throw new BeTypeError("borgomul() needs a number that is 0 or more.", line);
      return Math.sqrt(v);
    },
    "poromman": (interp, args, line) => {
      if (!isNumber(args[0])) throw new BeTypeError(`poromman() only works on numbers, not on a ${typeName(args[0])}.`, line);
      return Math.abs(args[0]);
    },
    "shomoy": () => Date.now() / 1000,
    "json_banao": (interp, args, line) => jsonText(toJsonValue(args[0], line), args.length > 1 && isTrue(args[1]) ? 2 : 0, 0),
    "json_porho": (interp, args, line) => {
      needText("json_porho", args[0], line);
      try {
        return fromJson(JSON.parse(args[0]));
      } catch (error) {
        throw new BeRuntimeError("json_porho() got text that isn't valid JSON.", line);
      }
    },

    // ---- only in the browser: the web page and JavaScript libraries
    "js": (interp, args, line) => {
      needText("js", args[0], line);
      let value = GLOBAL;
      for (const part of args[0].split(".")) {
        value = value === null || value === undefined ? undefined : value[part];
      }
      if (value === undefined) throw new BeRuntimeError(`JavaScript has no '${args[0]}' here.`, line);
      return value;
    },
    "khojo": (interp, args, line) => {
      needText("khojo", args[0], line);
      return pageDocument(line).querySelector(args[0]);
    },
    "shob_khojo": (interp, args, line) => {
      needText("shob_khojo", args[0], line);
      return Array.from(pageDocument(line).querySelectorAll(args[0]));
    },
    "banao": (interp, args, line) => {
      needText("banao", args[0], line);
      return pageDocument(line).createElement(args[0]);
    },
    "pore": (interp, args, line) => {
      if (!isNumber(args[0]) || args[0] < 0) throw new BeTypeError("pore() needs a number of seconds, 0 or more.", line);
      const fn = args[1];
      setTimeout(() => interp.runCallback(fn, []), args[0] * 1000);
      return null;
    },
    "notun": (interp, args, line) => {
      const Maker = args[0];
      if (typeof Maker !== "function") throw new BeTypeError(`notun() needs a JavaScript class, not a ${typeName(Maker)}.`, line);
      try {
        return new Maker(...args.slice(1).map((a) => interp.toJs(a, line)));
      } catch (error) {
        throw new BeRuntimeError(`notun() failed: ${error.name}: ${error.message}`, line);
      }
    },
  };

  const BROWSER_ONLY = ["js", "khojo", "shob_khojo", "banao", "pore", "notun"];
  const BROWSER_LIMITS = { js: [1, 1], khojo: [1, 1], shob_khojo: [1, 1], banao: [1, 1], pore: [2, 2], notun: [1, null] };

  // Where windows and websites appear in a page: an element with id="be-app", or the end of the page
  function defaultAppHost() {
    if (typeof GLOBAL.document === "undefined" || !GLOBAL.document.body) return null;
    return GLOBAL.document.getElementById("be-app") || GLOBAL.document.body;
  }

  function pageDocument(line) {
    if (typeof GLOBAL.document === "undefined") throw new BeRuntimeError("This only works inside a web page.", line);
    return GLOBAL.document;
  }

  // ------------------------------------------------- apps and websites (same words as on a computer)
  //
  // janala() and website() work here just like with `be run`. A janala() window is drawn on the
  // page (in the playground: in the preview), and a website() website opens in a small browser
  // frame where links, forms and fetch() are answered by your BE code.
  //
  //   window.lekha(lekha)  window.botam(lekha, kaj)  window.ghor(lekha)  window.sari()  (a row)
  //   window.pechon(rong)  window.chabi_chap(kaj (chabi) { })  window.pore(second, kaj)
  //   window.chalao()  window.bondho()
  //   text / button / box: bodlao(lekha) man() rong(rong) pechon(rong) akar(akar) dane()
  //   website(): site.pata("/", kaj (r) { }), site.fileguli("/static", "public"), site.porikkha("/"), site.chalao(8000)

  // A method of a BE object (a window, a website...): it gets BE values as they are.
  class NativeMethod {
    constructor(obj, name, fn) {
      this.obj = obj;
      this.name = name;
      this.fn = fn;
    }
  }

  function native(cls, beType, methods) {
    cls.prototype._be_native = true;
    if (beType) Object.defineProperty(cls.prototype, "beType", { value: beType, writable: true });
    for (const [name, params, min] of methods) {
      cls.prototype[name].beParams = params;
      cls.prototype[name].beMin = min === undefined ? params.length : min;
    }
  }

  const isNative = (v) => v !== null && typeof v === "object" && v._be_native === true;

  const APP_FONT = '"Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif';
  const APP_COLORS = { window: "#f4f7f5", text: "#18231c", button: "#dfe6e1", box: "#ffffff" };
  const NOT_KEYS = new Set([
    "Shift", "Control", "Alt", "Meta", "CapsLock", "NumLock", "ScrollLock", "AltGraph", "Dead",
    "Unidentified", "OS", "Hyper", "Super", "Fn", "FnLock", "Symbol", "SymbolLock", "Process",
  ]);

  function needColor(name, color) {
    if (!isText(color) || !color.trim()) throw new BeTypeError(`${name}() needs a color, like "red" or "#0d6b49".`);
    return color.trim();
  }

  function needKaj(handler, message) {
    if (!isBeFunction(handler)) throw new BeTypeError(message);
  }

  // Run a BE kaj for a click, a key or a timer. A kaj () { } simply ignores inputs it doesn't take.
  function callWithInputs(interp, handler, inputs) {
    const fn = handler instanceof BoundMethod ? handler.fn : handler;
    if (fn instanceof BeFunction) inputs = inputs.slice(0, fn.params.length);
    return interp.runCallback(handler, inputs);
  }

  function styleText(el, size) {
    el.style.fontFamily = APP_FONT;
    el.style.fontSize = size + "px";
    el.style.lineHeight = "1.35";
    el.style.margin = "0";
    el.style.boxSizing = "border-box";
    el.style.minWidth = "0";
  }

  class AppWidget {
    constructor(el, kind, isBox) {
      this.el = el;
      this.beType = kind;
      this.isBox = isBox;
    }
    bodlao(text) {
      if (this.isBox) this.el.value = toDisplay(text);
      else this.el.textContent = toDisplay(text);
      return this;
    }
    man() {
      return this.isBox ? this.el.value : this.el.textContent;
    }
    rong(color) {
      this.el.style.color = needColor("rong", color);
      return this;
    }
    pechon(color) {
      this.el.style.background = needColor("pechon", color);
      return this;
    }
    akar(size) {
      if (!isNumber(size) || size <= 0) throw new BeTypeError("akar() needs a text size, like 16 or 32.");
      // Sizes are points, like on a computer: 12 points = 16 pixels
      this.el.style.fontSize = (Math.round(size) * 4) / 3 + "px";
      return this;
    }
    dane() {
      this.el.style.textAlign = "right";
      return this;
    }
  }
  native(AppWidget, null, [["bodlao", ["lekha"]], ["man", []], ["rong", ["rong"]], ["pechon", ["rong"]], ["akar", ["akar"]], ["dane", []]]);

  // What a window and a row share: lekha(), botam() and ghor() put things inside them.
  class AppBox {
    lekha(text = "") {
      const el = this.doc.createElement("div");
      styleText(el, 16);
      el.style.color = APP_COLORS.text;
      el.style.whiteSpace = "pre-wrap";
      el.style.overflowWrap = "anywhere";
      el.style.minHeight = "1.35em";
      el.textContent = toDisplay(text);
      this.place(el);
      return new AppWidget(el, "text", false);
    }
    botam(text, handler) {
      needKaj(handler, "botam()'s second input must be a kaj to run when it is clicked.");
      const el = this.doc.createElement("button");
      el.type = "button";
      styleText(el, 16);
      el.style.cssText += ";border:0;border-radius:6px;padding:8px 12px;cursor:pointer;overflow:hidden;text-overflow:ellipsis";
      el.style.background = APP_COLORS.button;
      el.style.color = APP_COLORS.text;
      el.textContent = toDisplay(text);
      el.addEventListener("mousedown", (event) => event.preventDefault()); // keep the keyboard on the window
      el.addEventListener("click", () => callWithInputs(this.app.interp, handler, []));
      this.place(el);
      return new AppWidget(el, "button", false);
    }
    ghor(text = "") {
      const el = this.doc.createElement("input");
      styleText(el, 16);
      el.style.cssText += ";width:100%;padding:6px 8px;border:1px solid #b9c4bd;border-radius:4px";
      el.style.background = APP_COLORS.box;
      el.style.color = APP_COLORS.text;
      el.value = toDisplay(text);
      el.addEventListener("mousedown", (event) => event.stopPropagation()); // clicking a box puts the cursor in it
      this.place(el);
      return new AppWidget(el, "input box", true);
    }
  }

  class AppRow extends AppBox {
    constructor(window) {
      super();
      this.app = window;
      this.doc = window.doc;
      this.el = window.doc.createElement("div");
      this.el.style.cssText = "display:flex;gap:6px;min-width:0";
      window.place(this.el);
    }
    place(el) {
      el.style.flex = "1 1 0";
      this.el.appendChild(el);
    }
  }
  native(AppRow, "row", [["lekha", ["lekha"], 0], ["botam", ["lekha", "kajti"]], ["ghor", ["lekha"], 0]]);

  class AppWindow extends AppBox {
    constructor(interp, host, title, width, height) {
      super();
      this.interp = interp;
      this.app = this;
      this.doc = host.ownerDocument;
      this.timers = [];
      this.stops = [];
      this.el = this.doc.createElement("div");
      this.el.className = "be-window";
      this.el.tabIndex = 0;
      this.el.setAttribute("role", "application");
      this.el.setAttribute("aria-label", title);
      this.el.style.cssText =
        `width:${width}px;max-width:100%;border:1px solid #c3cdc6;border-radius:10px;overflow:hidden;` +
        "box-shadow:0 10px 30px rgba(0,0,0,.18);background:#e6ebe7;outline:none;margin:0 0 16px;font-family:" + APP_FONT;
      const bar = this.doc.createElement("div");
      bar.style.cssText =
        "display:flex;align-items:center;gap:6px;padding:7px 12px;font:600 13px/1.2 " + APP_FONT + ";color:#3b463f;user-select:none";
      for (const dot of ["#e5675b", "#e6b650", "#5fb96c"]) {
        const d = this.doc.createElement("span");
        d.style.cssText = `width:10px;height:10px;border-radius:50%;background:${dot};flex:none`;
        bar.appendChild(d);
      }
      const name = this.doc.createElement("span");
      name.textContent = title;
      name.style.cssText = "margin-left:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
      bar.appendChild(name);
      this.body = this.doc.createElement("div");
      this.body.style.cssText =
        `height:${height}px;max-height:80vh;padding:16px;box-sizing:border-box;overflow:auto;` +
        "display:flex;flex-direction:column;gap:8px";
      this.body.style.background = APP_COLORS.window;
      this.el.appendChild(bar);
      this.el.appendChild(this.body);
      this.el.addEventListener("mousedown", () => {
        try {
          this.el.focus({ preventScroll: true });
        } catch (error) {
          /* focus is optional */
        }
      });
      host.appendChild(this.el);
      interp.stops.push(() => this.close());
    }
    place(el) {
      this.body.appendChild(el);
    }
    sari() {
      return new AppRow(this);
    }
    pechon(color) {
      this.body.style.background = needColor("pechon", color);
      return this;
    }
    chabi_chap(handler) {
      needKaj(handler, "chabi_chap() needs a kaj to run when a key is pressed.");
      const doc = this.doc;
      const onKey = (event) => {
        if (!this.el.isConnected) return;
        const target = event.target;
        const inside = target && this.el.contains(target);
        const free = !target || target === doc.body || target === doc.documentElement;
        if (!(inside || free) || event.ctrlKey || event.metaKey || event.altKey || NOT_KEYS.has(event.key)) return;
        const typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA");
        if (!typing && event.key !== "Tab") event.preventDefault();
        callWithInputs(this.interp, handler, [event.key]);
      };
      doc.addEventListener("keydown", onKey);
      this.stops.push(() => doc.removeEventListener("keydown", onKey));
      try {
        this.el.focus({ preventScroll: true });
      } catch (error) {
        /* focus is optional */
      }
      return null;
    }
    pore(seconds, handler) {
      if (!isNumber(seconds) || seconds < 0) throw new BeTypeError("pore() needs a number of seconds, 0 or more.");
      needKaj(handler, "pore()'s second input must be a kaj to run later.");
      const id = setTimeout(() => {
        if (this.el.isConnected) callWithInputs(this.interp, handler, []);
      }, seconds * 1000);
      this.timers.push(id);
      return null;
    }
    chalao() {
      // On a computer the program waits here until the window closes. In a page the window is already open.
      return null;
    }
    bondho() {
      this.close();
      return null;
    }
    close() {
      for (const id of this.timers) clearTimeout(id);
      for (const stop of this.stops) stop();
      this.timers = [];
      this.stops = [];
      this.el.remove();
    }
  }
  native(AppWindow, "window", [
    ["lekha", ["lekha"], 0], ["botam", ["lekha", "kajti"]], ["ghor", ["lekha"], 0], ["sari", []],
    ["pechon", ["rong"]], ["chabi_chap", ["kajti"]], ["pore", ["second", "kajti"]], ["chalao", []], ["bondho", []],
  ]);

  // ---- Banglish words for page elements: khojo("#id") and banao("li") give elements that have them
  //   el.bodlao(lekha)  el.man()  el.html(lekha)  el.rong(rong)  el.pechon(rong)  el.akar(akar)  el.dane()
  //   el.chap(kaj)  el.chabi_chap(kaj (chabi) { })  el.jog(jinish)  el.muchho()  el.chinho(nam, sotti)
  //   el.lukao(sotti)  el.bad()
  const isField = (el) => el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT";
  function pageWord(fn, params, min) {
    fn.beParams = params;
    fn.beMin = min === undefined ? params.length : min;
    return fn;
  }
  const PAGE_WORDS = {
    bodlao: pageWord(function (lekha) {
      if (isField(this)) this.value = toDisplay(lekha);
      else this.textContent = toDisplay(lekha);
      return this;
    }, ["lekha"]),
    man: pageWord(function () {
      return isField(this) ? this.value : this.textContent;
    }, []),
    html: pageWord(function (lekha) {
      this.innerHTML = toDisplay(lekha);
      return this;
    }, ["lekha"]),
    rong: pageWord(function (rong) {
      this.style.color = needColor("rong", rong);
      return this;
    }, ["rong"]),
    pechon: pageWord(function (rong) {
      this.style.background = needColor("pechon", rong);
      return this;
    }, ["rong"]),
    akar: pageWord(function (akar) {
      if (!isNumber(akar) || akar <= 0) throw new BeTypeError("akar() needs a text size, like 16 or 32.");
      this.style.fontSize = (Math.round(akar) * 4) / 3 + "px";
      return this;
    }, ["akar"]),
    dane: pageWord(function () {
      this.style.textAlign = "right";
      return this;
    }, []),
    chap: pageWord(function (kajti) {
      needKaj(kajti, "chap() needs a kaj to run when it is clicked.");
      const interp = this.__beInterp;
      this.addEventListener("click", (event) => callWithInputs(interp, kajti, [event]));
      return this;
    }, ["kajti"]),
    chabi_chap: pageWord(function (kajti) {
      needKaj(kajti, "chabi_chap() needs a kaj to run when a key is pressed.");
      const interp = this.__beInterp;
      this.addEventListener("keydown", (event) => {
        if (!NOT_KEYS.has(event.key)) callWithInputs(interp, kajti, [event.key, event]);
      });
      return this;
    }, ["kajti"]),
    jog: pageWord(function (jinish) {
      const doc = this.ownerDocument;
      this.appendChild(jinish && jinish.nodeType ? jinish : doc.createTextNode(toDisplay(jinish)));
      return this;
    }, ["jinish"]),
    muchho: pageWord(function () {
      if (isField(this)) this.value = "";
      else this.textContent = "";
      return this;
    }, []),
    chinho: pageWord(function (nam, ache = true) {
      if (!isText(nam)) throw new BeTypeError('chinho() needs a mark name, like "done".');
      this.classList.toggle(nam, isTrue(ache));
      return this;
    }, ["nam", "ache"], 1),
    lukao: pageWord(function (lukano = true) {
      this.hidden = isTrue(lukano);
      return this;
    }, ["lukano"], 0),
    bad: pageWord(function () {
      this.remove();
      return null;
    }, []),
  };
  const isElement = (v) => v !== null && typeof v === "object" && v.nodeType === 1 && typeof v.tagName === "string";

  // ---- websites

  class SiteAnswer {
    constructor(body, status, type) {
      this.body = body;
      this.status = status;
      this.contentType = type;
    }
  }
  native(SiteAnswer, "answer", []);

  const MIME = {
    css: "text/css", js: "application/javascript", html: "text/html", htm: "text/html", txt: "text/plain",
    json: "application/json", svg: "image/svg+xml", xml: "text/xml", csv: "text/csv", md: "text/markdown",
  };

  function htmlEscape(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function routePattern(route) {
    if (route === "/") return /^\/$/;
    let regex = "";
    for (const part of route.split(/(:[A-Za-z_][A-Za-z0-9_]*)/)) {
      if (part.startsWith(":")) regex += `(?<${part.slice(1)}>[^/]+)`;
      else regex += part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    return new RegExp(`^${regex}/?$`);
  }

  function queryDict(text) {
    const out = new Map();
    for (const [k, v] of new URLSearchParams(text)) out.set(k, v);
    return out;
  }

  // JSON the way a website sends it: {"a": 1, "b": [2, 3]}
  function siteJson(v) {
    if (v instanceof JsonObject || isList(v)) {
      const entries = isList(v) ? v.map((x) => [null, x]) : v.entries;
      const [open, close] = isList(v) ? ["[", "]"] : ["{", "}"];
      return open + entries.map(([k, x]) => (k === null ? "" : JSON.stringify(k) + ": ") + siteJson(x)).join(", ") + close;
    }
    return JSON.stringify(v);
  }

  class Website {
    constructor(interp) {
      this.interp = interp;
      this.routes = []; // [method or null, pattern, route, handler]
      this.folders = []; // [url prefix, folder]
    }
    pata(route, handler, method = null) {
      if (!isText(route) || !route.startsWith("/")) throw new BeTypeError('pata()\'s first input must be text starting with "/", like "/" or "/about".');
      if (!isBeFunction(handler)) throw new BeTypeError("pata()'s second input must be a kaj that makes the page.");
      if (!isNull(method) && !isText(method)) throw new BeTypeError('pata()\'s poddhoti must be text, like "GET" or "POST".');
      this.routes.push([isNull(method) ? null : method.toUpperCase(), routePattern(route), route, handler]);
      return null;
    }
    fileguli(prefix, directory) {
      if (!isText(prefix) || !prefix.startsWith("/")) throw new BeTypeError('fileguli()\'s first input must be text starting with "/", like "/static".');
      if (!isText(directory)) throw new BeTypeError("fileguli()'s second input must be the name of a folder.");
      const here = this.interp.folders[this.interp.folders.length - 1];
      this.folders.push([prefix.replace(/\/+$/, "") || "/", normalize((here ? here + "/" : "") + directory)]);
      return null;
    }
    porikkha(path, method = "GET", body = "") {
      if (!isText(path)) throw new BeTypeError('porikkha() needs a page address, like "/".');
      if (!isText(method)) throw new BeTypeError('porikkha()\'s poddhoti must be text, like "GET" or "POST".');
      let headers = {};
      if (isDict(body)) {
        const form = new URLSearchParams();
        for (const [k, v] of body) form.append(toDisplay(k), toDisplay(v));
        body = form.toString();
        headers = { "Content-Type": "application/x-www-form-urlencoded" };
      }
      const [status, type, text] = this.handle(method.toUpperCase(), path, toDisplay(body), headers);
      return new Map([["abostha", status], ["dhoron", type], ["lekha", text]]);
    }
    chalao(port = 8000) {
      if (!isWhole(port)) throw new BeTypeError("chalao() needs a port number, like 8000.");
      const host = this.interp.appHost("website", `http://localhost:${port}`);
      if (!host) throw new BeRuntimeError("chalao() needs a web page to show the website in. On a computer, use be run.");
      new SiteFrame(this, host, port);
      return null;
    }

    // Find the right page for a request and make it. Gives [status, type, text].
    handle(method, rawPath, body, headers) {
      const q = rawPath.indexOf("?");
      let path = q < 0 ? rawPath : rawPath.slice(0, q);
      const query = q < 0 ? "" : rawPath.slice(q + 1);
      try {
        path = decodeURIComponent(path) || "/";
      } catch (error) {
        path = path || "/";
      }
      for (const [prefix, directory] of this.folders) {
        if (path === prefix || path.startsWith(prefix.replace(/\/+$/, "") + "/")) {
          const full = normalize(directory + "/" + path.slice(prefix.length).replace(/^\/+/, ""));
          if (full.startsWith(directory)) {
            const text = this.interp.readFile(full);
            if (text !== null && text !== undefined) {
              let kind = MIME[(full.split(".").pop() || "").toLowerCase()] || "application/octet-stream";
              if (kind.startsWith("text/") || kind === "application/javascript" || kind === "application/json") kind += "; charset=utf-8";
              return [200, kind, text];
            }
          }
        }
      }
      for (const [routeMethod, pattern, , handler] of this.routes) {
        const found = pattern.exec(path);
        if (!found || (routeMethod && routeMethod !== method && !(routeMethod === "GET" && method === "HEAD"))) continue;
        const request = this.makeRequest(method, path, query, body, headers, found.groups || {});
        const fn = handler instanceof BoundMethod ? handler.fn : handler;
        const inputs = fn instanceof BeFunction && fn.params.length === 0 ? [] : [request];
        let result;
        this.interp.started = Date.now();
        try {
          result = this.interp.call(handler, inputs, null);
        } catch (error) {
          let problem = error;
          if (error instanceof RangeError) problem = new BeRuntimeError("The program went too deep (too much recursion).");
          if (!(problem instanceof BeError)) throw error;
          this.interp.onError(problem);
          return [500, "text/html; charset=utf-8", `<h1>500: the BE code for this page has a mistake</h1><pre>${htmlEscape(problem.toString())}</pre>`];
        }
        return this.makeAnswer(result);
      }
      return [404, "text/html; charset=utf-8", `<h1>404</h1><p>${htmlEscape("Page not found: " + path)}</p>`];
    }
    makeRequest(method, path, query, body, headers, params) {
      const lower = new Map();
      for (const [k, v] of Object.entries(headers)) lower.set(k.toLowerCase(), v);
      const type = lower.get("content-type") || "";
      let form = new Map();
      let data = null;
      if (type.includes("application/x-www-form-urlencoded")) form = queryDict(body);
      else if (type.includes("application/json") && body) {
        try {
          data = fromJson(JSON.parse(body));
        } catch (error) {
          data = null;
        }
      }
      // What the visitor sent, with Banglish names: r.ongsho, r.ghor, r.prosno, ...
      return new Map([
        ["poddhoti", method], ["thikana", path], ["prosno", queryDict(query)], ["ongsho", new Map(Object.entries(params))],
        ["ghor", form], ["json", data], ["lekha", body], ["tottho", lower],
      ]);
    }
    makeAnswer(result) {
      let status = 200;
      let type = null;
      if (result instanceof SiteAnswer) {
        status = result.status;
        type = result.contentType;
        result = result.body;
      }
      if (isNull(result)) return [status, type || "text/plain; charset=utf-8", ""];
      if (isList(result) || isDict(result)) return [status, type || "application/json; charset=utf-8", siteJson(toJsonValue(result, null))];
      return [status, type || "text/html; charset=utf-8", toDisplay(result)];
    }
  }
  native(Website, "website", [
    ["pata", ["thikana", "kajti", "poddhoti"], 2], ["fileguli", ["thikana", "jayga"]],
    ["porikkha", ["thikana", "poddhoti", "tottho"], 1], ["chalao", ["port"], 0],
  ]);

  // The little browser a website opens in: an address bar and a frame. Links, forms and
  // fetch() inside the frame are sent to the BE website instead of the internet.
  let siteCount = 0;
  class SiteFrame {
    constructor(site, host, port) {
      this.site = site;
      this.port = port;
      this.id = "be-site-" + ++siteCount + "-" + Math.random().toString(36).slice(2);
      this.current = "/";
      this.history = [];
      const doc = host.ownerDocument;
      this.doc = doc;
      this.el = doc.createElement("div");
      this.el.className = "be-site";
      this.el.style.cssText =
        "border:1px solid #c3cdc6;border-radius:10px;overflow:hidden;background:#e6ebe7;margin:0 0 16px;box-shadow:0 10px 30px rgba(0,0,0,.14)";
      const bar = doc.createElement("form");
      bar.style.cssText = "display:flex;gap:6px;align-items:center;padding:6px 8px";
      const back = doc.createElement("button");
      const reload = doc.createElement("button");
      for (const [b, text, label] of [[back, "←", "Back"], [reload, "⟳", "Reload"]]) {
        b.type = "button";
        b.textContent = text;
        b.setAttribute("aria-label", label);
        b.title = label;
        b.style.cssText = "border:0;background:transparent;font:16px/1 " + APP_FONT + ";color:#3b463f;padding:4px 8px;border-radius:6px;cursor:pointer;min-height:0";
        bar.appendChild(b);
      }
      this.address = doc.createElement("input");
      this.address.setAttribute("aria-label", "Page address");
      this.address.style.cssText =
        "flex:1;min-width:0;border:1px solid #c3cdc6;border-radius:999px;padding:5px 12px;font:14px " + APP_FONT + ";background:#fff;color:#18231c";
      bar.appendChild(this.address);
      this.frame = doc.createElement("iframe");
      this.frame.setAttribute("sandbox", "allow-scripts allow-forms allow-modals");
      this.frame.setAttribute("title", "Website preview");
      this.frame.style.cssText = "display:block;width:100%;height:460px;border:0;background:#fff";
      this.el.appendChild(bar);
      this.el.appendChild(this.frame);
      host.appendChild(this.el);

      back.addEventListener("click", () => {
        if (this.history.length) this.go("GET", this.history.pop(), "", {}, false);
      });
      reload.addEventListener("click", () => this.go("GET", this.current, "", {}, false));
      bar.addEventListener("submit", (event) => {
        event.preventDefault();
        const typed = this.address.value.replace(/^\s*(https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?/i, "").trim();
        this.go("GET", typed || "/");
      });
      const view = doc.defaultView;
      this.onMessage = (event) => {
        const data = event.data;
        if (!data || data.beSite !== this.id || event.source !== this.frame.contentWindow) return;
        if (data.kind === "go") {
          let url = String(data.url || "");
          if (data.form && data.method === "GET") {
            url = (url || this.current).split("?")[0] + "?" + data.body;
            this.go("GET", url);
          } else if (data.form) {
            this.go(data.method, url || this.current, data.body, { "Content-Type": "application/x-www-form-urlencoded" });
          } else {
            this.go("GET", url);
          }
        } else if (data.kind === "fetch") {
          const headers = data.type ? { "Content-Type": data.type } : {};
          const [status, type, text] = site.handle(data.method, this.resolve(String(data.url)), String(data.body || ""), headers);
          event.source.postMessage({ beSite: this.id, kind: "reply", id: data.id, status, type, body: text }, "*");
        }
      };
      view.addEventListener("message", this.onMessage);
      site.interp.stops.push(() => {
        view.removeEventListener("message", this.onMessage);
        this.el.remove();
      });
      this.go("GET", "/", "", {}, false);
    }

    resolve(url) {
      const base = "http://localhost:" + this.port;
      try {
        const full = new URL(url, base + this.current);
        return full.pathname + full.search;
      } catch (error) {
        return "/";
      }
    }

    go(method, url, body = "", headers = {}, remember = true) {
      const path = this.resolve(url);
      if (remember && path !== this.current) this.history.push(this.current);
      const [status, type, text] = this.site.handle(method, path, body, headers);
      this.current = path.split("#")[0];
      this.address.value = "localhost:" + this.port + this.current;
      let html = text;
      if (/^text\/html/i.test(type)) {
        // <meta http-equiv="refresh" content="0; url=/"> goes to another page, like a real browser
        const refresh = /<meta[^>]+http-equiv\s*=\s*["']?refresh["']?[^>]*>/i.exec(html);
        if (refresh) {
          html = html.replace(refresh[0], "");
          const found = /content\s*=\s*["']?\s*(\d+)\s*;\s*url\s*=\s*([^"'>\s]+)/i.exec(refresh[0]);
          if (found) setTimeout(() => this.el.isConnected && this.go("GET", found[2], "", {}, false), Number(found[1]) * 1000);
        }
        html = this.inline(html);
      } else {
        html = `<pre style="margin:0;padding:12px 14px;font:13px/1.5 ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap">${htmlEscape(text)}</pre>`;
      }
      if (status >= 400 && !/^text\/html/i.test(type)) html = `<p style="font-family:sans-serif;color:#8a1c12;padding:0 14px">${status}</p>` + html;
      this.frame.srcdoc = this.helper() + html;
    }

    // CSS and JavaScript files from the website's folders are put straight into the page
    inline(html) {
      const local = (src) => !/^(https?:)?\/\//i.test(src) && !/^(data|blob):/i.test(src);
      html = html.replace(/<link\b[^>]*>/gi, (tag) => {
        const href = /href\s*=\s*["']?([^"'\s>]+)/i.exec(tag);
        if (!/rel\s*=\s*["']?stylesheet/i.test(tag) || !href || !local(href[1])) return tag;
        const [status, , text] = this.site.handle("GET", this.resolve(href[1]), "", {});
        return status === 200 ? `<style>${text}</style>` : tag;
      });
      return html.replace(/<script\b([^>]*)\bsrc\s*=\s*["']?([^"'\s>]+)["']?([^>]*)>\s*<\/script>/gi, (tag, before, src, after) => {
        if (!local(src)) return tag;
        const [status, , text] = this.site.handle("GET", this.resolve(src), "", {});
        return status === 200 ? `<script${before}${after}>${text.replace(/<\/script/gi, "<\\/script")}</script>` : tag;
      });
    }

    helper() {
      return (
        "<script>(function(){var ID=" + JSON.stringify(this.id) + ";function send(m){m.beSite=ID;parent.postMessage(m,'*');}" +
        "document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href]');if(!a)return;" +
        "var h=a.getAttribute('href');if(/^(https?:|mailto:|tel:|javascript:|#)/i.test(h)){if(/^https?:/i.test(h)){a.target='_blank';}return;}" +
        "e.preventDefault();send({kind:'go',url:h});},true);" +
        "document.addEventListener('submit',function(e){var f=e.target;e.preventDefault();var m=(f.getAttribute('method')||'GET').toUpperCase();" +
        "send({kind:'go',form:true,method:m,url:f.getAttribute('action')||'',body:new URLSearchParams(new FormData(f)).toString()});},true);" +
        "var waiting={},n=0;window.fetch=function(u,o){o=o||{};var hd=o.headers||{};var t=hd['Content-Type']||hd['content-type']||'';" +
        "var b=o.body;if(b===undefined||b===null)b='';if(b instanceof URLSearchParams){t=t||'application/x-www-form-urlencoded';b=b.toString();}" +
        "return new Promise(function(ok){var id=++n;waiting[id]=ok;send({kind:'fetch',id:id,method:(o.method||'GET').toUpperCase(),url:String(u),body:String(b),type:t});});};" +
        "window.addEventListener('message',function(e){var d=e.data;if(!d||d.beSite!==ID||d.kind!=='reply')return;var ok=waiting[d.id];if(!ok)return;" +
        "delete waiting[d.id];ok(new Response(d.body,{status:d.status,headers:{'Content-Type':d.type}}));});})();</script>"
      );
    }
  }

  const APP_BUILTINS = {
    "website": [(interp) => new Website(interp), 0, 0],
    "uttor": [
      (interp, args, line) => {
        const status = args.length > 1 ? args[1] : 200;
        const type = args.length > 2 ? args[2] : null;
        if (!isWhole(status)) throw new BeTypeError("uttor()'s second input must be a status number, like 200 or 404.", line);
        if (!isNull(type)) needText("uttor", type, line, "third");
        return new SiteAnswer(args[0], status, type);
      },
      1,
      3,
    ],
    "janala": [
      (interp, args, line) => {
        needText("janala", args[0], line);
        const width = args.length > 1 ? args[1] : 420;
        const height = args.length > 2 ? args[2] : 320;
        if (!isNumber(width) || !isNumber(height)) throw new BeTypeError("janala()'s width and height must be numbers.", line);
        const host = interp.appHost("app", args[0]);
        if (!host) throw new BeRuntimeError("janala() needs a screen. Run it with be run on a computer, or in the BE Playground.", line);
        return new AppWindow(interp, host, args[0], Math.trunc(width), Math.trunc(height));
      },
      1,
      3,
    ],
  };

  // -------------------------------------------------------------- interpreter

  const MAX_CALL_DEPTH = 400;
  const INIT_METHOD = "shuru";
  const THIS_KEY = "\0ei";
  const VALUE_WORDS = [WORD_FOR.TRUE, WORD_FOR.FALSE, WORD_FOR.NULL];
  const plural = (count, w) => (count === 1 ? `${count} ${w}` : `${count} ${w}s`);

  class BreakSignal {}
  class ContinueSignal {}
  class ReturnSignal {
    constructor(value) {
      this.value = value;
    }
  }

  class Environment {
    constructor(parent = null, functionScope = false, methodClass = null) {
      this.values = new Map();
      this.parent = parent;
      this.functionScope = functionScope;
      this.methodClass = methodClass;
    }
    define(name, value) {
      this.values.set(name, value);
    }
    find(name) {
      for (let env = this; env; env = env.parent) if (env.values.has(name)) return env;
      return null;
    }
    visibleNames() {
      const names = [];
      for (let env = this; env; env = env.parent) for (const n of env.values.keys()) if (!n.startsWith("\0")) names.push(n);
      return names;
    }
    missing(name, line, col) {
      const suggestion = closest(name, [...this.visibleNames(), ...VALUE_WORDS, ...Object.values(WORD_FOR)], false);
      const message = suggestion
        ? `'${name}' is not defined.${hint(suggestion)}`
        : `'${name}' is not defined. Give it a value first, for example: ${name} = 0`;
      return new BeNameError(message, line, col);
    }
    get(name, line, col = null) {
      const env = this.find(name);
      if (!env) throw this.missing(name, line, col);
      return env.values.get(name);
    }
    owner() {
      let env = this;
      while (!env.functionScope) env = env.parent;
      return env;
    }
    assign(name, value) {
      const env = this.find(name);
      (env && env.parent !== null ? env : this.owner()).values.set(name, value);
    }
    currentMethodClass() {
      for (let env = this; env; env = env.parent) if (env.methodClass) return env.methodClass;
      return null;
    }
  }

  function dirname(path) {
    const i = path.lastIndexOf("/");
    return i < 0 ? "" : path.slice(0, i);
  }
  function basename(path) {
    return path.slice(path.lastIndexOf("/") + 1);
  }
  function normalize(path) {
    const out = [];
    for (const part of path.replace(/\\/g, "/").split("/")) {
      if (part === "" || part === ".") continue;
      if (part === "..") out.pop();
      else out.push(part);
    }
    return out.join("/");
  }

  class TimeUp extends BeRuntimeError {}

  // file_porho, file_lekho, file_jog and file_ache on a pretend folder (same messages as on a computer)
  function fileWords(files) {
    const where = (interp, path) => normalize(interp.folders[interp.folders.length - 1] + "/" + path);
    const write = (name, interp, args, line, add) => {
      needText(name, args[0], line);
      needText(name, args[1], line, "second");
      const path = where(interp, args[0]);
      const before = add ? files.read(path) : null;
      files.write(path, (before === null || before === undefined ? "" : before) + args[1]);
      return null;
    };
    return {
      file_porho: [
        (interp, args, line) => {
          needText("file_porho", args[0], line);
          const text = files.read(where(interp, args[0]));
          if (text === null || text === undefined) throw new BeRuntimeError(`File not found: "${args[0]}"`, line);
          return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
        },
        1,
        1,
      ],
      file_lekho: [(interp, args, line) => write("file_lekho", interp, args, line, false), 2, 2],
      file_jog: [(interp, args, line) => write("file_jog", interp, args, line, true), 2, 2],
      file_ache: [
        (interp, args, line) => {
          needText("file_ache", args[0], line);
          const text = files.read(where(interp, args[0]));
          return text !== null && text !== undefined;
        },
        1,
        1,
      ],
    };
  }

  class Interpreter {
    constructor(options = {}) {
      this.output = options.output || ((text) => console.log(text));
      this.inputFn = options.input || (() => "");
      this.readFile = options.readFile || (() => null);
      this.onError = options.onError || ((error) => console.error(formatError(error, error.source, error.filename)));
      this.timeLimitMs = options.timeLimitMs || Infinity;
      this.appHost = options.appHost || defaultAppHost;
      this.stops = []; // closes windows and websites when the program is stopped
      this.started = Date.now();
      this.steps = 0;
      this.callDepth = 0;
      this.folders = [""];
      this.imported = new Set();
      this.builtins = new Environment(null, true);
      for (const [name, info] of Object.entries(WORDS.builtins)) {
        this.builtins.define(name, new BuiltinFunction(name, BUILTIN_IMPLEMENTATIONS[name], info.min, info.max));
      }
      for (const name of BROWSER_ONLY) {
        const [low, high] = BROWSER_LIMITS[name];
        this.builtins.define(name, new BuiltinFunction(name, BUILTIN_IMPLEMENTATIONS[name], low, high));
      }
      for (const name of WORDS.computer_only) {
        this.builtins.define(
          name,
          new BuiltinFunction(
            name,
            (interp, args, line) => {
              throw new BeRuntimeError(`${name}() only works on a computer (be run file.be), not in the browser.`, line);
            },
            0,
            null
          )
        );
      }
      for (const [name, [fn, low, high]] of Object.entries(APP_BUILTINS)) {
        this.builtins.define(name, new BuiltinFunction(name, fn, low, high));
      }
      // options.files is a pretend folder: { read(path) -> text or null, write(path, text) }.
      // With it, the file words work in the browser too (the Learn page gives one).
      if (options.files) {
        for (const [name, [fn, low, high]] of Object.entries(fileWords(options.files))) {
          this.builtins.define(name, new BuiltinFunction(name, fn, low, high));
        }
      }
      this.globals = new Environment(this.builtins, true);
    }

    // Close the windows and websites this program opened
    stop() {
      for (const stop of this.stops.splice(0)) stop();
    }

    run(program, options = {}) {
      const echo = options.echo || false;
      const path = options.path;
      if (path !== undefined && path !== null) {
        const full = normalize(path);
        this.folders.push(dirname(full));
        this.imported.add(full);
      }
      try {
        for (const statement of program.statements) {
          if (echo && statement.type === "ExprStmt") {
            const value = this.evaluate(statement.expr, this.globals);
            if (!isNull(value)) this.output(toRepr(value));
          } else {
            this.execute(statement, this.globals);
          }
        }
      } catch (error) {
        if (error instanceof RangeError) {
          this.callDepth = 0;
          throw new BeRuntimeError(
            "The program went too deep (too much recursion). Does a function call itself without a stopping condition?"
          );
        }
        throw error;
      } finally {
        if (path !== undefined && path !== null) this.folders.pop();
      }
    }

    // A BE function called later by the page (a click, a timer): mistakes are shown, not thrown.
    runCallback(fn, args) {
      this.started = Date.now();
      try {
        return this.call(fn, args, null);
      } catch (error) {
        if (error instanceof BeError) {
          this.onError(error);
          return null;
        }
        if (error instanceof RangeError) {
          this.onError(new BeRuntimeError("The program went too deep (too much recursion)."));
          return null;
        }
        throw error;
      }
    }

    tick() {
      this.steps += 1;
      if (this.steps % 5000 === 0 && Date.now() - this.started > this.timeLimitMs) {
        throw new TimeUp(
          `The program ran for more than ${Math.round(this.timeLimitMs / 1000)} seconds, so it was stopped. Does a loop never end?`
        );
      }
    }

    execute(node, env) {
      this.tick();
      this["exec" + node.type](node, env);
    }

    executeBlock(block, env) {
      const inner = new Environment(env);
      for (const statement of block.statements) this.execute(statement, inner);
    }

    execLetStmt(node, env) {
      env.owner().define(node.name, this.evaluate(node.value, env));
    }
    execPrintStmt(node, env) {
      this.output(node.values.map((v) => toDisplay(this.evaluate(v, env))).join(" "));
    }
    execExprStmt(node, env) {
      this.evaluate(node.expr, env);
    }
    execAssignStmt(node, env) {
      const target = node.target;
      if (target.type === "Name") {
        let value;
        if (node.op !== "=") {
          const old = env.get(target.name, target.line, target.col);
          value = this.binary(node.op[0], old, this.evaluate(node.value, env), node.line, null);
        } else {
          value = this.evaluate(node.value, env);
        }
        env.assign(target.name, value);
        return;
      }
      if (target.type === "Attribute") {
        const obj = this.evaluate(target.target, env);
        let value = this.evaluate(node.value, env);
        if (node.op !== "=") {
          const old = this.getAttribute(obj, target.name, target.line, target.col);
          value = this.binary(node.op[0], old, value, node.line, null);
        }
        this.setAttribute(obj, target.name, value, target.line, target.col);
        return;
      }
      const container = this.evaluate(target.target, env);
      const index = this.evaluate(target.index, env);
      let value = this.evaluate(node.value, env);
      if (node.op !== "=") {
        const old = this.getIndex(container, index, target.line, target.col);
        value = this.binary(node.op[0], old, value, node.line, null);
      }
      this.setIndex(container, index, value, target.line, target.col);
    }
    execIfStmt(node, env) {
      for (const [condition, block] of node.branches) {
        if (isTrue(this.evaluate(condition, env))) {
          this.executeBlock(block, env);
          return;
        }
      }
      if (node.elseBlock) this.executeBlock(node.elseBlock, env);
    }
    loopRound(body, env) {
      try {
        this.executeBlock(body, env);
      } catch (signal) {
        if (signal instanceof BreakSignal) return false;
        if (signal instanceof ContinueSignal) return true;
        throw signal;
      }
      return true;
    }
    execWhileStmt(node, env) {
      while (isTrue(this.evaluate(node.condition, env))) if (!this.loopRound(node.body, env)) break;
    }
    execForRangeStmt(node, env) {
      const start = this.evaluate(node.start, env);
      const end = this.evaluate(node.end, env);
      let step = node.step !== null ? this.evaluate(node.step, env) : null;
      for (const v of step !== null ? [start, end, step] : [start, end]) {
        if (!isNumber(v)) {
          throw new BeTypeError(
            `'${WORD_FOR.FOR}' needs numbers for its start, end and '${WORD_FOR.STEP}', not a ${typeName(v)}.`,
            node.line
          );
        }
      }
      if (step === null) step = start <= end ? 1 : -1;
      if (step === 0) throw new BeRuntimeError(`'${WORD_FOR.STEP}' can't be 0, or the loop would never end.`, node.line);
      let current = start;
      while ((step > 0 && current <= end) || (step < 0 && current >= end)) {
        const loopEnv = new Environment(env); // a fresh i every round, so a kaj made inside keeps its own i
        loopEnv.define(node.variable, current);
        if (!this.loopRound(node.body, loopEnv)) break;
        current += step;
      }
    }
    execRepeatStmt(node, env) {
      const count = this.evaluate(node.count, env);
      if (!isWhole(count) || count < 0) {
        throw new BeTypeError(
          `'${WORD_FOR.FOR} ... ${WORD_FOR.TIMES}' needs a whole number that is 0 or more, not ${toRepr(count)}.`,
          node.line
        );
      }
      for (let i = 0; i < count; i++) if (!this.loopRound(node.body, env)) break;
    }
    execForEachStmt(node, env) {
      const collection = this.evaluate(node.iterable, env);
      let items;
      if (isList(collection)) items = collection.slice();
      else if (isText(collection)) items = chars(collection);
      else if (isDict(collection)) items = Array.from(collection.keys());
      else {
        throw new BeTypeError(
          `'${WORD_FOR.EACH}' only works on a list, text or dictionary, not on a ${typeName(collection)}.`,
          node.line
        );
      }
      for (const item of items) {
        const loopEnv = new Environment(env);
        loopEnv.define(node.variable, item);
        if (!this.loopRound(node.body, loopEnv)) break;
      }
    }
    execBreakStmt() {
      throw new BreakSignal();
    }
    execContinueStmt() {
      throw new ContinueSignal();
    }
    execFuncDef(node, env) {
      env.owner().define(node.name, new BeFunction(node.name, node.params, node.body, env, null, node.defaults));
    }
    execClassDef(node, env) {
      let parent = null;
      if (node.parent !== null) {
        parent = this.evaluate(node.parent, env);
        if (!(parent instanceof BeClass)) {
          throw new BeTypeError(
            `A ${WORD_FOR.CLASS} can only come from another ${WORD_FOR.CLASS}, not from a ${typeName(parent)}.`,
            node.line
          );
        }
      }
      const cls = new BeClass(node.name, parent, new Map());
      for (const m of node.methods) cls.methods.set(m.name, new BeFunction(m.name, m.params, m.body, env, cls, m.defaults));
      env.owner().define(node.name, cls);
    }
    execReturnStmt(node, env) {
      throw new ReturnSignal(node.value !== null ? this.evaluate(node.value, env) : null);
    }
    execThrowStmt(node, env) {
      throw new BeThrownError(toDisplay(this.evaluate(node.value, env)), node.line);
    }
    execTryStmt(node, env) {
      const depth = this.callDepth;
      try {
        this.executeBlock(node.body, env);
      } catch (error) {
        if (!(error instanceof BeError) || error instanceof TimeUp) throw error;
        this.callDepth = depth;
        if (!node.handler) return;
        const handlerEnv = new Environment(env);
        if (node.errorName) handlerEnv.define(node.errorName, error.message);
        this.executeBlock(node.handler, handlerEnv);
      }
    }
    execImportStmt(node) {
      let path = normalize(this.folders[this.folders.length - 1] + "/" + node.path);
      let source = this.readFile(path);
      if (source === null && !this.imported.has(path)) {
        const withBe = this.readFile(path + ".be");
        if (withBe !== null) {
          path += ".be";
          source = withBe;
        }
      }
      if (this.imported.has(path) || this.imported.has(path + ".be")) return;
      if (source === null) {
        throw new BeRuntimeError(`The file "${node.path}" was not found. Is it in the same folder as this file?`, node.line, node.col);
      }
      if (source.charCodeAt(0) === 0xfeff) source = source.slice(1);
      this.imported.add(path);
      try {
        const program = parse(source);
        this.folders.push(dirname(path));
        try {
          for (const statement of program.statements) this.execute(statement, this.globals);
        } finally {
          this.folders.pop();
        }
      } catch (error) {
        if (error instanceof BeError && error.filename === null) {
          error.filename = basename(path);
          error.source = source;
        }
        throw error;
      }
    }

    evaluate(node, env) {
      switch (node.type) {
        case "Number":
        case "String":
        case "Bool":
          return node.value;
        case "Null":
          return null;
        case "Template":
          return node.parts.map((p) => (typeof p === "string" ? p : toDisplay(this.evaluate(p, env)))).join("");
        case "ListLiteral":
          return node.items.map((item) => this.evaluate(item, env));
        case "DictLiteral": {
          const result = new Map();
          for (const [keyNode, valueNode] of node.pairs) {
            const key = this.evaluate(keyNode, env);
            this.checkKey(key, node.line, null);
            result.set(key, this.evaluate(valueNode, env));
          }
          return result;
        }
        case "Name":
          return env.get(node.name, node.line, node.col);
        case "This":
          return env.get(THIS_KEY, node.line, node.col);
        case "SuperAttr":
          return this.superAttr(node, env);
        case "FuncExpr":
          return new BeFunction(null, node.params, node.body, env, env.currentMethodClass(), node.defaults);
        case "Attribute":
          return this.getAttribute(this.evaluate(node.target, env), node.name, node.line, node.col);
        case "Unary": {
          const value = this.evaluate(node.operand, env);
          if (node.op === "NOT") return !isTrue(value);
          if (!isNumber(value)) throw new BeTypeError(`'-' only works on numbers, not on a ${typeName(value)}.`, node.line, node.col);
          return -value;
        }
        case "Logical": {
          const left = isTrue(this.evaluate(node.left, env));
          if (node.op === "AND") return left && isTrue(this.evaluate(node.right, env));
          return left || isTrue(this.evaluate(node.right, env));
        }
        case "BinOp": {
          const left = this.evaluate(node.left, env);
          const right = this.evaluate(node.right, env);
          return this.binary(node.op, left, right, node.line, node.col);
        }
        case "Call": {
          const fn = this.evaluate(node.callee, env);
          const args = node.args.map((a) => this.evaluate(a, env));
          const kwargs = new Map(node.kwargs.map(([n, v]) => [n, this.evaluate(v, env)]));
          const name = node.callee.type === "Name" || node.callee.type === "Attribute" ? node.callee.name : null;
          return this.call(fn, args, node.line, node.col, name, kwargs);
        }
        case "Index":
          return this.getIndex(this.evaluate(node.target, env), this.evaluate(node.index, env), node.line, node.col);
        default:
          throw new Error("Unknown node " + node.type);
      }
    }

    superAttr(node, env) {
      const cls = env.currentMethodClass();
      const self = env.get(THIS_KEY, node.line, node.col);
      if (cls.parent === null) {
        throw new BeRuntimeError(
          `'${cls.name}' has no parent ${WORD_FOR.CLASS}, so '${WORD_FOR.SUPER}' can't be used here.`,
          node.line,
          node.col
        );
      }
      const method = cls.parent.findMethod(node.name);
      if (method === null) {
        throw new BeNameError(
          `The parent ${WORD_FOR.CLASS} '${cls.parent.name}' has no method '${node.name}'.` +
            hint(closest(node.name, cls.parent.allMethodNames())),
          node.line,
          node.col
        );
      }
      return new BoundMethod(self, method);
    }

    binary(op, a, b, line, col) {
      if (op === "+") {
        if (isText(a) || isText(b)) return toDisplay(a) + toDisplay(b);
        if (isNumber(a) && isNumber(b)) return a + b;
        if (isList(a) && isList(b)) return a.concat(b);
      } else if (op === "*") {
        if (isNumber(a) && isNumber(b)) return a * b;
        const repeat = (thing, n) => {
          if (isText(thing)) return n > 0 ? thing.repeat(n) : "";
          const out = [];
          for (let i = 0; i < n; i++) out.push(...thing);
          return out;
        };
        if ((isText(a) || isList(a)) && isWhole(b)) return repeat(a, b);
        if ((isText(b) || isList(b)) && isWhole(a)) return repeat(b, a);
      } else if (op === "-" || op === "/" || op === "%") {
        if (isNumber(a) && isNumber(b)) {
          if (op === "-") return a - b;
          if (b === 0) throw new BeRuntimeError("Can't divide by zero.", line, col);
          if (op === "%") return pyMod(a, b);
          return a / b;
        }
      } else if (op === "==") {
        return beEqual(a, b);
      } else if (op === "!=") {
        return !beEqual(a, b);
      } else if (op === "IN") {
        return this.contains(b, a, line, col);
      } else if (op === "<" || op === ">" || op === "<=" || op === ">=") {
        if ((isNumber(a) && isNumber(b)) || (isText(a) && isText(b))) {
          const less = lessThan(a, b);
          const equal = a === b;
          if (op === "<") return less;
          if (op === ">") return !less && !equal;
          if (op === "<=") return less || equal;
          return !less;
        }
        throw new BeTypeError(`'${op}' can't compare a ${typeName(a)} with a ${typeName(b)}.`, line, col);
      }
      throw new BeTypeError(
        `Can't use '${op}' between a ${typeName(a)} (${toRepr(a)}) and a ${typeName(b)} (${toRepr(b)}).`,
        line,
        col
      );
    }

    contains(container, item, line, col) {
      const w = WORD_FOR.IN;
      if (isList(container)) return container.some((v) => beEqual(v, item));
      if (isText(container)) {
        if (!isText(item)) throw new BeTypeError(`'${w}' with text needs text on the left, not a ${typeName(item)}.`, line, col);
        return container.includes(item);
      }
      if (isDict(container)) {
        this.checkKey(item, line, col);
        return container.has(item);
      }
      throw new BeTypeError(`'${w}' needs a list, text or dictionary on the right, not a ${typeName(container)}.`, line, col);
    }

    call(fn, args, line, col = null, name = null, kwargs = null) {
      kwargs = kwargs || new Map();
      if (fn instanceof BuiltinFunction) {
        if (kwargs.size) throw new BeTypeError(`'${fn.name}' doesn't take named inputs.`, line, col);
        this.checkArgCount(fn.name, fn.minArgs, fn.maxArgs, args.length, line, col);
        try {
          return fn.fn(this, args, line);
        } catch (error) {
          if (error instanceof BeError && isNull(error.col)) error.col = col;
          throw error;
        }
      }
      if (fn instanceof BoundMethod) return this.callFunction(fn.fn, args, kwargs, line, col, fn.instance);
      if (fn instanceof BeFunction) return this.callFunction(fn, args, kwargs, line, col);
      if (fn instanceof NativeMethod) return this.callNative(fn, args, kwargs, line, col);
      if (fn instanceof BeClass) {
        const instance = new BeInstance(fn);
        const init = fn.findMethod(INIT_METHOD);
        if (init !== null) {
          this.callFunction(init, args, kwargs, line, col, instance, fn.name);
        } else if (args.length || kwargs.size) {
          throw new BeTypeError(
            `'${fn.name}' takes no inputs. Add ${WORD_FOR.FUNC} ${INIT_METHOD}(...) inside the ${WORD_FOR.CLASS} to give it some.`,
            line,
            col
          );
        }
        return instance;
      }
      if (typeof fn === "function") return this.callJs(fn, args, kwargs, line, col, name);
      const label = name ? `'${name}'` : "This";
      throw new BeTypeError(`${label} is a ${typeName(fn)}, not a function, so it can't be called with ( ).`, line, col);
    }

    callNative(method, args, kwargs, line, col) {
      const params = method.fn.beParams;
      const values = args.slice();
      if (args.length > params.length) this.checkArgCount(method.name, method.fn.beMin, params.length, args.length, line, col);
      for (const [key, value] of kwargs) {
        const i = params.indexOf(key);
        if (i < 0) throw new BeTypeError(`'${method.name}' has no input called '${key}'.` + hint(closest(key, params)), line, col);
        if (i < args.length) throw new BeTypeError(`'${method.name}' got the input '${key}' twice.`, line, col);
        values[i] = value;
      }
      for (let i = 0; i < method.fn.beMin; i++) {
        if (values[i] === undefined) throw new BeTypeError(`'${method.name}' is missing the input '${params[i]}'.`, line, col);
      }
      try {
        return toBe(method.fn.apply(method.obj, values));
      } catch (error) {
        if (error instanceof BeError && isNull(error.line)) {
          error.line = line;
          error.col = col;
        }
        throw error;
      }
    }

    checkArgCount(name, low, high, given, line, col) {
      if (given >= low && (high === null || high === undefined || given <= high)) return;
      let need;
      if (high === null || high === undefined) need = `at least ${plural(low, "input")}`;
      else if (low === high) need = plural(low, "input");
      else need = `${low} to ${high} inputs`;
      const was = given === 1 ? "was" : "were";
      throw new BeTypeError(`'${name}' takes ${need}, but ${given} ${was} given.`, line, col);
    }

    callFunction(fn, args, kwargs, line, col, self = null, label = null) {
      label = label || fn.name || WORD_FOR.FUNC;
      const params = fn.params;
      if (args.length > params.length) this.checkArgCount(label, params.length, params.length, args.length, line, col);
      const values = new Map();
      params.forEach((p, i) => {
        if (i < args.length) values.set(p, args[i]);
      });
      for (const [key, value] of kwargs) {
        if (!params.includes(key)) throw new BeTypeError(`'${label}' has no input called '${key}'.` + hint(closest(key, params)), line, col);
        if (values.has(key)) throw new BeTypeError(`'${label}' got the input '${key}' twice.`, line, col);
        values.set(key, value);
      }
      for (const p of params) {
        if (!values.has(p) && !hasOwn(fn.defaults, p)) throw new BeTypeError(`'${label}' is missing the input '${p}'.`, line, col);
      }
      if (this.callDepth >= MAX_CALL_DEPTH) {
        throw new BeRuntimeError(
          `'${label}' called itself more than ${MAX_CALL_DEPTH} times. Does it have a stopping condition (base case)?`,
          line,
          col
        );
      }
      const callEnv = new Environment(fn.closure, true, fn.ownerClass);
      if (self !== null) callEnv.define(THIS_KEY, self);
      this.callDepth += 1;
      try {
        for (const p of params) {
          if (values.has(p)) callEnv.define(p, values.get(p));
          else callEnv.define(p, this.evaluate(fn.defaults[p], callEnv));
        }
        this.executeBlock(fn.body, callEnv);
      } catch (signal) {
        if (signal instanceof ReturnSignal) return signal.value;
        throw signal;
      } finally {
        this.callDepth -= 1;
      }
      return null;
    }

    // ---- JavaScript libraries and the web page

    toJs(value, line) {
      if (isBeFunction(value) || value instanceof BeClass) {
        if (value instanceof BuiltinFunction) return (...args) => this.call(value, args, line);
        const interp = this;
        const fn = value instanceof BoundMethod ? value.fn : value;
        const accepts = fn instanceof BeFunction ? fn.params.length : Infinity;
        return function (...args) {
          // JavaScript often passes extra inputs (like the click event); a kaj () { } simply ignores them.
          return interp.runCallback(value, args.slice(0, accepts).map(toBe));
        };
      }
      if (isDict(value)) {
        const out = {};
        for (const [k, v] of value) out[toDisplay(k)] = this.toJs(v, line);
        return out;
      }
      if (isList(value)) return value.map((v) => this.toJs(v, line));
      return value;
    }

    callJs(fn, args, kwargs, line, col, name) {
      if (kwargs.size) throw new BeTypeError("JavaScript functions don't take named inputs.", line, col);
      let result;
      try {
        result = fn(...args.map((a) => this.toJs(a, line)));
      } catch (error) {
        if (error instanceof BeError || error instanceof ReturnSignal || error instanceof BreakSignal || error instanceof ContinueSignal) throw error;
        const label = name ? `'${name}'` : "A JavaScript function";
        throw new BeRuntimeError(`${label} failed: ${error && error.name}: ${error && error.message}`, line, col);
      }
      return toBe(result);
    }

    getAttribute(obj, name, line, col) {
      if (obj instanceof BeInstance) {
        if (obj.fields.has(name)) return obj.fields.get(name);
        const method = obj.cls.findMethod(name);
        if (method !== null) return new BoundMethod(obj, method);
        const known = [...obj.fields.keys(), ...obj.cls.allMethodNames()];
        throw new BeNameError(`This ${obj.cls.name} has no field or method '${name}'.` + hint(closest(name, known)), line, col);
      }
      if (obj instanceof BeClass) {
        const method = obj.findMethod(name);
        if (method !== null) return method;
        throw new BeNameError(
          `The ${WORD_FOR.CLASS} '${obj.name}' has no method '${name}'.` + hint(closest(name, obj.allMethodNames())),
          line,
          col
        );
      }
      if (isDict(obj)) {
        if (obj.has(name)) return obj.get(name);
        const keys = Array.from(obj.keys()).filter(isText);
        throw new BeRuntimeError(`The dictionary has no key "${name}".` + hint(closest(name, keys)), line, col);
      }
      if (isBeValue(obj)) throw new BeTypeError(`A ${typeName(obj)} has no field '${name}'.`, line, col);
      if (isElement(obj) && hasOwn(PAGE_WORDS, name) && !(name in obj)) {
        obj.__beInterp = this; // chap() and chabi_chap() run their kaj with this program
        return new NativeMethod(obj, name, PAGE_WORDS[name]);
      }
      if (isNative(obj)) {
        const method = obj[name];
        if (typeof method === "function" && method.beParams) return new NativeMethod(obj, name, method);
        const known = [];
        for (let p = Object.getPrototypeOf(obj); p && p !== Object.prototype; p = Object.getPrototypeOf(p)) {
          for (const key of Object.getOwnPropertyNames(p)) if (p[key] && p[key].beParams && !known.includes(key)) known.push(key);
        }
        throw new BeNameError(`This ${obj.beType} has no '${name}'.` + hint(closest(name, known)), line, col);
      }
      const value = obj[name];
      if (value === undefined && !(name in Object(obj))) {
        const words = isElement(obj) ? hint(closest(name, Object.keys(PAGE_WORDS))) : "";
        throw new BeNameError(`This ${isElement(obj) ? "page element" : typeName(obj)} has no '${name}'.` + words, line, col);
      }
      // A method keeps its object, so el.addEventListener(...) and the like work.
      if (typeof value === "function") return value.bind(obj);
      return toBe(value);
    }

    setAttribute(obj, name, value, line, col) {
      if (obj instanceof BeInstance) {
        obj.fields.set(name, value);
        return;
      }
      if (isDict(obj)) {
        obj.set(name, value);
        return;
      }
      if (isBeValue(obj)) throw new BeTypeError(`Can't set '${name}' on a ${typeName(obj)}.`, line, col);
      try {
        obj[name] = this.toJs(value, line);
      } catch (error) {
        throw new BeRuntimeError(`Can't set '${name}': ${error.message}`, line, col);
      }
    }

    checkKey(key, line, col) {
      if (isList(key) || isDict(key)) throw new BeTypeError(`A dictionary key can't be a ${typeName(key)}. Use text or a number.`, line, col);
    }

    checkPosition(size, isTalika, index, line, col) {
      if (!isWhole(index)) throw new BeTypeError(`A position must be a whole number, not a ${typeName(index)}.`, line, col);
      if (!(-size <= index && index < size)) {
        const [what, things] = isTalika ? ["list", "items"] : ["text", "letters"];
        if (size === 0) throw new BeRuntimeError(`The ${what} is empty, so there is no position ${index}.`, line, col);
        throw new BeRuntimeError(
          `The ${what} has no position ${index}. It has ${size} ${things} (positions 0 to ${size - 1}).`,
          line,
          col
        );
      }
      return index < 0 ? size + index : index;
    }

    getIndex(container, index, line, col) {
      if (isList(container)) return container[this.checkPosition(container.length, true, index, line, col)];
      if (isText(container)) {
        const letters = chars(container);
        return letters[this.checkPosition(letters.length, false, index, line, col)];
      }
      if (isDict(container)) {
        this.checkKey(index, line, col);
        if (!container.has(index)) throw new BeRuntimeError(`The dictionary has no key ${toRepr(index)}.`, line, col);
        return container.get(index);
      }
      if (!isBeValue(container)) return toBe(container[index]);
      throw new BeTypeError(`Can't use [ ] to read from a ${typeName(container)}.`, line, col);
    }

    setIndex(container, index, value, line, col) {
      if (isList(container)) {
        container[this.checkPosition(container.length, true, index, line, col)] = value;
        return;
      }
      if (isDict(container)) {
        this.checkKey(index, line, col);
        container.set(index, value);
        return;
      }
      if (isText(container)) throw new BeTypeError("Letters inside text can't be changed. Make a new text instead.", line, col);
      throw new BeTypeError(`Can't use [ ] to store a value in a ${typeName(container)}.`, line, col);
    }
  }

  // JavaScript values coming back into BE
  function toBe(value) {
    if (value === undefined) return null;
    if (typeof GLOBAL.NodeList === "function" && value instanceof GLOBAL.NodeList) return Array.from(value);
    return value;
  }

  // ---------------------------------------------------------------------- API

  /**
   * Run BE code. Returns { output: [lines], error: BeError or null }.
   * options: input(prompt) -> answer, readFile(path) -> text or null,
   *          path (the program's file name), timeLimitMs, onOutput(line), onError(error),
   *          appHost(kind, title) -> the element where janala() windows and websites appear,
   *          files: a pretend folder { read(path) -> text or null, write(path, text) } for the file words.
   * The result also has stop(), which closes the windows and websites the program opened.
   */
  function run(source, options = {}) {
    const output = [];
    const interp = new Interpreter({
      output: (text) => {
        output.push(text);
        if (options.onOutput) options.onOutput(text);
      },
      input: options.input,
      readFile: options.readFile || (options.files ? (path) => options.files.read(path) : undefined),
      files: options.files,
      timeLimitMs: options.timeLimitMs,
      onError: options.onError,
      appHost: options.appHost,
    });
    const stop = () => interp.stop();
    try {
      interp.run(parse(source), { path: options.path });
      return { output, error: null, stop };
    } catch (error) {
      if (error instanceof BeError) return { output, error, stop };
      if (error instanceof RangeError) {
        return {
          output,
          error: new BeRuntimeError(
            "The program went too deep (too much recursion). Does a function call itself without a stopping condition?"
          ),
          stop,
        };
      }
      throw error;
    }
  }

  // ------------------------------------------------- <script type="text/be">

  function startPage() {
    const doc = GLOBAL.document;
    const scripts = Array.from(doc.querySelectorAll('script[type="text/be"]'));
    if (!scripts.length) return;

    function showError(error, source) {
      const text = formatError(error, error.source || source, error.filename);
      console.error(text);
      let box = doc.getElementById("be-errors");
      if (!box) {
        box = doc.createElement("pre");
        box.id = "be-errors";
        box.style.cssText =
          "position:fixed;left:12px;right:12px;bottom:12px;margin:0;padding:12px 14px;z-index:99999;" +
          "background:#fbe9e6;color:#8a1c12;border:1px solid #e3b2ab;border-radius:8px;" +
          "font:13px/1.5 ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap;max-height:40vh;overflow:auto";
        doc.body.appendChild(box);
      }
      box.textContent += (box.textContent ? "\n\n" : "") + text;
    }

    function syncRead(path) {
      try {
        const request = new XMLHttpRequest();
        request.open("GET", path, false);
        request.send();
        return request.status === 200 || (request.status === 0 && request.responseText) ? request.responseText : null;
      } catch (error) {
        return null;
      }
    }

    let currentSource = "";
    const interp = new Interpreter({
      output: (text) => {
        const box = doc.getElementById("be-output");
        if (box) box.textContent += text + "\n";
        else console.log(text);
      },
      input: (prompt) => {
        const answer = GLOBAL.prompt ? GLOBAL.prompt(prompt) : null;
        return answer === null ? "" : answer;
      },
      readFile: syncRead,
      onError: (error) => showError(error, currentSource),
    });

    (async () => {
      for (const script of scripts) {
        let source = script.textContent;
        let path = "page.be";
        if (script.src) {
          try {
            const response = await fetch(script.src);
            source = await response.text();
            path = new URL(script.src, GLOBAL.location.href).pathname.replace(/^\//, "");
          } catch (error) {
            showError(new BeRuntimeError(`Couldn't load ${script.getAttribute("src")}.`), "");
            continue;
          }
        }
        currentSource = source;
        try {
          interp.run(parse(source), { path });
        } catch (error) {
          if (error instanceof BeError) showError(error, source);
          else if (error instanceof RangeError) showError(new BeRuntimeError("The program went too deep (too much recursion)."), source);
          else throw error;
        }
      }
    })();
  }

  if (typeof GLOBAL.document !== "undefined" && GLOBAL.document.querySelectorAll) {
    if (GLOBAL.document.readyState === "loading") GLOBAL.document.addEventListener("DOMContentLoaded", startPage);
    else startPage();
  }

  return {
    version: VERSION,
    run,
    parse,
    tokenize,
    formatError,
    Interpreter,
    BeError,
    WORD_FOR,
    KEYWORDS,
    BUILTIN_IMPLEMENTATIONS,
  };
});
