"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-(--container-max) items-center justify-between px-(--container-padding) py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Home"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#about" className="text-body hover:underline">
              About
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-primary px-5 py-2.5 text-body font-medium text-white hover:opacity-90"
            >
              Get in touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex size-10 items-center justify-center md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${!menuOpen ? "pointer-events-none" : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-foreground/20 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Slide panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8 p-8 pt-24">
            <button
              type="button"
              onClick={closeMenu}
              className="absolute right-6 top-6 flex size-10 items-center justify-center"
              aria-label="Close menu"
            >
              <X className="size-6" />
            </button>

            <Link
              href="#about"
              onClick={closeMenu}
              className="text-body font-medium hover:underline"
            >
              About
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="w-fit rounded-full bg-primary px-6 py-3 text-body font-medium text-white hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
