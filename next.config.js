/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image Optimization - Critical for LCP
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance: Enable SWR caching with aggressive buffering
  onDemandEntries: {
    maxInactiveAge: 120 * 60 * 1000,
    pagesBufferLength: 8,
  },

  // Compression
  compress: true,

  // Powering with React Compiler (enabled in React 19)
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ['@/components/ui', '@/lib'],
  },

  // Headers for aggressive caching and performance
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/((?!api|admin|_next/static|_next/image).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [];
  },

  // Rewrites
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

  // Webpack optimization
  webpack: (config, { dev }) => {
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
    };
    return config;
  },

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Swc minification
  swcMinify: true,

  // Page extensions
  pageExtensions: ['ts', 'tsx'],

  // TypeScript
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
