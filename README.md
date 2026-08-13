# TIYE Website — Developer Handoff

Static HTML/CSS/JS site. No build step, no framework, no dependencies beyond
Google Fonts (loaded via CDN link in each page's <head>). Just deploy the
folder as-is to any static host (Netlify, Vercel, GitHub Pages, S3, cPanel, etc.)
or drop it behind your existing backend.

## File structure

```
index.html                              Home
about.html                               About Us
team.html                                Meet the Team
programmes.html                          Programmes hub (links to the 3 below)
programme-digitalskill4all.html          Programme detail — DigitalSkill4All
programme-ai4all.html                    Programme detail — AI4All
programme-ogun-digital-summit.html       Programme detail — Ogun Digital Summit
impact.html                              Impact + report download
css/styles.css                           Single shared stylesheet for all pages
js/main.js                               Shared JS (mobile nav toggle + hero pixel-motif builder)
reports/README.txt                       Note for where to drop the real impact report PDF
```

Every page shares the same `<header>` nav and `<footer>` markup (hand-copied
per file, not templated) and links to `css/styles.css` and `js/main.js` with
relative paths — keep the folder structure intact when deploying.

## What still needs real content before launch

**Images** — every photo slot on the site is a placeholder: a dashed box with
a small icon and a caption describing what should go there (e.g. "Team photo",
"Programme photo — classroom session"). Search the codebase for the CSS class
`img-ph` to find every instance. Swap each one for a real `<img>` tag (or set
it as a CSS `background-image`) at roughly the same aspect ratio — the
placeholder's ratio classes (`ratio-1x1`, `ratio-4x3`, `ratio-3x4`, `ratio-4x5`,
`ratio-16x9`, or an inline `aspect-ratio` style) tell you the intended crop.

**Team page (`team.html`)** — all 7 names are `[Full Name]` placeholders with
suggested role titles. Replace with real names, titles, bios, photos, and
LinkedIn/email links (currently `href="#"`).

**Bracketed placeholders** — search for `[` throughout the HTML files. These
mark specific facts we didn't have (dates, durations, locations, prices,
quotes, speaker names, agenda times, etc.) and need real copy.

**Impact numbers (`impact.html`, and the mini-stats on `index.html`)** — stat
cards currently show "—" rather than a fabricated number. Replace with real,
verified figures.

**Impact report download** — the "Download impact report" button on
`impact.html` links to `reports/TIYE-Impact-Report.pdf`. Drop the real PDF at
that exact path (see `reports/README.txt`) and the button works with no other
changes.

**Contact / forms** — all "Apply", "Donate", "Volunteer", "Partner", "Ask a
question" etc. buttons currently link to `#contact` (the footer) or are inert
`href="#"`. These need to be wired to real forms, a donation processor, or
mailto/application links per your backend.

**Footer contact details** — `hello@tiye.org`, the address line, and the
social links in every footer are placeholders. Update sitewide (they're
duplicated per page since there's no templating layer).

**Partner logos (`index.html`)** — the "Our Partners" section has 6 dashed
logo placeholder slots; drop real partner/funder logos in once confirmed.

## Design system reference

All colors, type, spacing and component styles live in `css/styles.css` as
CSS custom properties at the top (`:root`), e.g. `--blue`, `--green`,
`--orange`, `--navy`. Reuse these variables rather than hardcoding new colors
so the whole site stays consistent if the palette changes.

Fonts: Space Grotesk (display/headings), Inter (body), IBM Plex Mono
(labels/eyebrows/small caps text) — loaded from Google Fonts in each page's
`<head>`. Swap to a self-hosted font pipeline if you want to drop the
external CDN dependency.

## Responsive

Breakpoints are at 960px, 700px, 600px, and 420px (see the bottom of
`css/styles.css`). All grids, the hero photo collage, and the nav (which
collapses to a hamburger menu below 960px) have been tested down to small
phone widths.
