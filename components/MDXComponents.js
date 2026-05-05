// components/MDXComponents.js
// Custom React components available inside .mdx blog posts.
// Add more here for things like callouts, image grids, video embeds, etc.

import Link from "next/link";
import Image from "next/image";

export const mdxComponents = {
  // External links open in new tab; internal links use Next.js Link
  a: ({ href = "", children, ...props }) => {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return <Link href={href}>{children}</Link>;
  },

  // Optimized images
  img: ({ src, alt, ...props }) => (
    <Image
      src={src}
      alt={alt || ""}
      width={800}
      height={500}
      className="rounded-xl"
      {...props}
    />
  ),

  // Custom callout component - usage:  <Callout type="info">Hello</Callout>
  Callout: ({ type = "info", children }) => {
    const styles = {
      info: "border-blue-500 bg-blue-50 dark:bg-blue-950/30",
      warning: "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30",
      tip: "border-green-500 bg-green-50 dark:bg-green-950/30",
    };
    return (
      <div
        className={`my-6 border-l-4 p-4 ${styles[type] || styles.info}`}
      >
        {children}
      </div>
    );
  },
};
