# blogs

Hand-written, single-file interactive blog pages. No framework, no build step — plain HTML, CSS and vanilla JS, deployed with GitHub Pages.

**Live:** https://modular-v8.github.io/blogs/

## Structure

```
index.html                    landing page — lists every post
mercedes-mct/
  index.html                  the article
  assets/                     images for that article
bmw-smg/
  index.html
  assets/
lamborghini-single-clutch/
  index.html
  DESIGN.md                   design system this post was built against
  assets/
tiptronic/
  index.html
  DESIGN.md                   design system this post was built against
  assets/
pdk/
  index.html
  DESIGN.md                   design system this post was built against
  assets/
clutchless-manual/
  index.html
  DESIGN.md                   design system this post was built against
  assets/
```

One folder per post, each self-contained: the page and its assets travel together, and the root `index.html` links to it.

## Posts

| No. | Post | Path |
|---|---|---|
| 01 | AMG's SpeedShift MCT — how AMG replaced a torque-converter with a wet-clutch and kept the rest of the hardware the same | [`mercedes-mct/`](mercedes-mct/) |
| 02 | SMG, From BMW, with love — one of the most divisive transmissions in BMW history, and whether it deserves that reputation | [`bmw-smg/`](bmw-smg/) |
| 03 | Italian Twist to an Automatic Transmission — the Formula 1-inspired robotized manual behind the Aventador's brutal gearshifts | [`lamborghini-single-clutch/`](lamborghini-single-clutch/) |
| 04 | What's in a Name? — TipTronic was never its own transmission, just Porsche's trademark for an ordinary torque-converter automatic with a manual override gate | [`tiptronic/`](tiptronic/) |
| 05 | Best of German Tech? — the dual-clutch idea sat shelved for two decades before it ever reached a customer, then proved itself at Monza before Porsche put it in a road car | [`pdk/`](pdk/) |
| 06 | A manual with no clutch pedal — clutchless manuals automate only the clutch, an idea tried and dropped for seventy years before Hyundai and Kia's iMT | [`clutchless-manual/`](clutchless-manual/) |

## Design

Every page uses the **Motorsport Livery** system: carbon black foundation, a single racing-red accent reserved for interaction, Oswald + Inter typography, flat surfaces, near-square corners. Newer posts (e.g. [`tiptronic/DESIGN.md`](tiptronic/DESIGN.md)) carry their own copy of the token doc alongside the article instead of pointing back to a shared root file.

## Adding a post

1. `mkdir <slug>/assets`, write `<slug>/index.html` against the Motorsport Livery tokens (copy an existing post's `DESIGN.md` into the new folder as a reference).
2. Add a `.post` block to the root `index.html`.
3. Commit and push — Pages rebuilds in about a minute.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```
