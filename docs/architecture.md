# Portfolio Architecture

Last updated: 2026-02-14

This document is the technical source of truth for this portfolio codebase. Keep it updated whenever architecture, routing, content flow, integrations, or deployment assumptions change.

## 1) Project Overview

- **Type**: Personal/portfolio web application
- **Framework**: Next.js (App Router)
- **Runtime model**: Static-first pages with selective server-side behavior (contact form server action)
- **Primary goal**: Present projects, development logs, and personal profile with high clarity, low operational complexity, and clean maintainability
- **Current phase**: Mid-to-late build (core pages complete, polishing and production wiring in progress)

## 2) Technology Stack

- **Next.js** `16.1.6`
- **React / React DOM** `19.2.3`
- **TypeScript** `^5` with strict mode
- **Tailwind CSS** `^4` via `@tailwindcss/postcss`
- **ESLint** `^9` with `eslint-config-next` core-web-vitals and TypeScript presets
- **Fonts**: `next/font` with Geist + Geist Mono
- **Image optimization**: `next/image`
- **Image delivery tuning**: AVIF/WebP output enabled in Next config, plus responsive sizing/quality strategy on gallery images

No database and no CMS are used currently. Content is authored in TypeScript source files and bundled at build-time.

## 3) High-Level Architecture

### 3.1 App Router Structure

- `src/app/layout.tsx`
  - Global shell (navigation + metadata)
  - `metadataBase` derived from `NEXT_PUBLIC_SITE_URL` fallback to localhost
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
- `src/app/components/site-nav.tsx`
  - Path-aware navigation with conditional Home link on non-home routes
- `src/app/components/code-block.tsx`
  - Reusable highlighted code display surface with compact/full variants
- `src/app/components/blog-post-card.tsx`
  - Reusable blog preview card used in blog listing and homepage featured section
- `src/app/components/project-post-card.tsx`
  - Reusable project preview card used in projects listing and homepage featured section

### 3.2 Content Architecture

- Home page content source: `src/app/content.ts`
  - Typed data model (`HomeContent`, locale-ready structure)
  - `defaultLocale` and locale map (currently EN + SK map to same content object)
- Blog content source:
  - `src/content/blog/types.ts` for schema
  - `src/content/blog/index.ts` for index and lookup
  - `src/content/blog/posts/development-log.ts` for actual post content
- Project content source:
  - `src/content/projects/types.ts` for schema
  - `src/content/projects/index.ts` for index and lookup
  - `src/content/projects/portfolio-project.ts` for current real project entry

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
- Post-level metadata generated in `blog/[slug]/page.tsx`
  - `title`
  - `description`
  - `alternates.canonical`
  - Open Graph article metadata
- Project-level metadata generated in `projects/[slug]/page.tsx`
  - Same canonical + Open Graph approach for project detail pages

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
  - Colorized token rendering
  - Window-style header accents
  - Line numbers and gradient surface
  - Used in project previews and detail examples

### 5.2 Layout Behavior

- Wider max container (`max-w-6xl` to `xl:max-w-7xl`) to reduce over-constrained center-column feel on large displays
- Home page uses mixed stacked + grid composition to improve horizontal rhythm
- Home page includes horizontal featured presentation for both projects and blog content using shared card components with code previews
- Photo gallery is a horizontal snap rail with modal enlargement on click
- Gallery image delivery is tuned for Lighthouse performance: only first thumbnail is eager/high-priority, other thumbnails are lazy-loaded, and thumbnail/modal quality is explicitly controlled

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
- Logging:
  - Logs incoming submission payload and validation context
  - Logs spam-block and delivery outcomes

### 6.3 Delivery Integration (Resend)

- Resend API is called via `fetch` to `https://api.resend.com/emails`
- Env vars:
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL` (optional fallback)
- Graceful behavior when env vars are missing:
  - form validates
  - response shows `queued` status instead of crashing

## 7) Environment Variables

Current app assumptions:

- `NEXT_PUBLIC_SITE_URL` for canonical base URL
- `RESEND_API_KEY` for sending email
- `CONTACT_TO_EMAIL` destination inbox
- `CONTACT_FROM_EMAIL` optional sender identity

## 8) Deployment Model (Vercel)

- Intended deployment target: Vercel
- Pages are mostly static/server-rendered by Next runtime as needed
- Contact form server action runs in serverless environment
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
- Subtle motion layer with reduced-motion support

### In Progress / Planned

- Full bilingual content split (EN/SK currently share one content object)
- Additional real blog posts
- Potential migration to MDX if long-form writing expands
- Stronger anti-abuse protections (rate limiting / abuse scoring)
- Final content polish and production QA pass

## 10) Maintenance Rules

When making architectural or product-level changes, update this file in the same PR/session. At minimum, update:

- stack/version assumptions
- routing and URL patterns
- metadata behavior
- serverless integrations and env requirements
- major UI system decisions
- deployment assumptions and operational caveats
