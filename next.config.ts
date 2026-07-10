import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**.vercel.app",
        protocol: "https",
      },
    ],
  },
  reactStrictMode: true,
  turbopack: {
    root: import.meta.dirname,
  },
}

export default nextConfig
