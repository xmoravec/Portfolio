import { BlogPostCard } from "../components/blog-post-card";
import { blogPosts } from "../../content/blog";

export default function BlogPage() {
  return (
    <main className="page-shell motion-shell">
      <section className="space-y-4">
        <h1 className="section-title text-4xl sm:text-5xl">Writing and Notes</h1>
        <p className="muted-text max-w-2xl">
          Technical snapshots and decision logs from building this portfolio and related software work.
        </p>
      </section>

      <section className="space-y-3">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} compact />
        ))}
      </section>
    </main>
  );
}
