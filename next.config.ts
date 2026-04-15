import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@radix-ui/react-*"],
  },
};

export default nextConfig;
