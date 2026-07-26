# LUMA Website

Rebuild of [joinluma.org](https://joinluma.org) — Next.js 15 (App Router) + Tailwind CSS v4 + Framer Motion. All pages are statically prerendered.

## Pages

- `/` — hero, animated stats bar, two program cards, mission, sponsor marquee
- `/competitions` — how it works, past competitions (from Devpost), judging criteria, CTA
- `/ifsl` — fellowship stats, process, focus areas, FAQ accordion, apply CTA
- `/about` — origin story, mission pull quote, founder cards, stats
- `/sponsors` — sponsor grid, value props, tier table (placeholder), contact CTA

## Editing content

All copy-as-data lives in `lib/data.ts`: stats, competitions, judging criteria, sponsor names, FAQ answers, and links. Search the codebase for `[INSERT` to find every placeholder awaiting real info:

- IFSL application link (currently a mailto)
- Fellowship duration + next cohort date (FAQ)
- Remaining sponsor names (6 of 15+ listed, from Devpost pages)
- Sponsor tier contributions/benefits

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy

```bash
npm run build   # verify, then push to the Vercel-connected repo
```

The project is a standard Next.js app — import it into Vercel and point the joinluma.org domain at it.
