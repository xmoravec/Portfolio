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
    readFullAbout: string;
    readFullNow: string;
  };
  about: {
    title: string;
    portraitAlt: string;
    introFirst: string;
    introSecond: string;
    nowTitle: string;
    nowFirst: string;
    nowSecond: string;
    experienceTitle: string;
    experienceDescription: string;
    experienceItems: Array<{
      role: string;
      company: string;
      period: string;
      location: string;
      mode: string;
      summary: string;
    }>;
    supportTitle: string;
    supportDescription: string;
    supportButtonLabel: string;
    supportCaption: string;
  };
  blog: {
    pageTitle: string;
    pageDescription: string;
    timelineTitle: string;
    timelineDescription: string;
    badgeLabel: string;
    publishedLabel: string;
    readArticle: string;
    backToBlog: string;
  };
  projects: {
    pageTitle: string;
    pageDescription: string;
    badgeLabel: string;
    openProjectDetail: string;
    backToProjects: string;
    publicReferenceLabel: string;
    intentTitle: string;
    architectureTitle: string;
    shippedTitle: string;
    implementationTitle: string;
    implementationDescription: string;
    focusTitle: string;
    copyCode: string;
    copiedCode: string;
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
    menu: "XMoravec",
    openMenuAria: "Open navigation menu",
    closeMenuAria: "Close navigation menu",
    mobileNavAria: "Mobile navigation",
  },
  home: {
    photoHint: "Tap any photo to open a larger view.",
    featuredTitle: "Featured Work and Writing",
    featuredSubtitle: "Curated entries with live technical previews.",
    readFullAbout: "Read full about section",
    readFullNow: "Read current focus",
  },
  about: {
    title: "About Me",
    portraitAlt: "Portrait",
    introFirst:
      "I build software with an emphasis on code quality, readability, and choosing the right tools for the right job. My philosophy is to stay pragmatic and open-minded about using whatever best serves the project and its users. On a practical level, this lets me gather broad experience across programming languages and technology stacks. On a personal level, learning and trying new things is what keeps technology fun for me. I also think this approach is more accessible and increasingly necessary in the age of AI and vibe coding.",
    introSecond:
      "This website is both my portfolio and a personal working notebook.",
    nowTitle: "Now",
    nowFirst:
      "I am actively working as a contractor and freelancer. I cooperate with companies like InfoBeans and DHL IT Services on complex software design and delivery. I also work with civilian and business clients to develop personalized web and software solutions.",
    nowSecond:
      "In my free time, I am pushing this site from mid-stage into a near-finished baseline with stronger layout decisions, tighter writing, and better interaction polish. In parallel, I am documenting project work in the blog and planning my next trip.",
    experienceTitle: "Experience Timeline",
    experienceDescription:
      "A simplified, chronological overview of roles that shaped my software engineering approach.",
    experienceItems: [
      {
        role: "Senior Software Engineer",
        company: "InfoBeans",
        period: "Sep 2025 — Present",
        location: "Prague, Czechia",
        mode: "Hybrid",
        summary:
          "Advanced software development, analysis, and delivery. Working primarily as an external contractor for DHL IT Services.",
      },
      {
        role: "Software Engineer",
        company: "InfoBeans",
        period: "Sep 2024 — Sep 2025",
        location: "Prague, Czechia",
        mode: "Hybrid",
        summary:
          "Focused on software infrastructure and implementation quality across delivery-oriented projects.",
      },
      {
        role: "ServiceNow Consultant",
        company: "InfoBeans",
        period: "Oct 2021 — Jan 2025",
        location: "Prague, Czechia",
        mode: "Hybrid",
        summary:
          "External contractor role for DHL IT Services, covering platform consulting and software engineering support.",
      },
      {
        role: "Programming Seminar Tutor",
        company: "Masaryk University Brno",
        period: "Feb 2019 — Jun 2023",
        location: "Brno, Czech Republic",
        mode: "On-site",
        summary:
          "Taught computer science students fundamentals of programming with Python and low-level programming in C.",
      },
      {
        role: "Testing Specialist",
        company: "Sygic",
        period: "Sep 2019 — Sep 2020",
        location: "Brno, Czech Republic",
        mode: "On-site",
        summary:
          "QA and development collaboration on a globally used product.",
      },
    ],
    supportTitle: "Support My Work",
    supportDescription:
      "If my projects, writing, or open sharing helped you in any way, your support means a lot and helps me keep building.",
    supportButtonLabel: "Buy me a coffee on Revolut",
    supportCaption: "Thank you, really. I appreciate every bit of support.",
  },
  blog: {
    pageTitle: "Blog",
    pageDescription:
      "I love writing. Read about my thoughts, technical deep-dives and adventures.",
    timelineTitle: "Development Timeline",
    timelineDescription:
      "Current sequence: initial baseline (14-02-2026), then a later-stage milestone update (15-02-2026).",
    badgeLabel: "Blog",
    publishedLabel: "Published",
    readArticle: "Read article",
    backToBlog: "← Back to main blog page",
  },
  projects: {
    pageTitle: "Projects",
    pageDescription:
      "Real project write-ups. Each article opens up about the technical details, architecture notes, shipped features, and code snippet examples.",
    badgeLabel: "Project",
    openProjectDetail: "Open project detail",
    backToProjects: "← Back to projects",
    publicReferenceLabel: "Public project reference",
    intentTitle: "Project Intent",
    architectureTitle: "Architecture Snapshot",
    shippedTitle: "Shipped Feature Set",
    implementationTitle: "Implementation Examples",
    implementationDescription:
      "Reusable code surfaces mirror the style used in project previews and deeper technical pages.",
    focusTitle: "Current Focus",
    copyCode: "Copy",
    copiedCode: "Copied",
  },
  photos: {
    openPhotoDetailsPrefix: "Open photo details for",
    closeViewerAria: "Close photo viewer",
  },
  contact: {
    title: "Contact Me",
    description:
      "Reach out for collaboration, technical discussion, project feedback or friendly conversation. You can use the form below or contact me through the channels listed.",
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
      message: "Tell me what your heart desires",
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
