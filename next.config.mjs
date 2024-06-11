/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "files.edgestore.dev",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
