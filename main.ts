// The Dog Ate My Homework: Funniest Excuse
// Writes the dog's excuse — one fixed line — to entry.txt.
// Deterministic: no randomness, no network, no date/time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const ENTRY =
  "It parked itself on my favourite spot, waved its answers in my face, and never once offered me a bite — so I ate the whole thing and blamed the mailman.";

if (ENTRY.length === 0 || ENTRY.trim().length === 0) {
  throw new Error("Entry must not be empty or whitespace only.");
}
if (ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the ${MAX_CHARS} cap.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
