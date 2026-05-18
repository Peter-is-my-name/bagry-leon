"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactQuickCard } from "@/components/shared/ContactQuickCard";
import { StructuredData } from "@/components/shared/StructuredData";
import { COMPANY } from "@/lib/constants";
import { MapPin, Clock, Send, Loader2, Check, ChevronDown } from "lucide-react";
import { DatePicker } from "@/components/shared/DatePicker";

const metadata = {
  title: "Kontakt — Bagry Leon | zemní práce Praha-východ",
  description: "Telefon +420 777 111 708, email bagryleon@seznam.cz. Zemní a výkopové práce Praha-východ. Poptávky i nezávazná konzultace zdarma.",
};

const serviceAreas = [
  "Říčany", "Brandýs nad Labem", "Český Brod", "Úvaly",
  "Čelákovice", "Kostelec nad Černými lesy", "Mnichovice",
  "Modletice", "Mukařov", "Nupaky", "Obříství", "Ondřejov",
  "Svémyslice", "Šestajovice", "Tismice", "Vykáň", "Vyšehořovice",
  "Zeleneč", "Zlatá", "Zvánovice",
];

const termPresets = [
  { value: "asap", label: "Co nejdříve" },
  { value: "2weeks", label: "Do 14 dní" },
  { value: "month", label: "Do měsíce" },
  { value: "flexible", label: "Flexibilně" },
];

const serviceTypes = [
  "Zemní a výkopové práce",
  "Výkop základů",
  "Výkop přípojek",
  "Terénní úpravy",
  "Nákladní doprava",
  "Demolice a odvoz",
  "Jiný dotaz",
];

