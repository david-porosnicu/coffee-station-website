/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  env: {
    VAPI_API_KEY: process.env.VAPI_API_KEY,
    VAPI_BOT_ID: process.env.VAPI_BOT_ID,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
