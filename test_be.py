"""
Tests for BE.

Run them from the project folder with:

    python -m pytest

Each test runs a small BE program and checks what it printed, or checks that
the right error appears. If you change BE, run the tests again: if they all
pass, you did not break anything.

When Node.js is installed, one test also checks that the JavaScript version
(playground/be.js) prints exactly the same as the Python version.

(Code inside the tests puts a space after every \\n, like "a = 1\\n dekhao a",
so renaming a keyword with Find and Replace "Match Whole Word" also renames it here.)
"""

import json
import shutil
import subprocess
import sys
import types
from pathlib import Path

import pytest

from be import BeError, __version__, parse, run_source
from be import keywords
from be.errors import BeNameError, BeRuntimeError, BeSyntaxError, BeThrownError, BeTypeError

ROOT = Path(__file__).resolve().parent.parent
EXAMPLES = ROOT / "examples"

# The keyword words, so the tests keep passing after you rename one in keywords.py.
W = keywords.WORD_FOR


def run(code, inputs=None, path=None):
    """Run BE code and return everything it printed, as a list of lines."""
    printed = []
    answers = iter(inputs or [])
    run_source(code, output=printed.append, input_fn=lambda prompt="": next(answers, ""), path=path)
    return printed


def interpreter(code, path=None):
    return run_source(code, output=lambda text: None, path=path)


# ---------------------------------------------------------------- basics


def test_print_text():
    assert run('dekhao "Hello"') == ["Hello"]


def test_output_is_english():
    assert run('dekhao sotti, mittha, kichuna, [sotti, kichuna], {"a": mittha}') == [
        'true false null [true, null] {"a": false}'
    ]


def test_empty_print_gives_blank_line():
    assert run("dekhao") == [""]


def test_variables_and_reassign():
    assert run("dhoro x = 5\n x = x + 1\n x += 4\n dekhao x") == ["10"]


def test_math_and_precedence():
    assert run("dekhao 2 + 3 * 4, (2 + 3) * 4, 10 / 4, 10 / 2, 10 % 3, -5 + 2") == ["14 20 2.5 5 1 -3"]


def test_text_plus_number_joins():
    assert run('dekhao "Age " + 22') == ["Age 22"]


def test_text_repeat():
    assert run('dekhao "-" * 5') == ["-----"]


def test_comments_and_semicolons():
    assert run("# comment\n dhoro a = 1; dhoro b = 2; dekhao a + b  # another") == ["3"]


def test_bangla_in_text_and_comments_is_fine():
    assert run('# বাংলা মন্তব্য\n dekhao "আমার নাম শুভ"') == ["আমার নাম শুভ"]


def test_bangla_letters_in_code_are_refused():
    with pytest.raises(BeSyntaxError, match="English letters"):
        run("dhoro নাম = 1")


def test_keywords_have_one_spelling_and_care_about_capitals():
    with pytest.raises(BeSyntaxError, match=f"Did you mean '{W['PRINT']}'"):
        run(W["PRINT"].capitalize() + ' "hi"')
    with pytest.raises(BeError):
        run('jadi sotti { dekhao 1 }')


def test_equality_is_strict_about_types():
    assert run('dekhao sotti == 1, 2 == 2.0, "1" == 1, [1, [2]] == [1, [2]], {"a": 1} == {"a": 1}') == [
        "false true false true true"
    ]


def test_long_expressions_continue_on_next_line():
    code = 'dhoro x = "a"\n    + "b"\n    + "c"\n dhoro y = 1 +\n    2\n dekhao x, y'
    assert run(code) == ["abc 3"]


# ---------------------------------------------------------------- templates


def test_template_inserts_values():
    code = 'dhoro nam = "Rahim"\n dhoro t = [1, 2]\n dekhao "Name {nam}, total {t[0] + t[1]}, length {lomba(nam)}"'
    assert run(code) == ["Name Rahim, total 3, length 5"]


def test_template_with_other_quotes_and_escapes():
    assert run('dhoro m = {"a": 7}\n dekhao "Value: {m[\'a\']} \\{plain\\}"') == ["Value: 7 {plain}"]


TEMPLATE_MISTAKES = [
    ('dekhao "{nam"', "never closed"),
    ('dekhao "{}"', "Put something inside"),
    ('dekhao "a }"', "no '{' before it"),
    ('dekhao "{1 +}"', "'}'"),
    ('dekhao "{1 2}"', "Write one value"),
]


@pytest.mark.parametrize("code, words", TEMPLATE_MISTAKES)
def test_template_mistakes(code, words):
    with pytest.raises(BeSyntaxError) as caught:
        run(code)
    assert words in str(caught.value)


# ---------------------------------------------------------------- decisions and loops


@pytest.mark.parametrize("number, grade", [(85, "A+"), (75, "A"), (40, "Pass"), (10, "Fail")])
def test_jodi_nahole_chain(number, grade):
    code = f"""
    dhoro n = {number}
    jodi n >= 80 {{
        dekhao "A+"
    }} nahole jodi n >= 70 tahole {{
        dekhao "A"
    }} nahole jodi n >= 33 {{
        dekhao "Pass"
    }} nahole {{
        dekhao "Fail"
    }}
    """
    assert run(code) == [grade]


def test_nahole_and_brace_on_next_line():
    assert run('jodi mittha\n {\n dekhao "no"\n }\n nahole\n {\n dekhao "yes"\n }') == ["yes"]


def test_logic_words_and_moddhe():
    assert run('dekhao sotti ebong mittha, sotti othoba mittha, na sotti, 2 moddhe [1, 2], "b" moddhe "abc", '
               '"k" moddhe {"k": 1}, na (3 moddhe [])') == ["false true false true true true true"]


