// app/constants/projects.ts
export interface Project {
  slug: string; // Unikátní ID pro URL (např. "scoutly")
  title: string;
  description: string;
  fullText: string; // Dlouhý text do modalu
  tags: string[];
  images: string[]; // Pole cest k obrázkům
}

// app/constants/projects.ts

export const PROJECTS: Project[] = [
  // ... tvé předchozí projekty (pokud tam jsou)
  {
    slug: "bf24", // Důležité: Unikátní ID pro URL
    title: "Buď Fit 24",
    description: "Návrh zdravotní aplikace pro děti s nadváhou",
    fullText: "Návrh mobilní zdravotní aplikace pro děti s nadváhou, projekt ",
    tags: ["Adobe XD", "Illustrator"],
    images: ["/project-links.png"], // Cesta k obrázku
  },
  {
    slug: "poradci-chocen",
    title: "Poradci Choceň",
    description: "Stránka pro finanční poradce",
    fullText:
      "Redesign webové stránky určené pro finanční poradce, nejdříve navržené ve figmě a poté vytvořeno přes Astro.js pro rychlost a výborné SEO.",
    tags: ["Astro.js", "Tailwind CSS", "Figma", "Photoshop"],
    images: ["/project-blog.png"],
  },
  {
    slug: "ipvz",
    title: "IPVZ Portál",
    description: "Grafický návrh webové stránky a backendu systému pro IPVZ",
    fullText:
      "Spolupráce na UX/UI návrhách pro frontend a backend systému pro Institut postgraduálního vzdělávání ve zdravotnictví, analýza zastaralého systému a modernizace, příprava grafického vzhledu certifikátů.",
    tags: ["Adobe XD", "Photoshop", "Illustrator"],
    images: ["/project-blog.png"],
  },
  {
    slug: "albatros",
    title: "Backend nakladatelství Albatros media",
    description:
      "Modernizace backendu a frontendu menších nakladatelství od Albatros Media",
    fullText:
      "Analýza a redesign backend systému nakladatelství vedených pod Albatros Media, redesign uživatelských flows včetně přístupnosti podle vyhlášky EU na frontend částech. ",
    tags: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    images: ["/project-blog.png"],
  },
  {
    slug: "profilog",
    title: "Sada mobilních aplikací Profi-log",
    description: "Specializované návrhy aplikací pro zdravotní sestry.",
    fullText:
      "Tvorba návrhů a testování mobilních aplikací Profi-log, určených pro konktrétní sestry, které sbírají data pacientů přes zařízení SCase (pro které je aplikace určená) a pracují s nimi v reálném čase.",
    tags: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "AutoCAD"],
    images: ["/project-blog.png"],
  },
  {
    slug: "ms-tek",
    title: "MS-Tec Logistics Landing page",
    description: "Grafický návrh webové stránky pro logistickou firmu",
    fullText:
      "Grafický návrh webové stránky pro logistickou firmu určený pro programátora.",
    tags: ["Adobe XD", "Illustrator"],
    images: ["/project-blog.png"],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
