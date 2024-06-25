/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/next2024',
  output: 'export',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
