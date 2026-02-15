import type { ProjectPost } from "./types";
import { portfolioProjectPost } from "./portfolio-project";

export const projectPosts: ProjectPost[] = [portfolioProjectPost].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getProjectPostBySlug(slug: string): ProjectPost | undefined {
  return projectPosts.find((project) => project.slug === slug);
}
