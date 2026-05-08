import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { StructuredData } from "./StructuredData";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://www.bagryleon.cz${item.href}`,
    })),
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex items-center flex-wrap gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-[#8D867A]" aria-hidden="true" />
              )}
              {index === items.length - 1 ? (
                <span className="text-[#F5F1E8]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#8D867A] hover:text-[#F5C451] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
