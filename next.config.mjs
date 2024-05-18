/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.travelandleisureasia.com",
        port: "",
        pathname: "/wp-content/uploads/sites/**",
      },
      {
        protocol: "https",
        hostname: "www.discovermassage.com.au",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
