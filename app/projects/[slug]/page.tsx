import { getProject } from "@/app/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "@/app/components/button";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors"
        >
          ← Zpět na projekty
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-white/10 text-sm text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-gray-300 leading-relaxed text-lg mb-16">
          {project.fullText}
        </div>

        {project.projectUrl && (
          <div className="leading-relaxed mb-16 border-b border-white/10 pb-10">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <PrimaryButton>Navštívit web</PrimaryButton>
            </a>
          </div>
        )}

        <div className="space-y-12">
          {project.images.map((imagePath, index) => (
            <div
              key={index}
              className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]"
            >
              <Image
                src={imagePath}
                alt={`${project.title} ukázka ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                quality={90}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
