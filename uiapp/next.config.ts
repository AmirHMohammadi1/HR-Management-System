/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // i18n: {
  //   locales: ['fa', 'en'],
  //   defaultLocale: 'fa',
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fa',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['localhost'],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;