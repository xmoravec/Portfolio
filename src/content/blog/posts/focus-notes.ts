import type { BlogPost } from "../types";

export const focusNotesPost: BlogPost = {
  slug: "notes-on-better-focus",
  title: "Notes on Better Focus",
  date: "2026-01-30",
  readTime: "5 min read",
  summary: "Simple constraints I use to reduce context switching and maintain quality.",
  tags: ["Workflow", "Productivity"],
  blocks: [
    {
      type: "paragraph",
      text: "I group similar tasks and avoid mixing visual design, architecture, and deployment checks in the same session.",
    },
    {
      type: "paragraph",
      text: "A visible task limit helps me finish what is in progress before opening new experiments.",
    },
    {
      type: "paragraph",
      text: "When blocked, I switch briefly to writing a design note, then return with clearer intent.",
    },
  ],
};
