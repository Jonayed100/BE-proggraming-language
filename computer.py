"""
BE functions that only work on a computer (not in the browser):

    python("math")          use any Python library
    ghumao(2)               wait 2 seconds
    file_porho("a.txt")     read a file          file_lekho("a.txt", text)  write a file
    file_jog("a.txt", t)    add to a file        file_ache("a.txt")         does it exist?
    web_theke(url)          download a web page or API answer as text
    website()               make a website  ->  site.pata("/", kaj (r) { ... })  site.chalao(8000)
    uttor(lekha, abostha, dhoron)  a website answer with a status code or type
    janala("Title")         make an app window with text, buttons, input boxes and rows

website(), uttor() and janala() also work in the browser (the BE Playground shows them
in a preview), so the same website or app code runs in both places.

Every word you type is Banglish: pata (page), fileguli (the files), porikkha (test),
chalao (run). What a visitor sends is in r: r.ongsho (the :parts of the address),
r.ghor (what they typed in a form's boxes), r.prosno (after ? in the address),
r.thikana (the address), r.poddhoti ("GET" or "POST"), r.json, r.lekha, r.tottho.

Files are looked for next to the .be file that is running.
"""

import importlib
import json
import mimetypes
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from http.server import BaseHTTPRequestHandler, HTTPServer

from .errors import BeError, BeRuntimeError, BeTypeError, format_error
from .values import BE_FUNCTION_TYPES, BoundMethod, is_number, to_display, type_name


def need_text(name, value, line, which="first"):
    if not isinstance(value, str):
        raise BeTypeError(f"{name}() needs text as its {which} input, not a {type_name(value)}.", line)


def resolve(interp, path):
    return os.path.join(interp.folder, path)


def report(error):
    """Show a BE error from inside a website or app without stopping it."""
    source = getattr(error, "source", None)
    print(format_error(error, source, getattr(error, "filename", None)), file=sys.stderr, flush=True)


# ------------------------------------------------------------------ Python libraries


TKINTER_MISSING = (
    "Desktop windows need tkinter, which comes with Python. Reinstall Python from python.org "
    "and keep 'tcl/tk and IDLE' ticked."
)


def be_python(interp, args, line):
    """python("math"): use a Python library, for example python("flask")."""
    name = args[0]
    need_text("python", name, line)
    try:
        return importlib.import_module(name)
    except ImportError:
        if name.split(".")[0] == "tkinter":
            raise BeRuntimeError(TKINTER_MISSING, line) from None
        raise BeRuntimeError(
            f"The Python library '{name}' isn't installed. Install it with: pip install {name}", line
        ) from None


def be_ghumao(interp, args, line):
    """ghumao(seconds): wait (sleep) for some seconds."""
    if not is_number(args[0]) or args[0] < 0:
        raise BeTypeError("ghumao() needs a number of seconds, 0 or more.", line)
    time.sleep(args[0])
    return None


# ------------------------------------------------------------------ files and internet


def be_file_porho(interp, args, line):
    """file_porho(path): read a whole text file."""
    need_text("file_porho", args[0], line)
    path = resolve(interp, args[0])
    try:
        with open(path, encoding="utf-8-sig") as handle:
            return handle.read()
    except FileNotFoundError:
        raise BeRuntimeError(f'File not found: "{args[0]}"', line) from None
    except OSError as error:
        raise BeRuntimeError(f'Couldn\'t read "{args[0]}": {error.strerror}', line) from None


def write_file(name, args, line, interp, mode):
    need_text(name, args[0], line)
    need_text(name, args[1], line, "second")
    path = resolve(interp, args[0])
    try:
        with open(path, mode, encoding="utf-8") as handle:
            handle.write(args[1])
    except OSError as error:
        raise BeRuntimeError(f'Couldn\'t write "{args[0]}": {error.strerror}', line) from None
    return None


def be_file_lekho(interp, args, line):
    """file_lekho(path, text): write text to a file (replaces what was there)."""
    return write_file("file_lekho", args, line, interp, "w")


def be_file_jog(interp, args, line):
    """file_jog(path, text): add text to the end of a file."""
    return write_file("file_jog", args, line, interp, "a")


