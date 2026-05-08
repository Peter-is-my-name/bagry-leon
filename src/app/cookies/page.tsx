import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { StructuredData } from "@/components/shared/StructuredData";

export const metadata: Metadata = {
  title: "Cookies — Bagry Leon",
  description: "Informace o používání cookies na webu Bagry Leon.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: "https://www.bagryleon.cz/" },
      { "@type": "ListItem", position: 2, name: "Cookies", item: "https://www.bagryleon.cz/cookies" },
    ],
  };

  return (
    <>
      <StructuredData data={[breadcrumbData]} />

      <PageHero
        title="Cookies"
        breadcrumbs={[
          { label: "Domov", href: "/" },
          { label: "Cookies", href: "/cookies" },
        ]}
      />

      <main className="bg-[#0D0F0F] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Co jsou cookies
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed">
                Cookies jsou malé textové soubory ukládané do vašeho zařízení 
                při návštěvě webových stránek. Slouží k zajištění správného 
                fungování webu a ke zlepšení uživatelského zážitku.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Jaké cookies používáme
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed mb-4">
                Naše webové stránky používají pouze technicky nezbytné cookies, 
                které jsou nutné pro správné fungování webu. Tyto cookies 
                nelze vypnout, protože by to znemožnilo používání stránek.
              </p>
              <table className="w-full text-sm text-[#C9C2B6] border-collapse">
                <thead>
                  <tr className="border-b border-[#38352E]">
                    <th className="text-left py-2 pr-4">Název</th>
                    <th className="text-left py-2 pr-4">Účel</th>
                    <th className="text-left py-2">Doba platnosti</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#38352E]/50">
                    <td className="py-3 pr-4">next-auth.session-token</td>
                    <td className="py-3 pr-4">Autentizace uživatele</td>
                    <td className="py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="mb-8">
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Cookies třetích stran
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed">
                Nepoužíváme analytické, marketingové ani jiné cookies třetích stran. 
                Nesdílíme data s Google Analytics, Facebook Pixel ani jinými 
                nástroji pro sledování návštěvníků.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-4">
                Jak spravovat cookies
              </h2>
              <p className="text-[#C9C2B6] leading-relaxed">
                Většina webových prohlížečů umožňuje správu cookies v nastavení. 
                Můžete cookies mazat, blokovat nebo nastavit upozornění před jejich 
                uložením. Upozorňujeme, že zablokování technicky nezbytných cookies 
                může ovlivnit funkčnost webových stránek.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
