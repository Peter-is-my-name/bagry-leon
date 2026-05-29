import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
}

export function CTASection({ title, description, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="relative bg-[#0D0F0F] py-20 lg:py-28 overflow-hidden">
      {/* Diagonal stripe pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #F5C451,
              #F5C451 1px,
              transparent 1px,
              transparent 10px
            )`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#F5F1E8] mb-6">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg text-[#8D867A] mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryButton.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors"
          >
            {primaryButton.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider border border-[#38352E] text-[#F5F1E8] hover:border-[#F5C451] hover:text-[#F5C451] transition-colors"
            >
              {secondaryButton.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
