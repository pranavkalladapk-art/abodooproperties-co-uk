import { createFileRoute } from '@tanstack/react-router';
import BlogPostLayout, { type BlogSection } from '@/components/BlogPostLayout';

const URL = 'https://abodooproperties.co.uk/blog/rent-to-serviced-accommodation';
const TITLE = 'What is Rent-to-Serviced Accommodation? | Abodoo Properties';
const DESC =
  'A plain-English guide to Rent-to-SA agreements: how they work, what landlords gain, the property types best suited, and the risks to weigh before signing.';

export const Route = createFileRoute('/blog/rent-to-serviced-accommodation')({
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
  { type: 'h2', text: 'What does Rent-to-SA actually mean?' },
  {
    type: 'p',
    text: 'Rent-to-Serviced Accommodation (R2SA) is a management agreement where an operator takes a long-term lease on a residential property from the owner, then re-lets it on a short-stay basis to business travellers, contractors, relocating professionals, and leisure guests.',
  },
  {
    type: 'p',
    text: 'The landlord receives a fixed monthly rent — paid whether the property is occupied or not — while the operator manages bookings, cleaning, guest communication, and compliance. It sits between a traditional AST and a fully self-managed Airbnb.',
  },

  { type: 'h2', text: 'How the agreement is structured' },
  {
    type: 'p',
    text: 'A typical R2SA contract runs for three to five years and includes the landlord\'s written consent to use the property for short-term lets. The operator is responsible for furnishings, utilities, council tax (where applicable), and day-to-day upkeep.',
  },
  {
    type: 'ul',
    items: [
      'Fixed rent paid monthly, in advance, on a set date.',
      'Written consent to use the property for short stays, given by the freeholder and mortgage lender where required.',
      'Clear schedule of condition, with a return-in-same-condition clause at the end of the term.',
      'Defined break clauses and notice periods for both parties.',
    ],
  },

  { type: 'h2', text: 'What landlords typically gain' },
  { type: 'h3', text: 'Guaranteed rent' },
  {
    type: 'p',
    text: 'Income is paid on the same date every month, regardless of voids, late-paying guests, or seasonal demand. For landlords who value predictability over upside, this is the headline benefit.',
  },
  { type: 'h3', text: 'A professionally maintained property' },
  {
    type: 'p',
    text: 'Cleaning teams visit between every booking, and minor wear is addressed quickly because it directly affects the operator\'s reviews and occupancy. Properties often come back in better condition than they would after a long AST.',
  },
  { type: 'h3', text: 'No tenant management' },
  {
    type: 'p',
    text: 'The landlord deals with one professional counterparty rather than individual tenants — no rent arrears, no Section 21 process, no late-night calls about a broken boiler.',
  },

  { type: 'h2', text: 'Which properties suit the model' },
  {
    type: 'p',
    text: 'R2SA is not a fit for every home. The strongest candidates share a few characteristics:',
  },
  {
    type: 'ul',
    items: [
      'Two- and three-bedroom apartments or townhouses in commuter cities and large towns.',
      'Walking distance to a station, hospital, business park, or major employer.',
      'A freehold or leasehold title that permits short-term lets (always confirmed in writing).',
      'Modern, neutral interiors that photograph well and need minimal restyling.',
    ],
  },

  { type: 'h2', text: 'The risks worth weighing' },
  {
    type: 'p',
    text: 'No model is risk-free. Before signing, landlords should understand three things clearly: (1) whether the lease and mortgage permit short stays, (2) how the operator handles a downturn in bookings, and (3) what happens if the agreement is terminated early.',
  },
  {
    type: 'p',
    text: 'A well-drafted R2SA contract addresses each of these head-on. A vague or template contract usually doesn\'t.',
  },

  { type: 'h2', text: 'Is Rent-to-SA right for your property?' },
  {
    type: 'p',
    text: 'If your property is in a high-demand location, your title and mortgage allow short stays, and you value reliable income over chasing peak nightly rates yourself, R2SA can be a genuinely strong fit. If you\'re unsure, the cheapest first step is a market-based income assessment for your specific address — not a generic estimate.',
  },
];

function Page() {
  return (
    <BlogPostLayout
      tag="R2SA"
      title="What is Rent-to-Serviced Accommodation and is it right for your property?"
      readTime="6 min read"
      intro="A plain-English breakdown of how R2SA agreements work, what landlords gain, the property types best suited to the model, and the risks worth weighing before you sign."
      sections={sections}
    />
  );
}
