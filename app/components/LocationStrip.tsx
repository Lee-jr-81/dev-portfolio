export function LocationStrip() {
  return (
    <section className="border-y border-foreground/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-foreground/60">
            Your Location
          </p>
          <p className="mt-1 text-lg font-medium">Your tagline here.</p>
        </div>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
        >
          Get in touch
        </a>
        <p className="text-sm text-foreground/50">YYYY - Present</p>
      </div>
    </section>
  );
}
