import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          Your Name
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="#work" className="text-sm hover:underline">
            Work
          </Link>
          <Link href="#about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="#contact" className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90">
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
