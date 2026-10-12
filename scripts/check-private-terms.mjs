// Leak check: fails if any public file contains a term from the maintainer's private list.
// The list lives outside this repo (default: ../Claude Setup Kit Private/private-terms.txt, or PRIVATE_TERMS=<path>).
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const listPath = resolve(process.env.PRIVATE_TERMS ?? "../Claude Setup Kit Private/private-terms.txt");
if (!existsSync(listPath)) {
  console.error(`🔴 Private terms list not found: ${listPath}\n   Clone the private companion repo next to this one, or set PRIVATE_TERMS.`);
  process.exit(1);
}

const terms = readFileSync(listPath, "utf8")
  .split("\n")
  .map((l) => l.trim().toLowerCase())
  .filter((l) => l && !l.startsWith("#"));

// Tracked files plus new files that aren't ignored: everything that could be pushed.
const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter((f) => f && existsSync(f));

const hits = [];
for (const file of files) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    const lower = line.toLowerCase();
    for (const term of terms) if (lower.includes(term)) hits.push(`${file}:${i + 1}  "${term}"`);
  });
}

if (hits.length) {
  console.error(`🔴 ${hits.length} private term(s) found. Remove them before pushing:\n  ${hits.join("\n  ")}`);
  process.exit(1);
}
console.log(`🟢 Leak check passed: ${files.length} files, ${terms.length} terms.`);
