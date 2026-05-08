import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";
import Link from "next/link";

export function ServiceArea() {
  return (
    <section id="lokalita" className="bg-[#0D0F0F] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8] mb-4">
            Působíme v Praze-východ a okolí
          </h2>
          <p className="text-lg text-[#8D867A]">
            Realizujeme zakázky v okolí Šestajovic, Prahy-východ a dalších přilehlých lokalit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Chips */}
          <div className="bg-[#1A1D1D] border border-[#38352E] p-6 lg:p-8">
            <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-6">
              Oblasti působnosti
            </h3>

            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#202424] border border-[#38352E] text-sm text-[#C9C2B6]"
                >
                  <MapPin className="h-3 w-3 text-[#F5C451]" />
                  {area}
                </span>
              ))}
              <span className="inline-flex items-center px-3 py-1.5 bg-[#202424] border border-[#38352E] text-sm text-[#8D867A]">
                okolní obce dle domluvy
              </span>
            </div>

            <div className="mt-8 p-4 bg-[#202424]">
              <p className="text-sm text-[#C9C2B6] leading-relaxed">
                Hledáte spolehlivé zemní práce, výkopové práce nebo odvoz zeminy v okolí Prahy-východ? BAGRY LEON nabízí profesionální služby s vlastní technikou pro rodinné domy, stavební firmy, obce i soukromé pozemky.
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-[#1A1D1D] border border-[#38352E] p-6 lg:p-8">
            <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-6">
              Kontakt pro vaši lokalitu
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F5C451] mt-0.5" />
                <div>
                  <p className="text-sm text-[#C9C2B6]">
                    {COMPANY.address.full}
                  </p>
                  <p className="text-xs text-[#8D867A] mt-1">
                    GPS: {COMPANY.gps.lat}°N, {COMPANY.gps.lng}°E
                  </p>
                </div>
              </div>

              <a
                href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-[#C9C2B6] hover:text-[#F5C451] transition-colors"
              >
                <Phone className="h-5 w-5 text-[#F5C451]" />
                <span className="text-sm">{COMPANY.primaryPhone}</span>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-[#C9C2B6] hover:text-[#F5C451] transition-colors"
              >
                <Mail className="h-5 w-5 text-[#F5C451]" />
                <span className="text-sm">{COMPANY.email}</span>
              </a>
            </div>

            <Link
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[#F5C451] hover:text-[#FFD875] transition-colors"
            >
              Ověřit dostupnost v mé lokalitě
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
