import type { BlogPost } from "../types";

export const developmentLogPost: BlogPost = {
  slug: "portfolio-development-log",
  title: "Development Log: Building This Personal Website",
  date: "2026-02-14",
  readTime: "10 min read",
  summary:
    "A practical log of how this site evolved: architecture choices, page structure, styling iterations, and where it goes next.",
  tags: ["Next.js", "Tailwind", "Architecture", "Dev Log"],
  blocks: [
    {
      type: "paragraph",
      text: "This project started from a fresh Next.js app and evolved through incremental chunks instead of one large rewrite. The goal was to keep momentum high while still ending with a clean structure.",
    },
    { type: "heading", text: "1) Foundation and cleanup" },
    {
      type: "paragraph",
      text: "The first step removed default starter code, unused assets, and template metadata. This created a neutral base where every section had to justify its presence.",
    },
    {
      type: "list",
      items: [
        "Removed template UI and public assets",
        "Set portfolio-specific metadata",
        "Kept global styles intentionally minimal",
      ],
    },
    { type: "heading", text: "2) Content architecture first" },
    {
      type: "paragraph",
      text: "Before visual polish, content moved into structured objects so wording and information architecture could be iterated without touching layout code.",
    },
    {
      type: "quote",
      text: "A maintainable personal site is a content system first, and a visual system second.",
    },
    { type: "heading", text: "3) Personal tone and visual direction" },
    {
      type: "paragraph",
      text: "The homepage shifted from project-first to personal-first. Real photos were introduced early, with a click-to-open detail view to prepare for a future slideshow.",
    },
    {
      type: "paragraph",
      text: "A blue accent became the single color identity used across pills, buttons, and focus states while preserving readability.",
    },
    { type: "heading", text: "4) Pages and navigation" },
    {
      type: "paragraph",
      text: "The information architecture was simplified by merging related sections: technologies into projects and now into about. Navigation moved to a persistent global header.",
    },
    {
      type: "code",
      language: "ts",
      code: "const navItems = [\n  { label: 'Projects', href: '/projects' },\n  { label: 'Blog', href: '/blog' },\n  { label: 'About', href: '/about' },\n  { label: 'Contact', href: '/contact' },\n];",
    },
    { type: "heading", text: "5) What comes next" },
    {
      type: "list",
      items: [
        "Connect the contact form to a server action",
        "Add bilingual text variants (EN + SK)",
        "Turn photo detail view into a full slideshow",
        "Move posts to markdown/mdx if long-form writing grows",
      ],
    },
    {
      type: "paragraph",
      text: "The current result is intentionally simple: clear routes, reusable style primitives, and content that is easy to extend without reworking core structure.",
    },
  ],
};
