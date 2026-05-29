import Link from "next/link";
import { projects } from "@/data/projects";

// Hybrid bento layout: 2 hero projects (large) + 4 supporting projects (square)
// First two projects (most visually striking) are featured large
const featuredProjects = projects.slice(0, 2);
const supportingProjects = projects.slice(2, 6);

export function ProjectsGallery() {

  return (
    <section id="projekty" className="bg-[#0D0F0F] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8]">
              Realizace v terénu
            </h2>
            <p className="text-sm text-[#8D867A] mt-2">
              Ukázky naší práce pro soukromé klienty i firmy
            </p>
          </div>
          <Link
            href="/projekty"
            className="hidden sm:block text-xs uppercase tracking-wider text-[#F5C451] hover:text-[#FFD875] transition-colors"
          >
            Všechny projekty →
          </Link>
        </div>

        {/* Bento-style Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Featured projects - span 2 columns each */}
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href="/projekty"
              className="col-span-2 aspect-[16/9] relative group overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0F] via-[#0D0F0F]/70 via-[#0D0F0F]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#F5C451] font-medium block mb-1">
                  {project.category}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#F5F1E8] line-clamp-2">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}

          {/* Supporting projects - square */}
          {supportingProjects.map((project) => (
            <Link
              key={project.id}
              href="/projekty"
              className="aspect-square relative group overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0F] via-[#0D0F0F]/80 via-[#0D0F0F]/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[9px] uppercase tracking-[0.14em] text-[#F5C451] block mb-1">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-[#F5F1E8] line-clamp-2 leading-tight">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/projekty"
            className="text-xs uppercase tracking-wider text-[#F5C451] hover:text-[#FFD875] transition-colors"
          >
            Všechny projekty →
          </Link>
        </div>
      </div>
    </section>
  );
}
