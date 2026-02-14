import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "../../../content/blog";
import type { BlogBlock } from "../../../content/blog/types";

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
      <pre key={block.code} className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-950 p-4 text-sm text-zinc-100">
        <code>{block.code}</code>
      </pre>
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
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | Erik Moravec",
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
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-shell motion-shell">
      <article className="section-card space-y-6">
        <header className="space-y-3">
          <h1 className="section-title text-3xl sm:text-4xl">{post.title}</h1>
          <p className="text-sm text-zinc-500">
            {post.date} · {post.readTime}
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

        <footer className="pt-3">
          <Link href="/blog" className="button-secondary">
            ← Back to main blog page
          </Link>
        </footer>
      </article>
    </main>
  );
}