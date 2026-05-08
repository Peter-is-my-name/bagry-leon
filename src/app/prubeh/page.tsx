import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { StructuredData } from "@/components/shared/StructuredData";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak probíhá zakázka — postup realizace | Bagry Leon",
  description: "Od poptávky po předání — přehledný postup realizace zemních prací. Konzultace, obhlídka, cenová nabídka, realizace. Praha-východ.",
  alternates: { canonical: "/prubeh" },
};

const processSteps = [
  {
    title: "Poptávka",
    description: "Zavolejte nebo vyplňte kontaktní formulář. Do 24 hodin se ozveme zpět a domluvíme podrobnosti.",
    details: ["Telefonické konzultace zdarma", "Nezávazná poptávka online", "Rychlá prvotní orientace ceny"],
  },
  {
    title: "Obhlídka místa",
    description: "Přijedeme na místo, zhodnotíme terén, přístupové cesty a specifika zakázky. Tato služba je bezplatná.",
    details: ["Bezplatná obhlídka", "Zhodnocení terénu", "Do 3 pracovních dnů od poptávky"],
  },
  {
    title: "Cenová kalkulace",
    description: "Dodáme transparentní písemnou kalkulaci. Cena je konečná — žádné skryté položky ani překvapení na konci.",
    details: ["Písemná kalkulace", "Transparentní ceny", "Bez skrytých položek"],
  },
  {
    title: "Realizace",
    description: "Pracujeme vlastní technikou s licencovanými operátory. Dodržujeme dohodnuté termíny a komunikujeme průběh.",
    details: ["Vlastní technika", "Licencovaní operátoři", "Dodržení termínů"],
  },
  {
    title: "Předání a úklid",
    description: "Pozemek předáváme uklizený, s odvezeným odpadem. Vystavíme doklady a fakturu s DPH.",
    details: ["Uklizený pozemek", "Vystavení dokladů", "Fakturace s DPH"],
  },
];

const deliverables = [
  "Písemná cenová kalkulace před započetím prací",
  "Vystavení veškerých dokladů a potvrzení",
  "Fotodokumentace průběhu zakázky",
  "Odvoz veškerého odpadu a suti",
  "Fakturace s DPH (jsme plátci)",
  "Záruka na provedené práce",
];

const timelines = [
  { project: "Menší zakázka", examples: "Výkop pro přípojka, odstranění pařezů", duration: "1–2 dny" },
  { project: "Střední zakázka", examples: "Základy RD, terénní úpravy pozemku", duration: "3–5 dnů" },
  { project: "Větší zakázka", examples: "Výkopy pro více domů, rozsáhlé úpravy", duration: "1–3 týdny" },
];

export default function PrubehPage() {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Jak probíhá zakázka u Bagry Leon",
    description: "Postup od poptávky po předání hotové zakázky.",
    totalTime: "P1D",
    step: processSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Průběh", item: "https://www.bagryleon.cz/prubeh" },
    ],
  };

  return (
    <>
      <StructuredData data={[howToData, breadcrumbData]} />

      <PageHero
        title="Jak u nás probíhá zakázka — od poptávky po předání"
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Průběh", href: "/prubeh" },
        ]}
      />

      <main className="bg-[#0D0F0F]">
        {/* Process Steps */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Desktop - 5 columns with connecting line */}
            <div className="hidden lg:block relative">
              {/* Connecting line - positioned between the number boxes */}
              <div className="absolute top-8 left-[10%] right-[10%] h-px bg-[#38352E]" />

              <div className="grid grid-cols-5 gap-6">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="relative text-center">
                    {/* Step number */}
                    <div className="relative z-10 mx-auto w-16 h-16 flex items-center justify-center bg-[#F5C451] text-[#0D0F0F] font-[var(--font-barlow)] text-2xl font-bold mb-6">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <h2 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-3">
                      {step.title}
                    </h2>
                    <p className="text-sm text-[#8D867A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile - vertical layout */}
            <div className="lg:hidden space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#F5C451] text-[#0D0F0F] font-[var(--font-barlow)] text-xl font-bold">
                      {index + 1}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px h-full bg-[#38352E] mx-auto mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <h2 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-2">
                      {step.title}
                    </h2>
                    <p className="text-sm text-[#8D867A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 lg:py-24 bg-[#121515]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-6">
                  Co od nás vždy dostanete
                </h2>
                <ul className="space-y-3">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#F5C451] flex-shrink-0 mt-0.5" />
                      <span className="text-[#C9C2B6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-6">
                  Jak dlouho to trvá?
                </h2>
                <div className="space-y-4">
                  {timelines.map((timeline) => (
                    <div key={timeline.project} className="bg-[#1A1D1D] border border-[#38352E] p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8]">
                          {timeline.project}
                        </h3>
                        <span className="text-[#F5C451] font-medium">{timeline.duration}</span>
                      </div>
                      <p className="text-xs text-[#8D867A]">{timeline.examples}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#8D867A] mt-4">
                  Konkrétní termín závisí na rozsahu, počasí a aktuální vytíženosti. 
                  Po obhlídce dodáme přesný harmonogram.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Link */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/sluzby"
              className="inline-flex items-center gap-2 text-[#F5C451] hover:text-[#FFD875] transition-colors"
            >
              Podívejte se, jaké služby nabízíme
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <CTASection
        title="Připraveni začít?"
        description="První krok je jednoduchý — zavolejte nebo napište. Do 24 hodin se ozveme zpět."
        primaryButton={{ label: "Nezávazná poptávka", href: "/kontakt" }}
      />
    </>
  );
}
