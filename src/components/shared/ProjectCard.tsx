import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  year: string;
  scope: string[];
  image: string;
  href: string;
}

export function ProjectCard({ title, location, year, scope, image, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-[#1A1D1D] border border-[#38352E] overflow-hidden hover:border-[#F5C451] transition-colors">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-[#8D867A] mb-2">
            <span>{location}</span>
            <span>•</span>
            <span>{year}</span>
          </div>
          
          <h3 className="font-[var(--font-barlow)] text-lg font-bold uppercase text-[#F5F1E8] mb-3 group-hover:text-[#F5C451] transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {scope.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider px-2 py-1 bg-[#202424] text-[#8D867A]"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <span className="inline-flex items-center gap-2 text-sm text-[#F5C451]">
            Detail
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
