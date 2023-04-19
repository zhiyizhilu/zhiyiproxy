/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: "/proxy/:slug*",
        destination: "https://aktools-zhiyizhilu.cloud.okteto.net/:slug*",
        // destination: "https://aktools-production.up.railway.app/:slug*",
      },
      {
        source: "/aktools/:slug*",
        destination: "https://aktools-production.up.railway.app/:slug*",
      },
      
    ];
  }
}

module.exports = nextConfig