/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  webpack(config) {
    return config; // leave webpack unchanged
  },
};

export default nextConfig;
