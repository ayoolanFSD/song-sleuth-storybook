import type { NextConfig } from "next";

// Minimal Next config for the standalone Storybook. The @storybook/nextjs-vite
// framework reads this so `next/image` etc. behave as they do in the real app.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "i.scdn.co", pathname: "/**" },
      { protocol: "https", hostname: "mosaic.scdn.co", pathname: "/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "randomuser.me", pathname: "/api/portraits/**" },
    ],
  },
};

export default nextConfig;
