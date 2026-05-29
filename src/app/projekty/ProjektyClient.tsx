"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectGalleryModal } from "@/components/shared/ProjectGalleryModal";

export function ProjektyClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: Project, startIndex: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(startIndex);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-[#1A1D1D] border border-[#38352E] overflow-hidden hover:border-[#F5C451]/40 transition-all flex flex-col cursor-pointer"
            onClick={() => openGallery(project, 0)}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] uppercase tracking-[0.14em] font-medium text-[#0D0F0F] bg-[#F5C451] px-2.5 py-1">
                  {project.category}
                </span>
              </div>
              {/* Click hint */}
              <div className="absolute inset-0 bg-[#0D0F0F]/0 group-hover:bg-[#0D0F0F]/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-sm font-medium uppercase tracking-wider text-[#0D0F0F] bg-[#F5C451] px-4 py-2">
                  Zobrazit galerii
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-3 line-clamp-2 min-h-[52px] flex items-start">
                {project.title}
              </h2>
              <p className="text-sm text-[#8D867A] mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto pt-4 border-t border-[#38352E] flex items-center justify-between text-xs text-[#8D867A]">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectGalleryModal
        project={selectedProject}
        currentImageIndex={currentImageIndex}
        isOpen={!!selectedProject}
        onClose={closeGallery}
        onNext={nextImage}
        onPrev={prevImage}
        onSelectImage={selectImage}
      />
    </>
  );
}
