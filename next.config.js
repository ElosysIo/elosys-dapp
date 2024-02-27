/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:slug', // Match any single path segment as a slug
        destination: '/component/:slug', // Redirect to the component folder
      },
    ];
  },
};
