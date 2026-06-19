"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "I work with ambitious businesses, startups and agencies that need modern web applications, commerce experiences or custom business systems. I’m most valuable when I can take ownership of a project and deliver a complete solution.",
  },

  {
    question: "What types of projects are a good fit?",
    answer:
      "I specialise in modern web applications, commerce experiences, customer portals and business systems. Projects that need to evolve over time — adding new features, workflows or revenue streams — are where I add the most value.",
  },

  {
    question: "What technologies do you use?",
    answer:
      "My core stack centres around Next.js, React, Shopify and Supabase. I focus on clean architecture, maintainable code and production-ready systems rather than chasing trends or over-engineering solutions.",
  },

  {
    question: "Do you work with agencies?",
    answer:
      "Yes. I regularly collaborate with agencies as a delivery partner, taking ownership of clearly defined projects and integrating into existing workflows where needed.",
  },

  {
    question: "Do you take on short-term or ongoing work?",
    answer:
      "Both. I’m available for defined projects as well as longer-term collaborations where businesses need a trusted technical partner to help build and evolve their products over time.",
  },
];
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-foreground/10 py-40" id="faq">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
          Common Questions
        </h2>
        <h3 className="text-headline">Frequently Asked Questions</h3>

        <div className="mt-16 space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={faq.question} className="border-b border-foreground/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left text-body font-medium transition-colors duration-300 hover:text-primary"
                >
                  {/* Question text constrained to ~75% so the icon never gets squeezed */}
                  <span className="max-w-[75%] leading-snug">
                    {faq.question}
                  </span>

                  {/* Icon stays aligned with the first line and never shrinks */}
                  <Plus
                    className={`mt-1 size-5 shrink-0 text-foreground/50 transition-transform duration-500 ease-out ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-6 text-body text-foreground/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
