/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'oaidalleapiprodscus.blob.core.windows.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
            pathname: '/**',

          },
        ],
        formats: ['image/webp','image/avif', 'image/svg+xml', 'image/jpg', 'image/jpeg', 'image/png']
      }
};

export default nextConfig;
