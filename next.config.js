/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/blog/:path*/',
        destination: 'http://newthing.22web.org/:path*/'
      },
    ];
  },
};

module.exports = nextConfig
