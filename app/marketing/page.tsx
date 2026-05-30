import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/*  Marketing page — standalone; cut/paste to dev site when ready.            */
/*  Swap: PLATFORM_NAME, CONTACT_HREF, placeholder frames → screenshots.    */
/* -------------------------------------------------------------------------- */

const PLATFORM_NAME = "workshopOS";
const CONTACT_HREF = "#contact";
const SETUP_FEE = 3000;
const SERVICE_FEE = 99;

/** Screenshot export ratio — 1280×870 px (≈ 1.47:1, or 128:87) */
const FEATURE_SCREENSHOT_CLASS = "aspect-[1280/870] w-full";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const metadata: Metadata = {
  title: "Specialist vehicle platform",
  description:
    "Managed, SEO-first infrastructure for UK adventure, utility, and lifestyle vehicle businesses.",
  robots: { index: false, follow: false },
};

function formatGbp(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--mkt-olive)">
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-(--mkt-graphite) sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] ${className}`}
    >
      {children}
    </h2>
  );
}

function HeroScreenshot({
  src,
  alt,
  className = "min-h-64 flex-1 lg:min-h-0",
  priority = false,
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-(--mkt-border) bg-(--mkt-surface) ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={
          fit === "contain" ? "object-contain object-center" : "object-cover object-top"
        }
        sizes="(max-width: 1024px) 100vw, 45vw"
        priority={priority}
      />
    </div>
  );
}

export default function MarketingPage() {
  return (
    <div
      className="marketing-page min-h-full text-(--mkt-text) antialiased"
      style={
        {
          "--mkt-surface": "#f3f3ef",
          "--mkt-border": "#e4e4de",
          "--mkt-text": "#4a4a46",
          "--mkt-graphite": "#2f2f2c",
          "--mkt-muted": "#7a7a74",
          "--mkt-olive": "#5c6b4a",
          "--mkt-olive-dark": "#4a5640",
        } as React.CSSProperties
      }
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-(--mkt-border) bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <Link
            href="/marketing"
            className="text-xl font-bold tracking-tight text-(--mkt-graphite) sm:text-2xl"
          >
            workshop<span className="text-(--mkt-olive)">OS</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Page sections">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-(--mkt-muted) transition-colors hover:text-(--mkt-graphite)"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={CONTACT_HREF}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-(--mkt-olive) px-4 py-2 text-sm font-medium text-(--mkt-olive) transition-colors hover:bg-(--mkt-olive) hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-20">
            <div className="max-w-3xl space-y-10">
              <Eyebrow>Managed platform for specialist vehicle businesses</Eyebrow>
              <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-(--mkt-graphite) sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                Modern infrastructure for adventure &amp; utility vehicle businesses
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-(--mkt-muted) sm:text-xl">
                A premium, SEO-first public website and a calm operational dashboard —
                built to grow as your stock, builds, and services do.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={CONTACT_HREF}
                  className="inline-flex items-center justify-center rounded-full bg-(--mkt-olive) px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-(--mkt-olive-dark)"
                >
                  Get in touch
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-(--mkt-graphite) underline-offset-4 hover:underline"
                >
                  See what&apos;s included
                </a>
              </div>
            </div>
            <div className="flex min-h-0 flex-col gap-4 lg:h-full">
              <HeroScreenshot
                src="/heroPublic.png"
                alt="Public vehicle detail page"
                className="min-h-64 flex-1 lg:min-h-0"
                priority
              />
              <HeroScreenshot
                src="/heroAdmin.png"
                alt="Admin listings dashboard"
                className="min-h-64 flex-1 lg:min-h-0"
                priority
              />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-y border-(--mkt-border) px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl space-y-12">
            <SectionHeading>Your business has outgrown brochureware</SectionHeading>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {[
                "Inventory scattered across portals, social, and spreadsheets",
                "Sold builds disappear instead of building long-term SEO value",
                "Slow sites that don't reflect the quality of your work",
                "Generic CMSs that create operational anxiety, not clarity",
              ].map((item) => (
                <li
                  key={item}
                  className="border-t border-(--mkt-border) pt-6 text-base leading-relaxed text-(--mkt-muted)"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Three layers */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="max-w-2xl space-y-5">
              <Eyebrow>The platform</Eyebrow>
              <SectionHeading>One foundation. Three layers that work together.</SectionHeading>
            </div>
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Public experience",
                  body: "Premium frontend for inventory, conversion packages, upgrades, testimonials, and enquiry capture — fast, clear, and built for SEO.",
                },
                {
                  title: "Operations",
                  body: "Listings, media, enquiries, testimonials, and analytics in a guided admin dashboard — focused on inventory, not page building.",
                },
                {
                  title: "Growth path",
                  body: "Structured build specs, portfolio mode, and room to add VRM lookup, vehicle feeds, and automotive CGI as the business scales.",
                },
              ].map((layer) => (
                <article key={layer.title} className="space-y-4">
                  <h3 className="text-xl font-semibold text-(--mkt-graphite)">
                    {layer.title}
                  </h3>
                  <p className="text-base leading-relaxed text-(--mkt-muted)">
                    {layer.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="max-w-2xl space-y-5">
              <Eyebrow>Features</Eyebrow>
              <SectionHeading>Everything a specialist vehicle business needs online</SectionHeading>
            </div>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12">
              {[
                {
                  title: "Inventory publishing",
                  body: "Structured vehicle listings with adventure, utility, and lifestyle fields — not a generic product catalogue.",
                },
                {
                  title: "SEO that compounds",
                  body: "Dynamic metadata, clean URLs, and sold pages that stay live when portfolio value matters.",
                },
                {
                  title: "Media management",
                  body: "Gallery ordering, cover images, alt text, and optimised delivery for image-heavy pages.",
                },
                {
                  title: "Enquiry capture",
                  body: "Leads from vehicle detail, contact, and package pages — captured and manageable in admin.",
                },
                {
                  title: "Build specs & packages",
                  body: "Developer-managed conversion and upgrade content with premium presentation on the frontend.",
                },
                {
                  title: "Portfolio mode",
                  body: "Previous builds for conversion specialists, or dealer mode when sold stock should drop from the public site.",
                },
                {
                  title: "Operational dashboard",
                  body: "Calm, guided admin workflows — encouraging quality listings without CMS complexity.",
                },
                {
                  title: "Built-in analytics",
                  body: "Page views and enquiry counts so you can see what is working without bolting on extra tools.",
                },
              ].map((feature) => (
                <li key={feature.title} className="space-y-3">
                  <h3 className="text-base font-semibold text-(--mkt-graphite)">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-(--mkt-muted)">
                    {feature.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Split: SEO */}
        <section className="border-t border-(--mkt-border) px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="space-y-6">
              <Eyebrow>Long-term value</Eyebrow>
              <SectionHeading>Every listing is a long-term asset</SectionHeading>
              <p className="text-base leading-relaxed text-(--mkt-muted) sm:text-lg">
                Inventory pages are built for search from the ground up — structured vehicle
                data, canonical URLs, Open Graph metadata, and sitemap support. For builders,
                sold builds can remain published as portfolio pages that continue to rank and
                generate enquiries.
              </p>
              <p className="text-base leading-relaxed text-(--mkt-muted)">
                The data model is GVA-aware, so future vehicle feed work does not require
                rebuilding your listings from scratch.
              </p>
            </div>
            <HeroScreenshot
              src="/buildHero2.png"
              alt="Vehicle detail · sold build still live"
              className={FEATURE_SCREENSHOT_CLASS}
              fit="contain"
            />
          </div>
        </section>

        {/* Split: Dashboard */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <HeroScreenshot
              src="/listingHero2.png"
              alt="Admin · listings, media, enquiries"
              className={FEATURE_SCREENSHOT_CLASS}
              fit="contain"
            />
            <div className="space-y-6 lg:order-0">
              <Eyebrow>Operations</Eyebrow>
              <SectionHeading>An admin your team will actually use</SectionHeading>
              <p className="text-base leading-relaxed text-(--mkt-muted) sm:text-lg">
                Active stock and archive are separated so the dashboard stays calm. Create
                listings, manage galleries, publish or draft, review enquiries, and publish
                testimonials — without wrestling a generic CMS.
              </p>
              <p className="text-base leading-relaxed text-(--mkt-muted)">
                Subtle guidance encourages strong photography and SEO copy. No gamification,
                no mandatory completion scores — just a professional tool that respects how
                specialist businesses actually work.
              </p>
            </div>
          </div>
        </section>

        {/* Split: Niche */}
        <section className="border-t border-(--mkt-border) px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="space-y-6">
              <Eyebrow>Purpose-built</Eyebrow>
              <SectionHeading>Not a template. Not a marketplace.</SectionHeading>
              <p className="text-base leading-relaxed text-(--mkt-muted) sm:text-lg">
                Berth, layout, power, heating, and off-grid fields sit alongside make, model,
                mileage, and price. Conversion packages and upgrades are presented as premium
                structured content — not blog posts buried in a page builder.
              </p>
              <ul className="space-y-3 text-base text-(--mkt-muted)">
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--mkt-olive)" />
                  Campervan and conversion builders
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--mkt-olive)" />
                  Specialist adventure and utility dealers
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--mkt-olive)" />
                  Bespoke build and lifestyle vehicle businesses
                </li>
              </ul>
            </div>
            <HeroScreenshot
              src="/conversionHero2.png"
              alt="Conversion package detail page"
              className={FEATURE_SCREENSHOT_CLASS}
              fit="contain"
            />
          </div>
        </section>

        {/* Who it's for */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="max-w-2xl space-y-5">
              <Eyebrow>Who it&apos;s for</Eyebrow>
              <SectionHeading>Built for how specialist vehicle businesses sell</SectionHeading>
            </div>
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              {[
                {
                  title: "Conversion builders",
                  body: "Showcase packages, keep previous builds live for SEO, and capture planning enquiries alongside ready-to-go stock.",
                },
                {
                  title: "Specialist dealers",
                  body: "Publish inventory quickly with a premium presentation layer and a dashboard focused on stock, not site structure.",
                },
                {
                  title: "Utility & adventure brands",
                  body: "Present capability-led specification clearly — for customers comparing builds, systems, and real-world usability.",
                },
              ].map((audience) => (
                <article
                  key={audience.title}
                  className="border-t-2 border-(--mkt-olive) pt-8"
                >
                  <h3 className="text-lg font-semibold text-(--mkt-graphite)">
                    {audience.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-(--mkt-muted)">
                    {audience.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-24 border-y border-(--mkt-border) px-6 py-24 lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="max-w-2xl space-y-5">
              <Eyebrow>Deployment</Eyebrow>
              <SectionHeading>From first conversation to live infrastructure</SectionHeading>
            </div>
            <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  body: "Understand your business model — stock vs builds, packages, branding, and how customers find you.",
                },
                {
                  step: "02",
                  title: "Branded deployment",
                  body: "Configure theme, navigation, build specs, and content structure for your deployment.",
                },
                {
                  step: "03",
                  title: "Go live",
                  body: "Inventory, enquiries, SEO foundations, and admin handover — with your team ready to publish.",
                },
                {
                  step: "04",
                  title: "Grow",
                  body: "Add VRM lookup, configurator work, vehicle feeds, or CGI expansions as the business needs them.",
                },
              ].map((item) => (
                <li key={item.step} className="space-y-4">
                  <span className="text-sm font-semibold tabular-nums text-(--mkt-olive)">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-(--mkt-graphite)">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-(--mkt-muted)">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="max-w-2xl space-y-5">
              <Eyebrow>Pricing</Eyebrow>
              <SectionHeading>Straightforward pricing</SectionHeading>
              <p className="text-base leading-relaxed text-(--mkt-muted) sm:text-lg">
                Open setup and maintenance costs. Expansions such as configurator work, VRM
                lookup, or vehicle feed integration are quoted separately when you need them.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <article className="rounded-sm border border-(--mkt-border) bg-white p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-(--mkt-muted)">
                  Setup
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-tight text-(--mkt-graphite) sm:text-5xl">
                  {formatGbp(SETUP_FEE)}
                </p>
                <p className="mt-2 text-sm text-(--mkt-muted)">One-off</p>
                <ul className="mt-8 space-y-3 text-sm leading-relaxed text-(--mkt-muted)">
                  <li>Branding and theme configuration</li>
                  <li>Deployment and content structure</li>
                  <li>Initial inventory setup</li>
                  <li>SEO foundations and handover</li>
                </ul>
              </article>
              <article className="rounded-sm border border-(--mkt-border) bg-white p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-(--mkt-muted)">
                  Service
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-tight text-(--mkt-graphite) sm:text-5xl">
                  {formatGbp(SERVICE_FEE)}
                </p>
                <p className="mt-2 text-sm text-(--mkt-muted)">Per month</p>
                <ul className="mt-8 space-y-3 text-sm leading-relaxed text-(--mkt-muted)">
                  <li>Hosting and managed infrastructure</li>
                  <li>Platform updates and security</li>
                  <li>Ongoing operational support</li>
                  <li>Admin access for your team</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-t border-(--mkt-border) px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="max-w-2xl space-y-5">
              <Eyebrow>Grow with the platform</Eyebrow>
              <SectionHeading>Expansions when you&apos;re ready</SectionHeading>
            </div>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {[
                {
                  title: "VRM lookup",
                  body: "Admin registration lookup with cached results and sensible prefill into listing forms.",
                },
                {
                  title: "3D configurator",
                  body: "Automotive CGI with material choices and configurator enquiry capture.",
                },
                {
                  title: "Vehicle feeds",
                  body: "Export-ready structured data for Google Vehicle Ads and similar channels.",
                },
                {
                  title: "Finance CTAs",
                  body: "Regulated finance enquiry flows where broking applies to your business.",
                },
              ].map((item) => (
                <li key={item.title} className="space-y-3">
                  <h3 className="text-base font-semibold text-(--mkt-graphite)">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-(--mkt-muted)">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-5">
              <Eyebrow>FAQ</Eyebrow>
              <SectionHeading>Common questions</SectionHeading>
            </div>
            <div className="divide-y divide-(--mkt-border) border-y border-(--mkt-border)">
              {[
                {
                  q: "Is this a website builder?",
                  a: "No. Site structure, SEO architecture, build specs, and theme direction are managed as part of the platform deployment — your team focuses on inventory and enquiries, not page layout.",
                },
                {
                  q: "Can sold vehicles stay on the site?",
                  a: "Yes, for builder and portfolio-style deployments. Sold builds can remain published for long-term SEO value. Dealer-style deployments can hide sold stock from the public site instead.",
                },
                {
                  q: "How is it hosted?",
                  a: "Each deployment runs on modern managed infrastructure — fast edge delivery, secure database, and isolated client data. Setup and monthly maintenance cover hosting and platform care.",
                },
                {
                  q: "What's included vs paid expansion?",
                  a: "The core platform includes the public site, admin dashboard, inventory, media, enquiries, testimonials, analytics, and build spec pages. VRM lookup, configurator CGI, vehicle feeds, and finance flows are quoted separately.",
                },
                {
                  q: "How long does launch take?",
                  a: "Timelines depend on inventory volume and content readiness, but the platform is designed for repeatable deployment — not a bespoke build from scratch every time.",
                },
                {
                  q: "Who is this not for?",
                  a: "It is not a marketplace, a full DMS, or a generic CMS. It is focused infrastructure for specialist vehicle businesses that want a premium online presence and operational clarity.",
                },
              ].map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="cursor-pointer list-none text-base font-semibold text-(--mkt-graphite) marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span
                        className="mt-1 text-(--mkt-olive) transition-transform group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-(--mkt-muted)">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-(--mkt-border) px-6 py-24 lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-(--mkt-graphite) sm:text-4xl">
              Ready to give your business infrastructure that matches your builds?
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-(--mkt-muted) sm:text-lg">
              If you run a specialist adventure, utility, or lifestyle vehicle business and
              want a modern platform behind it — get in touch to talk through fit, timeline,
              and deployment.
            </p>
            <a
              href={CONTACT_HREF}
              className="inline-flex items-center justify-center rounded-full bg-(--mkt-olive) px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-(--mkt-olive-dark)"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-(--mkt-border) px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-(--mkt-muted)">
            © {new Date().getFullYear()} {PLATFORM_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-(--mkt-muted)">
            Managed platform for specialist UK vehicle businesses.
          </p>
        </div>
      </footer>
    </div>
  );
}
