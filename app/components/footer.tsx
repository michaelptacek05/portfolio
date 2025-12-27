import React from 'react';
import { SiSpotify, SiInstagram, SiGithub, SiBehance } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Hlavní mřížka odkazů */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-20">
          
          {/* Sloupec: Navigace */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">Navigace</h4>
            <a href="#" className="text-sm text-gray-400 font-medium hover:text-white transition">Domů</a>
            <a href="#" className="text-sm text-gray-400 font-medium hover:text-white transition">O mně</a>
            <a href="#" className="text-sm text-gray-400 font-medium hover:text-white transition">Moje práce</a>
            <a href="#" className="text-sm text-gray-400 font-medium hover:text-white transition">Pracovní zkušenost</a>
          </div>

          {/* Sloupec: Socials (Instagram, GitHub, Behance) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">Sociální sítě</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 font-medium hover:text-white transition">
              <SiInstagram className="text-xs" /> Instagram
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 font-medium hover:text-white transition">
              <SiGithub className="text-xs" /> GitHub
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 font-medium hover:text-white transition">
              <SiBehance className="text-xs" /> Behance
            </a>
          </div>

        </div>

        {/* Spodní lišta - Copyright */}
        <div className="pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-sm text-gray-500 font-medium">
            © {currentYear} Michael Ptáček
          </p>
          <div className="h-1 w-1 rounded-full bg-gray-800" /> {/* Malý dekorativní prvek */}
        </div>

      </div>
    </footer>
  );
}