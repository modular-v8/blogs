# Assets — drop-in slots

The page renders fine with none of these present: every slot shows a styled
"coming soon" placeholder instead of a broken icon. Drop a file in with the exact
name below and it appears — **no code changes needed**.

| File | Where it appears | Suggested aspect |
|---|---|---|
| `fig-00-hero.jpg` | Masthead — lead image beside the title, and the card for this post on the site's root index | 3:2 |
| `mct-cutaway.jpg` | Section 02 — the interactive cutaway with hotspots | 16:10, landscape, ≥1400px wide |
| `fig-01-7g-tronic.jpg` | Section 01 — the 722.9 / 7G-Tronic starting point | 4:3 |
| `fig-02-9g-mct.jpg` | Section 06 — the 9-speed MCT (725.0) | 4:3 |

**The extension doesn't matter.** The markup asks for `.jpg` first, but if that
file isn't there the page works through `.jpeg`, `.png`, `.webp` and `.avif` on
the same base name before giving up and showing the placeholder. So
`fig-00-hero.png` fills the `fig-00-hero.jpg` slot with no code change.

Prefer `.jpg` for photographs and `.png` for diagrams and screenshots — the page
loads marginally faster when the first guess hits, but that's the only cost.

## Cutaway hotspot positions

The hotspots are positioned as percentages over the cutaway image, in the
`PARTS` array near the bottom of `../index.html`. Nudge each `x` / `y` (and,
for grouped parts, each child pin's coordinates) if the real cutaway image
ever changes framing.
