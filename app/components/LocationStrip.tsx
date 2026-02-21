export function LocationStrip() {
  return (
    <section className="border-y border-foreground/10 py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-foreground/60">
            Your Location
          </p>
          <p className="mt-2 text-xl font-medium">Your tagline here.</p>
        </div>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Get in touch
        </a>
        <p className="text-sm text-foreground/50">YYYY - Present</p>
      </div>
    </section>
  );
}
