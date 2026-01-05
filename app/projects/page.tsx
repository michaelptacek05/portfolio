import ProjectCard from '../components/projectCard';
import { PROJECTS } from '../constants/projects';
import { Reveal } from '../components/reveal';

export default function ProjectsPage() {
  return (
    <Reveal width='100%' delay={0.2}>
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-r from-purple-900/30 to-orange-900/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl mb-4 tracking-tight">
            Projekty
          </h1>
          <p className="text-gray-400 leading-relaxed mb-10 text-center lg:text-left">
            Sbírka mých projektů, na kterých jsem se podílel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
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

      </div>
    </main>
    </Reveal>
  );
}