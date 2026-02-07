"use client";

import { useState } from "react";
import { content } from "@/app/data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Create mailto link with form data
    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );
    const mailtoLink = `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form and show success
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-accent-sage"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-accent-sage"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-accent-sage resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Get in Touch</h3>
              <p className="text-foreground/70 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a
                href={`mailto:${content.contact.email}`}
                className="text-accent-sage hover:underline"
              >
                {content.contact.email}
              </a>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-heading font-semibold mb-4">Direct Messaging</h3>
              <a
                href={content.contact.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                <span>Chat on WhatsApp</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.533.918 3.041 1.4 4.544 1.401 5.39 0 9.778-4.388 9.781-9.779.001-2.612-1.015-5.068-2.862-6.916-1.847-1.847-4.304-2.864-6.916-2.865-5.391 0-9.778 4.388-9.781 9.779-.001 1.831.509 3.618 1.472 5.181l-1.015 3.703 3.785-.993zm11.376-7.412c-.3-.149-1.772-.875-2.046-.975-.274-.1-.474-.149-.674.15-.2.299-.774.975-.949 1.174-.175.199-.349.224-.649.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.496-1.78-1.671-2.079-.175-.299-.019-.461.13-.61.135-.133.299-.349.449-.524.15-.175.2-.299.299-.499.1-.2.05-.374-.025-.524-.075-.15-.674-1.623-.924-2.222-.243-.584-.489-.504-.674-.513-.175-.008-.374-.01-.574-.01s-.524.075-.798.374c-.274.299-1.048 1.024-1.048 2.497 0 1.472 1.073 2.893 1.223 3.093.15.199 2.112 3.226 5.116 4.524.714.309 1.272.494 1.707.633.717.227 1.369.195 1.885.118.575-.085 1.772-.724 2.022-1.423.249-.699.249-1.297.175-1.423-.075-.124-.275-.199-.575-.349z"/>
                </svg>
              </a>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {content.contact.social.instagram && (
                  <a
                    href={content.contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {content.contact.social.behance && (
                  <a
                    href={content.contact.social.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Behance
                  </a>
                )}
                {content.contact.social.linkedin && (
                  <a
                    href={content.contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {content.contact.social.dribbble && (
                  <a
                    href={content.contact.social.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Dribbble
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
