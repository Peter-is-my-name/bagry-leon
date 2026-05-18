"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Helper to check if a link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0D0F0F]/95 backdrop-blur-sm border-b border-[#38352E]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://www.zemni-vykopove-prace.eu/img/logo.png"
              alt="Bagry Leon"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-wider transition-colors",
                  isActive(link.href)
                    ? "text-[#F5C451]"
                    : "text-[#C9C2B6] hover:text-[#F5C451]"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-[#F5F1E8] hover:text-[#F5C451] transition-colors"
              onClick={() => {
                if (typeof window !== "undefined" && "gtag" in window) {
                  (window as Window & { gtag?: Function }).gtag?.("event", "phone_click", {
                    location: "navbar",
                    phone_number: COMPANY.primaryPhone,
                  });
                }
              }}
            >
              <Phone className="h-4 w-4" />
              <span>{COMPANY.primaryPhone}</span>
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors"
            >
              Poptat kalkulaci
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#F5F1E8] hover:text-[#F5C451] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Professional Redesign */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-[#0D0F0F] overflow-y-auto">
          <div className="px-5 py-6 space-y-6">
            {/* Navigation Links - Large Touch Targets */}
            <nav className="space-y-1">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center py-4 px-3 text-base uppercase tracking-[0.12em] font-medium transition-all rounded-sm",
                    isActive(link.href)
                      ? "text-[#F5C451] bg-[#F5C451]/5 border-l-2 border-[#F5C451]"
                      : "text-[#C9C2B6] hover:text-[#F5F1E8] hover:bg-[#1A1D1D]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  <span className="ml-2">{link.label}</span>
                  {isActive(link.href) && (
                    <span className="ml-auto text-[#F5C451] text-xs">●</span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-px bg-[#38352E]" />

            {/* Contact Section */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-[#8D867A] px-1">
                Rychlý kontakt
              </p>
              <a
                href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 bg-[#1A1D1D] border border-[#38352E] rounded-sm active:bg-[#2A2F2F] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-12 h-12 bg-[#F5C451]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#F5C451]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[#8D867A] uppercase tracking-wider">
                    Zavolejte nám
                  </p>
                  <p className="text-lg font-semibold text-[#F5F1E8] tracking-wide">
                    {COMPANY.primaryPhone}
                  </p>
                </div>
              </a>
              <p className="text-xs text-[#8D867A] px-1 leading-relaxed">
                Jsme NONSTOP dostupní – konzultace i o víkendu.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 w-full py-4 text-base font-semibold uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] rounded-sm hover:bg-[#FFD875] active:bg-[#E5B440] transition-colors shadow-lg shadow-[#F5C451]/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Poptat kalkulaci
              </Link>
              <p className="text-center text-xs text-[#8D867A] mt-3">
                Zdarma a nezávazně
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
