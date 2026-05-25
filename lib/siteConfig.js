// lib/siteConfig.js
// Every page on site reads from here.

export const siteConfig = {
  // Personal info
  name: "Kunal Dixit",
  role: "Senior Software Engineer",
  tagline: "Building scalable and robust solutions for 7+ years",
  bio: "I'm a software engineer working at the intersection of Salesforce and event-driven data systems — Apex, LWC, and integrations on one side; Kafka, Flink, and AWS on the other. I build platforms that move tens of millions of records a day, ship managed packages and AppExchange apps, and mentor teams on clean architecture and DevOps.",
  location: "Bengaluru, India",
  email: "kunaldixit@duck.com",

  // SEO defaults
  url: "https://kunaldixit.dev", 
  siteName: "Kunal Dixit — Salesforce Engineer",
  description:
    "Personal portfolio and blog of a Senior Salesforce Engineer with 7+ years of experience. Articles on Salesforce, Apex, LWC, integrations, and architecture.",
  keywords: [
    "Salesforce Developer",
    "Apex",
    "Lightning Web Components",
    "Salesforce Architecture",
    "SOQL",
    "Salesforce Integration",
    "Kunal Dixit",
  ],

  // Social links
  social: {
    github: "https://github.com/kunaal-dixit",
    linkedin: "https://www.linkedin.com/in/kdixit1995",
    email: "mailto:kunaldixit@duck.com",
  },

  // Skills (used on home/about page)
  skills: [
    "Apex",
    "Lightning Web Components",
    "SOQL & SOSL",
    "Salesforce Flows",
    "REST/SOAP APIs",
    "Sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "Salesforce DX",
    "CI/CD",
    "JavaScript",
    "Python",
  ],

// Experience (optional - used in About page)
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Intuit",
      period: "Aug 2025 — Present",
      description:
        "Architecting high-throughput data pipelines (~28M TPS/day) with Kafka, Flink, and Salesforce REST/Bulk APIs. Leading large-volume data migrations (~100M records) and Databricks sync for Clean Data at Intuit.",
    },
    {
      role: "Software Engineer 2",
      company: "Intuit",
      period: "Sep 2022 — Aug 2025",
      description:
        "Built scalable Service Cloud solutions serving 100K+ users and real-time event-driven integrations using Kafka, Platform Events, CDC, and CometD. Shipped Slack–Salesforce automations with LWC, Apex, and Lightning Flows.",
    },
    {
      role: "Salesforce Consultant",
      company: "Deloitte India (USI)",
      period: "Jan 2021 — Jul 2022",
      description:
        "Delivered Financial Services Cloud and Lightning Scheduler customizations using Aura, LWC, and Apex. Built a reusable component library that cut development effort across the team.",
    },
    {
      role: "Salesforce Developer",
      company: "Manras Technologies",
      period: "Aug 2019 — Dec 2020",
      description:
        "Built 2GP managed packages and AppExchange apps for ERP. Led the team's migration to SFDX + Azure DevOps and authored internal Integration and Error Logging frameworks.",
    },
    {
      role: "Systems Engineer",
      company: "Infosys",
      period: "Jun 2018 — Aug 2019",
      description:
        "Started my Salesforce career building order management integrations with Sigma, AMDOCS, and ARIA using Apex, Visualforce, and Batch Apex. Earned Platform Developer I & II certifications.",
    },
  ],
};
