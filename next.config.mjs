/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'dev.strapi.civicdatalab.in', // <-- this is the only one you really need
    ],
    formats: ['image/webp'],
  },
};

export default nextConfig;
