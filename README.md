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
- Blog page

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

## Next Concrete Steps

1. Scaffold and deploy the Portfolio (Project 1) to Vercel.

## NextJS

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact Form (Serverless + Resend)

The contact form is wired through a server action and can send email through Resend when environment variables are set.

Set these in Vercel project envs (and optionally local `.env.local`):

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (optional, defaults to `Portfolio Contact <onboarding@resend.dev>`)
- `NEXT_PUBLIC_SITE_URL` (used for canonical metadata, e.g. `https://yourdomain.com`)

If Resend variables are not configured, the form still validates and responds safely without crashing.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
