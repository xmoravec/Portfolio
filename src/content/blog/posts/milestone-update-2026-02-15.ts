import type { BlogPost } from "../types";

export const milestoneUpdate20260215Post: BlogPost = {
  slug: "portfolio-milestone-update-2026-02-15",
  title: "From Baseline to Milestone: Where the Portfolio Stands Now",
  date: "2026-02-15",
  readTime: "4 min read",
  summary:
    "One day after the initial snapshot, the portfolio moved into a much more stable late-stage shape: cleaner mobile UX, working contact delivery, bilingual-ready UI text, and tighter component structure.",
  tags: ["Milestone", "Product", "UX", "Dev Log"],
  blocks: [
    {
      type: "paragraph",
      text: "Yesterday’s post documented the baseline. Today’s update is different in tone: less about setup, more about confidence. The project is now in that later stage where small quality decisions matter as much as big feature decisions.",
    },
    {
      type: "paragraph",
      text: "This is still an actively evolving portfolio, but it already feels meaningfully closer to a public-ready product. The gaps are clearer, the structure is cleaner, and the next steps are less ambiguous.",
    },
    { type: "heading", text: "What changed since 14-02-2026" },
    {
      type: "list",
      items: [
        "Mobile navigation was redesigned into a proper hamburger side drawer with reliable layering and viewport behavior.",
        "Responsive layout constraints were corrected so mobile/tablet views stay full width instead of collapsing into desktop-like narrow columns.",
        "Photo gallery interactions were improved (larger cards, better modal presentation, cleaner close controls).",
        "Contact form delivery was wired through Resend and now sends real emails with a readable HTML layout plus plain-text fallback.",
        "UI copy was centralized into locale dictionaries, making the app translation-ready without forcing immediate translation work.",
        "Project detail code samples gained copy-to-clipboard support via a single parameterized code block component.",
      ],
    },
    { type: "heading", text: "A notable shift: from features to polish" },
    {
      type: "paragraph",
      text: "The work now is less about adding pages and more about making existing pages trustworthy. That includes readability on smaller screens, clean interaction states, and avoiding implementation drift from one component to another.",
    },
    {
      type: "quote",
      text: "At this stage, consistency is a feature. Every small inconsistency removed makes the whole product feel more intentional.",
    },
    { type: "heading", text: "Current quality level" },
    {
      type: "paragraph",
      text: "The portfolio now has a solid engineering baseline for shipping: routes are stable, key interactions work, content rendering is predictable, and architectural decisions are documented. It is no longer just a prototype shell.",
    },
    {
      type: "list",
      items: [
        "Navigation and page structure are coherent across devices.",
        "Contact flow is functionally complete for this phase.",
        "UI text is prepared for EN/SK split at the dictionary level.",
        "Component reuse has been tightened to reduce duplication.",
      ],
    },
    { type: "heading", text: "What remains before calling it release-ready" },
    {
      type: "list",
      items: [
        "Final content pass (tone, clarity, and stronger project storytelling).",
        "Actual bilingual content authoring (the infrastructure is ready; translations are not yet written).",
        "Deployment hardening and domain alignment.",
        "Formal Lighthouse audit and targeted fixes based on results.",
      ],
    },
    {
      type: "paragraph",
      text: "In short: this is no longer the early-stage architecture snapshot from 14-02-2026. It is now a later-stage product pass with clearer standards, better UX behavior, and fewer unknowns between development and deployment.",
    },
  ],
};