def test_loops():
    code = """
    ghuro i = 1 theke 3 { dekhao i }
    ghuro i = 0 theke 6 porjonto dhap 3 { dekhao i }
    ghuro i = 2 theke 1 { dekhao i }
    ghuro 2 bar { dekhao "hi" }
    dhoro x = 1
    jotokkhon x < 20 { x = x * 3 }
    dekhao x
    protiti f ["a", "b"] theke { dekhao f }
    """
    assert run(code) == ["1", "2", "3", "0", "3", "6", "2", "1", "hi", "hi", "27", "a", "b"]


def test_thamo_and_agao():
    code = "ghuro i = 1 theke 10 {\n jodi i == 2 { agao }\n jodi i == 5 { thamo }\n dekhao i\n }"
    assert run(code) == ["1", "3", "4"]


# ---------------------------------------------------------------- variables and functions


def test_assigning_a_builtin_name_makes_a_new_variable():
    assert run("kaj f() {\n lomba = 5\n ferot lomba\n }\n dekhao f(), lomba([1, 2])") == ["5 2"]


def test_variable_made_in_block_stays_after_it():
    assert run("jodi sotti { dhoro a = 1 }\n ghuro 2 bar { b = 7 }\n dekhao a, b") == ["1 7"]


def test_each_round_of_a_loop_has_its_own_variable():
    code = "dhoro fs = []\n protiti x [1, 2, 3] theke { jukto(fs, kaj () { ferot x }) }\n ghuro i = 1 theke 2 { jukto(fs, kaj () { ferot i * 10 }) }\n protiti f fs theke { dekhao f() }"
    assert run(code) == ["1", "2", "3", "10", "20"]


def test_loop_variable_stays_inside_loop():
    with pytest.raises(BeNameError):
        run("ghuro i = 1 theke 2 { }\n dekhao i")


def test_function_variables_stay_inside_function():
    with pytest.raises(BeNameError):
        run("kaj f() { bhitorer = 1 }\n f()\n dekhao bhitorer")


def test_dhoro_inside_function_makes_local_copy():
    assert run("dhoro x = 1\n kaj f() { dhoro x = 99\n ferot x }\n dekhao f(), x") == ["99 1"]


def test_functions_defaults_and_named_inputs():
    code = """
    kaj greet(nam, shuru = "Hello", sesh = "!") {
        ferot shuru + ", " + nam + sesh
    }
    dekhao greet("A")
    dekhao greet("B", "Hi")
    dekhao greet(sesh = "?", nam = "C")
    """
    assert run(code) == ["Hello, A!", "Hi, B!", "Hello, C?"]


def test_default_can_use_earlier_input():
    assert run("kaj f(a, b = a * 2) { ferot a + b }\n dekhao f(3), f(3, 1)") == ["9 4"]


def test_recursion_and_closures():
    code = """
    kaj fact(n) {
        jodi n <= 1 { ferot 1 }
        ferot n * fact(n - 1)
    }
    dhoro gona = 0
    kaj barao() { gona += 1 }
    barao()
    barao()
    dekhao fact(10), gona
    """
    assert run(code) == ["3628800 2"]


def test_functions_as_values():
    code = """
    dhoro dui = kaj (x) { ferot x * 2 }
    kaj apply(f, v) { ferot f(v) }
    kaj maker(n) { ferot kaj (x) { ferot x + n } }
    dhoro plus5 = maker(5)
    dekhao dui(4), apply(dui, 10), plus5(1), dhoron(dui), dui
    """
    assert run(code) == ["8 20 6 function <function>"]


# ---------------------------------------------------------------- classes


CLASS_CODE = """
shreni Manush {
    kaj shuru(nam, boyosh = 20) {
        ei.nam = nam
        ei.boyosh = boyosh
    }
    kaj parichoy() {
        ferot "I am {ei.nam}, {ei.boyosh}"
    }
    kaj birthday() {
        ei.boyosh += 1
        ferot ei
    }
}
shreni Chhatro theke Manush {
    kaj shuru(nam, school) {
        upor.shuru(nam, 15)
        ei.school = school
    }
    kaj parichoy() {
        ferot upor.parichoy() + " at {ei.school}"
    }
}
"""


def test_classes_fields_methods_and_inheritance():
    code = CLASS_CODE + """
    dhoro a = Manush("Rahim")
    dhoro b = Chhatro("Mitu", "Dhaka School")
    a.birthday().birthday()
    dekhao a.parichoy()
    dekhao b.parichoy()
    dekhao dhoron(b), b, Manush, b.school
    """
    assert run(code) == [
        "I am Rahim, 22",
        "I am Mitu, 15 at Dhaka School",
        "Chhatro <Chhatro object> <class Manush> Dhaka School",
    ]


def test_methods_can_be_passed_around_and_lambdas_see_ei():
    code = CLASS_CODE + """
    shreni Counter {
        kaj shuru() { ei.n = 0 }
        kaj adder() { ferot kaj () { ei.n += 1 } }
    }
    dhoro c = Counter()
    dhoro add = c.adder()
    add()
    add()
    dhoro p = Manush("X").parichoy
    dekhao c.n, p()
    """
    assert run(code) == ["2 I am X, 20"]


@pytest.mark.parametrize(
    "code, error_type, words",
    [
        ("shreni A { }\n A(1)", BeTypeError, "takes no inputs"),
        ("shreni A { }\n dhoro a = A()\n dekhao a.x", BeNameError, "no field or method 'x'"),
        ("shreni A { kaj f() { ferot upor.f() } }\n A().f()", BeRuntimeError, "no parent"),
        ("dekhao ei", BeSyntaxError, "only be used inside a method"),
        ("shreni A { dhoro x = 1 }", BeSyntaxError, "Only kaj"),
        ("dhoro x = 5\n shreni B theke x { }", BeTypeError, "can only come from another"),
        ("shreni A { kaj shuru(nam) { ei.nam = nam } }\n dhoro a = A(\"x\")\n dekhao a.naam", BeNameError, "Did you mean 'nam'"),
    ],
)
def test_class_mistakes(code, error_type, words):
    with pytest.raises(error_type) as caught:
        run(code)
    assert words in str(caught.value)


