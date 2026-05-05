# CLAUDE.md

> This file gives AI coding assistants (Claude Code, Cursor, GitHub Copilot, etc.) the context they need to help with this project effectively. Keep it updated as the project evolves.

---

## 🎯 Project Overview

**What this is:** A personal portfolio + blog website for a Senior Salesforce Engineer with 7+ years of experience.

**Goals:**
- Showcase Salesforce expertise (Apex, LWC, integrations, architecture)
- Publish technical articles for the Salesforce/dev community
- Maximum SEO discoverability — articles should rank well on Google
- Fast, accessible, and minimal cost to run

**Audience:**
- Recruiters and hiring managers evaluating Salesforce talent
- Fellow Salesforce developers searching for technical solutions
- Potential consulting clients

**Non-goals:**
- This is NOT a SaaS product, e-commerce site, or multi-user app
- No user accounts, no comments system, no backend database
- No CMS — content is managed via files in Git

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 14+ |
| Language | JavaScript (NOT TypeScript) | ES2022 |
| Styling | Tailwind CSS | 3.x |
| Content | MDX (Markdown + JSX) | via `next-mdx-remote` |
| Theme | Light/Dark mode | via `next-themes` |
| Icons | Lucide React | latest |
| Hosting | Vercel | free tier |
| Repository | GitHub | — |

