"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Do you work with agencies or direct clients?",
    answer:
      "I primarily collaborate with agencies and product teams. I do also take on direct client work, helping develop their ideas into a robust application.",
  },
  {
    question: "How do you approach new projects?",
    answer:
      "I prefer clearly defined outcomes and constraints before development begins. Once scope is agreed and design is provided, I focus on structured delivery, clean architecture, and slotting into existing workflows with minimal disruption.",
  },
  {
    question: "What technologies do you typically work with?",
    answer:
      "My core stack centres around Next.js and supabase as a backend. I focus on solid architecture, maintainable codebases, and production-ready builds rather than chasing trends.",
  },

  {
    question: "Do you take on short-term or ongoing work?",
    answer:
      "Both. Im available for defined short-term builds as well as longer-term collaboration where structured engineering support is required.",
  },
  {
    question: "What kind of projects are a good fit?",
    answer:
      "Content and marketing sites are always fun. I enjoy the client handover and seeing the project come to life. A strong marketplace or saas app is always fun too.",
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
