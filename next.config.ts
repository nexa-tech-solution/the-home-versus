import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cache optimized images for 30 days (default is 60s) — dramatically
    // reduces Vercel Image Optimization cache writes for static product images
    minimumCacheTTL: 2592000,

    // Only serve WebP (not AVIF) — avoids doubling cache entries.
    // Amazon CDN images are already very well compressed JPEGs; AVIF
    // savings are negligible but the extra cache slot is not.
    formats: ['image/webp'],

    // Fewer breakpoints = fewer cached variants per image.
    // These cover: mobile (390/768) and desktop (1080/1200) viewports.
    deviceSizes: [390, 768, 1080, 1200],

    // Sizes matching actual thumbnail/icon usages in the app:
    // 40px (category icon), 48px (compare similar), 80px (related),
    // 120px (comparison card products), 150px (gallery thumbnails)
    imageSizes: [40, 48, 80, 120, 150],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'nunababy.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-gif.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
};

export default nextConfig;
