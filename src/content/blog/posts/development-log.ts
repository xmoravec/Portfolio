import type { BlogPost } from "../types";

export const developmentLogPost: BlogPost = {
  slug: "portfolio-development-log",
  title: "Portfolio Engineering Log: Current Technical Snapshot",
  date: "2026-02-14",
  readTime: "9 min read",
  summary:
    "A technical snapshot of the current Next.js portfolio: architecture, content model, shipped routes, and concrete gaps still in progress.",
  tags: ["Next.js", "Tailwind", "Architecture", "Dev Log"],
  blocks: [
    {
      type: "paragraph",
      text: "This entry captures the exact state of the portfolio codebase as of 2026-02-14. The app is in active mid-stage development: core pages are usable, content flow is stable, and several planned features are intentionally postponed.",
    },
    { type: "heading", text: "1) Stack and runtime choices" },
    {
      type: "list",
      items: [
        "Framework: Next.js 16.1.6 with App Router",
        "UI runtime: React 19.2.3 + React DOM 19.2.3",
        "Language/tooling: TypeScript (strict mode), ESLint 9 with next/core-web-vitals + next/typescript",
        "Styling: Tailwind CSS v4 via @tailwindcss/postcss",
        "Optimization: next/font (Geist + Geist Mono), next/image for photos",
        "Next config enables reactCompiler: true",
      ],
    },
    {
      type: "paragraph",
      text: "The project keeps dependencies intentionally light. There is no CMS, no database, and no external API integration yet; most content is compiled in TypeScript files for predictable static-first behavior.",
    },
    { type: "heading", text: "2) Architecture and routing" },
    {
      type: "paragraph",
      text: "The app uses a simple route-per-page layout under src/app with a global layout wrapper, sticky header navigation, and route-level page components. Main implemented routes are /, /about, /projects, /blog, /blog/post, and /contact.",
    },
    {
      type: "paragraph",
      text: "The blog detail page currently resolves content by search params (slug query string), then renders typed block nodes (heading, paragraph, quote, list, code). This keeps rendering deterministic without MDX parsing complexity.",
    },
    {
      type: "code",
      language: "ts",
      code: "type BlogBlock =\n  | { type: 'heading'; text: string }\n  | { type: 'paragraph'; text: string }\n  | { type: 'quote'; text: string }\n  | { type: 'list'; items: string[] }\n  | { type: 'code'; language: string; code: string };",
    },
    { type: "heading", text: "3) Content model and data flow" },
    {
      type: "paragraph",
      text: "Homepage content is centralized in src/app/content.ts with typed structures and locale-aware selection. The locale model exists (en/sk), but both locales currently map to the same English content object.",
    },
    {
      type: "list",
      items: [
        "Home page consumes getHomeContent(defaultLocale)",
        "Blog metadata and post blocks live in src/content/blog",
        "Posts are sorted by date in-memory",
        "No markdown pipeline yet; blog content is authored directly in TypeScript",
      ],
    },
    { type: "heading", text: "4) UX system and component strategy" },
    {
      type: "paragraph",
      text: "Styling is built around reusable class primitives in globals.css (page-shell, section-card, section-title, button-primary, button-secondary, pill). The visual language is clean card-based UI with blue accents and subtle motion.",
    },
    {
      type: "code",
      language: "ts",
      code: "const navItems = [\n  { label: 'Projects', href: '/projects' },\n  { label: 'Blog', href: '/blog' },\n  { label: 'About', href: '/about' },\n  { label: 'Contact', href: '/contact' },\n];",
    },
    {
      type: "paragraph",
      text: "The one interactive client component is PhotoGallery (modal-style expanded image view, escape key handling, click-outside close). Most other routes remain server-rendered components with static content.",
    },
    { type: "heading", text: "5) What is complete vs under construction" },
    {
      type: "list",
      items: [
        "Complete: global layout/nav, homepage sections, about page, projects page, blog list/detail flow, and contact UI",
        "Complete: typed blog block renderer including code and quote blocks",
        "Partial: i18n structure exists, but localized content is not separated yet",
        "Partial: photo modal works, full slideshow behavior is still planned",
        "Not implemented: contact form backend (currently UI-only with action='#')",
        "Not implemented: dedicated /now and /technologies pages (folders exist but are empty)",
      ],
    },
    { type: "heading", text: "6) Intent and next engineering steps" },
    {
      type: "paragraph",
      text: "The current direction is static-first, maintainable, and intentionally low-ops: ship clean UX and clear writing first, then add selective dynamic pieces only where they provide obvious value.",
    },
    {
      type: "list",
      items: [
        "Wire contact form through a server action or API route with validation + spam protection",
        "Either add a dedicated dynamic segment route (/blog/[slug]) or keep query-based routing and harden link consistency",
        "Split en/sk content sources and introduce language switch behavior",
        "Decide whether long-form writing should remain TypeScript blocks or migrate to MDX",
        "Add deployment and performance checks (build, lint, lighthouse) as repeatable release gates",
      ],
    },
  ],
};
