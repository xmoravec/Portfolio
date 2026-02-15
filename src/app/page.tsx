import Link from "next/link";
import { BlogPostCard } from "./components/blog-post-card";
import { PhotoGallery } from "./components/photo-gallery";
import { ProjectPostCard } from "./components/project-post-card";
import { defaultLocale, getHomeContent } from "./content";
import { getUiText } from "./i18n/ui-text";
import { formatDisplayDate } from "./lib/date-format";
import { blogPosts } from "../content/blog";
import { projectPosts } from "../content/projects";

export default function Home() {
  const content = getHomeContent(defaultLocale);
  const ui = getUiText(defaultLocale);
  const featuredProject = projectPosts[0];
  const featuredBlogPost = blogPosts[0];

  return (
    <main className="page-shell motion-shell">
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
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            href={content.hero.primaryCta.href}
            className="button-primary w-full justify-center sm:w-auto"
          >
            {content.hero.primaryCta.label}
          </Link>
          <Link
            href={content.hero.secondaryCta.href}
            className="button-secondary w-full justify-center sm:w-auto"
          >
            {content.hero.secondaryCta.label}
          </Link>
        </div>
      </section>

      <section aria-labelledby="photos-heading" className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id="photos-heading" className="section-title">
            {content.photos.title}
          </h2>
          <p className="text-sm text-zinc-500">{ui.home.photoHint}</p>
        </div>
        <PhotoGallery items={content.photos.items} labels={ui.photos} />
      </section>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
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
          <p className="text-xs text-zinc-500">{ui.common.lastUpdatedLabel}: {formatDisplayDate(content.now.lastUpdated)}</p>
          <Link href={content.now.cta.href} className="text-sm font-medium text-zinc-900 underline">
            {content.now.cta.label}
          </Link>
        </section>
      </div>

      {featuredProject || featuredBlogPost ? (
        <section aria-labelledby="featured-heading" className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="featured-heading" className="section-title">
              {ui.home.featuredTitle}
            </h2>
            <p className="text-sm text-zinc-500">{ui.home.featuredSubtitle}</p>
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            {featuredProject ? <ProjectPostCard project={featuredProject} compact openProjectDetailLabel={ui.projects.openProjectDetail} /> : null}
            {featuredBlogPost ? (
              <BlogPostCard
                post={featuredBlogPost}
                compact
                readArticleLabel={ui.blog.readArticle}
                publishedLabel={ui.blog.publishedLabel}
              />
            ) : null}
          </div>
        </section>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-2">
        <section aria-labelledby="explore-heading" className="section-card space-y-3">
          <h2 id="explore-heading" className="section-title">
            {content.explore.title}
          </h2>
          <p className="muted-text">{content.explore.description}</p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {content.explore.links.map((link) => (
              <Link key={link.href} href={link.href} className="button-secondary w-full justify-center sm:w-auto">
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
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href={content.contact.cta.href} className="button-primary w-full justify-center sm:w-auto">
              {content.contact.cta.label}
            </Link>
            <Link
              href={content.footer.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary w-full justify-center sm:w-auto"
            >
              {content.footer.githubLabel} {content.footer.githubHandle}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
