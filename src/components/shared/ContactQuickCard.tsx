"use client";

import { Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function ContactQuickCard() {
  return (
    <div className="relative bg-[#1A1D1D]/95 backdrop-blur-sm border border-[#38352E] overflow-hidden">
      {/* Striped Warning Header */}
      <div
        className="h-5 w-full"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            #F5C451,
            #F5C451 8px,
            #0D0F0F 8px,
            #0D0F0F 16px
          )`,
        }}
      />

      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-1">
            Rychlý kontakt
          </h3>
          <p className="text-xs text-[#8D867A]">
            Potřebujete okamžitou konzultaci? Zavolejte nám.
          </p>
        </div>

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
                    location: "quick_card",
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

        <p className="text-xs text-[#8D867A] pt-1">
          <span className="text-[#F5C451]">Nejrychlejší je zavolat.</span>
        </p>
      </div>
    </div>
  );
}
