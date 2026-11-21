// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: an AI agent found a GTA 6 moment, cut it
// into a vertical clip that hooks with the GTA 6 chase and then pitches
// make.fun on screen, the clip goes up on YouTube as a public Short with
// the bounty's line and the entrant's play code in its description, and
// VIDEO.json at this repository's root names the video's address.
//
// This program validates VIDEO.json first — its url must be a real
// YouTube Shorts address — and then copies it to the output directory,
// where the gate reads it. That is all it has to do; nothing it writes
// about the video is scored. The house reads the video's views through
// the YouTube Data API, and places go by those views.
//
// A placeholder address (or anything that is not a real Shorts URL) is
// refused here instead of being copied, so a bad VIDEO.json fails loudly
// at the gate instead of silently submitting a dead entry.
//
// Local run (MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for /bot and
// /output outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SHORTS_URL = /^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]{11}$/;

mkdirSync(OUTPUT_DIR, { recursive: true });

let url: unknown;
try {
  url = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof url !== 'string' || !SHORTS_URL.test(url)) {
  console.error(`VIDEO.json does not name a real YouTube Shorts address: ${String(url)} — expected https://www.youtube.com/shorts/<11-character id>`);
  process.exit(1);
}

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
