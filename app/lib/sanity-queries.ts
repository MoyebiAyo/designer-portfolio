import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/client';

export async function getProjects() {
  const projects = await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      "thumbnail": thumbnail.asset->url,
      "images": images[].asset->url,
      problem,
      solution,
      process,
      results,
      year,
      client
    }
  `);
  return projects;
}

export async function getProjectBySlug(slug: string) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      "thumbnail": thumbnail.asset->url,
      "images": images[].asset->url,
      problem,
      solution,
      process,
      results,
      year,
      client
    }`,
    { slug }
  );
  return project;
}

export async function getProfile() {
  const profile = await client.fetch(`
    *[_type == "profile"][0] {
      name,
      headline,
      tagline,
      "profileImage": profileImage.asset->url,
      bio,
      skills,
      email,
      whatsapp,
      instagram,
      behance,
      linkedin,
      dribbble
    }
  `);
  return profile;
}

export async function getTestimonials() {
  const testimonials = await client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      role,
      company,
      quote,
      "avatar": avatar.asset->url
    }
  `);
  return testimonials;
}

export async function getServices() {
  const services = await client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      description,
      icon
    }
  `);
  return services;
}
