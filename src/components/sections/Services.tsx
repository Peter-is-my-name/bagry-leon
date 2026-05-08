import { services } from "@/data/services";

export function Services() {
  return (
    <section id="sluzby" className="bg-[#0D0F0F] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[var(--font-barlow)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F5F1E8] mb-4">
            Služby
          </h2>
          <p className="text-lg text-[#8D867A]">
            Zajišťujeme kompletní zemní, výkopové, dopravní a komunální práce pro soukromé klienty, stavební firmy i obce.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#1A1D1D] border border-[#38352E] hover:border-[#F5C451] transition-all duration-300 p-6 lg:p-8"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F5C451]/10 group-hover:bg-[#F5C451]/20 transition-colors">
                  <service.icon className="h-6 w-6 text-[#F5C451]" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-[var(--font-barlow)] text-xl font-bold uppercase text-[#F5F1E8] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#8D867A] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-[#C9C2B6]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#F5C451] flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
