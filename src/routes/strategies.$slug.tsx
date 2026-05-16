import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { Home, KeyRound, TrendingUp, Building2, type LucideIcon } from 'lucide-react';
import StrategyPageLayout, { strategyNav } from '@/components/StrategyPageLayout';

type StrategyData = {
  slug: string;
  index: number;
  title: string;
  lead: string;
  Icon: LucideIcon;
  paragraphs: string[];
  benefits: string[];
  steps: { title: string; body: string }[];
  metaDescription: string;
};

const STRATEGIES: Record<string, StrategyData> = {
  'rent-to-hmo': {
    slug: 'rent-to-hmo',
    index: 0,
    title: 'Rent-to-HMO',
    Icon: Home,
    lead: 'Hands-off, high-yield income for landlords — we lease your property and operate it as a professionally managed House in Multiple Occupation.',
    metaDescription:
      'Rent-to-HMO with Abodoo Properties — guaranteed monthly income, full compliance, and zero day-to-day management on your UK property.',
    paragraphs: [
      'We lease quality properties from landlords on multi-year agreements and convert them into professionally managed Houses in Multiple Occupation. Each room is fitted to a premium standard and let to vetted working professionals.',
      'Owners receive a guaranteed monthly rent — typically well above standard AST market rates — with zero day-to-day management. We handle HMO licensing, compliance, all bills, tenant sourcing, and ongoing maintenance.',
      'At the end of the lease term the property is handed back in an agreed condition, often in better shape than when we took it on. It is the simplest way to lock in dependable, above-market income from your existing property.',
    ],
    benefits: [
      'Guaranteed monthly income above market AST rates',
      'Full HMO licensing, compliance, and inspections handled',
      'Professional tenant sourcing and ongoing management',
      'Property handed back in agreed condition at term end',
    ],
    steps: [
      { title: 'Property assessment', body: 'We survey the property and confirm rental projections under the HMO model.' },
      { title: 'Lease agreement', body: 'Multi-year lease signed with rent guaranteed from day one of occupancy.' },
      { title: 'Refurb & furnish', body: 'Rooms fitted to HMO spec — furniture, compliance works, certifications.' },
      { title: 'Tenants placed', body: 'Vetted professionals move in. You receive monthly rent automatically.' },
    ],
  },
  'serviced-accommodation': {
    slug: 'serviced-accommodation',
    index: 1,
    title: 'Serviced Accommodation',
    Icon: KeyRound,
    lead: 'Premium short-term rentals operated like a boutique hotel — higher occupancy, higher returns, fully managed.',
    metaDescription:
      'Serviced Accommodation by Abodoo Properties — multi-channel listings, dynamic pricing, and hotel-grade management for UK property owners.',
    paragraphs: [
      'We operate your property as a high-end serviced apartment — listed on Booking.com, Airbnb, Expedia, and direct corporate channels. Dynamic pricing, hotel-grade housekeeping, and 24/7 guest support drive consistently high occupancy.',
      'You receive predictable monthly income while the property earns nightly rates several times higher than a long-term let. We carry the commercial risk under the R2SA agreement — your rent is guaranteed regardless of bookings.',
      'Linen, cleaning, restocking, guest communication, and damage cover are all included. Owners stay fully hands-off while the property quietly outperforms its market.',
    ],
    benefits: [
      'Significantly higher gross income vs. standard tenancy',
      'Hotel-grade cleaning, linen, and guest communication',
      'Multi-channel listings with dynamic revenue management',
      'Full insurance and damage protection in place',
    ],
    steps: [
      { title: 'Onboarding & styling', body: 'Property staged and photographed to a premium short-let standard.' },
      { title: 'Multi-channel listings', body: 'Live on Booking.com, Airbnb, Expedia, and direct corporate channels.' },
      { title: 'Dynamic pricing live', body: 'Nightly rates adjusted in real time against local demand and events.' },
      { title: 'Monthly payouts', body: 'Owner receives a fixed monthly figure regardless of occupancy.' },
    ],
  },
  'brrr-projects': {
    slug: 'brrr-projects',
    index: 2,
    title: 'BRRR Projects',
    Icon: TrendingUp,
    lead: 'Buy, Refurbish, Rent, Refinance — a proven framework to build a leveraged UK property portfolio with recycled capital.',
    metaDescription:
      'BRRR projects with Abodoo Properties — sourced, refurbished, tenanted, and refinanced UK property deals targeting strong retained-capital returns.',
    paragraphs: [
      'Our BRRR pipeline targets under-valued UK stock with clear uplift potential. We acquire, refurbish to a high specification, tenant the property, then refinance against the new valuation to recycle capital into the next deal.',
      'This is a proven route for investors looking to build a leveraged income portfolio with minimal capital left in any single asset. Every deal is underwritten conservatively against multiple exit scenarios before we commit.',
      'Investors get transparent monthly reporting, a single point of contact, and an experienced in-house team handling sourcing, refurb management, lettings, and refinance — end to end.',
    ],
    benefits: [
      'Sourced, refurbished, and tenanted by one team',
      'Capital recycled through refinance — compound growth',
      'Targeting 8–12% ROI on retained capital',
      'Transparent monthly reporting on every project',
    ],
    steps: [
      { title: 'Deal sourced', body: 'Off-market and motivated-seller stock analysed against strict criteria.' },
      { title: 'Acquire & refurbish', body: 'Property purchased and brought up to a strong rental specification.' },
      { title: 'Tenant & stabilise', body: 'Quality tenants placed; rent stabilises for the lender valuation.' },
      { title: 'Refinance & recycle', body: 'Capital pulled out at the new value and deployed into the next deal.' },
    ],
  },
  'refurbishment-resale': {
    slug: 'refurbishment-resale',
    index: 3,
    title: 'Refurbishment & Resale',
    Icon: Building2,
    lead: 'Value-add renovation projects engineered for a clean exit — maximum resale profit, minimum operational burden.',
    metaDescription:
      'Refurbishment & Resale projects with Abodoo Properties — UK flips delivered on time and on budget with target net returns of 15–25%.',
    paragraphs: [
      'We identify properties where a structured refurbishment unlocks a meaningful uplift in market value. From light cosmetic refreshes to full structural reconfiguration, our in-house team delivers projects on time and on budget.',
      'Every acquisition is modelled against a defined exit before contracts exchange — we never buy without a plan to sell. Vetted contractors, fixed-price scopes, and weekly cost reporting keep projects predictable.',
      'Once complete, we list and sell through trusted partner agents, typically within four to eight months of acquisition. Investors get a clean cycle, a defined return, and zero day-to-day involvement.',
    ],
    benefits: [
      'End-to-end project management — no operational burden',
      'Vetted contractors and fixed-price scopes of work',
      'Target net returns of 15–25% per project cycle',
      'Exit strategy planned before acquisition completes',
    ],
    steps: [
      { title: 'Acquire with exit modelled', body: 'Numbers stress-tested before exchange against multiple sale scenarios.' },
      { title: 'Scope & mobilise', body: 'Fixed-price scopes agreed; contractors mobilised within days of completion.' },
      { title: 'Refurb delivered', body: 'Weekly cost and progress reporting until the property is sale-ready.' },
      { title: 'Marketed and sold', body: 'Listed via partner agents and sold, typically within 4–8 months.' },
    ],
  },
};

