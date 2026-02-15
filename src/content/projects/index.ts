import type { ProjectPost } from "./types";
import { acquamareaProjectPost } from "./acquamarea-project";
import { portfolioProjectPost } from "./portfolio-project";

export const projectPosts: ProjectPost[] = [acquamareaProjectPost, portfolioProjectPost].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getProjectPostBySlug(slug: string): ProjectPost | undefined {
  return projectPosts.find((project) => project.slug === slug);
}
