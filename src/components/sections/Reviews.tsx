"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { reviews } from "@/data/reviews";
import { COMPANY } from "@/lib/constants";

const MOBILE_INITIAL = 3;
const MOBILE_INCREMENT = 5;

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <div className="bg-[#1A1D1D] border border-[#38352E] p-6 h-full flex flex-col">
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
      <blockquote className="text-[#C9C2B6] mb-6 leading-relaxed flex-grow text-sm lg:text-base">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="flex items-center justify-between pt-4 border-t border-[#38352E]">
        <div>
          <p className="font-medium text-[#F5F1E8] text-sm">{review.author}</p>
          <p className="text-xs text-[#8D867A]">{review.date}</p>
        </div>
        <div className="w-8 h-8 bg-[#F5C451]/10 flex items-center justify-center" title="Google Review">
          <span className="text-xs font-bold text-[#F5C451]">G</span>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  // Mobile state - vertical stack with reveal
  const [mobileVisibleCount, setMobileVisibleCount] = useState(MOBILE_INITIAL);

  // Desktop/Tablet state - carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else setVisibleCount(2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const mobileVisibleReviews = reviews.slice(0, mobileVisibleCount);
  const mobileHasMore = mobileVisibleCount < reviews.length;
  const mobileRemaining = reviews.length - mobileVisibleCount;
  const mobileNextReveal = Math.min(MOBILE_INCREMENT, mobileRemaining);

  const handleMobileShowMore = () => {
    setMobileVisibleCount((prev) => Math.min(prev + MOBILE_INCREMENT, reviews.length));
  };

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="recenze" className="bg-[#121515] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8] mb-4">
            Recenze
          </h2>
          <p className="text-base lg:text-lg text-[#8D867A]">
            {reviews.length}+ spokojených zákazníků z Google. Důvěra vzniká kvalitně odvedenou prací a férovou domluvou.
          </p>

          {/* Trust Score */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-[#1A1D1D] border border-[#38352E]">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#F5C451] text-[#F5C451]" />
              ))}
            </div>
            <span className="text-[#F5F1E8] font-bold text-lg">5.0</span>
            <span className="text-sm text-[#8D867A]">na Google</span>
          </div>
        </div>

        {/* MOBILE LAYOUT - Vertical Stack with Show More */}
        <div className="md:hidden space-y-4">
          {mobileVisibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

          {mobileHasMore && (
            <div className="flex justify-center pt-4">
              <button
                onClick={handleMobileShowMore}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider border border-[#F5C451] text-[#F5C451] hover:bg-[#F5C451] hover:text-[#0D0F0F] transition-colors"
              >
                <span>Zobrazit dalších {mobileNextReveal}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* DESKTOP/TABLET LAYOUT - Carousel with Arrows */}
        <div className="hidden md:block">
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

            {/* Reviews Container - tablet shows 2, lg shows 3 */}
            <div className="overflow-hidden mx-8 lg:mx-16">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <ReviewCard review={review} />
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
                  className={`h-2 transition-all ${
                    index === currentIndex
                      ? "bg-[#F5C451] w-6"
                      : "bg-[#38352E] hover:bg-[#8D867A] w-2"
                  }`}
                  aria-label={`Přejít na stránku ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Google Link */}
        <div className="text-center mt-10 lg:mt-12">
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
