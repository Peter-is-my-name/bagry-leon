import { machines } from "@/data/machines";
import Link from "next/link";

export function MachineFleet() {
  return (
    <section id="technika" className="bg-[#121515] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8] mb-4">
            Technika připravená pro různé typy zakázek
          </h2>
          <p className="text-lg text-[#8D867A]">
            Díky vlastnímu strojovému parku dokážeme flexibilně řešit menší i větší práce bez zbytečných prodlev.
          </p>
        </div>

        {/* Machine Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {machines.map((machine) => (
            <div
              key={machine.id}
              className="group bg-[#1A1D1D] border border-[#38352E] hover:border-[#F5C451] transition-all duration-300"
            >
              {/* Machine Image */}
              <div className="aspect-video bg-[#202424] border-b border-[#38352E] overflow-hidden">
                {machine.image ? (
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">🚜</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs uppercase tracking-wider text-[#F5C451] mb-2">
                  {machine.category}
                </span>
                <h3 className="font-[var(--font-barlow)] text-2xl font-bold uppercase text-[#F5F1E8] mb-3">
                  {machine.name}
                </h3>
                <p className="text-sm text-[#8D867A] mb-6 leading-relaxed">
                  {machine.description}
                </p>

                {/* Specs */}
                <div className="space-y-2">
                  {machine.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-sm text-[#C9C2B6]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#F5C451]" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-wider bg-[#F5C451] text-[#0D0F0F] hover:bg-[#FFD875] transition-colors"
          >
            Zjistit dostupnost techniky
          </Link>
        </div>
      </div>
    </section>
  );
}
