/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/testing",
  reactStrictMode: true,
};

module.exports = nextConfig;