"use client";

import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/reviews";
import { COMPANY } from "@/lib/constants";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="recenze" className="bg-[#121515] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8] mb-4">
            Co o nás říkají zákazníci
          </h2>
          <p className="text-lg text-[#8D867A]">
            Důvěra vzniká kvalitně odvedenou prací, férovou domluvou a spokojenými zákazníky.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-[#1A1D1D] border border-[#38352E] flex items-center justify-center text-[#F5C451] hover:bg-[#F5C451] hover:text-[#0D0F0F] hover:border-[#F5C451] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#1A1D1D] disabled:hover:text-[#F5C451]"
            aria-label="Předchozí recenze"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-[#1A1D1D] border border-[#38352E] flex items-center justify-center text-[#F5C451] hover:bg-[#F5C451] hover:text-[#0D0F0F] hover:border-[#F5C451] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#1A1D1D] disabled:hover:text-[#F5C451]"
            aria-label="Další recenze"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          {/* Reviews Container */}
          <div ref={containerRef} className="overflow-hidden mx-8 lg:mx-16">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-[#1A1D1D] border border-[#38352E] p-6 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "fill-[#F5C451] text-[#F5C451]"
                              : "text-[#38352E]"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review text */}
                    <blockquote className="text-[#C9C2B6] mb-6 leading-relaxed flex-grow">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#38352E]">
                      <div>
                        <p className="font-medium text-[#F5F1E8]">{review.author}</p>
                        <p className="text-xs text-[#8D867A]">{review.date}</p>
                      </div>
                      <div className="w-8 h-8 bg-[#F5C451]/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#F5C451]">G</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 transition-all ${
                  index === currentIndex
                    ? "bg-[#F5C451] w-6"
                    : "bg-[#38352E] hover:bg-[#8D867A]"
                }`}
                aria-label={`Přejít na stránku ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Link */}
        <div className="text-center mt-12">
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(COMPANY.name)}+recenze`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#8D867A] hover:text-[#F5C451] transition-colors"
          >
            <span>Zobrazit všechny recenze na Google</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
