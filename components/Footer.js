// components/Footer.js
import Link from "next/link";
import { Mail, Rss } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-10 dark:border-gray-900 dark:bg-gray-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js &
          deployed on Vercel.
        </p>

        <div className="flex items-center gap-4 text-gray-500">
          <a
            href={siteConfig.social.github}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={siteConfig.social.email}
            aria-label="Email"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <Mail size={18} />
          </a>
          <Link
            href="/feed.xml"
            aria-label="RSS Feed"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <Rss size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
