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
      "Specializace na výkopy bazénů. Realizujeme výkopy základů, inženýrských sítí, sklepů, jímek, čištiček a další stavební přípravu.",
    bullets: [
      "★ Výkopy bazénů — specializace",
      "Výkopy základů a sklepů RD",
      "Výkopy pro inženýrské sítě",
      "Drenáže a odvodnění pozemků",
    ],
    icon: Pickaxe,
  },
  {
    id: "terenni-upravy",
    title: "Terénní úpravy a zahrady",
    description:
      "Úpravy a realizace zahrad, zarovnání pozemků, modelace terénu, svahování a rekultivace. (Mimo horských oblastí.)",
    bullets: [
      "Úpravy a realizace zahrad",
      "Modelace terénu a svahování",
      "Rekultivace prostranství",
      "Zhotovení zpevněných cest",
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
      "Údržba travních porostů, mulčování pozemků a údržba komunikací pro obce a soukromé klienty.",
    bullets: [
      "Mulčování pozemků",
      "Údržba travních porostů",
      "Údržba komunikací",
      "Čištění prostranství",
    ],
    icon: Trees,
  },
  {
    id: "bouraci-pripravne-prace",
    title: "Demolice zahradních domků",
    description:
      "Demolice zahradních domků, přístavků, plotů a menších staveb. Vyklizení objektů, čištění pozemků a likvidace pařezů.",
    bullets: [
      "Demolice zahradních domků a přístavků",
      "Bourání plotů a menších staveb",
      "Vyklizení a čištění pozemků",
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
