export type ProjectCodeSample = {
  title: string;
  code: string;
};

export type ProjectPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  summary: string;
  externalReference?: {
    label: string;
    href: string;
  };
  tags: string[];
  previewCode: string;
  goals: string[];
  architecture: string[];
  shippedFeatures: string[];
  currentFocus: string[];
  codeSamples: ProjectCodeSample[];
};
