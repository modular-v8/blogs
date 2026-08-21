# Assets — drop-in slots

The page renders fine with none of these present: every slot shows a styled
"coming soon" placeholder instead of a broken icon. Drop a file in with the exact
name below and it appears — **no code changes needed**.

| File | Where it appears | Aspect |
|---|---|---|
| `fig-00-hero.jpg` | Masthead — lead image beside the title, and the card for this post on the site's root index | 4:3 |
| `shift-mechanism.jpg` | Section 02 — static figure in the left media column, below the stat cards | 4:3 |
| `fig-02-isr.jpg` | Section 03 — the Aventador's ISR gearbox | 4:3 |

**The image extension doesn't matter.** The markup asks for `.jpg` first, but if
that file isn't there the page works through `.jpeg`, `.png`, `.webp` and `.avif`
on the same base name before giving up and showing the placeholder. So
`shift-mechanism.png` fills the `shift-mechanism.jpg` slot with no code change.

Prefer `.jpg` for photographs and `.png` for diagrams and screenshots — the page
loads marginally faster when the first guess hits, but that's the only cost.
