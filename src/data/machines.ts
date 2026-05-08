export interface Machine {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  image?: string;
}

export const machines: Machine[] = [
  {
    id: "mercedes-atego",
    name: "Mercedes Atego",
    category: "Kontejnerový vůz s hydraulickou rukou",
    description:
      "Nosič kontejnerů s hydraulickou rukou Atlas 60.1 pro převoz, nakládku a manipulaci se stavebním materiálem.",
    specs: [
      "Hydraulická ruka Atlas 60.1",
      "Zdvih 1,9 m — 3 000 kg",
      "Zdvih 3,5 m — 1 700 kg",
      "Zdvih 5,0 m — 1 000 kg",
      "Zdvih 6,1 m — 600 kg",
    ],
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_04.jpg",
  },
  {
    id: "hitachi-zaxis-33u",
    name: "Hitachi Zaxis 33U",
    category: "Kompaktní pásové rypadlo",
    description:
      "Rypadlo vhodné pro výkopy základů, přípojek, bazénů, jímek, drenáží a přesné terénní práce.",
    specs: [
      "Váha 3,5 tuny",
      "Hloubka podkopu 270 cm",
      "Lžíce 35–70 cm",
      "Hydraulická svahovka 120 cm",
      "Vrták na díry a ploty",
    ],
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_01.jpg",
  },
  {
    id: "bobcat-773",
    name: "BOBCAT model 773",
    category: "Smykový kolový nakladač",
    description:
      "Rychlý a obratný nakladač pro přesun zeminy, písku, štěrku a stavebního materiálu po pozemku i na nákladní auto.",
    specs: [
      "Váha 2,8 t",
      "Rychlé nakládání",
      "Přesun zeminy, písku a štěrku",
      "Vhodný pro stavby i pozemky",
    ],
    image: "https://www.zemni-vykopove-prace.eu/img/fotogalerie/foto_06.jpg",
  },
];
