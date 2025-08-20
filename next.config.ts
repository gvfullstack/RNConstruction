import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280],
    imageSizes: [200, 300, 400, 600, 800],
  },
  async redirects() {
    return [
      {
        source: "/fire-rebuild",
        destination: "/disaster-recovery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
