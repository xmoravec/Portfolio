import Link from "next/link";
import { PhotoGallery } from "./components/photo-gallery";
import { defaultLocale, getHomeContent } from "./content";

export default function Home() {
  const content = getHomeContent(defaultLocale);

  return (
    <main className="page-shell">
      <section className="flex flex-col gap-6" aria-labelledby="hero-heading">
        <span className="pill w-fit">{content.hero.eyebrow}</span>
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
        >
          {content.hero.title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          {content.hero.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={content.hero.primaryCta.href}
            className="button-primary"
          >
            {content.hero.primaryCta.label}
          </Link>
          <Link
            href={content.hero.secondaryCta.href}
            className="button-secondary"
          >
            {content.hero.secondaryCta.label}
          </Link>
        </div>
      </section>

      <section aria-labelledby="photos-heading" className="space-y-5">
        <h2 id="photos-heading" className="section-title">
          {content.photos.title}
        </h2>
        <PhotoGallery items={content.photos.items} />
      </section>

      <section aria-labelledby="intro-heading" className="section-card space-y-4">
        <h2 id="intro-heading" className="section-title">
          {content.intro.title}
        </h2>
        {content.intro.paragraphs.map((paragraph) => (
          <p key={paragraph} className="muted-text text-base text-zinc-700">
            {paragraph}
          </p>
        ))}
      </section>

      <section aria-labelledby="now-heading" className="section-card space-y-3">
        <h2 id="now-heading" className="section-title">
          {content.now.title}
        </h2>
        <p className="muted-text">{content.now.summary}</p>
        <p className="text-xs text-zinc-500">Last updated: {content.now.lastUpdated}</p>
        <Link href={content.now.cta.href} className="text-sm font-medium text-zinc-900 underline">
          {content.now.cta.label}
        </Link>
      </section>

      <section aria-labelledby="blog-heading" className="space-y-4">
        <h2 id="blog-heading" className="section-title">
          {content.writing.title}
        </h2>
        <div className="space-y-3">
          {content.writing.posts.map((post) => (
            <article key={post.href + post.title} className="section-card space-y-2">
              <p className="text-xs text-zinc-500">{post.publishedAt}</p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900">{post.title}</h3>
              <p className="muted-text">{post.summary}</p>
              <Link href={post.href} className="mt-2 inline-block text-sm font-medium text-zinc-900 underline">
                Read post
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="explore-heading" className="section-card space-y-3">
        <h2 id="explore-heading" className="section-title">
          {content.explore.title}
        </h2>
        <p className="muted-text">{content.explore.description}</p>
        <div className="flex flex-wrap gap-4">
          {content.explore.links.map((link) => (
            <Link key={link.href} href={link.href} className="button-secondary">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="section-card space-y-3">
        <h2 id="contact-heading" className="section-title">
          {content.contact.title}
        </h2>
        <p className="muted-text">{content.contact.description}</p>
        <div className="flex flex-wrap gap-4">
          <Link href={content.contact.cta.href} className="button-primary">
            {content.contact.cta.label}
          </Link>
          <Link
            href={content.footer.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            {content.footer.githubLabel} {content.footer.githubHandle}
          </Link>
        </div>
      </section>
    </main>
  );
}
