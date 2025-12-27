import { PrimaryButton, OutlineButton } from "./button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 flex flex-col items-center px-6 overflow-hidden">
      {/* ambientní záře */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      
      
      <div className="relative w-64 h-64 mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-full" />
        <img 
          src="/photo.jpg" 
          alt="Michael Ptáček"
          title="Michael Ptáček"
          className="rounded-full w-full h-full object-cover border border-white/10"
        />
      </div>

      <p className="text-lg md:text-xl font-light mb-6 tracking-wide text-gray-300">
        Ahoj, jmenuji se Michael! 👋
      </p>

      <h1 className="text-5xl md:text-8xl font-serif text-center max-w-5xl leading-[1.1] tracking-tight mb-10">
        ux engineer <br /> 
        <span className="text-gray-500 italic">z Prahy</span>
      </h1>

      <p className="max-w-2xl text-center text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
        Jsem UX designer a frontend web developer s víceletou zkušeností a praxí.
      </p>

      {/* Akce */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <PrimaryButton>spojte se</PrimaryButton>
        <OutlineButton>životopis</OutlineButton>
      </div>
    </section>
  );
}