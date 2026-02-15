import type { ProjectPost } from "./types";

export const portfolioProjectPost: ProjectPost = {
  slug: "personal-portfolio-platform",
  title: "Personal Portfolio Platform",
  subtitle:
    "A static-first personal product with typed content, reusable UI systems, and production-minded delivery flow.",
  date: "2026-02-15",
  readTime: "6 min read",
  summary:
    "This project is my main engineering surface: a portfolio and technical notebook built to stay maintainable while still shipping polished UI and real product behavior.",
  tags: ["Next.js", "React", "TypeScript", "Server Actions", "Tailwind", "Architecture"],
  previewCode: `const contactWays = contactWayValues.map((channel) => ({
  ...channel,
  label: contactChannelLabels[channel.key],
}));

const feedback = getFeedback(ui.contact.feedback, status, code);

return (
  <section className="space-y-4">
    <h2 className="section-title">{ui.contact.channelsTitle}</h2>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {contactWays.map((item) => (
        <a key={item.key} href={item.href} target="_blank" rel="noopener noreferrer">
          <item.icon className="h-4 w-4" aria-hidden />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  </section>
);`,
  goals: [
    "Keep the stack lean and understandable so development remains fast without hidden operational complexity.",
    "Build reusable page and component patterns that support both product storytelling and technical deep-dives.",
    "Ship release-ready behavior (forms, metadata, navigation, accessibility, and responsive UX) instead of only static visuals.",
  ],
  architecture: [
    "Next.js App Router with server-first pages, route-level metadata, and static generation for project/blog slugs.",
    "Typed content modules for projects/blog/home copy to keep authoring close to rendering logic and prevent schema drift.",
    "A reusable design layer with Tailwind primitives, shared cards, and a unified code block surface powered by react-syntax-highlighter.",
    "Server actions for contact delivery using Resend, with validation, anti-spam checks, and deterministic redirect outcomes.",
    "Dependency choices prioritize readability and ecosystem fit: Next.js, React, TypeScript, Tailwind, lucide-react, and react-syntax-highlighter.",
  ],
  shippedFeatures: [
    "Unified slug-based project and blog routes with canonical metadata and legacy query-route redirect compatibility.",
    "A configurable code presentation component that supports compact previews, detailed examples, line numbers, and optional copy-to-clipboard.",
    "Contact workflow with honeypot/timing/link heuristics, user-facing feedback states, and optional Resend delivery fallback behavior.",
    "Mobile-first interaction layer: drawer navigation, horizontal photo rail, modal viewer, and reduced-motion-aware transitions.",
    "Icon refactor from inline SVG paths to lucide-react components for readability and maintainability.",
  ],
  currentFocus: [
    "Content pass: rewrite and personalize all copy with stronger outcomes, clearer project narrative, and better contextual screenshots/snippets.",
    "Pre-release hardening: final accessibility/SEO/performance checks and deployment configuration validation.",
    "Translation rollout: complete EN/SK divergence from shared placeholders once content quality pass is done.",
  ],
  codeSamples: [
    {
      title: "contact-action-guardrails.ts",
      code: `export async function submitContactForm(formData: FormData) {
  const name = toSafeText(formData.get("name"));
  const email = toSafeText(formData.get("email")).toLowerCase();
  const message = toSafeText(formData.get("message"));
  const company = toSafeText(formData.get("company"));
  const formStartedAt = Number.parseInt(toSafeText(formData.get("formStartedAt")), 10);

  const isTooFast = Number.isFinite(formStartedAt) && formStartedAt > 0 && Date.now() - formStartedAt < 1500;
  const hasSuspiciousLink = URL_PATTERN.test(message) && message.length < 40;

  if (company || isTooFast || hasSuspiciousLink) {
    redirect("/contact?status=error&code=spam");
  }

  if (!name || !EMAIL_PATTERN.test(email)) {
    redirect("/contact?status=error&code=email");
  }

  if (message.length < 10 || message.length > 3000) {
    redirect("/contact?status=error&code=message");
  }
}`,
    },
    {
      title: "reusable-code-block-surface.tsx",
      code: `export function CodeBlock({
  code,
  title,
  language = "typescript",
  compact = false,
  showLineNumbers = true,
  wrapLongLines = false,
  enableCopy = false,
}: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
        <p className="text-xs text-zinc-400">{title ?? "typescript"}</p>
        {enableCopy ? <CopyButton code={code} /> : null}
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers={showLineNumbers}
        wrapLongLines={wrapLongLines}
        customStyle={{
          margin: 0,
          background: "transparent",
          fontSize: compact ? "0.75rem" : "0.875rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}`,
    },
  ],
};
