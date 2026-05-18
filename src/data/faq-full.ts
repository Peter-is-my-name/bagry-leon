export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FaqItem[] = [
  // Obecné
  {
    question: "Jakou oblast obsluhujete?",
    answer: "Pracujeme primárně v Praze-východ a v Praze. Konkrétně v okresech: Říčany, Brandýs nad Labem, Český Brod, Úvaly, Čelákovice, Kostelec nad Černými lesy a dalších obcích. Dle dohody zajišťujeme realizace v celém Středočeském kraji.",
    category: "Obecné",
  },
  {
    question: "Pracujete i o víkendu?",
    answer: "Jsme NONSTOP dostupní – konzultace probíhají i o víkendu. Pro urgentní zakázky nebo termíny náročné na počasí domluvíme i víkendovou realizaci. Případný příplatek konzultujeme předem.",
    category: "Obecné",
  },
  {
    question: "Jste pojištěni?",
    answer: "Ano, máme uzavřené pojištění odpovědnosti za škodu způsobenou při podnikání. Na vyžádání rádi předložíme potvrzení o pojištění.",
    category: "Obecné",
  },
  {
    question: "Jaké máte IČO a DIČ?",
    answer: "IČO: [TODO: doplnit] — jedná se o ryze českou firmu, nejsme plátci DPH (nebo jsme plátci DPH — dle skutečnosti klienta).",
    category: "Obecné",
  },

  // Cena a kalkulace
  {
    question: "Jak zjistím orientační cenu?",
    answer: "Nejjednodušší je zavolat na +420 777 111 708 nebo vyplnit kontaktní formulář. Pro přibližnou kalkulaci potřebujeme vědět: rozsah prací, lokalitu, přístup na pozemek a ideální termín. Přesnou cenovou nabídku dodáme po bezplatné obhlídce.",
    category: "Cena a kalkulace",
  },
  {
    question: "Co ovlivňuje cenu zakázky?",
    answer: "Cenu ovlivňuje: rozsah prací, typ půdy (hlína, jíl, skála), přístup na pozemek, vzdálenost odvozu suti, potřeba dovozu materiálu, složitost terénu a aktuální ceny pohonných hmot. Vždy dodáme transparentní kalkulaci bez skrytých položek.",
    category: "Cena a kalkulace",
  },
  {
    question: "Vystavujete fakturu s DPH?",
    answer: "Ano, vystavujeme standardní daňové doklady. Jsme plátci DPH [TODO: potvrdit]. Fakturaci řešíme po dokončení zakázky a předání pozemku.",
    category: "Cena a kalkulace",
  },
  {
    question: "Jaké jsou platební podmínky?",
    answer: "Standardně fakturujeme po dokončení zakázky se splatností 14 dnů. U rozsáhlejších zakázek (nad 100 000 Kč) je možné domluvit zálohovou platbu. Vše upřesníme v cenové nabídce.",
    category: "Cena a kalkulace",
  },

  // Termíny
  {
    question: "Jak rychle umíte přijet na obhlídku?",
    answer: "Většinou do 3 pracovních dnů od poptávky. V akutních případech se snažíme reagovat ještě rychleji. Obhlídka je bezplatná a nezávazná.",
    category: "Termíny",
  },
  {
    question: "Jak dlouho trvá realizace?",
    answer: "Záleží na rozsahu. Menší zakázky (výkop pro přípojka, odstranění pařezů) — 1–2 dny. Střední zakázky (základy RD, terénní úpravy) — 3–5 dnů. Větší zakázky — 1–3 týdny. Po obhlídce dodáme přesný časový harmonogram.",
    category: "Termíny",
  },
  {
    question: "Jak dlouho dopředu se musím objednat?",
    answer: "Doporučujeme se ozvat alespoň 2–3 týdny před požadovaným termínem, zejména v sezóně (duben–říjen). V mimořádných případech se snažíme vyjít vstříc i s kratším termínem.",
    category: "Termíny",
  },

  // Technika
  {
    question: "Jakou techniku používáte?",
    answer: "Disponujeme vlastním strojovým parkem: pásové rypadlo Hitachi Zaxis 33U (3,5 t), smykový nakladač BOBCAT 773, kontejnerový vůz Mercedes Atego s hydraulickou rukou Atlas 60.1. Techniku pravidelně servisujeme, což minimalizuje riziko poruch.",
    category: "Technika",
  },
  {
    question: "Vejde se bagr na malý pozemek?",
    answer: "Naše nejmenší rypadlo má šířku 1,5 m a projde běžnou zahradní brankou. Smykový nakladač je ještě kompaktnější. Při obhlídce vždy zhodnotíme přístup a navrhneme řešení.",
    category: "Technika",
  },
  {
    question: "Co když narazíte na skálu?",
    answer: "V případě výskytu skalnatého podloží okamžitě kontaktujeme investora. Disponujeme hydraulickým kladivem pro bourání menších kamenů. Pro rozsáhlejší skalní podloží zajistíme specializovanou firmu na trhání kamene.",
    category: "Technika",
  },

  // Zakázky
  {
    question: "Děláte i menší zakázky pro soukromé osoby?",
    answer: "Ano, klienty jsou pro nás jak velké stavební firmy, tak soukromé osoby stavící rodinný dům. Nejmenší zakázky (např. jeden pařez) realizujeme spíše dle aktuální vytíženosti, ale rádi pomůžeme.",
    category: "Zakázky",
  },
  {
    question: "Umíte zajistit odvoz zeminy?",
    answer: "Ano, součástí naší služby je odvoz vykopané zeminy, suti a odpadu naší nákladní technikou. Zajišťujeme také dovoz štěrku, písku nebo zdravé zeminy pro zásyp.",
    category: "Zakázky",
  },
  {
    question: "Pracujete i v zimě?",
    answer: "Ano, v zimních měsících pracujeme pokud to povětrnostní podmínky dovolí. V mrazech pod -5°C může být práce omezená nebo neefektivní. V takovém případě navrhneme alternativní termín.",
    category: "Zakázky",
  },
  {
    question: "Musím být při práci na místě?",
    answer: "Není nutné, ale pro první den a předání zakázky doporučujeme osobní přítomnost. Pokud nemůžete být přítomni, lze se domluvit na zpřístupnění pozemku a komunikaci telefonicky.",
    category: "Zakázky",
  },

  // Smlouva
  {
    question: "Je potřeba podepsat smlouvu?",
    answer: "U větších zakázek (nad 50 000 Kč) sepisujeme jednoduchou dílčí smlouvu upřesňující rozsah, cenu a termín. U menších zakázek postačí písemná cenová nabídka, kterou schválíte e-mailem nebo SMS.",
    category: "Smlouva a fakturace",
  },
  {
    question: "Máte záruku na práci?",
    answer: "Ano, poskytujeme záruku na provedené zemní práce. Konkrétní délku záruky upřesníme v cenové nabídce dle typu zakázky. Reklamace řešíme operativně a konstruktivně.",
    category: "Smlouva a fakturace",
  },
];
