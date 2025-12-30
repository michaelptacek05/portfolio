// app/projects/[slug]/page.tsx
import { getProject } from "@/app/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

// V Next.js 15 musí být params Promise
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params!
  const project = getProject(slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-gray-500 mb-4 block">← Zpět na projekty</Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p>{project.fullText}</p>
        {/* Zbytek obsahu... */}
      </div>
    </main>
  );
}