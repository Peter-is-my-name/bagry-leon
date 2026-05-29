"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectGalleryModalProps {
  project: Project | null;
  currentImageIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectImage: (index: number) => void;
}

export function ProjectGalleryModal({
  project,
  currentImageIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onSelectImage,
}: ProjectGalleryModalProps) {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const currentImage = project.gallery[currentImageIndex];
  const totalImages = project.gallery.length;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0D0F0F]/98 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 text-[#C9C2B6] hover:text-[#F5F1E8] hover:bg-[#1A1D1D] transition-all rounded-sm"
        aria-label="Zavřít galerii"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Main content container */}
      <div
        className="relative w-full max-w-6xl mx-4 max-h-[90vh] flex flex-col lg:flex-row gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image viewer */}
        <div className="relative flex-1 bg-[#1A1D1D] rounded-sm overflow-hidden min-h-[50vh] lg:min-h-[70vh]">
          {/* Main image */}
          <img
            src={currentImage}
            alt={`${project.title} - obrázek ${currentImageIndex + 1} z ${totalImages}`}
            className="w-full h-full object-contain"
          />

          {/* Navigation arrows */}
          {totalImages > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#0D0F0F]/80 hover:bg-[#F5C451] text-[#F5F1E8] hover:text-[#0D0F0F] transition-all rounded-sm backdrop-blur-sm"
                aria-label="Předchozí obrázek"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#0D0F0F]/80 hover:bg-[#F5C451] text-[#F5F1E8] hover:text-[#0D0F0F] transition-all rounded-sm backdrop-blur-sm"
                aria-label="Další obrázek"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#0D0F0F]/80 backdrop-blur-sm rounded-sm">
            <span className="text-sm text-[#F5F1E8]">
              {currentImageIndex + 1} / {totalImages}
            </span>
          </div>
        </div>

        {/* Sidebar with project info and thumbnails */}
        <div className="lg:w-80 flex flex-col gap-4">
          {/* Project info card */}
          <div className="bg-[#1A1D1D] border border-[#38352E] p-5 rounded-sm">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#F5C451] font-medium block mb-2">
              {project.category}
            </span>
            <h3 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-[#8D867A] leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-[#8D867A] pt-4 border-t border-[#38352E]">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#F5C451]" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#F5C451]" />
                {project.year}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {totalImages > 1 && (
            <div className="bg-[#1A1D1D] border border-[#38352E] p-3 rounded-sm flex-1 overflow-y-auto max-h-[30vh] lg:max-h-none">
              <span className="text-[10px] uppercase tracking-wider text-[#8D867A] block mb-3">
                Všechny fotografie
              </span>
              <div className="grid grid-cols-3 gap-2">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => onSelectImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-sm transition-all ${
                      index === currentImageIndex
                        ? "ring-2 ring-[#F5C451] ring-offset-1 ring-offset-[#1A1D1D]"
                        : "hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Náhled ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 bg-[#F5C451]/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
