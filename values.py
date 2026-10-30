"""
BE values.

BE uses Python's own values underneath:

    BE value          type name     Python value
    ----------        ---------     ------------
    5, 2.5            number        int, float
    "Shuvo"           text          str
    sotti, mittha     boolean       bool
    kichuna           null          None
    [1, 2, 3]         list          list
    {"a": 1}          dictionary    dict
    kaj ...           function      BeFunction / BoundMethod / BuiltinFunction
    shreni Manush     class         BeClass
    Manush("Rahim")   Manush        BeInstance

Anything else (a Python library, a web server...) is a "python object".

This file also decides how values look when printed with dekhao, and when
two values count as equal. Printed output is always in English:
sotti prints as true, mittha as false, kichuna as null.
"""


class BeFunction:
    """A function written in BE with the `kaj` keyword."""

    def __init__(self, name, params, body, closure, owner_class=None, defaults=None):
        self.name = name                # None for kaj (x) { ... } used as a value
        self.params = params
        self.defaults = defaults or {}  # input name -> default value (an expression, worked out at each call)
        self.body = body
        self.closure = closure          # the variables visible where it was made
        self.owner_class = owner_class  # the shreni it belongs to, for methods

    def __repr__(self):
        return f"<function {self.name}>" if self.name else "<function>"


class BuiltinFunction:
    """A function that comes with BE, written in Python (see builtin_functions.py)."""

    def __init__(self, name, fn, min_args, max_args):
        self.name = name
        self.fn = fn
        self.min_args = min_args
        self.max_args = max_args

    def __repr__(self):
        return f"<built-in function {self.name}>"


class BeClass:
    """A shreni (class) written in BE."""

    def __init__(self, name, parent, methods):
        self.name = name
        self.parent = parent    # another BeClass, or None
        self.methods = methods  # method name -> BeFunction

    def find_method(self, name):
        cls = self
        while cls is not None:
            if name in cls.methods:
                return cls.methods[name]
            cls = cls.parent
        return None

    def all_method_names(self):
        names = set()
        cls = self
        while cls is not None:
            names.update(cls.methods)
            cls = cls.parent
        return names

    def __repr__(self):
        return f"<class {self.name}>"


class BeInstance:
    """An object made from a shreni: Manush("Rahim")."""

    def __init__(self, cls):
        self.cls = cls
        self.fields = {}

    def __repr__(self):
        return f"<{self.cls.name} object>"


class BoundMethod:
    """A method together with the object it belongs to: rahim.shuvecha"""

    def __init__(self, instance, function):
        self.instance = instance
        self.function = function

    def __repr__(self):
        return f"<function {self.function.name}>"


BE_FUNCTION_TYPES = (BeFunction, BuiltinFunction, BoundMethod)


def is_number(value):
    # In Python, True and False also count as numbers. In BE they do not.
    return isinstance(value, (int, float)) and not isinstance(value, bool)


def is_whole(value):
    """A whole number (integer), such as an index. 2.0 counts, 2.5 does not."""
    if isinstance(value, bool):
        return False
    if isinstance(value, int):
        return True
    return isinstance(value, float) and value.is_integer()


def is_be_value(value):
    """True for the values BE itself makes; False for Python library objects."""
    return value is None or isinstance(
        value, (bool, int, float, str, list, dict, BeFunction, BuiltinFunction, BoundMethod, BeClass, BeInstance)
    )


def type_name(value):
    """The name of a value's type, as dhoron() returns it."""
    if isinstance(value, bool):
        return "boolean"
    if is_number(value):
        return "number"
    if isinstance(value, str):
        return "text"
    if value is None:
        return "null"
    if isinstance(value, list):
        return "list"
    if isinstance(value, dict):
        return "dictionary"
    if isinstance(value, BE_FUNCTION_TYPES):
        return "function"
    if isinstance(value, BeClass):
        return "class"
    if isinstance(value, BeInstance):
        return value.cls.name
    if getattr(type(value), "_be_native", False):
        return value.be_type  # a website, window, ... made by BE itself
    if callable(value):
        return "function"
    return "python object"


def be_equal(a, b):
    """BE's == : sotti is not equal to 1, and lists compare item by item."""
    if isinstance(a, bool) or isinstance(b, bool):
        return isinstance(a, bool) and isinstance(b, bool) and a == b
    if is_number(a) and is_number(b):
        return a == b
    if isinstance(a, list) and isinstance(b, list):
        return len(a) == len(b) and all(be_equal(x, y) for x, y in zip(a, b))
    if isinstance(a, dict) and isinstance(b, dict):
        return len(a) == len(b) and all(k in b and be_equal(v, b[k]) for k, v in a.items())
    if isinstance(a, BoundMethod) and isinstance(b, BoundMethod):
        return a.instance is b.instance and a.function is b.function
    if isinstance(a, (str, type(None))) and isinstance(b, (str, type(None))):
        return a == b
    return a is b


def is_true(value):
    """Which values count as 'yes' in jodi and jotokkhon.

    mittha, kichuna, 0, "" (empty text), [] and {} count as no. Everything else is yes.
    """
    if isinstance(value, (BeInstance, BeClass) + BE_FUNCTION_TYPES):
        return True
    try:
        return bool(value)
    except Exception:
        return True


def format_number(value):
    if isinstance(value, float):
        if value != value:
            return "NaN"
        if value in (float("inf"), float("-inf")):
            return "Infinity" if value > 0 else "-Infinity"
        if value.is_integer() and abs(value) < 1e21:
            return str(int(value))  # 4 / 2 shows 2, not 2.0
        text = repr(value)
        if "e" in text:
            mantissa, exponent = text.split("e")
            sign = "-" if exponent.startswith("-") else "+"
            text = f"{mantissa}e{sign}{exponent.lstrip('+-').lstrip('0') or '0'}"
        return text
    return str(value)


def to_display(value):
    """How a value looks when printed by dekhao."""
    if isinstance(value, str):
        return value
    return to_repr(value)


def to_repr(value):
    """How a value looks inside a list or dictionary (text gets quotes)."""
    if value is True:
        return "true"
    if value is False:
        return "false"
    if value is None:
        return "null"
    if is_number(value):
        return format_number(value)
    if isinstance(value, str):
        escaped = value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
        return f'"{escaped}"'
    if isinstance(value, list):
        return "[" + ", ".join(to_repr(item) for item in value) + "]"
    if isinstance(value, dict):
        pairs = (f"{to_repr(k)}: {to_repr(v)}" for k, v in value.items())
        return "{" + ", ".join(pairs) + "}"
    if isinstance(value, (BeFunction, BuiltinFunction, BoundMethod, BeClass, BeInstance)):
        return repr(value)
    if isinstance(value, tuple):
        return to_repr(list(value))
    if getattr(type(value), "_be_native", False):
        return repr(value)
    if type(value).__name__ == "module":
        return f"<python module {value.__name__}>"
    return f"<python object {type(value).__name__}>"
