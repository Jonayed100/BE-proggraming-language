# Learn BE: The Banglish Programming Language

Oct 30, 2026 · @Jonayed Hossain

## Welcome

BE is a programming language where you write code with Bangla words in English letters. `dhoro amar_nam = "Shuvo"` means "let my name be Shuvo", and `dekhao` means show (print). Everything BE shows back to you, its output and its error messages, is in English. This course takes you from your first line of code to your own apps and websites in 15 short lessons.

**Who it is for:** anyone who knows Bangla and wants to learn programming: school and university students, teachers, and anyone curious. You need no experience.

**Where to run the code.** Pick one:

| Way | What you need | How |
| --- | --- | --- |
| BE Playground | a browser on a phone or computer | Open the BE Playground (the online link, or `playground/index.html` in the BE folder). Type code on the left and click **▶ Run**. |
| Your computer | BE installed (`BE-Setup.exe`, or with Python) | Save the code in a file such as `hello.be`, then type `be run hello.be` in a terminal. |

**How each lesson works:** read the short explanation, run the example and compare with the output shown, then do the **Try it** exercise yourself. The answers are near the end, but try first.

**Three rules to remember from day one:**

1. Keywords are written in small letters, with one spelling: `dekhao`, never `Dekhao` or `dekhau`.
2. Text goes inside quotes: `"Hello"`. Inside quotes you can write anything.
3. A group of lines that belong together (a block) goes inside `{ }`.

If you make a mistake, BE tells you the line and often the right word: *Did you mean 'dekhao'?*

## Lesson 1: Your first program

A program is a list of instructions that the computer follows from top to bottom. The first instruction to learn is `dekhao`, which means "show": it prints something on the screen.

```
dekhao "Hello, Bangladesh!"
dekhao "Amar nam Shuvo"
```

**Output:**

```
Hello, Bangladesh!
Amar nam Shuvo
```

Text goes inside double quotes `" "`. Numbers don't need quotes, and BE can do sums with them:

```
dekhao 25
dekhao 10 + 5
dekhao "10 + 5"
```

**Output:**

```
25
15
10 + 5
```

The last line shows why quotes matter: inside quotes, `10 + 5` is just text, so BE shows it exactly as written.

**Several things on one line.** Put commas between them, and BE puts a space between each:

```
dekhao "Age:", 22, "years"
```

**Output:**

```
Age: 22 years
```

**Comments.** A line that starts with `#` is a note for people. BE skips it. Use comments to explain your code:

```
# This program says hello
dekhao "Hello!"     # a comment can also go at the end of a line
```

**Output:**

```
Hello!
```

**Try it 1.1:** write a program that shows your name on the first line and your city on the second.

**Try it 1.2:** show the answer to 7 × 8. (In code, multiply is `*`.)

## Lesson 2: Variables and math

A variable is a named box that keeps a value. Make one with `dhoro` ("let it be"), a name, `=` and the value:

```
dhoro amar_nam = "Shuvo"
dhoro boyosh = 22
dekhao amar_nam
dekhao boyosh
```

**Output:**

```
Shuvo
22
```

**Names** use English letters, digits and `_`, and can't start with a digit: `amar_nam`, `boyosh`, `mot_taka2`. Choose Banglish names that say what the box holds. `dhoro` is optional: `boyosh = 22` works too.

**Changing a variable.** Give it a new value with `=`. The short forms `+=`, `-=`, `*=` and `/=` change it using its old value:

```
dhoro taka = 100
taka = taka + 50
dekhao taka
taka -= 30
taka *= 2
dekhao taka
```

**Output:**

```
150
240
```

**Math.** BE follows the usual order: `*` and `/` before `+` and `-`, and brackets first.

| Sign | Meaning | Example | Answer |
| --- | --- | --- | --- |
| `+` | add | `7 + 3` | 10 |
| `-` | subtract | `7 - 3` | 4 |
| `*` | multiply | `7 * 3` | 21 |
| `/` | divide | `7 / 2` | 3.5 |
| `%` | remainder | `7 % 3` | 1 |

```
dekhao 2 + 3 * 4
dekhao (2 + 3) * 4
```

**Output:**

```
14
20
```

**Values inside text.** Put a variable or a calculation inside `{ }` in a text, and BE puts its value there. This is the easiest way to build sentences:

```
dhoro nam = "Mitu"
dhoro boyosh = 19
dekhao "Amar nam {nam}. Next year I will be {boyosh + 1}."
```

**Output:**

```
Amar nam Mitu. Next year I will be 20.
```

You can also join text with `+`: `"Hello, " + nam`.

**Kinds of values.** `dhoron(x)` tells you what kind of value `x` is:

```
dekhao dhoron(22), dhoron(5.5), dhoron("Shuvo"), dhoron(sotti), dhoron(kichuna)
```

**Output:**

```
number number text boolean null
```

`sotti` means true, `mittha` means false, and `kichuna` means nothing.

**Try it 2.1:** make variables `dorja` (length) = 8 and `prostho` (width) = 5, and show "Area: 40" using `{ }`.

**Try it 2.2:** a shirt costs 450 taka. Show the price of 3 shirts, then the price after a 50 taka discount.

## Lesson 3: Asking the user

`jiggesh` ("ask") shows a question, waits for the user to type an answer, and gives back what they typed:

```
dhoro nam = jiggesh("What is your name? ")
dekhao "Hello, {nam}!"
```

**Output:**

```
What is your name? Rahim
Hello, Rahim!
```

In the BE Playground, type the answers in the **Answers for jiggesh()** box, one per line, before you click Run. With `be run` on a computer, you type them in the terminal.

**Text to number.** `jiggesh` always gives back text, even when the user types digits. Use `shonkha` ("number") to turn it into a number before doing math, and `lekha` ("text") to go the other way:

```
dhoro jonmo = shonkha(jiggesh("Which year were you born? "))
dhoro boyosh = 2026 - jonmo
dekhao "You are {boyosh} years old."
dekhao lekha(boyosh) + " years"
```

**Output:**

```
Which year were you born? 1998
You are 28 years old.
28 years
```

Without `shonkha`, `"1998" - 1` would be an error, because text can't be subtracted.

**Try it 3.1:** ask for two numbers and show their total.

**Try it 3.2:** ask for a price in taka and show the price with 15% VAT added (multiply by 1.15).

## Lesson 4: Decisions

`jodi` means "if". The block inside `{ }` runs only when the condition is true. `nahole` means "otherwise":

```
dhoro boyosh = 20
jodi boyosh >= 18 {
    dekhao "You can vote."
} nahole {
    dekhao "Not yet."
}
```

**Output:**

```
You can vote.
```

**Comparisons** give `sotti` (true) or `mittha` (false):

| Sign | Means |
| --- | --- |
| `==` | is equal to (two `=` signs; one `=` gives a variable a value) |
| `!=` | is not equal to |
| `>` `<` | bigger than, smaller than |
| `>=` `<=` | bigger or equal, smaller or equal |

