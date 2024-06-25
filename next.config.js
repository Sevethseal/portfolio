/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
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
