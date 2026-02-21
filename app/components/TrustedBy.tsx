const clients = [
  "Client One",
  "Client Two",
  "Client Three",
  "Client Four",
  "Client Five",
  "Client Six",
];

export function TrustedBy() {
  return (
    <section className="border-t border-foreground/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
          Trusted By
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="text-lg font-medium text-foreground/40"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
