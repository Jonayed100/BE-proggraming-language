"""
Build the Learn BE site's lessons from learn/course.md.

    python tools/build_learn.py      (tools/sync.py runs this for you)

It writes playground/lessons.js, which playground/learn.html reads. Each code
example gets a "Try it" button, and each "Try it N.M" exercise gets a Check
button that runs the student's code and checks the result (CHECKS below).
The answers come from the course's "Answers to the exercises" section.
"""

import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSE = ROOT / "learn" / "course.md"
OUT = ROOT / "playground" / "lessons.js"

# How each exercise is checked in the browser (playground/learn.html does the checking):
#   cases:  runs of the student's code. inputs = answers typed for jiggesh(); append = BE code
#           added after theirs (to test their functions); want = text the output must contain;
#           avoid = text it must not contain; same = the output must equal the answer's output;
#           files = {file: [text it must contain]} in the pretend folder after the run;
#           custom = a special check written in learn.html (apps, pages, JSON).
#   lines:  the program must show at least this many lines.
#   uses:   words the code must use (so a loop exercise is done with a loop).
#   opens:  "app" or "website" - the program must open a window or a website.
#   page:   the code is a whole HTML page, shown in the preview.
#   starter: the code put in the editor when the exercise starts.
TODO_STARTER = """<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>My to-do list</title>
</head>
<body>
  <h1>My to-do list</h1>
  <input id="kaj_ghor" placeholder="Something to do">
  <button id="jog">Add</button>
  <ul id="talika"></ul>

  <script src="be-web.js"></script>
  <script type="text/be">
    # When the #jog button is clicked, add what was typed in #kaj_ghor to the #talika list

  </script>
</body>
</html>
"""
CHECKS = {
    "1.1": {"lines": 2, "starter": "# Show your name on the first line and your city on the second\n"},
    "1.2": {"cases": [{"same": True}], "starter": "# Show the answer to 7 x 8\n"},
    "2.1": {"cases": [{"same": True}], "uses": ["{"],
            "starter": "dhoro dorja = 8\ndhoro prostho = 5\n# Show \"Area: 40\" using { }\n"},
    "2.2": {"cases": [{"want": ["1350", "1300"]}], "starter": "dhoro dam = 450\n"},
    "3.1": {"cases": [{"inputs": ["12", "30"], "want": ["42"]}, {"inputs": ["5", "7"], "want": ["12"]}],
            "uses": ["jiggesh"], "starter": "# Ask for two numbers with jiggesh, and show their total\n"},
    "3.2": {"cases": [{"inputs": ["200"], "want": ["230"]}, {"inputs": ["100"], "want": ["115"]}],
            "uses": ["jiggesh"], "starter": "# Ask for a price and show it with 15% VAT added\n"},
    "4.1": {"cases": [{"inputs": ["7"], "want": ["odd"]}, {"inputs": ["10"], "want": ["even"]}],
            "starter": "dhoro n = shonkha(jiggesh(\"A number? \"))\n"},
    "4.2": {"cases": [{"inputs": ["35"], "want": ["Hot"]}, {"inputs": ["25"], "want": ["Nice"]},
                      {"inputs": ["20"], "want": ["Nice"]}, {"inputs": ["10"], "want": ["Cold"]}],
            "starter": "dhoro tap = shonkha(jiggesh(\"Temperature? \"))\n"},
    "5.1": {"cases": [{"same": True}], "uses": ["ghuro"], "starter": "ghuro i = 1 theke 10 {\n    \n}\n"},
    "5.2": {"cases": [{"want": ["5050"]}], "uses": ["ghuro"], "starter": "dhoro mot = 0\n"},
    "6.1": {"lines": 5, "cases": [{"want": ["Hello"]}], "uses": ["["], "starter": "dhoro bondhu = []\n"},
    "6.2": {"cases": [{"want": ["545", "300"]}], "starter": "dhoro dam = [120, 45, 300, 80]\n"},
    "7.1": {"lines": 1, "uses": ["{"], "starter": "dhoro ami = {\"nam\": \"\", \"boyosh\": 0, \"khabar\": \"\"}\n"},
    "7.2": {"lines": 1, "uses": ["{"], "starter": "dhoro nombor = {\"Bangla\": 85, \"English\": 78, \"Math\": 92}\n"},
    "8.1": {"cases": [{"want": ["81"]}, {"append": "dekhao borgo(12)", "want": ["144"]}], "uses": ["kaj borgo"],
            "starter": "kaj borgo(x) {\n    \n}\ndekhao borgo(9)\n"},
    "8.2": {"cases": [{"want": ["A+", "Fail"]},
                      {"append": "dekhao \"[\" + grade(75) + \"|\" + grade(50) + \"]\"", "want": ["[A|Pass]"]}],
            "uses": ["kaj grade"], "starter": "kaj grade(nombor) {\n    \n}\ndekhao grade(85), grade(72), grade(20)\n"},
    "9.1": {"cases": [{"inputs": ["level"], "want": ["palindrome"], "avoid": ["not"]},
                      {"inputs": ["hello"], "want": ["not"]}],
            "starter": "dhoro shobdo = jiggesh(\"A word? \")\n"},
    "9.2": {"cases": [{"inputs": ["BE is a Banglish language"], "want": ["5"]}, {"inputs": ["amar nam"], "want": ["2"]}],
            "starter": "dhoro bakko = jiggesh(\"A sentence? \")\n"},
    "10.1": {"cases": [{"want": ["Can't do that"]}], "uses": ["chesta"], "starter": "dekhao 10 / 0\n"},
    "10.2": {"cases": [{"append": "dekhao bhag_koro(10, 4)", "want": ["2.5"]},
                       {"append": "chesta {\n    bhag_koro(1, 0)\n    dekhao \"no error\"\n} nahole {\n    dekhao \"stopped\"\n}",
                        "want": ["stopped"], "avoid": ["no error"]}],
             "uses": ["chhuro"], "starter": "kaj bhag_koro(a, b) {\n    \n}\n"},
    "11.1": {"cases": [{"append": "dhoro test_hisab = Hisab(100)\ntest_hisab.joma(50)\ntest_hisab.tolo(30)\ndekhao test_hisab.bivoron()",
                        "want": ["120"]},
                       {"append": "dhoro test_hisab2 = Hisab(10)\nchesta {\n    test_hisab2.tolo(50)\n    dekhao \"took it\"\n} nahole {\n    dekhao \"refused\"\n}",
                        "want": ["refused"], "avoid": ["took it"]}],
             "uses": ["shreni Hisab", "chhuro"],
             "starter": "shreni Hisab {\n    kaj shuru(taka = 0) {\n        ei.taka = taka\n    }\n}\n"},
    "11.2": {"cases": [{"want": ["This house has", "rooms"]}], "uses": ["shreni Bari"], "starter": "shreni Bari {\n    \n}\n"},
    "12.1": {"cases": [{"inputs": ["Rahim", "Mitu", "Karim"], "want": ["Rahim", "Mitu", "Karim"],
                        "files": {"bondhu.txt": ["Rahim", "Mitu", "Karim"]}}],
             "uses": ["file_porho"], "starter": "file_lekho(\"bondhu.txt\", \"\")\n"},
    "12.2": {"cases": [{"custom": "marks_total", "files": {"marks.json": []}}], "uses": ["json_banao", "json_porho"],
             "starter": "dhoro nombor = {\"Bangla\": 85, \"English\": 78, \"Math\": 92}\n"},
    "13.1": {"opens": "app", "cases": [{"custom": "app_double"}],
             "starter": "dhoro amar_janala = janala(\"Double\", 320, 220)\n\namar_janala.chalao()\n"},
    "13.2": {"opens": "app", "cases": [{"custom": "app_reset"}]},  # starter: the counter from the lesson (set below)
    "14.1": {"opens": "website",
             "cases": [{"append": "dekhao amar_site.porikkha(\"/\").abostha, amar_site.porikkha(\"/school\").abostha, amar_site.porikkha(\"/hobby\").abostha",
                        "want": ["200 200 200"]},
                       {"append": "dekhao amar_site.porikkha(\"/\").lekha", "want": ["/school", "/hobby"]}],
             "starter": "dhoro amar_site = website()\namar_site.pata(\"/\", kaj (r) { ferot \"<h1>Home</h1>\" })\n\namar_site.chalao(8000)\n"},
    "14.2": {"opens": "website", "cases": [{"append": "dekhao amar_site.porikkha(\"/borgo/7\").lekha", "want": ["49"]},
                                           {"append": "dekhao amar_site.porikkha(\"/borgo/12\").lekha", "want": ["144"]}],
             "starter": "dhoro amar_site = website()\namar_site.pata(\"/\", kaj (r) { ferot \"<a href='/borgo/7'>7 squared</a>\" })\n\namar_site.chalao(8000)\n"},
    "15.1": {"page": True, "cases": [{"custom": "page_quiz"}]},  # starter: the quiz from the lesson (set below)
    "15.2": {"page": True, "cases": [{"custom": "page_todo"}], "starter": TODO_STARTER},
}

