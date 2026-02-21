export function CTA() {
  return (
    <section className="border-t border-foreground/10 py-section">
      <div className="mx-auto max-w-3xl space-y-10 text-center">
        <h2 className="text-headline">
          Let&apos;s work together
        </h2>
        <p className="text-lead text-foreground/70">
          Available for new projects — reach out and let&apos;s talk.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-body font-medium text-white hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
