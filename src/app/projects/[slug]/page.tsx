import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Wrench } from "lucide-react";
import { getUiText } from "../../i18n";
import { getRequestLocale } from "../../i18n/locale.server";
import { CodeBlock } from "../../components/code-block";
import { getProjectPostBySlug, projectPosts } from "../../../content/projects";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectPosts.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const locale = await getRequestLocale();
  const ui = getUiText(locale);
  const { slug } = await params;
  const project = getProjectPostBySlug(slug);

  if (!project) {
    return {
      title: ui.metadata.projectNotFoundTitle,
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = `/projects/${project.slug}`;

  return {
    title: `${project.title} | Erik Moravec`,
    description: project.summary,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: canonicalPath,
      type: "article",
      publishedTime: project.date,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const locale = await getRequestLocale();
  const ui = getUiText(locale);
  const { slug } = await params;
  const project = getProjectPostBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell motion-shell">
      <article className="section-card space-y-8">
        <header className="space-y-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 transition hover:bg-amber-100"
          >
            <Wrench className="h-3.5 w-3.5" aria-hidden />
            {ui.projects.badgeLabel}
          </Link>
          <h1 className="section-title text-3xl sm:text-4xl">{project.title}</h1>
          <p className="text-sm text-zinc-500">
            {dateFormatter.format(new Date(`${project.date}T00:00:00`))} · {project.readTime}
          </p>
          <p className="muted-text text-base text-zinc-700">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">{ui.projects.intentTitle}</h2>
          <p className="muted-text text-base">
            {project.summary}
            {project.externalReference ? (
              <>
                {" "}
                {ui.projects.publicReferenceLabel}:{" "}
                <a
                  href={project.externalReference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 underline"
                >
                  {project.externalReference.label}
                </a>
                .
              </>
            ) : null}
          </p>
          <ul className="space-y-2">
            {project.goals.map((goal) => (
              <li key={goal} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
                <span className="muted-text text-base text-zinc-700">{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="text-lg font-semibold text-zinc-900">{ui.projects.architectureTitle}</h3>
            <ul className="mt-3 space-y-2">
              {project.architecture.map((item) => (
                <li key={item} className="text-sm leading-6 text-zinc-700">
                  • {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="text-lg font-semibold text-zinc-900">{ui.projects.shippedTitle}</h3>
            <ul className="mt-3 space-y-2">
              {project.shippedFeatures.map((item) => (
                <li key={item} className="text-sm leading-6 text-zinc-700">
                  • {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">{ui.projects.implementationTitle}</h2>
          <p className="muted-text text-base">{ui.projects.implementationDescription}</p>
          <div className="space-y-4">
            {project.codeSamples.map((sample) => (
              <CodeBlock
                key={sample.title}
                title={sample.title}
                code={sample.code}
                enableCopy
                copyLabel={ui.projects.copyCode}
                copiedLabel={ui.projects.copiedCode}
              />
            ))}
          </div>
        </section>

        <section className="space-y-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h2 className="text-xl font-semibold text-zinc-900">{ui.projects.focusTitle}</h2>
          <ul className="space-y-2">
            {project.currentFocus.map((item) => (
              <li key={item} className="text-sm leading-6 text-zinc-700">
                • {item}
              </li>
            ))}
          </ul>
        </section>

        <footer className="flex items-center gap-3 pt-4">
          <Link href="/projects" className="button-secondary w-full justify-center px-5 py-2.5 text-base sm:w-auto">
            {ui.projects.backToProjects}
          </Link>
        </footer>
      </article>
    </main>
  );
}
