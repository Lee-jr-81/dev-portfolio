const services = [
  {
    number: "01",
    title: "Service One",
    description: "Brief description of this offering.",
  },
  {
    number: "02",
    title: "Service Two",
    description: "Brief description of this offering.",
  },
  {
    number: "03",
    title: "Service Three",
    description: "Brief description of this offering.",
  },
  {
    number: "04",
    title: "Service Four",
    description: "Brief description of this offering.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-foreground/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
              About
            </h2>
            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Section headline here
            </h3>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Your bio paragraph. Share your experience, approach, and what makes
              you different. Keep it genuine and focused.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Another paragraph expanding on your expertise and how you help
              clients.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex gap-6 border-b border-foreground/10 pb-8 last:border-0 last:pb-0"
              >
                <span className="text-2xl font-bold text-foreground/30">
                  {service.number}
                </span>
                <div>
                  <h4 className="font-semibold">{service.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
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
