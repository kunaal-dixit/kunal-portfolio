// app/contact/page.js
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — Salesforce engineer based in ${siteConfig.location}.`,
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name}.`,
  },
};

const channels = [
  {
    name: "Email",
    handle: siteConfig.email,
    href: siteConfig.social.email,
    icon: Mail,
    description: "Best for project inquiries and detailed conversations.",
  },
  {
    name: "LinkedIn",
    handle: "Connect with me",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
    description: "Professional network — connect & message.",
  },
  {
    name: "GitHub",
    handle: "View my code",
    href: siteConfig.social.github,
    icon: Github,
    description: "Open-source contributions and side projects.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        Get in touch
      </h1>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        Whether you have a Salesforce project in mind, want to chat about
        architecture, or just want to say hi — I'd love to hear from you.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2">
        {channels.map(({ name, handle, href, icon: Icon, description }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-gray-200 p-6 transition hover:border-accent-500 dark:border-gray-800 dark:hover:border-accent-500"
            >
              <Icon className="mb-3 text-accent-600 dark:text-accent-500" size={22} />
              <h2 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">
                {name}
              </h2>
              <p className="mb-2 text-sm text-accent-600 dark:text-accent-500">
                {handle}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
