"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { content } from "@/app/data/content";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMenuOpen(false);
    
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/logo.png"
                alt="Mouse Technologies Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#work"
              onClick={(e) => handleNavClick(e, "work")}
              className="text-sm hover:text-accent-sage transition-colors"
            >
              Work
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm hover:text-accent-sage transition-colors"
            >
              About
            </Link>
            <Link
              href="/#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="text-sm hover:text-accent-sage transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm hover:text-accent-sage transition-colors"
            >
              Contact
            </Link>
            
            <a
              href={content.contact.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform shadow-md"
              title="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.533.918 3.041 1.4 4.544 1.401 5.39 0 9.778-4.388 9.781-9.779.001-2.612-1.015-5.068-2.862-6.916-1.847-1.847-4.304-2.864-6.916-2.865-5.391 0-9.778 4.388-9.781 9.779-.001 1.831.509 3.618 1.472 5.181l-1.015 3.703 3.785-.993zm11.376-7.412c-.3-.149-1.772-.875-2.046-.975-.274-.1-.474-.149-.674.15-.2.299-.774.975-.949 1.174-.175.199-.349.224-.649.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.496-1.78-1.671-2.079-.175-.299-.019-.461.13-.61.135-.133.299-.349.449-.524.15-.175.2-.299.299-.499.1-.2.05-.374-.025-.524-.075-.15-.674-1.623-.924-2.222-.243-.584-.489-.504-.674-.513-.175-.008-.374-.01-.574-.01s-.524.075-.798.374c-.274.299-1.048 1.024-1.048 2.497 0 1.472 1.073 2.893 1.223 3.093.15.199 2.112 3.226 5.116 4.524.714.309 1.272.494 1.707.633.717.227 1.369.195 1.885.118.575-.085 1.772-.724 2.022-1.423.249-.699.249-1.297.175-1.423-.075-.124-.275-.199-.575-.349z"/>
              </svg>
            </a>
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link
              href="/#work"
              onClick={(e) => handleNavClick(e, "work")}
              className="block w-full text-left py-2 hover:text-accent-sage transition-colors"
            >
              Work
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="block w-full text-left py-2 hover:text-accent-sage transition-colors"
            >
              About
            </Link>
            <Link
              href="/#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="block w-full text-left py-2 hover:text-accent-sage transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="block w-full text-left py-2 hover:text-accent-sage transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