# ---------------------------------------------------------------- chesta / chhuro


def test_chesta_catches_mistakes_and_chhuro_raises_your_own():
    code = """
    chesta { dekhao 1 / 0 } nahole bhul { dekhao "Caught: " + bhul }
    chesta { chhuro "Too young" } nahole bhul { dekhao "Caught: " + bhul }
    chesta { dekhao x }
    dekhao "still running"
    """
    assert run(code) == ["Caught: Can't divide by zero.", "Caught: Too young", "still running"]


def test_uncaught_chhuro_is_an_error():
    with pytest.raises(BeThrownError) as caught:
        run('chhuro "Something went wrong"')
    assert str(caught.value) == "Error (line 1): Something went wrong"


def test_ferot_and_thamo_pass_through_chesta():
    code = """
    kaj f() {
        chesta { ferot 5 } nahole { ferot 0 }
    }
    ghuro i = 1 theke 5 {
        chesta { jodi i == 2 { thamo } }
        dekhao i
    }
    dekhao f()
    """
    assert run(code) == ["1", "5"]


# ---------------------------------------------------------------- built-in functions


def test_list_and_dictionary_tools():
    code = """
    dhoro t = [10, 20, 30]
    t[0] = 5
    jukto(t, 40)
    dekhao t, t[-1], lomba(t), bad_dao(t), t
    dekhao boro(t), choto(4, 2, 9), jogfol([1, 2.5]), shajao([3, 1, 2]), ulta([1, 2]), kothay(t, 20)
    dhoro m = {"nam": "Shuvo", "boyosh": 22}
    m.shohor = "Dhaka"
    m["boyosh"] += 1
    dekhao chabi(m), man(m), m.nam, m.boyosh
    """
    assert run(code) == [
        "[5, 20, 30, 40] 40 4 40 [5, 20, 30]",
        "30 2 3.5 [1, 2, 3] [2, 1] 1",
        '["nam", "boyosh", "shohor"] ["Shuvo", 23, "Dhaka"] Shuvo 23',
    ]


def test_shajao_with_key_function():
    code = 'dhoro p = [{"n": "b", "a": 3}, {"n": "a", "a": 1}]\n dekhao shajao(p, kaj (x) { ferot x.a })[0].n'
    assert run(code) == ["a"]


def test_text_tools():
    code = """
    dekhao bhag("a,b,,c", ","), bhag("  one two  "), jora(["x", 1, sotti], "-")
    dekhao bodlao("aXbX", "X", "-"), boro_hater("hi"), choto_hater("HI"), parishkar("  x  ")
    dekhao kothay("banana", "na"), kothay("abc", "z"), ulta("abc"), lomba("বাংলা")
    """
    assert run(code) == [
        '["a", "b", "", "c"] ["one", "two"] x-1-true',
        "a-b- HI hi x",
        "2 -1 cba 5",
    ]


def test_numbers_and_json():
    code = """
    dekhao shonkha("42") + 1, shonkha(" 2.5 "), gol(2.5), gol(3.14159, 2), borgomul(16), poromman(-3)
    dhoro data = {"nam": "Shuvo", "marks": [80, 92.5], "ok": sotti, "x": kichuna}
    dekhao json_banao(data)
    dhoro back = json_porho(json_banao(data))
    dekhao back.marks[1], dhoron(back), back == data
    dekhao json_banao([1, {"a": 2}], sotti)
    """
    assert run(code) == [
        "43 2.5 3 3.14 4 3",
        '{"nam":"Shuvo","marks":[80,92.5],"ok":true,"x":null}',
        "92.5 dictionary true",
        '[\n  1,\n  {\n    "a": 2\n  }\n]',
    ]


def test_jiggesh_reads_input():
    assert run('dhoro nam = jiggesh("Name? ")\n dekhao "Hello {nam}"', inputs=["Rahim"]) == ["Hello Rahim"]


def test_elomelo_stays_in_range():
    assert run("ghuro 50 bar {\n dhoro r = elomelo(1, 3)\n jodi r < 1 othoba r > 3 { dekhao \"bad\" }\n }") == []


# ---------------------------------------------------------------- anao


def test_anao_brings_in_another_file(tmp_path):
    (tmp_path / "hishab.be").write_text("kaj borgo(x) { ferot x * x }\n dekhao \"loaded\"", encoding="utf-8")
    code = 'anao "hishab.be"\n anao "hishab"\n dekhao borgo(4)'
    assert run(code, path=str(tmp_path / "main.be")) == ["loaded", "16"]


def test_anao_missing_file_and_mistake_inside(tmp_path):
    with pytest.raises(BeRuntimeError, match="was not found"):
        run('anao "nope.be"', path=str(tmp_path / "main.be"))
    (tmp_path / "bad.be").write_text("dekhao nothing_here", encoding="utf-8")
    with pytest.raises(BeNameError) as caught:
        run('anao "bad.be"', path=str(tmp_path / "main.be"))
    assert caught.value.filename == "bad.be"


# ---------------------------------------------------------------- computer only: Python, files, websites, apps


def test_python_libraries():
    code = 'dhoro math = python("math")\n dhoro j = python("json")\n dekhao math.floor(2.7), math.sqrt(9), j.dumps([1, 2], indent = 0)'
    assert run(code) == ["2 3 [\n1,\n2\n]"]


def test_python_library_errors():
    with pytest.raises(BeRuntimeError, match="pip install no_such_library_xyz"):
        run('python("no_such_library_xyz")')
    with pytest.raises(BeNameError, match="Did you mean 'sqrt'"):
        run('python("math").sqrtt(4)')


def test_python_can_call_be_functions():
    code = 'dhoro f = python("functools")\n dekhao f.reduce(kaj (a, b) { ferot a + b }, [1, 2, 3, 4])'
    assert run(code) == ["10"]


