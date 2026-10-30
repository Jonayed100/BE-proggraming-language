"""
BE built-in functions that work everywhere (on computers and in the browser).

Functions that only work on a computer (files, websites, desktop windows,
Python libraries) are in platform.py.

Each function receives:
    interp - the running interpreter (used to ask questions or call BE functions)
    args   - the list of values given to the function
    line   - the line number, for error messages

To add your own built-in function:
    1. Write a Python function below with the same three inputs.
    2. Add it to the BUILTINS table at the bottom with its smallest and
       largest number of inputs (None means "any number").
    3. Add the same function to playground/be.js so it also works in the
       browser, then run  python tools/sync.py  and  python -m pytest.
"""

import json
import math
import random
import time
from decimal import ROUND_HALF_UP, Decimal

from .errors import BeRuntimeError, BeTypeError
from .values import be_equal, is_number, is_whole, to_display, type_name


def be_lomba(interp, args, line):
    """lomba(x): the length of a text, list or dictionary."""
    value = args[0]
    if isinstance(value, (str, list, dict)):
        return len(value)
    raise BeTypeError(f"lomba() only works on text, a list or a dictionary, not on a {type_name(value)}.", line)


def be_jiggesh(interp, args, line):
    """jiggesh("question"): show a question and return what the user types (as text)."""
    prompt = to_display(args[0]) if args else ""
    try:
        return interp.input_fn(prompt)
    except EOFError:
        return ""


def be_shonkha(interp, args, line):
    """shonkha(x): turn text like "42" into the number 42."""
    value = args[0]
    if is_number(value):
        return value
    if isinstance(value, bool):
        return 1 if value else 0
    if isinstance(value, str):
        text = value.strip()
        try:
            return int(text)
        except ValueError:
            pass
        try:
            number = float(text)
            if number == number and number not in (float("inf"), float("-inf")):
                return number
        except ValueError:
            pass
        raise BeTypeError(f'"{value}" can\'t be turned into a number.', line)
    raise BeTypeError(f"shonkha() can't turn a {type_name(value)} into a number.", line)


def be_lekha(interp, args, line):
    """lekha(x): turn any value into text."""
    return to_display(args[0])


def be_dhoron(interp, args, line):
    """dhoron(x): the type of a value, e.g. "number" or "list"."""
    return type_name(args[0])


def need_list(name, value, line, which="first"):
    if not isinstance(value, list):
        raise BeTypeError(f"{name}() needs a list as its {which} input, not a {type_name(value)}.", line)


def need_text(name, value, line, which="first"):
    if not isinstance(value, str):
        raise BeTypeError(f"{name}() needs text as its {which} input, not a {type_name(value)}.", line)


def need_dict(name, value, line):
    if not isinstance(value, dict):
        raise BeTypeError(f"{name}() needs a dictionary, not a {type_name(value)}.", line)


def be_jukto(interp, args, line):
    """jukto(list, x): add x to the end of a list."""
    items, value = args
    need_list("jukto", items, line)
    items.append(value)
    return None


def be_bad_dao(interp, args, line):
    """bad_dao(list) or bad_dao(list, position): remove an item and give it back."""
    items = args[0]
    need_list("bad_dao", items, line)
    if not items:
        raise BeRuntimeError("Can't remove anything from an empty list.", line)
    index = args[1] if len(args) > 1 else -1
    if not is_whole(index):
        raise BeTypeError("bad_dao() needs a whole number as the position.", line)
    index = int(index)
    if not -len(items) <= index < len(items):
        raise BeRuntimeError(
            f"The list has no position {index}. It has {len(items)} items (positions 0 to {len(items) - 1}).",
            line,
        )
    return items.pop(index)


def be_elomelo(interp, args, line):
    """elomelo(a, b): a random whole number from a to b (both included)."""
    low, high = args
    for value in (low, high):
        if not is_whole(value):
            raise BeTypeError("elomelo() needs two whole numbers.", line)
    low, high = int(low), int(high)
    if low > high:
        raise BeRuntimeError(f"elomelo({low}, {high}): the first number can't be bigger than the second.", line)
    return random.randint(low, high)


