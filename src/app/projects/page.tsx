import { ProjectPostCard } from "../components/project-post-card";
import { defaultLocale } from "../content";
import { getUiText } from "../i18n/ui-text";
import { projectPosts } from "../../content/projects";

export default function ProjectsPage() {
  const ui = getUiText(defaultLocale);

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
          <ProjectPostCard key={project.slug} project={project} openProjectDetailLabel={ui.projects.openProjectDetail} />
        ))}
      </section>
    </main>
  );
}
