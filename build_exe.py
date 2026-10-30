"""
Build BE as its own program: be.exe on Windows, be on Mac and Linux.

People who download it can run BE without installing Python first:

    be run amar_app.be

You don't need to run this yourself. GitHub builds it for you every time you
publish a release (see .github/workflows/build-be.yml), and puts the files on
the release page. To build it on your own computer anyway:

    python -m pip install pyinstaller
    python tools/build_exe.py

The result is in the dist folder: be-windows.exe, be-macos or be-linux.
On Windows you can then make the installer (BE-Setup.exe) with Inno Setup:

    iscc installer/be.iss
"""

import platform
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from be import __version__  # noqa: E402

# python("name") in be.exe can use these parts of Python's standard library.
# (Libraries you install with pip, like flask, need BE installed with pip instead.)
STANDARD_LIBRARY = [
    "tkinter", "math", "cmath", "statistics", "random", "decimal", "fractions", "datetime", "calendar",
    "time", "json", "csv", "sqlite3", "re", "string", "textwrap", "difflib", "collections", "itertools",
    "functools", "operator", "hashlib", "hmac", "secrets", "base64", "uuid", "pathlib", "os", "shutil",
    "glob", "zipfile", "urllib.request", "urllib.parse", "http.client", "html", "xml.etree.ElementTree",
    "email", "smtplib", "webbrowser", "platform", "locale", "unicodedata", "pprint", "copy", "heapq",
    "bisect", "array",
]

NAMES = {"Windows": "be-windows.exe", "Darwin": "be-macos", "Linux": "be-linux"}


def main():
    try:
        import PyInstaller  # noqa: F401
    except ImportError:
        print("PyInstaller is missing. Install it first:  python -m pip install pyinstaller")
        return 1

    build = ROOT / "build"
    dist = ROOT / "dist"
    launcher = build / "be_launcher.py"
    build.mkdir(exist_ok=True)
    # A small starter file: PyInstaller needs a script, and be/__main__.py uses package imports
    launcher.write_text("from be.cli import main\n\nraise SystemExit(main())\n", encoding="utf-8")

    command = [
        sys.executable, "-m", "PyInstaller", "--onefile", "--console", "--clean", "--noconfirm",
        "--name", "be", "--paths", str(ROOT), "--distpath", str(dist), "--workpath", str(build / "work"),
        "--specpath", str(build),
    ]
    for module in STANDARD_LIBRARY:
        command += ["--hidden-import", module]
    command.append(str(launcher))
    print("Building BE", __version__, "...")
    subprocess.run(command, check=True)

    built = dist / ("be.exe" if platform.system() == "Windows" else "be")
    final = dist / NAMES.get(platform.system(), "be-" + platform.system().lower())
    if final.exists():
        final.unlink()
    shutil.move(str(built), str(final))

    # Check that the new program works
    hello = build / "hello.be"
    hello.write_text('dhoro nam = "BE"\ndekhao "Hello from {nam}!"\n', encoding="utf-8")
    version = subprocess.run([str(final), "--version"], capture_output=True, text=True, check=True).stdout.strip()
    output = subprocess.run([str(final), "run", str(hello)], capture_output=True, text=True, check=True).stdout.strip()
    if version != f"BE {__version__}" or output != "Hello from BE!":
        print("The built program doesn't work as expected:", version, output)
        return 1
    print(f"Done: {final.relative_to(ROOT)}  ({version}, it says '{output}')")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
