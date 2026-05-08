import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Stránka nenalezena — 404 | Bagry Leon",
  description: "Požadovaná stránka nebyla nalezena. Vraťte se na hlavní stránku nebo nás kontaktujte.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0D0F0F] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <div className="mb-8">
          <span className="font-[var(--font-barlow)] text-8xl sm:text-9xl font-bold text-[#F5C451]">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-4">
          Stránka nenalezena
        </h1>
        <p className="text-[#C9C2B6] mb-8 leading-relaxed">
          Požadovaná stránka neexistuje nebo byla přesunuta. 
          Vraťte se na hlavní stránku nebo nás kontaktujte.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors"
          >
            Hlavní stránka
          </Link>
          <a
            href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-wider border border-[#F5C451] text-[#F5C451] hover:bg-[#F5C451] hover:text-[#0D0F0F] transition-colors"
          >
            Zavolat nám
          </a>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-[#38352E]">
          <p className="text-sm text-[#8D867A] mb-4">Možná jste hledali:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/sluzby" className="text-sm text-[#F5C451] hover:underline">
              Služby
            </Link>
            <Link href="/kontakt" className="text-sm text-[#F5C451] hover:underline">
              Kontakt
            </Link>
            <Link href="/faq" className="text-sm text-[#F5C451] hover:underline">
              FAQ
            </Link>
            <Link href="/projekty" className="text-sm text-[#F5C451] hover:underline">
              Projekty
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
