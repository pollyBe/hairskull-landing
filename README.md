# Hairskull — Personal Website

Personal website for Alexey Platun, hairdresser-stylist and educator, author of the Hair Skull teaching method.

**Live:** [pollybe.github.io/hairskull-landing](https://pollybe.github.io/hairskull-landing/)

---

## Stack

- **Next.js 16** — App Router, static export (`output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll-triggered animations
- **GitHub Actions** — CI/CD deploy to GitHub Pages

---

## Features

- Single-page layout with anchor navigation
- Sticky header with mobile slide-out menu
- Scroll-triggered fade-in animations with stagger
- Fully responsive — mobile, tablet, desktop
- Static export — no server required, hosted on GitHub Pages

---

## Project Structure

```
hairskull/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main page (single scroll)
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutPreviewSection.tsx
│   │   │   ├── HairSkullMethodSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── EducationFormatsSection.tsx
│   │   │   ├── ReviewsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── FadeIn.tsx     # Reusable scroll animation wrapper
│   │       ├── Button.tsx
│   │       ├── SectionTitle.tsx
│   │       ├── StatCard.tsx
│   │       ├── EducationCard.tsx
│   │       ├── ReviewCard.tsx
│   │       ├── SocialLink.tsx
│   │       └── TimelineItem.tsx
│   ├── constants/
│   │   ├── navigation.ts
│   │   ├── socials.ts
│   │   └── contacts.ts
│   └── data/
│       ├── master.ts
│       ├── stats.ts
│       ├── education.ts
│       ├── hair-skull.ts
│       └── timeline.ts
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## Getting Started

```bash
cd hairskull
npm install
npm run dev
```

Open [http://localhost:3000/hairskull-landing](http://localhost:3000/hairskull-landing)

> Note: because `basePath` is set to `/hairskull-landing`, the dev server serves from that path.

---

## Deploy

Deploys automatically via GitHub Actions on every push to `main`.

To trigger manually — push any commit to `main` or re-run the workflow from the **Actions** tab.

Build output goes to `hairskull/out/` and is served as static files on GitHub Pages.

---

## Pending

- [ ] Real photos from client
- [ ] Real reviews from students
- [ ] Update contact links (Telegram, Instagram)
- [ ] Update `sitemap.ts` URL when custom domain is connected