INLINE_CODE = re.compile(r"`([^`]+)`")


def inline(text):
    """Markdown inside a line -> HTML: `code`, **bold**, *italic*, [links](url)."""
    parts = INLINE_CODE.split(text)
    out = []
    for i, part in enumerate(parts):
        if i % 2:
            out.append(f"<code>{html.escape(part)}</code>")
            continue
        part = html.escape(part, quote=False)
        part = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", part)
        part = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", part)
        part = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r'<a href="\2" target="_blank" rel="noopener">\1</a>', part)
        out.append(part)
    return "".join(out)


def kind_of(code):
    first = code.lstrip()
    if first.startswith("<"):
        return "html"
    if re.match(r"(Name|Syntax|Type|Runtime) error", first):
        return "error"
    if re.search(r"\bpython\(", code):
        return "computer"
    return "be"


def file_name(code):
    """'# hishab.be - functions' on the first line -> 'hishab.be' (Try it opens it under that name)."""
    m = re.match(r"#\s*([\w-]+\.be)\b", code.lstrip())
    return m.group(1) if m else None


def typed_answers(code, output):
    """What was typed for jiggesh() in an example, read from its output ("Your name? Shuvo" -> "Shuvo")."""
    prompts = re.findall(r'jiggesh\("((?:[^"\\{]|\\.)*)"\)', code)
    if not prompts:
        return []
    typed = []
    for line in output.split("\n"):
        for prompt in sorted(set(prompts), key=len, reverse=True):
            if prompt and line.startswith(prompt):
                typed.append(line[len(prompt):])
                break
    return typed