def test_files(tmp_path):
    code = 'file_lekho("a.txt", "one\\n")\n file_jog("a.txt", "two")\n dekhao file_porho("a.txt"), file_ache("a.txt"), file_ache("b.txt")'
    assert run(code, path=str(tmp_path / "main.be")) == ["one\ntwo true false"]
    with pytest.raises(BeRuntimeError, match="File not found"):
        run('file_porho("missing.txt")', path=str(tmp_path / "main.be"))


WEBSITE = """
dhoro app = website()
dhoro notes = ["first"]
app.pata("/", kaj (r) { ferot "<h1>Notes: {lomba(notes)}</h1>" })
app.pata("/add", kaj (r) {
    jukto(notes, r.ghor.note)
    ferot uttor("saved", 201)
}, poddhoti = "POST")
app.pata("/hello/:nam", kaj (r) { ferot "Hello {r.ongsho.nam}, page {r.prosno.page}" })
app.pata("/api", kaj () { ferot {"notes": notes} })
app.pata("/broken", kaj (r) { ferot 1 / 0 })
"""


def test_website_pages():
    interp = interpreter(WEBSITE)
    app = interp.globals.get("app", 0)
    assert app.porikkha("/") == {"abostha": 200, "dhoron": "text/html; charset=utf-8", "lekha": "<h1>Notes: 1</h1>"}
    status, _, body = app.handle(
        "POST", "/add", b"note=second", {"Content-Type": "application/x-www-form-urlencoded"}
    )
    assert (status, body) == (201, b"saved")
    assert app.porikkha("/hello/Rahim?page=2")["lekha"] == "Hello Rahim, page 2"
    api = app.porikkha("/api")
    assert api["dhoron"].startswith("application/json")
    assert json.loads(api["lekha"]) == {"notes": ["first", "second"]}
    assert app.porikkha("/nope")["abostha"] == 404
    assert app.porikkha("/add")["abostha"] == 404  # only POST goes to /add
    broken = app.porikkha("/broken")
    assert broken["abostha"] == 500 and "divide by zero" in broken["lekha"]


def test_website_porikkha_from_be_code():
    assert run(WEBSITE + 'dhoro t = app.porikkha("/")\n dekhao t.abostha, t.lekha') == ["200 <h1>Notes: 1</h1>"]


def test_website_static_folder(tmp_path):
    (tmp_path / "public").mkdir()
    (tmp_path / "public" / "style.css").write_text("h1 { color: green }", encoding="utf-8")
    interp = interpreter('dhoro app = website()\n app.fileguli("/static", "public")', path=str(tmp_path / "site.be"))
    page = interp.globals.get("app", 0).porikkha("/static/style.css")
    assert page["abostha"] == 200 and page["dhoron"].startswith("text/css") and "green" in page["lekha"]


def fake_tkinter(script=None):
    """A pretend tkinter that records what BE asks for, so apps can be tested without a screen.

    mainloop() clicks every button in the order they were made, or runs
    script(buttons, press_key) when one is given."""
    log = []
    module = types.ModuleType("tkinter")
    buttons = []
    keys = {}

    class TclError(Exception):
        pass

    class Event:
        def __init__(self, char="", keysym=""):
            self.char, self.keysym = char, keysym

    class Widget:
        def __init__(self, parent=None, **options):
            self.options = dict(options)
            log.append((type(self).__name__, options.get("text")))

        def pack(self, **options):
            pass

        def grid(self, **options):
            self.grid_options = options

        def columnconfigure(self, index, **options):
            pass

        def config(self, **options):
            self.options.update(options)
            log.append(("config", options))

        def cget(self, key):
            return self.options.get(key, "")

        def bind(self, event, handler):
            if event == "<Button-1>":
                self.click = lambda: handler(Event())
                buttons.append(self)
            else:
                keys[event] = handler

    class Tk(Widget):
        def title(self, text):
            log.append(("title", text))

        def geometry(self, size):
            log.append(("geometry", size))

        def after(self, ms, fn):
            fn()

        def mainloop(self):
            if script is None:
                for button in buttons:
                    button.click()
            else:
                script(buttons, lambda char, keysym=None: keys["<Key>"](Event(char, keysym or char)))

        def destroy(self):
            log.append(("destroy",))

    class StringVar:
        def __init__(self, value=""):
            self.value = value

        def get(self):
            return self.value

        def set(self, value):
            self.value = value

    module.TclError, module.Tk, module.Frame, module.Label = TclError, Tk, Widget, Widget
    module.Entry, module.StringVar = Widget, StringVar
    return module, log


def test_desktop_app(monkeypatch):
    module, log = fake_tkinter()
    monkeypatch.setitem(sys.modules, "tkinter", module)
    code = """
    dhoro w = janala("My App", 300, 200)
    dhoro label = w.lekha("Count: 0")
    dhoro box = w.ghor("Rahim")
    dhoro gona = 0
    w.botam("Add", kaj () {
        gona += 1
        label.bodlao("Count: {gona}, name: {box.man()}")
    })
    w.chalao()
    dekhao label.man(), dhoron(w), w
    """
    assert run(code) == ["Count: 1, name: Rahim window <window>"]
    assert ("title", "My App") in log and ("geometry", "300x200") in log


