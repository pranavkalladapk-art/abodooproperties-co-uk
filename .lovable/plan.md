## Goal

Turn each of the 4 strategy cards on `/strategies` into its own full inner page, so "Learn more →" navigates to a dedicated route instead of scrolling to an in-page section.

## New routes

Create one route file per strategy under `src/routes/`:

- `src/routes/strategies.rent-to-hmo.tsx` → `/strategies/rent-to-hmo`
- `src/routes/strategies.serviced-accommodation.tsx` → `/strategies/serviced-accommodation`
- `src/routes/strategies.brrr-projects.tsx` → `/strategies/brrr-projects`
- `src/routes/strategies.refurbishment-resale.tsx` → `/strategies/refurbishment-resale`

Each route uses `createFileRoute` with its own `head()` metadata (unique title, description, og:title, og:description) for SEO and share previews.

## Shared layout for inner pages

Extract a single reusable `StrategyPageLayout` component (e.g. `src/components/StrategyPageLayout.tsx`) so the 4 pages stay consistent and DRY. It renders:

1. The same sticky navbar already on `/strategies` (logo + 4 strategy links + mobile hamburger), with the current strategy link highlighted as active.
2. A hero band — gold eyebrow ("Strategy 01/02/03/04"), gold outline icon, large Playfair `<h1>` title, lead paragraph.
3. A two-column body section:
   - Left: 3–4 paragraph long-form explanation of the strategy.
   - Right: a "Key benefits" card listing the 4 benefit bullets (gold dot + text), styled like the existing cards (`#141c28`, gold border, rounded).
4. A "How it works" 3–4 step strip (numbered steps, gold accents) tailored per strategy.
5. A full-width gold CTA banner: "Ready to explore [Strategy name]?" with two buttons — primary "Get in touch" (links to `/#contact`) and secondary "Back to all strategies" (links to `/strategies`).
6. Reuses the same footer block currently on `/strategies`.

The 4 route files just pass strategy-specific data (title, icon, copy, benefits, steps, meta) into the layout — no duplicated markup.

## Updates to `/strategies`

- Change each card's `href={'#' + id}` to a TanStack `<Link to="/strategies/$slug" params={{ slug }}>` so clicking "Learn more →" navigates to the new inner page.
- Remove the four inline `<section id="...">` deep-dive blocks below the hero cards (they're now full pages). Keep hero + cards + footer only.
- Update the in-page nav links so they point to the new inner routes too.

## Content per page

Reuse the existing long descriptions and benefit lists already written in `src/routes/strategies.tsx`. Add a short 3–4 step "How it works" list for each:

- Rent-to-HMO: 1) Property assessment 2) Lease agreement signed 3) Refurb & furnish to HMO spec 4) Tenants placed, guaranteed rent begins.
- Serviced Accommodation: 1) Onboarding & styling 2) Multi-channel listing setup 3) Dynamic pricing live 4) Monthly payouts.
- BRRR Projects: 1) Deal sourced & analysed 2) Acquire & refurbish 3) Tenant & stabilise 4) Refinance & recycle capital.
- Refurbishment & Resale: 1) Acquisition with exit modelled 2) Scope agreed, contractors mobilised 3) Refurb delivered on schedule 4) Marketed and sold via partner agents.

## Visual style

Match the existing `/strategies` aesthetic exactly — `#0d1117` background, `#141c28` surfaces, `#c9a84c` gold accents, Playfair headings, Inter body, gold outline icons (lucide-react). No new colors, fonts, or libraries.

## Out of scope

- No changes to the main site Navbar (`src/components/Navbar.tsx`), home page sections, or any unrelated routes.
- No backend / data fetching — content stays static, defined in route files.
- No new design system tokens.

## Files touched

- New: `src/components/StrategyPageLayout.tsx`
- New: 4 route files under `src/routes/strategies.*.tsx`
- Edited: `src/routes/strategies.tsx` (cards link out, drop inline deep-dive sections)
- Auto-regenerated: `src/routeTree.gen.ts` (by the Vite plugin — not edited manually)