def be_gol(interp, args, line):
    """gol(x) or gol(x, digits): round a number. gol(2.5) is 3, gol(3.14159, 2) is 3.14."""
    value = args[0]
    digits = args[1] if len(args) > 1 else 0
    if not is_number(value):
        raise BeTypeError(f"gol() only works on numbers, not on a {type_name(value)}.", line)
    if not is_whole(digits) or digits < 0:
        raise BeTypeError("gol()'s second input must be a whole number, 0 or more.", line)
    if value != value or value in (float("inf"), float("-inf")):
        return value
    digits = int(digits)
    rounded = Decimal(repr(value)).quantize(Decimal(1).scaleb(-digits), rounding=ROUND_HALF_UP)
    return int(rounded) if digits == 0 else float(rounded)


def comparable(name, values, line, verb="compare"):
    if all(is_number(v) for v in values) or all(isinstance(v, str) for v in values):
        return
    raise BeTypeError(f"{name}() can only {verb} all numbers or all text.", line)


def pick(name, args, line, better):
    if len(args) == 1:
        if not isinstance(args[0], list):
            raise BeTypeError(f"{name}() needs a list, or two or more values.", line)
        values = args[0]
        if not values:
            raise BeRuntimeError(f"{name}() got an empty list.", line)
    else:
        values = args
    comparable(name, values, line)
    best = values[0]
    for value in values[1:]:
        if better(value, best):
            best = value
    return best


def be_boro(interp, args, line):
    """boro(list) or boro(a, b, ...): the biggest value."""
    return pick("boro", args, line, lambda a, b: a > b)


def be_choto(interp, args, line):
    """choto(list) or choto(a, b, ...): the smallest value."""
    return pick("choto", args, line, lambda a, b: a < b)


def be_jogfol(interp, args, line):
    """jogfol(list): add up all the numbers in a list."""
    items = args[0]
    need_list("jogfol", items, line)
    total = 0
    for item in items:
        if not is_number(item):
            raise BeTypeError("jogfol() can only add up a list of numbers.", line)
        total = total + item
    return total


def be_shajao(interp, args, line):
    """shajao(list) or shajao(list, kaj (x) { ... }): a sorted copy of a list."""
    items = args[0]
    need_list("shajao", items, line)
    if len(args) > 1:
        key_fn = args[1]
        keys = [interp.call(key_fn, [item], line) for item in items]
    else:
        keys = list(items)
    comparable("shajao", keys, line, verb="sort")
    order = sorted(range(len(items)), key=lambda i: keys[i])
    return [items[i] for i in order]


def be_ulta(interp, args, line):
    """ulta(x): a list or text backwards."""
    value = args[0]
    if isinstance(value, (list, str)):
        return value[::-1]
    raise BeTypeError(f"ulta() only works on a list or text, not on a {type_name(value)}.", line)


def be_bhag(interp, args, line):
    """bhag(text) or bhag(text, separator): split text into a list."""
    text = args[0]
    need_text("bhag", text, line)
    if len(args) == 1:
        return text.split()
    separator = args[1]
    need_text("bhag", separator, line, "second")
    if separator == "":
        raise BeRuntimeError("bhag()'s separator can't be empty text.", line)
    return text.split(separator)


def be_jora(interp, args, line):
    """jora(list) or jora(list, separator): join the items of a list into one text."""
    items = args[0]
    need_list("jora", items, line)
    separator = args[1] if len(args) > 1 else ""
    need_text("jora", separator, line, "second")
    return separator.join(to_display(item) for item in items)


def be_bodlao(interp, args, line):
    """bodlao(text, old, new): replace every old with new."""
    for which, value in zip(("first", "second", "third"), args):
        need_text("bodlao", value, line, which)
    return args[0].replace(args[1], args[2])


def be_boro_hater(interp, args, line):
    """boro_hater(text): text in CAPITAL letters."""
    need_text("boro_hater", args[0], line)
    return args[0].upper()


def be_choto_hater(interp, args, line):
    """choto_hater(text): text in small letters."""
    need_text("choto_hater", args[0], line)
    return args[0].lower()


def be_parishkar(interp, args, line):
    """parishkar(text): remove spaces from the start and end."""
    need_text("parishkar", args[0], line)
    return args[0].strip()


def be_kothay(interp, args, line):
    """kothay(list or text, item): the position of item, or -1 if it isn't there."""
    container, item = args
    if isinstance(container, list):
        for i, value in enumerate(container):
            if be_equal(value, item):
                return i
        return -1
    if isinstance(container, str):
        need_text("kothay", item, line, "second")
        return container.find(item)
    raise BeTypeError(f"kothay() only works on a list or text, not on a {type_name(container)}.", line)


