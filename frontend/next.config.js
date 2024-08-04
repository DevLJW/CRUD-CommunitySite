/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
  },

  trailingSlash: true,
  async rewrites() {
    return [
      { source: "/:path*", destination: "http://api.coolsms.co.kr/:path*" },
    ];
  },
  reactStrictMode: true,

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