**More than two choices.** Chain them with `nahole jodi` ("otherwise if"). BE checks from the top and runs only the first one that is true:

```
dhoro nombor = 78
jodi nombor >= 80 {
    dekhao "Grade: A+"
} nahole jodi nombor >= 70 {
    dekhao "Grade: A"
} nahole jodi nombor >= 33 {
    dekhao "Grade: Pass"
} nahole {
    dekhao "Grade: Fail"
}
```

**Output:**

```
Grade: A
```

**Joining conditions.** `ebong` (and) needs both to be true, `othoba` (or) needs at least one, and `na` (not) turns true into false:

```
dhoro boyosh = 20
dhoro nid_ache = sotti
jodi boyosh >= 18 ebong nid_ache {
    dekhao "You can get a driving licence."
}
jodi boyosh < 12 othoba boyosh > 60 {
    dekhao "Half price ticket"
} nahole {
    dekhao "Full price ticket"
}
jodi na nid_ache {
    dekhao "Make your NID card first."
}
```

**Output:**

```
You can get a driving licence.
Full price ticket
```

You may also write `tahole` ("then") after the condition: `jodi boyosh >= 18 tahole { ... }`. It means the same thing.

**Try it 4.1:** ask for a number and say whether it is even or odd. (A number is even when `n % 2 == 0`.)

**Try it 4.2:** ask for the temperature and show "Hot" above 30, "Nice" from 20 to 30, and "Cold" below 20.

## Lesson 5: Loops

A loop repeats a block. BE has four kinds.

**1. Repeat a number of times:** `ghuro 3 bar` means "go around 3 times".

```
ghuro 3 bar {
    dekhao "BE is fun"
}
```

**Output:**

```
BE is fun
BE is fun
BE is fun
```

**2. Count:** `ghuro i = 1 theke 5` counts from 1 to 5. Add `dhap` ("step") to count in steps. If the end is smaller than the start, it counts down by itself:

```
ghuro i = 1 theke 5 {
    dekhao "Round", i
}
ghuro i = 0 theke 10 dhap 5 {
    dekhao i
}
ghuro i = 3 theke 1 {
    dekhao i, "..."
}
```

**Output:**

```
Round 1
Round 2
Round 3
Round 4
Round 5
0
5
10
3 ...
2 ...
1 ...
```

**3. While something is true:** `jotokkhon` means "as long as". Make sure the condition becomes false at some point, or the loop never ends:

```
dhoro taka = 1
dhoro din = 0
jotokkhon taka < 1000 {
    taka = taka * 2
    din += 1
}
dekhao "After {din} days: {taka} taka"
```

**Output:**

```
After 10 days: 1024 taka
```

**4. Every item:** `protiti f fol_guli theke` means "for each f from fol\_guli". It goes through a list (Lesson 6) or the letters of a text:

```
dhoro fol_guli = ["mango", "jackfruit", "lychee"]
protiti f fol_guli theke {
    dekhao "I like", f
}
```

**Output:**

```
I like mango
I like jackfruit
I like lychee
```

**Stop or skip.** `thamo` ("stop") leaves the loop. `agao` ("go ahead") skips to the next round:

```
ghuro i = 1 theke 10 {
    jodi i == 3 {
        agao
    }
    jodi i == 6 {
        thamo
    }
    dekhao i
}
```

**Output:**

```
1
2
4
5
```

**Try it 5.1:** show the multiplication table of 7, from `7 x 1 = 7` to `7 x 10 = 70`.

**Try it 5.2:** add up all the numbers from 1 to 100 with a loop. (The answer is 5050.)

## Lesson 6: Lists

A list (talika) keeps many values in order, inside `[ ]`. Each item has a position, starting from 0. Position -1 is the last item:

```
dhoro nombor = [45, 82, 67, 91]
dekhao nombor
dekhao "First:", nombor[0], "Last:", nombor[-1]
dekhao "How many:", lomba(nombor)
```

**Output:**

```
[45, 82, 67, 91]
First: 45 Last: 91
How many: 4
```

**Changing a list:**

```
dhoro bajar = ["chal", "dal"]
jukto(bajar, "tel")
dekhao bajar
bajar[0] = "atta"
dekhao bajar
dhoro bad = bad_dao(bajar)
dekhao "Removed:", bad, "Left:", bajar
```

**Output:**

```
["chal", "dal", "tel"]
["atta", "dal", "tel"]
Removed: tel Left: ["atta", "dal"]
```

**Ready-made list functions:**

| Function | What it gives | `[45, 82, 67, 91]` gives |
| --- | --- | --- |
| `lomba(l)` | how many items | 4 |
| `jogfol(l)` | the total | 285 |
| `boro(l)` / `choto(l)` | the biggest / the smallest | 91 / 45 |
| `shajao(l)` | a sorted copy | `[45, 67, 82, 91]` |
| `ulta(l)` | a backwards copy | `[91, 67, 82, 45]` |
| `kothay(l, 67)` | the position of an item, or -1 | 2 |
| `67 moddhe l` | is it inside? | `sotti` |

```
dhoro nombor = [45, 82, 67, 91]
dekhao "Total:", jogfol(nombor), "Average:", jogfol(nombor) / lomba(nombor)
dekhao "Sorted:", shajao(nombor)
protiti n nombor theke {
    jodi n >= 80 {
        dekhao n, "is A+"
    }
}
```

**Output:**

```
Total: 285 Average: 71.25
Sorted: [45, 67, 82, 91]
82 is A+
91 is A+
```

**Try it 6.1:** make a list of 5 friends' names and show each one with "Hello, ...!".

**Try it 6.2:** make a list of prices `[120, 45, 300, 80]` and show the total and the most expensive price.

## Lesson 7: Dictionaries

A dictionary keeps values by name instead of by position, inside `{ }`. Each entry is a key (in quotes), `:` and a value. Read a value with `["key"]` or with a dot:

```
dhoro chhatro = {"nam": "Shuvo", "boyosh": 22, "shohor": "Dhaka"}
dekhao chhatro["nam"]
dekhao chhatro.boyosh
```

**Output:**

```
Shuvo
22
```

**Adding and changing:** give a key a value. A new key is added; an old one is changed:

```
dhoro chhatro = {"nam": "Shuvo", "boyosh": 22}
chhatro["university"] = "NSU"
chhatro.boyosh = 23
dekhao chhatro
dekhao "Has a university?", "university" moddhe chhatro
```

**Output:**

```
{"nam": "Shuvo", "boyosh": 23, "university": "NSU"}
Has a university? true
```

**Going through a dictionary.** `protiti` gives each key. `chabi(d)` gives the list of keys and `man(d)` the list of values:

```
dhoro dam = {"chal": 70, "dal": 120, "tel": 180}
protiti jinish dam theke {
    dekhao jinish, "costs", dam[jinish], "taka"
}
dekhao "Total:", jogfol(man(dam))
```

**Output:**

```
chal costs 70 taka
dal costs 120 taka
tel costs 180 taka
Total: 370
```

