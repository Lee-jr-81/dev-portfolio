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
    <section id="about" className="border-t border-foreground/10 py-section">
      <div>
        <div className="grid gap-24 lg:grid-cols-2 lg:gap-32">
          <div className="space-y-10">
            <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
              About
            </h2>
            <h3 className="text-headline">
              Section headline here
            </h3>
            <div className="space-y-8">
              <p className="text-body text-foreground/80">
                Your bio paragraph. Share your experience, approach, and what makes
                you different. Keep it genuine and focused.
              </p>
              <p className="text-body text-foreground/80">
                Another paragraph expanding on your expertise and how you help
                clients.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-body font-medium text-white hover:opacity-90"
            >
              Get in touch
            </a>
          </div>
          <div className="space-y-12">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex gap-8 border-b border-foreground/10 pb-12 last:border-0 last:pb-0"
              >
                <span className="text-3xl font-bold text-foreground/30">
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
