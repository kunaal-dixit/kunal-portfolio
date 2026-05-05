// app/feed.xml/route.js
// Generates an RSS feed at /feed.xml

import RSS from "rss";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";

export async function GET() {
  const posts = getAllPosts();

  const feed = new RSS({
    title: siteConfig.siteName,
    description: siteConfig.description,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      siteConfig.name
    }`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      guid: post.slug,
      categories: post.tags,
      author: post.author || siteConfig.name,
      date: new Date(post.date),
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "s-maxage=3600, stale-while-revalidate=59",
    },
  });
}
