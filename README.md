# blogs

Hand-written interactive automotive blog pages. No framework, no build step — plain HTML, CSS and vanilla JS, deployed with GitHub Pages. The root index shows posts in a responsive grid, newest first.

**Live:** https://modular-v8.github.io/blogs/

## Adding a post

1. `mkdir <slug>/assets`, write `<slug>/index.html` against the Motorsport Livery tokens (copy an existing post's `DESIGN.md` into the new folder as a reference).
2. Add a `.post` card at the start of the root `index.html` grid, linking to the post and its hero image.
3. Commit and push — Pages rebuilds in about a minute.

## Posts

The latest post, [Water injection systems](water-injection-systems/), explores how water injection helps cool an engine and why it remains uncommon. Its airflow illustration uses a canvas animation with assets in the post folder.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```
