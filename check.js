/*
 * Checks that the JavaScript version (be.js) gives the same results as Python BE.
 * You don't run this yourself: `python -m pytest` runs it (when Node.js is
 * installed) with a list of programs and the results Python got.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const BE = require("./be.js");

const ROOT = path.resolve(__dirname, "..");
const cases = JSON.parse(fs.readFileSync(process.argv[2], "utf-8"));

function readFile(file) {
  const full = path.join(ROOT, file);
  return fs.existsSync(full) && fs.statSync(full).isFile() ? fs.readFileSync(full, "utf-8") : null;
}

let failures = 0;
for (const c of cases) {
  const answers = c.inputs.slice();
  const result = BE.run(c.code, { input: () => (answers.length ? answers.shift() : ""), readFile, path: c.path });
  const got = {
    output: result.output,
    error: result.error ? result.error.toString() : null,
    line: result.error ? result.error.line : null,
    col: result.error ? (result.error.col === undefined ? null : result.error.col) : null,
    file: result.error ? result.error.filename : null,
  };
  const problems = [];
  if (JSON.stringify(got.output) !== JSON.stringify(c.expected.output)) problems.push(["output", c.expected.output, got.output]);
  for (const key of ["error", "line", "col", "file"]) {
    if (got[key] !== c.expected[key]) problems.push([key, c.expected[key], got[key]]);
  }
  if (problems.length) {
    failures += 1;
    console.log("---- " + (c.path || JSON.stringify(c.code).slice(0, 80)));
    for (const [key, want, have] of problems) {
      console.log(`  ${key}:\n    Python: ${JSON.stringify(want)}\n    JS:     ${JSON.stringify(have)}`);
    }
  }
}
console.log(`${cases.length - failures} of ${cases.length} programs match.`);
process.exit(failures ? 1 : 0);
