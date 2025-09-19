export type Locale = 'pt' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats: { value: string; label: string }[];
}

export interface FeaturedProjectCard {
  slug: string;
  title: string;
  description: string;
  videoEmbed: string;
  ctaLabel: string;
}

export interface InnovationCard {
  title: string;
  excerpt: string;
  details: string;
}

export interface VideoItem {
  title: string;
  description: string;
  embedUrl: string;
  watchUrl: string;
}

export interface HomeContent {
  navigation: NavItem[];
  hero: HeroContent;
  featuredProjectsHeading: string;
  featuredProjectsDescription: string;
  featuredProjects: FeaturedProjectCard[];
  about: {
    heading: string;
    paragraphs: string[];
    cta: { label: string; href: string };
  };
  innovations: {
    heading: string;
    description: string;
    cards: InnovationCard[];
    githubCta: { label: string; href: string };
  };
  videos: {
    heading: string;
    items: VideoItem[];
  };
  channel: {
    title: string;
    description: string;
    subscribeCta: { label: string; href: string };
    image: string;
    social: { label: string; href: string }[];
  };
  community: {
    title: string;
    description: string;
    cta: { label: string; href: string };
    widgetUrl: string;
  };
}

export interface LegalSection {
  title: string;
  body?: string;
  list?: string[];
}

export interface DownloadListingItem {
  id: string;
  title: string;
  description: string;
  category: string;
  videoEmbed: string;
  tutorial?: { label: string; url: string };
  actions: DownloadLink[];
  highlight?: string;
  slug?: string;
  tags: string[];
}

export interface LegalContent {
  terms: {
    updatedAt: string;
    version: string;
    sections: LegalSection[];
  };
  privacy: {
    updatedAt: string;
    sections: LegalSection[];
  };
}

export interface DownloadLink {
  label: string;
  url: string;
  type: 'primary' | 'mirror' | 'source' | 'password' | 'discord' | 'info';
  external?: boolean;
  disabled?: boolean;
  badge?: string;
}

export interface DownloadProject {
  slug: string;
  heroImage?: string;
  icon?: string;
  category: string;
  tags: string[];
  release?: string;
  version?: string;
  video: {
    embedUrl: string;
    watchUrl?: string;
    title: string;
  };
  file?: {
    path: string;
    name: string;
    size?: string;
    analyticsId?: string;
  };
  summary: {
    title: string;
    shortDescription: string;
    description: string;
  };
  highlights: string[];
  tutorial?: {
    label: string;
    url: string;
  };
  downloads: DownloadLink[];
  supportLinks?: DownloadLink[];
  body: {
    heading: string;
    sections: {
      title: string;
      paragraphs: string[];
    }[];
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface AboutTeamMember {
  name: string;
  role: string;
  avatar: string;
  email?: string;
  disabled?: boolean;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
  };
  story: string[];
  mission: string;
  teamIntro: string;
  team: AboutTeamMember[];
  community: {
    description: string;
    cta: { label: string; href: string };
  };
}
