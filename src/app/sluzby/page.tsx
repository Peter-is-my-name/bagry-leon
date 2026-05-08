import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ContactQuickCard } from "@/components/shared/ContactQuickCard";
import { StructuredData } from "@/components/shared/StructuredData";
import { servicesDetail } from "@/data/services-detail";

export const metadata: Metadata = {
  title: "Naše služby — zemní a výkopové práce Praha-východ | Bagry Leon",
  description: "Kompletní zemní práce, výkopy, terénní úpravy, nákladní doprava a demolice v Praze-východ. Vlastní technika, rychlé termíny, férové ceny.",
  alternates: { canonical: "/sluzby" },
  openGraph: {
    title: "Naše služby — zemní a výkopové práce Praha-východ | Bagry Leon",
    description: "Kompletní zemní práce, výkopy, terénní úpravy, nákladní doprava a demolice v Praze-východ.",
    url: "/sluzby",
    type: "website",
  },
};

export default function SluzbyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Služby Bagry Leon",
    description: "Zemní práce, výkopové práce, terénní úpravy, nákladní doprava a demolice v Praze-východ.",
    url: "https://www.bagryleon.cz/sluzby",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: servicesDetail.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `https://www.bagryleon.cz/sluzby/${service.slug}`,
        },
      })),
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Služby", item: "https://www.bagryleon.cz/sluzby" },
    ],
  };

  return (
    <>
      <StructuredData data={[structuredData, breadcrumbData]} />
      
      <PageHero
        title="Naše služby — zemní a výkopové práce Praha-východ"
        subtitle="Zajišťujeme kompletní zemní práce pro rodinné domy, stavební firmy i developery. Disponujeme vlastní technikou a týmem zkušených operátorů."
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Služby", href: "/sluzby" },
        ]}
      />

      <main className="bg-[#0D0F0F]">
        {/* Intro Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg text-[#C9C2B6] leading-relaxed">
                Bagry Leon působí v oblasti zemních a výkopových prací v Praze-východ a okolí. 
                Naším cílem je kvalitně odvedená práce, férová domluva a dodržení termínů. 
                Díky vlastnímu strojovému parku jsme flexibilní a nezávislí na externích dodavatelích.
              </p>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesDetail.map((service) => (
                <ServiceCard
                  key={service.slug}
                  icon={service.icon}
                  title={service.shortTitle}
                  description={service.description}
                  href={`/sluzby/${service.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 lg:py-24 bg-[#121515]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                Pro koho pracujeme
              </span>
              <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8]">
                Komu pomáháme
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1A1D1D] border border-[#38352E] p-6 lg:p-8">
                <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-3">
                  Soukromé osoby
                </h3>
                <p className="text-sm text-[#8D867A] leading-relaxed">
                  Stavíte rodinný dům? Potřebujete bazén, garáž nebo terénní úpravy zahrady? 
                  Zajistíme kompletní zemní práce — od výkopů po finální úpravy pozemku.
                </p>
              </div>

              <div className="bg-[#1A1D1D] border border-[#38352E] p-6 lg:p-8">
                <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-3">
                  Stavební firmy
                </h3>
                <p className="text-sm text-[#8D867A] leading-relaxed">
                  Hledáte spolehlivého subdodavatele zemních prací? Máme vlastní techniku, 
                  zkušené operátory a dodržujeme termíny. Spolupráce pro větší i menší stavby.
                </p>
              </div>

              <div className="bg-[#1A1D1D] border border-[#38352E] p-6 lg:p-8">
                <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-3">
                  Developeři a investoři
                </h3>
                <p className="text-sm text-[#8D867A] leading-relaxed">
                  Připravujete rezidenční projekt? Zajistíme přípravu pozemků, přípojky IS 
                  a kompletní terénní úpravy pro výstavbu. Máme zkušenosti s většími zakázkami.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                  Rychlá poptávka
                </span>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-4">
                  Potřebujete cenovou nabídku?
                </h2>
                <p className="text-[#C9C2B6] leading-relaxed mb-6">
                  Popište nám váš projekt — rozsah prací, lokalitu a ideální termín. 
                  Ozveme se zpět s předběžnou kalkulací a návrhem dalšího postupu.
                </p>
                <p className="text-sm text-[#8D867A]">
                  Nejjednodušší je zavolat přímo na <a href="tel:+420777111708" className="text-[#F5C451] hover:underline">+420 777 111 708</a>. 
                  Jsme k dispozici Po–Pá 7:00–18:00.
                </p>
              </div>

              <div className="max-w-sm lg:ml-auto">
                <ContactQuickCard />
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection
        title="Připraveni začít váš projekt?"
        description="Nezávazná konzultace a obhlídka zdarma. Zavolejte nebo napište — domluvíme se na termínu."
        primaryButton={{ label: "Poptat zdarma", href: "/kontakt" }}
        secondaryButton={{ label: "Zobrazit techniku", href: "/technika" }}
      />
    </>
  );
}
