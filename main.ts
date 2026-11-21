// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: an AI agent found a GTA 6 moment, cut it
// into a vertical clip that hooks with the GTA 6 chase and then pitches
// make.fun on screen, the clip goes up on YouTube as a public Short with
// the bounty's line and the entrant's play code in its description, and
// VIDEO.json at this repository's root names the video's address.
//
// This program copies VIDEO.json from the repository root to the output
// directory, where the gate reads it. That is all it has to do; nothing it
// writes about the video is scored. The house reads the video's views
// through the YouTube Data API, and places go by those views.
//
// VIDEO.json as committed holds a placeholder address, so the gate refuses
// it as it stands. Replace it with the uploaded Short's address before
// submitting.
//
// Local run (MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for /bot and
// /output outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
