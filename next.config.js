/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    async headers() {
      return [
        // Add your headers configuration here
        { source: '/api/update-data', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] },
      ];
    },
  };
  