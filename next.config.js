/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.servicetasker.com",
        port: "",
        // pathname: "/account123/**",
      },
    ],
    unoptimized: true,
  },
};
