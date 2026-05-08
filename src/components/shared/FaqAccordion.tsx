"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  showAll?: boolean;
}

export function FaqAccordion({ items, showAll = true }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(showAll ? 0 : null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#1A1D1D] border border-[#38352E] overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between p-6 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-[var(--font-barlow)] text-lg font-medium text-[#F5F1E8] pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-[#F5C451] flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-[#C9C2B6] leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
