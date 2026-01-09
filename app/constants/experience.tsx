
export interface ExperienceItem {
  role: string;
  type: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "UX/UI designer / Frontend Developer",
    type: "Freelance",
    company: "MagicWare",
    period: "Únor 2024 - současnost",
    description: "V MagicWare analyzuji a tvořím interaktivní wireframes webových i mobilních aplikací, stránek a systémů, vylepšuji staré weby a optimalizuji SEO a přístupnost, tvořím a designuji řadu tiskových produktů od brožur, vizitek, log a mockupů a řeším systémové chyby, které se objevují.",
    skills: ["Figma", "Adobe Suite", "HTML", "CSS", "SASS", "JavaScript ES6+", "React", "Tailwind", "Testing", "SEO"]

  },
  {
    role: "Graphic designer and Web developer",
    type: "Freelance",
    company: "Freelance",
    period: "2023 - současnost",
    description: "Tvorba webových stránek s důrazem na SEO, grafický design a hloubková analýza uživatelského prožitku (UX).",
    skills: ["Figma", "Adobe Suite", "HTML", "CSS", "React", "Astro.js", "Tailwind", "SEO", "MS Clarity"]
  },
];