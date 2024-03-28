const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static exports
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
