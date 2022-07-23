/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["scontent-gmp1-1.cdninstagram.com"],
  },
  ignoreDuringBuilds: true,
};

module.exports = nextConfig;
