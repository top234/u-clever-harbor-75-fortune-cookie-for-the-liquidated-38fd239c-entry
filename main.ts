import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune cookie line for a crypto trader who was just liquidated.
// Oracular setup ("a stranger shall arrive bearing your fortune"),
// then the punchline breaks it: the stranger is the margin call,
// and he is already inside.
const FORTUNE =
  "A stranger shall arrive bearing your fortune\u2014he is the margin call, and he is already inside your house.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
