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
    "QuickFusion Innovations delivers cutting-edge software and technology solutions including web development, app development, AI solutions, and digital transformation services.",
  keywords: [
    "software development",
    "technology solutions",
    "web development",
    "app development",
    "AI solutions",
    "digital transformation",
  ],
  authors: [{ name: "QuickFusion Innovations" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "QuickFusion Innovations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
