# Assets — drop-in slots

The page renders fine with none of these present: every slot shows a styled
"coming soon" placeholder instead of a broken icon. Drop a file in with the exact
name below and it appears — **no code changes needed**.

| File | Where it appears | Suggested aspect |
|---|---|---|
| `fig-00-hero.jpg` | Masthead — lead image beside the title | 3:2 |
| `mct-cutaway.jpg` | Section 02 — the interactive cutaway with hotspots | 16:10, landscape, ≥1400px wide |
| `mct-audio.mp3` | Section 08 — audio player near the end | — |
| `fig-01-7g-tronic.jpg` | Section 01 — the 722.9 / 7G-Tronic starting point | 4:3 |
| `fig-02-racestart.jpg` | Section 04 — AMG DRIVE UNIT / RaceStart | 4:3 |
| `fig-03-service.jpg` | Section 06 — oil pan / overflow fill | 4:3 |
| `fig-04-9g-mct.jpg` | Section 07 — the 9-speed MCT (725.0) | 4:3 |

`.jpg` is what the HTML asks for. To use a `.png` or `.webp` instead, change the
one `src` on that `<img>` in `index.html`.

## Cutaway hotspot positions

The eight hotspots are positioned as percentages over the cutaway image, in the
`PARTS` array near the bottom of `index.html`. They're currently at plausible
placeholder coordinates. Once the real cutaway is in, nudge each `x` / `y` so the
marker sits on the actual component — that's the only tuning step required.