**Lists of dictionaries** are how real programs keep records, like a class register:

```
dhoro class_list = [
    {"nam": "Rahim", "nombor": 78},
    {"nam": "Mitu", "nombor": 92}
]
protiti chhatro class_list theke {
    dekhao "{chhatro.nam}: {chhatro.nombor}"
}
```

**Output:**

```
Rahim: 78
Mitu: 92
```

**Try it 7.1:** make a dictionary of yourself with your name, age and favourite food, and show a sentence about you using it.

**Try it 7.2:** make a dictionary of 3 subjects and their marks, and show the average mark.

## Lesson 8: Functions

A function (kaj, "work") is a named piece of code you can run again and again. Make it with `kaj`, give it inputs in `( )`, and call it by its name:

```
kaj shubhechha(nam) {
    dekhao "Good morning, {nam}!"
}
shubhechha("Rahim")
shubhechha("Mitu")
```

**Output:**

```
Good morning, Rahim!
Good morning, Mitu!
```

**Giving a result back.** `ferot` ("return") sends a value back to where the function was called:

```
kaj jog(a, b) {
    ferot a + b
}
dhoro fol = jog(5, 7)
dekhao "5 + 7 =", fol
dekhao jog(10, jog(1, 2))
```

**Output:**

```
5 + 7 = 12
13
```

**Default and named inputs.** An input can have a default value, used when you leave it out. You can also pass inputs by name, in any order:

```
kaj obhibadon(nam, shuru = "Hello") {
    ferot "{shuru}, {nam}!"
}
dekhao obhibadon("Shuvo")
dekhao obhibadon("Shuvo", "Assalamu alaikum")
dekhao obhibadon(shuru = "Hi", nam = "Mitu")
```

**Output:**

```
Hello, Shuvo!
Assalamu alaikum, Shuvo!
Hi, Mitu!
```

**Variables inside a function stay inside it.** A variable made inside a `kaj` disappears when it finishes. Use `ferot` to get a value out.

**A function can call itself.** This is called recursion. It needs a stopping point, or it goes on forever:

```
kaj kromogun(n) {
    jodi n <= 1 {
        ferot 1
    }
    ferot n * kromogun(n - 1)
}
dekhao "5! =", kromogun(5)
```

**Output:**

```
5! = 120
```

**Functions are values too.** A `kaj` without a name can be kept in a variable or given to another function. `shajao` uses one to sort by anything you choose:

```
dhoro dui_gun = kaj (x) { ferot x * 2 }
dekhao dui_gun(21)

dhoro manush = [{"nam": "Rahim", "boyosh": 30}, {"nam": "Mitu", "boyosh": 19}]
protiti m shajao(manush, kaj (m) { ferot m.boyosh }) theke {
    dekhao m.nam, m.boyosh
}
```

**Output:**

```
42
Mitu 19
Rahim 30
```

**Try it 8.1:** write `kaj borgo(x)` that gives back x × x, and show `borgo(9)`.

**Try it 8.2:** write `kaj grade(nombor)` that gives back "A+", "A", "Pass" or "Fail" (use Lesson 4), and call it for 85, 72 and 20.

## Lesson 9: Working with text

Text has its own ready-made functions:

| Function | What it does | Example | Gives |
| --- | --- | --- | --- |
| `lomba(t)` | how many letters | `lomba("Dhaka")` | 5 |
| `boro_hater(t)` | CAPITAL letters | `boro_hater("be")` | `"BE"` |
| `choto_hater(t)` | small letters | `choto_hater("BE")` | `"be"` |
| `parishkar(t)` | remove spaces at both ends | `parishkar("  hi ")` | `"hi"` |
| `bhag(t, chinho)` | split into a list | `bhag("a,b,c", ",")` | `["a", "b", "c"]` |
| `jora(l, chinho)` | join a list into text | `jora(["a", "b"], "-")` | `"a-b"` |
| `bodlao(t, ager, notun)` | replace | `bodlao("I like tea", "tea", "coffee")` | `"I like coffee"` |
| `kothay(t, x)` | where `x` is, or -1 | `kothay("banana", "na")` | 2 |
| `ulta(t)` | backwards | `ulta("abc")` | `"cba"` |
| `x moddhe t` | is `x` inside? | `"@" moddhe "a@b.com"` | `sotti` |

Letters have positions like a list: `"Dhaka"[0]` is `"D"`.

```
dhoro bakko = "  apple, banana, mango  "
dhoro fol_guli = bhag(parishkar(bakko), ", ")
dekhao fol_guli, "count:", lomba(fol_guli)
dekhao jora(fol_guli, " + ")
dekhao boro_hater(fol_guli[0])

dhoro email = "shuvo@example.com"
jodi "@" moddhe email {
    dekhao "Looks like an email"
}
```

**Output:**

```
["apple", "banana", "mango"] count: 3
apple + banana + mango
APPLE
Looks like an email
```

**Braces inside text.** Because `{ }` puts values into text, write `\{` and `\}` when you want plain braces, for example in CSS for a website:

```
dekhao "body \{ color: green; \}"
```

**Output:**

```
body { color: green; }
```

**Try it 9.1:** ask for a word and say whether it is a palindrome (the same backwards, like "level").

**Try it 9.2:** ask for a sentence and show how many words it has. (`bhag(t)` with no second input splits on spaces.)

## Lesson 10: Mistakes and error messages

Every programmer makes mistakes. BE stops and tells you in English: the kind of error, the line, an arrow `^` under the problem, and often the right word. Here is a misspelled variable:

```
dhoro boyosh = 22
dekhao boyos
```

```
Name error (line 2): 'boyos' is not defined. Did you mean 'boyosh'? [hello.be]
    dekhao boyos
           ^
```

**The kinds of errors:**

| Error | What it means | A typical cause |
| --- | --- | --- |
| Syntax error | the code is written wrongly | a missing `}` or `"`, or a misspelled keyword like `dekhaoo` |
| Name error | that name doesn't exist yet | a typo, or using a variable before giving it a value |
| Type error | wrong kind of value for that | `"5" - 2` (text minus a number), or too many inputs to a function |
| Runtime error | a problem while running | dividing by 0, or `l[5]` when the list has 2 items |

**How to fix an error:** read the message, go to the line it names, look where the `^` points, and try the word in *Did you mean...?*. Words from English or Python get a hint too: `print("hi")` says *Did you mean 'dekhao'?*.

**Catching mistakes.** `chesta` ("try") runs a block, and if anything goes wrong, the `nahole` block runs instead of stopping the program. Give the mistake a name after `nahole` to read its message:

```
ghuro 2 bar {
    dhoro uttor = jiggesh("Your age? ")
    chesta {
        dhoro boyosh = shonkha(uttor)
        dekhao "Next year you will be {boyosh + 1}."
    } nahole bhul {
        dekhao "Oops:", bhul
    }
}
```

**Output:**

```
Your age? abc
Oops: "abc" can't be turned into a number.
Your age? 25
Next year you will be 26.
```

