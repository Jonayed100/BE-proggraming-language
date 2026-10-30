// Made by tools/build_learn.py from learn/course.md. Do not edit by hand.
window.BE_LESSONS = {
 "lessons": [
  {
   "slug": "start",
   "number": null,
   "title": "Welcome",
   "html": "<p>BE is a programming language where you write code with Bangla words in English letters. <code>dhoro amar_nam = &quot;Shuvo&quot;</code> means \"let my name be Shuvo\", and <code>dekhao</code> means show (print). Everything BE shows back to you, its output and its error messages, is in English. This course takes you from your first line of code to your own apps and websites in 15 short lessons.</p>\n<p><strong>Who it is for:</strong> anyone who knows Bangla and wants to learn programming: school and university students, teachers, and anyone curious. You need no experience.</p>\n<p><strong>Where to run the code.</strong> Pick one:</p>\n<div class=\"table-scroll\"><table><tr><th>Way</th><th>What you need</th><th>How</th></tr><tr><td>BE Playground</td><td>a browser on a phone or computer</td><td>Open the BE Playground (the online link, or <code>playground/index.html</code> in the BE folder). Type code on the left and click <strong>▶ Run</strong>.</td></tr><tr><td>Your computer</td><td>BE installed (<code>BE-Setup.exe</code>, or with Python)</td><td>Save the code in a file such as <code>hello.be</code>, then type <code>be run hello.be</code> in a terminal.</td></tr></table></div>\n<p><strong>How each lesson works:</strong> read the short explanation, run the example and compare with the output shown, then do the <strong>Try it</strong> exercise yourself. The answers are near the end, but try first.</p>\n<p><strong>Three rules to remember from day one:</strong></p>\n<ol><li>Keywords are written in small letters, with one spelling: <code>dekhao</code>, never <code>Dekhao</code> or <code>dekhau</code>.</li><li>Text goes inside quotes: <code>&quot;Hello&quot;</code>. Inside quotes you can write anything.</li><li>A group of lines that belong together (a block) goes inside <code>{ }</code>.</li></ol>\n<p>If you make a mistake, BE tells you the line and often the right word: <em>Did you mean 'dekhao'?</em></p>"
  },
  {
   "slug": "lesson-1",
   "number": 1,
   "title": "Your first program",
   "html": "<p>A program is a list of instructions that the computer follows from top to bottom. The first instruction to learn is <code>dekhao</code>, which means \"show\": it prints something on the screen.</p>\n<div class=\"example\" data-code=\"0\"></div>\n<p>Text goes inside double quotes <code>&quot; &quot;</code>. Numbers don't need quotes, and BE can do sums with them:</p>\n<div class=\"example\" data-code=\"1\"></div>\n<p>The last line shows why quotes matter: inside quotes, <code>10 + 5</code> is just text, so BE shows it exactly as written.</p>\n<p><strong>Several things on one line.</strong> Put commas between them, and BE puts a space between each:</p>\n<div class=\"example\" data-code=\"2\"></div>\n<p><strong>Comments.</strong> A line that starts with <code>#</code> is a note for people. BE skips it. Use comments to explain your code:</p>\n<div class=\"example\" data-code=\"3\"></div>\n<div class=\"task\" data-task=\"1.1\"></div>\n<div class=\"task\" data-task=\"1.2\"></div>"
  },
  {
   "slug": "lesson-2",
   "number": 2,
   "title": "Variables and math",
   "html": "<p>A variable is a named box that keeps a value. Make one with <code>dhoro</code> (\"let it be\"), a name, <code>=</code> and the value:</p>\n<div class=\"example\" data-code=\"4\"></div>\n<p><strong>Names</strong> use English letters, digits and <code>_</code>, and can't start with a digit: <code>amar_nam</code>, <code>boyosh</code>, <code>mot_taka2</code>. Choose Banglish names that say what the box holds. <code>dhoro</code> is optional: <code>boyosh = 22</code> works too.</p>\n<p><strong>Changing a variable.</strong> Give it a new value with <code>=</code>. The short forms <code>+=</code>, <code>-=</code>, <code>*=</code> and <code>/=</code> change it using its old value:</p>\n<div class=\"example\" data-code=\"5\"></div>\n<p><strong>Math.</strong> BE follows the usual order: <code>*</code> and <code>/</code> before <code>+</code> and <code>-</code>, and brackets first.</p>\n<div class=\"table-scroll\"><table><tr><th>Sign</th><th>Meaning</th><th>Example</th><th>Answer</th></tr><tr><td><code>+</code></td><td>add</td><td><code>7 + 3</code></td><td>10</td></tr><tr><td><code>-</code></td><td>subtract</td><td><code>7 - 3</code></td><td>4</td></tr><tr><td><code>*</code></td><td>multiply</td><td><code>7 * 3</code></td><td>21</td></tr><tr><td><code>/</code></td><td>divide</td><td><code>7 / 2</code></td><td>3.5</td></tr><tr><td><code>%</code></td><td>remainder</td><td><code>7 % 3</code></td><td>1</td></tr></table></div>\n<div class=\"example\" data-code=\"6\"></div>\n<p><strong>Values inside text.</strong> Put a variable or a calculation inside <code>{ }</code> in a text, and BE puts its value there. This is the easiest way to build sentences:</p>\n<div class=\"example\" data-code=\"7\"></div>\n<p>You can also join text with <code>+</code>: <code>&quot;Hello, &quot; + nam</code>.</p>\n<p><strong>Kinds of values.</strong> <code>dhoron(x)</code> tells you what kind of value <code>x</code> is:</p>\n<div class=\"example\" data-code=\"8\"></div>\n<p><code>sotti</code> means true, <code>mittha</code> means false, and <code>kichuna</code> means nothing.</p>\n<div class=\"task\" data-task=\"2.1\"></div>\n<div class=\"task\" data-task=\"2.2\"></div>"
  },
  {
   "slug": "lesson-3",
   "number": 3,
   "title": "Asking the user",
   "html": "<p><code>jiggesh</code> (\"ask\") shows a question, waits for the user to type an answer, and gives back what they typed:</p>\n<div class=\"example\" data-code=\"9\"></div>\n<p>In the BE Playground, type the answers in the <strong>Answers for jiggesh()</strong> box, one per line, before you click Run. With <code>be run</code> on a computer, you type them in the terminal.</p>\n<p><strong>Text to number.</strong> <code>jiggesh</code> always gives back text, even when the user types digits. Use <code>shonkha</code> (\"number\") to turn it into a number before doing math, and <code>lekha</code> (\"text\") to go the other way:</p>\n<div class=\"example\" data-code=\"10\"></div>\n<p>Without <code>shonkha</code>, <code>&quot;1998&quot; - 1</code> would be an error, because text can't be subtracted.</p>\n<div class=\"task\" data-task=\"3.1\"></div>\n<div class=\"task\" data-task=\"3.2\"></div>"
  },
  {
   "slug": "lesson-4",
   "number": 4,
   "title": "Decisions",
   "html": "<p><code>jodi</code> means \"if\". The block inside <code>{ }</code> runs only when the condition is true. <code>nahole</code> means \"otherwise\":</p>\n<div class=\"example\" data-code=\"11\"></div>\n<p><strong>Comparisons</strong> give <code>sotti</code> (true) or <code>mittha</code> (false):</p>\n<div class=\"table-scroll\"><table><tr><th>Sign</th><th>Means</th></tr><tr><td><code>==</code></td><td>is equal to (two <code>=</code> signs; one <code>=</code> gives a variable a value)</td></tr><tr><td><code>!=</code></td><td>is not equal to</td></tr><tr><td><code>&gt;</code> <code>&lt;</code></td><td>bigger than, smaller than</td></tr><tr><td><code>&gt;=</code> <code>&lt;=</code></td><td>bigger or equal, smaller or equal</td></tr></table></div>\n<p><strong>More than two choices.</strong> Chain them with <code>nahole jodi</code> (\"otherwise if\"). BE checks from the top and runs only the first one that is true:</p>\n<div class=\"example\" data-code=\"12\"></div>\n<p><strong>Joining conditions.</strong> <code>ebong</code> (and) needs both to be true, <code>othoba</code> (or) needs at least one, and <code>na</code> (not) turns true into false:</p>\n<div class=\"example\" data-code=\"13\"></div>\n<p>You may also write <code>tahole</code> (\"then\") after the condition: <code>jodi boyosh &gt;= 18 tahole { ... }</code>. It means the same thing.</p>\n<div class=\"task\" data-task=\"4.1\"></div>\n<div class=\"task\" data-task=\"4.2\"></div>"
  },
  {
   "slug": "lesson-5",
   "number": 5,
   "title": "Loops",
   "html": "<p>A loop repeats a block. BE has four kinds.</p>\n<p><strong>1. Repeat a number of times:</strong> <code>ghuro 3 bar</code> means \"go around 3 times\".</p>\n<div class=\"example\" data-code=\"14\"></div>\n<p><strong>2. Count:</strong> <code>ghuro i = 1 theke 5</code> counts from 1 to 5. Add <code>dhap</code> (\"step\") to count in steps. If the end is smaller than the start, it counts down by itself:</p>\n<div class=\"example\" data-code=\"15\"></div>\n<p><strong>3. While something is true:</strong> <code>jotokkhon</code> means \"as long as\". Make sure the condition becomes false at some point, or the loop never ends:</p>\n<div class=\"example\" data-code=\"16\"></div>\n<p><strong>4. Every item:</strong> <code>protiti f fol_guli theke</code> means \"for each f from fol\\_guli\". It goes through a list (Lesson 6) or the letters of a text:</p>\n<div class=\"example\" data-code=\"17\"></div>\n<p><strong>Stop or skip.</strong> <code>thamo</code> (\"stop\") leaves the loop. <code>agao</code> (\"go ahead\") skips to the next round:</p>\n<div class=\"example\" data-code=\"18\"></div>\n<div class=\"task\" data-task=\"5.1\"></div>\n<div class=\"task\" data-task=\"5.2\"></div>"
  },
  {
   "slug": "lesson-6",
   "number": 6,
   "title": "Lists",
   "html": "<p>A list (talika) keeps many values in order, inside <code>[ ]</code>. Each item has a position, starting from 0. Position -1 is the last item:</p>\n<div class=\"example\" data-code=\"19\"></div>\n<p><strong>Changing a list:</strong></p>\n<div class=\"example\" data-code=\"20\"></div>\n<p><strong>Ready-made list functions:</strong></p>\n<div class=\"table-scroll\"><table><tr><th>Function</th><th>What it gives</th><th><code>[45, 82, 67, 91]</code> gives</th></tr><tr><td><code>lomba(l)</code></td><td>how many items</td><td>4</td></tr><tr><td><code>jogfol(l)</code></td><td>the total</td><td>285</td></tr><tr><td><code>boro(l)</code> / <code>choto(l)</code></td><td>the biggest / the smallest</td><td>91 / 45</td></tr><tr><td><code>shajao(l)</code></td><td>a sorted copy</td><td><code>[45, 67, 82, 91]</code></td></tr><tr><td><code>ulta(l)</code></td><td>a backwards copy</td><td><code>[91, 67, 82, 45]</code></td></tr><tr><td><code>kothay(l, 67)</code></td><td>the position of an item, or -1</td><td>2</td></tr><tr><td><code>67 moddhe l</code></td><td>is it inside?</td><td><code>sotti</code></td></tr></table></div>\n<div class=\"example\" data-code=\"21\"></div>\n<div class=\"task\" data-task=\"6.1\"></div>\n<div class=\"task\" data-task=\"6.2\"></div>"
  },
  {
   "slug": "lesson-7",
   "number": 7,
   "title": "Dictionaries",
   "html": "<p>A dictionary keeps values by name instead of by position, inside <code>{ }</code>. Each entry is a key (in quotes), <code>:</code> and a value. Read a value with <code>[&quot;key&quot;]</code> or with a dot:</p>\n<div class=\"example\" data-code=\"22\"></div>\n<p><strong>Adding and changing:</strong> give a key a value. A new key is added; an old one is changed:</p>\n<div class=\"example\" data-code=\"23\"></div>\n<p><strong>Going through a dictionary.</strong> <code>protiti</code> gives each key. <code>chabi(d)</code> gives the list of keys and <code>man(d)</code> the list of values:</p>\n<div class=\"example\" data-code=\"24\"></div>\n<p><strong>Lists of dictionaries</strong> are how real programs keep records, like a class register:</p>\n<div class=\"example\" data-code=\"25\"></div>\n<div class=\"task\" data-task=\"7.1\"></div>\n<div class=\"task\" data-task=\"7.2\"></div>"
  },
  {
   "slug": "lesson-8",
   "number": 8,
   "title": "Functions",
   "html": "<p>A function (kaj, \"work\") is a named piece of code you can run again and again. Make it with <code>kaj</code>, give it inputs in <code>( )</code>, and call it by its name:</p>\n<div class=\"example\" data-code=\"26\"></div>\n<p><strong>Giving a result back.</strong> <code>ferot</code> (\"return\") sends a value back to where the function was called:</p>\n<div class=\"example\" data-code=\"27\"></div>\n<p><strong>Default and named inputs.</strong> An input can have a default value, used when you leave it out. You can also pass inputs by name, in any order:</p>\n<div class=\"example\" data-code=\"28\"></div>\n<p><strong>Variables inside a function stay inside it.</strong> A variable made inside a <code>kaj</code> disappears when it finishes. Use <code>ferot</code> to get a value out.</p>\n<p><strong>A function can call itself.</strong> This is called recursion. It needs a stopping point, or it goes on forever:</p>\n<div class=\"example\" data-code=\"29\"></div>\n<p><strong>Functions are values too.</strong> A <code>kaj</code> without a name can be kept in a variable or given to another function. <code>shajao</code> uses one to sort by anything you choose:</p>\n<div class=\"example\" data-code=\"30\"></div>\n<div class=\"task\" data-task=\"8.1\"></div>\n<div class=\"task\" data-task=\"8.2\"></div>"
  },
  {
   "slug": "lesson-9",
   "number": 9,
   "title": "Working with text",
   "html": "<p>Text has its own ready-made functions:</p>\n<div class=\"table-scroll\"><table><tr><th>Function</th><th>What it does</th><th>Example</th><th>Gives</th></tr><tr><td><code>lomba(t)</code></td><td>how many letters</td><td><code>lomba(&quot;Dhaka&quot;)</code></td><td>5</td></tr><tr><td><code>boro_hater(t)</code></td><td>CAPITAL letters</td><td><code>boro_hater(&quot;be&quot;)</code></td><td><code>&quot;BE&quot;</code></td></tr><tr><td><code>choto_hater(t)</code></td><td>small letters</td><td><code>choto_hater(&quot;BE&quot;)</code></td><td><code>&quot;be&quot;</code></td></tr><tr><td><code>parishkar(t)</code></td><td>remove spaces at both ends</td><td><code>parishkar(&quot;  hi &quot;)</code></td><td><code>&quot;hi&quot;</code></td></tr><tr><td><code>bhag(t, chinho)</code></td><td>split into a list</td><td><code>bhag(&quot;a,b,c&quot;, &quot;,&quot;)</code></td><td><code>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code></td></tr><tr><td><code>jora(l, chinho)</code></td><td>join a list into text</td><td><code>jora([&quot;a&quot;, &quot;b&quot;], &quot;-&quot;)</code></td><td><code>&quot;a-b&quot;</code></td></tr><tr><td><code>bodlao(t, ager, notun)</code></td><td>replace</td><td><code>bodlao(&quot;I like tea&quot;, &quot;tea&quot;, &quot;coffee&quot;)</code></td><td><code>&quot;I like coffee&quot;</code></td></tr><tr><td><code>kothay(t, x)</code></td><td>where <code>x</code> is, or -1</td><td><code>kothay(&quot;banana&quot;, &quot;na&quot;)</code></td><td>2</td></tr><tr><td><code>ulta(t)</code></td><td>backwards</td><td><code>ulta(&quot;abc&quot;)</code></td><td><code>&quot;cba&quot;</code></td></tr><tr><td><code>x moddhe t</code></td><td>is <code>x</code> inside?</td><td><code>&quot;@&quot; moddhe &quot;a@b.com&quot;</code></td><td><code>sotti</code></td></tr></table></div>\n<p>Letters have positions like a list: <code>&quot;Dhaka&quot;[0]</code> is <code>&quot;D&quot;</code>.</p>\n<div class=\"example\" data-code=\"31\"></div>\n<p><strong>Braces inside text.</strong> Because <code>{ }</code> puts values into text, write <code>\\{</code> and <code>\\}</code> when you want plain braces, for example in CSS for a website:</p>\n<div class=\"example\" data-code=\"32\"></div>\n<div class=\"task\" data-task=\"9.1\"></div>\n<div class=\"task\" data-task=\"9.2\"></div>"
  },
  {
   "slug": "lesson-10",
   "number": 10,
   "title": "Mistakes and error messages",
   "html": "<p>Every programmer makes mistakes. BE stops and tells you in English: the kind of error, the line, an arrow <code>^</code> under the problem, and often the right word. Here is a misspelled variable:</p>\n<div class=\"example\" data-code=\"33\"></div>\n<div class=\"example\" data-code=\"34\"></div>\n<p><strong>The kinds of errors:</strong></p>\n<div class=\"table-scroll\"><table><tr><th>Error</th><th>What it means</th><th>A typical cause</th></tr><tr><td>Syntax error</td><td>the code is written wrongly</td><td>a missing <code>}</code> or <code>&quot;</code>, or a misspelled keyword like <code>dekhaoo</code></td></tr><tr><td>Name error</td><td>that name doesn't exist yet</td><td>a typo, or using a variable before giving it a value</td></tr><tr><td>Type error</td><td>wrong kind of value for that</td><td><code>&quot;5&quot; - 2</code> (text minus a number), or too many inputs to a function</td></tr><tr><td>Runtime error</td><td>a problem while running</td><td>dividing by 0, or <code>l[5]</code> when the list has 2 items</td></tr></table></div>\n<p><strong>How to fix an error:</strong> read the message, go to the line it names, look where the <code>^</code> points, and try the word in <em>Did you mean...?</em>. Words from English or Python get a hint too: <code>print(&quot;hi&quot;)</code> says <em>Did you mean 'dekhao'?</em>.</p>\n<p><strong>Catching mistakes.</strong> <code>chesta</code> (\"try\") runs a block, and if anything goes wrong, the <code>nahole</code> block runs instead of stopping the program. Give the mistake a name after <code>nahole</code> to read its message:</p>\n<div class=\"example\" data-code=\"35\"></div>\n<p><strong>Your own errors.</strong> <code>chhuro</code> (\"throw\") stops with your own message, for example when a value makes no sense:</p>\n<div class=\"example\" data-code=\"36\"></div>\n<div class=\"task\" data-task=\"10.1\"></div>\n<div class=\"task\" data-task=\"10.2\"></div>"
  },
  {
   "slug": "lesson-11",
   "number": 11,
   "title": "Classes",
   "html": "<p>A class (shreni, \"category\") is a plan for making objects that have their own data and their own functions. Think of <code>Manush</code> (person) as the plan, and Rahim and Mitu as two people made from it.</p>\n<ul><li><code>shreni Name { ... }</code> makes the class. Class names usually start with a capital letter.</li><li><code>kaj shuru(...)</code> (\"start\") runs when a new object is made. Use it to fill in the object's data.</li><li><code>ei</code> means \"this object\". <code>ei.nam</code> is this object's name.</li><li>Make an object by calling the class like a function: <code>Manush(&quot;Rahim&quot;)</code>.</li></ul>\n<div class=\"example\" data-code=\"37\"></div>\n<p><strong>A class built on another one.</strong> <code>shreni Chhatro theke Manush</code> makes a student class that has everything a <code>Manush</code> has, plus more. Inside it, <code>upor</code> means the parent class, so <code>upor.shuru(...)</code> runs the parent's <code>shuru</code>:</p>\n<div class=\"example\" data-code=\"38\"></div>\n<div class=\"task\" data-task=\"11.1\"></div>\n<div class=\"task\" data-task=\"11.2\"></div>"
  },
  {
   "slug": "lesson-12",
   "number": 12,
   "title": "Other files, saving files and JSON",
   "html": "<p><strong>Using another BE file.</strong> Big programs are split into several files. <code>anao</code> (\"bring\") runs another <code>.be</code> file, so its functions and variables can be used. Put both files in the same folder:</p>\n<div class=\"example\" data-code=\"39\"></div>\n<div class=\"example\" data-code=\"40\"></div>\n<p><strong>Saving and reading files</strong> (on a computer with <code>be run</code>). <code>file_lekho</code> writes a file, <code>file_jog</code> adds to the end of it, <code>file_porho</code> reads it, and <code>file_ache</code> checks whether it exists. Files are kept next to your <code>.be</code> file, so your data stays after the program ends:</p>\n<div class=\"example\" data-code=\"41\"></div>\n<p><code>\\n</code> inside text means \"new line\".</p>\n<p><strong>JSON</strong> is the text format that websites and apps use to send and save data. <code>json_banao</code> turns a value into JSON text, and <code>json_porho</code> turns JSON text back into a value:</p>\n<div class=\"example\" data-code=\"42\"></div>\n<p>Together, <code>file_lekho(&quot;data.json&quot;, json_banao(x))</code> and <code>json_porho(file_porho(&quot;data.json&quot;))</code> save a whole list or dictionary and load it back next time.</p>\n<div class=\"task\" data-task=\"12.1\"></div>\n<div class=\"task\" data-task=\"12.2\"></div>"
  },
  {
   "slug": "lesson-13",
   "number": 13,
   "title": "Apps with windows",
   "html": "<p><code>janala</code> (\"window\") makes an app window. You add text, buttons and input boxes to it, and each button runs a <code>kaj</code> when it is clicked. With <code>be run</code> the app opens as a real window on your computer; in the BE Playground it appears in the preview under the code.</p>\n<div class=\"example\" data-code=\"43\"></div>\n<p>The numbers after the title are the width and height. <code>chalao()</code> (\"run\") opens the window and keeps the app running until you close it, so put it on the last line.</p>\n<p><strong>The app words:</strong></p>\n<div class=\"table-scroll\"><table><tr><th>Words</th><th>What they do</th></tr><tr><td><code>w.lekha(lekha)</code></td><td>show text</td></tr><tr><td><code>w.botam(lekha, kaj)</code></td><td>a button that runs a kaj when clicked</td></tr><tr><td><code>w.ghor(lekha)</code></td><td>an input box; read what was typed with <code>.man()</code></td></tr><tr><td><code>w.sari()</code></td><td>a row: the things you add to it sit side by side</td></tr><tr><td><code>w.pechon(rong)</code></td><td>the window's background color</td></tr><tr><td><code>w.chabi_chap(kaj (chabi_ti) { ... })</code></td><td>run a kaj when a key is pressed</td></tr><tr><td><code>w.pore(second, kaj)</code></td><td>run a kaj after some seconds</td></tr><tr><td><code>x.bodlao(lekha)</code> / <code>x.man()</code></td><td>change / read the text of a text, button or box</td></tr><tr><td><code>x.rong(rong)</code> / <code>x.pechon(rong)</code></td><td>text color / background color, like <code>&quot;red&quot;</code> or <code>&quot;#0d6b49&quot;</code></td></tr><tr><td><code>x.akar(akar)</code> / <code>x.dane()</code></td><td>text size / put the text on the right</td></tr></table></div>\n<p>The <code>x</code> words give back the same thing, so you can chain them: <code>w.lekha(&quot;0&quot;).akar(40).rong(&quot;white&quot;)</code>.</p>\n<p><strong>Reading an input box:</strong></p>\n<div class=\"example\" data-code=\"44\"></div>\n<p><strong>Rows, colors and the keyboard.</strong> This counter has two buttons side by side in a <code>sari</code>, a dark background, and also reacts to the <code>+</code>, <code>-</code> and Esc keys:</p>\n<div class=\"example\" data-code=\"45\"></div>\n<p>Key names are the same everywhere: a letter or digit like <code>&quot;a&quot;</code> or <code>&quot;5&quot;</code>, a sign like <code>&quot;+&quot;</code>, or <code>&quot;Enter&quot;</code>, <code>&quot;Backspace&quot;</code>, <code>&quot;Escape&quot;</code>, <code>&quot;ArrowUp&quot;</code> and <code>&quot; &quot;</code> (space).</p>\n<div class=\"task\" data-task=\"13.1\"></div>\n<div class=\"task\" data-task=\"13.2\"></div>"
  },
  {
   "slug": "lesson-14",
   "number": 14,
   "title": "Websites",
   "html": "<p><code>website()</code> makes a website, and <code>.pata(...)</code> (\"page\") adds a page. Each page is a <code>kaj</code> that gives back the page's HTML, the language browsers read. The page design is HTML; everything the website does is BE.</p>\n<div class=\"example\" data-code=\"46\"></div>\n<ul><li><strong>On a computer:</strong> run it with <code>be run</code>, then open http://localhost:8000 in your browser. The terminal shows <code>BE website running at http://localhost:8000</code>. Press <strong>Ctrl+C</strong> in the terminal to stop it.</li><li><strong>In the BE Playground:</strong> the website opens in a small browser in the preview, where its links and forms work.</li></ul>\n<p><strong>What the visitor sends</strong> arrives in <code>r</code>:</p>\n<div class=\"table-scroll\"><table><tr><th>Word</th><th>What it holds</th><th>Example</th></tr><tr><td><code>r.ongsho.nam</code></td><td>a <code>:nam</code> part of the address</td><td><code>/hello/:nam</code> with <code>/hello/Mitu</code> gives <code>&quot;Mitu&quot;</code></td></tr><tr><td><code>r.ghor.lekha</code></td><td>what was typed in a form's box named <code>lekha</code></td><td><code>&lt;input name=&#x27;lekha&#x27;&gt;</code></td></tr><tr><td><code>r.prosno.page</code></td><td>the <code>?page=...</code> part of the address</td><td><code>/list?page=2</code> gives <code>&quot;2&quot;</code></td></tr><tr><td><code>r.poddhoti</code></td><td>how the page was asked for</td><td><code>&quot;GET&quot;</code> or <code>&quot;POST&quot;</code> (a form)</td></tr></table></div>\n<p><strong>A guest book with a form, a page with a name in its address, and an API.</strong> A list or dictionary given back is sent as JSON, which other apps can read:</p>\n<div class=\"example\" data-code=\"47\"></div>\n<p>After one comment, http://localhost:8000/api shows <code>{&quot;comments&quot;: [&quot;Darun website&quot;], &quot;count&quot;: 1}</code>. The <code>&quot;POST&quot;</code> after the <code>/jog</code> page means only a form can send to it, and the <code>&lt;meta ... refresh&gt;</code> answer takes the visitor back to the home page.</p>\n<p><strong>More website words:</strong></p>\n<div class=\"table-scroll\"><table><tr><th>Words</th><th>What they do</th></tr><tr><td><code>amar_site.fileguli(&quot;/static&quot;, &quot;public&quot;)</code></td><td>serve the CSS, pictures and JavaScript files in the folder <code>public</code>, at addresses starting <code>/static</code></td></tr><tr><td><code>uttor(&quot;Not found&quot;, 404)</code></td><td>an answer with its own status code</td></tr><tr><td><code>amar_site.porikkha(&quot;/about&quot;)</code></td><td>test a page without a browser: gives <code>abostha</code> (status), <code>dhoron</code> (type) and <code>lekha</code> (the page)</td></tr></table></div>\n<p>Comments are kept only while the website runs. To keep them, save them to a file (Lesson 12). To put a website online for everyone, it needs a computer or server that keeps running <code>be run</code>.</p>\n<div class=\"task\" data-task=\"14.1\"></div>\n<div class=\"task\" data-task=\"14.2\"></div>"
  },
  {
   "slug": "lesson-15",
   "number": 15,
   "title": "BE inside your own web pages",
   "html": "<p>Any HTML page can run BE, right in the browser, with no server. Copy <code>be-web.js</code> (it is in the BE folder, inside <code>playground</code>) next to your HTML file, load it with <code>&lt;script src=&quot;be-web.js&quot;&gt;&lt;/script&gt;</code>, and write BE inside <code>&lt;script type=&quot;text/be&quot;&gt;</code>. Double-click the HTML file to open it.</p>\n<p><strong>The page words.</strong> <code>khojo(&quot;#id&quot;)</code> (\"find\") finds an element of the page by its <code>id</code>, and <code>banao(&quot;li&quot;)</code> (\"make\") makes a new one. Elements then have these Banglish words:</p>\n<div class=\"table-scroll\"><table><tr><th>Words</th><th>What they do</th></tr><tr><td><code>el.bodlao(lekha)</code> / <code>el.man()</code></td><td>change its text / read its text, or what was typed in a box</td></tr><tr><td><code>el.chap(kaj)</code></td><td>run a kaj when it is clicked</td></tr><tr><td><code>el.chabi_chap(kaj (chabi_ti) { ... })</code></td><td>run a kaj when a key is pressed in it</td></tr><tr><td><code>el.jog(jinish)</code></td><td>add something inside it, such as a new element</td></tr><tr><td><code>el.muchho()</code> / <code>el.bad()</code></td><td>empty it / remove it from the page</td></tr><tr><td><code>el.chinho(&quot;nam&quot;, sotti)</code></td><td>mark it with a CSS class (<code>mittha</code> takes the mark off)</td></tr><tr><td><code>el.lukao()</code></td><td>hide it (<code>el.lukao(mittha)</code> shows it again)</td></tr><tr><td><code>el.rong(rong)</code>, <code>el.pechon(rong)</code>, <code>el.akar(akar)</code></td><td>text color, background color, text size</td></tr><tr><td><code>el.html(lekha)</code></td><td>put HTML inside it</td></tr></table></div>\n<p><strong>A quiz page.</strong> Save this as <code>quiz.html</code> next to <code>be-web.js</code> and open it:</p>\n<div class=\"example\" data-code=\"48\"></div>\n<p>Type an answer and press <strong>Check</strong> or Enter. After three questions the page shows your score, such as \"Done! You got 2 of 3.\" If your BE code has a mistake, a red box at the bottom of the page explains it.</p>\n<p>A <code>janala()</code> app or a <code>website()</code> also works on your own page: it appears inside an element with <code>id=&quot;be-app&quot;</code>, or at the end of the page.</p>\n<div class=\"task\" data-task=\"15.1\"></div>\n<div class=\"task\" data-task=\"15.2\"></div>"
  },
  {
   "slug": "projects",
   "number": null,
   "title": "Three projects",
   "html": "<p>These projects put the lessons together. Type them in yourself rather than copying, then change them to make them your own.</p>\n<h3>Project 1: a number guessing game (Lessons 1 to 5 and 10)</h3>\n<p>The computer picks a secret number with <code>elomelo(1, 50)</code> (\"random\"), and the player guesses until they find it.</p>\n<div class=\"example\" data-code=\"49\"></div>\n<p><strong>Make it yours:</strong> limit the player to 7 guesses, or let them choose the highest number.</p>\n<h3>Project 2: a calculator app (Lessons 8, 10 and 13)</h3>\n<p>Two input boxes, four buttons and an answer that turns green, or red for a mistake.</p>\n<div class=\"example\" data-code=\"50\"></div>\n<p><strong>Make it yours:</strong> add a <code>%</code> button, or a list of past answers. A full calculator with all the number buttons is in <code>examples/app/calculator.be</code>.</p>\n<h3>Project 3: a student results website (Lessons 4, 7, 8 and 14)</h3>\n<p>A teacher types a name and marks; the site works out the grade and shows a results table, plus an API at <code>/api</code>.</p>\n<div class=\"example\" data-code=\"51\"></div>\n<p>After adding Rahim (78) and Mitu (92), the table shows grades A and A+, and <code>/api</code> gives <code>[{&quot;nam&quot;: &quot;Rahim&quot;, &quot;nombor&quot;: 78}, {&quot;nam&quot;: &quot;Mitu&quot;, &quot;nombor&quot;: 92}]</code>.</p>\n<p><strong>Make it yours:</strong> save the results to a JSON file so they stay after the website stops (Lesson 12), or show the class average under the table.</p>"
  },
  {
   "slug": "reference",
   "number": null,
   "title": "Quick reference",
   "html": "<p>Every word in BE on one page. Keep it next to you while you code.</p>\n<p><strong>Keywords</strong></p>\n<div class=\"table-scroll\"><table><tr><th>Keyword</th><th>Meaning</th><th>Example</th></tr><tr><td><code>dhoro</code></td><td>make a variable (optional)</td><td><code>dhoro x = 5</code></td></tr><tr><td><code>dekhao</code></td><td>show (print)</td><td><code>dekhao &quot;Hello&quot;, x</code></td></tr><tr><td><code>jodi</code> / <code>tahole</code> / <code>nahole</code></td><td>if / then (optional) / otherwise</td><td><code>jodi x &gt; 5 { ... } nahole { ... }</code></td></tr><tr><td><code>jotokkhon</code></td><td>as long as (while)</td><td><code>jotokkhon x &lt; 10 { ... }</code></td></tr><tr><td><code>ghuro ... bar</code></td><td>repeat a number of times</td><td><code>ghuro 3 bar { ... }</code></td></tr><tr><td><code>ghuro ... theke</code>, <code>porjonto</code>, <code>dhap</code></td><td>count from, up to (optional), in steps of</td><td><code>ghuro i = 0 theke 10 dhap 2 { ... }</code></td></tr><tr><td><code>protiti ... theke</code></td><td>for each item of</td><td><code>protiti f fol_guli theke { ... }</code></td></tr><tr><td><code>thamo</code> / <code>agao</code></td><td>stop the loop / go to the next round</td><td><code>thamo</code></td></tr><tr><td><code>kaj</code> / <code>ferot</code></td><td>function / give a result back</td><td><code>kaj jog(a, b) { ferot a + b }</code></td></tr><tr><td><code>shreni</code>, <code>ei</code>, <code>upor</code></td><td>class, this object, the parent class</td><td><code>shreni Chhatro theke Manush { ... }</code></td></tr><tr><td><code>chesta ... nahole</code></td><td>try / if it goes wrong</td><td><code>chesta { ... } nahole bhul { ... }</code></td></tr><tr><td><code>chhuro</code></td><td>raise your own error</td><td><code>chhuro &quot;Too big&quot;</code></td></tr><tr><td><code>anao</code></td><td>bring in another file</td><td><code>anao &quot;hishab.be&quot;</code></td></tr><tr><td><code>sotti</code> / <code>mittha</code> / <code>kichuna</code></td><td>true / false / nothing</td><td><code>dhoro thik = sotti</code></td></tr><tr><td><code>ebong</code> / <code>othoba</code> / <code>na</code></td><td>and / or / not</td><td><code>jodi a ebong na b { ... }</code></td></tr><tr><td><code>moddhe</code></td><td>is inside</td><td><code>&quot;a&quot; moddhe [&quot;a&quot;, &quot;b&quot;]</code></td></tr></table></div>\n<p><strong>Ready-made functions</strong></p>\n<div class=\"table-scroll\"><table><tr><th>Function</th><th>What it does</th></tr><tr><td><code>lomba(x)</code></td><td>length of text, a list or a dictionary</td></tr><tr><td><code>jiggesh(prosno)</code></td><td>ask the user, gives back text</td></tr><tr><td><code>shonkha(x)</code> / <code>lekha(x)</code></td><td>to a number / to text</td></tr><tr><td><code>dhoron(x)</code></td><td>the kind of value: <code>number</code>, <code>text</code>, <code>list</code>, ...</td></tr><tr><td><code>jukto(talika, x)</code> / <code>bad_dao(talika)</code></td><td>add to the end / remove the last item (or one position)</td></tr><tr><td><code>boro(...)</code> / <code>choto(...)</code> / <code>jogfol(talika)</code></td><td>biggest / smallest / total</td></tr><tr><td><code>shajao(talika)</code> / <code>ulta(x)</code></td><td>sorted copy (<code>shajao(talika, kaj)</code> sorts by anything) / backwards</td></tr><tr><td><code>bhag(lekha, chinho)</code> / <code>jora(talika, chinho)</code></td><td>split text / join a list</td></tr><tr><td><code>bodlao(lekha, ager, notun)</code></td><td>replace</td></tr><tr><td><code>boro_hater(t)</code> / <code>choto_hater(t)</code> / <code>parishkar(t)</code></td><td>CAPITALS / small letters / trim spaces</td></tr><tr><td><code>kothay(x, jinish)</code></td><td>position of an item, or -1</td></tr><tr><td><code>chabi(d)</code> / <code>man(d)</code></td><td>keys / values of a dictionary</td></tr><tr><td><code>gol(x, digits)</code>, <code>borgomul(x)</code>, <code>poromman(x)</code>, <code>elomelo(a, b)</code></td><td>round, square root, absolute value, random whole number</td></tr><tr><td><code>json_banao(x)</code> / <code>json_porho(lekha)</code></td><td>to JSON text / from JSON text</td></tr><tr><td><code>shomoy()</code></td><td>current time in seconds</td></tr></table></div>\n<p><strong>Apps</strong> (<code>janala</code>, Lesson 13): <code>w.lekha</code>, <code>w.botam</code>, <code>w.ghor</code>, <code>w.sari</code>, <code>w.pechon</code>, <code>w.chabi_chap</code>, <code>w.pore</code>, <code>w.chalao</code>, <code>w.bondho</code>, and on each text, button or box <code>bodlao</code>, <code>man</code>, <code>rong</code>, <code>pechon</code>, <code>akar</code>, <code>dane</code>.</p>\n<p><strong>Websites</strong> (<code>website()</code>, Lesson 14): <code>.pata</code>, <code>.fileguli</code>, <code>.porikkha</code>, <code>.chalao</code>, <code>uttor(...)</code>, and in each request <code>r.ongsho</code>, <code>r.ghor</code>, <code>r.prosno</code>, <code>r.thikana</code>, <code>r.poddhoti</code>, <code>r.json</code>, <code>r.lekha</code>.</p>\n<p><strong>Web pages</strong> (<code>be-web.js</code>, Lesson 15): <code>khojo</code>, <code>shob_khojo</code>, <code>banao</code>, <code>pore</code>, and on each element <code>bodlao</code>, <code>man</code>, <code>html</code>, <code>chap</code>, <code>chabi_chap</code>, <code>jog</code>, <code>muchho</code>, <code>bad</code>, <code>chinho</code>, <code>lukao</code>, <code>rong</code>, <code>pechon</code>, <code>akar</code>.</p>\n<p>**Only with <code>be run</code> on a computer:** <code>file_porho</code>, <code>file_lekho</code>, <code>file_jog</code>, <code>file_ache</code> (files), <code>web_theke(url)</code> (download), <code>ghumao(second)</code> (wait).</p>\n<p><strong>Signs:</strong> <code>+ - * / %</code> (math), <code>== != &lt; &gt; &lt;= &gt;=</code> (compare), <code>= += -= *= /=</code> (give a value), <code>&quot;{x}&quot;</code> (a value inside text), <code>#</code> (comment), <code>\\{</code> (a plain brace inside text).</p>"
  },
  {
   "slug": "teachers",
   "number": null,
   "title": "For teachers",
   "html": "<p>This plan teaches the whole course in 10 sessions of about 1 hour. Students need only a browser: everything runs in the BE Playground, except Lesson 12's files, which need <code>be run</code> on a computer.</p>\n<div class=\"table-scroll\"><table><tr><th>Day</th><th>Lessons</th><th>In class</th><th>Homework</th></tr><tr><td>1</td><td>1, 2</td><td>Hello world, variables, math, values inside text</td><td>Try it 1.1 to 2.2</td></tr><tr><td>2</td><td>3, 4</td><td>Asking the user, decisions, grades</td><td>Try it 3.1 to 4.2</td></tr><tr><td>3</td><td>5</td><td>All four loops, the multiplication table</td><td>Try it 5.1, 5.2</td></tr><tr><td>4</td><td>6, 7</td><td>Lists and dictionaries, a shopping list</td><td>Try it 6.1 to 7.2</td></tr><tr><td>5</td><td>8</td><td>Functions, inputs, <code>ferot</code></td><td>Try it 8.1, 8.2</td></tr><tr><td>6</td><td>9, 10</td><td>Text tools, reading errors, <code>chesta</code></td><td>Try it 9.1 to 10.2; Project 1 (guessing game)</td></tr><tr><td>7</td><td>11, 12</td><td>Classes, files and JSON</td><td>Try it 11.1 to 12.2</td></tr><tr><td>8</td><td>13</td><td>Apps with windows</td><td>Try it 13.1, 13.2; Project 2 (calculator)</td></tr><tr><td>9</td><td>14, 15</td><td>Websites and web pages</td><td>Try it 14.1 to 15.2</td></tr><tr><td>10</td><td>Projects</td><td>Each student builds and shows their own project</td><td>Project 3, or their own idea</td></tr></table></div>\n<p><strong>Tips:</strong></p>\n<ul><li>Let students type the examples themselves instead of copying. Typing is how the words stick.</li><li>When an error appears, read it aloud together: the kind of error, the line, the <code>^</code>, and the <em>Did you mean</em> hint. Learning to read errors is half of programming.</li><li>Encourage Banglish names that mean something: <code>mot_taka</code> beats <code>x</code>.</li><li>Day 10 works best as a small show: each student presents an app, website or game they made.</li></ul>"
  }
 ],
 "codes": [
  {
   "code": "dekhao \"Hello, Bangladesh!\"\ndekhao \"Amar nam Shuvo\"",
   "kind": "be",
   "output": "Hello, Bangladesh!\nAmar nam Shuvo"
  },
  {
   "code": "dekhao 25\ndekhao 10 + 5\ndekhao \"10 + 5\"",
   "kind": "be",
   "output": "25\n15\n10 + 5"
  },
  {
   "code": "dekhao \"Age:\", 22, \"years\"",
   "kind": "be",
   "output": "Age: 22 years"
  },
  {
   "code": "# This program says hello\ndekhao \"Hello!\"     # a comment can also go at the end of a line",
   "kind": "be",
   "output": "Hello!"
  },
  {
   "code": "dhoro amar_nam = \"Shuvo\"\ndhoro boyosh = 22\ndekhao amar_nam\ndekhao boyosh",
   "kind": "be",
   "output": "Shuvo\n22"
  },
  {
   "code": "dhoro taka = 100\ntaka = taka + 50\ndekhao taka\ntaka -= 30\ntaka *= 2\ndekhao taka",
   "kind": "be",
   "output": "150\n240"
  },
  {
   "code": "dekhao 2 + 3 * 4\ndekhao (2 + 3) * 4",
   "kind": "be",
   "output": "14\n20"
  },
  {
   "code": "dhoro nam = \"Mitu\"\ndhoro boyosh = 19\ndekhao \"Amar nam {nam}. Next year I will be {boyosh + 1}.\"",
   "kind": "be",
   "output": "Amar nam Mitu. Next year I will be 20."
  },
  {
   "code": "dekhao dhoron(22), dhoron(5.5), dhoron(\"Shuvo\"), dhoron(sotti), dhoron(kichuna)",
   "kind": "be",
   "output": "number number text boolean null"
  },
  {
   "code": "dhoro nam = jiggesh(\"What is your name? \")\ndekhao \"Hello, {nam}!\"",
   "kind": "be",
   "output": "What is your name? Rahim\nHello, Rahim!",
   "answers": [
    "Rahim"
   ]
  },
  {
   "code": "dhoro jonmo = shonkha(jiggesh(\"Which year were you born? \"))\ndhoro boyosh = 2026 - jonmo\ndekhao \"You are {boyosh} years old.\"\ndekhao lekha(boyosh) + \" years\"",
   "kind": "be",
   "output": "Which year were you born? 1998\nYou are 28 years old.\n28 years",
   "answers": [
    "1998"
   ]
  },
  {
   "code": "dhoro boyosh = 20\njodi boyosh >= 18 {\n    dekhao \"You can vote.\"\n} nahole {\n    dekhao \"Not yet.\"\n}",
   "kind": "be",
   "output": "You can vote."
  },
  {
   "code": "dhoro nombor = 78\njodi nombor >= 80 {\n    dekhao \"Grade: A+\"\n} nahole jodi nombor >= 70 {\n    dekhao \"Grade: A\"\n} nahole jodi nombor >= 33 {\n    dekhao \"Grade: Pass\"\n} nahole {\n    dekhao \"Grade: Fail\"\n}",
   "kind": "be",
   "output": "Grade: A"
  },
  {
   "code": "dhoro boyosh = 20\ndhoro nid_ache = sotti\njodi boyosh >= 18 ebong nid_ache {\n    dekhao \"You can get a driving licence.\"\n}\njodi boyosh < 12 othoba boyosh > 60 {\n    dekhao \"Half price ticket\"\n} nahole {\n    dekhao \"Full price ticket\"\n}\njodi na nid_ache {\n    dekhao \"Make your NID card first.\"\n}",
   "kind": "be",
   "output": "You can get a driving licence.\nFull price ticket"
  },
  {
   "code": "ghuro 3 bar {\n    dekhao \"BE is fun\"\n}",
   "kind": "be",
   "output": "BE is fun\nBE is fun\nBE is fun"
  },
  {
   "code": "ghuro i = 1 theke 5 {\n    dekhao \"Round\", i\n}\nghuro i = 0 theke 10 dhap 5 {\n    dekhao i\n}\nghuro i = 3 theke 1 {\n    dekhao i, \"...\"\n}",
   "kind": "be",
   "output": "Round 1\nRound 2\nRound 3\nRound 4\nRound 5\n0\n5\n10\n3 ...\n2 ...\n1 ..."
  },
  {
   "code": "dhoro taka = 1\ndhoro din = 0\njotokkhon taka < 1000 {\n    taka = taka * 2\n    din += 1\n}\ndekhao \"After {din} days: {taka} taka\"",
   "kind": "be",
   "output": "After 10 days: 1024 taka"
  },
  {
   "code": "dhoro fol_guli = [\"mango\", \"jackfruit\", \"lychee\"]\nprotiti f fol_guli theke {\n    dekhao \"I like\", f\n}",
   "kind": "be",
   "output": "I like mango\nI like jackfruit\nI like lychee"
  },
  {
   "code": "ghuro i = 1 theke 10 {\n    jodi i == 3 {\n        agao\n    }\n    jodi i == 6 {\n        thamo\n    }\n    dekhao i\n}",
   "kind": "be",
   "output": "1\n2\n4\n5"
  },
  {
   "code": "dhoro nombor = [45, 82, 67, 91]\ndekhao nombor\ndekhao \"First:\", nombor[0], \"Last:\", nombor[-1]\ndekhao \"How many:\", lomba(nombor)",
   "kind": "be",
   "output": "[45, 82, 67, 91]\nFirst: 45 Last: 91\nHow many: 4"
  },
  {
   "code": "dhoro bajar = [\"chal\", \"dal\"]\njukto(bajar, \"tel\")\ndekhao bajar\nbajar[0] = \"atta\"\ndekhao bajar\ndhoro bad = bad_dao(bajar)\ndekhao \"Removed:\", bad, \"Left:\", bajar",
   "kind": "be",
   "output": "[\"chal\", \"dal\", \"tel\"]\n[\"atta\", \"dal\", \"tel\"]\nRemoved: tel Left: [\"atta\", \"dal\"]"
  },
  {
   "code": "dhoro nombor = [45, 82, 67, 91]\ndekhao \"Total:\", jogfol(nombor), \"Average:\", jogfol(nombor) / lomba(nombor)\ndekhao \"Sorted:\", shajao(nombor)\nprotiti n nombor theke {\n    jodi n >= 80 {\n        dekhao n, \"is A+\"\n    }\n}",
   "kind": "be",
   "output": "Total: 285 Average: 71.25\nSorted: [45, 67, 82, 91]\n82 is A+\n91 is A+"
  },
  {
   "code": "dhoro chhatro = {\"nam\": \"Shuvo\", \"boyosh\": 22, \"shohor\": \"Dhaka\"}\ndekhao chhatro[\"nam\"]\ndekhao chhatro.boyosh",
   "kind": "be",
   "output": "Shuvo\n22"
  },
  {
   "code": "dhoro chhatro = {\"nam\": \"Shuvo\", \"boyosh\": 22}\nchhatro[\"university\"] = \"NSU\"\nchhatro.boyosh = 23\ndekhao chhatro\ndekhao \"Has a university?\", \"university\" moddhe chhatro",
   "kind": "be",
   "output": "{\"nam\": \"Shuvo\", \"boyosh\": 23, \"university\": \"NSU\"}\nHas a university? true"
  },
  {
   "code": "dhoro dam = {\"chal\": 70, \"dal\": 120, \"tel\": 180}\nprotiti jinish dam theke {\n    dekhao jinish, \"costs\", dam[jinish], \"taka\"\n}\ndekhao \"Total:\", jogfol(man(dam))",
   "kind": "be",
   "output": "chal costs 70 taka\ndal costs 120 taka\ntel costs 180 taka\nTotal: 370"
  },
  {
   "code": "dhoro class_list = [\n    {\"nam\": \"Rahim\", \"nombor\": 78},\n    {\"nam\": \"Mitu\", \"nombor\": 92}\n]\nprotiti chhatro class_list theke {\n    dekhao \"{chhatro.nam}: {chhatro.nombor}\"\n}",
   "kind": "be",
   "output": "Rahim: 78\nMitu: 92"
  },
  {
   "code": "kaj shubhechha(nam) {\n    dekhao \"Good morning, {nam}!\"\n}\nshubhechha(\"Rahim\")\nshubhechha(\"Mitu\")",
   "kind": "be",
   "output": "Good morning, Rahim!\nGood morning, Mitu!"
  },
  {
   "code": "kaj jog(a, b) {\n    ferot a + b\n}\ndhoro fol = jog(5, 7)\ndekhao \"5 + 7 =\", fol\ndekhao jog(10, jog(1, 2))",
   "kind": "be",
   "output": "5 + 7 = 12\n13"
  },
  {
   "code": "kaj obhibadon(nam, shuru = \"Hello\") {\n    ferot \"{shuru}, {nam}!\"\n}\ndekhao obhibadon(\"Shuvo\")\ndekhao obhibadon(\"Shuvo\", \"Assalamu alaikum\")\ndekhao obhibadon(shuru = \"Hi\", nam = \"Mitu\")",
   "kind": "be",
   "output": "Hello, Shuvo!\nAssalamu alaikum, Shuvo!\nHi, Mitu!"
  },
  {
   "code": "kaj kromogun(n) {\n    jodi n <= 1 {\n        ferot 1\n    }\n    ferot n * kromogun(n - 1)\n}\ndekhao \"5! =\", kromogun(5)",
   "kind": "be",
   "output": "5! = 120"
  },
  {
   "code": "dhoro dui_gun = kaj (x) { ferot x * 2 }\ndekhao dui_gun(21)\n\ndhoro manush = [{\"nam\": \"Rahim\", \"boyosh\": 30}, {\"nam\": \"Mitu\", \"boyosh\": 19}]\nprotiti m shajao(manush, kaj (m) { ferot m.boyosh }) theke {\n    dekhao m.nam, m.boyosh\n}",
   "kind": "be",
   "output": "42\nMitu 19\nRahim 30"
  },
  {
   "code": "dhoro bakko = \"  apple, banana, mango  \"\ndhoro fol_guli = bhag(parishkar(bakko), \", \")\ndekhao fol_guli, \"count:\", lomba(fol_guli)\ndekhao jora(fol_guli, \" + \")\ndekhao boro_hater(fol_guli[0])\n\ndhoro email = \"shuvo@example.com\"\njodi \"@\" moddhe email {\n    dekhao \"Looks like an email\"\n}",
   "kind": "be",
   "output": "[\"apple\", \"banana\", \"mango\"] count: 3\napple + banana + mango\nAPPLE\nLooks like an email"
  },
  {
   "code": "dekhao \"body \\{ color: green; \\}\"",
   "kind": "be",
   "output": "body { color: green; }"
  },
  {
   "code": "dhoro boyosh = 22\ndekhao boyos",
   "kind": "be"
  },
  {
   "code": "Name error (line 2): 'boyos' is not defined. Did you mean 'boyosh'? [hello.be]\n    dekhao boyos\n           ^",
   "kind": "error"
  },
  {
   "code": "ghuro 2 bar {\n    dhoro uttor = jiggesh(\"Your age? \")\n    chesta {\n        dhoro boyosh = shonkha(uttor)\n        dekhao \"Next year you will be {boyosh + 1}.\"\n    } nahole bhul {\n        dekhao \"Oops:\", bhul\n    }\n}",
   "kind": "be",
   "output": "Your age? abc\nOops: \"abc\" can't be turned into a number.\nYour age? 25\nNext year you will be 26.",
   "answers": [
    "abc",
    "25"
   ]
  },
  {
   "code": "kaj boyosh_dao(boyosh) {\n    jodi boyosh < 0 {\n        chhuro \"Age can't be negative\"\n    }\n    ferot boyosh\n}\nchesta {\n    boyosh_dao(-5)\n} nahole bhul {\n    dekhao \"Error:\", bhul\n}",
   "kind": "be",
   "output": "Error: Age can't be negative"
  },
  {
   "code": "shreni Manush {\n    kaj shuru(nam, boyosh) {\n        ei.nam = nam\n        ei.boyosh = boyosh\n    }\n    kaj parichoy() {\n        ferot \"Hi, I am {ei.nam}, {ei.boyosh} years old.\"\n    }\n    kaj jonmodin() {\n        ei.boyosh += 1\n    }\n}\n\ndhoro rahim = Manush(\"Rahim\", 30)\ndhoro mitu = Manush(\"Mitu\", 19)\nmitu.jonmodin()\ndekhao rahim.parichoy()\ndekhao mitu.parichoy()\ndekhao dhoron(rahim)",
   "kind": "be",
   "output": "Hi, I am Rahim, 30 years old.\nHi, I am Mitu, 20 years old.\nManush"
  },
  {
   "code": "shreni Manush {\n    kaj shuru(nam) {\n        ei.nam = nam\n    }\n    kaj parichoy() {\n        ferot \"I am {ei.nam}\"\n    }\n}\n\nshreni Chhatro theke Manush {\n    kaj shuru(nam, school) {\n        upor.shuru(nam)\n        ei.school = school\n    }\n    kaj parichoy() {\n        ferot upor.parichoy() + \", a student at {ei.school}\"\n    }\n}\n\ndhoro shuvo = Chhatro(\"Shuvo\", \"NSU\")\ndekhao shuvo.parichoy()",
   "kind": "be",
   "output": "I am Shuvo, a student at NSU"
  },
  {
   "code": "# hishab.be - functions for other files\nkaj borgo(x) {\n    ferot x * x\n}\nkaj gor(talika) {\n    ferot jogfol(talika) / lomba(talika)\n}",
   "kind": "be",
   "file": "hishab.be"
  },
  {
   "code": "# main.be\nanao \"hishab.be\"\ndekhao \"Square of 7:\", borgo(7)\ndekhao \"Average:\", gor([10, 20, 30, 40])",
   "kind": "be",
   "file": "main.be",
   "output": "Square of 7: 49\nAverage: 25"
  },
  {
   "code": "file_lekho(\"bajar.txt\", \"chal\\n\")\nfile_jog(\"bajar.txt\", \"dal\\n\")\ndekhao \"File exists?\", file_ache(\"bajar.txt\")\ndhoro shob = file_porho(\"bajar.txt\")\nprotiti jinish bhag(parishkar(shob), \"\\n\") theke {\n    dekhao \"Buy:\", jinish\n}",
   "kind": "be",
   "output": "File exists? true\nBuy: chal\nBuy: dal"
  },
  {
   "code": "dhoro chhatro = {\"nam\": \"Shuvo\", \"nombor\": [80, 92], \"shokriyo\": sotti}\ndhoro json_lekha = json_banao(chhatro)\ndekhao json_lekha\ndhoro ferot_elo = json_porho(json_lekha)\ndekhao ferot_elo.nam, ferot_elo.nombor[1]",
   "kind": "be",
   "output": "{\"nam\":\"Shuvo\",\"nombor\":[80,92],\"shokriyo\":true}\nShuvo 92"
  },
  {
   "code": "dhoro amar_janala = janala(\"Amar App\", 320, 200)\ndhoro lekha_ti = amar_janala.lekha(\"Hello!\").akar(18)\namar_janala.botam(\"Click me\", kaj () {\n    lekha_ti.bodlao(\"You clicked the button!\").rong(\"green\")\n})\namar_janala.chalao()",
   "kind": "be"
  },
  {
   "code": "dhoro amar_janala = janala(\"Greeting\", 340, 240)\namar_janala.lekha(\"Your name:\")\ndhoro nam_ghor = amar_janala.ghor(\"\")\ndhoro uttor = amar_janala.lekha(\"\")\namar_janala.botam(\"Say hello\", kaj () {\n    dhoro nam = parishkar(nam_ghor.man())\n    jodi nam == \"\" {\n        uttor.bodlao(\"Type your name first\").rong(\"red\")\n    } nahole {\n        uttor.bodlao(\"Hello, {nam}!\").rong(\"green\")\n    }\n})\namar_janala.chalao()",
   "kind": "be"
  },
  {
   "code": "dhoro amar_janala = janala(\"Counter\", 320, 220)\namar_janala.pechon(\"#16201b\")\ndhoro gona = 0\ndhoro porda = amar_janala.lekha(\"0\").akar(40).rong(\"white\").dane()\n\nkaj dekhao_gona() {\n    porda.bodlao(lekha(gona))\n}\n\ndhoro sari = amar_janala.sari()\nsari.botam(\"- 1\", kaj () {\n    gona -= 1\n    dekhao_gona()\n})\nsari.botam(\"+ 1\", kaj () {\n    gona += 1\n    dekhao_gona()\n}).pechon(\"#0d6b49\").rong(\"white\")\n\namar_janala.chabi_chap(kaj (chabi_ti) {\n    jodi chabi_ti == \"+\" { gona += 1 }\n    jodi chabi_ti == \"-\" { gona -= 1 }\n    jodi chabi_ti == \"Escape\" { gona = 0 }\n    dekhao_gona()\n})\namar_janala.chalao()",
   "kind": "be"
  },
  {
   "code": "dhoro amar_site = website()\n\namar_site.pata(\"/\", kaj (r) {\n    ferot \"<h1>Amar website</h1><p>Welcome!</p><a href='/about'>About me</a>\"\n})\n\namar_site.pata(\"/about\", kaj (r) {\n    ferot \"<h1>About me</h1><p>I am learning BE.</p><a href='/'>Home</a>\"\n})\n\namar_site.chalao(8000)",
   "kind": "be"
  },
  {
   "code": "dhoro amar_site = website()\ndhoro montobbo = []\n\nkaj pata_banao(shironam, bhitor) {\n    ferot \"<!doctype html><html><head><meta charset='utf-8'><title>{shironam}</title></head>\"\n        + \"<body><h1>{shironam}</h1>{bhitor}</body></html>\"\n}\n\namar_site.pata(\"/\", kaj (r) {\n    dhoro talika = \"\"\n    protiti m montobbo theke {\n        talika += \"<li>{m}</li>\"\n    }\n    dhoro form = \"<form method='post' action='/jog'>\"\n        + \"<input name='lekha' placeholder='Write a comment'> <button>Send</button></form>\"\n    ferot pata_banao(\"Guest book\", form + \"<ul>{talika}</ul>\")\n})\n\namar_site.pata(\"/jog\", kaj (r) {\n    dhoro notun = parishkar(r.ghor.lekha)\n    jodi notun != \"\" {\n        jukto(montobbo, notun)\n    }\n    ferot \"<meta http-equiv='refresh' content='0; url=/'>Saved\"\n}, \"POST\")\n\namar_site.pata(\"/hello/:nam\", kaj (r) {\n    ferot pata_banao(\"Hello\", \"<p>Hello, {r.ongsho.nam}!</p>\")\n})\n\namar_site.pata(\"/api\", kaj (r) {\n    ferot {\"comments\": montobbo, \"count\": lomba(montobbo)}\n})\n\namar_site.chalao(8000)",
   "kind": "be"
  },
  {
   "code": "<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>BE Quiz</title>\n<style>\n  .thik { color: green; }\n  .bhul { color: red; }\n</style>\n</head>\n<body>\n  <h1>Quick quiz</h1>\n  <p id=\"prosno\"></p>\n  <input id=\"uttor\" placeholder=\"Your answer\">\n  <button id=\"check\">Check</button>\n  <p id=\"fol\"></p>\n  <ul id=\"itihash\"></ul>\n\n  <script src=\"be-web.js\"></script>\n  <script type=\"text/be\">\n    dhoro prosno_guli = [\n        {\"prosno\": \"What is 7 x 8?\", \"uttor\": \"56\"},\n        {\"prosno\": \"Capital of Bangladesh?\", \"uttor\": \"dhaka\"},\n        {\"prosno\": \"How many days in a week?\", \"uttor\": \"7\"}\n    ]\n    dhoro ekhon = 0\n    dhoro thik_koyta = 0\n\n    kaj prosno_dekhao() {\n        jodi ekhon < lomba(prosno_guli) {\n            khojo(\"#prosno\").bodlao(prosno_guli[ekhon].prosno)\n        } nahole {\n            khojo(\"#prosno\").bodlao(\"Done! You got {thik_koyta} of {lomba(prosno_guli)}.\")\n            khojo(\"#check\").lukao()\n            khojo(\"#uttor\").lukao()\n        }\n    }\n\n    kaj check_koro() {\n        dhoro dilo = choto_hater(parishkar(khojo(\"#uttor\").man()))\n        dhoro thik = dilo == prosno_guli[ekhon].uttor\n        jodi thik {\n            thik_koyta += 1\n            khojo(\"#fol\").bodlao(\"Correct!\").chinho(\"thik\").chinho(\"bhul\", mittha)\n        } nahole {\n            khojo(\"#fol\").bodlao(\"Not quite. The answer is {prosno_guli[ekhon].uttor}.\").chinho(\"bhul\").chinho(\"thik\", mittha)\n        }\n        khojo(\"#itihash\").jog(banao(\"li\").bodlao(prosno_guli[ekhon].prosno + \" \" + dilo))\n        khojo(\"#uttor\").muchho()\n        ekhon += 1\n        prosno_dekhao()\n    }\n\n    khojo(\"#check\").chap(kaj () { check_koro() })\n    khojo(\"#uttor\").chabi_chap(kaj (chabi_ti) {\n        jodi chabi_ti == \"Enter\" { check_koro() }\n    })\n    prosno_dekhao()\n  </script>\n</body>\n</html>",
   "kind": "html"
  },
  {
   "code": "dhoro gopon = elomelo(1, 50)\ndhoro koybar = 0\n\ndekhao \"I am thinking of a number from 1 to 50.\"\n\njotokkhon sotti {\n    dhoro uttor = jiggesh(\"Your guess? \")\n    jodi uttor == \"\" {\n        dekhao \"No answer. Game over.\"\n        thamo\n    }\n\n    # A wrong answer doesn't stop the program: chesta catches the mistake\n    chesta {\n        anuman = shonkha(uttor)\n    } nahole {\n        dekhao \"'{uttor}' is not a number. Try again.\"\n        agao\n    }\n    koybar += 1\n\n    jodi anuman < gopon {\n        dekhao \"Higher!\"\n    } nahole jodi anuman > gopon {\n        dekhao \"Lower!\"\n    } nahole {\n        dekhao \"Correct! You got it in {koybar} tries.\"\n        thamo\n    }\n}",
   "kind": "be"
  },
  {
   "code": "dhoro amar_janala = janala(\"Simple Calculator\", 340, 330)\n\namar_janala.lekha(\"First number:\")\ndhoro prothom_ghor = amar_janala.ghor(\"\")\n\namar_janala.lekha(\"Second number:\")\ndhoro ditiyo_ghor = amar_janala.ghor(\"\")\n\ndhoro fol_lekha = amar_janala.lekha(\"Answer:\").akar(16)\n\n# Work out the answer for one sign: + - × ÷\nkaj hisab_koro(chinho) {\n    chesta {\n        dhoro a = shonkha(prothom_ghor.man())\n        dhoro b = shonkha(ditiyo_ghor.man())\n        dhoro fol = 0\n        jodi chinho == \"+\" { fol = a + b }\n        jodi chinho == \"-\" { fol = a - b }\n        jodi chinho == \"×\" { fol = a * b }\n        jodi chinho == \"÷\" {\n            jodi b == 0 {\n                chhuro \"Can't divide by 0\"\n            }\n            fol = a / b\n        }\n        fol_lekha.bodlao(\"Answer: {a} {chinho} {b} = {gol(fol, 4)}\").rong(\"green\")\n    } nahole bhul {\n        fol_lekha.bodlao(\"Error: {bhul}\").rong(\"red\")\n    }\n}\n\n# One row with four buttons\ndhoro sari = amar_janala.sari()\nprotiti chinho [\"+\", \"-\", \"×\", \"÷\"] theke {\n    sari.botam(chinho, kaj () { hisab_koro(chinho) })\n}\n\namar_janala.chalao()",
   "kind": "be"
  },
  {
   "code": "# result.be - a student result website\ndhoro amar_site = website()\ndhoro folafol = []          # every result: {\"nam\": ..., \"nombor\": ...}\n\nkaj grade(nombor) {\n    jodi nombor >= 80 { ferot \"A+\" }\n    jodi nombor >= 70 { ferot \"A\" }\n    jodi nombor >= 60 { ferot \"A-\" }\n    jodi nombor >= 33 { ferot \"Pass\" }\n    ferot \"Fail\"\n}\n\nkaj pata_banao(bhitor) {\n    ferot \"<!doctype html><html><head><meta charset='utf-8'><title>Results</title>\"\n        + \"<style>body \\{ font-family: sans-serif; max-width: 520px; margin: 40px auto; \\}</style>\"\n        + \"</head><body><h1>Student results</h1>{bhitor}</body></html>\"\n}\n\namar_site.pata(\"/\", kaj (r) {\n    dhoro sari_guli = \"\"\n    protiti f folafol theke {\n        sari_guli += \"<tr><td>{f.nam}</td><td>{f.nombor}</td><td>{grade(f.nombor)}</td></tr>\"\n    }\n    dhoro form = \"<form method='post' action='/jog'>\"\n        + \"<input name='nam' placeholder='Name'> <input name='nombor' placeholder='Marks'> \"\n        + \"<button>Add</button></form>\"\n    ferot pata_banao(form + \"<table><tr><th>Name</th><th>Marks</th><th>Grade</th></tr>{sari_guli}</table>\")\n})\n\namar_site.pata(\"/jog\", kaj (r) {\n    chesta {\n        dhoro nombor = shonkha(r.ghor.nombor)\n        jukto(folafol, {\"nam\": parishkar(r.ghor.nam), \"nombor\": nombor})\n        ferot \"<meta http-equiv='refresh' content='0; url=/'>Saved\"\n    } nahole bhul {\n        ferot uttor(pata_banao(\"<p>Marks must be a number. <a href='/'>Go back</a></p>\"), 400)\n    }\n}, \"POST\")\n\namar_site.pata(\"/api\", kaj (r) {\n    ferot folafol\n})\n\namar_site.chalao(8000)",
   "kind": "be",
   "file": "result.be"
  }
 ],
 "tasks": {
  "1.1": {
   "prompt": "Write a program that shows your name on the first line and your city on the second.",
   "lines": 2,
   "starter": "# Show your name on the first line and your city on the second\n",
   "answer": {
    "before": "",
    "code": "dekhao \"Shuvo\"\ndekhao \"Dhaka\"",
    "note": ""
   }
  },
  "1.2": {
   "prompt": "Show the answer to 7 × 8. (In code, multiply is <code>*</code>.)",
   "cases": [
    {
     "same": true
    }
   ],
   "starter": "# Show the answer to 7 x 8\n",
   "answer": {
    "before": "",
    "code": "dekhao 7 * 8",
    "note": ""
   }
  },
  "2.1": {
   "prompt": "Make variables <code>dorja</code> (length) = 8 and <code>prostho</code> (width) = 5, and show \"Area: 40\" using <code>{ }</code>.",
   "cases": [
    {
     "same": true
    }
   ],
   "uses": [
    "{"
   ],
   "starter": "dhoro dorja = 8\ndhoro prostho = 5\n# Show \"Area: 40\" using { }\n",
   "answer": {
    "before": "",
    "code": "dhoro dorja = 8\ndhoro prostho = 5\ndekhao \"Area: {dorja * prostho}\"",
    "note": ""
   }
  },
  "2.2": {
   "prompt": "A shirt costs 450 taka. Show the price of 3 shirts, then the price after a 50 taka discount.",
   "cases": [
    {
     "want": [
      "1350",
      "1300"
     ]
    }
   ],
   "starter": "dhoro dam = 450\n",
   "answer": {
    "before": "",
    "code": "dhoro dam = 450\ndhoro mot = dam * 3\ndekhao \"3 shirts:\", mot, \"taka\"\ndekhao \"After discount:\", mot - 50, \"taka\"",
    "note": ""
   }
  },
  "3.1": {
   "prompt": "Ask for two numbers and show their total.",
   "cases": [
    {
     "inputs": [
      "12",
      "30"
     ],
     "want": [
      "42"
     ]
    },
    {
     "inputs": [
      "5",
      "7"
     ],
     "want": [
      "12"
     ]
    }
   ],
   "uses": [
    "jiggesh"
   ],
   "starter": "# Ask for two numbers with jiggesh, and show their total\n",
   "answer": {
    "before": "",
    "code": "dhoro a = shonkha(jiggesh(\"First number? \"))\ndhoro b = shonkha(jiggesh(\"Second number? \"))\ndekhao \"Total:\", a + b",
    "note": ""
   }
  },
  "3.2": {
   "prompt": "Ask for a price in taka and show the price with 15% VAT added (multiply by 1.15).",
   "cases": [
    {
     "inputs": [
      "200"
     ],
     "want": [
      "230"
     ]
    },
    {
     "inputs": [
      "100"
     ],
     "want": [
      "115"
     ]
    }
   ],
   "uses": [
    "jiggesh"
   ],
   "starter": "# Ask for a price and show it with 15% VAT added\n",
   "answer": {
    "before": "",
    "code": "dhoro dam = shonkha(jiggesh(\"Price in taka? \"))\ndekhao \"With VAT:\", gol(dam * 1.15, 2), \"taka\"",
    "note": "<code>gol(x, 2)</code> rounds to 2 digits after the point. Without it, 200 × 1.15 shows as 229.99999999999997, because computers store most decimals slightly off."
   }
  },
  "4.1": {
   "prompt": "Ask for a number and say whether it is even or odd. (A number is even when <code>n % 2 == 0</code>.)",
   "cases": [
    {
     "inputs": [
      "7"
     ],
     "want": [
      "odd"
     ]
    },
    {
     "inputs": [
      "10"
     ],
     "want": [
      "even"
     ]
    }
   ],
   "starter": "dhoro n = shonkha(jiggesh(\"A number? \"))\n",
   "answer": {
    "before": "",
    "code": "dhoro n = shonkha(jiggesh(\"A number? \"))\njodi n % 2 == 0 {\n    dekhao n, \"is even\"\n} nahole {\n    dekhao n, \"is odd\"\n}",
    "note": ""
   }
  },
  "4.2": {
   "prompt": "Ask for the temperature and show \"Hot\" above 30, \"Nice\" from 20 to 30, and \"Cold\" below 20.",
   "cases": [
    {
     "inputs": [
      "35"
     ],
     "want": [
      "Hot"
     ]
    },
    {
     "inputs": [
      "25"
     ],
     "want": [
      "Nice"
     ]
    },
    {
     "inputs": [
      "20"
     ],
     "want": [
      "Nice"
     ]
    },
    {
     "inputs": [
      "10"
     ],
     "want": [
      "Cold"
     ]
    }
   ],
   "starter": "dhoro tap = shonkha(jiggesh(\"Temperature? \"))\n",
   "answer": {
    "before": "",
    "code": "dhoro tap = shonkha(jiggesh(\"Temperature? \"))\njodi tap > 30 {\n    dekhao \"Hot\"\n} nahole jodi tap >= 20 {\n    dekhao \"Nice\"\n} nahole {\n    dekhao \"Cold\"\n}",
    "note": ""
   }
  },
  "5.1": {
   "prompt": "Show the multiplication table of 7, from <code>7 x 1 = 7</code> to <code>7 x 10 = 70</code>.",
   "cases": [
    {
     "same": true
    }
   ],
   "uses": [
    "ghuro"
   ],
   "starter": "ghuro i = 1 theke 10 {\n    \n}\n",
   "answer": {
    "before": "",
    "code": "ghuro i = 1 theke 10 {\n    dekhao \"7 x {i} = {7 * i}\"\n}",
    "note": ""
   }
  },
  "5.2": {
   "prompt": "Add up all the numbers from 1 to 100 with a loop. (The answer is 5050.)",
   "cases": [
    {
     "want": [
      "5050"
     ]
    }
   ],
   "uses": [
    "ghuro"
   ],
   "starter": "dhoro mot = 0\n",
   "answer": {
    "before": "",
    "code": "dhoro mot = 0\nghuro i = 1 theke 100 {\n    mot += i\n}\ndekhao mot",
    "note": ""
   }
  },
  "6.1": {
   "prompt": "Make a list of 5 friends' names and show each one with \"Hello, ...!\".",
   "lines": 5,
   "cases": [
    {
     "want": [
      "Hello"
     ]
    }
   ],
   "uses": [
    "["
   ],
   "starter": "dhoro bondhu = []\n",
   "answer": {
    "before": "",
    "code": "dhoro bondhu = [\"Rahim\", \"Mitu\", \"Karim\", \"Nila\", \"Arif\"]\nprotiti nam bondhu theke {\n    dekhao \"Hello, {nam}!\"\n}",
    "note": ""
   }
  },
  "6.2": {
   "prompt": "Make a list of prices <code>[120, 45, 300, 80]</code> and show the total and the most expensive price.",
   "cases": [
    {
     "want": [
      "545",
      "300"
     ]
    }
   ],
   "starter": "dhoro dam = [120, 45, 300, 80]\n",
   "answer": {
    "before": "",
    "code": "dhoro dam = [120, 45, 300, 80]\ndekhao \"Total:\", jogfol(dam)\ndekhao \"Most expensive:\", boro(dam)",
    "note": ""
   }
  },
  "7.1": {
   "prompt": "Make a dictionary of yourself with your name, age and favourite food, and show a sentence about you using it.",
   "lines": 1,
   "uses": [
    "{"
   ],
   "starter": "dhoro ami = {\"nam\": \"\", \"boyosh\": 0, \"khabar\": \"\"}\n",
   "answer": {
    "before": "",
    "code": "dhoro ami = {\"nam\": \"Shuvo\", \"boyosh\": 22, \"khabar\": \"biryani\"}\ndekhao \"I am {ami.nam}, I am {ami.boyosh}, and I love {ami.khabar}.\"",
    "note": ""
   }
  },
  "7.2": {
   "prompt": "Make a dictionary of 3 subjects and their marks, and show the average mark.",
   "lines": 1,
   "uses": [
    "{"
   ],
   "starter": "dhoro nombor = {\"Bangla\": 85, \"English\": 78, \"Math\": 92}\n",
   "answer": {
    "before": "",
    "code": "dhoro nombor = {\"Bangla\": 85, \"English\": 78, \"Math\": 92}\ndekhao \"Average:\", gol(jogfol(man(nombor)) / lomba(nombor), 2)",
    "note": ""
   }
  },
  "8.1": {
   "prompt": "Write <code>kaj borgo(x)</code> that gives back x × x, and show <code>borgo(9)</code>.",
   "cases": [
    {
     "want": [
      "81"
     ]
    },
    {
     "append": "dekhao borgo(12)",
     "want": [
      "144"
     ]
    }
   ],
   "uses": [
    "kaj borgo"
   ],
   "starter": "kaj borgo(x) {\n    \n}\ndekhao borgo(9)\n",
   "answer": {
    "before": "",
    "code": "kaj borgo(x) {\n    ferot x * x\n}\ndekhao borgo(9)",
    "note": ""
   }
  },
  "8.2": {
   "prompt": "Write <code>kaj grade(nombor)</code> that gives back \"A+\", \"A\", \"Pass\" or \"Fail\" (use Lesson 4), and call it for 85, 72 and 20.",
   "cases": [
    {
     "want": [
      "A+",
      "Fail"
     ]
    },
    {
     "append": "dekhao \"[\" + grade(75) + \"|\" + grade(50) + \"]\"",
     "want": [
      "[A|Pass]"
     ]
    }
   ],
   "uses": [
    "kaj grade"
   ],
   "starter": "kaj grade(nombor) {\n    \n}\ndekhao grade(85), grade(72), grade(20)\n",
   "answer": {
    "before": "",
    "code": "kaj grade(nombor) {\n    jodi nombor >= 80 { ferot \"A+\" }\n    jodi nombor >= 70 { ferot \"A\" }\n    jodi nombor >= 33 { ferot \"Pass\" }\n    ferot \"Fail\"\n}\ndekhao grade(85), grade(72), grade(20)",
    "note": "<code>ferot</code> leaves the function at once, so the first true <code>jodi</code> decides the grade."
   }
  },
  "9.1": {
   "prompt": "Ask for a word and say whether it is a palindrome (the same backwards, like \"level\").",
   "cases": [
    {
     "inputs": [
      "level"
     ],
     "want": [
      "palindrome"
     ],
     "avoid": [
      "not"
     ]
    },
    {
     "inputs": [
      "hello"
     ],
     "want": [
      "not"
     ]
    }
   ],
   "starter": "dhoro shobdo = jiggesh(\"A word? \")\n",
   "answer": {
    "before": "",
    "code": "dhoro shobdo = choto_hater(parishkar(jiggesh(\"A word? \")))\njodi shobdo == ulta(shobdo) {\n    dekhao shobdo, \"is a palindrome\"\n} nahole {\n    dekhao shobdo, \"is not a palindrome\"\n}",
    "note": ""
   }
  },
  "9.2": {
   "prompt": "Ask for a sentence and show how many words it has. (<code>bhag(t)</code> with no second input splits on spaces.)",
   "cases": [
    {
     "inputs": [
      "BE is a Banglish language"
     ],
     "want": [
      "5"
     ]
    },
    {
     "inputs": [
      "amar nam"
     ],
     "want": [
      "2"
     ]
    }
   ],
   "starter": "dhoro bakko = jiggesh(\"A sentence? \")\n",
   "answer": {
    "before": "",
    "code": "dhoro bakko = jiggesh(\"A sentence? \")\ndekhao \"Words:\", lomba(bhag(bakko))",
    "note": ""
   }
  },
  "10.1": {
   "prompt": "Run <code>dekhao 10 / 0</code> and read the error. Then wrap it in <code>chesta</code> so the program shows \"Can't do that\" instead.",
   "cases": [
    {
     "want": [
      "Can't do that"
     ]
    }
   ],
   "uses": [
    "chesta"
   ],
   "starter": "dekhao 10 / 0\n",
   "answer": {
    "before": "",
    "code": "chesta {\n    dekhao 10 / 0\n} nahole {\n    dekhao \"Can't do that\"\n}",
    "note": ""
   }
  },
  "10.2": {
   "prompt": "Write <code>kaj bhag_koro(a, b)</code> that uses <code>chhuro</code> when b is 0, and gives back a / b otherwise.",
   "cases": [
    {
     "append": "dekhao bhag_koro(10, 4)",
     "want": [
      "2.5"
     ]
    },
    {
     "append": "chesta {\n    bhag_koro(1, 0)\n    dekhao \"no error\"\n} nahole {\n    dekhao \"stopped\"\n}",
     "want": [
      "stopped"
     ],
     "avoid": [
      "no error"
     ]
    }
   ],
   "uses": [
    "chhuro"
   ],
   "starter": "kaj bhag_koro(a, b) {\n    \n}\n",
   "answer": {
    "before": "",
    "code": "kaj bhag_koro(a, b) {\n    jodi b == 0 {\n        chhuro \"Can't divide by 0\"\n    }\n    ferot a / b\n}\ndekhao bhag_koro(10, 4)\nchesta {\n    bhag_koro(1, 0)\n} nahole bhul {\n    dekhao \"Error:\", bhul\n}",
    "note": ""
   }
  },
  "11.1": {
   "prompt": "Make <code>shreni Hisab</code> (bank account) with <code>ei.taka</code>, a <code>joma(poriman)</code> function that adds money, a <code>tolo(poriman)</code> function that takes money out (use <code>chhuro</code> if there isn't enough), and a <code>bivoron()</code> function that shows the balance.",
   "cases": [
    {
     "append": "dhoro test_hisab = Hisab(100)\ntest_hisab.joma(50)\ntest_hisab.tolo(30)\ndekhao test_hisab.bivoron()",
     "want": [
      "120"
     ]
    },
    {
     "append": "dhoro test_hisab2 = Hisab(10)\nchesta {\n    test_hisab2.tolo(50)\n    dekhao \"took it\"\n} nahole {\n    dekhao \"refused\"\n}",
     "want": [
      "refused"
     ],
     "avoid": [
      "took it"
     ]
    }
   ],
   "uses": [
    "shreni Hisab",
    "chhuro"
   ],
   "starter": "shreni Hisab {\n    kaj shuru(taka = 0) {\n        ei.taka = taka\n    }\n}\n",
   "answer": {
    "before": "",
    "code": "shreni Hisab {\n    kaj shuru(taka = 0) {\n        ei.taka = taka\n    }\n    kaj joma(poriman) {\n        ei.taka += poriman\n    }\n    kaj tolo(poriman) {\n        jodi poriman > ei.taka {\n            chhuro \"Not enough money\"\n        }\n        ei.taka -= poriman\n    }\n    kaj bivoron() {\n        ferot \"Balance: {ei.taka} taka\"\n    }\n}\ndhoro hisab = Hisab(500)\nhisab.joma(250)\nhisab.tolo(100)\ndekhao hisab.bivoron()",
    "note": ""
   }
  },
  "11.2": {
   "prompt": "Make <code>shreni Bari</code> (house) with a number of rooms, and a function that says \"This house has N rooms\".",
   "cases": [
    {
     "want": [
      "This house has",
      "rooms"
     ]
    }
   ],
   "uses": [
    "shreni Bari"
   ],
   "starter": "shreni Bari {\n    \n}\n",
   "answer": {
    "before": "",
    "code": "shreni Bari {\n    kaj shuru(ghor) {\n        ei.ghor = ghor\n    }\n    kaj bivoron() {\n        ferot \"This house has {ei.ghor} rooms\"\n    }\n}\ndekhao Bari(4).bivoron()",
    "note": ""
   }
  },
  "12.1": {
   "prompt": "Ask for 3 friends' names and save them in <code>bondhu.txt</code>, one per line. Then read the file and show them.",
   "cases": [
    {
     "inputs": [
      "Rahim",
      "Mitu",
      "Karim"
     ],
     "want": [
      "Rahim",
      "Mitu",
      "Karim"
     ],
     "files": {
      "bondhu.txt": [
       "Rahim",
       "Mitu",
       "Karim"
      ]
     }
    }
   ],
   "uses": [
    "file_porho"
   ],
   "starter": "file_lekho(\"bondhu.txt\", \"\")\n",
   "answer": {
    "before": "",
    "code": "file_lekho(\"bondhu.txt\", \"\")\nghuro 3 bar {\n    file_jog(\"bondhu.txt\", jiggesh(\"A friend's name? \") + \"\\n\")\n}\nprotiti nam bhag(parishkar(file_porho(\"bondhu.txt\")), \"\\n\") theke {\n    dekhao nam\n}",
    "note": ""
   }
  },
  "12.2": {
   "prompt": "Save a dictionary of your marks as JSON in <code>marks.json</code>, read it back, and show the total.",
   "cases": [
    {
     "custom": "marks_total",
     "files": {
      "marks.json": []
     }
    }
   ],
   "uses": [
    "json_banao",
    "json_porho"
   ],
   "starter": "dhoro nombor = {\"Bangla\": 85, \"English\": 78, \"Math\": 92}\n",
   "answer": {
    "before": "",
    "code": "dhoro nombor = {\"Bangla\": 85, \"English\": 78, \"Math\": 92}\nfile_lekho(\"marks.json\", json_banao(nombor))\ndhoro ferot_elo = json_porho(file_porho(\"marks.json\"))\ndekhao \"Total:\", jogfol(man(ferot_elo))",
    "note": ""
   }
  },
  "13.1": {
   "prompt": "Make an app with an input box and a button that shows the number typed, multiplied by 2.",
   "opens": "app",
   "cases": [
    {
     "custom": "app_double"
    }
   ],
   "starter": "dhoro amar_janala = janala(\"Double\", 320, 220)\n\namar_janala.chalao()\n",
   "answer": {
    "before": "",
    "code": "dhoro amar_janala = janala(\"Double\", 320, 220)\ndhoro ghor = amar_janala.ghor(\"\")\ndhoro uttor = amar_janala.lekha(\"\")\namar_janala.botam(\"x 2\", kaj () {\n    chesta {\n        uttor.bodlao(\"Answer: {shonkha(ghor.man()) * 2}\")\n    } nahole {\n        uttor.bodlao(\"Type a number first\")\n    }\n})\namar_janala.chalao()",
    "note": ""
   }
  },
  "13.2": {
   "prompt": "Add a \"Reset\" button to the counter that sets it back to 0.",
   "opens": "app",
   "cases": [
    {
     "custom": "app_reset"
    }
   ],
   "answer": {
    "before": "add this to the counter, before <code>amar_janala.chalao()</code>:",
    "code": "amar_janala.botam(\"Reset\", kaj () {\n    gona = 0\n    dekhao_gona()\n})",
    "note": "",
    "full": "dhoro amar_janala = janala(\"Counter\", 320, 220)\namar_janala.pechon(\"#16201b\")\ndhoro gona = 0\ndhoro porda = amar_janala.lekha(\"0\").akar(40).rong(\"white\").dane()\n\nkaj dekhao_gona() {\n    porda.bodlao(lekha(gona))\n}\n\ndhoro sari = amar_janala.sari()\nsari.botam(\"- 1\", kaj () {\n    gona -= 1\n    dekhao_gona()\n})\nsari.botam(\"+ 1\", kaj () {\n    gona += 1\n    dekhao_gona()\n}).pechon(\"#0d6b49\").rong(\"white\")\n\namar_janala.chabi_chap(kaj (chabi_ti) {\n    jodi chabi_ti == \"+\" { gona += 1 }\n    jodi chabi_ti == \"-\" { gona -= 1 }\n    jodi chabi_ti == \"Escape\" { gona = 0 }\n    dekhao_gona()\n})\namar_janala.botam(\"Reset\", kaj () {\n    gona = 0\n    dekhao_gona()\n})\n\namar_janala.chalao()"
   },
   "starter": "dhoro amar_janala = janala(\"Counter\", 320, 220)\namar_janala.pechon(\"#16201b\")\ndhoro gona = 0\ndhoro porda = amar_janala.lekha(\"0\").akar(40).rong(\"white\").dane()\n\nkaj dekhao_gona() {\n    porda.bodlao(lekha(gona))\n}\n\ndhoro sari = amar_janala.sari()\nsari.botam(\"- 1\", kaj () {\n    gona -= 1\n    dekhao_gona()\n})\nsari.botam(\"+ 1\", kaj () {\n    gona += 1\n    dekhao_gona()\n}).pechon(\"#0d6b49\").rong(\"white\")\n\namar_janala.chabi_chap(kaj (chabi_ti) {\n    jodi chabi_ti == \"+\" { gona += 1 }\n    jodi chabi_ti == \"-\" { gona -= 1 }\n    jodi chabi_ti == \"Escape\" { gona = 0 }\n    dekhao_gona()\n})\namar_janala.chalao()"
  },
  "14.1": {
   "prompt": "Make a website with three pages (<code>/</code>, <code>/school</code> and <code>/hobby</code>) that link to each other.",
   "opens": "website",
   "cases": [
    {
     "append": "dekhao amar_site.porikkha(\"/\").abostha, amar_site.porikkha(\"/school\").abostha, amar_site.porikkha(\"/hobby\").abostha",
     "want": [
      "200 200 200"
     ]
    },
    {
     "append": "dekhao amar_site.porikkha(\"/\").lekha",
     "want": [
      "/school",
      "/hobby"
     ]
    }
   ],
   "starter": "dhoro amar_site = website()\namar_site.pata(\"/\", kaj (r) { ferot \"<h1>Home</h1>\" })\n\namar_site.chalao(8000)\n",
   "answer": {
    "before": "",
    "code": "dhoro amar_site = website()\ndhoro menu = \"<p><a href='/'>Home</a> | <a href='/school'>School</a> | <a href='/hobby'>Hobby</a></p>\"\namar_site.pata(\"/\", kaj (r) { ferot menu + \"<h1>Home</h1>\" })\namar_site.pata(\"/school\", kaj (r) { ferot menu + \"<h1>My school</h1>\" })\namar_site.pata(\"/hobby\", kaj (r) { ferot menu + \"<h1>My hobby</h1>\" })\namar_site.chalao(8000)",
    "note": ""
   }
  },
  "14.2": {
   "prompt": "Add a page <code>/borgo/:x</code> that shows the square of the number in its address, so <code>/borgo/7</code> shows 49.",
   "opens": "website",
   "cases": [
    {
     "append": "dekhao amar_site.porikkha(\"/borgo/7\").lekha",
     "want": [
      "49"
     ]
    },
    {
     "append": "dekhao amar_site.porikkha(\"/borgo/12\").lekha",
     "want": [
      "144"
     ]
    }
   ],
   "starter": "dhoro amar_site = website()\namar_site.pata(\"/\", kaj (r) { ferot \"<a href='/borgo/7'>7 squared</a>\" })\n\namar_site.chalao(8000)\n",
   "answer": {
    "before": "add this page:",
    "code": "amar_site.pata(\"/borgo/:x\", kaj (r) {\n    dhoro x = shonkha(r.ongsho.x)\n    ferot \"<p>{x} squared is {x * x}</p>\"\n})",
    "note": "",
    "full": "dhoro amar_site = website()\namar_site.pata(\"/\", kaj (r) { ferot \"<a href='/borgo/7'>7 squared</a>\" })\n\namar_site.pata(\"/borgo/:x\", kaj (r) {\n    dhoro x = shonkha(r.ongsho.x)\n    ferot \"<p>{x} squared is {x * x}</p>\"\n})\n\namar_site.chalao(8000)\n"
   }
  },
  "15.1": {
   "prompt": "Add two more questions to the quiz.",
   "page": true,
   "cases": [
    {
     "custom": "page_quiz"
    }
   ],
   "answer": {
    "before": "add two more entries inside <code>prosno_guli</code>, for example <code>{&quot;prosno&quot;: &quot;2 + 2?&quot;, &quot;uttor&quot;: &quot;4&quot;}</code>.",
    "code": "",
    "note": "",
    "full": "<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>BE Quiz</title>\n<style>\n  .thik { color: green; }\n  .bhul { color: red; }\n</style>\n</head>\n<body>\n  <h1>Quick quiz</h1>\n  <p id=\"prosno\"></p>\n  <input id=\"uttor\" placeholder=\"Your answer\">\n  <button id=\"check\">Check</button>\n  <p id=\"fol\"></p>\n  <ul id=\"itihash\"></ul>\n\n  <script src=\"be-web.js\"></script>\n  <script type=\"text/be\">\n    dhoro prosno_guli = [\n        {\"prosno\": \"What is 7 x 8?\", \"uttor\": \"56\"},\n        {\"prosno\": \"Capital of Bangladesh?\", \"uttor\": \"dhaka\"},\n        {\"prosno\": \"How many days in a week?\", \"uttor\": \"7\"},\n        {\"prosno\": \"2 + 2?\", \"uttor\": \"4\"},\n        {\"prosno\": \"Biggest planet?\", \"uttor\": \"jupiter\"}\n    ]\n    dhoro ekhon = 0\n    dhoro thik_koyta = 0\n\n    kaj prosno_dekhao() {\n        jodi ekhon < lomba(prosno_guli) {\n            khojo(\"#prosno\").bodlao(prosno_guli[ekhon].prosno)\n        } nahole {\n            khojo(\"#prosno\").bodlao(\"Done! You got {thik_koyta} of {lomba(prosno_guli)}.\")\n            khojo(\"#check\").lukao()\n            khojo(\"#uttor\").lukao()\n        }\n    }\n\n    kaj check_koro() {\n        dhoro dilo = choto_hater(parishkar(khojo(\"#uttor\").man()))\n        dhoro thik = dilo == prosno_guli[ekhon].uttor\n        jodi thik {\n            thik_koyta += 1\n            khojo(\"#fol\").bodlao(\"Correct!\").chinho(\"thik\").chinho(\"bhul\", mittha)\n        } nahole {\n            khojo(\"#fol\").bodlao(\"Not quite. The answer is {prosno_guli[ekhon].uttor}.\").chinho(\"bhul\").chinho(\"thik\", mittha)\n        }\n        khojo(\"#itihash\").jog(banao(\"li\").bodlao(prosno_guli[ekhon].prosno + \" \" + dilo))\n        khojo(\"#uttor\").muchho()\n        ekhon += 1\n        prosno_dekhao()\n    }\n\n    khojo(\"#check\").chap(kaj () { check_koro() })\n    khojo(\"#uttor\").chabi_chap(kaj (chabi_ti) {\n        jodi chabi_ti == \"Enter\" { check_koro() }\n    })\n    prosno_dekhao()\n  </script>\n</body>\n</html>"
   },
   "starter": "<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>BE Quiz</title>\n<style>\n  .thik { color: green; }\n  .bhul { color: red; }\n</style>\n</head>\n<body>\n  <h1>Quick quiz</h1>\n  <p id=\"prosno\"></p>\n  <input id=\"uttor\" placeholder=\"Your answer\">\n  <button id=\"check\">Check</button>\n  <p id=\"fol\"></p>\n  <ul id=\"itihash\"></ul>\n\n  <script src=\"be-web.js\"></script>\n  <script type=\"text/be\">\n    dhoro prosno_guli = [\n        {\"prosno\": \"What is 7 x 8?\", \"uttor\": \"56\"},\n        {\"prosno\": \"Capital of Bangladesh?\", \"uttor\": \"dhaka\"},\n        {\"prosno\": \"How many days in a week?\", \"uttor\": \"7\"}\n    ]\n    dhoro ekhon = 0\n    dhoro thik_koyta = 0\n\n    kaj prosno_dekhao() {\n        jodi ekhon < lomba(prosno_guli) {\n            khojo(\"#prosno\").bodlao(prosno_guli[ekhon].prosno)\n        } nahole {\n            khojo(\"#prosno\").bodlao(\"Done! You got {thik_koyta} of {lomba(prosno_guli)}.\")\n            khojo(\"#check\").lukao()\n            khojo(\"#uttor\").lukao()\n        }\n    }\n\n    kaj check_koro() {\n        dhoro dilo = choto_hater(parishkar(khojo(\"#uttor\").man()))\n        dhoro thik = dilo == prosno_guli[ekhon].uttor\n        jodi thik {\n            thik_koyta += 1\n            khojo(\"#fol\").bodlao(\"Correct!\").chinho(\"thik\").chinho(\"bhul\", mittha)\n        } nahole {\n            khojo(\"#fol\").bodlao(\"Not quite. The answer is {prosno_guli[ekhon].uttor}.\").chinho(\"bhul\").chinho(\"thik\", mittha)\n        }\n        khojo(\"#itihash\").jog(banao(\"li\").bodlao(prosno_guli[ekhon].prosno + \" \" + dilo))\n        khojo(\"#uttor\").muchho()\n        ekhon += 1\n        prosno_dekhao()\n    }\n\n    khojo(\"#check\").chap(kaj () { check_koro() })\n    khojo(\"#uttor\").chabi_chap(kaj (chabi_ti) {\n        jodi chabi_ti == \"Enter\" { check_koro() }\n    })\n    prosno_dekhao()\n  </script>\n</body>\n</html>"
  },
  "15.2": {
   "prompt": "Make a page with a box and a button that adds what was typed to a list on the page (a to-do list).",
   "page": true,
   "cases": [
    {
     "custom": "page_todo"
    }
   ],
   "starter": "<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>My to-do list</title>\n</head>\n<body>\n  <h1>My to-do list</h1>\n  <input id=\"kaj_ghor\" placeholder=\"Something to do\">\n  <button id=\"jog\">Add</button>\n  <ul id=\"talika\"></ul>\n\n  <script src=\"be-web.js\"></script>\n  <script type=\"text/be\">\n    # When the #jog button is clicked, add what was typed in #kaj_ghor to the #talika list\n\n  </script>\n</body>\n</html>\n",
   "answer": {
    "before": "(inside <code>&lt;script type=&quot;text/be&quot;&gt;</code>, with <code>&lt;input id=&quot;kaj_ghor&quot;&gt;</code>, <code>&lt;button id=&quot;jog&quot;&gt;Add&lt;/button&gt;</code> and <code>&lt;ul id=&quot;talika&quot;&gt;&lt;/ul&gt;</code> on the page)",
    "code": "khojo(\"#jog\").chap(kaj () {\n    dhoro lekha_ti = parishkar(khojo(\"#kaj_ghor\").man())\n    jodi lekha_ti != \"\" {\n        khojo(\"#talika\").jog(banao(\"li\").bodlao(lekha_ti))\n        khojo(\"#kaj_ghor\").muchho()\n    }\n})",
    "note": "",
    "full": "<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<title>My to-do list</title>\n</head>\n<body>\n  <h1>My to-do list</h1>\n  <input id=\"kaj_ghor\" placeholder=\"Something to do\">\n  <button id=\"jog\">Add</button>\n  <ul id=\"talika\"></ul>\n\n  <script src=\"be-web.js\"></script>\n  <script type=\"text/be\">\n    khojo(\"#jog\").chap(kaj () {\n        dhoro lekha_ti = parishkar(khojo(\"#kaj_ghor\").man())\n        jodi lekha_ti != \"\" {\n            khojo(\"#talika\").jog(banao(\"li\").bodlao(lekha_ti))\n            khojo(\"#kaj_ghor\").muchho()\n        }\n    })\n  </script>\n</body>\n</html>\n"
   }
  }
 }
};
