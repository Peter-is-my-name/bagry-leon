import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bagryleon.cz";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.jpg`;

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Bagry Leon",
      locale: "cs_CZ",
      title,
      description,
      images: [{ url: ogImage ?? DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage ?? DEFAULT_OG_IMAGE],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
