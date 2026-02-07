export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  problem: string;
  solution: string;
  process: string[];
  results: string;
  year: string;
  client?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContentData {
  hero: {
    headline: string;
    tagline: string;
    cta: string;
  };
  about: {
    name: string;
    bio: string[];
    skills: string[];
    profileImage: string;
  };
  contact: {
    email: string;
    social: {
      instagram?: string;
      behance?: string;
      linkedin?: string;
      dribbble?: string;
      whatsapp?: string;
    };
  };
}
