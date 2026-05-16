## Goal

Create a dedicated `/services` page for the four Abodoo services, and keep the home page's OUR SERVICES section as a preview that links into it. No navbar change.

## New route

- `src/routes/services.tsx` → `/services`
- Uses `createFileRoute('/services')` with its own `head()` metadata (unique title, description, og:title, og:description, canonical) for SEO and share previews.

## Page structure (dark navy + gold, matches existing site)

1. **Sticky top navbar** — reuse the same shell as `/strategies` inner pages (logo on left, "← Back" link to home, mobile hamburger). No 4-strategy nav row needed since this page IS the overview.
2. **Hero band**
   - Gold eyebrow "OUR SERVICES"
   - Playfair `<h1>` "Four proven strategies. One trusted partner."
   - Muted lead paragraph expanding the home subtitle.
3. **Four service cards** — same 4 items as home (Rent-to-HMO, Serviced Accommodation, BRRR Projects, Refurbishment & Resale), but richer:
   - Gold outline icon, title, 2-sentence description, 3 bullet highlights, gold "Learn more →" link going to the matching strategy detail page (`/strategies/rent-to-hmo`, etc).
   - 2-col on tablet, 2x2 grid on desktop (cards are taller than the home preview).
4. **"How we work with you" strip** — 3-step row (Discover → Match → Manage) explaining how Abodoo picks the right strategy per client. Short, gold-accented numbered cards.
5. **Bottom gold CTA banner** — "Not sure which strategy fits?" with primary "Book a consultation" (links to `/#contact`) and secondary "Back to home" (links to `/`).
6. **Footer** — reuse the same simple "© 2025 Abodoo Properties · London, United Kingdom" footer used on the strategy pages.

## Home section update (`src/components/ServicesSection.tsx`)

- Keep the existing 4-card layout untouched as a preview.
- Change each card's "Learn more →" from `href="#contact"` to a TanStack `<Link>` going to the matching strategy page (`/strategies/<slug>`).
- Add a centered "View all services →" gold link below the grid, pointing to `/services`.

## Out of scope

- No changes to the main Navbar, other home sections, or unrelated routes.
- No new design tokens, fonts, or libraries — reuse existing dark navy `#0d1117`, gold `#c9a84c`, Playfair + Inter.
- No backend / data fetching — content is static in the route file.
- No change to the existing `/strategies` page or strategy detail pages.

## Files touched

- New: `src/routes/services.tsx`
- Edited: `src/components/ServicesSection.tsx` (card links + "View all services" CTA)
- Auto-regenerated: `src/routeTree.gen.ts` (by the Vite plugin — not edited manually)
