import Link from "next/link";
import type { ProjectPost } from "../../content/projects/types";
import { formatDisplayDate } from "../lib/date-format";
import { CodeBlock } from "./code-block";

type ProjectPostCardProps = {
  project: ProjectPost;
  compact?: boolean;
  openProjectDetailLabel?: string;
};

export function ProjectPostCard({ project, compact = false, openProjectDetailLabel = "Open project detail" }: ProjectPostCardProps) {
  return (
    <article className="section-card space-y-4">
      <div className="space-y-2">
        <p className="text-xs text-zinc-500">
          {formatDisplayDate(project.date)} · {project.readTime}
        </p>
        <h2 className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-zinc-900`}>
          <Link href={`/projects/${project.slug}`} className="transition hover:text-zinc-700 hover:underline">
            {project.title}
          </Link>
        </h2>
        <p className="text-sm text-zinc-600">{project.subtitle}</p>
      </div>

      <CodeBlock code={project.previewCode} title="preview.ts" compact />

      <p className="muted-text text-base">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>

      <Link href={`/projects/${project.slug}`} className="inline-block text-sm font-medium text-blue-700 hover:underline">
        {openProjectDetailLabel}
      </Link>
    </article>
  );
}
