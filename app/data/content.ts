import { ContentData, Service } from "@/app/types";

export const content: ContentData = {
  hero: {
    headline: "If Your Brand No Fine, Na Design Problem",
    tagline: "Graphic designer specializing in branding, digital design, and visual storytelling that connects with audiences.",
    cta: "View My Work"
  },
  about: {
    name: "Moyebi Ayodele",
    bio: [
      "I’m Moyebi Ayodele, a graphic designer with over 8 years of experience creating compelling visual identities and designs that tell stories. My work bridges the gap between artistic creativity and strategic thinking, delivering designs that are both visually striking and purpose-driven.",
      "From brand identities to digital experiences, I believe great design is more than aesthetics—it’s about solving problems, communicating effectively, and creating memorable experiences for audiences.",
      "When I’m not designing, you’ll find me exploring art galleries, experimenting with new design tools, or mentoring aspiring designers in the community."
    ],
    skills: [
      "Brand Identity",
      "Visual Design",
      "Typography",
      "Adobe Creative Suite",
      "Print Design",
      "Motion Graphics"
    ],
    profileImage: "/moyebi.png"
  },
  contact: {
    email: "moyebiayodelesegun@gmail.com",
    social: {
      instagram: "https://www.instagram.com/mousetechnologies/",
      behance: "https://behance.net/moyebiayodele",
      linkedin: "https://linkedin.com/in/moyebiayodele",
      dribbble: "https://dribbble.com/moyebiayodele",
      whatsapp: "https://wa.me/2348078933943"
    }
  }
};

export const services: Service[] = [
  {
    id: "1",
    title: "Branding & Identity",
    description: "Complete brand identity systems including logos, color palettes, typography, and brand guidelines that capture your unique story.",
    icon: "✦"
  },
  {
    id: "2",
    title: "Digital Design",
    description: "User interfaces, web design, and digital experiences that are both beautiful and functional, optimized for engagement.",
    icon: "◆"
  },
  {
    id: "3",
    title: "Print Design",
    description: "From business cards to large-format posters, creating print materials that make a lasting impression with quality and attention to detail.",
    icon: "▲"
  },
  {
    id: "4",
    title: "Social Media Graphics",
    description: "Eye-catching social content designed to stop the scroll, drive engagement, and maintain consistent brand presence across platforms.",
    icon: "●"
  },
  {
    id: "5",
    title: "Thumbnail Design",
    description: "Click-worthy thumbnails for YouTube and digital content that capture attention and improve performance metrics.",
    icon: "■"
  },
  {
    id: "6",
    title: "Flyer Design",
    description: "Promotional materials that effectively communicate your message with visual hierarchy, compelling copy, and strategic design.",
    icon: "◇"
  }
];
