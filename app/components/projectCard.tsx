import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export default function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <div className="group bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-3 flex flex-col cursor-default hover:border-white/20 transition-all duration-300">

      {/* Kontejner pro OBRÁZEK */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.4rem] bg-black border border-white/5">
        <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d]">
           <span className="text-3xl opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-500">
             🖼️
           </span> 
        </div>

        {/* Next.js Image komponenta */}
        {/* <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
        /> 
        */}
      </div>

      {/* Textový obsah a TAGY */}
      <div className="p-4 pt-5">
        <h3 className="text-xl font-semibold mb-1.5 tracking-tight group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Renderování tagů */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-white/5 border border-white/10 text-[9px] text-gray-500 px-2 py-1 rounded-full uppercase tracking-widest font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}