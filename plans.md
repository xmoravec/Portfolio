## Personal Projects: Portfolio & Playground

This document captures my preliminary technical specification and plan for two related personal projects:

- **Project 1 – Professional Portfolio**: A fast, reliable "calling card" for my work.
- **Project 2 – Playground (Lab)**: A technical sandbox for games, real‑time experiments, and LLM tools.

---

## Project 1: Professional Portfolio

### Goal

Build a high-speed, sleek portfolio site that showcases my skills, resume, and key projects, and serves as the stable public face of my work.

### Tech Stack

- **Frontend**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (for a clean, professional look)
- **Content**: Markdown/MDX for blog posts and project pages
- **Deployment**: Vercel (automated builds, global CDN, free tier)

### Architecture & Approach

- Prefer **Static Site Generation (SSG)** for instant load times and reliability.
- Use **serverless functions only when necessary**, e.g. for a contact form.
- Keep the overall system **static and simple** to maximize uptime and minimize operational overhead.

### Content & UX Plan

- **"Now" page** describing what I am currently learning or working on.
- **Interactive project cards** with live previews or small interactive snippets instead of static screenshots.
- Clear **links into the Playground/Lab** for experimental or in‑progress projects.
- **Tech stack explanation**: not just logos, but short notes on *why* I chose each tool.

### Auth / Admin Strategy

- Avoid user-facing login for the public portfolio.
- If I need content management, build a **lightweight admin panel** for myself:
	- Auth-protected CMS-like UI.
	- Ability to create/edit blog posts and project entries without redeploying code.

### Initial Implementation Plan

1. Initialize the app with `npx create-next-app@latest` using the App Router.
2. Set up Tailwind CSS and shadcn/ui.
3. Deploy the boilerplate to Vercel as early as possible.
4. Add core pages: Home, Projects, Blog, Now, and a Contact or About page.

### Critical Pitfalls to Avoid

- **Over-engineering**
	- Do not add a database or complex state management for the public site.
	- Keep it static-first for simplicity and 100% uptime.
- **Design bloat**
	- Avoid heavy animations or unnecessary effects that hurt Lighthouse performance and perceived speed.

---

## Project 2: The Playground (Lab)

### Goal

Create a technical sandbox where I can experiment with:

- Browser games
- Real-time WebSocket features
- LLM-based tools
- Authentication and multi-user experiences

### Tech Stack

- **Frontend**: Next.js (hosted on Vercel or on the VPS)
- **Backend**: FastAPI (Python) for async performance and clean API design
- **Database**: MongoDB Atlas (Free Tier)
- **Real-time**: WebSockets via native FastAPI support or Socket.io
- **Infrastructure**: Hetzner or DigitalOcean VPS (roughly $4–6/month) using Docker
- **Reverse Proxy**: Caddy for automatic HTTPS and simple configuration

### Architecture & Design

- **Decoupled frontend and backend**:
	- FastAPI handles all core logic and database access.
	- Next.js handles UI, routing, and client interactions.
- **Game and app state lives on the backend**:
	- Frontend sends user actions.
	- Backend computes state, validates input, and broadcasts updates.
- **WebSocket heartbeat mechanism** to detect dropped connections and clean up resources.

### Planned Experiments / Features

- **Wordle-style game (Phase 1 – REST)**
	- Implement initial version using simple REST APIs.
	- Persist scores and game results in MongoDB.

- **Multiplayer Snake (Phase 2 – WebSockets)**
	- Move to real-time state sync using WebSockets.
	- Keep the Python backend as the source of truth for all game logic.

- **LLM "Buddy" (Commentator / Helper)**
	- Use the Groq API for fast, inexpensive inference instead of self-hosting models.
	- Integrate as an in-game or in-app assistant with a sarcastic/commentator tone.

### React + Python Integration Plan

- **Shared Types**
	- Define all request/response schemas with Pydantic on the FastAPI backend.
	- Automatically generate TypeScript interfaces from these models so the frontend and backend share a single source of truth.

- **WebSocket Flow**
	- React client opens a persistent WebSocket connection to a FastAPI endpoint.
	- Backend manages game state, validates moves, and broadcasts updates (e.g. "letter correct" in a Wordle clone).
	- Use heartbeats/timeouts to detect and close stale connections to prevent memory leaks.

- **Authentication**
	- Use FastAPI Users (or similar) for backend user management.
	- Use NextAuth.js (or standard JWT flows) on the frontend for session handling.
	- Ensure tokens and session data are compatible between the two.

### Infrastructure & Deployment Plan

- **Local / Cloud Dev**
	- Start using Railway.app for development and early experiments.
	- Rationale: first-class support for Python + WebSockets, generous free tier, and no need to manage a full Linux server initially.

