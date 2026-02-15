import Link from "next/link";
import { Wrench } from "lucide-react";
import type { ProjectPost } from "../../content/projects/types";
import { CodeBlock } from "./code-block";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function formatDate(dateValue: string) {
  return dateFormatter.format(new Date(`${dateValue}T00:00:00`));
}

type ProjectPostCardProps = {
  project: ProjectPost;
  compact?: boolean;
  openProjectDetailLabel?: string;
  badgeLabel?: string;
};

export function ProjectPostCard({
  project,
  compact = false,
  openProjectDetailLabel = "Open project detail",
  badgeLabel = "Project",
}: ProjectPostCardProps) {
  return (
    <article className="section-card space-y-4">
      <div className="space-y-2">
        <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
          <Wrench className="h-3.5 w-3.5" aria-hidden />
          {badgeLabel}
        </span>
        <p className="text-xs text-zinc-500">
          {formatDate(project.date)} · {project.readTime}
        </p>
        <h2 className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-zinc-900`}>
          <Link href={`/projects/${project.slug}`} className="transition hover:text-zinc-700 hover:underline">
            {project.title}
          </Link>
        </h2>
        <p className="text-sm text-zinc-600">{project.subtitle}</p>
      </div>

      <CodeBlock code={project.previewCode} title="preview.ts" language="typescript" compact />

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
