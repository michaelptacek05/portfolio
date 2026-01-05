import ProjectCard from "./projectCard";
import { PrimaryButton } from "./button";
import { PROJECTS } from "@/app/constants/projects";
import Link from "next/link";
import { Reveal } from "./reveal";

export default function HPProjects() {
  const featuredProjects = PROJECTS.filter(
    (p) => p.slug === "bf24" || p.slug === "poradci-chocen"
  );

  return (
    <Reveal width="100%" delay={0.1}>
      <section className="text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-regular text-center mb-12 tracking-tight">
            Vybrané projekty
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.images[0] || ""}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/projects">
              <PrimaryButton>více projektů</PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