def convert(markdown, codes, tasks):
    """One section's markdown -> HTML. Code goes in `codes`, exercises in `tasks`."""
    lines = markdown.split("\n")
    out, i = [], 0
    last_code = None
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        if line.startswith("```"):
            j = i + 1
            while not lines[j].startswith("```"):
                j += 1
            code = "\n".join(lines[i + 1:j])
            i = j + 1
            if out and out[-1].startswith("<!--output-->"):
                out.pop()
                codes[last_code]["output"] = code
                typed = typed_answers(codes[last_code]["code"], code)
                if typed:
                    codes[last_code]["answers"] = typed
                continue
            example = {"code": code, "kind": kind_of(code)}
            if file_name(code):
                example["file"] = file_name(code)
            codes.append(example)
            last_code = len(codes) - 1
            out.append(f'<div class="example" data-code="{last_code}"></div>')
            continue
        if line.startswith("**Output"):
            out.append("<!--output-->")
            i += 1
            continue
        if line.startswith("### "):
            out.append(f"<h3>{inline(line[4:])}</h3>")
            i += 1
            continue
        if line.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")])
                i += 1
            head, body = rows[0], [r for r in rows[1:] if not set("".join(r)) <= set("-: ")]
            table = "<tr>" + "".join(f"<th>{inline(c)}</th>" for c in head) + "</tr>"
            table += "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in body)
            out.append(f'<div class="table-scroll"><table>{table}</table></div>')
            continue
        bullet = re.match(r"^(\s*)(- |\d+\. )", line)
        if bullet:
            ordered = bullet.group(2) != "- "
            items = []
            while i < len(lines) and re.match(r"^\s*(- |\d+\. )", lines[i]):
                items.append(inline(re.sub(r"^\s*(- |\d+\. )", "", lines[i])))
                i += 1
            tag = "ol" if ordered else "ul"
            out.append(f"<{tag}>" + "".join(f"<li>{x}</li>" for x in items) + f"</{tag}>")
            continue
        task = re.match(r"^\*\*Try it (\d+\.\d+):\*\*\s*(.*)", line)
        if task:
            prompt = task.group(2)
            tasks[task.group(1)] = {"prompt": inline(prompt[:1].upper() + prompt[1:])}
            out.append(f'<div class="task" data-task="{task.group(1)}"></div>')
            i += 1
            continue
        para = [line]
        i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r"^(```|\||### |\*\*Output|\*\*Try it|\s*- |\s*\d+\. )", lines[i]):
            para.append(lines[i])
            i += 1
        out.append(f"<p>{inline(' '.join(para))}</p>")
    return "\n".join(x for x in out if x != "<!--output-->")


