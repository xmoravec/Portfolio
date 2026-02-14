import Link from "next/link";
import { defaultLocale, getHomeContent } from "./content";

export default function Home() {
  const content = getHomeContent(defaultLocale);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-16 px-6 py-12 sm:px-10">
      <header className="flex items-center justify-between">
        <p className="text-sm font-semibold tracking-wide text-zinc-800">
          {content.hero.eyebrow}
        </p>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-4 text-sm text-zinc-600">
          {content.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-zinc-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="flex flex-col gap-6" aria-labelledby="hero-heading">
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
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
          >
            {content.hero.primaryCta.label}
          </Link>
          <Link
            href={content.hero.secondaryCta.href}
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800"
          >
            {content.hero.secondaryCta.label}
          </Link>
        </div>
      </section>

      <section aria-labelledby="intro-heading" className="space-y-4">
        <h2 id="intro-heading" className="text-2xl font-semibold text-zinc-900">
          {content.intro.title}
        </h2>
        {content.intro.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-zinc-700">
            {paragraph}
          </p>
        ))}
      </section>

      <section aria-labelledby="photos-heading" className="space-y-4">
        <h2 id="photos-heading" className="text-2xl font-semibold text-zinc-900">
          {content.photos.title}
        </h2>
        <div className="space-y-4">
          {content.photos.slots.map((slot) => (
            <article key={slot.title} className="space-y-2">
              <div className="aspect-video rounded-lg border border-zinc-200 bg-zinc-50" />
              <p className="text-sm font-medium text-zinc-900">{slot.title}</p>
              <p className="text-xs text-zinc-500">{slot.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="now-heading" className="space-y-3 rounded-lg border border-zinc-200 p-5">
        <h2 id="now-heading" className="text-2xl font-semibold text-zinc-900">
          {content.now.title}
        </h2>
        <p className="text-sm text-zinc-700">{content.now.summary}</p>
        <p className="text-xs text-zinc-500">Last updated: {content.now.lastUpdated}</p>
        <Link href={content.now.cta.href} className="text-sm font-medium text-zinc-900 underline">
          {content.now.cta.label}
        </Link>
      </section>

      <section aria-labelledby="blog-heading" className="space-y-4">
        <h2 id="blog-heading" className="text-2xl font-semibold text-zinc-900">
          {content.writing.title}
        </h2>
        <div className="space-y-3">
          {content.writing.posts.map((post) => (
            <article key={post.href} className="rounded-lg border border-zinc-200 p-4">
              <p className="text-xs text-zinc-500">{post.publishedAt}</p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900">{post.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{post.summary}</p>
              <Link href={post.href} className="mt-2 inline-block text-sm font-medium text-zinc-900 underline">
                Read post
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="explore-heading" className="space-y-3 rounded-lg border border-zinc-200 p-5">
        <h2 id="explore-heading" className="text-2xl font-semibold text-zinc-900">
          {content.explore.title}
        </h2>
        <p className="text-sm text-zinc-700">{content.explore.description}</p>
        <div className="flex flex-wrap gap-4">
          {content.explore.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="space-y-3 rounded-lg border border-zinc-200 p-5">
        <h2 id="contact-heading" className="text-2xl font-semibold text-zinc-900">
          {content.contact.title}
        </h2>
        <p className="text-sm text-zinc-700">{content.contact.description}</p>
        <div className="flex flex-wrap gap-4">
          <Link href={content.contact.cta.href} className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
            {content.contact.cta.label}
          </Link>
          <Link
            href={content.footer.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800"
          >
            {content.footer.githubLabel} {content.footer.githubHandle}
          </Link>
        </div>
      </section>
    </main>
  );
}
