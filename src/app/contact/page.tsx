import { submitContactForm } from "./actions";

const contactWays = [
  {
    label: "Email",
    value: "hello@xmoravec.com",
    href: "mailto:hello@xmoravec.com",
  },
  {
    label: "GitHub",
    value: "@xmoravec",
    href: "https://github.com/xmoravec",
  },
  {
    label: "Location",
    value: "Central Europe",
    href: "#",
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
        <span className="pill">Contact</span>
        <h1 className="section-title text-4xl sm:text-5xl">Let’s Connect</h1>
        <p className="muted-text max-w-2xl">
          Reach out for collaboration, technical discussion, or project feedback.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="section-card space-y-4">
          <h2 className="section-title">Contact Channels</h2>
          <ul className="space-y-3">
            {contactWays.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-3 border-b border-zinc-100 pb-3">
                <span className="text-sm font-medium text-zinc-900">{item.label}</span>
                {item.href === "#" ? (
                  <span className="text-sm text-zinc-600">{item.value}</span>
                ) : (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-700 underline">
                    {item.value}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-card space-y-4">
          <h2 className="section-title">Send a Message</h2>
          <p className="muted-text">Validated serverless form submission with anti-spam checks and optional Resend delivery.</p>
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
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
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
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
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
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none ring-blue-500 placeholder:text-zinc-400 focus:ring-2"
                placeholder="Tell me about your project or question"
              />
            </div>
            <button type="submit" className="button-primary">
              Send Message
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
