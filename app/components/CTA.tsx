import Link from "next/link";

export function CTA() {
  return (
    <section className="border-t border-foreground/10 py-40 flex flex-col items-center justify-center">
      <div>
        <h2 className="text-headline self-center text-center">
          Have a project in mind?
        </h2>
      </div>

      <div className="mx-auto mt-6 max-w-3xl space-y-10 text-center">
        <p className="text-lg text-foreground/70">
          Whether you're building a new product, improving a commerce experience
          or replacing ageing software, I'd love to hear about what you're
          working on.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-md font-medium text-white hover:opacity-90"
        >
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
