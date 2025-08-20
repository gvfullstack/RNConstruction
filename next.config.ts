import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
