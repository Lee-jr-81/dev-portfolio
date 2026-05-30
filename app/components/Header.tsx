import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  showPlatformLink?: boolean;
};

export function Header({ showPlatformLink = false }: HeaderProps) {
  return (
    <header className="full-bleed fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-(--container-max) items-center justify-between px-(--container-padding) py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Home"
            width={120}
            height={32}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="flex shrink-0 items-center gap-3 sm:gap-4">
          {showPlatformLink && (
            <Link
              href="/marketing"
              className="rounded-full border border-foreground/20 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:px-5 md:text-body"
            >
              workshopOS
            </Link>
          )}
          <Link
            href="/contact"
            className="rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 sm:px-5 md:text-body"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
