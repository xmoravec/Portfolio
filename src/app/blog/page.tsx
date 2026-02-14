const posts = [
  {
    title: "How I Keep Personal Projects Moving",
    date: "2026-02-11",
    summary: "A lightweight planning rhythm that helps me ship without burning momentum.",
  },
  {
    title: "Notes on Better Focus",
    date: "2026-01-30",
    summary: "Simple constraints I use to reduce context switching and maintain quality.",
  },
  {
    title: "Designing for Iteration, Not Perfection",
    date: "2026-01-09",
    summary: "How I structure projects so they can improve in public over time.",
  },
];

export default function BlogPage() {
  return (
    <main className="page-shell">
      <section className="space-y-4">
        <span className="pill">Blog</span>
        <h1 className="section-title text-4xl sm:text-5xl">Writing and Notes</h1>
        <p className="muted-text max-w-2xl">
          Short essays about building products, maintaining momentum, and learning in public.
        </p>
      </section>

      <section className="space-y-3">
        {posts.map((post) => (
          <article key={post.title} className="section-card space-y-2">
            <p className="text-xs text-zinc-500">{post.date}</p>
            <h2 className="text-xl font-semibold text-zinc-900">{post.title}</h2>
            <p className="muted-text">{post.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
