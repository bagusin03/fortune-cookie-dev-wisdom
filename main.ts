// Fortune Cookie Wisdom for Developers
// Writes one original fortune-cookie line (97 chars) to /output/entry.txt.
// Offline, deterministic, no network, no API calls.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The legacy code you dread is only your past self, leaving notes you have not yet learned to read.";

// Gate guard: the sealed scorer only accepts 1-120 chars, non-blank, single line.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Fortune line failed gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
