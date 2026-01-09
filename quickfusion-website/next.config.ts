import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,
  images: {
    unoptimized: true, // Required for static export
    qualities: [75, 85],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.youtube.com",
      },
      {
        protocol: "https",
        hostname: "**.vimeo.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
