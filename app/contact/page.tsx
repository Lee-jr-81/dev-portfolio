import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner enquiry — agency overflow and production-grade Next.js delivery. Birmingham, UK; working with clients across the UK.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Lee Williams",
    description:
      "Partner enquiry — agency overflow and production-grade Next.js delivery. Birmingham, UK; working with clients across the UK.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-xl px-(--container-padding)">
          <h1 className="text-headline mb-2">Partner enquiry</h1>
          <p className="text-body text-foreground/70 mb-4">
            Best suited to agencies and teams with defined outcomes or existing
            design and technical direction.
          </p>
          <p className="text-body text-foreground/70 mb-12">
            Share a brief, scope, or timeline and I&apos;ll get back to you.
          </p>
          <ContactForm />
        </div>
      </main>
    </>
  );
}
