export type BlogPostPreview = {
  title: string;
  href: string;
  publishedAt: string;
  summary: string;
};

export type Locale = "en" | "sk";

export type HomeContent = {
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
    items: { src: string; alt: string; title: string; subtitle: string }[];
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
    hero: {
      eyebrow: "Personal Site",
      title: "Hi, I’m Erik Moravec. I design and build exciting software that solves real problems. Or is just fun.",
      description:
        "This site is about me, my projects, my thoughts and notes. Stay if you are interested in what I am building right now or checkout my lab for some fun (Coming, under construction).",
      primaryCta: { label: "About Me", href: "/about" },
      secondaryCta: { label: "What I’m Doing Now", href: "/about#now" },
    },
    intro: {
      title: "A bit about me",
      paragraphs: [
        "I enjoy turning rough ideas into reliable, understandable products. My default approach is to optimize for clarity first, then iterate on depth.",
        "Alongside project work, I write development logs that capture architecture decisions, trade-offs, and what is still unfinished.",
      ],
    },
    photos: {
      title: "Photos",
      items: [
        {
          src: "/images/photos/profile_picture_portugal_chair.jpg",
          alt: "Personal portrait seated outdoors",
          title: "Travel",
          subtitle: "Cintra, Portugal",
        },
        {
          src: "/images/photos/profile_picture_shirt_old.jpg",
          alt: "Personal portrait in shirt",
          title: "Portrait",
          subtitle: "Courtesy of Ján Dovjak",
        },
        {
          src: "/images/photos/oktoberfest_table.jpg",
          alt: "Social table moment",
          title: "Community",
          subtitle: "Friends are the spice of life",
        },
        {
          src: "/images/photos/brooklyn_bridge.jpg",
          alt: "Brooklyn Bridge city view",
          title: "Places",
          subtitle: "Movement, Exploration, and perspective",
        },
      ],
    },
    now: {
      title: "Now",
      summary:
        "Currently refining this portfolio into a production-ready baseline: stronger content quality, cleaner UX, and tighter implementation details.",
      lastUpdated: "2026-02-14",
      cta: { label: "Read current focus", href: "/about#now" },
    },
    writing: {
      title: "Engineering Notes",
      posts: [
        {
          title: "Portfolio Engineering Log: Current Technical Snapshot",
          href: "/blog/portfolio-development-log",
          publishedAt: "2026-02-14",
          summary: "Architecture, stack decisions, shipped functionality, and open engineering tasks from the current codebase.",
        },
      ],
    },
    explore: {
      title: "Explore More",
      description:
        "Projects hold implementation-facing notes and case-study context, while the blog tracks development state over time.",
      links: [
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
      ],
    },
    contact: {
      title: "Let’s connect",
      description: "Open to collaboration, product conversations, and thoughtful feedback.",
      cta: { label: "Open contact", href: "/contact" },
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
