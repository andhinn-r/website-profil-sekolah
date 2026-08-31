import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iqawsdfhtoluchnsbyjz.supabase.co',
        pathname: '/storage/v1/object/public/**', // Izinkan semua path di storage public
      },
    ],
  },
};

export default nextConfig;