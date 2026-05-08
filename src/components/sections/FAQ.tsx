"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#121515] py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8]">
            Časté dotazy
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1D1D] border border-[#38352E] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="font-[var(--font-barlow)] text-lg font-medium text-[#F5F1E8] pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-[#F5C451] flex-shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-[#38352E] mb-4" />
                  <p className="text-[#C9C2B6] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
