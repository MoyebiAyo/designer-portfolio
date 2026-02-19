"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectCard from "@/app/components/ProjectCard";
import { useState } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Get related projects from the same category (excluding current project)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3); // Show max 3 related projects

  // Descriptions for church design images
  const churchImageDescriptions = {
    "impact-conference.jpg": "A bold and dynamic flyer for the Impacts Conference 2024, featuring a high-energy 'Stand Out' theme with patriotic accents and professional speaker profiles.",
    "help-from-above.jpg": "Designed for the 'Help From Above' event series, this flyer uses a clean, green-themed grid layout to clearly present the four-Saturday supernatural lifting program.",
    "power-in-his-name.jpg": "A vibrant, golden-themed flyer for the Great Shift Crusade, utilizing electrical motifs and warm lighting to convey the 'Power in His Name' message.",
    "7-days-of-glory.jpg": "A sophisticated, deep-red design for the '7 Days of Glory' fasting program, blending classical clock and book elements with a modern ministry focus.",
    "fresh-fire.jpg": "An ethereal, cloud-themed flyer for the 'Fresh Fire' conference, using soft blues and glowing highlights to represent spiritual renewal and greater works.",
    "60-days-countdown.png": "A powerful '60 Days to Go' countdown graphic for a national conference, featuring grand architectural pillars and a triumphant 'pathfinder' motif.",
    "house-to-house.png": "A vibrant and modern 'House to House' evangelism flyer, creatively incorporating road signs and a high-contrast teal and green color palette.",
    "night-of-light.png": "An atmospheric 'Thy Kingdom Come' design for a Night of Light, using celestial lighting and iconic architecture to create a sense of divine awe.",
    "when-mercy-speaks.png": "A rich, gold-accented flyer for 'When Mercy Speaks', featuring high-quality photography and elegant musical motifs like the harp and saxophone.",
    "ebenezer.jpg": "A striking State Day of Fasting and Prayer design featuring a dramatic orange sunburst background with a powerful shield and trumpet composition, symbolizing spiritual warfare and divine protection through the 'Ebenezer' theme.",
    "phosphorus.jpg": "An evocative Illuminators Sunday flyer showcasing cultural richness with traditional African face paint and torch symbolism against a glowing full moon, celebrating the theme 'Phosphorus: The Light Bearer' with authentic representation.",
    "thanksgiving-sunday.jpg": "A dynamic Batch B1 Thanksgiving Sunday design capturing the energy of worship with multi-layered photography, geometric elements, and the theme 'Taking Territories for God,' emphasizing community and spiritual conquest.",
    "worship-experience.jpg": "An elegant Sunday Glorious Service flyer featuring radiant golden trumpets and warm worship imagery, designed around the theme 'The Worship Experience: A Living Sacrifice' with sophisticated typographic hierarchy.",
    "amen-thing.jpg": "A cinematic State Day of Fasting and Prayer design with monumental 3D stone typography reading 'AMEN THING' set against a majestic mountain landscape, conveying breakthrough and answered prayers with powerful visual metaphors.",
    "walking-by-faith.png": "A powerful Sunday Glorious Service flyer for Nigeria Christian Corpers' Fellowship, featuring a striking tightrope walker visual metaphor that beautifully illustrates the theme 'Walking by Faith' with scripture references from Romans and 2 Corinthians.",
    "pathfinder-conference.jpg": "A masterfully crafted flyer for the 42nd National Conference of Nigeria Christian Corpers' Fellowship, featuring an adventurous vintage explorer aesthetic with antique compass, binoculars, and aged map textures. The 'Pathfinder' theme is rendered in bold western-style typography with scripture references from 2 Kings and Isaiah, showcasing five distinguished ministers including Apostle Gideon Odoma, Pastor Toye Ademola, Daddy Gbile Akanni, Pastor Dr. Kola Ojo, and Prophet Jesse Jangfa.",
    // Social Media Campaign Descriptions
    "leadership-newspaper.jpg": "A unique, newspaper-themed social media post for a leadership masterclass, cleverly using editorial aesthetics to ask the provocative question: 'How To Tell You Are Wasting Your Life.'",
    "mastering-growth.jpg": "A professional and strategic design for the 'Mastering Your Growth' class, using chess motifs and a deep green palette to symbolize leadership development.",
    "freight-forwarding.jpg": "A clean, informative flyer for TSL Freight Forwarding, using a high-quality logistics backdrop and clear service listing to convey reliability and global reach.",
    "leadership-intensive.jpg": "A specialized registration flyer for a 7-week leadership programme, utilizing modern corporate photography and a professional color scheme to drive signups.",
    "shipping-logistics.jpg": "A vibrant and reliable 'Shipping' flyer, featuring a wide-angle cargo ship view and bold typography to highlight import and export capabilities.",
    "steam-science-party.jpg": "A vibrant and energetic flyer for the STEAM Science Party, using playful colors and circular photo cutouts to showcase engaging educational activities for children.",
    "steam-price-list.jpg": "A clean and colorful price list for STEAM Party activities, using a grid layout and distinct color-coded sections to present package options clearly.",
    "media-team-training.jpg": "A modern and tech-focused flyer for Media Team Training, featuring a VR headset motif and a list of creative skills being taught to empower future media professionals.",
    // Wedding & Birthday Descriptions
    "wedding-flyer.jpg": "An elegant wedding flyer for Titilopemi & Moses (#MOLOPE 23), featuring a beautiful circular photo layout and a soft glowing heart motif to celebrate their union.",
    "birthday-flyer-rachael.jpg": "A celebratory birthday flyer for Rachael Taiwo, utilizing ethereal cloud textures and a sophisticated multi-photo layout to capture her joy and personality.",
    "birthday-flyer-asafa.png": "A professional yet celebratory birthday flyer for Asafa Taiwo, blending ministry credentials with a warm, high-quality portrait and modern geometric overlays.",
    "hbd-chinonso-okoh.png": "An elegant birthday celebration design for Chinonso Okoh, National Sisters' Coordinator, featuring a sophisticated purple-themed layout with multiple portrait photos, decorative typography, and warm celebratory messaging.",
    // T-Shirt & Mockup Descriptions
    "shortsleeve-mockup.jpg": "A high-fidelity 3D mockup of the 'Pathfinder' conference short-sleeve tees in black and white, demonstrating the clean and prominent chest logo placement.",
    "delegate-short-mockup.jpg": "Specialized short-sleeve delegate uniforms featuring color-coded sleeves (Green and Blue) to distinguish between different conference roles while maintaining brand unity.",
    "delegate-long-mockup.jpg": "The long-sleeve version of the delegate uniforms, showcasing how the 'Pathfinder' branding adapts to different sleeve lengths and garment silhouettes.",
    "longsleeve-mockup.jpg": "Professional long-sleeve crewneck mockups, highlighting the elegant typography of the event theme against high-contrast black and white fabric.",
    "hoodie-mockup.jpg": "Premium 'Pathfinder' hoodie mockups, illustrating the bold brand presence on heavier winter-wear, perfect for national conference merchandise.",
    // Branding Descriptions
    "mouse-tech-mockup.png": "A comprehensive brand mockup for Mouse Technologies, showcasing the logo on stationery and apparel to demonstrate real-world application and versatility.",
    "mouse-tech-typography.png": "The typography and logo variations sheet for Mouse Technologies, featuring the Poppins typeface and a range of color adaptations for diverse backgrounds.",
    "reignite-logo.png": "A symbolic shield-style logo for the Reignite Mentorship Initiative, representing protection, collaboration, and the passing of the torch of knowledge.",
    "ola-felix-logo.jpg": "A precision-engineered logo mark for Ola-Felix Egbowon, showcasing the geometric grid system and the Mazzard typeface used in its construction.",
    // Business Flyer Descriptions
    "what-we-do.jpg": "A comprehensive 'What We Do' business flyer for Mouse Technologies, utilizing a clean grid layout and modern tech icons to showcase diverse digital services.",
    "graphics-design-services.jpg": "A focused graphics design service flyer, featuring professional equipment photography and a clear list of design offerings from logos to presentations.",
    "video-editing-services.jpg": "A high-end video editing service flyer, showcasing a professional workstation setup and highlighting expertise in Premiere Pro and Davinci Resolve.",
    "convocation-food-package.jpg": "A detailed and appetizing food package menu for Peace Restaurant, using a rich, warm color palette and a structured grid to present various dining plans."
  };

  return (
    <main className="min-h-screen pt-24 pb-20 animate-fade-in">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <Link
          href="/#work"
          className="inline-flex items-center text-sm text-foreground/60 hover:text-foreground mb-8 transition-colors group"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        <div className="mb-8">
          <p className="text-sm text-accent-sage font-medium mb-2">{project.category}</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">{project.title}</h1>
          <div className="flex gap-4 text-sm text-foreground/60">
            <span>{project.year}</span>
            {project.client && <span>• {project.client}</span>}
          </div>
        </div>

        {/* Hero Image */}
        <div 
          className="relative aspect-video rounded-2xl overflow-hidden mb-12 group cursor-pointer"
          onClick={() => setSelectedImage(project.images[0])}
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
            <p className="text-white text-lg italic text-center">
              {project.problem}
            </p>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Click to expand
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-12">
          {/* Problem */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">The Challenge</h2>
            <p className="text-foreground/70 leading-relaxed">{project.problem}</p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">The Solution</h2>
            <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
          </section>

          {/* Process */}
          <section className="py-8 border-y border-gray-100 dark:border-gray-800/50">
            <h2 className="text-2xl font-heading font-bold mb-6">My Design Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.process.map((step, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800/30 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="text-2xl font-heading font-bold text-accent-sage mb-3 group-hover:scale-110 transition-transform">
                    {index + 1}.
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Visual Gallery */}
          {project.images.length > 1 && (
            <section className="py-12">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Project Visuals</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.images.slice(1).map((image, index) => {
                  const fileName = image.split('/').pop() as keyof typeof churchImageDescriptions;
                  const description = churchImageDescriptions[fileName];

                  return (
                    <div key={index} className="group space-y-4">
                      <div 
                        className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} visual ${index + 2}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to expand
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-4 border-accent-sage">
                        <p className="text-sm italic text-foreground/80 leading-relaxed">
                          {description || `Detail view of the ${project.title} project.`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Results */}
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Results & Impact</h2>
            <p className="text-foreground/70 leading-relaxed">{project.results}</p>
          </section>
        </div>

        {/* Related Projects from Same Category */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-100 dark:border-gray-800/50 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold mb-2">
                More {project.category} Projects
              </h2>
              <p className="text-foreground/60">
                Explore other work in this category
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href={`/category/${project.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-accent-sage hover:underline font-medium group"
              >
                View all {project.category} projects
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-20 pt-12 border-t border-gray-100 dark:border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center text-sm hover:text-accent-sage transition-colors w-full sm:w-auto justify-center sm:justify-start"
              >
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-center sm:text-left">
                  <p className="text-foreground/60 text-xs uppercase tracking-wider">Previous</p>
                  <p className="font-medium mt-1">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div className="w-full sm:w-auto" />}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center text-sm hover:text-accent-sage transition-colors w-full sm:w-auto justify-center sm:justify-end"
              >
                <div className="text-center sm:text-right">
                  <p className="text-foreground/60 text-xs uppercase tracking-wider">Next</p>
                  <p className="font-medium mt-1">{nextProject.title}</p>
                </div>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div className="w-full sm:w-auto" />}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full project visual"
              fill
              className="object-contain animate-scale-in"
            />
            <button 
              className="absolute top-0 -right-12 text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