def test_app_rows_colors_sizes_and_keys(monkeypatch):
    def script(buttons, press_key):
        for button in buttons:
            button.click()
        press_key("\r", "Return")
        press_key("", "Shift_L")      # Shift alone is not a key press
        press_key("7")

    module, log = fake_tkinter(script)
    monkeypatch.setitem(sys.modules, "tkinter", module)
    code = """
    dhoro w = janala("Keys")
    w.pechon("#16201b")
    dhoro shown = w.lekha("").akar(30).rong("white").dane()
    dhoro row = w.sari()
    protiti nam ["a", "b", "c"] theke {
        row.botam(nam, kaj () { shown.bodlao(shown.man() + nam) }).pechon("green")
    }
    w.chabi_chap(kaj (key) { shown.bodlao(shown.man() + "[" + key + "]") })
    w.chalao()
    dekhao shown.man(), dhoron(row), row, dhoron(shown)
    """
    assert run(code) == ["abc[Enter][7] row <row> text"]
    assert ("config", {"bg": "#16201b"}) in log and ("config", {"font": ("Segoe UI", 30)}) in log
    assert ("config", {"anchor": "e", "justify": "right"}) in log and ("config", {"bg": "green"}) in log


def test_app_mistakes_have_clear_messages(monkeypatch):
    module, log = fake_tkinter()
    monkeypatch.setitem(sys.modules, "tkinter", module)
    with pytest.raises(BeTypeError, match="botam\\(\\)'s second input must be a kaj"):
        run('janala("x").botam("Go", 5)')
    with pytest.raises(BeTypeError, match="akar\\(\\) needs a text size"):
        run('janala("x").lekha("a").akar("big")')
    with pytest.raises(BeTypeError, match="needs a color"):
        run('janala("x").sari().lekha("a").rong(5)')


def test_browser_only_functions_explain_themselves():
    with pytest.raises(BeRuntimeError, match="only works in a web page"):
        run('khojo("#x")')


# ---------------------------------------------------------------- did you mean


DID_YOU_MEAN_CASES = [
    (W["PRINT"] + 'o "hi"', W["PRINT"]),
    ("jodii sotti { }", W["IF"]),
    ("kajj f() { }", W["FUNC"]),
    ("ghuro i = 1 thekee 3 { }", W["FROM"]),
    ("jodi sotti tahol { }", W["THEN"]),
    ("dhoro boyosh = 1\n dekhao boyos", "boyosh"),
    ("dekhao lombaa([1])", "lomba"),
    ("dekhao Sotti_", W["TRUE"]),
]


@pytest.mark.parametrize("code, suggestion", DID_YOU_MEAN_CASES)
def test_did_you_mean(code, suggestion):
    with pytest.raises(BeError) as caught:
        run(code)
    assert f"Did you mean '{suggestion}'?" in str(caught.value)


ENGLISH_HINT_CASES = [
    ('print("hi")', W["PRINT"]),
    ("dhoro n = len([1])", "lomba"),
    ("dhoro s = server()", "website"),
    ('dhoro r = {"ongsho": 1}\n dekhao r.params', "ongsho"),
    ('dhoro s = website()\n s.path("/", kaj () { ferot 1 })', "pata"),
]


@pytest.mark.parametrize("code, suggestion", ENGLISH_HINT_CASES)
def test_english_words_get_a_banglish_hint(code, suggestion):
    """Words people know from English or Python point to the BE word."""
    with pytest.raises(BeError) as caught:
        run(code)
    assert f"Did you mean '{suggestion}'?" in str(caught.value)


def test_english_hint_does_not_replace_a_missing_variable_message():
    with pytest.raises(BeNameError, match="Give it a value first"):
        run("dekhao text")


# ---------------------------------------------------------------- errors


ERROR_CASES = [
    ("dekhao x", BeNameError, "is not defined"),
    ("dhoro x 5", BeSyntaxError, "'='"),
    ('dekhao "hello', BeSyntaxError, "never ends"),
    ("jodi sotti {\n dekhao 1", BeSyntaxError, "Missing '}'"),
    ("dekhao 5 / 0", BeRuntimeError, "divide by zero"),
    ('dekhao "a" - 1', BeTypeError, "'-'"),
    ("dhoro t = [1]\n dekhao t[3]", BeRuntimeError, "no position 3"),
    ('dhoro m = {"a": 1}\n dekhao m["b"]', BeRuntimeError, "no key"),
    ("thamo", BeSyntaxError, "inside a loop"),
    ("ferot 1", BeSyntaxError, f"inside a {W['FUNC']}"),
    ("kaj f(a) { ferot a }\n f(1, 2)", BeTypeError, "takes 1 input, but 2 were given"),
    ("kaj f(a, b) { ferot a }\n f(1)", BeTypeError, "missing the input 'b'"),
    ("kaj f(a) { ferot a }\n f(b = 1)", BeTypeError, "no input called 'b'"),
    ("dekhao lomba(x = 1)", BeTypeError, "doesn't take named inputs"),
    ("dhoro x = 1\n x()", BeTypeError, "not a function"),
    ("dekhao 5 @ 2", BeSyntaxError, "'@'"),
    ("nahole { }", BeSyntaxError, f"'{W['IF']}'"),
    ("tahole { }", BeSyntaxError, "right after the condition"),
    ('dekhao shonkha("abc")', BeTypeError, "can't be turned into a number"),
    ("kaj f(n) { ferot f(n + 1) }\n f(1)", BeRuntimeError, "stopping condition"),
    ("ghuro i = 1 theke 5 dhap 0 { }", BeRuntimeError, "can't be 0"),
    ("dekhao 1 < 2 < 3", BeSyntaxError, W["AND"]),
    ("chesta { } nahole jodi sotti { }", BeSyntaxError, "can't follow"),
    ("ghuro i theke 3 { }", BeSyntaxError, f"'{W['TIMES']}'"),
    ("ghuro 2.5 bar { }", BeTypeError, "whole number"),
    ("kaj f(a = 1, b) { }", BeSyntaxError, "must come after"),
    ("f(a = 1, 2)", BeSyntaxError, "must come before named"),
    ('dekhao "x".nam', BeTypeError, "has no field"),
    ("dekhao 1 moddhe 5", BeTypeError, "needs a list, text or dictionary"),
    ("dekhao boro([])", BeRuntimeError, "empty list"),
    ('dekhao shajao([1, "a"])', BeTypeError, "all numbers or all text"),
    ('dekhao json_porho("{bad")', BeSyntaxError, "never closed"),
    ('dekhao json_porho("nope")', BeRuntimeError, "isn't valid JSON"),
    ("5 = 3", BeSyntaxError, "can only be stored"),
]


