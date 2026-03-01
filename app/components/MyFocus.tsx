import Image from "next/image";

const focuses = {
  nextjs: {
    title: "Full-Stack Projects",
    logo: "/nextjs-logo.svg",
    tagline: "End-to-end application development",
    benefits: [
      {
        title: "Structured Engineering",
        description:
          "Clean architecture, maintainable code, and production-ready patterns from day one.",
      },
      {
        title: "Full-Stack Capability",
        description:
          "Frontend, backend, database design, authentication, and deployment — handled end-to-end.",
      },
      {
        title: "Testing & Quality",
        description:
          "Proper testing workflows, error handling, and validation built into the development process.",
      },
      {
        title: "Agency-Ready Delivery",
        description:
          "Clear documentation, structured handoff, and minimal oversight required during development.",
      },
    ],
  },
  astro: {
    title: "Content & Marketing Sites",
    logo: "/astro-logo.svg",
    tagline: "Speed-first, SEO-optimized delivery",
    benefits: [
      {
        title: "Lighthouse Performance",
        description:
          "Consistently hitting 95+ scores across performance, accessibility, and SEO metrics.",
      },
      {
        title: "Fast Load Times",
        description:
          "Optimized assets, minimal JavaScript, and edge-ready architecture for instant page loads.",
      },
      {
        title: "SEO Foundation",
        description:
          "Structured data, meta tags, sitemaps, and crawlability built in from the start.",
      },
      {
        title: "Content-First Workflow",
        description:
          "Clean CMS integration, markdown support, and editor-friendly content management.",
      },
    ],
  },
};

export function MyFocus() {
  return (
    <section className="border-t border-foreground/10 py-40">
      <div>
        <div className=" max-w-3xl">
          <h2 className="text-sm md:mb-0 mb-1 font-medium uppercase tracking-wider text-foreground/60">
            What I Focus On
          </h2>
          <h3 className="text-headline font-semibold mb-6 md:mb-4">
            My Core Systems
          </h3>
          <p className="text-body text-foreground/80">
            I specialise in two distinct types of projects for agencies —
            full-stack applications and high-performance marketing sites. Each
            requires a different approach, different tooling, and different
            priorities.
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

          {/* Astro Card */}
          <div className="rounded-2xl border border-foreground/10 bg-foreground/2 p-8 md:p-10">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative size-8 shrink-0">
                  <Image
                    src={focuses.astro.logo}
                    alt="Astro logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-4xl font-semibold">Astro</span>
              </div>
              <div>
                <h4 className="md:text-2xl text-lg font-semibold text-primary">
                  {focuses.astro.title}
                </h4>
                <p className="text-sm text-foreground/60">
                  {focuses.astro.tagline}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {focuses.astro.benefits.map((benefit) => (
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
