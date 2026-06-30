import { createFileRoute } from '@tanstack/react-router';
import BlogPostLayout, { type BlogSection } from '@/components/BlogPostLayout';

const URL = 'https://abodooproperties.co.uk/blog/hmo-vs-serviced-accommodation';
const TITLE = 'HMO vs Serviced Accommodation: Which Earns More in 2026? | Abodoo Properties';
const DESC =
  'A 2026 comparison of HMO and Serviced Accommodation in the UK: gross yield, operating costs, void risk, compliance burden, and which model fits which investor.';

export const Route = createFileRoute('/blog/hmo-vs-serviced-accommodation')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESC },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESC },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: URL },
    ],
    links: [{ rel: 'canonical', href: URL }],
  }),
  component: Page,
});

const sections: BlogSection[] = [
  { type: 'h2', text: 'The two models in one paragraph each' },
  { type: 'h3', text: 'HMO (House in Multiple Occupation)' },
  {
    type: 'p',
    text: 'A single property rented by the room to three or more unrelated tenants who share kitchen and bathroom facilities. Income is steady, tenancies are typically six to twelve months, and the operating model is closer to traditional letting with extra compliance.',
  },
  { type: 'h3', text: 'Serviced Accommodation (SA)' },
  {
    type: 'p',
    text: 'A self-contained property let on a short-stay basis — nightly, weekly, or monthly — to business travellers, contractors, and leisure guests. Revenue scales with occupancy and nightly rate, costs are higher, and management is far more active.',
  },

  { type: 'h2', text: 'Gross yield: SA usually wins on paper' },
  {
    type: 'p',
    text: 'In a strong location, a well-run SA unit can produce gross revenue 1.5x to 2.5x a single-let AST on the same property. A well-licensed HMO typically sits between the two — meaningfully above an AST, comfortably below peak SA.',
  },
  {
    type: 'p',
    text: 'Gross figures, though, mislead. The real question is what lands in the bank after costs.',
  },

  { type: 'h2', text: 'Operating costs: where SA gives margin back' },
  {
    type: 'ul',
    items: [
      'Utilities, council tax (where applicable), and broadband are operator costs in SA — not in an HMO let on individual tenancies.',
      'Cleaning between every stay is a structural SA cost; HMOs only clean communal areas.',
      'Platform fees (Booking.com, Airbnb) typically take 3–18% of gross.',
      'Furnishings refresh faster in SA due to higher turnover.',
    ],
  },
  {
    type: 'p',
    text: 'Net margin in SA is usually 35–50% of gross. HMO net margin is typically 55–70% of gross. The gap closes quickly.',
  },

  { type: 'h2', text: 'Void risk and seasonality' },
  {
    type: 'p',
    text: 'HMO voids are room-level and tend to be short in strong markets. SA occupancy fluctuates with seasonality, local events, and the broader business-travel cycle. A weak January in a leisure-led location can hurt; a strong summer in a tourist city can more than make up for it.',
  },
  {
    type: 'p',
    text: 'For investors who need consistent monthly income — to service a mortgage, for example — HMO is usually the safer profile. For those who can absorb variance, SA offers more upside.',
  },

  { type: 'h2', text: 'Compliance burden in 2026' },
  {
    type: 'p',
    text: 'HMO regulation is the more demanding of the two day-to-day: mandatory licensing above set thresholds, room-size minimums, fire safety, gas and electrical certificates, and council-specific Article 4 restrictions.',
  },
  {
    type: 'p',
    text: 'SA is lighter on ongoing compliance but heavier on operational disclosure: registration schemes in several UK cities, fire risk assessments, guest verification, and lender or freeholder consent for short stays. Both models reward operators who treat compliance as a system, not a one-off.',
  },

  { type: 'h2', text: 'So which earns more?' },
  {
    type: 'p',
    text: 'In a high-demand city-centre location with strong year-round business travel, SA usually wins on net income — and by a clear margin. In a student or commuter town with steady rental demand and limited short-stay competition, a well-run HMO often matches or beats SA on net, with a fraction of the operational effort.',
  },
  {
    type: 'p',
    text: 'The right answer is property-specific. Location, layout, title restrictions, and your appetite for active management all shape the outcome more than the model itself.',
  },
];

function Page() {
  return (
    <BlogPostLayout
      tag="Strategy"
      title="HMO vs Serviced Accommodation: Which earns more in 2026?"
      readTime="7 min read"
      intro="We compare gross yields, operating costs, void risk, and compliance burden across HMO and SA in the current UK market — and explain which profile fits which investor."
      sections={sections}
    />
  );
}
