// lib/siteConfig.js
// Every page on site reads from here.

export const siteConfig = {
  // Personal info
  name: "Kunal Dixit",
  role: "Senior Software Engineer",
  tagline: "Building scalable and robust solutions for 7+ years",
  bio: "I'm a Salesforce engineer specializing in Apex, Lightning Web Components, and complex integrations. I help businesses turn their Salesforce orgs into well-oiled machines.",
  location: "Bengaluru, India",
  email: "kunaldixit@duck.com",

  // SEO defaults
  url: "https://kunaldixit.dev", 
  siteName: "Kunal Dixit — Senior Software Engineer",
  description:
    "Personal portfolio and blog of a Senior Salesforce Engineer with 7+ years of experience. Articles on Salesforce,Apex, LWC, integrations, and architecture.",
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

  // Featured projects (used on home + projects page)
  projects: [
    {
      title: "Enterprise CPQ Implementation",
      description:
        "Led end-to-end CPQ implementation for a Fortune 500 manufacturing client, reducing quote generation time by 70%.",
      tags: ["Salesforce CPQ", "Apex", "Integration"],
      link: "#", // or external URL
    },
    {
      title: "Custom Lightning Component Library",
      description:
        "Built a reusable LWC component library used across 15+ orgs, with full unit tests and Storybook docs.",
      tags: ["LWC", "Jest", "SLDS"],
      link: "#",
    },
    {
      title: "Salesforce ↔ ERP Integration Platform",
      description:
        "Designed event-driven integration handling 2M+ records/day between Salesforce and SAP using Platform Events.",
      tags: ["Platform Events", "REST API", "Apex"],
      link: "#",
    },
  ],

  // Experience (optional - used in About page)
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Intuit",
      period: "2022 — Present",
      description:
        "Lead developer on enterprise Salesforce implementations. Architected event-driven integrations and mentored a team of 5 developers.",
    },
    {
      role: "Salesforce Consultant",
      company: "Deloitte USI",
      period: "2019 — 2022",
      description:
        "Built custom Lightning components, Apex services, and Flow automations across Sales and Service Cloud.",
    },
    {
      role: "Salesforce Developer",
      company: "Manras",
      period: "2018 — 2019",
      description:
        "Started Salesforce career — earned Platform Developer I & II certifications. Worked on Visualforce, Apex triggers, and SOQL optimization.",
    },
    {
      role: "Systems Engineer",
      company: "Infosys Limited",
      period: "2018 — 2019",
      description:
        "Started Salesforce career — earned Platform Developer I & II certifications. Worked on Visualforce, Apex triggers, and SOQL optimization.",
    },
  ],
};
