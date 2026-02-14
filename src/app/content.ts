export type NavItem = {
  label: string;
  href: string;
};

export type BlogPostPreview = {
  title: string;
  href: string;
  publishedAt: string;
  summary: string;
};

export type Locale = "en" | "sk";

export type HomeContent = {
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  intro: {
    title: string;
    paragraphs: string[];
  };
  photos: {
    title: string;
    slots: { title: string; subtitle: string }[];
  };
  now: {
    title: string;
    summary: string;
    lastUpdated: string;
    cta: { label: string; href: string };
  };
  writing: {
    title: string;
    posts: BlogPostPreview[];
  };
  explore: {
    title: string;
    description: string;
    links: { label: string; href: string }[];
  };
  contact: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
  footer: {
    githubLabel: string;
    githubHref: string;
    githubHandle: string;
  };
};

export const defaultLocale: Locale = "en";

const enHomeContent: HomeContent = {
    nav: [
      { label: "Projects", href: "/projects" },
      { label: "Technologies", href: "/technologies" },
      { label: "Blog", href: "/blog" },
      { label: "Now", href: "/now" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      eyebrow: "Personal Website",
      title: "Hi, I’m Xavier. I build, learn, and share what I’m exploring.",
      description:
        "Welcome to my corner of the internet. This is where I keep personal notes, current focus, and selected work in one place.",
      primaryCta: { label: "About Me", href: "/about" },
      secondaryCta: { label: "What I’m Doing Now", href: "/now" },
    },
    intro: {
      title: "A bit about me",
      paragraphs: [
        "I enjoy turning rough ideas into clean and usable products. I care about practical outcomes, readable code, and steady progress.",
        "Outside of project work, I like writing short reflections on process, decisions, and things I’m currently learning.",
      ],
    },
    photos: {
      title: "Photos",
      slots: [
        { title: "Portrait", subtitle: "Photo placeholder" },
        { title: "Everyday", subtitle: "Photo placeholder" },
        { title: "Workspace", subtitle: "Photo placeholder" },
      ],
    },
    now: {
      title: "Now",
      summary:
        "Currently refining this personal site and preparing a future photo slideshow section for the homepage.",
      lastUpdated: "2026-02-14",
      cta: { label: "Open Now Page", href: "/now" },
    },
    writing: {
      title: "Latest Writing",
      posts: [
        {
          title: "How I Keep Personal Projects Moving",
          href: "/blog/how-i-keep-personal-projects-moving",
          publishedAt: "2026-02-11",
          summary: "A lightweight planning rhythm that helps me ship consistently.",
        },
        {
          title: "Notes on Better Focus",
          href: "/blog/notes-on-better-focus",
          publishedAt: "2026-01-30",
          summary: "Simple constraints I use to reduce context switching.",
        },
      ],
    },
    explore: {
      title: "Explore More",
      description:
        "Projects and technology details live on dedicated pages so the homepage stays personal and simple.",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "Technologies", href: "/technologies" },
      ],
    },
    contact: {
      title: "Let’s connect",
      description: "If you want to reach out, send me a message through the contact page.",
      cta: { label: "Contact", href: "/contact" },
    },
    footer: {
      githubLabel: "GitHub",
      githubHref: "https://github.com/xmoravec",
      githubHandle: "@xmoravec",
    },
  };

export const homeContentByLocale: Record<Locale, HomeContent> = {
  en: enHomeContent,
  sk: enHomeContent,
};

export function getHomeContent(locale: string): HomeContent {
  if (locale in homeContentByLocale) {
    return homeContentByLocale[locale as Locale];
  }
  return homeContentByLocale[defaultLocale];
}
