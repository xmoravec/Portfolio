import Link from "next/link";
import { ProjectPostCard } from "../components/project-post-card";
import { projectPosts } from "../../content/projects";

export default function ProjectsPage() {
  return (
    <main className="page-shell motion-shell">
      <section className="space-y-4">
        <h1 className="section-title text-4xl sm:text-5xl">Projects</h1>
        <p className="muted-text max-w-2xl">
          Real project write-ups only. Each entry opens a technical detail page with architecture notes, shipped features, and implementation examples.
        </p>
      </section>

      <section className="space-y-4">
        {projectPosts.map((project) => (
          <ProjectPostCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
