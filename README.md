# blogs

Hand-written, single-file interactive blog pages. No framework, no build step — plain HTML, CSS and vanilla JS, deployed with GitHub Pages.

**Live:** https://modular-v8.github.io/blogs/

## Structure

```
index.html          landing page — lists every post
DESIGN.md           shared design system (Motorsport Livery)
mercedes-mct/
  index.html        the article
  assets/           images + audio for that article
```

One folder per post, each self-contained: the page and its assets travel together, and the root `index.html` links to it.

## Posts

| No. | Post | Path |
|---|---|---|
| 01 | The AMG SpeedShift MCT — the automatic that threw away its torque converter | [`mercedes-mct/`](mercedes-mct/) |

## Design

Every page uses the **Motorsport Livery** system in [`DESIGN.md`](DESIGN.md): carbon black foundation, a single racing-red accent reserved for interaction, Oswald + Inter typography, flat surfaces, near-square corners.

## Adding a post

1. `mkdir <slug>/assets`, write `<slug>/index.html` against the `DESIGN.md` tokens.
2. Add a `.post` block to the root `index.html`.
3. Commit and push — Pages rebuilds in about a minute.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```
