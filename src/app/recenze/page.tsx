import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { StructuredData } from "@/components/shared/StructuredData";
import { reviews } from "@/data/reviews";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Recenze a reference — Bagry Leon | Zemní práce",
  description: "Co o nás říkají zákazníci? Přečtěte si reference na zemní a výkopové práce v lokalitě Praha-východ.",
  alternates: { canonical: "/recenze" },
};

export default function RecenzePage() {
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.bagryleon.cz/#business",
    name: "Bagry Leon",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.length > 0 
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : "5.0",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Recenze", item: "https://www.bagryleon.cz/recenze" },
    ],
  };

  return (
    <>
      <StructuredData data={[aggregateRating, breadcrumbData]} />

      <PageHero
        title="Co o nás říkají zákazníci"
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Recenze", href: "/recenze" },
        ]}
      />

      <main className="bg-[#0D0F0F] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Average Rating */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1A1D1D] border border-[#38352E] px-6 py-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-[#F5C451] text-[#F5C451]"
                  />
                ))}
              </div>
              <span className="font-[var(--font-barlow)] text-2xl font-bold text-[#F5F1E8]">
                5.0
              </span>
              <span className="text-sm text-[#8D867A]">
                / 5 ({reviews.length} recenzí)
              </span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="bg-[#1A1D1D] border border-[#38352E] p-6 relative"
              >
                <Quote className="h-8 w-8 text-[#F5C451]/20 absolute top-4 right-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-[#F5C451] text-[#F5C451]"
                          : "text-[#38352E]"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-[#C9C2B6] mb-6 leading-relaxed">
                  "{review.text}"
                </blockquote>

                <footer className="flex items-center gap-3 pt-4 border-t border-[#38352E]">
                  <div className="w-10 h-10 bg-[#F5C451]/10 flex items-center justify-center">
                    <span className="font-[var(--font-barlow)] text-sm font-bold text-[#F5C451]">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-[#F5F1E8] text-sm">
                      {review.author}
                    </p>
                    <p className="text-xs text-[#8D867A]">{review.date}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          {/* CTA to Google Reviews */}
          <div className="text-center mt-12">
            <a
              href="https://g.page/bagryleon/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#F5C451] hover:text-[#FFD875] transition-colors"
            >
              <span>Zobrazit recenze na Google</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <CTASection
        title="Přidejte se k našim spokojeným zákazníkům"
        description="Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku vašeho projektu."
        primaryButton={{ label: "Poptat kalkulaci", href: "/kontakt" }}
      />
    </>
  );
}
