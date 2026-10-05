/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // ja / en はそれぞれ別の root layout（<html lang> が異なる）。root layout が複数あると
    // 404 を単一レイアウトから組めないため、app/global-not-found.tsx で日本語の 404 を維持する。
    globalNotFound: true,
    cssChunking: "graph",
  },
};

export default nextConfig;
