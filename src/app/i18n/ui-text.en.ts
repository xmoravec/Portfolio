import type { UiText } from "./ui-text.types";

export const enUiText: UiText = {
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
    localeSwitcherAria: "Switch language",
    localeEnLabel: "EN",
    localeSkLabel: "SK",
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
