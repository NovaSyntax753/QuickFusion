import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Portfolio - QuickFusion Innovations",
  description:
    "Explore our diverse portfolio of successful video productions, shorts, and media projects across various industries. 100+ videos created for 50+ happy clients.",
  keywords: [
    "video production portfolio",
    "media agency work",
    "video editing showcase",
    "corporate videos",
    "social media content",
    "advertising videos",
    "Nagpur video production",
  ],
  openGraph: {
    title: "Portfolio - QuickFusion Innovations",
    description:
      "Watch our collection of creative video content and media productions for leading brands.",
    url: "https://quickfusioninnovations.com/portfolio",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickFusion Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - QuickFusion Innovations",
    description:
      "100+ videos created for leading brands. Explore our creative work.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://quickfusioninnovations.com/portfolio",
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio - QuickFusion Innovations",
    description:
      "Explore our diverse portfolio of successful video productions and media projects.",
    url: "https://quickfusioninnovations.com/portfolio",
    provider: {
      "@type": "Organization",
      name: "QuickFusion Innovations",
      url: "https://quickfusioninnovations.com",
    },
  };

  return (
    <>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Portfolio />
      </main>
    </>
  );
}
