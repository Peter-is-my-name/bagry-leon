export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

// Google Reviews - Bagry Leon
export const reviews: Review[] = [
  {
    id: "1",
    author: "Petr K.",
    rating: 5,
    text: "Rychlá domluva, profesionální přístup a kvalitně odvedená práce. Výkop základů proběhl bez problémů, všechno bylo uklizeno. Určitě doporučuji!",
    date: "2025-03",
  },
  {
    id: "2",
    author: "Markéta S.",
    rating: 5,
    text: "Výkopové práce proběhly podle dohody, vše bylo čisté a bez komplikací. Cenová nabídka byla férová, termín dodržen. Děkuji za spolupráci.",
    date: "2025-02",
  },
  {
    id: "3",
    author: "Jan M.",
    rating: 5,
    text: "Spolehlivá firma s vlastní technikou a férovým jednáním. Terénní úpravy na zahradě dopadly skvěle. Pan Leon je ochotný a zkušený operátor.",
    date: "2025-01",
  },
  {
    id: "4",
    author: "Jana P.",
    rating: 5,
    text: "Naprostá spokojenost! Bagr přijel přesně na čas, práce byla hotová rychleji než jsem čekala. Cena odpovídala dohodě, žádné skryté poplatky.",
    date: "2024-12",
  },
  {
    id: "5",
    author: "Martin H.",
    rating: 5,
    text: "Realizace výkopu pro bazén. Precizní práce, perfektní roviny. S firmou Bagry Leon jsem spokojený, určitě je oslovím při další stavbě.",
    date: "2024-11",
  },
  {
    id: "6",
    author: "Kateřina L.",
    rating: 5,
    text: "Příjezdová cesta k domu byla v dezolátním stavu. Pan Leon s bagrem a drtičem kamene vše opravil za jeden den. Skvělá práce za rozumnou cenu!",
    date: "2024-10",
  },
  {
    id: "7",
    author: "Tomáš B.",
    rating: 5,
    text: "Demolice staré garáže a odvoz suti. Vše proběhlo hladce, komunikace byla výborná. Profesionální přístup a kvalitní technika.",
    date: "2024-09",
  },
  {
    id: "8",
    author: "Lucie V.",
    rating: 5,
    text: "Zemní práce při rekonstrukci zahrady. Bagry Leon odvedl precizní práci, respektoval zavedené rostliny a komunikoval po celou dobu stavby.",
    date: "2024-08",
  },
];
