/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow MDX files as pages too if needed (we use next-mdx-remote so this is optional)
  pageExtensions: ["js", "jsx", "mdx"],

  // Image optimization for external blog post images, if you embed any
  images: {
    remotePatterns: [
      // Add domains here if you embed images from external sources
      // { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Help with SEO — clean URLs
  trailingSlash: false,
};

module.exports = nextConfig;
