# Assets — drop-in slots

The page renders fine with none of these present: every slot shows a styled
"coming soon" placeholder instead of a broken icon. Drop a file in with the exact
name below and it appears — **no code changes needed**.

| File | Where it appears | Suggested aspect |
|---|---|---|
| `fig-00-hero.jpg` | Masthead — lead image beside the title, and the card for this post on the site's root index | 3:2 |
| `fig-01-smg-generations.jpg` | Section 01 — SMG I, II, and III side by side | 4:3 |
| `smg-cutaway.jpg` | Section 02 — the interactive cutaway with hotspots | 16:10, landscape, ≥1400px wide |
| `fig-02-drivelogic.jpg` | Section 02 — DRIVELOGIC's shift-behaviour settings | 4:3 |

Section 03 ("When and where was SMG used?") is text/table-only — no image slot — so its
table and prose run the full width of `.wrap` instead of the usual 60/40 split.

**The image extension doesn't matter.** The markup asks for `.jpg` first, but if
that file isn't there the page works through `.jpeg`, `.png`, `.webp` and `.avif`
on the same base name before giving up and showing the placeholder. So
`fig-00-hero.png` fills the `fig-00-hero.jpg` slot with no code change.

Prefer `.jpg` for photographs and `.png` for diagrams and screenshots — the page
loads marginally faster when the first guess hits, but that's the only cost.

## Cutaway hotspot positions

The hotspots are positioned as percentages over the cutaway image, in the
`PARTS` array near the bottom of `../index.html`. Open the page with
`#edit-hotspots` appended to the URL to drag each marker into place and copy
out the resulting x/y values once the real cutaway image is in — then remove
`#edit-hotspots` and bake the numbers into `PARTS`.
