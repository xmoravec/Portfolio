import { submitContactForm } from "./actions";

const contactWays = [
  {
    label: "Email",
    value: "trane128@gmail.com",
    href: "mailto:trane128@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
        <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.7" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "@xmoravec",
    href: "https://github.com/xmoravec",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.69-.22.69-.48v-1.7c-2.8.61-3.39-1.2-3.39-1.2-.46-1.14-1.12-1.44-1.12-1.44-.92-.63.07-.62.07-.62 1.02.07 1.56 1.03 1.56 1.03.9 1.53 2.37 1.08 2.95.83.09-.64.35-1.08.63-1.33-2.23-.25-4.58-1.1-4.58-4.88 0-1.08.39-1.96 1.03-2.64-.1-.25-.45-1.29.1-2.7 0 0 .84-.26 2.75 1.01A9.6 9.6 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.91-1.27 2.75-1.01 2.75-1.01.55 1.41.2 2.45.1 2.7.64.68 1.03 1.56 1.03 2.64 0 3.79-2.36 4.62-4.6 4.87.36.3.69.9.69 1.82v2.7c0 .27.18.59.7.49A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "erik-moravec-4094641a1",
    href: "https://www.linkedin.com/in/erik-moravec-4094641a1/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 7 1.97 1.97 0 0 0 5.25 3ZM20.44 12.89c0-3.25-1.74-4.76-4.06-4.76-1.87 0-2.7 1.03-3.16 1.75V8.5H9.84V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.87 1.72 1.87 3.05V20h3.38l-.17-7.11Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    value: "erik.moravec",
    href: "https://www.facebook.com/erik.moravec/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.25-1.46 1.5-1.46h1.7V4a22.6 22.6 0 0 0-2.48-.12c-2.45 0-4.12 1.5-4.12 4.25V10H7.4v3h2.7v8h3.4Z" />
      </svg>
    ),
  },
];

type ContactPageProps = {
  searchParams: Promise<{ status?: string; code?: string }>;
};

function getFeedback(status?: string, code?: string) {
  if (status === "sent") {
    return {
      className: "rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800",
      text: "Message sent successfully. Thanks for reaching out.",
    };
  }

  if (status === "queued") {
    return {
      className: "rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800",
      text: "Message validated. Delivery service is not configured yet, so it was not emailed.",
    };
  }

  if (status === "error") {
    if (code === "spam") {
      return {
        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
        text: "Submission blocked by anti-spam checks. Please try again.",
      };
    }

    if (code === "email") {
      return {
        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
        text: "Please use a valid email address.",
      };
    }

    if (code === "message") {
      return {
        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
        text: "Please provide a message between 10 and 3000 characters.",
      };
    }

    if (code === "delivery") {
      return {
        className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
        text: "Validation passed, but delivery failed. Please retry shortly.",
      };
    }

    return {
      className: "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
      text: "Please fill in all fields before sending.",
    };
  }

  return null;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { status, code } = await searchParams;
  const feedback = getFeedback(status, code);

  return (
    <main className="page-shell motion-shell">
      <section className="space-y-4">
        <h1 className="section-title text-4xl sm:text-5xl">Let’s Connect</h1>
        <p className="muted-text max-w-3xl text-base">
          Reach out for collaboration, technical discussion, or project feedback. This form is wired with server-side validation, anti-spam checks, and optional Resend delivery.
        </p>
      </section>

      <section>
        <article className="section-card space-y-5 lg:p-9">
          <h2 className="section-title">Send a Message</h2>
          <p className="muted-text text-base">You can use this for project inquiries, freelance collaboration, or detailed technical questions.</p>
          {feedback ? <p className={feedback.className}>{feedback.text}</p> : null}
          <form className="space-y-3" action={submitContactForm}>
            <input type="hidden" name="formStartedAt" value={Date.now().toString()} />
            <div className="hidden" aria-hidden>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-zinc-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={120}
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-zinc-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={180}
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-zinc-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                minLength={10}
                maxLength={3000}
                className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
                placeholder="Tell me about your project or question"
              />
            </div>
            <button type="submit" className="button-primary px-6 py-3 text-base">
              Send Message
            </button>
          </form>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Contact Channels</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactWays.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="section-card flex items-start gap-3 p-4 hover:border-zinc-300"
            >
              <span className="mt-0.5 rounded-md border border-zinc-200 bg-zinc-50 p-2 text-zinc-700">{item.icon}</span>
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
