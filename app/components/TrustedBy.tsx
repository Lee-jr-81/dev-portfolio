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
    <section className="border-t border-foreground/10 py-section">
      <div>
        <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
          Trusted By
        </h2>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-24 gap-y-12">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="text-xl font-medium text-foreground/40"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
