import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { ContactForm } from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lee Williams for your next web project. Fast, stable, trade-grade web applications.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Lee Williams",
    description:
      "Get in touch with Lee Williams for your next web project. Fast, stable, trade-grade web applications.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-xl px-(--container-padding)">
          <h1 className="text-headline mb-2">Get in touch</h1>
          <p className="text-body text-foreground/70 mb-12">
            Have a project in mind? Send a message and I&apos;ll get back to you.
          </p>
          <ContactForm />
        </div>
      </main>
    </>
  );
}
