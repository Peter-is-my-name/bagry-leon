import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { StructuredData } from "@/components/shared/StructuredData";
import { faqItems } from "@/data/faq-full";

export const metadata: Metadata = {
  title: "Často kladené otázky — FAQ | Bagry Leon",
  description: "Odpovědi na nejčastější dotazy o zemních a výkopových pracích. Ceny, termíny, technika, oblast působnosti. Praha-východ.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.bagryleon.cz/faq" },
    ],
  };

  // Group FAQs by category
  const categories = [...new Set(faqItems.map((f) => f.category))];

  return (
    <>
      <StructuredData data={[faqData, breadcrumbData]} />

      <PageHero
        title="Často kladené otázky"
        subtitle="Odpovědi na nejčastější dotazy o našich službách, cenách, termínech a technice."
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <main className="bg-[#0D0F0F] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const items = faqItems.filter((f) => f.category === category);
            return (
              <div key={category} className="mb-12 last:mb-0">
                <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-6">
                  {category}
                </h2>
                <FaqAccordion items={items} />
              </div>
            );
          })}
        </div>
      </main>

      <CTASection
        title="Nenašli jste odpověď?"
        description="Zavolejte nebo napište — rádi vám osobně zodpovíme jakékoliv dotazy."
        primaryButton={{ label: "Kontaktujte nás", href: "/kontakt" }}
      />
    </>
  );
}
