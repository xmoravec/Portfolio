import type { UiText } from "./ui-text.types";

export const skUiText: UiText = {
  metadata: {
    description: "Osobný web s projektmi, písaním a aktuálnym zameraním.",
    postNotFoundTitle: "Článok nenájdený | Erik Moravec",
    projectNotFoundTitle: "Projekt nenájdený | Erik Moravec",
  },
  common: {
    lastUpdatedLabel: "Naposledy aktualizované",
  },
  nav: {
    primaryAria: "Hlavná navigácia",
    home: "Domov",
    projects: "Projekty",
    blog: "Blog",
    about: "O mne",
    contact: "Kontakt",
    menu: "XMoravec",
    openMenuAria: "Otvoriť navigačné menu",
    closeMenuAria: "Zavrieť navigačné menu",
    mobileNavAria: "Mobilná navigácia",
    localeSwitcherAria: "Prepnúť jazyk",
    localeEnLabel: "EN",
    localeSkLabel: "SK",
  },
  home: {
    photoHint: "Ťukni na fotku pre väčší náhľad.",
    featuredTitle: "Vybrané projekty a články",
    featuredSubtitle: "Kurátorsky vybrané položky s technickými ukážkami.",
    readFullAbout: "Prečítať celú sekciu O mne",
    readFullNow: "Prečítať aktuálne zameranie",
  },
  about: {
    title: "O mne",
    portraitAlt: "Portrét",
    introFirst:
      "Tvorím softvér s dôrazom na kvalitu kódu, čitateľnosť a výber správnych nástrojov pre správnu úlohu. Moja filozofia je pragmatická a otvorená: používam to, čo najlepšie slúži projektu a jeho používateľom. Vďaka tomu zbieram skúsenosti naprieč programovacími jazykmi a technológiami. Osobne ma na technológiách baví neustále učenie a skúšanie nových vecí. Tento prístup je podľa mňa ešte dôležitejší v ére AI a vibe codingu.",
    introSecond:
      "Tento web je zároveň moje portfólio aj osobný pracovný zápisník.",
    nowTitle: "Teraz",
    nowFirst:
      "Aktívne pracujem ako kontraktor a freelancer. Spolupracujem so spoločnosťami ako InfoBeans a DHL IT Services na návrhu a dodávke komplexných softvérových riešení. Zároveň pracujem s civilnými aj business klientmi na personalizovaných webových a softvérových produktoch.",
    nowSecond:
      "Vo voľnom čase posúvam tento web z rozpracovaného stavu na takmer finálny základ s lepším layoutom, kvalitnejším textom a lepším UX. Paralelne dokumentujem prácu na projektoch v blogu a plánujem ďalšiu cestu.",
    experienceTitle: "Časová os skúseností",
    experienceDescription:
      "Zjednodušený chronologický prehľad rolí, ktoré formovali môj inžiniersky prístup.",
    experienceItems: [
      {
        role: "Senior Software Engineer",
        company: "InfoBeans",
        period: "Sep 2025 — súčasnosť",
        location: "Praha, Česko",
        mode: "Hybrid",
        summary:
          "Pokročilý vývoj softvéru, analýza a delivery. Primárne pracujem ako externý kontraktor pre DHL IT Services.",
      },
      {
        role: "Software Engineer",
        company: "InfoBeans",
        period: "Sep 2024 — Sep 2025",
        location: "Praha, Česko",
        mode: "Hybrid",
        summary:
          "Zameranie na softvérovú infraštruktúru a kvalitu implementácie v delivery projektoch.",
      },
      {
        role: "ServiceNow Consultant",
        company: "InfoBeans",
        period: "Okt 2021 — Jan 2025",
        location: "Praha, Česko",
        mode: "Hybrid",
        summary:
          "Externá rola pre DHL IT Services zameraná na platformové konzultácie a podporu softvérového vývoja.",
      },
      {
        role: "Lektor programátorského seminára",
        company: "Masarykova univerzita Brno",
        period: "Feb 2019 — Jún 2023",
        location: "Brno, Česká republika",
        mode: "On-site",
        summary:
          "Učil som študentov informatiky základy programovania v Pythone a nízkoúrovňové programovanie v C.",
      },
      {
        role: "Testing Specialist",
        company: "Sygic",
        period: "Sep 2019 — Sep 2020",
        location: "Brno, Česká republika",
        mode: "On-site",
        summary:
          "QA a spolupráca na vývoji globálne používaného produktu.",
      },
    ],
    supportTitle: "Podpor moju prácu",
    supportDescription:
      "Ak ti moje projekty, články alebo otvorené zdieľanie pomohli, tvoja podpora pre mňa veľa znamená a pomáha mi pokračovať.",
    supportButtonLabel: "Kúp mi kávu cez Revolut",
    supportCaption: "Úprimne ďakujem. Vážim si každú podporu.",
  },
  blog: {
    pageTitle: "Blog",
    pageDescription:
      "Rád píšem. Nájdeš tu moje myšlienky, technické deep-dive články aj zážitky.",
    timelineTitle: "Vývojová časová os",
    timelineDescription:
      "Aktuálna postupnosť: počiatočný baseline (14-02-2026), potom neskorší milestone update (15-02-2026).",
    badgeLabel: "Blog",
    publishedLabel: "Publikované",
    readArticle: "Čítať článok",
    backToBlog: "← Späť na hlavný blog",
  },
  projects: {
    pageTitle: "Projekty",
    pageDescription:
      "Reálne projektové články. Každý z nich otvára technické detaily, architektúrne poznámky, hotové funkcie a ukážky kódu.",
    badgeLabel: "Projekt",
    openProjectDetail: "Otvoriť detail projektu",
    backToProjects: "← Späť na projekty",
    publicReferenceLabel: "Verejný odkaz na projekt",
    intentTitle: "Zámer projektu",
    architectureTitle: "Architektúrny prehľad",
    shippedTitle: "Dodané funkcionality",
    implementationTitle: "Ukážky implementácie",
    implementationDescription:
      "Zdieľané code komponenty kopírujú štýl použitý v náhľadoch projektov a detailných technických stránkach.",
    focusTitle: "Aktuálne zameranie",
    copyCode: "Kopírovať",
    copiedCode: "Skopírované",
  },
  photos: {
    openPhotoDetailsPrefix: "Otvoriť detail fotky",
    closeViewerAria: "Zavrieť prehliadač fotky",
  },
  contact: {
    title: "Kontakt",
    description:
      "Ozvi sa kvôli spolupráci, technickej diskusii, spätnej väzbe na projekt alebo len pre priateľský rozhovor. Môžeš použiť formulár nižšie alebo niektorý z uvedených kontaktov.",
    formTitle: "Poslať správu",
    formDescription:
      "Môžeš to použiť na projektové dopyty, freelance spoluprácu alebo detailné technické otázky.",
    channelsTitle: "Kontaktné kanály",
    fields: {
      name: "Meno",
      email: "Email",
      message: "Správa",
      honeypot: "Firma",
    },
    placeholders: {
      name: "Tvoje meno",
      email: "ty@example.com",
      message: "Napíš, čo máš na srdci",
    },
    submitLabel: "Odoslať správu",
    feedback: {
      sent: "Správa bola úspešne odoslaná. Ďakujem za kontakt.",
      queued:
        "Správa prešla validáciou. Služba na odosielanie ešte nie je nakonfigurovaná, preto email nebol odoslaný.",
      spam: "Odoslanie bolo zablokované anti-spam kontrolami. Skús to prosím znova.",
      email: "Prosím, použi platnú emailovú adresu.",
      message: "Prosím, zadaj správu v rozsahu 10 až 3000 znakov.",
      delivery: "Validácia prešla, ale odoslanie zlyhalo. Skús to prosím o chvíľu znova.",
      missing: "Pred odoslaním prosím vyplň všetky polia.",
    },
    channels: {
      email: "Email",
      github: "GitHub",
      linkedIn: "LinkedIn",
      facebook: "Facebook",
    },
  },
};