- **VPS Setup (Scaling / Long-Term)**
	- When traffic or complexity justifies it, move to a VPS (Hetzner or DigitalOcean) for full control and better handling of many persistent WebSocket connections.
	- Use Docker to containerize FastAPI, Caddy, and other services.
	- Configure Caddy as the reverse proxy to terminate TLS and route traffic.

- **docker-compose baseline**
	- Define a `docker-compose.yml` that at minimum includes:
		- A FastAPI service.
		- A Caddy service configured as a reverse proxy with automatic HTTPS.
	- Verify the setup via SSH with a simple "Hello World" endpoint exposed over HTTPS.

### Critical Pitfalls to Avoid

- **CORS issues**
	- The Portfolio and Playground will often live on different origins.
	- Correctly configure `fastapi.middleware.cors` (allowed origins, methods, and headers) early.
	- Misconfigured CORS will break login flows and API calls in subtle ways.

- **Memory leaks and resource misuse**
	- Always close WebSocket connections when clients disconnect.
	- Use heartbeats and timeouts to detect dropped clients.

- **State synchronization problems**
	- Do not calculate complex game logic on the frontend.
	- Keep the Python backend as the single source of truth for state; the frontend should only render and submit player actions.

### Content & Engagement Ideas (Playground)

- **Leaderboards**
	- Use MongoDB to store global high scores for games like the Wordle clone.
	- Display leaderboards prominently to add a social/competitive element.

- **LLM Chatbot "Buddy"**
	- Small in-game chat window where the LLM comments on gameplay or offers hints.
	- Keep the tone playful/sarcastic to differentiate it from a generic chatbot.

- **Dev Log**
	- A public or hidden "Dev Log" page that records technical hurdles, design decisions, and architecture changes.
	- Useful both for personal reflection and for showing how I think through problems.

---

## Comparison & Integration Strategy

### Domain and Routing

- **Portfolio**: `yourname.com`
- **Playground/Lab**: `lab.yourname.com` (subdomain)

This separation ensures that if the Playground or VPS goes down during heavy experiments, the Portfolio remains unaffected and fully available.

### Cross-Project Integration

- Prominent **links from Portfolio projects into the Lab** for live demos.
- Clear indication on the Portfolio that the Lab is experimental and may be less stable.

### CORS and Cross-Origin Architecture

- Expect CORS challenges whenever the Next.js frontend and FastAPI backend live on different domains.
- Plan from the beginning to:
	- Configure `fastapi.middleware.cors` correctly.
	- Explicitly list allowed origins (Portfolio and Playground domains) instead of using wildcards in production.
	- Test login and authenticated flows with production-like URLs early to avoid losing time debugging CORS.

### Monetization Strategy

- **Avoid ads for now**
	- Google AdSense typically requires significant content and traffic before approval.
	- Ads would also degrade the experience for a small audience.

- **Alternative monetization options**
	- Add a simple "Buy Me a Coffee" (or similar) donation link.
	- For any LLM tools that become genuinely useful:
		- Offer a "Premium" or power-user mode where users supply their own API keys.
		- This keeps infrastructure light while enabling higher usage.

---

## Content & UX Checklist (Both Projects)

- **Interactive project cards** on the Portfolio with live previews or inline demos.
- **Now page** to show my current focus and learning.
- **Tech stack visualization** that explains why certain tools are used, not just which ones.
- **Clear navigation** between the professional Portfolio and the experimental Playground.

---

## Additional Ideas & Implementation Tips

### Observability & Quality

- Add basic **logging and metrics** for the FastAPI backend (request logs, error tracking, WebSocket connection counts).
- Consider integrating a lightweight error tracker (e.g. Sentry) once the Playground becomes more complex.
- Write focused tests for:
	- Core game logic (pure Python functions / services).
	- Critical API endpoints and auth flows.

### Developer Experience & Workflow

- Use separate **environments** (dev, staging, production) where possible, especially for DBs and API keys.
- Keep secrets (API keys, DB URIs) out of the repo using environment variables and a `.env` strategy.
- Decide early between a **monorepo** (Portfolio + Playground in one repo) or **separate repos**, and structure CI/CD accordingly.

### Performance & Accessibility

- For the Portfolio:
	- Regularly run Lighthouse audits and keep scores high.
	- Follow basic accessibility practices (semantic HTML, focus states, ARIA where needed).

- For the Playground:
	- Be mindful of CPU usage and browser performance for real-time games.
	- Throttle or debounce client updates where appropriate.

### Data & Evolution

- Plan for **schema evolution** in MongoDB (version fields, migrations scripts where needed).
- Keep a simple **CHANGELOG or Dev Log** for major changes to APIs and game rules.

---

## Next Concrete Steps

1. Scaffold and deploy the Portfolio (Project 1) to Vercel.
2. Stand up a minimal FastAPI + Caddy stack via Railway or a VPS using `docker-compose`.
3. Implement the first Wordle-style game end-to-end (REST-based) with persistence.
4. Add WebSocket support and iterate toward real-time multiplayer features.