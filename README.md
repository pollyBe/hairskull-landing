# Hairskull — Personal Website

Personal website for Alexey Platun, hairdresser-stylist and educator, author of the Hair Skull teaching method.

## Stack

- **Next.js 16** — App Router, all routes prerendered as static
- **TypeScript** (strict)
- **Tailwind CSS v4** — design tokens in `@theme` (`src/app/globals.css`)
- **Fonts** — self-hosted via Fontsource + `next/font/local` (`src/app/fonts.ts`), no requests to Google
- **Embla Carousel** — works slider (desktop; on mobile it's a native scroll-snap strip)
- **Vercel** — hosting and deploys
- **GitHub Actions** — CI: lint, typecheck, format check, build

No animation library: scroll reveals use a tiny IntersectionObserver (`FadeIn`) plus CSS,
hero entrance uses CSS keyframes, the mobile menu is a native `<dialog>`.
All motion respects `prefers-reduced-motion`, and content is visible without JS.

## Getting started

```bash
nvm use        # Node 22, see .nvmrc
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script              | What it does                           |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Dev server                             |
| `npm run build`     | Production build                       |
| `npm run start`     | Serve the production build             |
| `npm run lint`      | ESLint                                 |
| `npm run typecheck` | Generate route types and run `tsc`     |
| `npm run format`    | Prettier (with Tailwind class sorting) |
| `npm run check`     | lint + typecheck + format check        |

## Project structure

```
src/
├── app/                  # One-page landing: the only route is /
│   ├── layout.tsx        # Fonts, global metadata, Header/Footer, skip link
│   ├── globals.css       # Tailwind theme tokens, reveal & menu styles
│   ├── sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg
├── components/
│   ├── layout/           # Header, MobileMenu, Footer, Container
│   ├── sections/         # Page sections
│   └── ui/               # Small reusable building blocks
├── constants/navigation.ts
├── data/                 # All site content — edit texts and numbers here
├── lib/                  # cn(), pageMetadata()
└── types/content.ts      # Types for the content in data/
```

## Content

All texts, numbers and links live in `src/data`:

- `stats.ts` — every number on the site (prize places are computed from `master.competitionResults`)
- `contacts.ts` — Telegram / Instagram / location (one source for header and contacts) + contacts section texts
- `master.ts` — name, short bio, competition results
- `hero.ts` — first screen
- `hair-skull.ts` — method section, principles and the "see-through" scheme (illustration + note positions)
- `works.ts` — works slider (photos and alt texts, in order)
- `tools.ts` — tools strip
- `education.ts` — education formats (texts, polaroid photos, captions)
- `reviews.ts` — reviews; the section isn't on the page in the current design

Handwritten notes (Caveat) are drafts awaiting the master's approval — they're marked `TODO` in these files.

Images live in `src/assets/images/` and are used via static imports (`import img from "@/assets/images/…"`).

## Deploy (Vercel)

1. Import the repository in Vercel — framework and settings are detected automatically.
2. No environment variables are required. The site URL (canonical links, sitemap, robots,
   Open Graph) is taken from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, i.e. the production
   `*.vercel.app` address. If a custom domain is connected later, set `NEXT_PUBLIC_SITE_URL` to it.
3. Every push to `main` deploys to production, pull requests get preview deployments.

Google Search Console: the verification file is served from `public/googlebc0d685fbf1dd03d.html`.
Add the production `*.vercel.app` URL as a URL-prefix property and verify it with this file.

## Pending

- [ ] Real reviews from students
- [ ] Confirm Telegram and Instagram handles in `data/contacts.ts`
- [ ] Set `NEXT_PUBLIC_SITE_URL` if a custom domain is ever connected
