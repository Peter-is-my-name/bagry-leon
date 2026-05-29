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
    description:
      "Kompletní výkop pásových základů pro rodinný dům na vesnické parcele za starým zděným plotem. Přesný výkop podle vytýčení, čistý odvoz výkopku a finální zarovnání plochy připravené pro betonáž.",
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
    description:
      "Výkop pro fóliový bazén v zahradě rodinného domu. Přesné rozměry podle projektu, rovné stěny a šetrný přístup techniky bez poškození trávníku či dlažby.",
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
    description:
      "Kompletní realizace bazénu od výkopu po usazení tělesa. Přesný výkop pro plastový bazén, výztuhy stěn, izolace a finální osazení v jediné zakázce. Specializace, kterou děláme nejraději.",
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
    description:
      "Demolice staré dřevěné chaty a kompletní úklid pozemku. Šetrná demolice s rozdělením materiálu, vybourání starých základů, naložení do kontejnerů a odvoz veškerého odpadu. Pozemek připravený k novému využití.",
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
    description:
      "Terénní úpravy a základová deska pro rekreační objekt. Odstranění staré chaty, urovnání terénu, výkop a betonáž základové desky s kamenným soklem připravené pro novostavbu.",
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
    description:
      "Demolice staré chátrající nemovitosti uprostřed obce. Šetrné bourání s ohledem na sousední novostavbu, kompletní odklízení a odvoz suti. Pozemek připravený k novému využití.",
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