def be_file_ache(interp, args, line):
    """file_ache(path): sotti if the file exists."""
    need_text("file_ache", args[0], line)
    return os.path.isfile(resolve(interp, args[0]))


def be_web_theke(interp, args, line):
    """web_theke(url): download a page or API answer and give it back as text."""
    url = args[0]
    need_text("web_theke", url, line)
    request = urllib.request.Request(url, headers={"User-Agent": "BE-language"})
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            charset = response.headers.get_content_charset() or "utf-8"
            return response.read().decode(charset, errors="replace")
    except (urllib.error.URLError, ValueError, OSError) as error:
        reason = getattr(error, "reason", error)
        raise BeRuntimeError(f"Couldn't load {url}: {reason}", line) from None


# ------------------------------------------------------------------ websites


class BeResponse:
    """What uttor() makes: a website answer with its own status code and type."""

    _be_native = True
    be_type = "answer"

    def __init__(self, body, status, content_type):
        self.body = body
        self.status = status
        self.content_type = content_type

    def __repr__(self):
        return "<answer>"


def be_uttor(interp, args, line):
    """uttor(lekha, abostha, dhoron): an answer like uttor("Not found", 404) or uttor(data, 200, "text/plain")."""
    body = args[0]
    status = args[1] if len(args) > 1 else 200
    content_type = args[2] if len(args) > 2 else None
    if not isinstance(status, int) or isinstance(status, bool):
        raise BeTypeError("uttor()'s second input must be a status number, like 200 or 404.", line)
    if content_type is not None:
        need_text("uttor", content_type, line, "third")
    return BeResponse(body, status, content_type)


def route_pattern(route):
    """'/user/:id' -> a regular expression that captures id (r.ongsho.id)."""
    parts = re.split(r"(:[A-Za-z_][A-Za-z0-9_]*)", route)
    regex = ""
    for part in parts:
        if part.startswith(":"):
            regex += f"(?P<{part[1:]}>[^/]+)"
        else:
            regex += re.escape(part)
    return re.compile(f"^{regex}/?$" if route != "/" else "^/$")


