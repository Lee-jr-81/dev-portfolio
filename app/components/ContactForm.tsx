"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("idle");

    const body = new URLSearchParams({
      "form-name": "contact",
      name: data.name,
      email: data.email,
      message: data.message,
      "bot-field": "", // Honeypot - leave empty
    }).toString();

    try {
      const response = await fetch("/__forms", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* form-name: Required for Netlify Forms when using JS submit; must match name attribute */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot: hidden from users, bots often fill it; Netlify rejects if filled */}
      <p className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="bot-field">Don&apos;t fill this out</label>
        <input
          id="bot-field"
          type="text"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
        />
      </p>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-body text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Your name"
          disabled={isSubmitting}
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-body text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="you@example.com"
          disabled={isSubmitting}
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full resize-y rounded-lg border border-foreground/20 bg-background px-4 py-3 text-body text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="How can I help?"
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-primary px-6 py-3  md:text-body text-sm font-medium text-white transition-colors duration-300 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      {submitStatus === "success" && (
        <div className="space-y-4 rounded-lg bg-green-100 px-4 py-4 dark:bg-green-900/30">
          <p
            className="text-body font-medium text-green-700 dark:text-green-400"
            role="status"
          >
            Thanks! Your message has been sent. I&apos;ll get back to you soon.
          </p>
          <Link
            href="/"
            className="inline-block rounded-full bg-green-700 px-5 py-2.5 text-body font-medium text-white transition-colors duration-300 hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      )}

      {submitStatus === "error" && (
        <p className="text-body text-red-600" role="alert">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
