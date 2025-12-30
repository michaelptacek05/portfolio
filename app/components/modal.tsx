"use client"; // Musí být na prvním řádku!

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Zavření na klávesu ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={() => router.back()} // Kliknutí do tmavého pozadí zavře modal
    >
      <div 
        className="bg-[#0a0a0a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative no-scrollbar"
        onClick={(e) => e.stopPropagation()} // Kliknutí do okna NEZAVŘE modal
      >
        <button 
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}