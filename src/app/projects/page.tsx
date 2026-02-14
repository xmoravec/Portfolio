import Link from "next/link";

const projectCards = [
  {
    title: "Personal Portfolio",
    status: "Live",
    summary:
      "A static-first personal website focused on performance, storytelling, and simple maintenance.",
    highlights: ["App Router", "Tailwind v4", "Locale-ready content model"],
    stackNotes: [
      "Next.js keeps routing and rendering predictable.",
      "Tailwind makes layout iteration fast without extra CSS overhead.",
      "A locale-ready content layer keeps bilingual expansion simple.",
    ],
  },
  {
    title: "Realtime Session Notes",
    status: "Prototype",
    summary:
      "An experiment for capturing team decisions in real time with structured context blocks.",
    highlights: ["WebSocket events", "Optimistic UI", "Conflict-safe merges"],
    stackNotes: [
      "WebSocket events keep collaboration immediate.",
      "Optimistic UI improves feedback speed.",
      "Merge-safe conflict handling protects shared notes.",
    ],
  },
  {
    title: "Developer Workflow Toolkit",
    status: "Case Study",
    summary:
      "Scripts and patterns that reduce repetitive setup and keep delivery consistent.",
    highlights: ["Automated checks", "Release checklist", "Portable scripts"],
    stackNotes: [
      "Automation catches errors before release.",
      "A checklist makes handoffs reliable.",
      "Portable scripts reduce environment-specific surprises.",
    ],
  },
];

const codeSpotlight = `export function summarizeOutcome(inputs: string[]) {
  const cleaned = inputs.map((item) => item.trim()).filter(Boolean);
  return cleaned.length === 0 ? "No updates yet" : cleaned.join(" · ");
}`;

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="space-y-4">
        <span className="pill">Projects</span>
        <h1 className="section-title text-4xl sm:text-5xl">Selected Work</h1>
        <p className="muted-text max-w-2xl">
          A focused list of projects with practical outcomes. Full case studies will be expanded over time.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {projectCards.map((project) => (
          <article key={project.title} className="section-card space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-zinc-900">{project.title}</h2>
              <span className="pill">{project.status}</span>
            </div>
            <p className="muted-text">{project.summary}</p>
            <ul className="flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <li key={item} className="pill">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-1 border-t border-zinc-100 pt-2 text-sm text-zinc-600">
              {project.stackNotes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-card space-y-4">
        <h2 className="section-title">Code Spotlight</h2>
        <p className="muted-text">
          A small example of the style I prefer: readable names, simple flow, and explicit behavior.
        </p>
        <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-800">
          <code>{codeSpotlight}</code>
        </pre>
      </section>

      <section className="section-card space-y-3">
        <h2 className="section-title">Keep exploring</h2>
        <p className="muted-text">For personal updates and current focus, open the About page.</p>
        <Link href="/about" className="button-secondary">
          Open About
        </Link>
      </section>
    </main>
  );
}
