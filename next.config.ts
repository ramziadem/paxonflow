import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/paxonflow', // <-- Double check this!
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
