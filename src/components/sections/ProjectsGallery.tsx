import Link from "next/link";

const galleryImages = [
  { 
    src: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_01.jpg", 
    title: "Zemní práce",
    size: "large" 
  },
  { 
    src: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_02.jpg", 
    title: "Výkopové práce",
    size: "large" 
  },
  { 
    src: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_03.jpg", 
    title: "Terénní úpravy",
    size: "small" 
  },
  { 
    src: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_04.jpg", 
    title: "Nákladní doprava",
    size: "small" 
  },
  { 
    src: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_05.jpg", 
    title: "Komunální služby",
    size: "small" 
  },
  { 
    src: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_06.jpg", 
    title: "Technika v akci",
    size: "small" 
  },
];

export function ProjectsGallery() {
  const largeImages = galleryImages.filter(img => img.size === "large");
  const smallImages = galleryImages.filter(img => img.size === "small");

  return (
    <section id="projekty" className="bg-[#0D0F0F] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-[var(--font-barlow)] text-2xl sm:text-3xl font-bold uppercase text-[#F5F1E8]">
              Realizace v terénu
            </h2>
            <p className="text-sm text-[#8D867A] mt-2">
              Ukázky naší práce pro soukromé klienty i firmy
            </p>
          </div>
          <Link
            href="/projekty"
            className="hidden sm:block text-xs uppercase tracking-wider text-[#F5C451] hover:text-[#FFD875] transition-colors"
          >
            Všechny projekty →
          </Link>
        </div>

        {/* Bento-style Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Large images - span 2 columns each */}
          {largeImages.map((image, index) => (
            <div
              key={`large-${index}`}
              className="col-span-2 aspect-[16/9] relative group overflow-hidden rounded-sm"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0F]/80 via-[#0D0F0F]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-xs uppercase tracking-wider text-[#F5C451] font-medium">
                  {image.title}
                </span>
              </div>
            </div>
          ))}

          {/* Small images - square */}
          {smallImages.map((image, index) => (
            <div
              key={`small-${index}`}
              className="aspect-square relative group overflow-hidden rounded-sm"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase tracking-wider text-[#F5C451]">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/projekty"
            className="text-xs uppercase tracking-wider text-[#F5C451] hover:text-[#FFD875] transition-colors"
          >
            Všechny projekty →
          </Link>
        </div>
      </div>
    </section>
  );
}
