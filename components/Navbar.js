// components/Navbar.js
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/lib/siteConfig";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-900 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {siteConfig.name.split(" ")[0] || "Portfolio"}
        </Link>

        <div className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile nav */}
      <div className="border-t border-gray-100 sm:hidden dark:border-gray-900">
        <ul className="mx-auto flex max-w-5xl justify-around px-4 py-2 text-xs">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-600 dark:text-gray-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
