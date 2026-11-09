# blogs

Hand-written interactive automotive blog pages. No framework, no build step — plain HTML, CSS and vanilla JS, deployed with GitHub Pages. The root index shows posts in a responsive grid, newest first.

**Live:** https://modular-v8.github.io/blogs/

## Adding a post

1. `mkdir <slug>/assets`, write `<slug>/index.html` against the Motorsport Livery tokens (copy an existing post's `DESIGN.md` into the new folder as a reference).
2. Add a `.post` card at the start of the root `index.html` grid, linking to the post and its hero image.
3. Commit and push — Pages rebuilds in about a minute.

## Reading time

Every published post loads the shared reading-time assets in its `<head>`:

```html
<link rel="stylesheet" href="../assets/reading-time.css">
<script src="../assets/reading-time.js" defer></script>
```

Include these two lines when creating a new post (copying an existing post already includes them). The script adds an `N min read` estimate below the header's home link, above the title, using the current article text at 200 words per minute, rounded up to at least one minute. It recalculates on every page load, so editing a post needs no manual estimate or build step.

The count includes the header introduction and main content, but skips sources, image credits, placeholders, navigation, hidden content, and interactive controls. Add `data-reading-time-exclude` to any other element that should be omitted. Posts use `header.masthead` or `header.hero`, with a `.masthead__kicker` or `.kicker` inside, and a `<main>` for the article. With JavaScript disabled, the estimate is simply omitted.

## Posts

The latest post, [Water injection systems](water-injection-systems/), explores how water injection helps cool an engine and why it remains uncommon. Its airflow illustration uses a canvas animation with assets in the post folder.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```