@pytest.mark.parametrize("code, error_type, words", ERROR_CASES)
def test_errors_are_friendly(code, error_type, words):
    with pytest.raises(error_type) as caught:
        run(code)
    assert words in str(caught.value)


def test_error_has_line_and_column():
    with pytest.raises(BeError) as caught:
        run("dhoro a = 1\n dhoro b = 2\n dekhao 10 / 0")
    assert caught.value.line == 3
    assert caught.value.col == len(W["PRINT"]) + 6  # the "/" sign


# ---------------------------------------------------------------- examples


@pytest.mark.parametrize("path", sorted(EXAMPLES.glob("*.be")), ids=lambda p: p.name)
def test_every_example_runs(path):
    # The guessing game asks questions; an empty answer ends it.
    printed = run(path.read_text(encoding="utf-8"), inputs=[""] * 5, path=str(path))
    assert printed, f"{path.name} printed nothing"


def test_python_examples_run(tmp_path):
    for name in ["python_library.be", "files.be"]:
        source = (EXAMPLES / "python" / name).read_text(encoding="utf-8")
        assert run(source, path=str(tmp_path / name))


def test_website_example_pages():
    source = (EXAMPLES / "website" / "website.be").read_text(encoding="utf-8")
    source = source.replace("amar_site.chalao(8000)", "")  # don't start the real server in a test
    assert "chalao" not in source
    interp = interpreter(source, path=str(EXAMPLES / "website" / "website.be"))
    app = interp.globals.get("amar_site", 0)
    assert "My notes" in app.porikkha("/")["lekha"]
    assert app.porikkha("/static/style.css")["abostha"] == 200


def test_app_examples_run(monkeypatch):
    module, log = fake_tkinter()
    monkeypatch.setitem(sys.modules, "tkinter", module)
    for name in ["counter_app.be", "calculator.be"]:
        path = EXAMPLES / "app" / name
        run(path.read_text(encoding="utf-8"), path=str(path))
    assert ("config", {"text": "Count: 1"}) in log


CALCULATOR = EXAMPLES / "app" / "calculator.be"
WINDOW_PART = "# ---------------------------------------------------------------- the window"
CALCULATOR_CASES = [
    ("12+7=", "19 | 12 + 7 ="),
    ("0.1+0.2=", "0.3 | 0.1 + 0.2 ="),
    ("2+3*4=", "20 | 5 × 4 ="),
    ("7/0=", "Error | Can't divide by 0"),
    ("7/0=5", "5 | "),
    ("200+10%=", "220 | 200 + 20 ="),
    ("9~<", "0 | "),
    ("123<", "12 | "),
    ("5.5.2", "5.52 | "),
    ("5++-3=", "2 | 5 − 3 ="),
    ("12+7=+1=", "20 | 19 + 1 ="),
    ("99999999*99999999=", "Error | Number too big"),
]


def calculator_program():
    """BE code that presses every CALCULATOR_CASES key on the example's Calculator brain."""
    brain = CALCULATOR.read_text(encoding="utf-8").split(WINDOW_PART)[0]
    keys = {"~": "+/-", "<": "back"}
    lines = [brain]
    for presses, _ in CALCULATOR_CASES:
        lines.append("c = HisabJontro()")
        lines += [f'c.chap("{keys.get(k, k)}")' for k in presses]
        lines.append(f'{W["PRINT"]} c.porda + " | " + c.sutro')
    return "\n".join(lines)


def test_calculator_brain():
    assert run(calculator_program()) == [want for _, want in CALCULATOR_CASES]


def test_calculator_app(monkeypatch):
    """Click the calculator's buttons and type on the keyboard, with a pretend tkinter."""

    def script(buttons, press_key):
        by_text = {button.options["text"]: button for button in buttons}
        for text in ["1", "2", "+", "7"]:
            by_text[text].click()
        press_key("\r", "Return")
        press_key("*", "asterisk")
        press_key("2")
        by_text["="].click()

    module, log = fake_tkinter(script)
    monkeypatch.setitem(sys.modules, "tkinter", module)
    interp = interpreter(CALCULATOR.read_text(encoding="utf-8"), path=str(CALCULATOR))
    shown = {name: interp.globals.get(name, 0).man() for name in ["porda", "sutro", "itihash_lekha"]}
    assert shown == {"porda": "38", "sutro": "19 × 2 =", "itihash_lekha": "19 × 2 = 38\n12 + 7 = 19"}
    assert ("title", "BE Calculator") in log


def test_python_tkinter_missing_explains_how_to_get_it(monkeypatch):
    monkeypatch.setitem(sys.modules, "tkinter", None)
    with pytest.raises(BeRuntimeError, match="Desktop windows need tkinter"):
        run('dhoro tk = python("tkinter")')



# ---------------------------------------------------------------- BE's own installer


def test_installer_files_are_ready():
    """tools/build_exe.py, installer/be.iss and the GitHub workflow that builds BE-Setup.exe."""
    import importlib
    import re

    sys.path.insert(0, str(ROOT / "tools"))
    try:
        build = importlib.import_module("build_exe")
    finally:
        sys.path.remove(str(ROOT / "tools"))
    for name in build.STANDARD_LIBRARY:
        if name != "tkinter":  # tkinter may be missing on a test computer
            importlib.import_module(name)  # every name python() can use in be.exe is real
    iss = (ROOT / "installer" / "be.iss").read_text(encoding="utf-8")
    assert re.search(r'#define AppVersion "([^"]+)"', iss).group(1) == __version__
    assert 'Source: "..\\dist\\be-windows.exe"' in iss and "ChangesEnvironment=yes" in iss
    workflow = (ROOT / ".github" / "workflows" / "build-be.yml").read_text(encoding="utf-8")
    assert "python tools/build_exe.py" in workflow and "iscc" in workflow and "BE-Setup.exe" in workflow


