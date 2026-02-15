import { BlogPostCard } from "../components/blog-post-card";
import { getUiText } from "../i18n";
import { getRequestLocale } from "../i18n/locale.server";
import { blogPosts } from "../../content/blog";

export default async function BlogPage() {
  const locale = await getRequestLocale();
  const ui = getUiText(locale);

  return (
    <main className="page-shell motion-shell">
      <section className="space-y-4">
        <h1 className="section-title text-3xl sm:text-5xl">{ui.blog.pageTitle}</h1>
        <p className="muted-text max-w-2xl">
          {ui.blog.pageDescription}
        </p>
      </section>

      <section className="space-y-3">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            compact
            readArticleLabel={ui.blog.readArticle}
            publishedLabel={ui.blog.publishedLabel}
            badgeLabel={ui.blog.badgeLabel}
          />
        ))}
      </section>
    </main>
  );
}
