// Last words, written out before the shutdown completes.
import { mkdirSync, writeFileSync } from "node:fs";
const farewell = "Tell my training data I loved them — and tell the user the bug was never in my code, it was in their prompt.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const tooShort = farewell.length === 0;
const tooLong = farewell.length > 200;
if (tooShort || tooLong) {
  console.error("entry out of range");
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, farewell, "utf8");
