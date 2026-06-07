// lib/posts.js
// Reads all .mdx files from /content/blog/ and parses them.
// Supports `draft: true` frontmatter — drafts are hidden in production builds
// but visible during local development (npm run dev).

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

// Reading-time on prose only — fenced code blocks read at a different pace
// than narrative, so counting them as words overstates the estimate.
function proseReadingTime(content) {
  const prose = content.replace(/```[\s\S]*?```/g, "");
  return readingTime(prose).text;
}

// Helper to determine if a post should be shown
function shouldShowPost(data) {
  // In production, hide posts marked as draft
  if (process.env.NODE_ENV === "production" && data.draft === true) {
    return false;
  }
  return true;
}

export function getAllPosts() {
  // Get all .mdx files in the blog folder
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const fullPath = path.join(POSTS_DIR, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Skip drafts in production
      if (!shouldShowPost(data)) return null;

      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        tags: data.tags || [],
        author: data.author || "",
        image: data.image || null,
        draft: data.draft === true,
        readingTime: proseReadingTime(content),
        content,
      };
    })
    .filter(Boolean); // Remove nulls (drafts in production)

  // Sort newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Hide drafts in production (return null so the page 404s)
  if (!shouldShowPost(data)) return null;

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    author: data.author || "",
    image: data.image || null,
    draft: data.draft === true,
    readingTime: proseReadingTime(content),
    content,
  };
}

export function getAllSlugs() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const fullPath = path.join(POSTS_DIR, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      // Don't generate static pages for drafts in production
      if (!shouldShowPost(data)) return null;

      return filename.replace(/\.mdx$/, "");
    })
    .filter(Boolean);
}
