import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  'My son asked me to pass the salt. I handed it over and said, "Season\'s greetings."';

// The grader sets MAKEFUN_OUTPUT_DIR; default to /output for local runs.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