export default function KontaktPage() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.bagryleon.cz/#business",
    name: "Bagry Leon",
    alternateName: "Bagry Leon — zemní a výkopové práce",
    description: "Zemní a výkopové práce, terénní úpravy a nákladní doprava v oblasti Praha-východ. Vlastní technika, licencovaní operátoři, lokální firma.",
    url: "https://www.bagryleon.cz",
    telephone: "+420777111708",
    email: "bagryleon@seznam.cz",
    image: "https://www.bagryleon.cz/og/default.jpg",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      postalCode: COMPANY.address.postalCode,
      addressRegion: "Středočeský kraj",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.gps.lat,
      longitude: COMPANY.gps.lng,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Praha-východ" },
      { "@type": "AdministrativeArea", name: "Praha" },
      { "@type": "AdministrativeArea", name: "Středočeský kraj" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  const contactPageData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt Bagry Leon",
    description: "Kontaktní informace pro Bagry Leon — zemní a výkopové práce.",
    url: "https://www.bagryleon.cz/kontakt",
    mainEntity: {
      "@id": "https://www.bagryleon.cz/#business",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://www.bagryleon.cz/kontakt" },
    ],
  };

  return (
    <>
      <StructuredData data={[localBusinessData, contactPageData, breadcrumbData]} />

      <PageHero
        title="Kontaktujte nás"
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />

      <main className="bg-[#0D0F0F] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <ContactQuickCard />

              {/* Address */}
              <div className="bg-[#1A1D1D] border border-[#38352E] p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-[#F5C451] mt-0.5" />
                  <div>
                    <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-2">
                      Adresa
                    </h3>
                    <address className="not-italic text-sm text-[#C9C2B6]">
                      {COMPANY.name}<br />
                      {COMPANY.address.street}<br />
                      {COMPANY.address.postalCode} {COMPANY.address.city}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#F5C451] mt-0.5" />
                  <div>
                    <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-2">
                      Dostupnost
                    </h3>
                    <p className="text-sm text-[#C9C2B6]">
                      <span className="text-[#F5C451] font-bold">NONSTOP</span><br />
                      <span className="text-[#8D867A]">Konzultace i o víkendu</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <section className="mt-16 lg:mt-24">
            <div className="text-center mb-12">
              <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                Sídlo firmy
              </span>
              <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8]">
                Kde nás najdete
              </h2>
            </div>

            <div className="bg-[#1A1D1D] border border-[#38352E] overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.8!2d14.6776!3d50.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzQ5LjEiTiAxNMKwNDAnMzkuNSJF!5e0!3m2!1scs!2scz!4v1609459200000!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bagry Leon - Šeříková 1049, Šestajovice"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-[#121515] border-t border-[#38352E]">
                <p className="text-sm text-[#C9C2B6] text-center">
                  <strong className="text-[#F5F1E8]">Bagry Leon</strong> — {COMPANY.address.street}, {COMPANY.address.postalCode} {COMPANY.address.city}
                </p>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mt-16 lg:mt-24">
            <div className="text-center mb-12">
              <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                Oblast působnosti
              </span>
              <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8]">
                Kde pracujeme
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-sm px-3 py-1.5 bg-[#1A1D1D] border border-[#38352E] text-[#C9C2B6]"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-[#8D867A] mt-6">
              Dle dohody zajišťujeme realizace v celém Středočeském kraji a Praze.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

// Contact Form Component
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string>("asap");
  const [customDate, setCustomDate] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual server action
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div id="poptavka">
        <h2 className="font-[var(--font-barlow)] text-2xl font-bold uppercase text-[#F5F1E8] mb-4">
          Děkujeme za poptávku
        </h2>
        <div className="bg-[#1A1D1D] border border-[#38352E] p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#F5C451]/10 flex items-center justify-center">
            <Check className="h-8 w-8 text-[#F5C451]" />
          </div>
          <p className="text-[#C9C2B6] mb-2">
            Vaše zpráva byla odeslána.
          </p>
          <p className="text-sm text-[#8D867A]">
            Ozveme se vám co nejdříve.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="poptavka">
      <h2 className="font-[var(--font-barlow)] text-2xl font-bold uppercase text-[#F5F1E8] mb-4">
        Nezávazná poptávka
      </h2>
      <p className="text-[#8D867A] mb-6">
        Vyplňte formulář — ozveme se zpět s cenovou nabídkou.
      </p>

      <form onSubmit={handleSubmit} className="bg-[#1A1D1D] border border-[#38352E] p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2">
              Jméno *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-[#202424] border border-[#38352E] text-[#F5F1E8] placeholder-[#8D867A] focus:border-[#F5C451] focus:outline-none transition-colors"
              placeholder="Jan Novák"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[+]?[0-9\s]{9,}"
              className="w-full px-4 py-3 bg-[#202424] border border-[#38352E] text-[#F5F1E8] placeholder-[#8D867A] focus:border-[#F5C451] focus:outline-none transition-colors"
              placeholder="+420 777 111 708"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-[#202424] border border-[#38352E] text-[#F5F1E8] placeholder-[#8D867A] focus:border-[#F5C451] focus:outline-none transition-colors"
            placeholder="jan.novak@email.cz"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2">
            Lokalita zakázky *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full px-4 py-3 bg-[#202424] border border-[#38352E] text-[#F5F1E8] placeholder-[#8D867A] focus:border-[#F5C451] focus:outline-none transition-colors"
            placeholder="Šestajovice, ul. Javorová"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2">
            Typ služby
          </label>
          <div className="relative">
            <select
              id="serviceType"
              name="serviceType"
              className="w-full px-4 py-3 pr-10 bg-[#202424] border border-[#38352E] text-[#F5F1E8] focus:border-[#F5C451] focus:outline-none transition-colors appearance-none cursor-pointer"
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8D867A] pointer-events-none" />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2">
            Popis zakázky
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full px-4 py-3 bg-[#202424] border border-[#38352E] text-[#F5F1E8] placeholder-[#8D867A] focus:border-[#F5C451] focus:outline-none transition-colors resize-none"
            placeholder="Popište, co potřebujete realizovat, rozsah práce, přístup na pozemek..."
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-[#8D867A] mb-3">
            Preferovaný termín
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {termPresets.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => {
                  setSelectedTerm(preset.value);
                  setCustomDate("");
                }}
                className={`px-3 py-3 text-xs uppercase tracking-wider border transition-all ${
                  selectedTerm === preset.value && !customDate
                    ? "bg-[#F5C451]/10 border-[#F5C451] text-[#F5C451]"
                    : "bg-[#202424] border-[#38352E] text-[#C9C2B6] hover:border-[#8D867A]"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <DatePicker
            value={customDate}
            onChange={(v) => {
              setCustomDate(v);
              if (v) setSelectedTerm("");
            }}
            placeholder="Vyberte konkrétní datum"
            highlight={!!customDate}
          />
          <input type="hidden" name="term" value={customDate} />
          <p className="text-xs text-[#8D867A] mt-2">
            Vyberte rychlými tlačítky nebo zvolte konkrétní datum z kalendáře.
          </p>
          <input type="hidden" name="termPreset" value={customDate ? "custom" : selectedTerm} />
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group mb-4">
            <input
              type="checkbox"
              name="gdpr"
              required
              className="mt-0.5 h-4 w-4 flex-shrink-0 appearance-none border border-[#38352E] bg-[#202424] checked:bg-[#F5C451] checked:border-[#F5C451] cursor-pointer transition-colors relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-[#0D0F0F] checked:after:text-xs checked:after:font-bold focus:outline-none focus:ring-2 focus:ring-[#F5C451]/40"
            />
            <span className="text-xs text-[#C9C2B6] leading-relaxed group-hover:text-[#F5F1E8] transition-colors">
              Odesláním formuláře souhlasím se zpracováním osobních údajů v souladu s{" "}
              <a
                href="/ochrana-osobnich-udaju"
                target="_blank"
                rel="noopener"
                className="text-[#F5C451] underline hover:no-underline"
                onClick={(e) => e.stopPropagation()}
              >
                zásadami GDPR
              </a>
              .
            </span>
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Odesílání...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Odeslat poptávku
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
