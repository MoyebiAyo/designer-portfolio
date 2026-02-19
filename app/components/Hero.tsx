"use client";

import { content } from "@/app/data/content";

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Premium SaaS Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary Glow Spot - Top Left */}
        <div className="glow-spot glow-spot-primary -top-40 -left-40 animate-pulse-slow" />
        
        {/* Secondary Glow Spot - Bottom Right */}
        <div className="glow-spot glow-spot-secondary bottom-0 right-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Floating Glass Orbs */}
        <div className="absolute top-20 left-[15%] w-32 h-32 rounded-full glass-card opacity-40 animate-float" />
        <div className="absolute top-40 right-[20%] w-24 h-24 rounded-full glass-card opacity-30 animate-float-delay" />
        <div className="absolute bottom-32 left-[25%] w-20 h-20 rounded-full glass-card opacity-35 animate-float-slow" />
        
        {/* Gradient Rings */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full border-2 border-primary-500/20 animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-20 w-48 h-48 rounded-full border-2 border-accent-purple/20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Floating Particles */}
        <div className="absolute top-1/3 left-[10%] w-2 h-2 rounded-full bg-primary-500/60 animate-float" />
        <div className="absolute top-1/2 right-[15%] w-3 h-3 rounded-full bg-accent-purple/60 animate-float-delay" />
        <div className="absolute bottom-1/3 left-[30%] w-2 h-2 rounded-full bg-accent-blue/60 animate-float-slow" />
        <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-primary-400/50 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto text-center animate-fade-in relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-foreground/80">Available for new projects</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-[1.1] tracking-tight">
          <span className="text-gradient-animated">{content.hero.headline}</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed">
          {content.hero.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToWork}
            className="btn-primary group"
          >
            <span className="relative z-10 flex items-center gap-2">
              {content.hero.cta}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          
          <a
            href={content.contact.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.533.918 3.041 1.4 4.544 1.401 5.39 0 9.778-4.388 9.781-9.779.001-2.612-1.015-5.068-2.862-6.916-1.847-1.847-4.304-2.864-6.916-2.865-5.391 0-9.778 4.388-9.781 9.779-.001 1.831.509 3.618 1.472 5.181l-1.015 3.703 3.785-.993zm11.376-7.412c-.3-.149-1.772-.875-2.046-.975-.274-.1-.474-.149-.674.15-.2.299-.774.975-.949 1.174-.175.199-.349.224-.649.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.496-1.78-1.671-2.079-.175-.299-.019-.461.13-.61.135-.133.299-.349.449-.524.15-.175.2-.299.299-.499.1-.2.05-.374-.025-.524-.075-.15-.674-1.623-.924-2.222-.243-.584-.489-.504-.674-.513-.175-.008-.374-.01-.574-.01s-.524.075-.798.374c-.274.299-1.048 1.024-1.048 2.497 0 1.472 1.073 2.893 1.223 3.093.15.199 2.112 3.226 5.116 4.524.714.309 1.272.494 1.707.633.717.227 1.369.195 1.885.118.575-.085 1.772-.724 2.022-1.423.249-.699.249-1.297.175-1.423-.075-.124-.275-.199-.575-.349z"/>
              </svg>
              Chat on WhatsApp
            </span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/50">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>100+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>CAC Certified Business</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Fast Turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
}
