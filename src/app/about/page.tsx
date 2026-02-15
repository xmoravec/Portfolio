import Image from "next/image";
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
      <section className="space-y-4">
        <h1 className="section-title text-3xl sm:text-5xl">{ui.about.title}</h1>
      </section>

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
    </main>
  );
}
