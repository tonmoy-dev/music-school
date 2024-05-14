/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["i.ibb.co", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/r7kHjrR/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
