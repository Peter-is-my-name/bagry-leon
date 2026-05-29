import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { StructuredData } from "@/components/shared/StructuredData";
import { ProjektyClient } from "./ProjektyClient";

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
          <ProjektyClient />
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