class BeServer:
    """A website made with website()."""

    _be_native = True
    be_type = "website"

    def __init__(self, interp):
        self.interp = interp
        self.routes = []   # (method or None, pattern, route text, handler)
        self.folders = []  # (url prefix, folder on disk)

    # -- what BE programs call --------------------------------------------

    def pata(self, thikana, kajti, poddhoti=None):
        """site.pata("/", kaj (r) { ferot "<h1>Hello</h1>" }): a page of the website"""
        if not isinstance(thikana, str) or not thikana.startswith("/"):
            raise BeTypeError('pata()\'s first input must be text starting with "/", like "/" or "/about".')
        if not isinstance(kajti, BE_FUNCTION_TYPES):
            raise BeTypeError("pata()'s second input must be a kaj that makes the page.")
        if poddhoti is not None and not isinstance(poddhoti, str):
            raise BeTypeError('pata()\'s poddhoti must be text, like "GET" or "POST".')
        self.routes.append((poddhoti.upper() if poddhoti else None, route_pattern(thikana), thikana, kajti))
        return None

    def fileguli(self, thikana, jayga):
        """site.fileguli("/static", "public"): the files in a folder (CSS, pictures, JavaScript)."""
        if not isinstance(thikana, str) or not thikana.startswith("/"):
            raise BeTypeError('fileguli()\'s first input must be text starting with "/", like "/static".')
        if not isinstance(jayga, str):
            raise BeTypeError("fileguli()'s second input must be the name of a folder.")
        self.folders.append((thikana.rstrip("/") or "/", os.path.join(self.interp.folder, jayga)))
        return None

    def porikkha(self, thikana, poddhoti="GET", tottho=""):
        """site.porikkha("/about"): try a page without opening a browser. Gives {abostha, dhoron, lekha}."""
        if not isinstance(thikana, str):
            raise BeTypeError("porikkha() needs a page address, like \"/\".")
        if not isinstance(poddhoti, str):
            raise BeTypeError('porikkha()\'s poddhoti must be text, like "GET" or "POST".')
        headers = {}
        body = tottho
        if isinstance(body, dict):  # a dictionary is sent the way a form sends it
            body = urllib.parse.urlencode({to_display(k): to_display(v) for k, v in body.items()})
            headers = {"Content-Type": "application/x-www-form-urlencoded"}
        status, content_type, payload = self.handle(poddhoti.upper(), thikana, to_display(body).encode("utf-8"), headers)
        return {"abostha": status, "dhoron": content_type, "lekha": payload.decode("utf-8", errors="replace")}

    def chalao(self, port=8000):
        """site.chalao(8000): start the website at http://localhost:8000"""
        if not isinstance(port, int) or isinstance(port, bool):
            raise BeTypeError("chalao() needs a port number, like 8000.")
        server_object = self

        class Handler(BaseHTTPRequestHandler):
            def answer(self, method):
                length = int(self.headers.get("Content-Length") or 0)
                body = self.rfile.read(length) if length else b""
                status, content_type, payload = server_object.handle(
                    method, self.path, body, dict(self.headers.items())
                )
                self.send_response(status)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Length", str(len(payload)))
                self.end_headers()
                if method != "HEAD":
                    self.wfile.write(payload)

            def do_GET(self):
                self.answer("GET")

            def do_POST(self):
                self.answer("POST")

            def do_PUT(self):
                self.answer("PUT")

            def do_DELETE(self):
                self.answer("DELETE")

            def do_HEAD(self):
                self.answer("HEAD")

            def log_message(self, fmt, *args):
                print(f"  {self.command} {self.path} -> {args[1] if len(args) > 1 else ''}", flush=True)

        try:
            httpd = HTTPServer(("", port), Handler)
        except OSError:
            raise BeRuntimeError(
                f"Port {port} is already in use. Try another number, like chalao({port + 1})."
            ) from None
        print(f"BE website running at http://localhost:{port}  (press Ctrl+C to stop)", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nWebsite stopped.", flush=True)
        finally:
            httpd.server_close()
        return None

    # -- inside ------------------------------------------------------------

    def handle(self, method, raw_path, body, headers):
        """Find the right page for a request and make it. Returns (status, type, bytes)."""
        parsed = urllib.parse.urlsplit(raw_path)
        path = urllib.parse.unquote(parsed.path) or "/"

        for prefix, directory in self.folders:
            if path == prefix or path.startswith(prefix.rstrip("/") + "/"):
                relative = path[len(prefix):].lstrip("/")
                full = os.path.normpath(os.path.join(directory, relative))
                if full.startswith(os.path.normpath(directory)) and os.path.isfile(full):
                    with open(full, "rb") as handle:
                        data = handle.read()
                    kind = mimetypes.guess_type(full)[0] or "application/octet-stream"
                    if kind.startswith("text/") or kind in ("application/javascript", "application/json"):
                        kind += "; charset=utf-8"
                    return 200, kind, data

        for route_method, pattern, _route, handler in self.routes:
            found = pattern.match(path)
            if not found or (route_method and route_method != method and not (route_method == "GET" and method == "HEAD")):
                continue
            request = self.make_request(method, path, parsed.query, body, headers, found.groupdict())
            try:
                function = handler.function if isinstance(handler, BoundMethod) else handler
                inputs = [request] if function.params else []
                result = self.interp.call(handler, inputs, None)
            except BeError as error:
                report(error)
                return 500, "text/html; charset=utf-8", self.error_page(error)
            return self.make_answer(result)

        message = f"Page not found: {path}"
        return 404, "text/html; charset=utf-8", f"<h1>404</h1><p>{escape(message)}</p>".encode("utf-8")

    @staticmethod
    def make_request(method, path, query, body, headers, params):
        text = body.decode("utf-8", errors="replace")
        form = {}
        data = None
        content_type = next((v for k, v in headers.items() if k.lower() == "content-type"), "")
        if "application/x-www-form-urlencoded" in content_type:
            form = {k: v[-1] for k, v in urllib.parse.parse_qs(text, keep_blank_values=True).items()}
        elif "application/json" in content_type and text:
            try:
                data = json.loads(text)
            except ValueError:
                data = None
        # What the visitor sent, with Banglish names: r.ongsho, r.ghor, r.prosno, ...
        return {
            "poddhoti": method,
            "thikana": path,
            "prosno": {k: v[-1] for k, v in urllib.parse.parse_qs(query, keep_blank_values=True).items()},
            "ongsho": params,
            "ghor": form,
            "json": data,
            "lekha": text,
            "tottho": {k.lower(): v for k, v in headers.items()},
        }

    @staticmethod
    def make_answer(result):
        status, content_type = 200, None
        if isinstance(result, BeResponse):
            status, content_type, result = result.status, result.content_type, result.body
        if result is None:
            return status, content_type or "text/plain; charset=utf-8", b""
        if isinstance(result, (dict, list)):
            from .builtin_functions import to_json_value

            payload = json.dumps(to_json_value(result, None), ensure_ascii=False).encode("utf-8")
            return status, content_type or "application/json; charset=utf-8", payload
        return status, content_type or "text/html; charset=utf-8", to_display(result).encode("utf-8")

    @staticmethod
    def error_page(error):
        return (
            "<h1>500: the BE code for this page has a mistake</h1>"
            f"<pre>{escape(str(error))}</pre>"
        ).encode("utf-8")

    def __repr__(self):
        return "<website>"


def escape(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def be_website(interp, args, line):
    """website(): make a website. Add pages with .pata(...) and start it with .chalao(8000)."""
    return BeServer(interp)


# ------------------------------------------------------------------ desktop apps
#
# janala() makes a window. The same words work in the browser (playground/be.js),
# so an app made with them runs with `be run` and in the BE Playground:
#
#   window.lekha(lekha)         text            window.botam(lekha, kaj)  a button
#   window.ghor(lekha)          an input box    window.sari()             a row: things side by side
#   window.pechon(color)        background      window.chabi_chap(kaj)    run a kaj when a key is pressed
#   window.pore(seconds, kaj)   run later       window.chalao() / window.bondho()
#
#   Every text, button and box has: bodlao(lekha), man(), rong(rong), pechon(rong),
#   akar(akar) and dane() (text on the right). They give back the same thing, so they chain:
#   window.lekha("0").akar(36).dane()

APP_FONT = "Segoe UI"
APP_COLORS = {"window": "#f4f7f5", "text": "#18231c", "button": "#dfe6e1", "box": "#ffffff"}

# Key names are the same as in web pages: "a", "5", "+", "Enter", "Backspace", "Escape", ...
KEY_NAMES = {
    "Return": "Enter", "KP_Enter": "Enter", "BackSpace": "Backspace", "Escape": "Escape",
    "Delete": "Delete", "Tab": "Tab", "Up": "ArrowUp", "Down": "ArrowDown",
    "Left": "ArrowLeft", "Right": "ArrowRight", "space": " ",
}
MODIFIER_KEYS = ("Shift", "Control", "Alt", "Meta", "Super", "Caps_Lock", "Num_Lock", "ISO_Level3_Shift")


def key_name(event):
    keysym = getattr(event, "keysym", "") or ""
    if keysym in KEY_NAMES:
        return KEY_NAMES[keysym]
    if keysym.startswith(MODIFIER_KEYS):
        return None
    char = getattr(event, "char", "") or ""
    if len(char) == 1 and char.isprintable():
        return char
    return keysym or None


def need_color(name, color):
    if not isinstance(color, str) or not color.strip():
        raise BeTypeError(f'{name}() needs a color, like "red" or "#0d6b49".')
    return color.strip()


def need_kaj(handler, message):
    if not isinstance(handler, BE_FUNCTION_TYPES):
        raise BeTypeError(message)


def call_with_inputs(interp, handler, inputs):
    """Run a BE kaj for a click, a key or a timer. A kaj () { } simply ignores inputs it doesn't take."""
    function = handler.function if isinstance(handler, BoundMethod) else handler
    params = getattr(function, "params", None)
    if params is not None:
        inputs = list(inputs)[: len(params)]
    try:
        interp.call(handler, list(inputs), None)
    except BeError as error:
        report(error)


class BeWidget:
    """Something inside a window: text, a button or an input box."""

    _be_native = True

    def __init__(self, widget, kind, variable=None):
        self.widget = widget
        self.kind = kind
        self.variable = variable
        self.own_background = False

    def bodlao(self, lekha):
        """change the text it shows"""
        if self.variable is not None:
            self.variable.set(to_display(lekha))
        else:
            self.widget.config(text=to_display(lekha))
        return self

    def man(self):
        """the text it shows (for an input box: what the user typed)"""
        if self.variable is not None:
            return self.variable.get()
        return str(self.widget.cget("text"))

    def rong(self, rong):
        """change its text color: rong("red") or rong("#0d6b49")"""
        self.widget.config(fg=need_color("rong", rong))
        return self

    def pechon(self, rong):
        """change its background color: pechon("yellow")"""
        self.widget.config(bg=need_color("pechon", rong))
        self.own_background = True
        return self

    def akar(self, akar):
        """change its text size: akar(24)"""
        if not is_number(akar) or isinstance(akar, bool) or akar <= 0:
            raise BeTypeError("akar() needs a text size, like 16 or 32.")
        self.widget.config(font=(APP_FONT, int(round(akar))))
        return self

    def dane(self):
        """put its text on the right side, like on a calculator screen"""
        if self.kind == "input box":
            self.widget.config(justify="right")
        else:
            self.widget.config(anchor="e", justify="right")
        return self

    def __repr__(self):
        return f"<{self.kind}>"

    @property
    def be_type(self):
        return self.kind


class BeAppBox:
    """What a window and a row share: lekha(), botam() and ghor() put things inside them."""

    def lekha(self, lekha=""):
        """lekha("Hello"): show some text. Gives it back, so you can bodlao() it later."""
        label = self.tk.Label(self.frame, text=to_display(lekha), anchor="w", justify="left",
                              font=(APP_FONT, 12), bg=self.app.background, fg=APP_COLORS["text"])
        self.place(label)
        widget = BeWidget(label, "text")
        self.app.plain.append(widget)
        return widget

    def botam(self, lekha, kajti):
        """botam("Click", kaj () { ... }): a button that runs a kaj when clicked."""
        need_kaj(kajti, "botam()'s second input must be a kaj to run when it is clicked.")
        # A Label that can be clicked: unlike tkinter's Button, it keeps its colors on every computer, Macs too.
        button = self.tk.Label(self.frame, text=to_display(lekha), font=(APP_FONT, 12), bg=APP_COLORS["button"],
                               fg=APP_COLORS["text"], padx=12, pady=8, cursor="hand2")
        button.bind("<Button-1>", lambda event: call_with_inputs(self.app.interp, kajti, []))
        self.place(button)
        return BeWidget(button, "button")

    def ghor(self, lekha=""):
        """ghor(): an input box. Read what was typed with .man()"""
        variable = self.tk.StringVar(value=to_display(lekha))
        entry = self.tk.Entry(self.frame, textvariable=variable, font=(APP_FONT, 12), bg=APP_COLORS["box"])
        self.place(entry)
        return BeWidget(entry, "input box", variable)


class BeRow(BeAppBox):
    """window.sari(): things added to a row sit side by side, all the same width."""

    _be_native = True
    be_type = "row"

    def __init__(self, window):
        self.app = window
        self.tk = window.tk
        self.frame = window.tk.Frame(window.frame, bg=window.background)
        self.frame.pack(fill="x", pady=3)
        window.frames.append(self.frame)
        self.count = 0

    def place(self, widget):
        widget.grid(row=0, column=self.count, sticky="nsew", padx=3)
        self.frame.columnconfigure(self.count, weight=1, uniform="be")
        self.count += 1

    def __repr__(self):
        return "<row>"


class BeWindow(BeAppBox):
    """A desktop app window made with janala()."""

    _be_native = True
    be_type = "window"

    def __init__(self, interp, tk, title, width, height):
        self.interp = interp
        self.tk = tk
        self.app = self
        self.background = APP_COLORS["window"]
        self.plain = []   # texts that use the window's background color
        self.root = tk.Tk()
        self.root.title(title)
        self.root.geometry(f"{width}x{height}")
        self.root.config(bg=self.background)
        self.frame = tk.Frame(self.root, padx=16, pady=16, bg=self.background)
        self.frame.pack(fill="both", expand=True)
        self.frames = [self.frame]

    def place(self, widget):
        widget.pack(fill="x", pady=4)

    def sari(self):
        """window.sari(): a row. Things you add to it (sari.botam(...)) sit side by side."""
        return BeRow(self)

    def pechon(self, rong):
        """window.pechon("#16201b"): the window's background color"""
        color = need_color("pechon", rong)
        self.background = color
        self.root.config(bg=color)
        for frame in self.frames:
            frame.config(bg=color)
        for widget in self.plain:
            if not widget.own_background:
                widget.widget.config(bg=color)
        return self

    def chabi_chap(self, kajti):
        """window.chabi_chap(kaj (chabi) { ... }): run a kaj when a key is pressed. The key is "5", "+", "Enter", ..."""
        need_kaj(kajti, "chabi_chap() needs a kaj to run when a key is pressed.")

        def on_key(event):
            name = key_name(event)
            if name is not None:
                call_with_inputs(self.interp, kajti, [name])

        self.root.bind("<Key>", on_key)
        return None

    def pore(self, second, kajti):
        """window.pore(2, kaj () { ... }): run a kaj after some seconds, without freezing the window."""
        if not is_number(second) or isinstance(second, bool) or second < 0:
            raise BeTypeError("pore() needs a number of seconds, 0 or more.")
        need_kaj(kajti, "pore()'s second input must be a kaj to run later.")
        self.root.after(int(second * 1000), lambda: call_with_inputs(self.interp, kajti, []))
        return None

    def chalao(self):
        """window.chalao(): open the window. The program waits here until the window is closed."""
        self.root.mainloop()
        return None

    def bondho(self):
        """window.bondho(): close the window."""
        self.root.destroy()
        return None

    def __repr__(self):
        return "<window>"


def be_janala(interp, args, line):
    """janala(title) or janala(title, width, height): make a desktop app window."""
    title = args[0]
    need_text("janala", title, line)
    width = args[1] if len(args) > 1 else 420
    height = args[2] if len(args) > 2 else 320
    if not (is_number(width) and is_number(height)):
        raise BeTypeError("janala()'s width and height must be numbers.", line)
    try:
        import tkinter as tk
    except ImportError:
        raise BeRuntimeError(TKINTER_MISSING, line) from None
    try:
        return BeWindow(interp, tk, title, int(width), int(height))
    except tk.TclError as error:
        raise BeRuntimeError(f"Couldn't open a window: {error}", line) from None


def browser_only(name):
    def stub(interp, args, line):
        raise BeRuntimeError(f"{name}() only works in a web page (in the browser), not with be run.", line)

    return stub


# Functions that only exist in the browser version (playground/be.js). Here they explain that.
BROWSER_ONLY = ["js", "khojo", "shob_khojo", "banao", "pore", "notun"]

# Computer functions that the browser version has too (websites and apps show in a preview there).
ALSO_IN_BROWSER = ["website", "uttor", "janala"]

COMPUTER_BUILTINS = {
    "python": (be_python, 1, 1),
    "ghumao": (be_ghumao, 1, 1),
    "file_porho": (be_file_porho, 1, 1),
    "file_lekho": (be_file_lekho, 2, 2),
    "file_jog": (be_file_jog, 2, 2),
    "file_ache": (be_file_ache, 1, 1),
    "web_theke": (be_web_theke, 1, 1),
    "website": (be_website, 0, 0),
    "uttor": (be_uttor, 1, 3),
    "janala": (be_janala, 1, 3),
}

for _name in BROWSER_ONLY:
    COMPUTER_BUILTINS.setdefault(_name, (browser_only(_name), 0, None))
