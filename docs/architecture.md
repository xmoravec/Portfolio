# Portfolio Architecture

Last updated: 2026-02-16

This document is the technical source of truth for this portfolio codebase. Keep it updated whenever architecture, routing, content flow, integrations, or deployment assumptions change.

## 1) Project Overview

- **Type**: Personal/portfolio web application
- **Framework**: Next.js (App Router)
- **Runtime model**: Static-first pages with selective server-side behavior (contact form server action)
- **Primary goal**: Present projects, development logs, and personal profile with high clarity, low operational complexity, and clean maintainability
- **Current phase**: Mid-to-late build (core pages complete, polishing and production wiring in progress)

## 2) Technology Stack

- **Next.js** `16.1.6`
- **React / React DOM** `19.2.4`
- **TypeScript** `^5` with strict mode
- **Tailwind CSS** `^4` via `@tailwindcss/postcss`
- **ESLint** `^9` with `eslint-config-next` core-web-vitals and TypeScript presets
- **Fonts**: `next/font` with Geist + Geist Mono
- **Image optimization**: `next/image`
- **Image delivery tuning**: AVIF/WebP output enabled in Next config, plus responsive sizing/quality strategy on gallery images
- **Monitoring**: `@vercel/analytics` mounted globally in `layout.tsx`

No database and no CMS are used currently. Content is authored in TypeScript source files and bundled at build-time.

## 3) High-Level Architecture

### 3.1 App Router Structure

- `src/app/layout.tsx`
  - Global shell (navigation + metadata)
  - `metadataBase` derived from `NEXT_PUBLIC_SITE_URL` fallback to localhost
  - Root layout remains static; navigation locale labels are resolved client-side from locale cookie
  - Global Vercel Analytics client mounted once for route-level pageview tracking
- `src/app/page.tsx`
  - Home page, fed by structured content model
