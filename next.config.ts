import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Cloudflare worker examples are not part of the static portfolio export.
  typescript: {
    ignoreBuildErrors: process.env.GITHUB_PAGES === "true",
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
