## Goal

Match the visual layout, alignment, and box styling of the six reference screenshots while preserving all existing copy, sections, and 3D hero scene.

## Section-by-section changes

### 1. HeroSection (`src/components/HeroSection.tsx`)
- Keep current headline/subtitle/CTA text.
- Tighten layout: gold divider line + centered `PROPERTY INCOME SPECIALISTS · UNITED KINGDOM` label, headline wrapping cleanly on 2 lines (clamp 48–80px), short subtitle, then two side-by-side buttons.
- Buttons: equal width pill-rounded (radius 8), 52px tall, ~200px min-width. Primary = solid gold `#C6A96B` with midnight text; Secondary = transparent with gold border + gold text. Both same size, side-by-side with 16px gap.
- Remove the small "100+ Properties Managed · …" trust line below buttons (it crowds the layout in the reference). Keep only buttons + scroll indicator.

### 2. StatsSection (`src/components/StatsSection.tsx`) — match image-2
- Switch from centered to **left-aligned** section header sitting above the stats row: gold uppercase label `WHY ABODOO`, then large Playfair H2 (kept current copy: "The smarter way to invest in UK property" — actually keep current text but reformat to the same left-aligned style).
- 4 stats in a single row separated by thin vertical gold dividers (1px, `rgba(198,169,107,0.12)`); no horizontal dividers, no boxed cards. Each stat: large gold Playfair number left-aligned, small ivory label below.
- Numbers left-aligned within each cell (not centered).
- Mobile: 2×2 grid, dividers between cells.

### 3. ServicesSection (`src/components/ServicesSection.tsx`) — match image-3
- Switch section header to left-aligned (gold label `OUR SERVICES`, large H2, optional subtitle).
- Cards: solid dark background `rgba(20,28,46,0.7)`, 1px subtle border `rgba(198,169,107,0.08)`, radius 14, padding 36px. No gradient, no glass blur, no hover translate.
- Inside card: gold icon (top-left, 32px), then Playfair title, then short body (keep current copy), then `Learn more →` gold link at the bottom. Remove the STRATEGY pill, the bullet list, and the badge chip — the reference is much cleaner.
- Equal heights via flex column with link pushed to bottom.
- Remove the "selected" highlight on Strategy 02 (reference shows all three identical).

### 4. PropertiesSection (`src/components/PropertiesSection.tsx`) — match image-4
- Cards: rounded 16px, image fills container with `object-fit: cover`, aspect ratio `4/3` (wider/shorter than current 3/4).
- Single ROI badge top-right only: `ROI {value} annually` format inside a dark pill (`rgba(11,20,38,0.75)`, 1px gold border, radius 8, padding 8px 14px). Remove the top-left `RENT TO SA / FLIP & EXIT` tag and the dual-line badge.
- Remove the bottom gradient overlay + caption (location/name/income) — reference shows image only with the ROI badge. Keep caption optional below the image if needed; default to image + badge only to match reference.
- Same gap and equal heights across the row.

### 5. TestimonialsSection (`src/components/TestimonialsSection.tsx`) — match image-5
- Switch from single auto-rotating card to a **3-card row** showing all three testimonials side-by-side (lg:grid-cols-3, md:grid-cols-2, sm:grid-cols-1).
- Header left-aligned: gold `TESTIMONIALS` label, Playfair H2 "What our landlords and investors say".
- Card: dark `rgba(20,28,46,0.7)`, 1px border `rgba(198,169,107,0.08)`, radius 14, padding 32px. Five gold stars top, italic Playfair quote, then bold ivory name and small gold role line.
- Remove auto-rotate carousel + dot pagination.

### 6. ContactSection (`src/components/ContactSection.tsx`) — match image-6 (right column only)
- **Form (left column):** keep current boxed inputs as the user requested — no change to input style or submit button.
- **Right column:** replace the stacked `icon + text` rows + map placeholder with 4 `icon-box` rows matching the reference. Each row = full-width pill (`rgba(20,28,46,0.55)`, 1px border `rgba(198,169,107,0.10)`, radius 12, padding 18px 22px) containing: square gold-bordered icon tile (44×44, radius 8) on the left, then a small uppercase gold label (`EMAIL`, `PHONE`, `WHATSAPP`, `ADDRESS`) above the value in ivory.
- Replace map placeholder with a slightly taller version of the same boxed style (or remove if it doesn't fit visually).
- Right column vertically aligned to top of form.

### 7. Global polish
- Add a `.section-head--left` modifier in `src/styles.css` for the new left-aligned headers (text-align: left; max-width: none; remove `mx-auto` on subtitle).
- Ensure all cards across sections share the same border color and radius so the visual language is consistent.

## Out of scope
- No copy changes (headlines, descriptions, stats values, testimonial quotes all stay).
- 3D hero canvas stays unchanged.
- Form inputs/submit button stay as they are now.
