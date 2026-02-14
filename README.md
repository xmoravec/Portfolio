# Erik Moravec Portfolio

Personal website and working portfolio built with Next.js App Router.  
The project combines practical presentation pages (about, projects, contact) with development-facing content (project write-ups and engineering logs) so it can function both as a public profile and a technical notebook.

## Current Focus

This codebase is in the "polish and production wiring" phase: core routes are implemented, content model is established, and current work is focused on content quality, mobile UX refinements, delivery integrations, and production launch hardening.

## Technology Stack

- **Framework**: Next.js `16.1.6` with App Router
- **UI**: React `19.2.3`
- **Language**: TypeScript `^5`
- **Styling**: Tailwind CSS `^4` (via `@tailwindcss/postcss`)
- **Linting**: ESLint `^9` with `eslint-config-next`
- **Typography**: `next/font` with Geist + Geist Mono
- **Media delivery**: `next/image` with AVIF/WebP formats configured in `next.config.ts`

## Architecture Summary

### Routing

- Static-first page structure under `src/app`
- Dynamic slug routes for:
	- `projects/[slug]`
	- `blog/[slug]`
- Legacy compatibility route `blog/post` redirects query-based links to canonical slug URLs

### Content model

- Home page content is typed and centralized in `src/app/content.ts`
- Blog entries are managed in `src/content/blog/*`
- Project entries are managed in `src/content/projects/*`
- Content is currently authored in TypeScript modules (no CMS, no DB)

### UI composition

- Shared card and code-preview components are used across homepage and listing pages
- Reusable gallery component supports horizontal browsing + enlarged photo view
- Global style primitives are defined in `src/app/globals.css` (`page-shell`, `section-card`, `button-*`, etc.)

### Contact flow

- Contact form submits to a server action in `src/app/contact/actions.ts`
- Validation and anti-spam checks include:
	- required field rules
	- email format check
	- honeypot field
	- too-fast submit timing guard
	- suspicious short-link heuristic
- Email delivery is prepared through Resend API
- If `RESEND_API_KEY` is missing, the flow degrades safely to queued/not-configured behavior

## Environment Variables

- `NEXT_PUBLIC_SITE_URL` — canonical metadata base URL
- `RESEND_API_KEY` — Resend authentication key

Contact sender and recipient values are currently configured in `src/app/contact/config.ts`.

## Deployment Direction

Target platform is Vercel with static-first rendering and selective server-side behavior for form submission.  
Production readiness depends mainly on environment configuration, domain wiring, content pass, and final quality checks (mobile + Lighthouse + SEO consistency).

## Documentation

- Technical architecture source of truth: `docs/architecture.md`

## Roadmap

### Short term

- **Mobile UI pass**
	- Audit all pages for spacing, typography scale, sticky header behavior, and tap targets on smaller breakpoints.
	- Re-check horizontal sections (gallery, featured cards, nav wrapping) for smooth usability on narrow screens.
	- Remove any desktop-first assumptions in content density and section rhythm.

- **Buy Me a Coffee button**
	- Add a clear, non-intrusive support CTA with placement that does not compete with project/contact primary actions.
	- Decide where this belongs (likely footer and/or contact page) and keep visual hierarchy consistent.

- **Update content quality and structure**
	- Run a full copy-edit pass across all pages for tone, grammar, consistency, and confidence.
	- Expand/clarify `acquamarea` project context (scope, outcome, technical contribution).
	- Rework About section details for school, DHL, and other relevant experience with clearer chronology.
	- Clean up photos: curate the image set, remove weak duplicates, and improve captions/alt text quality.
	- Add a dedicated college projects section with GitHub references and interesting snippets/examples (C, Python, and other representative coursework code).

- **EN/SK translations**
	- Split currently shared locale content into real bilingual entries.
	- Define translation coverage per section (home hero, about, project summaries, blog metadata, contact labels).
	- Add a simple language-switching UX and verify URL/metadata behavior per locale.

- **Add Vercel monitoring support**
	- Enable Vercel Analytics and Speed Insights for production visibility.
	- Define a minimal monitoring baseline for web vitals, route performance, and high-level availability checks.
	- Add an incident checklist for what to inspect first when performance or delivery degrades.

- **Vercel deploy**
	- Create/clean production project settings, set env vars, and confirm predictable build output.
	- Validate route behavior and metadata on deployed domain preview before final switch.

- **Check Lighthouse score**
	- Run performance/accessibility/SEO audits on home, projects, blog detail, and contact pages.
	- Prioritize improvements with direct user impact (LCP image handling, contrast, semantic structure, interaction feedback).

- **Register domain `xmoravec`**
	- Choose final TLD and registrar setup for long-term maintainability.
	- Document renewal, DNS ownership, and transfer notes to avoid lock-in surprises.

- **Use new domain on Vercel and as email target/sender**
	- Point DNS to Vercel and complete SSL + canonical URL setup.
	- Align contact sender address and receiving mailbox with the new domain.
	- Verify SPF/DKIM/DMARC basics for reliable outbound contact delivery.

- **Development log: first deployment entry**
	- Publish a blog/dev-log entry summarizing first production deployment.
	- Include what was added, what changed since local-only version, what remains open, and what was intentionally postponed.

### Long term

- **Clickable technology and content tags with filtering + paging**
	- Make technology/taxonomy tags interactive across projects and blog entries.
	- Implement route-friendly filtering state (shareable URL params) and scalable pagination.
	- Keep filter UX fast, predictable, and understandable on both desktop and mobile.

