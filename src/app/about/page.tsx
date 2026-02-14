import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="page-shell motion-shell">
      <section className="space-y-4">
        <span className="pill">About</span>
        <h1 className="section-title text-4xl sm:text-5xl">About Me</h1>
      </section>

      <section className="section-card grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200">
          <Image
            src="/images/photos/profile_picture_portugal_chair.jpg"
            alt="Portrait"
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
        <div className="space-y-3">
          <p className="muted-text">
            I build software with a bias toward clarity: understandable architecture, honest trade-offs, and execution that can be maintained over time.
          </p>
          <p className="muted-text">
            This website is both portfolio and working notebook, combining selected project outcomes with development logs from active iterations.
          </p>
        </div>
      </section>

      <section id="now" className="section-card space-y-4 scroll-mt-24">
        <h2 className="section-title">Now</h2>
        <p className="muted-text">
          I am currently pushing this site from mid-stage into a near-finished baseline with stronger layout decisions, tighter writing, and better interaction polish.
        </p>
        <p className="muted-text">
          In parallel, I am documenting project work in a more technical case-study style that explains architecture choices, constraints, and implementation details.
        </p>
        <p className="text-xs text-zinc-500">Last updated: 2026-02-14</p>
      </section>
    </main>
  );
}