# ---------------------------------------------------------------- the Learn BE page


def load_build_learn():
    import importlib

    sys.path.insert(0, str(ROOT / "tools"))
    try:
        return importlib.import_module("build_learn")
    finally:
        sys.path.remove(str(ROOT / "tools"))


def test_learn_lessons_are_up_to_date():
    """playground/lessons.js comes from learn/course.md: run python tools/sync.py after changing the course."""
    build = load_build_learn()
    data = build.make_lessons()
    assert (ROOT / "playground" / "lessons.js").read_text(encoding="utf-8") == build.lessons_js(data)
    assert len(data["lessons"]) == 19 and len(data["tasks"]) == 30
    for key, task in data["tasks"].items():
        assert key in build.CHECKS, f"Try it {key} has no check in tools/build_learn.py"
        assert task["starter"] and (task["answer"]["code"] or task["answer"].get("full")), key


def test_learn_answers_pass_their_checks(tmp_path):
    """Each exercise's answer, run by Python BE, gives what the Learn page's checker looks for."""
    build = load_build_learn()
    for key, task in build.make_lessons()["tasks"].items():
        if task.get("opens") or task.get("page"):
            continue  # apps, websites and web pages are checked in the browser
        code = task["answer"].get("full") or task["answer"]["code"]
        for word in task.get("uses", []):
            assert word in code, (key, word)
        for number, case in enumerate(task.get("cases") or [{}]):
            folder = tmp_path / f"{key}-{number}"
            folder.mkdir()
            printed = []
            answers = iter(case.get("inputs", []))
            program = code.rstrip() + "\n" + case.get("append", "") + "\n"
            run_source(program, output=printed.append, input_fn=lambda prompt="": next(answers, ""), path=str(folder / "main.be"))
            text = "\n".join(printed)
            assert len([line for line in text.split("\n") if line.strip()]) >= task.get("lines", 0), key
            for want in case.get("want", []):
                assert want in text, (key, want, text)
            for avoid in case.get("avoid", []):
                assert avoid not in text, (key, avoid, text)
            for name, wants in case.get("files", {}).items():
                saved = (folder / name).read_text(encoding="utf-8")
                assert all(want in saved for want in wants), (key, name, saved)
            if case.get("custom") == "marks_total":
                marks = json.loads((folder / "marks.json").read_text(encoding="utf-8"))
                assert str(sum(marks.values())) in text, (key, text)


FILE_PROGRAM = (
    'file_lekho("bajar.txt", "chal\\n")\nfile_jog("bajar.txt", "dal\\n")\n'
    'dekhao file_ache("bajar.txt"), file_ache("nai.txt"), bhag(parishkar(file_porho("bajar.txt")), "\\n")\n'
    'file_lekho("marks.json", json_banao({"Bangla": 85, "Math": [92, 1.5]}))\n'
    'dekhao json_porho(file_porho("marks.json")).Math, file_porho("marks.json")\n'
    'file_lekho("bajar.txt", "")\ndekhao "[" + file_porho("bajar.txt") + "]", file_ache("bajar.txt")\n'
    'chesta { file_porho("nai.txt") } nahole b { dekhao b }\n'
    'chesta { file_lekho("a.txt", 5) } nahole b { dekhao b }\n'
    'chesta { file_jog(1, "x") } nahole b { dekhao b }\n'
    'chesta { file_ache() } nahole b { dekhao b }'
)


@pytest.mark.skipif(shutil.which("node") is None, reason="Node.js is not installed, so the JavaScript check is skipped")
def test_file_words_with_a_pretend_folder_match_python(tmp_path):
    """The Learn page gives be.js a pretend folder, so the file words work there just like on a computer."""
    expected = python_result(FILE_PROGRAM, [], str(tmp_path / "main.be"))
    script = (
        "const BE = require(process.argv[1]); const store = {};"
        "const files = { read: (p) => (p in store ? store[p] : null), write: (p, t) => { store[p] = t; } };"
        "const r = BE.run(require('fs').readFileSync(0, 'utf-8'), { files, path: 'main.be' });"
        "console.log(JSON.stringify({ output: r.output, error: r.error ? r.error.toString() : null }));"
    )
    result = subprocess.run(
        ["node", "-e", script, str(ROOT / "playground" / "be.js")],
        input=FILE_PROGRAM, capture_output=True, text=True, encoding="utf-8", cwd=ROOT,
    )
    assert result.returncode == 0, result.stderr
    got = json.loads(result.stdout)
    assert expected["error"] is None and got == {"output": expected["output"], "error": None}


# ---------------------------------------------------------------- the JavaScript version

WEBSITE_PROGRAM = 'dhoro app = website()\napp.pata("/", kaj (r) { ferot "<h1>Hi</h1>" })\napp.pata("/hello/:nam", kaj (r) { ferot "Hello, {r.ongsho.nam}! {r.prosno} {r.poddhoti}" })\napp.pata("/api", kaj (r) { ferot {"ok": sotti, "n": [1, 2.5], "t": "a\\"b"} })\napp.pata("/add", kaj (r) { ferot uttor("Saved " + r.ghor.note, 201, "text/plain") }, "POST")\napp.pata("/json", kaj (r) { ferot r.json }, poddhoti = "POST")\napp.pata("/none", kaj () { ferot kichuna })\ndhoro a = app.porikkha("/")\ndekhao a.abostha, a.dhoron, a.lekha\ndekhao app.porikkha("/hello/Mitu%20Das?x=1&y=2&x=3").lekha\ndekhao app.porikkha("/api").lekha, app.porikkha("/api/").dhoron\ndekhao app.porikkha("/add", "POST", {"note": "a b&c"}).lekha, app.porikkha("/add", poddhoti = "POST", tottho = {"note": "x"}).abostha\ndekhao app.porikkha("/add").abostha, app.porikkha("/nothing").abostha, app.porikkha("/nothing").lekha\ndekhao app.porikkha("/none"), dhoron(app), app, uttor("x"), dhoron(uttor("x"))\nchesta { app.pata("nope", kaj () { ferot 1 }) } nahole b { dekhao b }\nchesta { app.porikkha() } nahole b { dekhao b }\nchesta { app.kothao() } nahole b { dekhao b }\nchesta { uttor("x", "200") } nahole b { dekhao b }'

