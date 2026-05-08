export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Ozvete se nám",
    description:
      "Krátce popíšete, co potřebujete realizovat, kde se zakázka nachází a v jakém termínu ji potřebujete.",
  },
  {
    number: 2,
    title: "Upřesníme rozsah",
    description:
      "Probereme přístup na pozemek, typ výkopu, odvoz zeminy, potřebnou techniku a další důležité detaily.",
  },
  {
    number: 3,
    title: "Navrhneme řešení",
    description:
      "Zvolíme vhodný postup, techniku a orientační rozsah prací podle typu zakázky.",
  },
  {
    number: 4,
    title: "Realizujeme práci",
    description:
      "Přijedeme s technikou, provedeme domluvené práce a místo předáme v dohodnutém stavu.",
  },
];
