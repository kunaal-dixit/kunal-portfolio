// app/projects/page.js
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Projects",
  description: `Selected work and Salesforce projects by ${siteConfig.name}.`,
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: `Selected work and projects by ${siteConfig.name}.`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        Projects
      </h1>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        A selection of Salesforce implementations, integrations, and side
        projects I've built or led over the years.
      </p>

      <div className="space-y-10">
        {siteConfig.projects.map((project) => (
          <article
            key={project.title}
            className="border-b border-gray-100 pb-10 dark:border-gray-900"
          >
            <h2 className="mb-3 font-serif text-2xl font-bold text-gray-900 dark:text-white">
              {project.link && project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent-600 dark:hover:text-accent-500"
                >
                  {project.title}
                  <ArrowUpRight size={18} />
                </a>
              ) : (
                project.title
              )}
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 dark:border-gray-800 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
