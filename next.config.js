/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [768, 1024, 1216, 1440],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kj-code-challenge.s3.eu-west-1.amazonaws.com'
      },
    ],
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}

module.exports = nextConfig
