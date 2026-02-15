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
    localeSwitcherAria: string;
    localeEnLabel: string;
    localeSkLabel: string;
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
