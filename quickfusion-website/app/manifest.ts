import { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QuickFusion Innovations",
    short_name: "QuickFusion",
    description:
      "Creative media agency specializing in video production and digital content creation",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#49af2f",
    icons: [
      {
        src: "/images/logo-full.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
