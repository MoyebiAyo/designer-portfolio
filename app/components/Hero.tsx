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
      {/* Animated Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left 3D Sphere */}
        <div 
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-2xl opacity-40 animate-float"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #a855f7, #3b82f6)',
            boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.2), 20px 20px 60px rgba(59, 130, 246, 0.3)'
          }}
        />
        
        {/* Top Right 3D Triangle (Pyramid) */}
        <div className="absolute top-20 -right-10 w-48 h-48 animate-float-delay opacity-60">
          <div 
            className="w-full h-full"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background: 'linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)',
              filter: 'drop-shadow(15px 15px 20px rgba(244, 63, 94, 0.4))'
            }}
          />
        </div>
        
        {/* Left 3D Cube (Floating) */}
        <div 
          className="absolute top-1/3 -left-12 w-32 h-32 rotate-[30deg] animate-float-slow opacity-50"
          style={{
            background: 'linear-gradient(135deg, #2dd4bf 0%, #0ea5e9 100%)',
            borderRadius: '16px',
            boxShadow: '20px 20px 40px rgba(14, 165, 233, 0.3), inset -5px -5px 15px rgba(0,0,0,0.2), inset 5px 5px 15px rgba(255,255,255,0.4)',
            transform: 'perspective(1000px) rotateX(20deg) rotateY(20deg)'
          }}
        />
        
        {/* Right Glowing Ring */}
        <div className="absolute top-1/4 -right-16 w-56 h-56 animate-pulse-slow opacity-40">
          <div 
            className="w-full h-full rounded-full border-[12px]"
            style={{
              borderColor: 'transparent',
              borderImage: 'linear-gradient(to right, #3b82f6, #2dd4bf) 1',
              background: 'none',
              filter: 'blur(2px) drop-shadow(0 0 20px #3b82f6)',
              borderRadius: '50%',
              borderStyle: 'solid'
            }}
          />
        </div>
        
        {/* Bottom Left 3D Marbles */}
        <div className="absolute bottom-40 left-20 flex gap-6 animate-float">
          <div className="w-6 h-6 rounded-full shadow-xl" style={{ background: 'radial-gradient(circle at 30% 30%, #fbbf24, #d97706)' }} />
          <div className="w-8 h-8 rounded-full shadow-xl" style={{ background: 'radial-gradient(circle at 30% 30%, #ec4899, #be185d)' }} />
          <div className="w-5 h-5 rounded-full shadow-xl" style={{ background: 'radial-gradient(circle at 30% 30%, #22c55e, #15803d)' }} />
        </div>
        
        {/* Bottom Right Glass Pattern */}
        <div className="absolute bottom-24 right-12 w-64 h-64 animate-float-delay opacity-30">
          <div 
            className="w-full h-full rounded-3xl backdrop-blur-3xl border border-white/20"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '20px 20px 50px rgba(0,0,0,0.1)'
            }}
          />
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 blur-sm" />
          <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 blur-sm" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
          {content.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto">
          {content.hero.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-white transition-all transform hover:-translate-y-1 active:translate-y-0.5 active:shadow-inner group"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3), 0 6px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 0 rgba(0, 0, 0, 0.2)',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              {content.hero.cta}
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          
          <a
            href={content.contact.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-white transition-all transform hover:-translate-y-1 active:translate-y-0.5 shadow-lg group bg-[#25D366]"
            style={{
              boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2), inset 0 -4px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <span className="flex items-center gap-1.5">
              WhatsApp Me
              <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.533.918 3.041 1.4 4.544 1.401 5.39 0 9.778-4.388 9.781-9.779.001-2.612-1.015-5.068-2.862-6.916-1.847-1.847-4.304-2.864-6.916-2.865-5.391 0-9.778 4.388-9.781 9.779-.001 1.831.509 3.618 1.472 5.181l-1.015 3.703 3.785-.993zm11.376-7.412c-.3-.149-1.772-.875-2.046-.975-.274-.1-.474-.149-.674.15-.2.299-.774.975-.949 1.174-.175.199-.349.224-.649.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.496-1.78-1.671-2.079-.175-.299-.019-.461.13-.61.135-.133.299-.349.449-.524.15-.175.2-.299.299-.499.1-.2.05-.374-.025-.524-.075-.15-.674-1.623-.924-2.222-.243-.584-.489-.504-.674-.513-.175-.008-.374-.01-.574-.01s-.524.075-.798.374c-.274.299-1.048 1.024-1.048 2.497 0 1.472 1.073 2.893 1.223 3.093.15.199 2.112 3.226 5.116 4.524.714.309 1.272.494 1.707.633.717.227 1.369.195 1.885.118.575-.085 1.772-.724 2.022-1.423.249-.699.249-1.297.175-1.423-.075-.124-.275-.199-.575-.349z"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
