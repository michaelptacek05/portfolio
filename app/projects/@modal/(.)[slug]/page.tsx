import { getProject } from "@/app/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Definice typu pro params jako Promise (Nutné pro Next.js 15+)
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // 1. Tady je ta oprava: musíme počkat na params
  const { slug } = await params;
  
  // 2. Načtení projektu
  const project = getProject(slug);

  // Pokud projekt neexistuje, vrátíme 404
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Tlačítko Zpět */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
          Back to projects
        </Link>
        
        {/* Hlavička */}
        <div className="mb-10 border-b border-white/10 pb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="text-sm border border-white/10 bg-white/5 px-3 py-1 rounded-full text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hlavní text */}
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg mb-16">
          <p>{project.fullText}</p>
        </div>

        {/* Galerie obrázků */}
        <div className="space-y-12">
          {project.images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
            >
              {/* Pokud zatím nemáš obrázky, zobrazí se placeholder */}
              {img ? (
                 <Image 
                   src={img} 
                   alt={`${project.title} image ${idx + 1}`}
                   fill
                   className="object-cover"
                   priority={idx === 0} // První obrázek načteme rychleji
                 />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <span className="text-5xl">📷</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}