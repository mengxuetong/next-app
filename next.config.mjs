/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: process.env.NODE_ENV === 'production'
    },
    images: {
        dangerouslyAllowSVG: true,
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
        ]
      }
};

export default nextConfig;
