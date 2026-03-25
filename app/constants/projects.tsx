
export interface Project {
  slug: string;
  title: string;
  description: string;
  fullText: string;
  tags: string[];
  images: string[];
  projectUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "bf24",
    title: "Buď Fit 24",
    description: "Návrh zdravotní aplikace pro děti s nadváhou",
    fullText: "Komplexní návrh a prototyp zdravotní aplikace zaměřené na prevenci dětské obezity. Aplikace kombinuje monitoring pohybu skrze náramky Garmin a správu jídelníčku pod dohledem rodičů. Uživatelské rozhraní je navrženo hravě s využitím veselých barev pro motivaci dětí, přičemž striktně dodržuje ergonomická pravidla a standardy Material Designu.",
    tags: ["Adobe XD", "Illustrator", "Material Design"], 
    images: ["/projekty/bf24/bf1.png", "/projekty/bf24/bf2.webp", "/projekty/bf24/bf3.png"], 
    projectUrl: "https://www.nzip.cz/bf24",
  },
  {
    slug: "poradci-chocen",
    title: "Poradci Choceň",
    description: "Webová stránka pro finanční poradce",
    fullText: "Kompletní redesign webu pro finanční poradce. Projekt začal návrhem UI ve Figmě a byl realizován v moderním frameworku Astro.js, což zajistilo maximální rychlost načítání a špičkové SEO. Uživatelská zkušenost (UX) byla následně analyzována a optimalizována pomocí nástroje Microsoft Clarity.",
    tags: ["Astro.js", "Tailwind CSS", "Figma", "Photoshop", "MS Clarity"],
    images: ["/projekty/poradci/poradci1.png", "/projekty/poradci/poradci2.png"],
    projectUrl: "https://poradci-chocen.cz/",
    
  },
  {
    slug: "ulazebnika",
    title: "Barbershop U Lazebníka",
    description: "Webová stránka pro Barbershop",
    fullText: "Design a realizace webové stránky pro barbershop. Celá stránka je statická a postavena na frameworku Astro.js, což zajišťuje rychlé načítání a optimalizaci pro vyhledávače.",
    tags: ["Astro.js"],
    images: ["/projekty/ulazebnika/ulazebnika.png"],
    projectUrl: "https://barbershopulazebnika.cz/",
    
  },
  {
    slug: "ipvz",
    title: "IPVZ Portál",
    description: "Redesign a modernizace systému pro IPVZ",
    fullText: "Spolupráce na UX/UI návrzích pro frontend i backend systému Institutu postgraduálního vzdělávání ve zdravotnictví (IPVZ). Součástí projektu byla analýza původního zastaralého řešení, kompletní modernizace uživatelského rozhraní a grafický návrh nových certifikátů.",
    tags: ["Adobe XD", "Photoshop", "Illustrator"],
    images: ["/projekty/ipvz/ipvz1.png", "/projekty/ipvz/ipvz2.png", "/projekty/ipvz/ipvz3.png", "/projekty/ipvz/ipvz4.png"],
    projectUrl: "https://portal.ipvz.cz/",
    
  },
  {
    slug: "albatros",
    title: "Backend nakladatelství Albatros media",
    description: "Modernizace backendu a frontendu nakladatelství skupiny Albatros Media",
    fullText: "Kompletní analýza a redesign backendových systémů pro nakladatelství spadající pod skupinu Albatros Media. Součástí projektu byla optimalizace uživatelských průchodů (User Flows) a úprava frontendu tak, aby splňoval přísné standardy přístupnosti dle aktuálních směrnic EU.",
    tags: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    images: ["/projekty/albatros/albatros1.png"],
  },
  {
    slug: "ms-tek",
    title: "MS-Tec Logistics Landing page",
    description: "Webdesign pro logistickou firmu",
    fullText: "Návrh moderní a přehledné webové stránky pro logistickou firmu. Výstupem byl kompletní vizuální styl a technicky připravené podklady pro následné nakódování programátorem.",
    tags: ["Adobe XD", "Illustrator"],
    images: ["/projekty/mstec/mstec1.png", "/projekty/mstec/mstec11.png", "/projekty/mstec/mstec3.png"],
    projectUrl: "https://www.ms-tek.cz/en/logistic",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
