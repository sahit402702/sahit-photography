/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // use remotePatterns to allow images from Unsplash and similar providers
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      }
    ],
    // serve remote images directly (useful for static export or non-Vercel hosts)
    unoptimized: true
  }
};
module.exports = nextConfig;
