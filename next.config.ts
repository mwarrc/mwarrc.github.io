import type { NextConfig } from "next";

/**
 * Next.js configuration for GitHub Pages (user site).
 *
 * This is a USER site (mwarrc.github.io), meaning GitHub serves it
 * from the root path `/` — NOT a sub-path like `/mwarrc/`.
 *
 * Rules:
 *  - NO basePath   → assets & links resolve from root `/`
 *  - NO assetPrefix → same reason
 *  - output: 'export' → required for static GitHub Pages hosting
 *  - trailingSlash  → ensures clean URLs work correctly on Pages
 *  - images.unoptimized → Next.js image optimisation requires a server;
 *                         static export must disable it
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
