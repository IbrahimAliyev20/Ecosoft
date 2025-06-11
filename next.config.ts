import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Bu əvvəlki idi, qalsın
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // YENİ ƏLAVƏ OLUNAN
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
