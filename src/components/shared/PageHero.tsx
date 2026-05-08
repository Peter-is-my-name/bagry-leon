import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-[#0D0F0F] pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,196,81,0.03),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {eyebrow && (
            <span className="text-sm uppercase tracking-[0.16em] text-[#F5C451] block mb-4">
              {eyebrow}
            </span>
          )}

          <h1 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-[1.1] text-[#F5F1E8] mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg text-[#8D867A]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-b border-[#38352E]" />
    </section>
  );
}
