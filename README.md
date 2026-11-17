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

## Deployment

Deployment to Vercel or Netlify and publication of the live URL in this README remain to be completed from the project owner's account. The repository must also be public and contain at least two descriptive commits before final submission.

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

## Delivery status

Deployment to Vercel or Netlify and publication of the live URL in this README remain to be completed from the project owner's account. The repository must also be public and contain at least two descriptive commits before final submission.

## Latest page builds — Sessions and Journal

- Sessions: featured artists, six archive entries matching the existing project content, sound-category filters, expandable session notes and tracklist placeholders.
- Journal: featured essay, filterable editorial cards, and five reading views with previous / next story navigation.
- Audio files were not included in the supplied project assets, so no fake audio player has been wired in. Add audio sources later to enable playback.
