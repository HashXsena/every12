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
        source: 'http://newthing.22web.org/',
        destination: 'http://newthing.22web.org'
      },
    ];
  },
};

module.exports = nextConfig
