// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.thum.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
