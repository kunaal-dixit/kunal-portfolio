// components/BlogSearch.js
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Search, X } from "lucide-react";

export default function BlogSearch({ posts }) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  // Collect unique tags from all posts (sorted alphabetically)
  const allTags = useMemo(() => {
    const tagSet = new Set();
    posts.forEach((post) => post.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts based on search query AND selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Tag filter
      if (selectedTag && !post.tags.includes(selectedTag)) {
        return false;
      }

      // Search query filter (case-insensitive, matches title/description/tags)
      if (query.trim()) {
        const q = query.toLowerCase();
        const haystack = [
          post.title,
          post.description,
          ...(post.tags || []),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [posts, query, selectedTag]);

  const hasActiveFilters = query.trim() || selectedTag;

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles by title, description, or tag..."
          aria-label="Search articles"
          className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-12 text-base text-gray-900 placeholder-gray-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:placeholder-gray-500"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700 dark:hover:text-gray-200"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Tag filters */}
      {allTags.length > 0 && (
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-500">
              Filter by tag:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                !selectedTag
                  ? "border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900"
                  : "border-gray-200 text-gray-600 hover:border-gray-400 dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setSelectedTag(selectedTag === tag ? null : tag)
                }
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  selectedTag === tag
                    ? "border-accent-500 bg-accent-500 text-white"
                    : "border-gray-200 text-gray-600 hover:border-gray-400 dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active filter status / results count */}
      {hasActiveFilters && (
        <div className="mb-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
          <p>
            {filteredPosts.length === 0
              ? "No articles found"
              : `Showing ${filteredPosts.length} of ${posts.length} ${
                  posts.length === 1 ? "article" : "articles"
                }`}
            {selectedTag && (
              <>
                {" "}
                tagged{" "}
                <span className="font-medium text-accent-600 dark:text-accent-500">
                  #{selectedTag}
                </span>
              </>
            )}
            {query && (
              <>
                {" "}
                matching{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  "{query}"
                </span>
              </>
            )}
          </p>
          <button
            onClick={() => {
              setQuery("");
              setSelectedTag(null);
            }}
            className="font-medium text-accent-600 hover:underline dark:text-accent-500"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Results */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 px-6 py-16 text-center dark:border-gray-800">
          <p className="mb-2 font-serif text-xl font-semibold text-gray-900 dark:text-white">
            No articles found
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Try a different search term or clear the filters.
          </p>
        </div>
      ) : (
        <ul className="space-y-12">
          {filteredPosts.map((post) => (
            <li key={post.slug}>
              <article>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="mb-2 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mb-2 font-serif text-2xl font-bold text-gray-900 transition group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-500">
                    {post.title}
                  </h2>
                  <p className="mb-3 text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>
                </Link>

                {/* Clickable tag pills below each post */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`text-xs uppercase tracking-wider transition ${
                          selectedTag === tag
                            ? "text-accent-600 dark:text-accent-500"
                            : "text-gray-500 hover:text-accent-600 dark:text-gray-500 dark:hover:text-accent-500"
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
