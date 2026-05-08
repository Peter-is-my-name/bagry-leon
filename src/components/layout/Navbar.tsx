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
            className="lg:hidden p-2 text-[#F5F1E8]"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0F0F] border-t border-[#38352E]">
          <div className="px-4 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block text-sm uppercase tracking-wider transition-colors",
                  isActive(link.href)
                    ? "text-[#F5C451]"
                    : "text-[#C9C2B6] hover:text-[#F5C451]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 pt-4 border-t border-[#38352E] text-sm text-[#F5F1E8]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              <span>{COMPANY.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
