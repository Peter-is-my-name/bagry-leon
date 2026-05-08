"use client";

import Link from "next/link";
import { Phone, Mail, Check, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
export function Hero() {
  return (
    <section 
      className="relative min-h-screen bg-[#0D0F0F] pt-16 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(13, 15, 15, 0.95) 0%, rgba(13, 15, 15, 0.8) 40%, rgba(13, 15, 15, 0.4) 100%),
          url('/images/excavator-hero.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,196,81,0.03),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
              Spolehlivá česká firma
            </span>

            {/* H1 */}
            <h1 className="font-[var(--font-barlow)] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.15] text-[#F5F1E8]">
              Zemní a výkopové práce
              <span className="block text-[#F5C451]">Praha-východ</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-[#C9C2B6] max-w-xl leading-relaxed">
              Poskytujeme profesionální zemní práce, terénní úpravy a nákladní dopravu. Disponujeme vlastní spolehlivou technikou pro přesné a včasné provedení vašeho projektu.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors"
              >
                Poptat nezávazně
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#sluzby"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider border border-[#38352E] text-[#F5F1E8] hover:border-[#F5C451] hover:text-[#F5C451] transition-colors"
              >
                Zobrazit služby
              </Link>
            </div>

            {/* Trust Items */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                "Licencovaní operátoři",
                "Vlastní technika",
                "Lokální firma",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#F5C451]" />
                  <span className="text-sm text-[#8D867A]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Compact Quick Contact - 5 columns */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative bg-[#1A1D1D]/95 backdrop-blur-sm border border-[#38352E] overflow-hidden max-w-sm w-full">
              {/* Striped Warning Header - Black/Yellow Diagonal Stripes */}
              <div 
                className="h-5 w-full"
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    #F5C451,
                    #F5C451 8px,
                    #0D0F0F 8px,
                    #0D0F0F 16px
                  )`
                }}
              />

              <div className="p-5 space-y-4">
                {/* Title - Smaller */}
                <div>
                  <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-1">
                    Rychlý kontakt
                  </h2>
                  <p className="text-xs text-[#8D867A]">
                    Potřebujete okamžitou konzultaci? Zavolejte nám.
                  </p>
                </div>

                {/* Compact Contact Items */}
                <div className="space-y-2">
                  <a
                    href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 p-3 bg-[#202424] hover:bg-[#2A2F2F] transition-colors group"
                    onClick={() => {
                      if (typeof window !== "undefined" && "gtag" in window) {
                        (window as Window & { gtag?: Function }).gtag?.(
                          "event",
                          "phone_click",
                          {
                            location: "hero_card",
                            phone_number: COMPANY.primaryPhone,
                          }
                        );
                      }
                    }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-[#F5C451]/10 group-hover:bg-[#F5C451]/20 transition-colors">
                      <Phone className="h-4 w-4 text-[#F5C451]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#8D867A]">
                        Telefon
                      </p>
                      <p className="text-sm font-medium text-[#F5F1E8]">
                        {COMPANY.primaryPhone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 p-3 bg-[#202424] hover:bg-[#2A2F2F] transition-colors group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-[#F5C451]/10 group-hover:bg-[#F5C451]/20 transition-colors">
                      <Mail className="h-4 w-4 text-[#F5C451]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#8D867A]">
                        E-mail
                      </p>
                      <p className="text-sm font-medium text-[#F5F1E8]">
                        {COMPANY.email}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Footer note */}
                <p className="text-xs text-[#8D867A] pt-1">
                  <span className="text-[#F5C451]">Nejrychlejší je zavolat.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
