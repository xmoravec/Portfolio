import type { ProjectPost } from "./types";

export const acquamareaProjectPost: ProjectPost = {
  slug: "premium-showroom-website-case-study",
  title: "Premium Showroom Website Case Study",
  subtitle:
    "A multilingual-ready showroom web platform focused on fast navigation, high-impact visual presentation, and reliable lead capture.",
  date: "2026-02-15",
  readTime: "7 min read",
  summary:
    "A production-focused Next.js build for a premium bathroom studio, with a strong visual-first homepage, dedicated service/gallery/contact routes, and a hardened contact API.",
  externalReference: {
    label: "acquamarea.sk",
    href: "https://acquamarea.sk",
  },
  tags: ["Next.js", "React", "TypeScript", "Tailwind", "Resend", "UX"],
  previewCode: `function validateContactForm(input: {
  name: string;
  email: string;
  message: string;
}) {
  const errors: Partial<Record<keyof typeof input, string>> = {};

  if (!input.name.trim()) errors.name = "Name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (input.message.trim().length < 5) {
    errors.message = "Message must be at least 5 characters.";
  }

  return errors;
}`,
  goals: [
    "Deliver a polished marketing website where imagery, readability, and conversion paths are equally prioritized.",
    "Keep the implementation lean and maintainable using App Router conventions, typed metadata, and reusable component patterns.",
    "Implement practical production behavior: responsive navigation, gallery lightbox, contact validation, and API-backed email delivery.",
  ],
  architecture: [
    "App Router structure with dedicated route segments for home, services, gallery, cooperations, contact, and privacy pages.",
    "Route-level metadata and a generated sitemap to improve discoverability and keep SEO fundamentals in source control.",
    "Tailwind styling with global design tokens, shared layout shell (Header + Footer), and utility-driven section composition.",
    "Client-side interaction islands where needed (hero slideshow, mobile drawer, gallery modal, contact form state management).",
    "Server-side contact pipeline via an API route using Resend, with environment-aware fallback behavior in non-configured contexts.",
  ],
  shippedFeatures: [
    "Rotating hero slideshow with timed transitions, route-driven CTAs, and optimized image loading on the homepage.",
    "Responsive header with a desktop navigation bar and a mobile side-panel menu with open/close state handling.",
    "Interactive gallery grid with a click-to-expand lightbox modal for browsing high-resolution visualization assets.",
    "Contact flow with client-side field validation and backend email dispatch through a dedicated /api/contact endpoint.",
    "Partner section rendering external brand logos via a generated Logo.dev URL strategy with optional token support.",
    "Placeholder article image in use for now: /visualizations/viz5/panska-01.jpg (to be replaced with dedicated screenshots later).",
  ],
  currentFocus: [
    "Content hardening pass to remove remaining generic template language and tighten service-specific messaging.",
    "UI consistency pass across pages (spacing, headings, and typography rhythm) while preserving the existing visual identity.",
    "Operational polish: stronger API input validation, safer HTML email rendering, and final production environment checks.",
  ],
  codeSamples: [
    {
      title: "api-handler-pattern.ts",
      code: `export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    await deliverMessage({ email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}`,
    },
    {
      title: "ui-toggle-state.tsx",
      code: `export default function MobilePanel() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      onClick={togglePanel}
    >
      {isOpen ? "Close" : "Open"}
    </button>
  );
}`,
    },
  ],
};
