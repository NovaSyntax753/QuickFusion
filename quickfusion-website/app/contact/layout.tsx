import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with QuickFusion Innovations. Have a project in mind? Let's discuss how we can help transform your business with innovative technology solutions.",
  openGraph: {
    title: "Contact Us - QuickFusion Innovations",
    description:
      "Have a project in mind? Let's discuss how we can help transform your business with innovative technology solutions.",
    url: "https://quickfusioninnovations.com/contact",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact QuickFusion Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - QuickFusion Innovations",
    description:
      "Have a project in mind? Let's discuss how we can help transform your business.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
