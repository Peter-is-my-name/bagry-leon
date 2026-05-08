import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { StructuredData } from "@/components/shared/StructuredData";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů — Bagry Leon",
  description: "Informace o zpracování osobních údajů a ochraně soukromí. Zásady GDPR.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/ochrana-osobnich-udaju" },
};

export default function PrivacyPage() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Ochrana osobních údajů", item: "https://www.bagryleon.cz/ochrana-osobnich-udaju" },
    ],
  };

  return (
    <>
      <StructuredData data={[breadcrumbData]} />

      <PageHero
        title="Ochrana osobních údajů"
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Ochrana osobních údajů", href: "/ochrana-osobnich-udaju" },
        ]}
      />

      <main className="bg-[#0D0F0F] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Správce osobních údajů
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed">
                Správcem osobních údajů je společnost Bagry Leon, se sídlem 
                Šeříková 1049, 250 92 Šestajovice. Kontakt: bagryleon@seznam.cz, +420 777 111 708.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Jaké údaje zpracováváme
              </h2>
              <ul className="list-disc list-inside text-[#C9C2B6] space-y-2">
                <li>Jméno a příjmení — pro identifikaci zákazníka</li>
                <li>Telefonní číslo — pro komunikaci ohledně zakázky</li>
                <li>E-mailová adresa — pro zaslání nabídky</li>
                <li>Adresa realizace — pro přípravu a plánování prací</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Účely zpracování
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed">
                Osobní údaje zpracováváme výhradně za účelem:
              </p>
              <ul className="list-disc list-inside text-[#C9C2B6] space-y-2 mt-2">
                <li>Přípravy cenové nabídky</li>
                <li>Komunikace ohledně termínů a rozsahu prací</li>
                <li>Plnění smluvních povinností</li>
                <li>Vedení účetnictví a daňové evidence (zákonná povinnost)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Doba uchování
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed">
                Osobní údaje uchováváme po dobu nezbytnou pro splnění účelu, 
                nejdéle však 10 let od ukončení smluvního vztahu v souladu 
                s účetní a daňovou legislativou.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Vaše práva
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed">
                Máte právo na přístup k osobním údajům, jejich opravu, výmaz, 
                omezení zpracování, přenositelnost údajů a právo vznést námitku 
                proti zpracování. Práva můžete uplatnit e-mailem na 
                bagryleon@seznam.cz.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Cookies a analytika
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed">
                Tato webová stránka používá pouze technicky nezbytné cookies. 
                Nepoužíváme analytické ani marketingové nástroje třetích stran.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
