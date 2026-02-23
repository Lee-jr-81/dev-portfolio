import Link from "next/link";

export function CTA() {
  return (
    <section className="border-t border-foreground/10 py-40 flex flex-col items-center justify-center">
      <div>
        <h2 className="text-headline self-center">Let&apos;s work together</h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-10 text-center">
        <p className="text-lg text-foreground/70">
          Taking on new projects — reach out and let&apos;s build something
          cool.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-md font-medium text-white hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
