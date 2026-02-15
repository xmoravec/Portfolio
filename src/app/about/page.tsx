import Image from "next/image";
import { Heart } from "lucide-react";
import { defaultLocale } from "../content";
import { getUiText } from "../i18n/ui-text";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export default function AboutPage() {
  const ui = getUiText(defaultLocale);

  return (
    <main className="page-shell motion-shell">
      <section className="section-card grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200">
          <Image
            src="/images/photos/profile_picture_portugal_chair.jpg"
            alt={ui.about.portraitAlt}
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{ui.about.title}</h1>
          <p className="muted-text">{ui.about.introFirst}</p>
          <p className="muted-text">{ui.about.introSecond}</p>
        </div>
      </section>

      <section id="now" className="section-card space-y-4 scroll-mt-24">
        <h2 className="section-title">{ui.about.nowTitle}</h2>
        <p className="muted-text">{ui.about.nowFirst}</p>
        <p className="muted-text">{ui.about.nowSecond}</p>
        <p className="text-xs text-zinc-500">{ui.common.lastUpdatedLabel}: {dateFormatter.format(new Date("2026-02-14T00:00:00"))}</p>
      </section>

      <section className="section-card space-y-6" aria-labelledby="experience-timeline-heading">
        <div className="space-y-2">
          <h2 id="experience-timeline-heading" className="section-title">
            {ui.about.experienceTitle}
          </h2>
          <p className="muted-text">
            {ui.about.experienceDescription}
          </p>
        </div>

        <ol className="relative space-y-4 pl-8">
          <div className="absolute bottom-2 left-3 top-2 w-px bg-linear-to-b from-blue-200 via-zinc-200 to-zinc-200" aria-hidden />
          {ui.about.experienceItems.map((item) => (
            <li key={`${item.company}-${item.role}-${item.period}`} className="relative">
              <span className="absolute -left-[1.62rem] top-6 h-3.5 w-3.5 rounded-full border-2 border-white bg-blue-600 shadow-sm" aria-hidden />
              <article className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">{item.role}</h3>
                    <p className="text-sm font-medium text-blue-700">{item.company}</p>
                  </div>
                  <p className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-600">
                    {item.period}
                  </p>
                </div>
                <p className="mt-2 text-xs text-zinc-500">
                  {item.location} · {item.mode}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{item.summary}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-card space-y-4" aria-labelledby="support-heading">
        <h2 id="support-heading" className="section-title">{ui.about.supportTitle}</h2>
        <p className="muted-text">{ui.about.supportDescription}</p>
        <a
          href="https://revolut.me/xmoravec"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-fuchsia-200 bg-linear-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto sm:min-w-88"
        >
          <Heart className="h-5 w-5 transition group-hover:scale-110" aria-hidden />
          {ui.about.supportButtonLabel}
        </a>
        <p className="text-sm text-zinc-500">{ui.about.supportCaption}</p>
      </section>
    </main>
  );
}
