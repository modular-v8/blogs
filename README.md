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

## Private analytics (GoatCounter)

The homepage and all published posts load `assets/analytics.js`, configured for `https://bhavyap.goatcounter.com`. Sign in there to view the statistics. For initial setup or a different account:

1. Create an account at https://www.goatcounter.com/signup, using `modular-v8.github.io/blogs/` as the site domain.
2. Set `site` near the top of `assets/analytics.js` to your GoatCounter site URL (for example, `https://yourname.goatcounter.com`). This collection address is public; no password or API token belongs in the repository.
3. In GoatCounter's site settings, keep the dashboard private and public visitor counters disabled. These are account settings, not settings the blog's script can enforce.
4. Commit and push. Open a published post, then sign in to your GoatCounter dashboard to check its statistics. Counts usually appear within about 10 seconds, unless the request is blocked by your browser or an extension.

Only the production blog sends visits. Local previews, files opened directly, and forks do not load the external tracker. Each post is tracked separately; `index.html` and directory URLs share one entry, and query parameters do not split the count. GoatCounter's default session rules group repeated opens into visits; disable sessions under Settings → Data collection → Sessions if you want every page load counted instead.

To exclude your own browser, open `https://modular-v8.github.io/blogs/#toggle-goatcounter`, reload, and follow GoatCounter's confirmation. Repeat for each browser/device; opening that URL again toggles tracking back on. Alternatively use GoatCounter's Ignore IPs setting. No counter or dashboard link is displayed to blog readers.

For a new post, copy an existing page or include `<script src="../assets/analytics.js" defer></script>` in its `<head>`.

Setup documentation: https://www.goatcounter.com/help/start and https://www.goatcounter.com/help/skip-dev.

## Posts

The latest post, [Water injection systems](water-injection-systems/), explores how water injection helps cool an engine and why it remains uncommon. Its airflow illustration uses a canvas animation with assets in the post folder.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```
