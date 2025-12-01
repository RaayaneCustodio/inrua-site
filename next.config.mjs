/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/privacidade',
        destination: '/politica-privacidade',
        permanent: true
      },
      {
        source: '/termos',
        destination: '/termo-uso',
        permanent: true
      }
    ]
  }
}

export default nextConfig
