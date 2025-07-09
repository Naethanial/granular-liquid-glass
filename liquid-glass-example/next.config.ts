import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/granular-liquid-glass' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/granular-liquid-glass' : '',
};

export default nextConfig;
