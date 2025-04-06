/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.strapi.civicdatalab.in',
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
