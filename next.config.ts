import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: works on Vercel, Cloudflare Pages, Netlify, GitHub Pages.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
