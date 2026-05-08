import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { StructuredData } from "@/components/shared/StructuredData";
import { machines } from "@/data/machines";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Naše technika — strojový park | Bagry Leon",
  description: "Pásové rypadlo, smykový nakladač, kontejnerový vůz s hydraulickou rukou. Vlastní technika pro zemní práce v Praze-východ.",
  alternates: { canonical: "/technika" },
};

const certifications = [
  "Licencovaní operátoři s pravidelným školením",
  "Pojištění odpovědnosti za škodu",
  "Pravidelný servis všech strojů",
  "Certifikace pro práci ve ztížených podmínkách",
];

export default function TechnikaPage() {
  const machinesListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: machines.map((machine, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: machine.name,
        description: machine.description,
        category: machine.category,
      },
    })),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Technika", item: "https://www.bagryleon.cz/technika" },
    ],
  };

  return (
    <>
      <StructuredData data={[machinesListData, breadcrumbData]} />

      <PageHero
        title="Naše technika — vlastní stroje pro každou zakázku"
        subtitle="Díky vlastnímu strojovému parku dokážeme flexibilně řešit menší i větší práce bez zbytečných prodlev."
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Technika", href: "/technika" },
        ]}
      />

      <main className="bg-[#0D0F0F]">
        {/* Intro */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-lg text-[#C9C2B6] leading-relaxed">
                Disponujeme vlastním strojovým parkem, který pravidelně servisujeme. To nám umožňuje 
                dodržovat termíny a reagovat flexibilně na potřeby klientů. Naši operátoři mají 
                dlouholeté zkušenosti a potřebná oprávnění pro práci s veškerou technikou.
              </p>
            </div>
          </div>
        </section>

        {/* Machines Grid */}
        <section className="py-16 lg:py-24 bg-[#121515]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {machines.map((machine) => (
                <div
                  key={machine.id}
                  className="bg-[#1A1D1D] border border-[#38352E] overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-video bg-[#202424] overflow-hidden">
                    {machine.image ? (
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl">🚜</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wider text-[#F5C451]">
                      {machine.category}
                    </span>
                    <h2 className="font-[var(--font-barlow)] text-2xl font-bold uppercase text-[#F5F1E8] mt-2 mb-3">
                      {machine.name}
                    </h2>
                    <p className="text-sm text-[#8D867A] mb-4 leading-relaxed">
                      {machine.description}
                    </p>

                    {/* Specs */}
                    <div className="space-y-2">
                      {machine.specs.slice(0, 4).map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-sm text-[#C9C2B6]">
                          <span className="w-1.5 h-1.5 bg-[#F5C451]" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                  Kvalita a bezpečnost
                </span>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-6">
                  Operátoři a licence
                </h2>
                <ul className="space-y-3">
                  {certifications.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#F5C451] flex-shrink-0 mt-0.5" />
                      <span className="text-[#C9C2B6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                  Spolehlivost
                </span>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-6">
                  Údržba a servis
                </h2>
                <p className="text-[#C9C2B6] leading-relaxed mb-4">
                  Každý stroj pravidelně podrobujeme preventivním prohlídkám a servisu. 
                  Díky tomu minimalizujeme riziko poruch na staveništi a zajišťujeme 
                  plynulý průběh zakázek.
                </p>
                <p className="text-[#8D867A] text-sm">
                  Servisní intervaly dle doporučení výrobců. Náhradní technika 
                  k dispozici pro případ neočekávaných situací.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection
        title="Zajistíme techniku pro vaši zakázku"
        description="Poptávejte služby s jistotou vlastního strojového parku a zkušených operátorů."
        primaryButton={{ label: "Poptat služby", href: "/kontakt" }}
      />
    </>
  );
}
