import { Pickaxe, Mountain, Truck, Trees, Hammer, Package } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "zemni-vykopove-prace",
    title: "Zemní a výkopové práce",
    description:
      "Výkopy základů, inženýrských sítí, sklepů, bazénů, jímek, čističek a další stavební příprava.",
    bullets: [
      "Výkopy základů a sklepů RD",
      "Výkopy pro inženýrské sítě",
      "Výkopy bazénů, jezírek a jímek",
      "Drenáže a odvodnění pozemků",
    ],
    icon: Pickaxe,
  },
  {
    id: "terenni-upravy",
    title: "Terénní úpravy",
    description:
      "Zarovnání pozemků, modelace terénu, svahování, rekultivace a příprava ploch pro zahradní i stavební úpravy.",
    bullets: [
      "Modelace zahrad",
      "Zarovnání terénu",
      "Rekultivace prostranství",
      "Zhotovení zpevněných i nezpevněných cest",
    ],
    icon: Mountain,
  },
  {
    id: "nakladni-doprava",
    title: "Nákladní doprava",
    description:
      "Přeprava písků, štěrků, hlíny, sutí, betonu a dalších stavebních materiálů.",
    bullets: [
      "Doprava stavebních materiálů",
      "Odvoz zeminy a sutě",
      "Pronájem suťových kontejnerů 3–10 m³",
      "Likvidace odpadu",
    ],
    icon: Truck,
  },
  {
    id: "komunalni-sluzby",
    title: "Komunální služby",
    description:
      "Údržba travních porostů, mulčování pozemků, zimní údržba komunikací a chodníků.",
    bullets: [
      "Mulčování pozemků",
      "Zimní údržba",
      "Odklízení sněhu",
      "Údržba komunikací",
    ],
    icon: Trees,
  },
  {
    id: "bouraci-pripravne-prace",
    title: "Bourací a přípravné práce",
    description:
      "Bourací práce, demolice budov, vyklizení objektů, čištění zanedbaných pozemků a likvidace pařezů.",
    bullets: [
      "Demolice a bourací práce",
      "Vyklizení objektů",
      "Čištění pozemků",
      "Likvidace pařezů",
    ],
    icon: Hammer,
  },
  {
    id: "manipulace-materialy",
    title: "Manipulace a materiály",
    description:
      "Manipulace se stavebním materiálem, prodej písků, štěrků a drtí z vlastní deponie.",
    bullets: [
      "Písek, štěrk, drť",
      "Manipulace materiálu",
      "Nakládání a přesun",
      "Práce s hydraulickou rukou",
    ],
    icon: Package,
  },
];
