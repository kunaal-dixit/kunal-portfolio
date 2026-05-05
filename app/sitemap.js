// app/sitemap.js
// Next.js auto-generates /sitemap.xml from this file.

import { siteConfig } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = ["", "/about", "/projects", "/blog", "/contact"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: path === "" ? 1.0 : 0.8,
    })
  );

  // Blog posts
  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...routes, ...posts];
}
