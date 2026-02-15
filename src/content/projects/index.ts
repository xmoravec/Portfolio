import type { ProjectPost } from "./types";
import { acquamareaProjectPost } from "./acquamarea-project";
import { portfolioProjectPost } from "./portfolio-project";
import { universityEngineeringLabsProjectPost } from "./university-engineering-labs-project";

export const projectPosts: ProjectPost[] = [
  universityEngineeringLabsProjectPost,
  acquamareaProjectPost,
  portfolioProjectPost,
].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getProjectPostBySlug(slug: string): ProjectPost | undefined {
  return projectPosts.find((project) => project.slug === slug);
}
