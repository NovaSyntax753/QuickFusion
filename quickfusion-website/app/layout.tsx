import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "QuickFusion Innovations - Software & Technology Solutions",
    template: "%s | QuickFusion Innovations",
  },
  description:
    "QuickFusion Innovations - Where creativity meets technology. Fusing strategic marketing with powerful tech solutions to help brands lead with confidence in the digital world.",
  keywords: [
    "software development",
    "technology solutions",
    "web development",
    "app development",
    "AI solutions",
    "digital transformation",
    "video content creation",
    "digital marketing",
    "Nagpur",
  ],
  authors: [{ name: "QuickFusion Innovations" }],
  creator: "QuickFusion Innovations",
  publisher: "QuickFusion Innovations",
  metadataBase: new URL("https://quickfusioninnovations.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://quickfusioninnovations.com",
    siteName: "QuickFusion Innovations",
    title: "QuickFusion Innovations - Where Creativity Meets Technology",
    description:
      "We create growth engines that empower businesses to think bigger, move faster, and scale smarter. Web development, app development, AI solutions, and digital transformation.",
    images: [
      {
        url: "D:\\Project\\QuickFusion\\3-removebg-preview.jpg",
        width: 1200,
        height: 630,
        alt: "QuickFusion Innovations - Software & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickFusion Innovations - Where Creativity Meets Technology",
    description:
      "We create growth engines that empower businesses to think bigger, move faster, and scale smarter.",
    images: ["/images/og-image.png"],
    creator: "@quickfusion",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
