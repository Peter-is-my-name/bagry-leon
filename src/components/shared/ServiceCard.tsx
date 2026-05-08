import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="group bg-[#1A1D1D] border border-[#38352E] hover:border-[#F5C451] transition-all duration-300 p-6 lg:p-8">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F5C451]/10 group-hover:bg-[#F5C451]/20 transition-colors">
          <Icon className="h-6 w-6 text-[#F5C451]" />
        </div>
      </div>

      <h3 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-3">
        {title}
      </h3>
      
      <p className="text-sm text-[#8D867A] mb-6 leading-relaxed">
        {description}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#F5C451] hover:text-[#FFD875] transition-colors"
      >
        Více
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
