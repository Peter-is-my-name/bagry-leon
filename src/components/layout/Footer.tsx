import Link from "next/link";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0D0F0F] border-t border-[#38352E]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-[#F5F1E8] mb-4">
              Kontakt
            </h3>
            <address className="not-italic space-y-2 text-sm text-[#8D867A]">
              <p className="text-[#F5F1E8] font-medium">{COMPANY.name}</p>
              <p>{COMPANY.address.street}</p>
              <p>{COMPANY.address.postalCode} {COMPANY.address.city}</p>
              <p className="pt-2">
                <a
                  href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
                  className="hover:text-[#F5C451] transition-colors"
                >
                  {COMPANY.primaryPhone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-[#F5C451] transition-colors"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-xs text-[#8D867A] pt-2">
                Po–Pá: 7:00–18:00
              </p>
            </address>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-[#F5F1E8] mb-4">
              Služby
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.sluzby.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8D867A] hover:text-[#F5C451] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-[#F5F1E8] mb-4">
              Společnost
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.spolecnost.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8D867A] hover:text-[#F5C451] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-[#F5F1E8] mb-4">
              Právní informace
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.pravni.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8D867A] hover:text-[#F5C451] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-[#38352E] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8D867A]">
            © 2026 {COMPANY.name}. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-[#8D867A]">
            Zemní a výkopové práce Praha-východ
          </p>
        </div>
      </div>
    </footer>
  );
}