PARITY_PROGRAMS = [
    'dekhao 1 / 3, 0.1 + 0.2, 1 / 8, 0.00001, 123456789.125, -7 % 3, 7 % -3, -0, 2.5 * 4, 1.5e-7 * 1',
    'dekhao 0.1 * 3, 100000000000000000.0, 1234567890123456.5, 0.0001, 33.0 / 7, 2432902008176640000',
    'dekhao gol(2.675, 2), gol(-2.5), gol(0.5), gol(1234.5678, 1), gol(9.995, 2)',
    'dekhao "ab" * 3, [1] * 2, "x" * 0, [] + [1], "a" < "b", "B" < "a", [1, 2] == [1, 2]',
    'dhoro m = {1: "one", "1": "text", kichuna: 0}\n dekhao m, m[1], m["1"], lomba(m)',
    'dekhao shonkha(" 42 "), shonkha("-3.5"), shonkha("1_000"), shonkha(sotti), shonkha("1e3")',
    'dhoro t = [5, 6, 7]\n dekhao bad_dao(t, 0), t, t[-1], "abc"[1], lomba("emoji 😀")',
    'dhoro n = jiggesh("Name? ")\n dekhao "Hi {n}"',
    'kaj f(n) { jodi n <= 0 { ferot 0 }\n ferot 1 + f(n - 1) }\n dekhao f(500)',
    'ghuro i = 1 theke 2 dhap 0.5 { dekhao i }\n ghuro i = 0.1 theke 0.5 dhap 0.1 { dekhao i }',
    'dekhao [1, "a", sotti, kichuna, {"k": [2]}], dhoron(lomba), lomba, lekha([1, "a"])',
    'chesta { [1][5] } nahole b { dekhao b }',
    'dekhao "\\\\n is a new line", "tab\\\\t"',
    'dekhao 10 / 4 * 2, 2 + 3 * 4 - 1, (1 + 2) * 3 % 4',
    'dhoro t = []\n ghuro 3 bar { jukto(t, lomba(t)) }\n dekhao t',
    'dhoro fs = []\n protiti x [1, 2] theke { jukto(fs, kaj () { ferot x }) }\n dekhao fs[0](), fs[1]()',
    'dekhao boro("b", "a", "c"), choto(["b", "a"]), shajao(["b", "B", "a"]), jogfol([0.1, 0.2, 0.3])',
    'dekhao bhag("a b"), bhag("x--y", "--"), jora([]), bodlao("aaa", "a", ""), kothay([[1]], [1])',
    'dekhao json_banao({"a": [1, 2.5, "x"], "b": {"c": kichuna}, 3: sotti}), json_banao([], sotti), json_banao({}, sotti)',
    'dekhao json_porho("[1, 2.0, \\{\\"a\\": null, \\"b\\": [sotti]\\}]")',
    CLASS_CODE + 'dhoro c = Chhatro("A", "S")\n dekhao c.parichoy(), c.birthday().boyosh, dhoron(Chhatro), Chhatro.parichoy',
    'dhoro m = {"x": 1}\n m.y = 2\n m.x += 5\n dekhao m, m.x moddhe [6]',
    'kaj f(a, b = [a]) { jukto(b, 9)\n ferot b }\n dekhao f(1), f(2), f(3, [])',
    'dekhao 1\n    + 2\n    * 3\n dhoro s = "a"\n    + "b"\n dekhao s',
]


def python_result(code, inputs, path=None):
    printed = []
    answers = iter(inputs)
    try:
        run_source(code, output=printed.append, input_fn=lambda prompt="": next(answers, ""), path=path)
        return {"output": printed, "error": None, "line": None, "col": None, "file": None}
    except BeError as error:
        return {"output": printed, "error": str(error), "line": error.line, "col": error.col, "file": error.filename}


def parity_cases():
    programs = [code for code, *_ in TEMPLATE_MISTAKES + DID_YOU_MEAN_CASES + ENGLISH_HINT_CASES + ERROR_CASES] + PARITY_PROGRAMS
    programs.append(calculator_program())
    programs.append(WEBSITE_PROGRAM)  # websites work the same in the browser
    cases = [{"code": code, "inputs": ["Rahim"], "path": None} for code in programs]
    for path in sorted(EXAMPLES.glob("*.be")):
        cases.append({"code": path.read_text(encoding="utf-8"), "inputs": [""] * 5, "path": path.relative_to(ROOT).as_posix()})
    for case in cases:
        full = str(ROOT / case["path"]) if case["path"] else None
        case["expected"] = python_result(case["code"], case["inputs"], full)
    return cases


@pytest.mark.skipif(shutil.which("node") is None, reason="Node.js is not installed, so the JavaScript check is skipped")
def test_javascript_version_matches_python(tmp_path):
    """playground/be.js must print exactly what Python BE prints."""
    cases_file = tmp_path / "cases.json"
    cases_file.write_text(json.dumps(parity_cases(), ensure_ascii=False), encoding="utf-8")
    result = subprocess.run(
        ["node", str(ROOT / "playground" / "check.js"), str(cases_file)],
        capture_output=True,
        text=True,
        encoding="utf-8",
        cwd=ROOT,
    )
    assert result.returncode == 0, result.stdout + result.stderr
