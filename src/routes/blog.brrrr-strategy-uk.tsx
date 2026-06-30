import { createFileRoute } from '@tanstack/react-router';
import BlogPostLayout, { type BlogSection } from '@/components/BlogPostLayout';

const URL = 'https://abodooproperties.co.uk/blog/brrrr-strategy-uk';
const TITLE = 'The BRRRR Strategy Explained for UK Property Investors | Abodoo Properties';
const DESC =
  'A UK-focused breakdown of the BRRRR strategy — Buy, Refurbish, Rent, Refinance, Repeat — including realistic numbers, lender expectations, and the most common mistakes.';

export const Route = createFileRoute('/blog/brrrr-strategy-uk')({
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
  { type: 'h2', text: 'What BRRRR actually stands for' },
  {
    type: 'ul',
    items: [
      'Buy — usually below market value, often a tired or unmortgageable property.',
      'Refurbish — bring it to a lettable, mortgageable standard and force appreciation.',
      'Rent — secure a tenant or operator at a market rent that supports refinance.',
      'Refinance — pull capital back out at the new, higher valuation.',
      'Repeat — recycle that capital into the next deal.',
    ],
  },
  {
    type: 'p',
    text: 'The model is popular because, done well, it lets investors build a portfolio with limited fresh capital. Done badly, it traps cash and creates a property that doesn\'t refinance for the figure the spreadsheet promised.',
  },

  { type: 'h2', text: 'How it works in the UK specifically' },
  {
    type: 'p',
    text: 'UK BRRRR usually combines a bridging loan for purchase and refurb with a buy-to-let remortgage on completion. Bridging interest accrues monthly, so timeline discipline matters as much as the build budget.',
  },
  { type: 'h3', text: 'A simplified worked example' },
  {
    type: 'p',
    text: 'Purchase: £140,000. Refurb: £30,000. Stamp duty, bridging fees, legals: £18,000. Total in: £188,000. Post-works valuation: £220,000. Refinance at 75% LTV: £165,000. Capital left in the deal: £23,000 — against a property generating, say, £1,150/month.',
  },
  {
    type: 'p',
    text: 'Those numbers are illustrative, not a forecast. The point is that the spread between total cost and refinance valuation drives whether the strategy works at all.',
  },

  { type: 'h2', text: 'What lenders actually want to see' },
  {
    type: 'ul',
    items: [
      'A clean, fully-finished property with EPC, gas, and electrical certificates.',
      'Six months of ownership in most cases before a remortgage will be considered (the "six-month rule"), though some lenders accept earlier on day-one remortgage products.',
      'Rental income that comfortably covers 125–145% of the stressed mortgage payment.',
      'A valuation that supports the higher figure — not the figure you hoped for.',
    ],
  },

  { type: 'h2', text: 'Where UK investors most often get it wrong' },
  { type: 'h3', text: '1. Overpaying on the buy' },
  {
    type: 'p',
    text: 'BRRRR depends on buying below the eventual valuation. If you pay full market value going in, there is nothing for refinance to pull out. The deal is made or lost on the purchase price.',
  },
  { type: 'h3', text: '2. Optimistic refurb budgets' },
  {
    type: 'p',
    text: 'Material and labour costs in the UK have stayed sticky. A 15–20% contingency on top of the build quote is sensible, not pessimistic.',
  },
  { type: 'h3', text: '3. Down-valuations at refinance' },
  {
    type: 'p',
    text: 'Surveyors value cautiously and reference recent comparables. If your post-works valuation depends on being the most expensive house on the street, expect a down-valuation.',
  },
  { type: 'h3', text: '4. Ignoring the cost of bridging' },
  {
    type: 'p',
    text: 'Bridging at 0.75–1% per month adds up fast on a six-month project that becomes nine. Build the realistic timeline, then add a month.',
  },

  { type: 'h2', text: 'Who BRRRR suits' },
  {
    type: 'p',
    text: 'BRRRR rewards investors who can underwrite a deal accurately, manage a refurbishment, and stomach the timeline risk between bridging completion and refinance drawdown. It is not a passive strategy, and it is not the right starting point for an investor doing their first project — but for the right person, it remains one of the most capital-efficient ways to build a UK rental portfolio.',
  },
];

function Page() {
  return (
    <BlogPostLayout
      tag="BRRRR"
      title="The BRRRR Strategy Explained for UK Property Investors"
      readTime="8 min read"
      intro="Buy, Refurbish, Rent, Refinance, Repeat — how the strategy works in the UK, what realistic numbers look like, what lenders expect, and where investors most often get it wrong."
      sections={sections}
    />
  );
}
