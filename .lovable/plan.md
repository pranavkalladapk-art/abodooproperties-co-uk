## Goal

Make the site credible, transparent, and compliant for an early-stage company — before ads or landlord outreach. Pure copy and small layout edits, no functional/backend changes.

## 1. Testimonials → "Why landlords work with us" (Option B)

`src/components/TestimonialsSection.tsx`
- Replace section label `TESTIMONIALS` → `WHY LANDLORDS WORK WITH US`.
- Replace heading → `What working with Abodoo looks like.`
- Replace the 3 fake quote cards with 6 benefit cards (icon + title + 1-line body):
  - Professional property management
  - Flexible rental strategies (R2SA / HMO / management)
  - Market-based income assessments
  - Guest communication & 24/7 support
  - Cleaning & maintenance coordination
  - Compliance, licensing & certifications handled
- Drop star ratings and name/role blocks. Keep existing dark-blue card styling and scroll-reveal animation.

## 2. Properties section → "Example accommodation styles"

`src/components/PropertiesSection.tsx`
- Section label `PORTFOLIO` → `EXAMPLE ACCOMMODATION STYLES`.
- Heading → `The standard of homes we operate.`
- Replace the per-card `income` strings ("£2,200/month guaranteed", "Sold — 22% ROI achieved") with neutral descriptors: e.g. `2-bed serviced apartment · city centre`, `Studio short-let · waterfront`, `3-bed refurbishment project · Leeds`.
- Replace `ROI 11.4% annually` corner badge with a neutral tag like `Illustrative example` (gold outline, same position/styling).
- Card titles become generic (`Birmingham City Centre`, `Manchester · Salford Quays`, `Leeds LS1`) — no fictional property names.
- Add a small caption line under the grid: `Images and examples shown are illustrative of the standard of accommodation we operate.`

## 3. Stats section → soften & qualify

`src/components/StatsSection.tsx`
- Replace fabricated stats with honest, non-numeric value props (4 cards, same grid):
  - `UK-wide` · Coverage across major cities
  - `In-house` · Sourcing, lettings & compliance team
  - `Fixed-rent` · Agreements available, subject to suitability
  - `48hrs` · Typical assessment turnaround
- Keep CountUp only on `48hrs` (already `raw`); remove animated currency/percent counters. Update `useCountUp` import only if unused after edit.

## 4. Hero & CTA copy — remove "zero hassle", "guaranteed"

`src/components/HeroSection.tsx`
- Headline: `Maximize Your Property Income With Zero Hassle` → `Smarter ways to earn from your UK property.`
- Subtitle keep, lightly reworded: `We help property owners and investors explore higher-performing letting and refurbishment strategies.`

`src/components/CTABanner.tsx`
- Heading: `Ready to see what your property could earn?` → `Curious what your property could earn?`
- Body: replace `Get a free income assessment in 48 hours. We'll show projected monthly returns…` with `Request a free, no-obligation property assessment. We'll share an indicative income range based on comparable listings and local demand — not a guaranteed figure.`
- Button: `Get My Free Assessment` (keep).
- Fine print: `No obligation · Indicative figures only · UK properties only`.

## 5. ServicesSection / services page — wording

`src/components/ServicesSection.tsx`
- Card bodies: remove "guaranteed", "zero hassle". Rewrite each body to "we operate / manage / structure …" wording (1 sentence each, same length).

`src/routes/services.tsx`
- Rent-to-HMO highlights: `Guaranteed monthly income above standard AST rates` → `Fixed-rent agreements above standard AST rates, subject to suitability`.
- Serviced Accommodation highlights: `Significantly higher gross income vs. long-let` → `Potential for higher gross income vs. long-let, depending on location and demand`.
- Refurbishment & Resale: `Target net returns of 15–25% per project cycle` → `Each project underwritten to a target return range agreed before exchange`.

## 6. WhyAbodoo — remove "zero regulatory risk", "guaranteed"

`src/components/WhyAbodooSection.tsx`
- `Guaranteed rent contracts` → `Fixed-rent agreements`. Body: `Income is contractually agreed for the term — subject to property suitability and contract terms.`
- `Fully compliant operations` body: drop `zero regulatory risk`; use `We handle licensing, safety certificates, and council requirements in line with current regulations.`

## 7. About section — more authentic positioning

