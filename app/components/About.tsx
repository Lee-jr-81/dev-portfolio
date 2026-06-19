import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Modern Web Applications",
    description:
      "Custom web applications built with Next.js for businesses that need fast, scalable software designed around real-world workflows.",
  },
  {
    number: "02",
    title: "Commerce Experiences",
    description:
      "High-performance ecommerce and headless commerce frontends focused on speed, flexibility and creating seamless customer experiences.",
  },
  {
    number: "03",
    title: "Business Systems",
    description:
      "Inventory systems, customer portals and bespoke internal tools that help businesses streamline operations and grow over time.",
  },
  {
    number: "04",
    title: "Product & Technical Strategy",
    description:
      "Helping businesses make informed decisions around architecture, scalability and how their digital products should evolve as they grow.",
  },
  {
    number: "05",
    title: "Performance & Reliability",
    description:
      "Building software with performance, maintainability and long-term reliability at its core, ensuring systems remain fast and easy to evolve.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-foreground/10 py-40">
      <div>
        <div className="grid gap-24 lg:grid-cols-2 lg:gap-32">
          <div className="">
            <div className="relative size-20 mb-4 shrink-0 overflow-hidden rounded-full border-4 border-primary lg:size-40">
              <Image
                src="/lee.png"
                alt="Lee's avatar"
                fill
                className="object-cover scale-x-[-1]"
                sizes="(max-width: 1024px) 12rem, 14rem"
              />
            </div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
              About Me
            </h2>
            <div className="space-y-8">
              <h3 className="text-headline font-semibold">
                Engineered Thinking. Modern Applications.
              </h3>
              <div className="space-y-8">
                <p className="text-body text-foreground/80">
                  I build modern web applications and digital products for
                  businesses and startups. Using technologies like Next.js and
                  modern full-stack tooling, I design and develop fast, reliable
                  systems that are built to scale and easy to maintain.
                </p>
                <p className="text-body text-foreground/80">
                  My background is in hands-on engineering and problem solving,
                  where systems had to work safely and reliably in the real
                  world. That experience shaped how I approach software
                  development — structured, practical, and focused on delivering
                  solutions that genuinely work for the businesses using them.
                </p>
                <p className="text-body text-foreground/80">
                  I focus on clarity, performance, and maintainability, building
                  web applications, platforms, and digital tools that clients
                  can rely on long after launch.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Send me a message
              </a>
            </div>
          </div>
          <div className="space-y-12">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex gap-8 border-b border-foreground/10 pb-12 last:border-0 last:pb-0"
              >
                <span className="text-4xl font-bold text-foreground/30">
                  {service.number}
                </span>
                <div>
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <p className="mt-3 text-body text-foreground/70">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
