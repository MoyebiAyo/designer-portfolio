import { projects } from "./projects";

export interface Category {
  slug: string;
  name: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  {
    slug: "branding",
    name: "Branding",
    description: "Complete brand identity systems, logos, and visual identity design that captures unique brand stories.",
    count: projects.filter(p => p.category === "Branding").length
  },
  {
    slug: "social-media",
    name: "Social Media",
    description: "Eye-catching social media graphics and campaigns designed to drive engagement across platforms.",
    count: projects.filter(p => p.category === "Social Media").length
  },
  {
    slug: "print-design",
    name: "Print Design",
    description: "High-quality print materials including flyers, posters, menus, and promotional materials.",
    count: projects.filter(p => p.category === "Print Design").length
  },
  {
    slug: "digital-design",
    name: "Digital Design",
    description: "User interfaces, web design, and digital experiences optimized for engagement.",
    count: projects.filter(p => p.category === "Digital Design").length
  },
  {
    slug: "thumbnails",
    name: "Thumbnails",
    description: "Click-worthy thumbnails for YouTube and digital content that improve performance metrics.",
    count: projects.filter(p => p.category === "Thumbnails").length
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getProjectsByCategory(categoryName: string) {
  return projects.filter(p => p.category === categoryName);
}
