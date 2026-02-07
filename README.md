# Professional Portfolio

A high-speed, sleek portfolio site that showcases my skills, resume, and key projects—serving as the stable public face of my work.

## Tech Stack

- **Frontend**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (for a clean, professional look)
- **Content**: Markdown/MDX for blog posts and project pages
- **Deployment**: Vercel (automated builds, global CDN, free tier)

## Architecture & Approach

- Prefer **Static Site Generation (SSG)** for instant load times and reliability.
- Use **serverless functions only when necessary**, e.g. for a contact form.
- Keep the overall system **static and simple** to maximize uptime and minimize operational overhead.

## Content & UX Plan

- **"Now" page** describing what I am currently learning or working on.
- **Interactive project cards** with live previews or small interactive snippets instead of static screenshots.
- Clear **links into the Playground/Lab** for experimental or in-progress projects.
- **Tech stack explanation**: not just logos, but short notes on *why* I chose each tool.

## Auth / Admin Strategy

- Avoid user-facing login for the public portfolio.
- If I need content management, build a **lightweight admin panel** for myself:
	- Auth-protected CMS-like UI.
	- Ability to create/edit blog posts and project entries without redeploying code.

## Initial Implementation Plan

1. Initialize the app with `npx create-next-app@latest` using the App Router.
2. Set up Tailwind CSS and shadcn/ui.
3. Deploy the boilerplate to Vercel as early as possible.
4. Add core pages: Home, Projects, Blog, Now, and a Contact or About page.

## Critical Pitfalls to Avoid

### Over-engineering
- Do not add a database or complex state management for the public site.
- Keep it static-first for simplicity and 100% uptime.

### Design bloat
- Avoid heavy animations or unnecessary effects that hurt Lighthouse performance and perceived speed.

## Domain & Deployment

- **Domain**: `yourname.com`
- **Platform**: Vercel (automated deployments, global CDN)
- **Separation**: The Portfolio remains independent from the experimental Playground/Lab

## Performance & Accessibility

- Regularly run Lighthouse audits and keep scores high.
- Follow basic accessibility practices (semantic HTML, focus states, ARIA where needed).

## Cross-Project Integration

- Prominent **links from Portfolio projects into the Lab** (`lab.yourname.com`) for live demos.
- Clear indication that the Lab is experimental and may be less stable.

---

For the experimental sandbox, see [README_LAB.md](README_LAB.md).
