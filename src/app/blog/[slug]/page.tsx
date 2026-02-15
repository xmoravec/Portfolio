import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";
import { defaultLocale } from "../../content";
import { getUiText } from "../../i18n/ui-text";
import { CodeBlock } from "../../components/code-block";
import { blogPosts, getBlogPostBySlug } from "../../../content/blog";
import type { BlogBlock } from "../../../content/blog/types";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function renderBlock(block: BlogBlock) {
  if (block.type === "heading") {
    return (
      <h2 key={block.text} className="pt-2 text-2xl font-semibold tracking-tight text-zinc-900">
        {block.text}
      </h2>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote key={block.text} className="rounded-xl border-l-4 border-blue-600 bg-blue-50 px-4 py-3 text-zinc-800">
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={block.items.join("|")} className="space-y-2 pl-1 text-zinc-700">
        {block.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
            <span className="muted-text text-base">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "code") {
    return (
      <CodeBlock
        key={block.code}
        code={block.code}
        title={block.language}
        language={block.language}
        showLineNumbers
      />
    );
  }

  return (
    <p key={block.text} className="muted-text text-base text-zinc-700">
      {block.text}
    </p>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const ui = getUiText(defaultLocale);
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: ui.metadata.postNotFoundTitle,
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = `/blog/${post.slug}`;

  return {
    title: `${post.title} | Erik Moravec`,
    description: post.summary,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      url: canonicalPath,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const ui = getUiText(defaultLocale);
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-shell motion-shell">
      <article className="section-card space-y-8">
        <header className="space-y-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 transition hover:bg-blue-100"
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden />
            {ui.blog.badgeLabel}
          </Link>
          <h1 className="section-title text-3xl sm:text-4xl">{post.title}</h1>
          <p className="text-sm text-zinc-500">
            {ui.blog.publishedLabel} {dateFormatter.format(new Date(`${post.date}T00:00:00`))} · {post.readTime}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-4">{post.blocks.map((block) => renderBlock(block))}</div>

        <footer className="flex items-center gap-3 pt-4">
          <Link href="/blog" className="button-secondary w-full justify-center px-5 py-2.5 text-base sm:w-auto">
            {ui.blog.backToBlog}
          </Link>
        </footer>
      </article>
    </main>
  );
}