import { Wrench, ShieldCheck, MapPin, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Wrench,
    label: "Vlastní technika",
  },
  {
    icon: ShieldCheck,
    label: "Mnohaleté zkušenosti",
  },
  {
    icon: MapPin,
    label: "Lokální firma",
  },
  {
    icon: Clock,
    label: "Rychlá domluva",
  },
];

export function TrustBar() {
  return (
    <section className="bg-[#121515] border-y border-[#38352E]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const isRightColMobile = index % 2 === 1;
            const isBottomRowMobile = index >= 2;
            return (
              <div
                key={item.label}
                className={[
                  "flex flex-col lg:flex-row items-center justify-center text-center lg:text-left",
                  "gap-3 lg:gap-3 px-4 py-8 lg:py-7 min-h-[120px]",
                  // Mobile vertical divider (between left/right columns)
                  !isRightColMobile ? "border-r border-[#38352E]" : "",
                  // Mobile horizontal divider (between top/bottom rows)
                  !isBottomRowMobile ? "border-b border-[#38352E] lg:border-b-0" : "",
                  // Desktop: override mobile borders, use right-only between columns
                  "lg:border-r lg:border-[#38352E]",
                  index === trustItems.length - 1 ? "lg:border-r-0" : "",
                ].filter(Boolean).join(" ")}
              >
                <item.icon className="h-7 w-7 lg:h-5 lg:w-5 text-[#F5C451] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs lg:text-sm font-medium uppercase tracking-[0.12em] text-[#C9C2B6] leading-tight">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
