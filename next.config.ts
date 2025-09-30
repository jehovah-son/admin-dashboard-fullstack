import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["imgs.search.brave.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.search.brave.com'
      }
    ]
  },
};

export default nextConfig;
