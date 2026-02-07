import Link from "next/link";
import { categories, getCategoryBySlug, getProjectsByCategory } from "@/app/data/categories";
import ProjectCard from "@/app/components/ProjectCard";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Projects - Alex Morgan Portfolio`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const categoryProjects = getProjectsByCategory(category.name);

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#work"
          className="inline-flex items-center text-sm text-foreground/60 hover:text-foreground mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Work
        </Link>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            {category.description}
          </p>
          <p className="text-sm text-accent-sage mt-4">
            {category.count} {category.count === 1 ? 'Project' : 'Projects'}
          </p>
        </div>

        {/* Projects Grid */}
        {categoryProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-foreground/60 mb-4">No projects in this category yet.</p>
            <Link
              href="/#work"
              className="inline-flex items-center text-accent-sage hover:underline"
            >
              View all projects
            </Link>
          </div>
        )}

        {/* Other Categories */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-heading font-bold mb-6">Explore Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter(cat => cat.slug !== params.slug)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <h3 className="font-heading font-semibold mb-1 group-hover:text-accent-sage transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{cat.count} projects</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
