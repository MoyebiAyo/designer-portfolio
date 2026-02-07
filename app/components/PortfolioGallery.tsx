"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { categories } from "@/app/data/categories";
import ProjectCard from "./ProjectCard";

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my passion for visual storytelling and design excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setFilter("All")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              filter === "All"
                ? "bg-foreground text-background shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="px-6 py-3 rounded-full text-sm font-medium transition-all bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-foreground/60">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
