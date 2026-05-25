// app/about/page.js
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — ${siteConfig.role} with 7+ years of experience building Salesforce solutions.`,
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: `Learn more about ${siteConfig.name} — ${siteConfig.role}.`,
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        About me
      </h1>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        {siteConfig.bio}
      </p>

      <section className="mb-16 prose prose-lg dark:prose-invert">
        <h2>My journey</h2>
        <p>
          I started out at Infosys in 2018 building order management
          integrations in Apex and Java, then leaned fully into the Salesforce
          platform — shipping 2GP managed packages at Manras, customizing
          Financial Services Cloud at Deloitte, and now architecting
          large-scale Service Cloud and data systems at Intuit.
        </p>
        <p>
          Today, my work sits at the intersection of Salesforce and
          event-driven data infrastructure — Kafka, Flink, AWS, and Databricks
          pipelines moving tens of millions of records a day. The best
          implementations require deep empathy for users, rigorous
          architectural thinking, and clean code.
        </p>
        <p>
          When I'm not building, I write articles to share what I've learned —
          mostly about Apex patterns, Lightning Web Components, and integration
          architecture. I believe the best way to deepen knowledge is to teach
          it.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900 dark:text-white">
          Experience
        </h2>
        <ol className="space-y-8">
          {siteConfig.experience.map((job, idx) => (
            <li
              key={idx}
              className="border-l-2 border-gray-200 pl-6 dark:border-gray-800"
            >
              <p className="mb-1 text-sm uppercase tracking-wider text-gray-500 dark:text-gray-500">
                {job.period}
              </p>
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                {job.role}
              </h3>
              <p className="mb-2 text-accent-600 dark:text-accent-500">
                {job.company}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {job.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900 dark:text-white">
          Let's connect
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          I'm always open to interesting conversations — whether about a
          Salesforce challenge you're tackling, a project you're working on, or
          just to say hi. Reach out via{" "}
          <a
            href={siteConfig.social.email}
            className="font-medium text-accent-600 underline dark:text-accent-500"
          >
            email
          </a>{" "}
          or{" "}
          <a
            href={siteConfig.social.linkedin}
            className="font-medium text-accent-600 underline dark:text-accent-500"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}