`src/components/AboutSection.tsx`
- Label `OUR STORY` (keep). Heading → `A new property partner, built by investors.`
- Lead paragraph → `Abodoo Properties is a growing UK property management and serviced accommodation company. We help landlords explore modern letting strategies designed to improve rental performance, with transparency at every step.`
- Body paragraph → `We are building our portfolio across London, Manchester, Leeds, and beyond — applying three specialist strategies tailored to each property's location, condition, and income potential.`
- Tag row: keep `Est. 2026`, `UK-Wide Coverage`, `3 Specialist Strategies`.

## 8. FAQ — rewrite & extend

`src/components/FAQSection.tsx` — replace the `faqs` array:
1. `What is Rent to Serviced Accommodation (R2SA)?` — keep concept, remove "guaranteed", say `fixed monthly rent agreed in advance, subject to contract terms`.
2. `Is rent-to-rent legal?` (NEW) — `Yes, when structured correctly and with the appropriate landlord, lender, and freeholder permissions. We operate in line with applicable tenancy, licensing, and local short-let regulations.`
3. `Do I need permission from my mortgage lender or freeholder?` (NEW) — `In many cases, yes. We recommend confirming any mortgage, leasehold, and insurance restrictions before signing an agreement, and we are happy to support you through that process.`
4. `Are all properties suitable?` (NEW) — `No. Suitability depends on location, building rules, licensing requirements, and local demand. We assess each property individually before offering terms.`
5. `What happens if there is damage to the property?` (NEW) — `We carry out regular inspections, guest screening, and professional cleaning. Any issues are addressed in line with the management agreement and the relevant operating insurance.`
6. `How are income figures calculated?` (rewrite of earlier "guaranteed" Q) — `Indicative figures are based on market research, comparable listings, occupancy trends, and operational costs. They are estimates, not guaranteed earnings.`
7. `What happens if the property sits empty?` — rewrite to `Under a fixed-rent agreement, your rent is paid for the term regardless of occupancy, in line with the contract. For management clients, we use dynamic pricing and multi-channel marketing to minimise voids.`
8. `Where do you market properties?` (NEW, replaces Airbnb implication) — `Depending on the property and local regulations, we may market accommodation through platforms such as Airbnb, Booking.com, and direct corporate channels.`
9. `What areas do you operate in?` — keep, soften "expanding" claim.
10. `How quickly can a property be set up?` — keep, rephrase "10–14 days" as "typically within a few weeks, subject to compliance checks".
11. `What compliance and certifications do you handle?` — keep, factual.

Also update the FAQPage JSON-LD in `src/routes/index.tsx` to mirror the new questions/answers.

## 9. Footer disclaimer + legal pages stub

`src/components/Footer.tsx`
- Below the existing bottom row, add a second small line: `Images, example properties, and figures shown on this site are illustrative. Abodoo Properties is a trading name; company registration details available on request.`
- Add a fourth column (or extend Company) with links: `Privacy Policy`, `Terms of Service`, `Cookies` pointing to `/privacy`, `/terms`, `/cookies` (placeholders — see section 10).

## 10. Lightweight legal placeholder routes (so footer links resolve)

Create three minimal TanStack route files reusing the existing dark layout / footer:
- `src/routes/privacy.tsx`
- `src/routes/terms.tsx`
- `src/routes/cookies.tsx`

Each contains a single hero + prose block with placeholder copy and a note: `This page is a placeholder. Final policy text will be published before the site is used for marketing or landlord outreach.` Each sets its own `head()` with unique title, description, canonical.

## Out of scope

- No backend/data/auth changes.
- No new design tokens, fonts, colors, or libraries.
- No changes to `/strategies` detail pages beyond what's already covered in section 5.
- No changes to Navbar, HowItWorks, WhoWeWorkWith, ContactSection, WhatsAppButton.

## Files touched

Edited:
- `src/components/TestimonialsSection.tsx`
- `src/components/PropertiesSection.tsx`
- `src/components/StatsSection.tsx`
- `src/components/HeroSection.tsx`
- `src/components/CTABanner.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/WhyAbodooSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/FAQSection.tsx`
- `src/components/Footer.tsx`
- `src/routes/services.tsx`
- `src/routes/index.tsx` (FAQPage JSON-LD only)

New:
- `src/routes/privacy.tsx`
- `src/routes/terms.tsx`
- `src/routes/cookies.tsx`
