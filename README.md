# blogs

Hand-written, single-file interactive blog pages. No framework, no build step — plain HTML, CSS and vanilla JS, deployed with GitHub Pages.

**Live:** https://modular-v8.github.io/blogs/

## Adding a post

1. `mkdir <slug>/assets`, write `<slug>/index.html` against the Motorsport Livery tokens (copy an existing post's `DESIGN.md` into the new folder as a reference).
2. Add a `.post` block to the root `index.html`.
3. Commit and push — Pages rebuilds in about a minute.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```
