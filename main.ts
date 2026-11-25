// The 3AM Fridge Text — entry runner.
// Reads entry.txt at runtime and copies it to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Exits 1 when the entry is empty, whitespace-only, or longer than 140 characters.
// The joke lives in entry.txt, not here, so the text can change without
// touching the runner: one source of truth, read fresh on every run.
// The 1-140 guard runs before any write, so a rejected entry never leaves
// a stale file behind; the output file itself is the proof of acceptance.
const fs = require("node:fs");
const path = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const entryPath = path.join(__dirname, "entry.txt");
const raw = fs.readFileSync(entryPath, "utf8");
const text = raw.replace(/\r?\n$/, "");

if (text.length < 1 || text.length > 140 || text.trim().length === 0) {
  console.error("entry.txt must be 1-140 characters, got " + text.length);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
