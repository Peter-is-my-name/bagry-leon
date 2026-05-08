// Company Information - NAP (Name, Address, Phone) for SEO consistency
export const COMPANY = {
  name: "BAGRY LEON",
  fullName: "BAGRY LEON - Zemní a výkopové práce",
  description: "Profesionální zemní a výkopové práce, terénní úpravy a nákladní doprava v lokalitě Praha-východ.",
  email: "bagryleon@seznam.cz",
  phones: ["+420 777 111 708", "+420 777 556 850"],
  primaryPhone: "+420 777 111 708",
  whatsapp: "+420 777 111 708",
  address: {
    street: "Šeříková 1049",
    city: "Šestajovice",
    postalCode: "250 92",
    region: "Praha-východ",
    country: "CZ",
    full: "Šeříková 1049, 250 92 Šestajovice, Praha-východ",
  },
  gps: {
    lat: 50.1136,
    lng: 14.6776,
  },
  ico: "", // To be filled if available
  url: "https://www.bagryleon.cz",
} as const;

// Service Areas for Local SEO
export const SERVICE_AREAS = [
  "Šestajovice",
  "Praha-východ",
  "Praha",
  "Klánovice",
  "Úvaly",
  "Jirny",
  "Nehvizdy",
  "Horní Počernice",
  "Běchovice",
] as const;

// Navigation Links (for multi-page site)
export const NAV_LINKS = [
  { href: "/sluzby", label: "Služby" },
  { href: "/prubeh", label: "Průběh" },
  { href: "/technika", label: "Technika" },
  { href: "/projekty", label: "Projekty" },
  // { href: "/recenze", label: "Recenze" }, // Hidden from nav but page exists
  // { href: "/faq", label: "FAQ" }, // Hidden from nav but page exists
  { href: "/kontakt", label: "Kontakt" },
] as const;

// Footer Links (sitemap structure)
export const FOOTER_LINKS = {
  sluzby: [
    { href: "/sluzby/zemni-prace", label: "Zemní práce" },
    { href: "/sluzby/vykopove-prace", label: "Výkopové práce" },
    { href: "/sluzby/terenni-upravy", label: "Terénní úpravy" },
    { href: "/sluzby/nakladni-doprava", label: "Nákladní doprava" },
    { href: "/sluzby/zaklady-domu", label: "Základy domů" },
    { href: "/sluzby/inzenyrske-site", label: "Inženýrské sítě" },
    { href: "/sluzby/demolice", label: "Demolice" },
  ],
  spolecnost: [
    { href: "/prubeh", label: "Průběh spolupráce" },
    { href: "/technika", label: "Naše technika" },
    { href: "/projekty", label: "Projekty" },
    { href: "/recenze", label: "Recenze" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  pravni: [
    { href: "/ochrana-osobnich-udaju", label: "Ochrana osobních údajů" },
    { href: "/cookies", label: "Cookies" },
  ],
} as const;

// Metadata
export const METADATA = {
  title: "Zemní a výkopové práce Praha-východ | BAGRY LEON",
  description:
    "BAGRY LEON nabízí zemní a výkopové práce, terénní úpravy, nákladní dopravu, komunální služby a vlastní techniku v lokalitě Praha-východ a okolí.",
  keywords: [
    "zemní práce Praha-východ",
    "výkopové práce Praha-východ",
    "výkopy základů",
    "výkopy přípojek",
    "odvoz zeminy",
    "nákladní doprava stavebního materiálu",
    "terénní úpravy",
    "komunální služby",
    "bagrování",
    "strojní výkopové práce",
    "Šestajovice",
    "minirypadlo",
    "pronájem bagru",
  ],
} as const;