### Key dependencies & why
- `next-mdx-remote` — renders MDX blog posts as React components
- `gray-matter` — parses YAML frontmatter from `.mdx` files
- `reading-time` — calculates reading time per post ("5 min read")
- `date-fns` — date formatting (avoid Moment.js, it's deprecated)
- `next-themes` — handles dark/light mode with system preference + persistence
- `rehype-pretty-code` + `shiki` — syntax highlighting for code blocks (Apex, JS, etc.)
- `@tailwindcss/typography` — provides `prose` class for blog post styling
- `rss` — generates `/feed.xml` for RSS subscribers
- `lucide-react` — icon library (lightweight, tree-shakeable)

---

## 📁 Project Structure

```
your-portfolio/
├── app/                          # Next.js 14 App Router pages
│   ├── layout.js                 # Root layout (wraps every page)
│   ├── page.js                   # Homepage
│   ├── globals.css               # Global styles + font imports
│   ├── sitemap.js                # Auto-generates /sitemap.xml
│   ├── robots.js                 # Auto-generates /robots.txt
│   ├── about/page.js             # About page
│   ├── projects/page.js          # Projects/portfolio page
│   ├── contact/page.js           # Contact page
│   ├── blog/
│   │   ├── page.js               # Blog index (list of all posts)
│   │   └── [slug]/page.js        # Individual blog post (dynamic route)
│   └── feed.xml/route.js         # RSS feed endpoint
│
├── components/                   # Reusable React components
│   ├── Navbar.js                 # Top navigation
│   ├── Footer.js                 # Site footer
│   ├── ThemeProvider.js          # Wraps app for dark mode (client)
│   ├── ThemeToggle.js            # Sun/moon button (client)
│   ├── BlogSearch.js             # Search + tag filter (client)
│   └── MDXComponents.js          # Custom components for MDX posts
│
├── content/
│   └── blog/                     # Blog posts as .mdx files
│       └── *.mdx
│
├── lib/                          # Utility/helper code
│   ├── siteConfig.js             # ⭐ Central config — name, links, etc.
│   └── posts.js                  # Reads & parses .mdx files
│
├── public/                       # Static assets (images, favicons, etc.)
│   ├── favicon.ico
│   ├── og-image.png              # 1200x630 social preview image
│   └── ...
│
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🧠 Architectural Decisions

### Server vs. Client Components
This project uses **Next.js 14 App Router**, which defaults to **Server Components**. Key rules:

- **Server Components (default):** Used for all static pages, data fetching, SEO metadata. Cannot use `useState`, `useEffect`, browser APIs, or event handlers.
- **Client Components:** Marked with `"use client"` at the top of the file. Used ONLY when interactivity is needed (theme toggle, search input, etc.).

**Components currently using `"use client"`:**
- `ThemeProvider.js` — wraps next-themes
- `ThemeToggle.js` — handles button click
- `BlogSearch.js` — manages search state and filtering

**Rule of thumb:** Make it a server component first. Only add `"use client"` if you genuinely need state or browser APIs.

### Why MDX (not a CMS)?
- **Free** — no monthly subscription
- **Version-controlled** — every post is in Git history
- **Fast** — pre-rendered to static HTML at build time
- **Flexible** — can embed React components inside articles
- **Developer-friendly** — write in any code editor with Markdown extensions

### Why JavaScript (not TypeScript)?
The owner is primarily a Salesforce engineer (Apex), not a daily JS/TS developer. Skipping TypeScript reduces friction for shipping. Can be migrated later if desired.

### Why Tailwind?
- No CSS naming overhead
- Tiny final bundle (purges unused classes)
- Excellent for dark mode (`dark:` prefix)
- Fast to iterate on design

### SEO Strategy
1. **Static generation** — every page is pre-rendered as HTML at build time
2. **Per-page metadata** — every page exports a `metadata` object (Next.js handles `<head>`)
3. **Structured data** — blog posts emit JSON-LD as `BlogPosting` schema
4. **Auto sitemap & robots** — generated from `app/sitemap.js` and `app/robots.js`
5. **Open Graph + Twitter cards** — social previews on all pages
6. **RSS feed** — `/feed.xml` for syndication
7. **Canonical URLs** — set on every page to prevent duplicate content

---

## 📝 Content Conventions

### Blog post frontmatter (REQUIRED)

Every `.mdx` file in `content/blog/` MUST have this frontmatter:

```yaml
---
title: "Post Title Here"                              # required, plain string
description: "1-2 sentence summary for SEO/preview"   # required, ~150 chars
date: "2026-05-01"                                    # required, ISO format
tags: ["Salesforce", "Apex"]                          # required, array of strings
author: "Your Name"                                   # optional, defaults to siteConfig
image: "/blog-images/foo.png"                         # optional, for social preview
---
```

### Blog post writing conventions
- Use `## H2` for major sections (NOT `# H1` — the title is already an H1)
- Use `### H3` for subsections
- Use fenced code blocks with language hints: ```` ```apex ```` for Apex, ```` ```javascript ```` for JS, etc.
- Aim for 800-2500 words per article (sweet spot for SEO)
- First paragraph after the title should hook the reader and summarize what they'll learn
- End with a CTA (share, comment via email, link to related article)

### Custom MDX components available
Inside any `.mdx` file, these custom components are auto-imported (see `components/MDXComponents.js`):

```mdx
<Callout type="info">Useful information</Callout>
<Callout type="warning">A warning</Callout>
<Callout type="tip">A tip</Callout>
```

---

## 🎨 Design System

### Typography
- **Headings:** Fraunces (serif, distinctive)
- **Body:** Inter (sans, highly readable)
- **Code:** JetBrains Mono (monospace, dev-friendly)

Defined as CSS variables in `app/globals.css`. Don't hardcode font names in components — use `font-sans`, `font-serif`, `font-mono` Tailwind classes.

### Color Palette
- **Background:** white / gray-950 (dark)
- **Text:** gray-800 / gray-200 (dark)
- **Accent:** sky-blue scale (`accent-500` etc.) — defined in `tailwind.config.js`
- **Borders:** gray-100 / gray-900 (dark)

### Layout
- Max content width: `max-w-3xl` (768px) for reading comfort
- Page padding: `px-6 py-16 sm:py-24`
- Sticky navbar with backdrop blur

### Tone
**Modern editorial minimalism.** Inspired by Lee Robinson, Josh Comeau, Brian Lovin. Generous whitespace, distinctive serif headlines, subtle accent color, no cluttered UI.

**AVOID:**
- Purple gradients on white (cliché AI aesthetic)
- Glassmorphism overload
- Excessive animations
- Generic "developer portfolio template" look

---

## 🔧 Common Tasks

### Add a new blog post
1. Create `content/blog/my-post-slug.mdx`
2. Add frontmatter (see template above)
3. Write content in Markdown + JSX
4. Test locally: `npm run dev` → visit `http://localhost:3000/blog/my-post-slug`
5. Commit and push — Vercel auto-deploys

### Update personal info (name, bio, links)
**Edit `lib/siteConfig.js` ONLY.** Every page reads from this file. Do NOT hardcode personal details in components or pages.

### Add a new page (e.g., `/uses`)
1. Create `app/uses/page.js`
2. Export a default React component
3. Export a `metadata` object for SEO:
   ```js
   export const metadata = {
     title: "Uses",
     description: "...",
   };
   ```
4. Add a link in `components/Navbar.js` if it should appear in the nav
5. The sitemap auto-updates — if not, add it to `app/sitemap.js`

### Change colors
Edit `tailwind.config.js` → `theme.extend.colors.accent` for the accent palette.

### Change fonts
Edit `app/globals.css` — update the Google Fonts import URL and the `--font-sans` / `--font-serif` / `--font-mono` CSS variables.

### Add an image to a blog post
Place it in `public/blog-images/` and reference it as `/blog-images/filename.png` in MDX. Use the `<img>` tag (which is auto-replaced with Next.js `<Image>` via `MDXComponents.js`).

---

## 🚦 Development Workflow

### Run locally
```bash
npm run dev          # Starts dev server at http://localhost:3000
npm run build        # Production build (do this before deploying)
npm run start        # Run production build locally
npm run lint         # Run ESLint
```

### Deploy
Just push to `main`. Vercel auto-builds and deploys in ~60 seconds.

```bash
git add .
git commit -m "your message"
git push
```

### Branch strategy
- `main` — production, auto-deploys to live site
- For experimental work, create feature branches; Vercel gives each branch a preview URL

---

## ⚠️ Critical Rules for AI Assistants

When helping with this project, please:

1. **Don't suggest TypeScript migrations** unless explicitly asked. The owner chose JS deliberately.
2. **Don't add a CMS** (Contentful, Sanity, etc.) unless explicitly asked — MDX is the chosen approach.
3. **Don't add a database or backend** — this is a static site. No Prisma, no Supabase, no auth systems.
4. **Always check `lib/siteConfig.js` first** before hardcoding any personal info.
5. **Default to Server Components.** Only add `"use client"` when state, effects, or event handlers are genuinely needed.
6. **Preserve SEO.** When changing pages, ensure `metadata` exports remain. When changing routes, ensure sitemap still works.
7. **Match the design language.** Don't introduce new fonts, color schemes, or wildly different component styles without discussion. Stay in the modern minimal lane.
8. **Keep dependencies lean.** Before suggesting a new npm package, check if vanilla code or an existing dep can do the job.
9. **Don't break dark mode.** Every new component must work in both light and dark modes (use `dark:` Tailwind variants).
10. **Don't touch the build pipeline** (next.config.js, tailwind.config.js) without a clear reason — these are tuned.

### When the owner says...
| They mean | Translation |
|-----------|-------------|
| "Add a new section to the homepage" | Edit `app/page.js` |
| "Add a new blog post about X" | Create new file in `content/blog/` |
| "Update my bio" | Edit `lib/siteConfig.js` |
| "Change the theme color" | Edit `tailwind.config.js` → accent palette |
| "Add a new page" | Create new folder under `app/` with `page.js` |
| "Make the site faster" | Check `npm run build` output, look for image optimization opportunities, review `next/image` usage |

---

## 🎓 Salesforce Context

The owner is a **Senior Salesforce Engineer**. When they ask for help with content, code examples in blog posts, or technical articles, lean into Salesforce-specific patterns:

- **Apex:** triggers, batch jobs, queueable, future methods, governor limits, SOQL/SOSL, test classes
- **LWC:** Lightning Web Components, `@wire` decorators, `@api`, parent-child communication, custom events
- **Flows:** Record-Triggered, Screen Flows, Subflows, Apex-invocable
- **Integrations:** REST/SOAP APIs, Platform Events, Change Data Capture, Named Credentials, External Services
- **Salesforce DX:** scratch orgs, source-driven development, sfdx CLI, unlocked packages

When generating sample blog post content, prefer real-world Salesforce scenarios over generic JavaScript examples.

---

## 🐛 Known Issues / Gotchas

- **Next.js 14 caching:** If MDX content changes don't appear, restart dev server. The file system cache can be stale.
- **`next-themes` flash:** The first page load may briefly show light mode before applying user's preference. The `suppressHydrationWarning` in `app/layout.js` <html> tag mitigates the React warning.
- **Vercel build & MDX:** If a build fails after adding a post, check frontmatter YAML — a missing quote or wrong date format is the usual cause.
- **Sitemap caching:** After adding posts, Google takes 1-7 days to re-crawl. Submit URL manually via Search Console for faster indexing.
- **`@/` import alias:** Requires `jsconfig.json` at project root with `"baseUrl": "."` and `"paths": { "@/*": ["./*"] }`. `create-next-app` adds this by default.

---

## 📚 Useful Links

- **Next.js docs:** https://nextjs.org/docs
- **Tailwind docs:** https://tailwindcss.com/docs
- **MDX docs:** https://mdxjs.com/
- **next-mdx-remote:** https://github.com/hashicorp/next-mdx-remote
- **next-themes:** https://github.com/pacocoursey/next-themes
- **Vercel deployment:** https://vercel.com/docs

---

## 📋 Roadmap / Wishlist

Things that might get added later (but aren't in scope yet):

- [ ] Newsletter signup (ConvertKit or Buttondown)
- [ ] Related articles at the bottom of each blog post
- [ ] Featured/pinned posts on blog index
- [ ] Pagefind for full-text search across article bodies (when content grows)
- [ ] View counts (privacy-friendly via Plausible or Umami)
- [ ] Webmentions for blog posts
- [ ] `/uses` page (gear, software, setup)
- [ ] `/now` page (what I'm working on currently)
- [ ] OG image auto-generation per post (using `@vercel/og`)
- [ ] Light scroll animations using Framer Motion (only if performant)

If asked about any of these, the AI should help implement, but **wait for an explicit request** — don't add proactively.

---

**Last updated:** May 2026
**Maintained by:** [Your Name]