import Link from "next/link";
import type { BlogPost } from "../../content/blog/types";
import { CodeBlock } from "./code-block";

type BlogPostCardProps = {
  post: BlogPost;
  compact?: boolean;
};

function getPreviewCode(post: BlogPost) {
  const firstCode = post.blocks.find((block) => block.type === "code");
  if (firstCode && firstCode.type === "code") {
    return firstCode.code;
  }

  return `const notes = {
  title: "${post.title}",
  publishedAt: "${post.date}",
  tags: ${JSON.stringify(post.tags)},
};`;
}

export function BlogPostCard({ post, compact = false }: BlogPostCardProps) {
  return (
    <article className="section-card space-y-4">
      <div className="space-y-2">
        <p className="text-xs text-zinc-500">
          {post.date} · {post.readTime}
        </p>
        <h2 className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-zinc-900`}>
          <Link href={`/blog/${post.slug}`} className="transition hover:text-zinc-700 hover:underline">
            {post.title}
          </Link>
        </h2>
      </div>

      <CodeBlock code={getPreviewCode(post)} title="notes.ts" compact />

      <p className="muted-text text-base">{post.summary}</p>

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
  );
}
