"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Question one?",
    answer:
      "Answer placeholder. Expand with your own content.",
  },
  {
    question: "Question two?",
    answer: "Answer placeholder. Expand with your own content.",
  },
  {
    question: "Question three?",
    answer: "Answer placeholder. Expand with your own content.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-foreground/10 py-section">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
          Common Questions
        </h2>
        <h3 className="mt-6 text-headline">
          Frequently Asked Questions
        </h3>
        <div className="mt-16 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-foreground/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left text-body font-medium hover:underline"
              >
                {faq.question}
                <span className="text-foreground/50">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <p className="pb-6 text-body text-foreground/70">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
