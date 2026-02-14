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

export default function ContactPage() {
  return (
    <main className="page-shell">
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
          <p className="muted-text">This is the current UI layer. Backend delivery, validation, and anti-spam wiring are planned next.</p>
          <form className="space-y-3" action="#" method="post">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-zinc-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
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
