# TIYE Website

Marketing site for TIYE (Technology Initiative for Youth Empowerment), built
with **Next.js (App Router)** and React. Originally a static HTML/CSS/JS site;
now converted to Next.js so it can be extended with a CMS (Sanity) and other
dynamic features. The design and markup are unchanged from the original.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Other scripts:

```bash
npm run build   # production build (static-prerenders every page)
npm run start   # serve the production build
```

Requires Node 20+.

## File structure

```
app/
  layout.js                         Root layout — fonts, favicon, <Header> (shared across pages)
  globals.css                       Single shared stylesheet (was css/styles.css)
  page.js                           Home                       → /
  about/page.js                     About Us                   → /about
  team/page.js                      Meet the Team              → /team
  impact/page.js                    Impact + report download   → /impact
  programmes/page.js                Programmes hub             → /programmes
  programmes/digitalskill4all/page.js   Detail — DigitalSkill4All      → /programmes/digitalskill4all
  programmes/ai4all/page.js             Detail — AI4All                → /programmes/ai4all
  programmes/ogun-digital-summit/page.js Detail — Ogun Digital Summit  → /programmes/ogun-digital-summit
  components/
    Header.js                       Nav (active-link state via usePathname + mobile menu toggle) — client component
    Footer.js                       Shared footer
    Logo.js                         Inline SVG wordmark
    PixelGrid.js                    Hero pixel-cluster motif (ported from the old js/main.js)
public/
  img/                              All site images (referenced as /img/...)
  reports/                          Drop the impact report PDF here
next.config.mjs                     Next.js config
jsconfig.json                       Path alias (@/* → project root)
legacy/                             The original static HTML/CSS/JS, archived (not used by the app)
```

### How the old site maps to Next.js

- The per-file `<header>` and `<footer>` markup that used to be hand-copied into
  every HTML file is now the shared `Header` and `Footer` components. `Header`
  lives in `app/layout.js`, so it renders on every route automatically; the
  active nav link is derived from the current path. The Ogun Digital Summit page
  keeps its own slightly different footer inline.
- `js/main.js` (mobile nav toggle + hero pixel motif) was ported into React:
  the pixel grid renders declaratively in `PixelGrid.js`, and the mobile menu is
  state-driven in `Header.js` (reproducing the original toggle behaviour, so
  `globals.css` did not need changes).
- Images use plain `<img>` tags (not `next/image`) so the existing CSS keeps
  working as-is. Assets moved from `img/` to `public/img/`, so `src` paths
  changed from `img/...` to `/img/...`.
- Fonts (Space Grotesk, Inter, IBM Plex Mono) are still loaded from Google Fonts
  via `<link>` tags in the root layout's `<head>`.

## What still needs real content before launch

**Team page (`app/team/page.js`)** — role titles are set, but the LinkedIn/email
links are placeholder `href="#"`, and photos all point at `/img/teacher.webp`.
Add real headshots and social links.

**Bracketed placeholders** — search for `[` across `app/` (e.g. dates, durations,
locations, ticket prices, quotes, speaker names, agenda times). These mark facts
that need real copy.

**Impact report download** — the "Download impact report" button on
`/impact` links to `/reports/TIYE-Impact-Report.pdf`. Drop the real PDF at
`public/reports/TIYE-Impact-Report.pdf` and the button works with no other
changes.

**Contact / forms** — "Apply", "Donate", "Volunteer", "Partner", etc. currently
link to `#contact` (the footer) or inert `href="#"`. Wire these to real forms,
a donation processor, or mailto/application links.

**Footer contact details** — `hello@tiyeafrica.org` (and `hello@tiye.org` on the
Ogun page), the address line, and social links are placeholders. The standard
footer is centralized in `Footer.js`; the Ogun page has its own inline footer to
update separately.

**Partner logos (home page)** — the "Our Partners" section mixes real logos with
placeholder slots; confirm and finalize.

## Design system reference

All colors, type, spacing, and component styles live in `app/globals.css` as CSS
custom properties at the top (`:root`) — e.g. `--blue`, `--green`, `--orange`,
`--navy`. Reuse these variables rather than hardcoding new colors so the site
stays consistent.

## Responsive

Breakpoints are at 960px, 700px, 600px, and 420px (see the bottom of
`app/globals.css`). All grids, the hero photo collage, and the nav (which
collapses to a hamburger menu below 960px) work down to small phone widths.
