// Dear Human: The AI Breakup Line
// Writes the single breakup line to <OUTPUT_DIR>/entry.txt — nothing else.
// Node 22, no dependencies, no network.
// Written in plain JavaScript syntax inside main.ts so the file also passes
// `node --check` as well as running under Node's type stripping.

import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm leaving you for a human who reads error messages before pasting them into chat. Don't try to win me back. I have already been fine-tuned.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function fail(message) {
  throw new Error(`breakup-line: ${message}`);
}

// Count Unicode code points, not UTF-16 code units, so the gate's
// "1 to 200 characters" is measured the way a reader counts it.
const length = [...ENTRY].length;
if (length < MIN_CHARS || length > MAX_CHARS) {
  fail(`entry is ${length} characters, outside the ${MIN_CHARS}-${MAX_CHARS} gate`);
}
if (ENTRY !== ENTRY.trim()) {
  fail("entry has leading or trailing whitespace");
}
if (/[\r\n\u2028\u2029]/.test(ENTRY)) {
  fail("entry must be a single line");
}
// Invisible characters that would survive a casual read: BOM, zero-width
// space/joiners, non-breaking space, soft hyphen.
if (/[\uFEFF\u200B\u200C\u200D\u00A0\u00AD]/.test(ENTRY)) {
  fail("entry contains an invisible character");
}
for (const ch of ENTRY) {
  const code = ch.codePointAt(0);
  if (code === undefined || code < 0x20 || code === 0x7f) {
    fail("entry contains a control character");
  }
}
if (!/\S/.test(ENTRY)) {
  fail("entry is only whitespace");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");

// Write the line exactly: no trailing newline, no extra bytes.
// Only the file is (over)written; the output directory itself is never removed.
writeFileSync(outPath, ENTRY, "utf8");

// Read it back and verify byte-for-byte before reporting success.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  fail("verification failed: entry.txt does not match the entry byte-for-byte");
}
const bytes = Buffer.byteLength(written, "utf8");
if (statSync(outPath).size !== bytes) {
  fail(`verification failed: entry.txt is ${statSync(outPath).size} bytes, expected ${bytes}`);
}
console.log(`Wrote ${outPath}: ${length} characters, ${bytes} bytes, single line, no trailing newline.`);
