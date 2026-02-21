export function CTA() {
  return (
    <section className="border-t border-foreground/10 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Available for new projects — reach out and let&apos;s talk.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-background hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
