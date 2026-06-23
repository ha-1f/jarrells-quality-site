# Jarrell's Quality — HVAC Website

Modern, animated marketing site for Jarrell's Quality, a family owned and
operated HVAC contractor serving Middle Tennessee.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [Framer Motion](https://www.framer.com/motion/) for scroll/hover animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + drei for the
  3D/particle hero scene
- lucide-react icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                    Route segments (App Router)
  page.tsx              Homepage
  services/             Services hub + individual service pages
  maintenance-plans/    Maintenance plans
  financing/            Financing
  about/                About
  reviews/              Reviews
  service-areas/        Service areas
  blog/                 Blog index + posts
  contact/              Contact / schedule service
components/
  layout/               Header, Footer
  sections/             Page-level sections (Hero, ServicesGrid, etc.)
  three/                React Three Fiber hero scene
  ui/                   Shared primitives (Reveal, GlowCard, CtaButtons, ...)
lib/
  site-config.ts        Single source of truth for business info, services,
                         nav links, stats, testimonials, and FAQs
```

## Editing Content

Most copy that repeats across the site (phone number, service area list,
hours, services, testimonials, FAQs) lives in `lib/site-config.ts` — update
it there rather than hunting through individual components.

## Known Placeholders

The following were not available from connected business tools and use
reasonable placeholders — update before launch:

- Testimonials/reviews (sample copy, not real customer quotes)
- "Our Work" gallery (icon-based placeholder; swap in real job photos)
- Business email address
- Exact hours
- License number (intentionally omitted rather than invented)

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Deployment

This app is a standard Next.js app and deploys cleanly to
[Vercel](https://vercel.com/new) or any Node-compatible host.
