"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-(--container-max) items-center justify-between px-(--container-padding) py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Home"
            width={120}
            height={32}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm md:text-body font-medium text-white hover:opacity-90"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
