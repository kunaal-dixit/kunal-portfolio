// app/page.js
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* Hero */}
      <section className="mb-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-600 dark:text-accent-500">
          {siteConfig.role}
        </p>
        <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Hi, I'm {siteConfig.name.split(" ")[0]}
        </h1>
        <p className="text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-400">
          {siteConfig.bio}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Read Articles <ArrowRight size={16} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900 dark:text-white">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {siteConfig.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 dark:border-gray-800 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      {recentPosts.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
              Recent Writing
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-accent-600 hover:underline dark:text-accent-500"
            >
              All articles →
            </Link>
          </div>
          <ul className="divide-y divide-gray-100 dark:divide-gray-900">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-4 transition"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-500">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {post.description}
                    </p>
                  </div>
                  <time className="hidden whitespace-nowrap text-sm text-gray-500 sm:block dark:text-gray-500">
                    {format(new Date(post.date), "MMM yyyy")}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
