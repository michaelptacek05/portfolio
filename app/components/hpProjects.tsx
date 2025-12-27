import ProjectCard from './projectCard';
import { PrimaryButton, OutlineButton } from "./button";

// Definice pole s typem Project[]
interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "Buď Fit 24",
    description: "Návrh zdravotní aplikace pro děti s nadváhou",
    tags: ["Adobe XD", "Figma", "Illustrator"],
    image: "/project-links.png",
  },
  {
    title: "Poradci Choceň",
    description: "Stránka pro finanční poradce",
    tags: ["Astro.js", "Tailwind CSS", "Figma"],
    image: "/project-blog.png",
  }
];

export default function HPProjects() {
  return (
    <section className="text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-regular text-center mb-12 tracking-tight">
          Vybrané projekty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project} 
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <PrimaryButton>více projektů</PrimaryButton>
        </div>
      </div>
    </section>
  );
}