- `src/app/about/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
  - Dynamic project detail route with canonical metadata
  - Rich DOM-focused detail layout (not restricted to blog-style text blocks)
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
  - Dynamic blog detail route
  - Per-post canonical and Open Graph metadata
- `src/app/blog/post/page.tsx`
  - Legacy compatibility endpoint that redirects query URLs to `/blog/[slug]`
- `src/app/contact/page.tsx`
  - Contact UI with form submission feedback
- `src/app/contact/actions.ts`
  - Server action for validation, anti-spam, and optional email delivery via Resend
  - In-memory rate limiting by client IP fingerprint to reduce contact endpoint abuse
- `src/app/components/site-nav.tsx`
  - Path-aware navigation with conditional Home link on non-home routes
  - Mobile hamburger drawer with overlay, close actions, and locale-driven labels
  - Icons use `lucide-react` instead of inline SVG path markup
- `src/app/components/code-block.tsx`
  - Reusable highlighted code display surface with compact/full variants
  - Built on `react-syntax-highlighter` with parameterized options (language, line numbers, wrapping, copy button)
- `src/app/components/blog-post-card.tsx`
  - Reusable blog preview card used in blog listing and homepage featured section
- `src/app/components/project-post-card.tsx`
  - Reusable project preview card used in projects listing and homepage featured section
- `src/app/i18n/ui-text.ts`
  - Centralized locale dictionary for UI copy and feedback labels
  - Current fallback strategy maps `sk` to EN text until translations are authored

### 3.2 Content Architecture

- Home page content source: `src/app/content.ts`
  - Typed data model (`HomeContent`, locale-ready structure)
  - `defaultLocale` and locale map (currently EN + SK map to same content object)
- Shared UI copy source: `src/app/i18n/ui-text.ts`
  - Non-content UI strings (navigation, labels, feedback, CTA text, metadata fallbacks) are centralized
  - Keeps code snippets and code sample blocks untouched by localization
- Blog content source:
  - `src/content/blog/types.ts` for schema
  - `src/content/blog/index.ts` for index and lookup
  - `src/content/blog/posts/*` for actual post content modules
- Project content source:
  - `src/content/projects/types.ts` for schema
  - `src/content/projects/index.ts` for index and lookup
  - `src/content/projects/acquamarea-project.ts`, `src/content/projects/portfolio-project.ts`, and `src/content/projects/university-engineering-labs-project.ts` for current project entries

- Blog content source includes:
  - `src/content/blog/posts/initial-development-log.ts`
  - `src/content/blog/posts/milestone-update-2026-02-15.ts`
  - `src/content/blog/posts/university-projects-reflection-2026-02-15.ts`

The blog rendering model is block-based typed content (`heading`, `paragraph`, `quote`, `list`, `code`) rendered directly by route component logic. Projects use slug-based routing too, but the detail page is DOM-first and can mix richer layouts and custom UI sections without being constrained to a text block schema.

## 4) Routing and SEO Decisions

### 4.1 Dynamic Blog Routing

- Canonical blog URL pattern: `/blog/[slug]`
- Legacy query URL support: `/blog/post?slug=...` redirects to canonical slug route
- Benefits:
  - Cleaner and more shareable URLs
  - Better SEO signal consolidation
  - Better long-term maintainability and analytics clarity

### 4.2 Metadata

- Global metadata configured in `layout.tsx`
- `metadataBase` is resolved through a guarded site-URL utility to avoid malformed env input breaking canonical generation
- Global viewport metadata is explicitly configured in `layout.tsx` (`width=device-width`, `initialScale=1`, `viewportFit=cover`) to avoid real-device mobile viewport mismatch/phantom horizontal canvas behavior
- Post-level metadata generated in `blog/[slug]/page.tsx`
  - `title`
  - `description`
  - `alternates.canonical`
  - Open Graph article metadata
- Project-level metadata generated in `projects/[slug]/page.tsx`
  - Same canonical + Open Graph approach for project detail pages
- SEO infrastructure routes are implemented:
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`

## 5) Styling System

### 5.1 Core Styling Approach

- Tailwind CSS v4 with utility-first composition
- Shared component classes in `src/app/globals.css`
  - `page-shell`
  - `section-card`
  - `section-title`
  - `muted-text`
  - `button-primary`
  - `button-secondary`
  - `pill`
  - `horizontal-scroll`
- Reusable code display component in `src/app/components/code-block.tsx`
  - Library-based syntax highlighting via `react-syntax-highlighter`
  - Header accents, optional line numbers, optional copy button, and gradient surface
  - Used in project previews and detail examples

### 5.2 Layout Behavior

- Full-width mobile shell with breakpoint-based max-width constraints from `md` upward
- Wider desktop max container (`max-w-6xl` to `xl:max-w-7xl`) to reduce over-constrained center-column feel on large displays
- Home page uses mixed stacked + grid composition to improve horizontal rhythm
- Home page includes horizontal featured presentation for both projects and blog content using shared card components with code previews
- Mobile navigation uses a right-side drawer with backdrop to preserve readability on small screens
- Photo gallery is a horizontal snap rail with modal enlargement on click
- Gallery image delivery is tuned for Lighthouse performance: only first thumbnail is eager/high-priority, other thumbnails are lazy-loaded, and thumbnail/modal quality is explicitly controlled
- Global security response headers are configured in `next.config.ts` for baseline hardening (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)
- Photo gallery cards and CTAs were adjusted for stronger mobile fit (wider cards, mobile-friendly button width behavior)
- Horizontal overflow hardening is applied at the shell level (`html/body` + `.page-shell`) and on reusable card surfaces (`min-w-0`) to prevent long-content/grid overflow from expanding document width on mobile
- Drawer and gallery widths use bounded `min()` viewport values to avoid viewport-width overshoot edge-cases on real devices

### 5.3 Motion System

- Existing hover micro-interactions retained
- Additional subtle entrance motion added through `.motion-shell` in `globals.css`
  - Staggered `section-enter` animation
  - Small upward offset + fade-in
  - Respects `prefers-reduced-motion`

## 6) Contact Form: Serverless Flow

### 6.1 UI Layer

- File: `src/app/contact/page.tsx`
- Dominant full-width form card with status messaging
- Hidden timestamp field (`formStartedAt`) is stamped on client form mount for anti-spam timing checks
- Social/contact cards placed below the form
- Contact channels include:
  - Email (`trane128@gmail.com`)
  - GitHub (`@xmoravec`)
  - LinkedIn (`erik-moravec-4094641a1`)
  - Facebook (`erik.moravec`)

### 6.2 Server Action

- File: `src/app/contact/actions.ts`
- `submitContactForm(formData)` performs:
  - Required field checks
  - Email format validation
  - Message length validation
  - Anti-spam checks:
    - hidden honeypot field (`company`)
    - timing check (`formStartedAt` too fast submit)
    - suspicious short-link message pattern
- No server-side request logging is emitted from this action
- Anti-spam timing checks reject missing/invalid form start timestamps and too-fast submissions
- Rate limiting blocks burst submissions from the same client fingerprint inside a rolling window

### 6.3 Delivery Integration (Resend)

- Resend API is called via `fetch` to `https://api.resend.com/emails`
- Env vars:
  - `RESEND_API_KEY`
- Optional mail routing vars:
  - `CONTACT_FROM_EMAIL`
  - `CONTACT_TO_EMAIL`
- Local config:
  - `src/app/contact/config.ts` resolves sender/recipient from env with safe defaults
- Graceful behavior when `RESEND_API_KEY` is missing:
  - form validates
  - response shows `queued` status instead of crashing
- Delivery payload includes both plain-text and lightweight HTML email bodies
  - HTML format renders sender details and message content in a table layout

## 7) Environment Variables

Current app assumptions:

- `NEXT_PUBLIC_SITE_URL` for canonical base URL
- `RESEND_API_KEY` for sending email

Contact sender/recipient are currently defined in `src/app/contact/config.ts`.

## 8) Deployment Model (Vercel)

- Intended deployment target: Vercel
- Pages are mostly static/server-rendered by Next runtime as needed
- Contact form server action runs in serverless environment
- Vercel Analytics is enabled through the globally mounted `Analytics` component in `layout.tsx`
- Production readiness depends on setting required env vars in Vercel project settings

## 9) Current State Summary

### Working

- Core pages: Home, About, Projects, Blog list, Blog detail, Contact
- Dynamic project routes and canonical metadata
- Dynamic blog routes and canonical metadata
- Legacy blog URL compatibility redirect
- Path-aware global navigation with Home shortcut on non-home pages
- Reusable highlighted code block UI for project preview/detail
- Reusable blog/project featured cards with thumbnail-like code previews
- Contact form validation + anti-spam + optional Resend integration
- Contact emails include styled HTML summary plus plain-text fallback
- Date display now uses inline `Intl.DateTimeFormat` at render sites
- Subtle motion layer with reduced-motion support
- Mobile drawer navigation and full-width mobile shell behavior are implemented
- UI-facing strings are centralized in locale dictionaries to support bilingual rollout
- Vercel Analytics integration is active for deployed traffic monitoring

### In Progress / Planned

- Full bilingual content split (EN/SK currently share one content object; translation values still pending)
- Additional real blog posts
- Potential migration to MDX if long-form writing expands
- Stronger anti-abuse protections (rate limiting / abuse scoring)
- Final content polish and production QA pass (manual Lighthouse/device verification)

## 10) Maintenance Rules

When making architectural or product-level changes, update this file in the same PR/session. At minimum, update:

- stack/version assumptions
- routing and URL patterns
- metadata behavior
- serverless integrations and env requirements
- major UI system decisions
- deployment assumptions and operational caveats
