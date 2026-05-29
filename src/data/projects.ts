export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  image: string;
  gallery: string[];
  slug: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Výkop základů rodinného domu",
    category: "Výkop základů",
    description: "Přesný výkop základů s odvozem zeminy. Plocha připravená pro betonáž.",
    location: "Praha-východ",
    year: "2025",
    image: "/images/projects/projekt-1/hero.jpg",
    gallery: [
      "/images/projects/projekt-1/hero.jpg",
      "/images/projects/projekt-1/02.jpg",
      "/images/projects/projekt-1/03.jpg",
      "/images/projects/projekt-1/04.jpg",
      "/images/projects/projekt-1/05.jpg",
    ],
    slug: "vykop-zakladu-rodinny-dum",
  },
  {
    id: "2",
    title: "Výkop bazénu v soukromé zahradě",
    category: "Výkop bazénu",
    description: "Výkop pro bazén dle projektu. Šetrná práce bez poškození zahrady.",
    location: "Středočeský kraj",
    year: "2025",
    image: "/images/projects/projekt-2/hero.jpg",
    gallery: [
      "/images/projects/projekt-2/hero.jpg",
      "/images/projects/projekt-2/02.jpg",
      "/images/projects/projekt-2/03.jpg",
      "/images/projects/projekt-2/04.jpg",
      "/images/projects/projekt-2/05.jpg",
    ],
    slug: "vykop-bazenu-soukroma-zahrada",
  },
  {
    id: "3",
    title: "Bazén na klíč — výkop a instalace",
    category: "Bazén na klíč",
    description: "Bazén na klíč — od výkopu po instalaci. Naše specializace.",
    location: "Středočeský kraj",
    year: "2025",
    image: "/images/projects/projekt-3/hero.jpg",
    gallery: [
      "/images/projects/projekt-3/hero.jpg",
      "/images/projects/projekt-3/02.jpg",
      "/images/projects/projekt-3/03.jpg",
      "/images/projects/projekt-3/04.jpg",
    ],
    slug: "bazen-na-klic",
  },
  {
    id: "4",
    title: "Demolice rekreační chaty a úklid pozemku",
    category: "Demolice + úklid",
    description: "Demolice chaty s tříděním materiálu. Kompletní úklid a odvoz odpadu.",
    location: "Praha-východ",
    year: "2025",
    image: "/images/projects/projekt-4/hero.jpg",
    gallery: [
      "/images/projects/projekt-4/hero.jpg",
      "/images/projects/projekt-4/02.jpg",
      "/images/projects/projekt-4/03.jpg",
      "/images/projects/projekt-4/04.jpg",
    ],
    slug: "demolice-rekreacni-chaty",
  },
  {
    id: "5",
    title: "Terénní úpravy a deska pro bungalov",
    category: "Terénní úpravy",
    description: "Úprava terénu a betonáž základové desky. Příprava pro novostavbu.",
    location: "Středočeský kraj",
    year: "2024",
    image: "/images/projects/projekt-5/hero.jpg",
    gallery: [
      "/images/projects/projekt-5/hero.jpg",
      "/images/projects/projekt-5/02.jpg",
      "/images/projects/projekt-5/03.jpg",
    ],
    slug: "terenni-upravy-bungalov",
  },
  {
    id: "6",
    title: "Demolice staré nemovitosti",
    category: "Demolice",
    description: "Demolice nemovitosti v obci. Šetrné bourání s úklidem a odvozem.",
    location: "Praha-východ",
    year: "2024",
    image: "/images/projects/projekt-6/hero.jpg",
    gallery: [
      "/images/projects/projekt-6/hero.jpg",
      "/images/projects/projekt-6/02.jpg",
      "/images/projects/projekt-6/03.jpg",
      "/images/projects/projekt-6/04.jpg",
    ],
    slug: "demolice-stare-nemovitosti",
  },
];

