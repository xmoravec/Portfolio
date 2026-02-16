# Erik Moravec Portfolio

Personal website and working portfolio built with Next.js App Router.  
The project combines practical presentation pages (about, projects, contact) with development-facing content (project write-ups and engineering logs) so it can function both as a public profile and a technical notebook.

## Current Focus

This codebase is in the "polish and production wiring" phase: core routes are implemented, content model is established, and current work is focused on content quality, mobile UX refinements, delivery integrations, and production launch hardening.

## Technology Stack

- **Framework**: Next.js `16.1.6` with App Router
- **UI**: React `19.2.4`
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
- `CONTACT_FROM_EMAIL` — sender shown in outgoing contact emails (e.g. `XMoravec Contact <contact@xmoravec.com>`)
- `CONTACT_TO_EMAIL` — destination inbox for website contact submissions

Contact sender and recipient values are currently configured in `src/app/contact/config.ts`.

## Deployment Direction

Target platform is Vercel with static-first rendering and selective server-side behavior for form submission.  
Production readiness depends mainly on environment configuration, domain wiring, content pass, and final quality checks (mobile + Lighthouse + SEO consistency).

## Documentation

- Technical architecture source of truth: `docs/architecture.md`
