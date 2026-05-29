"use client";

import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const trustBullets = [
  "Rychlá domluva",
  "Vlastní technika",
  "Férový přístup",
  "Lokální realizace",
];

export function CTASection() {
  return (
    <section className="relative bg-[#0D0F0F] py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,196,81,0.03),_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #F5C451,
              #F5C451 1px,
              transparent 1px,
              transparent 10px
            )`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8] mb-6">
          Potřebujete výkop, odvoz zeminy nebo techniku na stavbu?
        </h2>
        <p className="text-lg text-[#8D867A] mb-8 max-w-2xl mx-auto">
          Napište nám nebo rovnou zavolejte. Pomůžeme vám upřesnit rozsah prací a navrhnout vhodný postup.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors"
          >
            Poptat kalkulaci
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium uppercase tracking-wider border border-[#F5C451] text-[#F5C451] hover:bg-[#F5C451] hover:text-[#0D0F0F] transition-colors"
            onClick={() => {
              if (typeof window !== "undefined" && "gtag" in window) {
                (window as Window & { gtag?: Function }).gtag?.("event", "phone_click", {
                  location: "cta_section",
                  phone_number: COMPANY.primaryPhone,
                });
              }
            }}
          >
            <Phone className="h-5 w-5" />
            Zavolat {COMPANY.primaryPhone}
          </a>
        </div>

        {/* Trust bullets */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {trustBullets.map((bullet) => (
            <div key={bullet} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#F5C451]" />
              <span className="text-sm text-[#8D867A]">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
