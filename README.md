# BE Language for VS Code

Syntax colors for `.be` files (BE, the Banglish programming language).
Keywords, text, templates, numbers and comments are colored.

## Install

1. In VS Code, open the Extensions panel (Ctrl+Shift+X, or Cmd+Shift+X on Mac).
2. Click the `...` menu at the top of the panel and choose **Install from VSIX...**
3. Pick `be-language-3.0.0.vsix` from this folder.
4. Open any `.be` file. Keywords, text, numbers and comments now have colors.

## Rebuild after changes

The colors file is made from `be/keywords.py`. After you change keywords, run
this from the project folder, then install the new `.vsix` again:

```
python tools/sync.py
```

Ctrl+/ (Cmd+/ on Mac) turns a line into a `#` comment, and brackets close themselves.

Created by Jonayed Hossain. MIT License.
