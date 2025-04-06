/** @type {import('next').NextConfig} */
const backendUrl = new URL(process.env.NEXT_PUBLIC_STRAPI_URL || '');
console.log('Image host config:', backendUrl.hostname);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: backendUrl.protocol.replace(':', ''),
        hostname: backendUrl.hostname,
        port: backendUrl.port || '', // empty string if no port
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
