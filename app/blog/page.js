// app/blog/page.js
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";
import BlogSearch from "@/components/BlogSearch";

export const metadata = {
  title: "Blog",
  description: `Articles by ${siteConfig.name} on Salesforce, Apex, LWC, integrations, and software engineering.`,
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: `Articles on Salesforce, Apex, LWC, and software engineering.`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        Writing
      </h1>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        Thoughts on Salesforce architecture, Apex patterns, LWC, integrations,
        and the craft of software engineering.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-500">No articles yet — check back soon!</p>
      ) : (
        <BlogSearch posts={posts} />
      )}
    </div>
  );
}
