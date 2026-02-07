import Image from "next/image";
import { content } from "@/app/data/content";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-1 md:order-1">
            <div className="relative aspect-square rounded-full md:rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 max-w-md mx-auto">
              <Image
                src={content.about.profileImage}
                alt={content.about.name}
                fill
                className="object-cover md:object-contain md:p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="order-2 md:order-2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Hi, I&apos;m {content.about.name}
            </h2>
            
            {content.about.bio.map((paragraph, index) => (
              <p key={index} className="text-foreground/70 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {content.about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background dark:bg-gray-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
