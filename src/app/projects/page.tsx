import { ProjectPostCard } from "../components/project-post-card";
import { getUiText } from "../i18n";
import { getRequestLocale } from "../i18n/locale.server";
import { projectPosts } from "../../content/projects";

export default async function ProjectsPage() {
  const locale = await getRequestLocale();
  const ui = getUiText(locale);

  return (
    <main className="page-shell motion-shell">
      <section className="space-y-4">
        <h1 className="section-title text-3xl sm:text-5xl">{ui.projects.pageTitle}</h1>
        <p className="muted-text max-w-2xl">
          {ui.projects.pageDescription}
        </p>
      </section>

      <section className="space-y-4">
        {projectPosts.map((project) => (
          <ProjectPostCard
            key={project.slug}
            project={project}
            openProjectDetailLabel={ui.projects.openProjectDetail}
            badgeLabel={ui.projects.badgeLabel}
          />
        ))}
      </section>
    </main>
  );
}
