import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl group-hover:shadow-2xl transition-all duration-700 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-accent-sage/50 hover-lift">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay that intensifies on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-700">
            <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              <div className="w-10 h-[2px] bg-gradient-to-r from-accent-sage to-transparent"></div>
              <p className="text-xs font-bold tracking-widest uppercase text-accent-sage">{project.category}</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">{project.title}</h3>
            <p className="text-sm text-white/90 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">{project.problem}</p>
            <div className="flex items-center text-sm font-bold text-accent-sage opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform translate-x-0 group-hover:translate-x-2">
              <span>VIEW PROJECT</span>
              <svg className="w-4 h-4 ml-2 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      {/* Card info below image */}
      <div className="mt-5 px-2">
        <p className="text-xs font-bold tracking-wider uppercase text-accent-sage mb-2 opacity-70 group-hover:opacity-100 transition-opacity">{project.category}</p>
        <h3 className="text-xl font-heading font-bold group-hover:text-accent-sage transition-colors duration-300 mb-2">{project.title}</h3>
        <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors line-clamp-2">{project.problem}</p>
      </div>
    </Link>
  );
}
