export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  image: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Výkop základů rodinného domu",
    category: "Základy domů",
    description: "Kompletní výkop základových pásů pro rodinný dům včetně odvozu přebytečné zeminy. Precizní práce podle projektové dokumentace s dodržením všech technických norem.",
    location: "Šestajovice",
    year: "2025",
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_01.jpg",
    slug: "vykop-zakladu-rd-sestajovice",
  },
  {
    id: "2",
    title: "Výkopové práce pro přípojky inženýrských sítí",
    category: "Výkopové práce",
    description: "Výkopy pro přípojky inženýrských sítí — voda, kanalizace a elektřina. Realizace včetně zásypu a zhutnění. Rychlé provedení bez komplikací.",
    location: "Jirny",
    year: "2025",
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_02.jpg",
    slug: "vykopove-prace-pripojky-jirny",
  },
  {
    id: "3",
    title: "Terénní úpravy zahrady",
    category: "Terénní úpravy",
    description: "Nivelace pozemku, odstranění starého porostu a příprava pro novou výsadbu. Kompletní proměna zahrady včetně odvozu veškerého odpadu.",
    location: "Úvaly",
    year: "2024",
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_03.jpg",
    slug: "terenni-upravy-zahrady-uvaly",
  },
  {
    id: "4",
    title: "Nákladní doprava stavebního materiálu",
    category: "Nákladní doprava",
    description: "Přeprava štěrku, písku a dalších stavebních materiálů přímo na stavbu. Včasné dodání bez komplikací. Spolehlivý servis pro stavební firmy.",
    location: "Praha-východ",
    year: "2024",
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_04.jpg",
    slug: "nakladni-doprava-material",
  },
  {
    id: "5",
    title: "Komunální služby pro obec",
    category: "Komunální služby",
    description: "Údržba komunikací, úklid sněhu a zimní údržba pro obecní úřad. Spolehlivá dlouhodobá spolupráce s rychlým reakčním časem.",
    location: "Šestajovice",
    year: "2024",
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_05.jpg",
    slug: "komunalni-sluzby-obec",
  },
  {
    id: "6",
    title: "Práce s minibagrem v omezeném prostoru",
    category: "Zemní práce",
    description: "Precizní práce minibagrem v úzkých uličkách a na těžko přístupných místech. Žádný prostor není překážkou pro kvalitní odvedení práce.",
    location: "Praha",
    year: "2024",
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_06.jpg",
    slug: "minibagr-uzky-prostor",
  },
];

