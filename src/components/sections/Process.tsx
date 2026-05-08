import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="prubeh" className="bg-[#0D0F0F] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8]">
            Jak probíhá realizace
          </h2>
        </div>

        {/* Steps - Desktop Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#38352E]" />

            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="relative text-center">
                  {/* Step number */}
                  <div className="relative z-10 mx-auto w-16 h-16 flex items-center justify-center bg-[#F5C451] text-[#0D0F0F] font-[var(--font-barlow)] text-2xl font-bold mb-6">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#8D867A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps - Mobile Vertical */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F5C451] text-[#0D0F0F] font-[var(--font-barlow)] text-xl font-bold">
                  {step.number}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-px h-full bg-[#38352E] mx-auto mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#8D867A] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider border border-[#F5C451] text-[#F5C451] hover:bg-[#F5C451] hover:text-[#0D0F0F] transition-colors"
          >
            Začít poptávku
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
