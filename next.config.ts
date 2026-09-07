import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deifkwefumgah.cloudfront.net",
        pathname: "/shadcnblocks/block/lummi/**",
      },
    ],
  },
};

export default nextConfig;