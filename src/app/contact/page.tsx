import { submitContactForm } from "./actions";
import { getUiText } from "../i18n";
import { getRequestLocale } from "../i18n/locale.server";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const contactWayValues = [
  {
    key: "email",
    value: "trane128@gmail.com",
    href: "mailto:trane128@gmail.com",
    icon: Mail,
  },
  {
    key: "github",
    value: "@xmoravec",
    href: "https://github.com/xmoravec",
    icon: Github,
  },
  {
    key: "linkedIn",
    value: "erik-moravec-4094641a1",
    href: "https://www.linkedin.com/in/erik-moravec-4094641a1/",
    icon: Linkedin,
  },
  {
    key: "facebook",
    value: "erik.moravec",
    href: "https://www.facebook.com/erik.moravec/",
    icon: Facebook,
  },
] as const;

type ContactPageProps = {
  searchParams: Promise<{ status?: string; code?: string }>;
};

function getFeedback(
  feedbackText: ReturnType<typeof getUiText>["contact"]["feedback"],
  status?: string,
  code?: string,
) {

  if (status === "sent") {
    return {
      className: "rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800",
      text: feedbackText.sent,
    };
  }

  if (status === "queued") {
    return {
      className: "rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800",
      text: feedbackText.queued,
    };
  }

  if (status === "error") {
    if (code === "spam") {
      return {
        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
        text: feedbackText.spam,
      };
    }

    if (code === "email") {
      return {
        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
        text: feedbackText.email,
      };
    }

    if (code === "message") {
      return {
        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
        text: feedbackText.message,
      };
    }

    if (code === "delivery") {
      return {
        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
        text: feedbackText.delivery,
      };
    }

    return {
      className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
      text: feedbackText.missing,
    };
  }

  return null;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const locale = await getRequestLocale();
  const ui = getUiText(locale);
  const { status, code } = await searchParams;
  const feedback = getFeedback(ui.contact.feedback, status, code);
  const contactChannelLabels: Record<(typeof contactWayValues)[number]["key"], string> = {
    email: ui.contact.channels.email,
    github: ui.contact.channels.github,
    linkedIn: ui.contact.channels.linkedIn,
    facebook: ui.contact.channels.facebook,
  };

  const contactWays = contactWayValues.map((channel) => ({
    ...channel,
    label: contactChannelLabels[channel.key],
  }));

  return (
    <main className="page-shell motion-shell">
      <section className="space-y-4">
        <h1 className="section-title text-3xl sm:text-5xl">{ui.contact.title}</h1>
        <p className="muted-text max-w-3xl text-base">
          {ui.contact.description}
        </p>
      </section>

      <section>
        <article className="section-card space-y-5 lg:p-9">
          <h2 className="section-title">{ui.contact.formTitle}</h2>
          <p className="muted-text text-base">{ui.contact.formDescription}</p>
          {feedback ? <p className={feedback.className}>{feedback.text}</p> : null}
          <form className="space-y-3" action={submitContactForm}>
            <input type="hidden" name="formStartedAt" value="" readOnly />
            <div className="hidden" aria-hidden>
              <label htmlFor="company">{ui.contact.fields.honeypot}</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-zinc-900">
                {ui.contact.fields.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={120}
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
                placeholder={ui.contact.placeholders.name}
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-zinc-900">
                {ui.contact.fields.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={180}
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
                placeholder={ui.contact.placeholders.email}
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-zinc-900">
                {ui.contact.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                minLength={10}
                maxLength={3000}
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
                placeholder={ui.contact.placeholders.message}
              />
            </div>
            <button type="submit" className="button-primary w-full justify-center px-6 py-3 text-base sm:w-auto">
              {ui.contact.submitLabel}
            </button>
          </form>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">{ui.contact.channelsTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactWays.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="section-card flex items-start gap-3 p-4 hover:border-zinc-300"
            >
              <span className="mt-0.5 rounded-md border border-zinc-200 bg-zinc-50 p-2 text-zinc-700">
                <item.icon className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-zinc-900">{item.label}</span>
                <span className="block text-sm text-zinc-600">{item.value}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