def answers(markdown):
    """The answers section -> {"2.1": {"before": ..., "code": ..., "note": ...}}."""
    found, current, lines, i = {}, None, markdown.split("\n"), 0
    while i < len(lines):
        line = lines[i]
        head = re.match(r"^\*\*(\d+\.\d+)(:?)\*\*:?\s*(.*)$", line)
        if head:
            current = found[head.group(1)] = {"before": inline(head.group(3).strip()), "code": "", "note": ""}
        elif line.startswith("```") and current is not None:
            j = i + 1
            while not lines[j].startswith("```"):
                j += 1
            current["code"] = "\n".join(lines[i + 1:j])
            i = j
        elif line.strip() and current is not None:
            current["note"] = (current["note"] + " " + inline(line.strip())).strip()
        i += 1
    return found


def make_lessons():
    """learn/course.md -> {"lessons": [...], "codes": [...], "tasks": {...}}"""
    text = COURSE.read_text(encoding="utf-8")
    sections = re.split(r"^## ", text, flags=re.M)[1:]
    by_title = {s.split("\n", 1)[0].strip(): s.split("\n", 1)[1] for s in sections}
    codes, tasks, lessons = [], {}, []
    pages = {"Welcome": ("start", "Welcome"), "Three projects": ("projects", "Three projects"),
             "Quick reference": ("reference", "Quick reference"), "For teachers": ("teachers", "For teachers")}
    for title, body in by_title.items():
        number = re.match(r"Lesson (\d+): (.*)", title)
        page = next((v for k, v in pages.items() if title.startswith(k)), None)
        if number:
            slug, short, n = f"lesson-{number.group(1)}", number.group(2), int(number.group(1))
        elif page:
            (slug, short), n = page, None
        else:
            continue
        lessons.append({"slug": slug, "number": n, "title": short, "html": convert(body.strip(), codes, tasks)})
    solutions = answers(by_title["Answers to the exercises"])
    for key, task in tasks.items():
        task.update(CHECKS.get(key, {"lines": 1}))
        task["answer"] = solutions.get(key, {"code": "", "before": "", "note": ""})
    tasks["13.2"]["starter"] = next(c["code"] for c in codes if c["code"].startswith('dhoro amar_janala = janala("Counter"'))
    tasks["15.1"]["starter"] = next(c["code"] for c in codes if c["kind"] == "html" and "prosno_guli" in c["code"])
    for key, task in tasks.items():
        task.setdefault("starter", f"# Try it {key}\n")
    # Whole programs for the answers that are only a part to add ("Load answer" uses these)
    def put_before(code, marker, extra):
        at = code.rindex(marker)
        return code[:at] + extra.rstrip("\n") + "\n\n" + code[at:]
    tasks["13.2"]["answer"]["full"] = put_before(tasks["13.2"]["starter"], "amar_janala.chalao()", tasks["13.2"]["answer"]["code"])
    tasks["14.2"]["answer"]["full"] = put_before(tasks["14.2"]["starter"], "amar_site.chalao(8000)", tasks["14.2"]["answer"]["code"])
    quiz = tasks["15.1"]["starter"]
    last = quiz.index('{"prosno": "How many days in a week?", "uttor": "7"}')
    end = last + len('{"prosno": "How many days in a week?", "uttor": "7"}')
    tasks["15.1"]["answer"]["full"] = (quiz[:end] + ',\n        {"prosno": "2 + 2?", "uttor": "4"},\n'
                                       '        {"prosno": "Biggest planet?", "uttor": "jupiter"}' + quiz[end:])
    todo_code = "\n".join("    " + line for line in tasks["15.2"]["answer"]["code"].split("\n"))
    tasks["15.2"]["answer"]["full"] = TODO_STARTER.replace(
        "    # When the #jog button is clicked, add what was typed in #kaj_ghor to the #talika list\n\n", todo_code + "\n")
    for key in ("12.1", "12.2"):  # here the files go in the Learn page's pretend folder
        tasks[key]["answer"]["before"] = ""
    return {"lessons": lessons, "codes": codes, "tasks": tasks}


def lessons_js(data):
    body = json.dumps(data, ensure_ascii=False, indent=1)
    return "// Made by tools/build_learn.py from learn/course.md. Do not edit by hand.\n" f"window.BE_LESSONS = {body};\n"


def main():
    data = make_lessons()
    missing = [k for k, task in data["tasks"].items() if not task["answer"]["code"] and not task["answer"].get("full")]
    if missing:
        print("Warning: no answer found for", ", ".join(missing))
    OUT.write_text(lessons_js(data), encoding="utf-8")
    print(f"Wrote {OUT.relative_to(ROOT)}: {len(data['lessons'])} pages, {len(data['codes'])} examples, {len(data['tasks'])} exercises")


if __name__ == "__main__":
    sys.exit(main())
