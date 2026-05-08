"use client";

import { Phone, MessageSquare } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#121515] border-t border-[#38352E] lg:hidden">
      <div className="flex">
        <a
          href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#F5F1E8] hover:bg-[#1A1D1D] transition-colors"
          onClick={() => {
            if (typeof window !== "undefined" && "gtag" in window) {
              (window as Window & { gtag?: Function }).gtag?.("event", "phone_click", {
                location: "mobile_cta",
                phone_number: COMPANY.primaryPhone,
              });
            }
          }}
        >
          <Phone className="h-4 w-4" />
          Zavolat
        </a>
        <div className="w-px bg-[#38352E]" />
        <Link
          href="#kontakt"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors"
        >
          <MessageSquare className="h-4 w-4" />
          Poptat kalkulaci
        </Link>
      </div>
    </div>
  );
}
