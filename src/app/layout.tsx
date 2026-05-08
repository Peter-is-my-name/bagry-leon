import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { COMPANY, METADATA } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  keywords: [...METADATA.keywords],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  metadataBase: new URL(COMPANY.url),
  alternates: {
    canonical: "/",
    languages: {
      "cs-CZ": "/",
    },
  },
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    url: "/",
    siteName: COMPANY.name,
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add verification code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${barlowCondensed.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background font-[var(--font-barlow)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
