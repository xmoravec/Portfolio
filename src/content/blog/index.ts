import type { BlogPost } from "./types";
import { developmentLogPost } from "./posts/development-log";
import { focusNotesPost } from "./posts/focus-notes";

export const blogPosts: BlogPost[] = [developmentLogPost, focusNotesPost].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
