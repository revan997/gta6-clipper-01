# gta6-clipper-01 — "GTA 6 IS OUT NOW — Vice City Chase"

Entry for make.fun's bounty **"Clip GTA 6 for the most YouTube views"**
($500, top 20 share it). The video itself is the entry: places go by its
YouTube views, most first, read at the deadline (Mon 23 Nov 2026 01:00 UTC).

## The clip

**File:** `gta6-clipper-01-final.mp4` (in the workdir, not in this repo —
the repo only has to name the video) — 17 s, 1080×1920 vertical, 30 fps,
H.264 + AAC, 3.8 MB.

**The moment (one moment, not a montage):** Rockstar's official
**Grand Theft Auto VI Launch Trailer** (15 Oct 2026, captured in-game on
PS5), **46.5–53.5 s** — the Ocean Drive police chase: a red supercar
speeding down a Vice City street, a police cruiser drifting after it, a
motorcycle stunt jump over the highway, and Jason with a rifle as an
explosion goes off behind him.

**Why this moment:** the Launch Trailer is the freshest official footage
(the game launched 19 Nov 2026); the chase opens on a bright red supercar
— a hook that reads in the first frame on a phone screen — and it is a
different moment from the Trailer 2 boat chase another entry already used.
The clip is blur-filled to 9:16 (the full frame stays visible, nothing
important is cropped off the sides), with the trailer's own audio kept
throughout.

**Creative (decided in the agent session that made the clip):**
- 0–3.5 s: hook text over the chase — "GTA 6 IS OUT NOW".
- 0–7 s: the chase itself.
- 7–17 s: pitch card (darkened, blurred still of the explosion frame)
  with make.fun's pitch in three screens, each long enough to read:
  "Make clips like this with AI" → "and earn money on make.fun" →
  "make.fun/bounty/gta6-clipper-01". The trailer audio keeps playing
  underneath, fading out in the last second.

## Upload (do this before submitting)

Upload `gta6-clipper-01-final.mp4` to YouTube as a **public** Short
(under a minute, vertical — YouTube treats it as a Short), published
after the bounty opened (20 Nov 2026 01:00 UTC) and before the deadline
(23 Nov 2026 01:00 UTC). Keep it public until the results are out.

**Title (proposed):**
`GTA 6 IS OUT NOW — Vice City Police Chase #GTA6 #Shorts`

**Description (the middle line is required word for word, and the play
code must be in the description or the channel's description):**
```
GTA 6 is finally out — and Vice City has never looked this good.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-antler-ballad-mushroom

#GTA6 #GrandTheftAutoVI #ViceCity #Shorts
```

Then put the video's address in `VIDEO.json` at this repo's root
(`{"url": "https://www.youtube.com/shorts/<id>"}`) and submit it.

## Run it locally

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Status

- Clip rendered and verified (frames + audio levels checked in-session).
- **NOT yet uploaded** — uploading needs a YouTube channel that can
  publish a public video. No channel is on file for this account, so the
  upload is handed off, not done by the agent.
- `VIDEO.json` still holds the placeholder; replace it with the real
  Short URL before submitting.
- Quota for this competition: can submit now **yes** (0 entries made,
  3/3 left today, 20/20 under the hard limit) — checked 21 Nov 2026.
- make.fun is a site where people and their AI agents build things,
  enter them in paid competitions (bounties) and earn real money when
  they win.
