import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { CreditCard, Gauge, Layers, ShieldCheck } from "lucide-react";

type FocusPillar = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const saasPillars: FocusPillar[] = [
  {
    Icon: Layers,
    title: "Product-shaped engineering",
    description:
      "Data models, permissions, and workflows that match how the business actually runs — not a UI bolted onto a spreadsheet.",
  },
  {
    Icon: ShieldCheck,
    title: "Auth, access, and trust",
    description:
      "Secure sign-in, role-aware views, and server-side validation so customers and staff only see what they should.",
  },
  {
    Icon: CreditCard,
    title: "Monetisation-ready",
    description:
      "Subscription and payment flows wired with clear upgrade paths, webhooks, and reconciliation-friendly patterns.",
  },
  {
    Icon: Gauge,
    title: "Built for real traffic",
    description:
      "Performance budgets, observability hooks, and deploy pipelines aimed at uptime under genuine daily use.",
  },
];

const focuses = {
  nextjs: {
    title: "Modern Web Applications",
    logo: "/nextjs-logo.svg",
    tagline: "Custom software built for growing businesses",
    benefits: [
      {
        title: "Structured Engineering",
        description:
          "Clean architecture, maintainable code and production-ready patterns from day one.",
      },
      {
        title: "End-to-End Delivery",
        description:
          "Frontend, backend, authentication, databases and deployment handled as a complete system.",
      },
      {
        title: "Business-First Architecture",
        description:
          "Software designed around real workflows, customers and business goals — not just technical requirements.",
      },
      {
        title: "Built to Evolve",
        description:
          "Flexible foundations that can grow as businesses add new products, services and capabilities.",
      },
    ],
  },
  shopify: {
    title: "Commerce Experiences",
    logo: "/shopify_glyph.svg",
    tagline: "Flexible ecommerce built around your business",
    benefits: [
      {
        title: "Headless Commerce",
        description:
          "Fast, modern storefronts powered by Shopify with complete control over the customer experience.",
      },
      {
        title: "Beyond The Theme",
        description:
          "Commerce experiences designed for businesses that need more than a standard Shopify theme can offer.",
      },
      {
        title: "Integrated Systems",
        description:
          "Inventory, content, customer accounts and commerce working together as a single experience.",
      },
      {
        title: "Growth Ready",
        description:
          "Architecture designed to adapt as businesses expand into new products, markets and revenue streams.",
      },
    ],
  },
};

export function MyFocus() {
  return (
    <section className="border-t border-foreground/10 py-40">
      <div>
        <div className="max-w-3xl">
          <h2 className="text-sm md:mb-0 mb-1 font-medium uppercase tracking-wider text-foreground/60">
            What I Build
          </h2>

          <h3 className="text-headline font-semibold mb-6 md:mb-4">
            Modern applications, commerce experiences and software products
          </h3>

          <p className="text-body text-foreground/80">
            I build modern web applications, commerce experiences and SaaS
            products for ambitious businesses. Each project has different
            requirements, but the goal is always the same — fast, scalable
            software designed to grow alongside the businesses that use it.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Next.js Card */}
          <div className="rounded-2xl border border-foreground/10 bg-foreground/2 p-8 md:p-10">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative size-8 shrink-0">
                  <Image
                    src={focuses.nextjs.logo}
                    alt="Next.js logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-4xl font-semibold">Next.js</span>
              </div>
              <div>
                <h4 className="md:text-2xl text-lg  font-semibold text-primary">
                  {focuses.nextjs.title}
                </h4>
                <p className="text-sm text-foreground/60">
                  {focuses.nextjs.tagline}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {focuses.nextjs.benefits.map((benefit) => (
                <div key={benefit.title}>
                  <h5 className="text-lg font-semibold">{benefit.title}</h5>
                  <p className="mt-2 text-body text-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Shopify Card */}
          <div className="rounded-2xl border border-foreground/10 bg-foreground/2 p-8 md:p-10">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative size-8 shrink-0">
                  <Image
                    src={focuses.shopify.logo}
                    alt="Shopify logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-4xl font-semibold">Shopify</span>
              </div>
              <div>
                <h4 className="md:text-2xl text-lg font-semibold text-primary">
                  {focuses.shopify.title}
                </h4>
                <p className="text-sm text-foreground/60">
                  {focuses.shopify.tagline}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {focuses.shopify.benefits.map((benefit) => (
                <div key={benefit.title}>
                  <h5 className="text-lg font-semibold">{benefit.title}</h5>
                  <p className="mt-2 text-body text-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/2 p-8 md:p-10">
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="relative size-8 shrink-0">
                  <Image
                    src="/react-logo.svg"
                    alt="React logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-4xl font-semibold">React</span>
              </div>
              <div>
                <h4 className="md:text-2xl text-lg font-semibold text-primary">
                  Interactive Products & SaaS
                </h4>
                <p className="text-sm text-foreground/60">
                  Buiding software businesses rely on every day
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              {saasPillars.map(({ Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-foreground/10 bg-background">
                    <Icon className="size-5 text-primary" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-lg font-semibold">{title}</h5>
                    <p className="mt-2 text-body text-foreground/70">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Stack */}
        <div className="mt-8">
          <div className="rounded-2xl border border-foreground/10 bg-foreground/2 p-8 md:p-10">
            <div className="mb-8 text-center md:text-left">
              <h4 className="text-2xl font-semibold">My Core Tools</h4>
              <p className="text-sm text-foreground/60">
                Reliable, production-tested tooling
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="relative size-12">
                  <Image
                    src="/supabase-logo.svg"
                    alt="Supabase"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Supabase</p>
                  <p className="text-xs text-foreground/60">Database</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="relative size-12">
                  <Image
                    src="/tailwind-logo.svg"
                    alt="Tailwind CSS"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Tailwind CSS</p>
                  <p className="text-xs text-foreground/60">Styling</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="relative size-12">
                  <Image
                    src="/stripe-logo.svg"
                    alt="Stripe"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Stripe</p>
                  <p className="text-xs text-foreground/60">Payments</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="relative size-12">
                  <Image
                    src="/github-logo.svg"
                    alt="GitHub"
                    fill
                    className="object-contain dark:invert"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <p className="text-xs text-foreground/60">Workflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
