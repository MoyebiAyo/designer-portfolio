import { content } from "@/app/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-900 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-xl mb-1">Mouse Technologies</p>
            <p className="text-sm text-foreground/50">
              © {currentYear} Moyebi Ayodele. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href={`mailto:${content.contact.email}`} className="hover:text-accent-sage transition-colors">
              Email
            </a>
            <a href={content.contact.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
              WhatsApp
            </a>
            {content.contact.social.instagram && (
              <a href={content.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent-sage transition-colors">
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
