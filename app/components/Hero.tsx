export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your Name
        </h1>
        <h2 className="mt-4 text-2xl font-medium text-foreground/80 sm:text-3xl">
          Your Role / Title
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
          A brief intro about who you are and what you do. Keep it personal and
          concise.
        </p>
      </div>
    </section>
  );
}
