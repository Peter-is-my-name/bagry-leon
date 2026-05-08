import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="onas" className="bg-[#121515] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8] mb-6">
                Spolehlivý partner pro zemní práce v Praze-východ
              </h2>
            </div>

            <div className="space-y-4 text-[#C9C2B6] leading-relaxed">
              <p>
                Působíme v oboru výkopových a zemních prací. Jsme ryze česká firma se zkušenostmi v této oblasti a disponujeme vlastním strojovým parkem.
              </p>
              <p>
                Realizujeme zakázky od základů rodinných domů, bytových domů, komunikací a parkovišť až po finální terénní úpravy. Naším cílem je kvalitně odvedená práce, férová domluva a profesionální přístup od prvního kontaktu až po dokončení zakázky.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Vlastní strojový park" },
                { label: "Výkopy, doprava i údržba" },
                { label: "Praha-východ a okolí" },
                { label: "Zakázky pro domy, firmy i obce" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#1A1D1D] border border-[#38352E] p-4"
                >
                  <p className="text-sm text-[#C9C2B6]">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors"
            >
              Poptat služby
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-[#1A1D1D] border border-[#38352E] aspect-[4/3] overflow-hidden">
              <img
                src="https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_03.jpg"
                alt="Bagry Leon - zemní práce"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0F]/40 to-transparent" />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#F5C451]/30" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#F5C451]/5" />
            </div>

            {/* Label */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden lg:block">
              <span className="font-[var(--font-barlow)] text-6xl font-bold uppercase text-[#F5C451]/10 writing-mode-vertical">
                BAGRY LEON
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