**Your own errors.** `chhuro` ("throw") stops with your own message, for example when a value makes no sense:

```
kaj boyosh_dao(boyosh) {
    jodi boyosh < 0 {
        chhuro "Age can't be negative"
    }
    ferot boyosh
}
chesta {
    boyosh_dao(-5)
} nahole bhul {
    dekhao "Error:", bhul
}
```

**Output:**

```
Error: Age can't be negative
```

**Try it 10.1:** run `dekhao 10 / 0` and read the error. Then wrap it in `chesta` so the program shows "Can't do that" instead.

**Try it 10.2:** write `kaj bhag_koro(a, b)` that uses `chhuro` when b is 0, and gives back a / b otherwise.

## Lesson 11: Classes

A class (shreni, "category") is a plan for making objects that have their own data and their own functions. Think of `Manush` (person) as the plan, and Rahim and Mitu as two people made from it.

- `shreni Name { ... }` makes the class. Class names usually start with a capital letter.
- `kaj shuru(...)` ("start") runs when a new object is made. Use it to fill in the object's data.
- `ei` means "this object". `ei.nam` is this object's name.
- Make an object by calling the class like a function: `Manush("Rahim")`.

```
shreni Manush {
    kaj shuru(nam, boyosh) {
        ei.nam = nam
        ei.boyosh = boyosh
    }
    kaj parichoy() {
        ferot "Hi, I am {ei.nam}, {ei.boyosh} years old."
    }
    kaj jonmodin() {
        ei.boyosh += 1
    }
}

dhoro rahim = Manush("Rahim", 30)
dhoro mitu = Manush("Mitu", 19)
mitu.jonmodin()
dekhao rahim.parichoy()
dekhao mitu.parichoy()
dekhao dhoron(rahim)
```

**Output:**

```
Hi, I am Rahim, 30 years old.
Hi, I am Mitu, 20 years old.
Manush
```

**A class built on another one.** `shreni Chhatro theke Manush` makes a student class that has everything a `Manush` has, plus more. Inside it, `upor` means the parent class, so `upor.shuru(...)` runs the parent's `shuru`:

```
shreni Manush {
    kaj shuru(nam) {
        ei.nam = nam
    }
    kaj parichoy() {
        ferot "I am {ei.nam}"
    }
}

shreni Chhatro theke Manush {
    kaj shuru(nam, school) {
        upor.shuru(nam)
        ei.school = school
    }
    kaj parichoy() {
        ferot upor.parichoy() + ", a student at {ei.school}"
    }
}

dhoro shuvo = Chhatro("Shuvo", "NSU")
dekhao shuvo.parichoy()
```

**Output:**

```
I am Shuvo, a student at NSU
```

