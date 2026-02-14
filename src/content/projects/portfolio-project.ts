import type { ProjectPost } from "./types";

export const portfolioProjectPost: ProjectPost = {
  slug: "personal-portfolio-platform",
  title: "Personal Portfolio Platform",
  subtitle:
    "Static-first product surface with dynamic writing routes, serverless contact pipeline, and iterative UX delivery.",
  date: "2026-02-14",
  readTime: "3 min read",
  summary:
    "A technical project profile of this portfolio: architecture model, rendering strategy, and practical product engineering decisions.",
  tags: ["Next.js", "Architecture", "Server Actions", "Frontend Systems"],
  previewCode: `export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectPostBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | Erik Moravec",
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = \`/projects/\${project.slug}\`;

  return {
    title: \`\${project.title} | Erik Moravec\`,
    description: project.summary,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: canonicalPath,
      type: "article",
    },
  };
}`,
  goals: [
    "Keep content publishing simple without introducing CMS complexity too early.",
    "Ship a polished portfolio surface while preserving fast iteration speed.",
    "Build reusable patterns for routing, rendering, and serverless integrations.",
  ],
  architecture: [
    "Next.js App Router with route-level pages and shared global shell.",
    "Typed content modules for blog and projects, keeping data close to code.",
    "Server actions for form handling to avoid client-side API wiring overhead.",
    "Static-first rendering with selective dynamic behavior where meaningful.",
  ],
  shippedFeatures: [
    "Dynamic blog route (/blog/[slug]) with canonical metadata and legacy redirect support.",
    "Reusable code-render surface with syntax-colored snippets and line numbers.",
    "Contact submission pipeline with validation, anti-spam checks, and optional Resend delivery.",
    "Subtle motion layer with reduced-motion compliance and preserved hover interactions.",
  ],
  currentFocus: [
    "Final production hardening for the contact pipeline and delivery observability.",
    "Continue replacing placeholder content with high-signal technical narratives.",
    "Incrementally improve conversion-oriented UX while preserving simplicity.",
  ],
  codeSamples: [
    {
      title: "server-action-validation.ts",
      code: `export async function submitContactForm(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const message = String(formData.get("message") ?? "").trim();

  if (!EMAIL_PATTERN.test(email)) {
    redirect("/contact?status=error&code=email");
  }

  if (message.length < 10 || message.length > 3000) {
    redirect("/contact?status=error&code=message");
  }
}`,
    },
    {
      title: "dynamic-route-indexing.ts",
      code: `export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug((await params).slug);
  return {
    title: post ? \`\${post.title} | Erik Moravec\` : "Post not found",
    alternates: post ? { canonical: \`/blog/\${post.slug}\` } : undefined,
  };
}`,
    },
  ],
};
