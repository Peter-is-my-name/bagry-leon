import { servicesDetail } from "@/data/services-detail";

export const dynamic = "force-static";

const BASE = "https://www.bagryleon.cz";

export default async function sitemap() {
  const lastModified = new Date();

  // Static routes
  const staticRoutes = [
    { url: `${BASE}/`, lastModified, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${BASE}/sluzby`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/prubeh`, lastModified, changeFrequency: "yearly" as const, priority: 0.6 },
    { url: `${BASE}/technika`, lastModified, changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `${BASE}/projekty`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/recenze`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/faq`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/kontakt`, lastModified, changeFrequency: "yearly" as const, priority: 0.9 },
    { url: `${BASE}/ochrana-osobnich-udaju`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Service detail pages
  const serviceRoutes = servicesDetail.map((service) => ({
    url: `${BASE}/sluzby/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // TODO: Add project detail pages when projects data is ready
  // const projectRoutes = projects.map((p) => ({
  //   url: `${BASE}/projekty/${p.slug}`,
  //   lastModified: new Date(p.updatedAt),
  //   changeFrequency: "yearly" as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes, ...serviceRoutes];
}
