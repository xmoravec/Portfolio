import Link from "next/link";
import { BookOpen } from "lucide-react";
import type { BlogPost } from "../../content/blog/types";
import { CodeBlock } from "./code-block";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function formatDate(dateValue: string) {
  return dateFormatter.format(new Date(`${dateValue}T00:00:00`));
}

type BlogPostCardProps = {
  post: BlogPost;
  compact?: boolean;
  readArticleLabel?: string;
  publishedLabel?: string;
};

function getPreviewCode(post: BlogPost) {
  const firstCode = post.blocks.find((block) => block.type === "code");
  if (firstCode && firstCode.type === "code") {
    return firstCode.code;
  }

  return `const notes = {
  title: "${post.title}",
  publishedAt: "${formatDate(post.date)}",
  tags: ${JSON.stringify(post.tags)},
};`;
}

export function BlogPostCard({
  post,
  compact = false,
  readArticleLabel = "Read article",
  publishedLabel = "Published",
}: BlogPostCardProps) {
  return (
    <article className="section-card space-y-4">
      <div className="space-y-2">
        <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          <BookOpen className="h-3.5 w-3.5" aria-hidden />
          Blog
        </span>
        <p className="text-xs text-zinc-500">
          {publishedLabel} {formatDate(post.date)} · {post.readTime}
        </p>
        <h2 className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-zinc-900`}>
          <Link href={`/blog/${post.slug}`} className="transition hover:text-zinc-700 hover:underline">
            {post.title}
          </Link>
        </h2>
      </div>

      <CodeBlock code={getPreviewCode(post)} title="notes.ts" language="typescript" compact />

      <p className="muted-text text-base">{post.summary}</p>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>

      <Link href={`/blog/${post.slug}`} className="inline-block text-sm font-medium text-blue-700 hover:underline">
        {readArticleLabel}
      </Link>
    </article>
  );
}