def be_chabi(interp, args, line):
    """chabi(dictionary): a list of its keys."""
    need_dict("chabi", args[0], line)
    return list(args[0].keys())


def be_man(interp, args, line):
    """man(dictionary): a list of its values."""
    need_dict("man", args[0], line)
    return list(args[0].values())


def be_borgomul(interp, args, line):
    """borgomul(x): the square root of a number."""
    value = args[0]
    if not is_number(value) or value < 0:
        raise BeTypeError("borgomul() needs a number that is 0 or more.", line)
    return math.sqrt(value)


def be_poromman(interp, args, line):
    """poromman(x): a number without its minus sign (absolute value)."""
    if not is_number(args[0]):
        raise BeTypeError(f"poromman() only works on numbers, not on a {type_name(args[0])}.", line)
    return abs(args[0])


def be_shomoy(interp, args, line):
    """shomoy(): the current time, in seconds since 1 January 1970."""
    return time.time()


def to_json_value(value, line):
    if value is None or isinstance(value, (bool, str)):
        return value
    if is_number(value):
        if isinstance(value, float):
            if value != value or value in (float("inf"), float("-inf")):
                raise BeRuntimeError("json_banao() can't save NaN or Infinity.", line)
            if value.is_integer() and abs(value) < 1e21:
                return int(value)
        return value
    if isinstance(value, list):
        return [to_json_value(item, line) for item in value]
    if isinstance(value, dict):
        result = {}
        for key, item in value.items():
            if isinstance(key, str):
                text_key = key
            elif key is None or isinstance(key, bool) or is_number(key):
                text_key = to_display(key)
            else:
                raise BeTypeError(f"json_banao() can't use a {type_name(key)} as a key.", line)
            result[text_key] = to_json_value(item, line)
        return result
    raise BeTypeError(f"json_banao() can't turn a {type_name(value)} into JSON.", line)


def be_json_banao(interp, args, line):
    """json_banao(value) or json_banao(value, sotti): turn a value into JSON text."""
    data = to_json_value(args[0], line)
    if len(args) > 1 and args[1]:
        return json.dumps(data, ensure_ascii=False, indent=2)
    return json.dumps(data, ensure_ascii=False, separators=(",", ":"))


def be_json_porho(interp, args, line):
    """json_porho(text): turn JSON text into BE values (lists and dictionaries)."""
    need_text("json_porho", args[0], line)
    try:
        return json.loads(args[0])
    except ValueError:
        raise BeRuntimeError("json_porho() got text that isn't valid JSON.", line) from None


# name: (Python function, smallest number of inputs, largest number of inputs or None for any)
BUILTINS = {
    "lomba": (be_lomba, 1, 1),
    "jiggesh": (be_jiggesh, 0, 1),
    "shonkha": (be_shonkha, 1, 1),
    "lekha": (be_lekha, 1, 1),
    "dhoron": (be_dhoron, 1, 1),
    "jukto": (be_jukto, 2, 2),
    "bad_dao": (be_bad_dao, 1, 2),
    "elomelo": (be_elomelo, 2, 2),
    "gol": (be_gol, 1, 2),
    "boro": (be_boro, 1, None),
    "choto": (be_choto, 1, None),
    "jogfol": (be_jogfol, 1, 1),
    "shajao": (be_shajao, 1, 2),
    "ulta": (be_ulta, 1, 1),
    "bhag": (be_bhag, 1, 2),
    "jora": (be_jora, 1, 2),
    "bodlao": (be_bodlao, 3, 3),
    "boro_hater": (be_boro_hater, 1, 1),
    "choto_hater": (be_choto_hater, 1, 1),
    "parishkar": (be_parishkar, 1, 1),
    "kothay": (be_kothay, 2, 2),
    "chabi": (be_chabi, 1, 1),
    "man": (be_man, 1, 1),
    "borgomul": (be_borgomul, 1, 1),
    "poromman": (be_poromman, 1, 1),
    "shomoy": (be_shomoy, 0, 0),
    "json_banao": (be_json_banao, 1, 2),
    "json_porho": (be_json_porho, 1, 1),
}

