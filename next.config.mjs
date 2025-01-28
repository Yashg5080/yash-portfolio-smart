/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
      { protocol: "https", hostname: "github-readme-stats.vercel.app", pathname: "**" },
    ],
  },
  output: 'standalone', // Ensures the app runs independently
  reactStrictMode: true,
  experimental: {
    appDir: true, // Explicitly enable App Router
  },
};

export default nextConfig;