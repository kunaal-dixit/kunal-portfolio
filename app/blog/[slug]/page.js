// app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";
import { mdxComponents } from "@/components/MDXComponents";

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Per-post SEO metadata
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author || siteConfig.name }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author || siteConfig.name],
      tags: post.tags,
      images: post.image ? [post.image] : ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : ["/og-image.png"],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

const prettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // JSON-LD structured data for rich Google results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: post.image
      ? `${siteConfig.url}${post.image}`
      : `${siteConfig.url}/og-image.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-accent-600 dark:hover:text-accent-500"
      >
        <ArrowLeft size={16} /> Back to all articles
      </Link>

      {/* Header */}
      <header className="mb-12 border-b border-gray-100 pb-8 dark:border-gray-900">
        <div className="mb-4 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 dark:border-gray-800 dark:text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            },
          }}
        />
      </div>

      {/* Footer CTA */}
      <footer className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-900">
        <p className="text-gray-600 dark:text-gray-400">
          Enjoyed this? Share it on{" "}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `${post.title} by @${siteConfig.social.twitter
                .split("/")
                .pop()} ${siteConfig.url}/blog/${post.slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-600 underline dark:text-accent-500"
          >
            Twitter
          </a>{" "}
          or{" "}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteConfig.url}/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-600 underline dark:text-accent-500"
          >
            LinkedIn
          </a>
          .
        </p>
      </footer>
    </article>
  );
}