**Try it 11.1:** make `shreni Hisab` (bank account) with `ei.taka`, a `joma(poriman)` function that adds money, a `tolo(poriman)` function that takes money out (use `chhuro` if there isn't enough), and a `bivoron()` function that shows the balance.

**Try it 11.2:** make `shreni Bari` (house) with a number of rooms, and a function that says "This house has N rooms".

## Lesson 12: Other files, saving files and JSON

**Using another BE file.** Big programs are split into several files. `anao` ("bring") runs another `.be` file, so its functions and variables can be used. Put both files in the same folder:

```
# hishab.be - functions for other files
kaj borgo(x) {
    ferot x * x
}
kaj gor(talika) {
    ferot jogfol(talika) / lomba(talika)
}
```

```
# main.be
anao "hishab.be"
dekhao "Square of 7:", borgo(7)
dekhao "Average:", gor([10, 20, 30, 40])
```

**Output** of `be run main.be`:

```
Square of 7: 49
Average: 25
```

**Saving and reading files** (on a computer with `be run`). `file_lekho` writes a file, `file_jog` adds to the end of it, `file_porho` reads it, and `file_ache` checks whether it exists. Files are kept next to your `.be` file, so your data stays after the program ends:

```
file_lekho("bajar.txt", "chal\n")
file_jog("bajar.txt", "dal\n")
dekhao "File exists?", file_ache("bajar.txt")
dhoro shob = file_porho("bajar.txt")
protiti jinish bhag(parishkar(shob), "\n") theke {
    dekhao "Buy:", jinish
}
```

**Output:**

```
File exists? true
Buy: chal
Buy: dal
```

`\n` inside text means "new line".

**JSON** is the text format that websites and apps use to send and save data. `json_banao` turns a value into JSON text, and `json_porho` turns JSON text back into a value:

```
dhoro chhatro = {"nam": "Shuvo", "nombor": [80, 92], "shokriyo": sotti}
dhoro json_lekha = json_banao(chhatro)
dekhao json_lekha
dhoro ferot_elo = json_porho(json_lekha)
dekhao ferot_elo.nam, ferot_elo.nombor[1]
```

**Output:**

```
{"nam":"Shuvo","nombor":[80,92],"shokriyo":true}
Shuvo 92
```

Together, `file_lekho("data.json", json_banao(x))` and `json_porho(file_porho("data.json"))` save a whole list or dictionary and load it back next time.

**Try it 12.1:** ask for 3 friends' names and save them in `bondhu.txt`, one per line. Then read the file and show them.

**Try it 12.2:** save a dictionary of your marks as JSON in `marks.json`, read it back, and show the total.

## Lesson 13: Apps with windows

`janala` ("window") makes an app window. You add text, buttons and input boxes to it, and each button runs a `kaj` when it is clicked. With `be run` the app opens as a real window on your computer; in the BE Playground it appears in the preview under the code.

```
dhoro amar_janala = janala("Amar App", 320, 200)
dhoro lekha_ti = amar_janala.lekha("Hello!").akar(18)
amar_janala.botam("Click me", kaj () {
    lekha_ti.bodlao("You clicked the button!").rong("green")
})
amar_janala.chalao()
```

The numbers after the title are the width and height. `chalao()` ("run") opens the window and keeps the app running until you close it, so put it on the last line.

**The app words:**

| Words | What they do |
| --- | --- |
| `w.lekha(lekha)` | show text |
| `w.botam(lekha, kaj)` | a button that runs a kaj when clicked |
| `w.ghor(lekha)` | an input box; read what was typed with `.man()` |
| `w.sari()` | a row: the things you add to it sit side by side |
| `w.pechon(rong)` | the window's background color |
| `w.chabi_chap(kaj (chabi_ti) { ... })` | run a kaj when a key is pressed |
| `w.pore(second, kaj)` | run a kaj after some seconds |
| `x.bodlao(lekha)` / `x.man()` | change / read the text of a text, button or box |
| `x.rong(rong)` / `x.pechon(rong)` | text color / background color, like `"red"` or `"#0d6b49"` |
| `x.akar(akar)` / `x.dane()` | text size / put the text on the right |

The `x` words give back the same thing, so you can chain them: `w.lekha("0").akar(40).rong("white")`.

**Reading an input box:**

```
dhoro amar_janala = janala("Greeting", 340, 240)
amar_janala.lekha("Your name:")
dhoro nam_ghor = amar_janala.ghor("")
dhoro uttor = amar_janala.lekha("")
amar_janala.botam("Say hello", kaj () {
    dhoro nam = parishkar(nam_ghor.man())
    jodi nam == "" {
        uttor.bodlao("Type your name first").rong("red")
    } nahole {
        uttor.bodlao("Hello, {nam}!").rong("green")
    }
})
amar_janala.chalao()
```

**Rows, colors and the keyboard.** This counter has two buttons side by side in a `sari`, a dark background, and also reacts to the `+`, `-` and Esc keys:

```
dhoro amar_janala = janala("Counter", 320, 220)
amar_janala.pechon("#16201b")
dhoro gona = 0
dhoro porda = amar_janala.lekha("0").akar(40).rong("white").dane()

kaj dekhao_gona() {
    porda.bodlao(lekha(gona))
}

dhoro sari = amar_janala.sari()
sari.botam("- 1", kaj () {
    gona -= 1
    dekhao_gona()
})
sari.botam("+ 1", kaj () {
    gona += 1
    dekhao_gona()
}).pechon("#0d6b49").rong("white")

amar_janala.chabi_chap(kaj (chabi_ti) {
    jodi chabi_ti == "+" { gona += 1 }
    jodi chabi_ti == "-" { gona -= 1 }
    jodi chabi_ti == "Escape" { gona = 0 }
    dekhao_gona()
})
amar_janala.chalao()
```

Key names are the same everywhere: a letter or digit like `"a"` or `"5"`, a sign like `"+"`, or `"Enter"`, `"Backspace"`, `"Escape"`, `"ArrowUp"` and `" "` (space).

**Try it 13.1:** make an app with an input box and a button that shows the number typed, multiplied by 2.

**Try it 13.2:** add a "Reset" button to the counter that sets it back to 0.

## Lesson 14: Websites

`website()` makes a website, and `.pata(...)` ("page") adds a page. Each page is a `kaj` that gives back the page's HTML, the language browsers read. The page design is HTML; everything the website does is BE.

```
dhoro amar_site = website()

amar_site.pata("/", kaj (r) {
    ferot "<h1>Amar website</h1><p>Welcome!</p><a href='/about'>About me</a>"
})

amar_site.pata("/about", kaj (r) {
    ferot "<h1>About me</h1><p>I am learning BE.</p><a href='/'>Home</a>"
})

amar_site.chalao(8000)
```

- **On a computer:** run it with `be run`, then open http://localhost:8000 in your browser. The terminal shows `BE website running at http://localhost:8000`. Press **Ctrl+C** in the terminal to stop it.
- **In the BE Playground:** the website opens in a small browser in the preview, where its links and forms work.

**What the visitor sends** arrives in `r`:

| Word | What it holds | Example |
| --- | --- | --- |
| `r.ongsho.nam` | a `:nam` part of the address | `/hello/:nam` with `/hello/Mitu` gives `"Mitu"` |
| `r.ghor.lekha` | what was typed in a form's box named `lekha` | `<input name='lekha'>` |
| `r.prosno.page` | the `?page=...` part of the address | `/list?page=2` gives `"2"` |
| `r.poddhoti` | how the page was asked for | `"GET"` or `"POST"` (a form) |

**A guest book with a form, a page with a name in its address, and an API.** A list or dictionary given back is sent as JSON, which other apps can read:

```
dhoro amar_site = website()
dhoro montobbo = []

kaj pata_banao(shironam, bhitor) {
    ferot "<!doctype html><html><head><meta charset='utf-8'><title>{shironam}</title></head>"
        + "<body><h1>{shironam}</h1>{bhitor}</body></html>"
}

amar_site.pata("/", kaj (r) {
    dhoro talika = ""
    protiti m montobbo theke {
        talika += "<li>{m}</li>"
    }
    dhoro form = "<form method='post' action='/jog'>"
        + "<input name='lekha' placeholder='Write a comment'> <button>Send</button></form>"
    ferot pata_banao("Guest book", form + "<ul>{talika}</ul>")
})

amar_site.pata("/jog", kaj (r) {
    dhoro notun = parishkar(r.ghor.lekha)
    jodi notun != "" {
        jukto(montobbo, notun)
    }
    ferot "<meta http-equiv='refresh' content='0; url=/'>Saved"
}, "POST")

amar_site.pata("/hello/:nam", kaj (r) {
    ferot pata_banao("Hello", "<p>Hello, {r.ongsho.nam}!</p>")
})

amar_site.pata("/api", kaj (r) {
    ferot {"comments": montobbo, "count": lomba(montobbo)}
})

amar_site.chalao(8000)
```

After one comment, http://localhost:8000/api shows `{"comments": ["Darun website"], "count": 1}`. The `"POST"` after the `/jog` page means only a form can send to it, and the `<meta ... refresh>` answer takes the visitor back to the home page.

**More website words:**

| Words | What they do |
| --- | --- |
| `amar_site.fileguli("/static", "public")` | serve the CSS, pictures and JavaScript files in the folder `public`, at addresses starting `/static` |
| `uttor("Not found", 404)` | an answer with its own status code |
| `amar_site.porikkha("/about")` | test a page without a browser: gives `abostha` (status), `dhoron` (type) and `lekha` (the page) |

Comments are kept only while the website runs. To keep them, save them to a file (Lesson 12). To put a website online for everyone, it needs a computer or server that keeps running `be run`.

**Try it 14.1:** make a website with three pages (`/`, `/school` and `/hobby`) that link to each other.

**Try it 14.2:** add a page `/borgo/:x` that shows the square of the number in its address, so `/borgo/7` shows 49.

## Lesson 15: BE inside your own web pages

Any HTML page can run BE, right in the browser, with no server. Copy `be-web.js` (it is in the BE folder, inside `playground`) next to your HTML file, load it with `<script src="be-web.js"></script>`, and write BE inside `<script type="text/be">`. Double-click the HTML file to open it.

**The page words.** `khojo("#id")` ("find") finds an element of the page by its `id`, and `banao("li")` ("make") makes a new one. Elements then have these Banglish words:

| Words | What they do |
| --- | --- |
| `el.bodlao(lekha)` / `el.man()` | change its text / read its text, or what was typed in a box |
| `el.chap(kaj)` | run a kaj when it is clicked |
| `el.chabi_chap(kaj (chabi_ti) { ... })` | run a kaj when a key is pressed in it |
| `el.jog(jinish)` | add something inside it, such as a new element |
| `el.muchho()` / `el.bad()` | empty it / remove it from the page |
| `el.chinho("nam", sotti)` | mark it with a CSS class (`mittha` takes the mark off) |
| `el.lukao()` | hide it (`el.lukao(mittha)` shows it again) |
| `el.rong(rong)`, `el.pechon(rong)`, `el.akar(akar)` | text color, background color, text size |
| `el.html(lekha)` | put HTML inside it |

**A quiz page.** Save this as `quiz.html` next to `be-web.js` and open it:

```
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>BE Quiz</title>
<style>
  .thik { color: green; }
  .bhul { color: red; }
</style>
</head>
<body>
  <h1>Quick quiz</h1>
  <p id="prosno"></p>
  <input id="uttor" placeholder="Your answer">
  <button id="check">Check</button>
  <p id="fol"></p>
  <ul id="itihash"></ul>

  <script src="be-web.js"></script>
  <script type="text/be">
    dhoro prosno_guli = [
        {"prosno": "What is 7 x 8?", "uttor": "56"},
        {"prosno": "Capital of Bangladesh?", "uttor": "dhaka"},
        {"prosno": "How many days in a week?", "uttor": "7"}
    ]
    dhoro ekhon = 0
    dhoro thik_koyta = 0

    kaj prosno_dekhao() {
        jodi ekhon < lomba(prosno_guli) {
            khojo("#prosno").bodlao(prosno_guli[ekhon].prosno)
        } nahole {
            khojo("#prosno").bodlao("Done! You got {thik_koyta} of {lomba(prosno_guli)}.")
            khojo("#check").lukao()
            khojo("#uttor").lukao()
        }
    }

    kaj check_koro() {
        dhoro dilo = choto_hater(parishkar(khojo("#uttor").man()))
        dhoro thik = dilo == prosno_guli[ekhon].uttor
        jodi thik {
            thik_koyta += 1
            khojo("#fol").bodlao("Correct!").chinho("thik").chinho("bhul", mittha)
        } nahole {
            khojo("#fol").bodlao("Not quite. The answer is {prosno_guli[ekhon].uttor}.").chinho("bhul").chinho("thik", mittha)
        }
        khojo("#itihash").jog(banao("li").bodlao(prosno_guli[ekhon].prosno + " " + dilo))
        khojo("#uttor").muchho()
        ekhon += 1
        prosno_dekhao()
    }

    khojo("#check").chap(kaj () { check_koro() })
    khojo("#uttor").chabi_chap(kaj (chabi_ti) {
        jodi chabi_ti == "Enter" { check_koro() }
    })
    prosno_dekhao()
  </script>
</body>
</html>
```

Type an answer and press **Check** or Enter. After three questions the page shows your score, such as "Done! You got 2 of 3." If your BE code has a mistake, a red box at the bottom of the page explains it.

A `janala()` app or a `website()` also works on your own page: it appears inside an element with `id="be-app"`, or at the end of the page.

**Try it 15.1:** add two more questions to the quiz.

**Try it 15.2:** make a page with a box and a button that adds what was typed to a list on the page (a to-do list).

## Three projects to build

These projects put the lessons together. Type them in yourself rather than copying, then change them to make them your own.

### Project 1: a number guessing game (Lessons 1 to 5 and 10)

The computer picks a secret number with `elomelo(1, 50)` ("random"), and the player guesses until they find it.

```
dhoro gopon = elomelo(1, 50)
dhoro koybar = 0

dekhao "I am thinking of a number from 1 to 50."

jotokkhon sotti {
    dhoro uttor = jiggesh("Your guess? ")
    jodi uttor == "" {
        dekhao "No answer. Game over."
        thamo
    }

    # A wrong answer doesn't stop the program: chesta catches the mistake
    chesta {
        anuman = shonkha(uttor)
    } nahole {
        dekhao "'{uttor}' is not a number. Try again."
        agao
    }
    koybar += 1

    jodi anuman < gopon {
        dekhao "Higher!"
    } nahole jodi anuman > gopon {
        dekhao "Lower!"
    } nahole {
        dekhao "Correct! You got it in {koybar} tries."
        thamo
    }
}
```

**Make it yours:** limit the player to 7 guesses, or let them choose the highest number.

### Project 2: a calculator app (Lessons 8, 10 and 13)

Two input boxes, four buttons and an answer that turns green, or red for a mistake.

```
dhoro amar_janala = janala("Simple Calculator", 340, 330)

amar_janala.lekha("First number:")
dhoro prothom_ghor = amar_janala.ghor("")

amar_janala.lekha("Second number:")
dhoro ditiyo_ghor = amar_janala.ghor("")

dhoro fol_lekha = amar_janala.lekha("Answer:").akar(16)

# Work out the answer for one sign: + - × ÷
kaj hisab_koro(chinho) {
    chesta {
        dhoro a = shonkha(prothom_ghor.man())
        dhoro b = shonkha(ditiyo_ghor.man())
        dhoro fol = 0
        jodi chinho == "+" { fol = a + b }
        jodi chinho == "-" { fol = a - b }
        jodi chinho == "×" { fol = a * b }
        jodi chinho == "÷" {
            jodi b == 0 {
                chhuro "Can't divide by 0"
            }
            fol = a / b
        }
        fol_lekha.bodlao("Answer: {a} {chinho} {b} = {gol(fol, 4)}").rong("green")
    } nahole bhul {
        fol_lekha.bodlao("Error: {bhul}").rong("red")
    }
}

# One row with four buttons
dhoro sari = amar_janala.sari()
protiti chinho ["+", "-", "×", "÷"] theke {
    sari.botam(chinho, kaj () { hisab_koro(chinho) })
}

amar_janala.chalao()
```

**Make it yours:** add a `%` button, or a list of past answers. A full calculator with all the number buttons is in `examples/app/calculator.be`.

### Project 3: a student results website (Lessons 4, 7, 8 and 14)

A teacher types a name and marks; the site works out the grade and shows a results table, plus an API at `/api`.

```
# result.be - a student result website
dhoro amar_site = website()
dhoro folafol = []          # every result: {"nam": ..., "nombor": ...}

kaj grade(nombor) {
    jodi nombor >= 80 { ferot "A+" }
    jodi nombor >= 70 { ferot "A" }
    jodi nombor >= 60 { ferot "A-" }
    jodi nombor >= 33 { ferot "Pass" }
    ferot "Fail"
}

kaj pata_banao(bhitor) {
    ferot "<!doctype html><html><head><meta charset='utf-8'><title>Results</title>"
        + "<style>body \{ font-family: sans-serif; max-width: 520px; margin: 40px auto; \}</style>"
        + "</head><body><h1>Student results</h1>{bhitor}</body></html>"
}

amar_site.pata("/", kaj (r) {
    dhoro sari_guli = ""
    protiti f folafol theke {
        sari_guli += "<tr><td>{f.nam}</td><td>{f.nombor}</td><td>{grade(f.nombor)}</td></tr>"
    }
    dhoro form = "<form method='post' action='/jog'>"
        + "<input name='nam' placeholder='Name'> <input name='nombor' placeholder='Marks'> "
        + "<button>Add</button></form>"
    ferot pata_banao(form + "<table><tr><th>Name</th><th>Marks</th><th>Grade</th></tr>{sari_guli}</table>")
})

amar_site.pata("/jog", kaj (r) {
    chesta {
        dhoro nombor = shonkha(r.ghor.nombor)
        jukto(folafol, {"nam": parishkar(r.ghor.nam), "nombor": nombor})
        ferot "<meta http-equiv='refresh' content='0; url=/'>Saved"
    } nahole bhul {
        ferot uttor(pata_banao("<p>Marks must be a number. <a href='/'>Go back</a></p>"), 400)
    }
}, "POST")

amar_site.pata("/api", kaj (r) {
    ferot folafol
})

amar_site.chalao(8000)
```

After adding Rahim (78) and Mitu (92), the table shows grades A and A+, and `/api` gives `[{"nam": "Rahim", "nombor": 78}, {"nam": "Mitu", "nombor": 92}]`.

**Make it yours:** save the results to a JSON file so they stay after the website stops (Lesson 12), or show the class average under the table.

## Quick reference

Every word in BE on one page. Keep it next to you while you code.

**Keywords**

| Keyword | Meaning | Example |
| --- | --- | --- |
| `dhoro` | make a variable (optional) | `dhoro x = 5` |
| `dekhao` | show (print) | `dekhao "Hello", x` |
| `jodi` / `tahole` / `nahole` | if / then (optional) / otherwise | `jodi x > 5 { ... } nahole { ... }` |
| `jotokkhon` | as long as (while) | `jotokkhon x < 10 { ... }` |
| `ghuro ... bar` | repeat a number of times | `ghuro 3 bar { ... }` |
| `ghuro ... theke`, `porjonto`, `dhap` | count from, up to (optional), in steps of | `ghuro i = 0 theke 10 dhap 2 { ... }` |
| `protiti ... theke` | for each item of | `protiti f fol_guli theke { ... }` |
| `thamo` / `agao` | stop the loop / go to the next round | `thamo` |
| `kaj` / `ferot` | function / give a result back | `kaj jog(a, b) { ferot a + b }` |
| `shreni`, `ei`, `upor` | class, this object, the parent class | `shreni Chhatro theke Manush { ... }` |
| `chesta ... nahole` | try / if it goes wrong | `chesta { ... } nahole bhul { ... }` |
| `chhuro` | raise your own error | `chhuro "Too big"` |
| `anao` | bring in another file | `anao "hishab.be"` |
| `sotti` / `mittha` / `kichuna` | true / false / nothing | `dhoro thik = sotti` |
| `ebong` / `othoba` / `na` | and / or / not | `jodi a ebong na b { ... }` |
| `moddhe` | is inside | `"a" moddhe ["a", "b"]` |

**Ready-made functions**

| Function | What it does |
| --- | --- |
| `lomba(x)` | length of text, a list or a dictionary |
| `jiggesh(prosno)` | ask the user, gives back text |
| `shonkha(x)` / `lekha(x)` | to a number / to text |
| `dhoron(x)` | the kind of value: `number`, `text`, `list`, ... |
| `jukto(talika, x)` / `bad_dao(talika)` | add to the end / remove the last item (or one position) |
| `boro(...)` / `choto(...)` / `jogfol(talika)` | biggest / smallest / total |
| `shajao(talika)` / `ulta(x)` | sorted copy (`shajao(talika, kaj)` sorts by anything) / backwards |
| `bhag(lekha, chinho)` / `jora(talika, chinho)` | split text / join a list |
| `bodlao(lekha, ager, notun)` | replace |
| `boro_hater(t)` / `choto_hater(t)` / `parishkar(t)` | CAPITALS / small letters / trim spaces |
| `kothay(x, jinish)` | position of an item, or -1 |
| `chabi(d)` / `man(d)` | keys / values of a dictionary |
| `gol(x, digits)`, `borgomul(x)`, `poromman(x)`, `elomelo(a, b)` | round, square root, absolute value, random whole number |
| `json_banao(x)` / `json_porho(lekha)` | to JSON text / from JSON text |
| `shomoy()` | current time in seconds |

**Apps** (`janala`, Lesson 13): `w.lekha`, `w.botam`, `w.ghor`, `w.sari`, `w.pechon`, `w.chabi_chap`, `w.pore`, `w.chalao`, `w.bondho`, and on each text, button or box `bodlao`, `man`, `rong`, `pechon`, `akar`, `dane`.

**Websites** (`website()`, Lesson 14): `.pata`, `.fileguli`, `.porikkha`, `.chalao`, `uttor(...)`, and in each request `r.ongsho`, `r.ghor`, `r.prosno`, `r.thikana`, `r.poddhoti`, `r.json`, `r.lekha`.

**Web pages** (`be-web.js`, Lesson 15): `khojo`, `shob_khojo`, `banao`, `pore`, and on each element `bodlao`, `man`, `html`, `chap`, `chabi_chap`, `jog`, `muchho`, `bad`, `chinho`, `lukao`, `rong`, `pechon`, `akar`.

**Only with `be run` on a computer:** `file_porho`, `file_lekho`, `file_jog`, `file_ache` (files), `web_theke(url)` (download), `ghumao(second)` (wait).

**Signs:** `+ - * / %` (math), `== != < > <= >=` (compare), `= += -= *= /=` (give a value), `"{x}"` (a value inside text), `#` (comment), `\{` (a plain brace inside text).

## Answers to the exercises

There is more than one right answer to most exercises. If yours works and gives the right result, it is right. Names like `Shuvo` and the numbers typed in are examples.

**1.1**

```
dekhao "Shuvo"
dekhao "Dhaka"
```

**1.2**

```
dekhao 7 * 8
```

**2.1**

```
dhoro dorja = 8
dhoro prostho = 5
dekhao "Area: {dorja * prostho}"
```

**2.2**

```
dhoro dam = 450
dhoro mot = dam * 3
dekhao "3 shirts:", mot, "taka"
dekhao "After discount:", mot - 50, "taka"
```

**3.1**

```
dhoro a = shonkha(jiggesh("First number? "))
dhoro b = shonkha(jiggesh("Second number? "))
dekhao "Total:", a + b
```

**3.2**

```
dhoro dam = shonkha(jiggesh("Price in taka? "))
dekhao "With VAT:", gol(dam * 1.15, 2), "taka"
```

`gol(x, 2)` rounds to 2 digits after the point. Without it, 200 × 1.15 shows as 229.99999999999997, because computers store most decimals slightly off.

**4.1**

```
dhoro n = shonkha(jiggesh("A number? "))
jodi n % 2 == 0 {
    dekhao n, "is even"
} nahole {
    dekhao n, "is odd"
}
```

**4.2**

```
dhoro tap = shonkha(jiggesh("Temperature? "))
jodi tap > 30 {
    dekhao "Hot"
} nahole jodi tap >= 20 {
    dekhao "Nice"
} nahole {
    dekhao "Cold"
}
```

**5.1**

```
ghuro i = 1 theke 10 {
    dekhao "7 x {i} = {7 * i}"
}
```

**5.2**

```
dhoro mot = 0
ghuro i = 1 theke 100 {
    mot += i
}
dekhao mot
```

**6.1**

```
dhoro bondhu = ["Rahim", "Mitu", "Karim", "Nila", "Arif"]
protiti nam bondhu theke {
    dekhao "Hello, {nam}!"
}
```

**6.2**

```
dhoro dam = [120, 45, 300, 80]
dekhao "Total:", jogfol(dam)
dekhao "Most expensive:", boro(dam)
```

**7.1**

```
dhoro ami = {"nam": "Shuvo", "boyosh": 22, "khabar": "biryani"}
dekhao "I am {ami.nam}, I am {ami.boyosh}, and I love {ami.khabar}."
```

**7.2**

```
dhoro nombor = {"Bangla": 85, "English": 78, "Math": 92}
dekhao "Average:", gol(jogfol(man(nombor)) / lomba(nombor), 2)
```

**8.1**

```
kaj borgo(x) {
    ferot x * x
}
dekhao borgo(9)
```

**8.2**

```
kaj grade(nombor) {
    jodi nombor >= 80 { ferot "A+" }
    jodi nombor >= 70 { ferot "A" }
    jodi nombor >= 33 { ferot "Pass" }
    ferot "Fail"
}
dekhao grade(85), grade(72), grade(20)
```

`ferot` leaves the function at once, so the first true `jodi` decides the grade.

**9.1**

```
dhoro shobdo = choto_hater(parishkar(jiggesh("A word? ")))
jodi shobdo == ulta(shobdo) {
    dekhao shobdo, "is a palindrome"
} nahole {
    dekhao shobdo, "is not a palindrome"
}
```

**9.2**

```
dhoro bakko = jiggesh("A sentence? ")
dekhao "Words:", lomba(bhag(bakko))
```

**10.1**

```
chesta {
    dekhao 10 / 0
} nahole {
    dekhao "Can't do that"
}
```

**10.2**

```
kaj bhag_koro(a, b) {
    jodi b == 0 {
        chhuro "Can't divide by 0"
    }
    ferot a / b
}
dekhao bhag_koro(10, 4)
chesta {
    bhag_koro(1, 0)
} nahole bhul {
    dekhao "Error:", bhul
}
```

**11.1**

```
shreni Hisab {
    kaj shuru(taka = 0) {
        ei.taka = taka
    }
    kaj joma(poriman) {
        ei.taka += poriman
    }
    kaj tolo(poriman) {
        jodi poriman > ei.taka {
            chhuro "Not enough money"
        }
        ei.taka -= poriman
    }
    kaj bivoron() {
        ferot "Balance: {ei.taka} taka"
    }
}
dhoro hisab = Hisab(500)
hisab.joma(250)
hisab.tolo(100)
dekhao hisab.bivoron()
```

**11.2**

```
shreni Bari {
    kaj shuru(ghor) {
        ei.ghor = ghor
    }
    kaj bivoron() {
        ferot "This house has {ei.ghor} rooms"
    }
}
dekhao Bari(4).bivoron()
```

**12.1** (on a computer, with `be run`)

```
file_lekho("bondhu.txt", "")
ghuro 3 bar {
    file_jog("bondhu.txt", jiggesh("A friend's name? ") + "\n")
}
protiti nam bhag(parishkar(file_porho("bondhu.txt")), "\n") theke {
    dekhao nam
}
```

**12.2** (on a computer, with `be run`)

```
dhoro nombor = {"Bangla": 85, "English": 78, "Math": 92}
file_lekho("marks.json", json_banao(nombor))
dhoro ferot_elo = json_porho(file_porho("marks.json"))
dekhao "Total:", jogfol(man(ferot_elo))
```

**13.1**

```
dhoro amar_janala = janala("Double", 320, 220)
dhoro ghor = amar_janala.ghor("")
dhoro uttor = amar_janala.lekha("")
amar_janala.botam("x 2", kaj () {
    chesta {
        uttor.bodlao("Answer: {shonkha(ghor.man()) * 2}")
    } nahole {
        uttor.bodlao("Type a number first")
    }
})
amar_janala.chalao()
```

**13.2:** add this to the counter, before `amar_janala.chalao()`:

```
amar_janala.botam("Reset", kaj () {
    gona = 0
    dekhao_gona()
})
```

**14.1**

```
dhoro amar_site = website()
dhoro menu = "<p><a href='/'>Home</a> | <a href='/school'>School</a> | <a href='/hobby'>Hobby</a></p>"
amar_site.pata("/", kaj (r) { ferot menu + "<h1>Home</h1>" })
amar_site.pata("/school", kaj (r) { ferot menu + "<h1>My school</h1>" })
amar_site.pata("/hobby", kaj (r) { ferot menu + "<h1>My hobby</h1>" })
amar_site.chalao(8000)
```

**14.2:** add this page:

```
amar_site.pata("/borgo/:x", kaj (r) {
    dhoro x = shonkha(r.ongsho.x)
    ferot "<p>{x} squared is {x * x}</p>"
})
```

**15.1:** add two more entries inside `prosno_guli`, for example `{"prosno": "2 + 2?", "uttor": "4"}`.

**15.2** (inside `<script type="text/be">`, with `<input id="kaj_ghor">`, `<button id="jog">Add</button>` and `<ul id="talika"></ul>` on the page)

```
khojo("#jog").chap(kaj () {
    dhoro lekha_ti = parishkar(khojo("#kaj_ghor").man())
    jodi lekha_ti != "" {
        khojo("#talika").jog(banao("li").bodlao(lekha_ti))
        khojo("#kaj_ghor").muchho()
    }
})
```

## For teachers: a 10-day course

This plan teaches the whole course in 10 sessions of about 1 hour. Students need only a browser: everything runs in the BE Playground, except Lesson 12's files, which need `be run` on a computer.

| Day | Lessons | In class | Homework |
| --- | --- | --- | --- |
| 1 | 1, 2 | Hello world, variables, math, values inside text | Try it 1.1 to 2.2 |
| 2 | 3, 4 | Asking the user, decisions, grades | Try it 3.1 to 4.2 |
| 3 | 5 | All four loops, the multiplication table | Try it 5.1, 5.2 |
| 4 | 6, 7 | Lists and dictionaries, a shopping list | Try it 6.1 to 7.2 |
| 5 | 8 | Functions, inputs, `ferot` | Try it 8.1, 8.2 |
| 6 | 9, 10 | Text tools, reading errors, `chesta` | Try it 9.1 to 10.2; Project 1 (guessing game) |
| 7 | 11, 12 | Classes, files and JSON | Try it 11.1 to 12.2 |
| 8 | 13 | Apps with windows | Try it 13.1, 13.2; Project 2 (calculator) |
| 9 | 14, 15 | Websites and web pages | Try it 14.1 to 15.2 |
| 10 | Projects | Each student builds and shows their own project | Project 3, or their own idea |

**Tips:**

- Let students type the examples themselves instead of copying. Typing is how the words stick.
- When an error appears, read it aloud together: the kind of error, the line, the `^`, and the *Did you mean* hint. Learning to read errors is half of programming.
- Encourage Banglish names that mean something: `mot_taka` beats `x`.
- Day 10 works best as a small show: each student presents an app, website or game they made.
