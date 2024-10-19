/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**', // Allow images from this domain
      },
    ],
  },

  webpack(config) {
    return config; // leave webpack unchanged
  },
};

export default nextConfig;

