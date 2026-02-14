import Link from "next/link";
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
          <article key={post.slug} className="section-card space-y-2">
            <p className="text-xs text-zinc-500">
              {post.date} · {post.readTime}
            </p>
            <h2 className="text-xl font-semibold text-zinc-900">
              <Link href={`/blog/${post.slug}`} className="transition hover:text-zinc-700 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="muted-text">{post.summary}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="inline-block text-sm font-medium text-blue-700 hover:underline">
              Read article
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
