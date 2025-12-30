import Image from "next/image";
import { SiAdobe, SiNextdotjs, SiFigma, SiGit, SiAstro } from "react-icons/si";
import {
  IoCodeSlash,
  IoSchoolOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";

export default function AboutMe() {
  return (
    <section className=" text-white py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Levá část - Fotka */}
        <div className="relative group">
          {/* Dekorativní prvek pod fotkou (gradient/záře) */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

          <div className="relative aspect-[4/4] w-full max-w-md mx-auto lg:mx-0 rounded-full overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <Image
              src="/photo.jpg" 
              alt="O mně"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Pravá část - Obsah */}
        <div className="flex flex-col">
          {/* Nadpis */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif mt-2 tracking-tight">
              o mně
            </h2>
          </div>

          {/* Text */}
          <p className="text-gray-400 leading-relaxed mb-10 text-center lg:text-left">
            Jsem zkušený Frontend Developer a UX/UI Designer s víceletou praxí v
            oboru. Během své kariéry jsem měl to štěstí spolupracovat s
            různými firmami a přispívat k jejich úspěchu a růstu.
            Zaměřuji se na čistý kód, intuitivní návhry, uživatelskou přívětivost a moderní
            technologie.
          </p>
          {/* Tools I use */}
          <div className="space-y-4 text-center lg:text-left">
            <h4 className="text-sm font-serif italic text-gray-400">
              Nástroje, které využívám denně.
            </h4>
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              {/* Adobe - Červená (#FF0000) */}
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center hover:bg-white/5 transition-colors group">
                <SiAdobe className="text-xl text-gray-400 group-hover:text-[#FF0000] transition-colors" />
              </div>

              {/* Figma - Oranžovo-červená (#F24E1E) - oficiální barva loga */}
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center hover:bg-white/5 transition-colors group">
                <SiFigma className="text-xl text-gray-400 group-hover:text-[#F24E1E] transition-colors" />
              </div>

              {/* Next.js - Bílá (protože jsme v dark mode, černá by nebyla vidět) */}
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center hover:bg-white/5 transition-colors group">
                <SiNextdotjs className="text-xl text-gray-400 group-hover:text-white transition-colors" />
              </div>

              {/* Astro - Oranžová (#FF5D01) - nebo lze použít Astro Purple #BC52EE */}
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center hover:bg-white/5 transition-colors group">
                <SiAstro className="text-xl text-gray-400 group-hover:text-[#FF5D01] transition-colors" />
              </div>

              {/* Git - Oranžová (#F05032) */}
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center hover:bg-white/5 transition-colors group">
                <SiGit className="text-xl text-gray-400 group-hover:text-[#F05032] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
