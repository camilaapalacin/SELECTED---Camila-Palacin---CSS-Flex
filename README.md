# SELECTED — Independent Cultural Archive

SELECTED is an independent cultural archive exploring electronic music through curated sessions, artists, events, places and editorial stories.

## Pages

- `index.html` — Home
- `pages/about.html` — About / manifesto and curatorial approach
- `pages/sessions.html` — Curated DJ sessions, categories and session notes
- `pages/archive.html` — Cultural references and upcoming events
- `pages/journal.html` — Editorial stories, categories and article reading views
- `pages/contact.html` — Contact form, newsletter and collaborations

Contact is a dedicated page, separate from Archive. The current project therefore has six HTML documents in total (`index.html` + five files in `pages/`), while the original course checklist requested five documents in total. Confirm with the tutor whether the additional page is accepted or whether one page must be consolidated before final submission.

## Stack

- HTML5 semantic structure
- Bootstrap 5.3 responsive navbar and carousel
- SCSS partials compiled to `styles/style.css`
- AOS for scroll-reveal animation
- Native SCSS transitions and responsive media queries

## Run locally

1. Install dependencies with `npm install`.
2. Compile styles with `npm run build:scss`.
3. Open `index.html` with Live Server.
4. While editing SCSS, use `npm run scss` to watch and recompile changes.

## Project structure

```text
index.html
pages/
  about.html
  sessions.html
  archive.html
  journal.html
  contact.html
scss/
  base/
  components/
  layout/
  utilities/
  main.scss
styles/
  style.css
assets/
scripts/
  main.js
```

## Live website

The project is deployed publicly on Netlify:

**https://visionary-mermaid-f6217d.netlify.app/**

## GitHub repository

The source code is maintained in the GitHub repository connected to Netlify. Make sure the repository visibility is set to **Public** so the course tutor can access it.

## Homepage redesign
The homepage (`index.html`) has been redesigned with a chrome-inspired hero, manifesto, four editorial area cards, latest sessions, upcoming selection, journal highlights and newsletter footer. Styles live in `scss/components/_home-redesign.scss` and are imported by `scss/main.scss`; the compiled stylesheet is `styles/style.css`.

## Current design system

- Shared navigation: fullscreen white hamburger with a black overlay and keyboard / close-button support.
- Shared footer: acid-lime SELECTED footer across every page.
- Home: chrome-inspired hero, manifesto, area cards, latest sessions, upcoming selection, journal and newsletter.
- About: editorial manifesto, perspective, areas and values.
- Sessions: featured mixes, category filters, six session cards and expandable session notes / tracklist previews.
- Archive: selected references and six upcoming event cards. The former Past Events block has been removed.
- Journal: featured story, category filters, five editorial cards and long-form reading views.
- Contact: standalone page with lime-to-neon-green gradient, contact form and Selected Letter block.

## Responsive and interaction notes

Sessions and Journal filters are functional JavaScript filters. Session cards open the related native `details` panel through the URL hash. Journal stories open their reading view through the story hash. AOS remains included for scroll reveals, with native SCSS transitions on cards and links.

## Delivery checklist

- [x] Public deployment on Netlify.
- [x] Live website URL included in this README.
- [ ] GitHub repository visibility set to **Public**.
- [ ] At least two descriptive commits in the GitHub repository.

## Latest page builds — Sessions and Journal

- Sessions: featured artists, six archive entries matching the existing project content, sound-category filters, expandable session notes and tracklist placeholders.
- Journal: featured essay, filterable editorial cards, and five reading views with previous / next story navigation.
- Audio files were not included in the supplied project assets, so no fake audio player has been wired in. Add audio sources later to enable playback.

## Responsive corrections — November 2026

A final responsive pass has been added for mobile widths (including 375px devices) and tablet widths. It prevents horizontal overflow, scales oversized display typography, changes dense card grids to single-column layouts on phones, adapts the Contact press/collaborations heading and newsletter form, keeps the Home chrome word inside the hero, improves the Sessions/Contact marquees and reduces the shared footer wordmark so it no longer clips. The source is `scss/components/_responsive-final.scss`, imported from `scss/main.scss`; the corresponding compiled rules are included in `styles/style.css`.
