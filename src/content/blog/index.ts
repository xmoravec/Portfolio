import type { BlogPost } from "./types";
import { developmentLogPost } from "./posts/initial-development-log";
import { milestoneUpdate20260215Post } from "./posts/milestone-update-2026-02-15";
import { universityProjectsReflection20260215Post } from "./posts/university-projects-reflection-2026-02-15";

export const blogPosts: BlogPost[] = [
  universityProjectsReflection20260215Post,
  milestoneUpdate20260215Post,
  developmentLogPost,
].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
