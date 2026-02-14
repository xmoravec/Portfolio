import { defaultLocale, type Locale } from "../content";

export type UiText = {
  metadata: {
    description: string;
    postNotFoundTitle: string;
    projectNotFoundTitle: string;
  };
  common: {
    lastUpdatedLabel: string;
  };
  nav: {
    primaryAria: string;
    home: string;
    projects: string;
    blog: string;
    about: string;
    contact: string;
    menu: string;
    openMenuAria: string;
    closeMenuAria: string;
    mobileNavAria: string;
  };
  home: {
    photoHint: string;
    featuredTitle: string;
    featuredSubtitle: string;
  };
  about: {
    title: string;
    portraitAlt: string;
    introFirst: string;
    introSecond: string;
    nowTitle: string;
    nowFirst: string;
    nowSecond: string;
  };
  blog: {
    pageTitle: string;
    pageDescription: string;
    readArticle: string;
    backToBlog: string;
  };
  projects: {
    pageTitle: string;
    pageDescription: string;
    openProjectDetail: string;
    backToProjects: string;
    intentTitle: string;
    architectureTitle: string;
    shippedTitle: string;
    implementationTitle: string;
    implementationDescription: string;
    focusTitle: string;
  };
  photos: {
    openPhotoDetailsPrefix: string;
    closeViewerAria: string;
  };
  contact: {
    title: string;
    description: string;
    formTitle: string;
    formDescription: string;
    channelsTitle: string;
    fields: {
      name: string;
      email: string;
      message: string;
      honeypot: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    submitLabel: string;
    feedback: {
      sent: string;
      queued: string;
      spam: string;
      email: string;
      message: string;
      delivery: string;
      missing: string;
    };
    channels: {
      email: string;
      github: string;
      linkedIn: string;
      facebook: string;
    };
  };
};

const enUiText: UiText = {
  metadata: {
    description: "Personal website with projects, writing, and current focus.",
    postNotFoundTitle: "Post not found | Erik Moravec",
    projectNotFoundTitle: "Project not found | Erik Moravec",
  },
  common: {
    lastUpdatedLabel: "Last updated",
  },
  nav: {
    primaryAria: "Primary",
    home: "Home",
    projects: "Projects",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    openMenuAria: "Open navigation menu",
    closeMenuAria: "Close navigation menu",
    mobileNavAria: "Mobile navigation",
  },
  home: {
    photoHint: "Tap any photo to open a larger view.",
    featuredTitle: "Featured Work and Writing",
    featuredSubtitle: "Curated entries with live technical previews.",
  },
  about: {
    title: "About Me",
    portraitAlt: "Portrait",
    introFirst:
      "I build software with a bias toward clarity: understandable architecture, honest trade-offs, and execution that can be maintained over time.",
    introSecond:
      "This website is both portfolio and working notebook, combining selected project outcomes with development logs from active iterations.",
    nowTitle: "Now",
    nowFirst:
      "I am currently pushing this site from mid-stage into a near-finished baseline with stronger layout decisions, tighter writing, and better interaction polish.",
    nowSecond:
      "In parallel, I am documenting project work in a more technical case-study style that explains architecture choices, constraints, and implementation details.",
  },
  blog: {
    pageTitle: "Writing and Notes",
    pageDescription:
      "Technical snapshots and decision logs from building this portfolio and related software work.",
    readArticle: "Read article",
    backToBlog: "← Back to main blog page",
  },
  projects: {
    pageTitle: "Projects",
    pageDescription:
      "Real project write-ups only. Each entry opens a technical detail page with architecture notes, shipped features, and implementation examples.",
    openProjectDetail: "Open project detail",
    backToProjects: "← Back to projects",
    intentTitle: "Project Intent",
    architectureTitle: "Architecture Snapshot",
    shippedTitle: "Shipped Feature Set",
    implementationTitle: "Implementation Examples",
    implementationDescription:
      "Reusable code surfaces mirror the style used in project previews and deeper technical pages.",
    focusTitle: "Current Focus",
  },
  photos: {
    openPhotoDetailsPrefix: "Open photo details for",
    closeViewerAria: "Close photo viewer",
  },
  contact: {
    title: "Let’s Connect",
    description:
      "Reach out for collaboration, technical discussion, or project feedback. This form is wired with server-side validation, anti-spam checks, and optional Resend delivery.",
    formTitle: "Send a Message",
    formDescription:
      "You can use this for project inquiries, freelance collaboration, or detailed technical questions.",
    channelsTitle: "Contact Channels",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message",
      honeypot: "Company",
    },
    placeholders: {
      name: "Your name",
      email: "you@example.com",
      message: "Tell me about your project or question",
    },
    submitLabel: "Send Message",
    feedback: {
      sent: "Message sent successfully. Thanks for reaching out.",
      queued:
        "Message validated. Delivery service is not configured yet, so it was not emailed.",
      spam: "Submission blocked by anti-spam checks. Please try again.",
      email: "Please use a valid email address.",
      message: "Please provide a message between 10 and 3000 characters.",
      delivery: "Validation passed, but delivery failed. Please retry shortly.",
      missing: "Please fill in all fields before sending.",
    },
    channels: {
      email: "Email",
      github: "GitHub",
      linkedIn: "LinkedIn",
      facebook: "Facebook",
    },
  },
};

export const uiTextByLocale: Record<Locale, UiText> = {
  en: enUiText,
  sk: enUiText,
};

export function getUiText(locale: string): UiText {
  if (locale in uiTextByLocale) {
    return uiTextByLocale[locale as Locale];
  }

  return uiTextByLocale[defaultLocale];
}
