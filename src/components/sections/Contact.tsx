"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const serviceTypes = [
  "Zemní a výkopové práce",
  "Nákladní doprava",
  "Komunální služby",
  "Terénní úpravy",
  "Technika / strojní práce",
  "Jiný dotaz",
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual server action
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Track form submission
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Window & { gtag?: Function }).gtag?.("event", "form_inquiry_submitted", {
        form_location: "contact_section",
      });
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-[#0D0F0F] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8] mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-lg text-[#8D867A]">
            Popište nám, co potřebujete realizovat. Ozveme se vám zpět a domluvíme další postup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1A1D1D] border border-[#38352E] p-6 lg:p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F5C451]/10 rounded-full flex items-center justify-center">
                  <Send className="h-8 w-8 text-[#F5C451]" />
                </div>
                <h3 className="font-[var(--font-barlow)] text-2xl font-bold uppercase text-[#F5F1E8] mb-2">
                  Děkujeme za poptávku
                </h3>
                <p className="text-[#8D867A]">
                  Ozveme se vám co nejdříve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2"
                    >
                      Jméno a příjmení *
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
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2"
                    >
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
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2"
                  >
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
                  <label
                    htmlFor="location"
                    className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2"
                  >
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
                  <label
                    htmlFor="serviceType"
                    className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2"
                  >
                    Typ služby
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="w-full px-4 py-3 bg-[#202424] border border-[#38352E] text-[#F5F1E8] focus:border-[#F5C451] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2"
                  >
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
                  <label
                    htmlFor="term"
                    className="block text-xs uppercase tracking-wider text-[#8D867A] mb-2"
                  >
                    Preferovaný termín realizace
                  </label>
                  <input
                    type="text"
                    id="term"
                    name="term"
                    className="w-full px-4 py-3 bg-[#202424] border border-[#38352E] text-[#F5F1E8] placeholder-[#8D867A] focus:border-[#F5C451] focus:outline-none transition-colors"
                    placeholder="Co nejdříve / konkrétní termín"
                  />
                </div>

                <div className="pt-2">
                  <p className="text-xs text-[#8D867A] mb-4">
                    Vaše údaje použijeme pouze pro zpracování poptávky.
                  </p>
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
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Company Card */}
            <div className="bg-[#1A1D1D] border border-[#38352E] p-6 lg:p-8">
              <h3 className="font-[var(--font-barlow)] text-2xl font-bold uppercase text-[#F5F1E8] mb-6">
                {COMPANY.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#F5C451] mt-0.5" />
                  <div>
                    <p className="text-sm text-[#C9C2B6]">
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.postalCode} {COMPANY.address.city}
                      <br />
                      {COMPANY.address.region}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-[#C9C2B6] hover:text-[#F5C451] transition-colors"
                >
                  <Phone className="h-5 w-5 text-[#F5C451]" />
                  <span className="text-sm">{COMPANY.phones[0]}</span>
                </a>

                <a
                  href={`tel:${COMPANY.phones[1].replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-[#C9C2B6] hover:text-[#F5C451] transition-colors"
                >
                  <Phone className="h-5 w-5 text-[#F5C451]" />
                  <span className="text-sm">{COMPANY.phones[1]}</span>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-[#C9C2B6] hover:text-[#F5C451] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[#F5C451]" />
                  <span className="text-sm">{COMPANY.email}</span>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-[#38352E]">
                <p className="text-xs text-[#8D867A]">
                  GPS: {COMPANY.gps.lat}°N {COMPANY.gps.lng}°E
                </p>
              </div>
            </div>

            {/* Quick Call Card */}
            <div className="bg-[#F5C451] p-6 lg:p-8">
              <h4 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#0D0F0F] mb-2">
                Nejrychlejší je zavolat
              </h4>
              <p className="text-sm text-[#0D0F0F]/70 mb-4">
Jsme NONSTOP dostupní – konzultace probíhají i o víkendu.
              </p>
              <a
                href={`tel:${COMPANY.primaryPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-xl font-bold text-[#0D0F0F] hover:underline"
              >
                <Phone className="h-5 w-5" />
                {COMPANY.primaryPhone}
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-[#1A1D1D] border border-[#38352E] overflow-hidden">
              <div className="aspect-video w-full">
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
              <div className="p-3 bg-[#121515] border-t border-[#38352E]">
                <p className="text-xs text-[#8D867A] text-center">
                  {COMPANY.address.street}, {COMPANY.address.postalCode} {COMPANY.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
