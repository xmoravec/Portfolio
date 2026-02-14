import { notFound, redirect } from "next/navigation";

type BlogPostPageProps = {
  searchParams: Promise<{ slug?: string }>;
};

export default async function BlogPostPage({ searchParams }: BlogPostPageProps) {
  const { slug } = await searchParams;

  if (!slug) {
    notFound();
  }

  redirect(`/blog/${encodeURIComponent(slug)}`);
}
