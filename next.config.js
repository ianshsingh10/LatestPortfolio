/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      // add other domains if needed
    ],
  },
};

module.exports = nextConfig;