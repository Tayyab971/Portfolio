/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
