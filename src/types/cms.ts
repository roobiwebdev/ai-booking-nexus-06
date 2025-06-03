
export interface HeroContent {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustIndicators: {
    icon: string;
    text: string;
  }[];
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
  metric: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface SocialProofContent {
  stats: {
    label: string;
    value: string;
  }[];
  testimonials: Testimonial[];
  partners: Partner[];
}

export interface DemoContent {
  title: string;
  subtitle: string;
  videoUrl?: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  guarantees: {
    icon: string;
    text: string;
  }[];
}

export interface CMSContent {
  hero: HeroContent;
  benefits: Benefit[];
  socialProof: SocialProofContent;
  demo: DemoContent;
  beforeAfter: {
    before: string[];
    after: string[];
    roi: {
      label: string;
      value: string;
    }[];
  };
  faq: FAQ[];
  contact: ContactContent;
}
