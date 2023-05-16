/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/comingSoon',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}


module.exports = {
  basePath: '/comingSoon',
}

module.exports = nextConfig

