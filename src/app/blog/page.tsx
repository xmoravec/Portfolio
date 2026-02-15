import { BlogPostCard } from "../components/blog-post-card";
import { defaultLocale } from "../content";
import { getUiText } from "../i18n/ui-text";
import { blogPosts } from "../../content/blog";

export default function BlogPage() {
  const ui = getUiText(defaultLocale);

  return (
    <main className="page-shell motion-shell">
      <section className="space-y-4">
        <h1 className="section-title text-3xl sm:text-5xl">{ui.blog.pageTitle}</h1>
        <p className="muted-text max-w-2xl">
          {ui.blog.pageDescription}
        </p>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
          <p className="text-sm font-medium text-zinc-900">{ui.blog.timelineTitle}</p>
          <p className="mt-1 text-sm text-zinc-600">{ui.blog.timelineDescription}</p>
        </div>
      </section>

      <section className="space-y-3">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            compact
            readArticleLabel={ui.blog.readArticle}
            publishedLabel={ui.blog.publishedLabel}
          />
        ))}
      </section>
    </main>
  );
}