export const Route = createFileRoute('/strategies/$slug')({
  loader: ({ params }) => {
    const data = STRATEGIES[params.slug];
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: 'Strategy — Abodoo Properties' }] };
    const url = `https://abodoo-zenith.lovable.app/strategies/${loaderData.slug}`;
    const pageTitle = `${loaderData.title} — Abodoo Properties`;
    return {
      meta: [
        { title: pageTitle },
        { name: 'description', content: loaderData.metaDescription },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: loaderData.metaDescription },
        { property: 'og:url', content: url },
      ],
      links: [{ rel: 'canonical', href: url }],
    };
  },
  notFoundComponent: () => (
    <main
      style={{
        background: '#0d1117',
        color: '#F8F6F2',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        textAlign: 'center',
      }}
    >
      <div>
        <h1 className="font-playfair" style={{ fontSize: 36, marginBottom: 16 }}>
          Strategy not found
        </h1>
        <p className="font-inter" style={{ color: 'rgba(248,246,242,0.6)', marginBottom: 28 }}>
          The strategy you're looking for doesn't exist.
        </p>
        <Link
          to="/strategies"
          className="font-inter"
          style={{
            background: '#c9a84c',
            color: '#0d1117',
            padding: '12px 24px',
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          View all strategies
        </Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main
      style={{
        background: '#0d1117',
        color: '#F8F6F2',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        textAlign: 'center',
      }}
    >
      <div>
        <h1 className="font-playfair" style={{ fontSize: 32, marginBottom: 12 }}>
          Something went wrong
        </h1>
        <p className="font-inter" style={{ color: 'rgba(248,246,242,0.6)', marginBottom: 24 }}>
          {error.message}
        </p>
        <Link
          to="/strategies"
          className="font-inter"
          style={{
            background: '#c9a84c',
            color: '#0d1117',
            padding: '12px 24px',
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          Back to strategies
        </Link>
      </div>
    </main>
  ),
  component: StrategyDetailPage,
});

function StrategyDetailPage() {
  const data = Route.useLoaderData();
  // ensure nav order matches our data
  void strategyNav;
  return (
    <StrategyPageLayout
      slug={data.slug}
      index={data.index}
      title={data.title}
      lead={data.lead}
      Icon={data.Icon}
      paragraphs={data.paragraphs}
      benefits={data.benefits}
      steps={data.steps}
    />
  );
}
