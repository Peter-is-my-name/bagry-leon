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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-3 py-6 px-4 ${
                index < trustItems.length - 1
                  ? "lg:border-r border-[#38352E]"
                  : ""
              } ${index % 2 === 0 ? "border-r border-[#38352E] lg:border-r" : ""}`}
            >
              <item.icon className="h-5 w-5 text-[#F5C451]" />
              <span className="text-sm uppercase tracking-wider text-[#C9C2B6]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
