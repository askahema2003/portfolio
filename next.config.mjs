/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: works on Vercel, Cloudflare Pages, Netlify, GitHub Pages.
  output: "export",
  images: { unoptimized: true },
};
export default nextConfig;
