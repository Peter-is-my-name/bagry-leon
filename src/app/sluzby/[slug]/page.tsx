import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { StructuredData } from "@/components/shared/StructuredData";
import { servicesDetail, getServiceBySlug } from "@/data/services-detail";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesDetail.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Služba nenalezena | Bagry Leon",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/sluzby/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/sluzby/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServices
    .map((s) => servicesDetail.find((sd) => sd.slug === s))
    .filter(Boolean);

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Služby", item: "https://www.bagryleon.cz/sluzby" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://www.bagryleon.cz/sluzby/${service.slug}` },
    ],
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    url: `https://www.bagryleon.cz/sluzby/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.bagryleon.cz/#business",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Praha-východ" },
      { "@type": "AdministrativeArea", name: "Praha" },
      { "@type": "AdministrativeArea", name: "Středočeský kraj" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "CZK",
      availability: "https://schema.org/InStock",
      url: `https://www.bagryleon.cz/sluzby/${service.slug}`,
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <StructuredData data={[breadcrumbData, serviceData, faqData]} />

      <PageHero
        title={service.h1}
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Služby", href: "/sluzby" },
          { label: service.shortTitle, href: `/sluzby/${service.slug}` },
        ]}
      />

      <main className="bg-[#0D0F0F]">
        {/* Intro Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="prose prose-invert max-w-none">
                {service.intro.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-lg text-[#C9C2B6] leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Includes Section */}
        <section className="py-16 lg:py-24 bg-[#121515]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                  Co zahrnuje
                </span>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-6">
                  Co tato služba zahrnuje
                </h2>
                <ul className="space-y-3">
                  {service.whatIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#F5C451] flex-shrink-0 mt-0.5" />
                      <span className="text-[#C9C2B6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                  Postup
                </span>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-6">
                  Jak postupujeme
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#F5C451] text-[#0D0F0F] font-[var(--font-barlow)] font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#8D867A]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[#38352E]">
                  <Link href="/prubeh" className="inline-flex items-center gap-2 text-sm text-[#F5C451] hover:text-[#FFD875] transition-colors">
                    Kompletní popis průběhu zakázky
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Machines & Audience Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                  Technika
                </span>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-6">
                  Použitá technika
                </h2>
                <p className="text-[#C9C2B6] mb-6">
                  Pro tyto práce používáme následující stroje z našeho vozového parku:
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.relevantMachines.map((machine) => (
                    <span
                      key={machine}
                      className="text-sm px-3 py-2 bg-[#1A1D1D] border border-[#38352E] text-[#C9C2B6]"
                    >
                      {machine}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/technika" className="inline-flex items-center gap-2 text-sm text-[#F5C451] hover:text-[#FFD875] transition-colors">
                    Kompletní přehled techniky
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div>
                <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                  Pro koho
                </span>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8] mb-6">
                  Pro koho je tato služba ideální
                </h2>
                <div className="space-y-4">
                  {service.audience.map((item) => (
                    <div key={item.target} className="bg-[#1A1D1D] border border-[#38352E] p-4">
                      <h3 className="font-[var(--font-barlow)] text-base font-bold uppercase text-[#F5F1E8] mb-2">
                        {item.target}
                      </h3>
                      <p className="text-sm text-[#8D867A]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-[#121515]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                FAQ
              </span>
              <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8]">
                Často kladené otázky
              </h2>
            </div>
            <FaqAccordion items={service.faqs} />
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
                  Související služby
                </span>
                <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8]">
                  Mohlo by vás také zajímat
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((related) => related && (
                  <ServiceCard
                    key={related.slug}
                    icon={related.icon}
                    title={related.shortTitle}
                    description={related.description}
                    href={`/sluzby/${related.slug}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <CTASection
        title={`Potřebujete ${service.title.toLowerCase()}?`}
        description="Zavolejte nebo napište — domluvíme se na termínu obhlídky a cenové kalkulaci."
        primaryButton={{ label: "Poptat zdarma", href: "/kontakt" }}
        secondaryButton={{ label: "Zpět na všechny služby", href: "/sluzby" }}
      />
    </>
  );
}
