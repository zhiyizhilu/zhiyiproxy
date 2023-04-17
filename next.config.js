/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: "/proxy/:slug*",
        destination: "https://aktools-zhiyizhilu.cloud.okteto.net/:slug*",
      },
    ];
  }
}

module.exports = nextConfig