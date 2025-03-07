/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: { esmExternals: true },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath: '/kirigami-website',
}

const removeImports = require('next-remove-imports')()
module.exports = removeImports(nextConfig)
