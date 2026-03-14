import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
