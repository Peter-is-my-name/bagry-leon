import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { StructuredData } from "@/components/shared/StructuredData";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Realizace projektů — Bagry Leon | Reference",
  description: "Portfolio dokončených zakázek — základy domů, výkopové práce, terénní úpravy. Praha-východ a okolí.",
  alternates: { canonical: "/projekty" },
};

export default function ProjektyPage() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Projekty", item: "https://www.bagryleon.cz/projekty" },
    ],
  };

  return (
    <>
      <StructuredData data={[breadcrumbData]} />

      <PageHero
        title="Naše realizace"
        subtitle="Přehled dokončených zakázek — od základů rodinných domů po rozsáhlé terénní úpravy."
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Projekty", href: "/projekty" },
        ]}
      />

      <main className="bg-[#0D0F0F] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#8D867A] text-lg">
                Portfolio projektů bude brzy dostupné.
              </p>
              <p className="text-[#C9C2B6] mt-4">
                Pro aktuální reference nás neváhejte kontaktovat.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-[#1A1D1D] border border-[#38352E] overflow-hidden hover:border-[#F5C451]/30 transition-colors flex flex-col"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-3 line-clamp-2 h-[52px] flex items-start">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#8D867A] line-clamp-3 h-[63px] mb-3">
                      {project.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-[#38352E] flex items-center justify-between text-xs text-[#8D867A]">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <CTASection
        title="Máte podobný projekt?"
        description="Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku."
        primaryButton={{ label: "Poptat kalkulaci", href: "/kontakt" }}
      />
    </>
  );
}
