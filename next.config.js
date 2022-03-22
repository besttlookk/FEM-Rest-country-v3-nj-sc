/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
