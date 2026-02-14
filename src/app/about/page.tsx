import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="page-shell">
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
            I enjoy building practical software with clear communication and thoughtful execution.
          </p>
          <p className="muted-text">
            This site tracks my work, writing, and current focus while staying simple and human.
          </p>
        </div>
      </section>

      <section id="now" className="section-card space-y-4 scroll-mt-24">
        <h2 className="section-title">Now</h2>
        <p className="muted-text">
          I am currently refining this website, improving visual polish, and preparing a small homepage photo slideshow.
        </p>
        <p className="muted-text">
          I am also documenting selected projects in a clearer case-study style with practical implementation notes.
        </p>
        <p className="text-xs text-zinc-500">Last updated: 2026-02-14</p>
      </section>
    </main>
  );
}
