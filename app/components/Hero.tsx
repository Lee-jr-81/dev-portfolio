import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col pt-16 md:pt-32 md:pb-4 pb-24">
      {/* Top: Typographic hero - works in light and dark mode */}
      <div className="mb-6 mt-12 w-full sm:mb-12 lg:mb-32">
        <h2
          className="font-bold leading-display md:text-foreground"
          style={{ fontSize: "clamp(3rem, 8vw, 10rem)" }}
        >
          Lee Williams<span className="text-primary">.</span>
        </h2>
      </div>

      {/* Bottom: Split 50/50 */}
      <div className="flex flex-col gap-8 md:mt-2 mt-20 lg:flex-row lg:items-center lg:gap-16 md:pb-40">
        {/* Left: Headings + description */}
        <div className="flex-1 space-y-2 md:space-y-4">
          <h1 className="text-headline text-foreground/80">NextJS Developer</h1>
          <p className="max-w-xl md:text-lead text-lg text-foreground/70 leading-snug">
            Trade-grade engineering, applied to modern web applications — fast,
            stable, and built to last.
          </p>
        </div>

        {/* Right: Avatar + location */}
        <div className="mt-32 flex flex-1 flex-col gap-2 lg:mt-0 items-end">
          <div className="relative size-28 shrink-0 overflow-hidden rounded-full border-4 border-foreground lg:size-40">
            <Image
              src="/lee.png"
              alt="Lee's avatar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 12rem, 14rem"
            />
          </div>
          <div className="flex items-center">
            <h2 className="md:text-lead text-md text-foreground/70">
              Birmingham, UK
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
