import {
  Tractor,
  HardHat,
  Trees,
  Truck,
  Home,
  Wrench,
  Hammer,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatIncludes: string[];
  process: { title: string; description: string }[];
  relevantMachines: string[];
  audience: { target: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const servicesDetail: ServiceDetail[] = [
  {
    slug: "zemni-prace",
    title: "Zemní práce",
    shortTitle: "Zemní práce",
    icon: Tractor,
    description: "Kompletní zemní práce pro rodinné domy, stavby i komunikace. Vlastní technika, rychlé termíny.",
    metaTitle: "Zemní práce Praha-východ | Bagry Leon",
    metaDescription: "Profesionální zemní práce v Praze-východ a okolí. Výkopy základů, terénní úpravy, inženýrské sítě. Vlastní technika, licencovaní operátoři. Poptávk",
    h1: "Zemní práce Praha-východ — kompletní servis na klíč",
    intro: `Zemní práce jsou základním kamenem každé stavby. Ať už stavíte rodinný dům, rekonstruujete pozemek nebo připravujete parcelu pro development, kvalitně provedené zemní práce rozhodují o celkové plynulosti projektu.

Bagry Leon působí v oblasti Praha-východ již řadu let. Disponujeme vlastním strojovým parkem, který nám umožňuje realizovat zakázky rychle a efektivně — bez čekání na externí dodavatele techniky. Naši operátoři mají dlouholeté zkušenosti a potřebná oprávnění.

Pracujeme převážně v okrese Praha-východ (Říčany, Brandýs nad Labem, Český Brod, Úvaly, Čelákovice, Kostelec nad Černými lesy a další obce), ale dle dohody zajišťujeme realizace v celém Středočeském kraji a Praze.`,
    whatIncludes: [
      "Výkopy základů pro rodinné i bytové domy",
      "Terénní úpravy a modelace pozemků",
      "Výkopy pro inženýrské sítě (voda, kanalizace, plyn, elektro)",
      "Přípojky k nemovitostem",
      "Odvoz a dovoz zeminy, písku, štěrku",
      "Likvidace a rekultivace pozemků",
      "Drenáže a odvodnění",
      "Zpevněné a nezpevněné plochy",
    ],
    process: [
      { title: "Konzultace", description: "Zavolejte nebo napište — do 24 hodin se ozveme a domluvíme podrobnosti." },
      { title: "Obhlídka", description: "Bezplatně přijedeme na místo, zhodnotíme terén a možnosti přístupu." },
      { title: "Cenová nabídka", description: "Dodáme transparentní kalkulaci bez skrytých položek." },
      { title: "Realizace", description: "Pracujeme vlastní technikou — termín dodržíme." },
    ],
    relevantMachines: ["Hitachi Zaxis 33U", "Mercedes Atego", "BOBCAT 773"],
    audience: [
      { target: "Soukromé osoby", description: "Rodinné domy, zahrady, bazény, garáže — každá zakázka je pro nás důležitá." },
      { target: "Stavební firmy", description: "Spolehlivý subdodavatel zemních prací s vlastní technikou." },
      { target: "Developeři", description: "Příprava pozemků pro rezidenční projekty — zkušenosti, reference." },
    ],
    faqs: [
      { question: "Jakou oblast obsluhujete?", answer: "Primárně Praha-východ a okolí (Říčany, Brandýs nad Labem, Český Brod, Úvaly, Čelákovice, Kostelec nad Černými lesy). Dle dohody zajišťujeme realizace v celém Středočeském kraji a Praze." },
      { question: "Pracujete i o víkendu?", answer: "Jsme NONSTOP dostupní – konzultace probíhají i o víkendu. Pro urgentní zakázky nebo termíny náročné na počasí domluvíme i víkendovou realizaci." },
      { question: "Jak rychle umíte přijet na obhlídku?", answer: "Většinou do 3 pracovních dnů od poptávky. V akutních případech se snažíme reagovat ještě rychleji." },
      { question: "Děláte i menší zakázky?", answer: "Ano, nejmenší bagr má 3,5 tuny a je ideální pro zakázky na menších pozemcích." },
      { question: "Vystavíte fakturu s DPH?", answer: "Ano, jsme plátci DPH a vystavujeme standardní daňové doklady." },
    ],
    relatedServices: ["vykopove-prace", "terenni-upravy", "zaklady-domu"],
  },
  {
    slug: "vykopove-prace",
    title: "Výkopové práce",
    shortTitle: "Výkopové práce",
    icon: HardHat,
    description: "Přesné výkopy pro základy, inženýrské sítě, bazény a jímky. Rychle a čistě.",
    metaTitle: "Výkopové práce Praha-východ | Bagry Leon",
    metaDescription: "Specializované výkopové práce pro základy, inženýrské sítě, bazény a jímky. Praha-východ a okolí. Vlastní pásová rypadla.",
    h1: "Výkopové práce Praha-východ — přesně podle projektu",
    intro: `Výkopové práce vyžadují přesnost, zkušenosti a správnou techniku. Ať už potřebujete vykopat základy pro rodinný dům, přípojky pro inženýrské sítě nebo bazén, každý centimetr se počítá.

Naše pásová rypadla umožňují práci i na menších pozemcích s omezeným přístupem. Díky podkopovému zařízení dosáhneme hloubky až 2,7 metru, což pokryje většinu běžných zakázek.

Výkopové práce provádíme včetně odvozu vykopaného materiálu a případného dovozu zeminy pro zásyp. Součástí naší služby je i úklid staveniště — pozemek předáváme v takovém stavu, v jakém jsme ho našli.`,
    whatIncludes: [
      "Výkopy základů rodinných a bytových domů",
      "Výkopy pro inženýrské sítě (přípojky vody, kanalizace, plynu, elektro)",
      "Výkopy bazénů a jezírek",
      "Výkopy pro jímky a čističky odpadních vod",
      "Výkopy pro tepelná čerpadla",
      "Hloubení rýh pro drenáže",
      "Podkopové práce pod existujícími stavbami",
      "Odstranění pařezů a kořenů",
    ],
    process: [
      { title: "Studie zakázky", description: "Probereme projektovou dokumentaci nebo společně stanovíme rozsah prací." },
      { title: "Označení sítí", description: "Před zahájením zajistíme vyznačení podzemních vedení (IS)." },
      { title: "Realizace výkopu", description: "Pracujeme s milimetrovou přesností — hloubka a šířka dle projektu." },
      { title: "Dokončení", description: "Odvoz přebytečné zeminy, případný dovoz materiálu pro zásyp, úklid." },
    ],
    relevantMachines: ["Hitachi Zaxis 33U", "Mercedes Atego"],
    audience: [
      { target: "Stavební firmy", description: "Přesné výkopy pro základy a sítě dle projektové dokumentace." },
      { target: "Architekti a projektanti", description: "Realizace dle vašich výkresů — respektujeme tolerance." },
      { target: "Soukromí investoři", description: "Bazény, jímky, přípojky — spolehlivé provedení na klíč." },
    ],
    faqs: [
      { question: "Co když narazíte na skálu?", answer: "V případě výskytu skalnatého podloží nebo jiné překážky okamžitě kontaktujeme investora. Disponujeme také hydraulickým kladivem pro bourání menších kamenů." },
      { question: "Jaká je hloubka podkopu?", answer: "Naše rypadlo Hitachi Zaxis 33U umožňuje hloubku podkopu až 270 cm, což pokryje většinu zakázek na rodinné domy i inženýrské sítě." },
      { question: "Umíte zajistit odvoz zeminy?", answer: "Ano, součástí služby je odvoz vykopaného materiálu naší nákladní technikou. Zajišťujeme také dovoz štěrku, písku nebo zeminy pro zásyp." },
      { question: "Pracujete v zimě?", answer: "Ano, v zimních měsících pracujeme pokud to povětrnostní podmínky dovolí. V mrazech pod -5°C může být práce omezená." },
    ],
    relatedServices: ["zemni-prace", "inzenyrske-site", "zaklady-domu"],
  },
  {
    slug: "terenni-upravy",
    title: "Terénní úpravy",
    shortTitle: "Terénní úpravy",
    icon: Trees,
    description: "Modelace pozemků, odstranění porostů, rekultivace. Připravíme váš pozemek pro další využití.",
    metaTitle: "Terénní úpravy Praha-východ | Bagry Leon",
    metaDescription: "Terénní úpravy a modelace pozemků v Praze-východ. Odstranění pařezů, vyrovnání terénu, rekultivace. Vlastní technika.",
    h1: "Terénní úpravy — připravíme pozemek pro stavbu",
    intro: `Terénní úpravy jsou často podceňovanou, ale zásadní částí přípravy stavby. Správně upravený pozemek šetří čas i peníze při následné realizaci a předchází problémům s odvodněním.

Naše služba zahrnuje kompletní přípravu pozemku — od odstranění náletových dřevin a pařezů přes vyrovnání terénu až po finální úpravy před předáním stavebnímu dozoru.

Pracujeme jak na zelených loukách, tak na zanedbaných pozemcích, kde je potřeba nejprve uklidit letité nálety a sutiny.`,
    whatIncludes: [
      "Odstranění náletových dřevin a keřů",
      "Frézování a odstranění pařezů",
      "Vyrovnání a modelace terénu",
      "Zarovnání svahů a teras",
      "Likvidace starých základů a betonových zbytků",
      "Odvoz suti a biomasy",
      "Finální úpravy před stavbou",
      "Založení travnatých ploch",
    ],
    process: [
      { title: "Prohlídka pozemku", description: "Zhodnotíme stávající stav, porosty a překážky." },
      { title: "Plán úprav", description: "Dle vašich požadavků a projektu navrhneme postup prací." },
      { title: "Realizace", description: "Postupné odstranění porostů, frézování pařezů, modelace terénu." },
      { title: "Finální úprava", description: "Uklizený pozemek připravený pro další fázi stavby." },
    ],
    relevantMachines: ["Hitachi Zaxis 33U", "BOBCAT 773", "Mercedes Atego"],
    audience: [
      { target: "Majitelé pozemků", description: "Příprava parcely před stavbou rodinného domu." },
      { target: "Zahrádkáři", description: "Modelace zahrad, odstranění pařezů, úprava svahů." },
      { target: "Investoři", description: "Rekultivace zanedbaných pozemků pro budoucí development." },
    ],
    faqs: [
      { question: "Umíte odstranit staré pařezy?", answer: "Ano, disponujeme frézou na pařezy. Dokážeme odstranit pařezy do průměru cca 50 cm včetně kořenů." },
      { question: "Co se stane s odstraněným materiálem?", answer: "Biomasu (větve, keře) odvážíme na kompostárnu. Sutiny a stavební odpad odvážíme na skládku nebo recyklaci." },
      { question: "Jak dlouho trvá úprava standardního pozemku?", answer: "Záleží na velikosti a stavu. Typický pozemek 800–1000 m² upravíme během 2–3 pracovních dnů." },
    ],
    relatedServices: ["zemni-prace", "vykopove-prace", "demolice"],
  },
  {
    slug: "nakladni-doprava",
    title: "Nákladní doprava",
    shortTitle: "Nákladní doprava",
    icon: Truck,
    description: "Přeprava materiálů, odvoz suti, dovoz štěrku a písku. Kontejnery na odpad.",
    metaTitle: "Nákladní doprava stavební materiál Praha-východ | Bagry Leon",
    metaDescription: "Přeprava suti, zeminy, štěrku, písku. Odvoz odpadu kontejnery 3–10 m³. Praha-východ a okolí. Hydraulická ruka.",
    h1: "Nákladní doprava — přeprava materiálů a odvoz odpadu",
    intro: `Součástí každé stavby je logistika materiálu. Potřebujete odvézt suti nebo naopat dodat štěrk či zeminu pro zásyp? Naše nákladní auto s hydraulickou rukou zvládne obojí.

Mercedes Atego s kontejnerovým nosičem a hydraulickou rukou Atlas 60.1 umožňuje nejen odvoz materiálu, ale i přesnou manipulaci se stavebním materiálem na staveništi. Ruka dosáhne až do výšky 6,1 metru a zvedne až 3 tuny.

Nabízíme také pronájem kontejnerů na stavební odpad (objemy 3–10 m³) s odvozem a likvidací.`,
    whatIncludes: [
      "Přeprava štěrků, písků, zeminy",
      "Odvoz suti a stavebního odpadu",
      "Dovoz materiálu pro zásypy",
      "Manipulace se stavebním materiálem (palety, překlady)",
      "Pronájem kontejnerů 3–10 m³",
      "Likvidace stavebního odpadu",
      "Překládání materiálu na staveništi",
    ],
    process: [
      { title: "Poptávka", description: "Sdělte druh materiálu, objem a místo nakládky/vykládky." },
      { title: "Cenová kalkulace", description: "Transparentní cena za přepravu nebo pronájem kontejneru." },
      { title: "Realizace", description: "Doprava na čas, profesionální nakládka a vykládka." },
    ],
    relevantMachines: ["Mercedes Atego"],
    audience: [
      { target: "Stavební firmy", description: "Pravidelná doprava materiálu, odvoz odpadu z velkých zakázek." },
      { target: "Soukromé osoby", description: "Jednorázový odvoz suti, dovoz štěrku pro příjezdovou cestu." },
      { target: "Řemeslníci", description: "Likvidace odpadu z rekonstrukcí, přeprava materiálu." },
    ],
    faqs: [
      { question: "Jak velké kontejnery nabízíte?", answer: "Máme k dispozici kontejnery o objemu 3, 5, 7 a 10 m³. Výběr závisí na typu a objemu odpadu." },
      { question: "Co vše lze hodit do kontejneru?", answer: "Stavební suť, staré obklady, dlažby, dřevo, kov, směsný odpad. Nevhodné jsou nebezpečné látky, azbest, tekutiny." },
      { question: "Jaký je dosah hydraulické ruky?", answer: "Hydraulická ruka Atlas 60.1 dosáhne až 6,1 metru a zvedne 600 kg. Ve výšce 1,9 m zvedne až 3 tuny." },
    ],
    relatedServices: ["zemni-prace", "vykopove-prace", "demolice"],
  },
  {
    slug: "zaklady-domu",
    title: "Základy domů",
    shortTitle: "Základy domů",
    icon: Home,
    description: "Výkopy a příprava základových pásů a desek pro rodinné domy. Přesně dle projektu.",
    metaTitle: "Výkopy základů domů Praha-východ | Bagry Leon",
    metaDescription: "Specializované výkopy základů pro rodinné domy. Pásové rypadlo s milimetrovou přesností. Praha-východ. Včetně odvozu zeminy.",
    h1: "Základy domů — výkopy pro rodinné stavby",
    intro: `Základy jsou nejdůležitější částí každé stavby. Správně vykopané a připravené základové pásy nebo deska rozhodují o životnosti celého domu.

Specializujeme se na výkopy základů pro rodinné domy v oblasti Praha-východ. Naše pásové rypadlo s podkopovým zařízením umožňuje práci i na menších parcelách s přesností na milimetry.

Výkop provádíme včetně úpravy dna, případného odvozu přebytečné zeminy a přípravy pro betonáře. Spolupracujeme pravidelně s místními stavebními firmami i jednotlivými projektanty.`,
    whatIncludes: [
      "Výkopy pro základové pásy",
      "Výkopy pro základové desky",
      "Podkopové práce pro izolace",
      "Úprava a zhutnění dna výkopu",
      "Odvoz přebytečné zeminy",
      "Dovoz štěrku pro podsyp",
      "Příprava pro betonáře",
    ],
    process: [
      { title: "Seznámení s projektem", description: "Projednáme projektovou dokumentaci, zjistíme specifické požadavky." },
      { title: "Vyznačení sítí", description: "Než začneme kopat, zajistíme vyznačení podzemních vedení." },
      { title: "Realizace výkopu", description: "Pracujeme dle projektu — přesná hloubka, šířka, sklon." },
      { title: "Příprava pro další práce", description: "Upravíme dno, dodáme štěrk, připravíme pro betonářskou firmu." },
    ],
    relevantMachines: ["Hitachi Zaxis 33U", "Mercedes Atego"],
    audience: [
      { target: "Stavební firmy", description: "Subdodávka zemních prací pro vaše stavby rodinných domů." },
      { target: "Projektanti", description: "Realizace dle vašich projektů — garantujeme přesnost." },
      { target: "Stavební dozor", description: "Spolehlivý partner pro přípravu staveniště." },
    ],
    faqs: [
      { question: "Jaká je cena výkopu základů?", answer: "Cena závisí na rozměrech domu, typu půdy a vzdálenosti odvozu. Pro orientační kalkulaci nás kontaktujte s projektem." },
      { question: "Umíte zajistit i betonářské práce?", answer: "Zaměřujeme se na zemní práce. Na žádání však dokážeme doporučit osvědčené betonářské firmy v regionu." },
      { question: "Jak dlouho trvá výkop základů bungalovu?", answer: "Typický výkop pro bungalov 100–120 m² zvládneme za 1–2 pracovní dny včetně úklidu." },
    ],
    relatedServices: ["zemni-prace", "vykopove-prace", "inzenyrske-site"],
  },
  {
    slug: "inzenyrske-site",
    title: "Inženýrské sítě",
    shortTitle: "Inženýrské sítě",
    icon: Wrench,
    description: "Výkopy pro přípojky vody, kanalizace, plynu a elektro. Přesné hloubení rýh.",
    metaTitle: "Výkopy pro přípojky inženýrských sítí Praha-východ | Bagry Leon",
    metaDescription: "Výkopy pro přípojky vody, kanalizace, plynu, elektro. Přesné hloubení rýh dle projektu. Praha-východ. Vlastní rypadlo.",
    h1: "Inženýrské sítě — výkopy pro přípojky",
    intro: `Přípojky k inženýrským sítím vyžadují precizní výkopové práce. Každá síť má specifické požadavky na hloubku, sklon a ochranu potrubí či kabelů.

Provádíme výkopy pro přípojky vody, kanalizace, plynu a elektro včetně hloubení rýh pro drenáže. Naše rypadlo umožňuje práci s milimetrovou přesností — klíčové pro správnou funkci sítí.

Před každou zakázkou zajistíme vyznačení stávajících sítí a koordinujeme s příslušnými správci.`,
    whatIncludes: [
      "Výkopy pro přípojky vody",
      "Výkopy pro přípojky kanalizace",
      "Výkopy pro přípojky plynu",
      "Výkopy pro přípojky elektro",
      "Hloubení rýh pro drenáže",
      "Výkopy pro kabelová vedení",
      "Zásyp a zhutnění po instalaci",
      "Koordinace se správci sítí",
    ],
    process: [
      { title: "Projednání zakázky", description: "Zmapujeme požadované přípojky, zjistíme technické podmínky." },
      { title: "Vyznačení sítí", description: "Zajistíme vyznačení stávajících podzemních vedení." },
      { title: "Výkop", description: "Precizní hloubení dle projektové dokumentace konkrétní sítě." },
      { title: "Dokončení", description: "Po instalaci sítě provedeme zásyp a zhutnění dle norem." },
    ],
    relevantMachines: ["Hitachi Zaxis 33U", "Mercedes Atego"],
    audience: [
      { target: "Stavební firmy", description: "Subdodávky pro developerské projekty a novostavby." },
      { target: "Instalatéři", description: "Příprava výkopů pro vaše instalace vodoinstalací a kanalizací." },
      { target: "Projektanti IS", description: "Realizace dle projektů inženýrských sítí." },
    ],
    faqs: [
      { question: "Zajišťujete i vlastní instalace?", answer: "Ne, zaměřujeme se na zemní práce — výkopy. Instalace provádějí specializované firmy, které doporučíme." },
      { question: "Jaké jsou hloubky pro jednotlivé sítě?", answer: "Voda: 1,2–1,5 m, kanalizace: 1,5–2,0 m, plyn: 1,0–1,2 m, elektro: 0,8–1,0 m. Konkrétní hloubky dle projektu." },
      { question: "Umíte kopat pod existujícími cestami?", answer: "Ano, disponujeme podkopovým zařízením pro výkopy pod chodníky nebo cestami bez jejich poškození." },
    ],
    relatedServices: ["vykopove-prace", "zaklady-domu", "zemni-prace"],
  },
  {
    slug: "demolice",
    title: "Demolice zahradních domků",
    shortTitle: "Demolice domků",
    icon: Hammer,
    description: "Demolice zahradních domků, přístavků, menších staveb a plotů. Neprovádíme demolice rodinných domů.",
    metaTitle: "Demolice zahradních domků Praha-východ | Bagry Leon",
    metaDescription: "Demolice zahradních domků, přístavků, plotů a menších staveb. Bouračí práce s odvozem suti. Praha-východ. Vlastní technika.",
    h1: "Demolice zahradních domků a menších staveb",
    intro: `Potřebujete odstranit starý zahradní domek, přístavek, plot nebo jinou menší stavbu? Specializujeme se na demolice zahradních domků a menších objektů — nebouráme celé rodinné domy.

Provádíme bouračí práce na zahradních domcích, přístavcích, plotech a podobných menších stavbách včetně následného odvozu suti a úkliku pozemku. Disponujeme hydraulickým kladivem pro rypadlo i pro ruční bourání.

Před demolicí vždy ověříme stavební povolení a koordinujeme s majitelem. Po dokončení předáváme pozemek uklizený a připravený pro další využití.`,
    whatIncludes: [
      "Demolice zahradních domků a altánků",
      "Bourání přístavků a menších staveb",
      "Bourání plotů a oplocení",
      "Odstranění betonových základů",
      "Odvoz suti a stavebního odpadu",
      "Úklid a rekultivace pozemku",
      "Likvidace stavebního odpadu",
    ],
    process: [
      { title: "Obhlídka", description: "Zhodnotíme rozsah prací, přístupnost, typ konstrukce." },
      { title: "Plán demolice", description: "Domluvíme postup bourání, odvoz materiálu, časový harmonogram." },
      { title: "Realizace", description: "Bourání technikou nebo ručně, postupný odvoz suti." },
      { title: "Úklid", description: "Důkladný úklid pozemku, příprava pro další fázi." },
    ],
    relevantMachines: ["Hitachi Zaxis 33U", "Mercedes Atego"],
    audience: [
      { target: "Majitelé nemovitostí", description: "Odstranění starých garáží, přístavek před stavbou." },
      { target: "Stavební firmy", description: "Demolice před novou výstavbou." },
      { target: "Investoři", description: "Rekultivace pozemků pro budoucí projekty." },
    ],
    faqs: [
      { question: "Potřebuji povolení na demolici?", answer: "Pro menší stavby bez stavebního povolení (typicky zahradní domky, garáže do 25 m²) obvykle není. U větších staveb je potřeba ohláška nebo stavební povolení." },
      { question: "Co se stane se sutí?", answer: "Veškerou suť odvezeme na recyklaci nebo skládku. Zajišťujeme kompletní likvidaci odpadu." },
      { question: "Bouráte i azbest?", answer: "Ne, azbestové materiály vyžadují speciální certifikaci a postupy. V takovém případě doporučíme specializovanou firmu." },
    ],
    relatedServices: ["terenni-upravy", "nakladni-doprava", "zemni-prace"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesDetail.find((service) => service.slug === slug);
}
