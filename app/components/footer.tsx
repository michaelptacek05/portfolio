import React from "react";
import { SiSpotify, SiInstagram, SiGithub, SiBehance } from "react-icons/si";
import { NAV_LINKS, SOCIALS } from "../constants/links";
import Link from "next/link";
import { Reveal } from "./reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Reveal width="100%" delay={0.1}>
    <footer className="text-white py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hlavní mřížka odkazů */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-16 md:mb-20">
          {/* Sloupec: Navigace */}
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">
              Navigace
            </h4>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm text-gray-400 font-medium hover:text-white transition w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Sloupec: Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">
              Sociální sítě
            </h4>

            {/* Změněno z SOCIAL_LINKS na SOCIALS */}
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 font-medium hover:text-white transition"
              >
                {/* Zde dynamicky vykreslíme ikonu */}
                <social.icon className="text-xs" />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Spodní lišta - Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-col justify-between items-left gap-4">
          <p className="text-sm text-gray-500 font-medium text-center sm:text-left">
            © {currentYear} Michael Ptáček
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Tento web používá soubory cookies k vylepšování uživatelského zážitku.{" "}
            <Link href="/privacy" className="underline hover:text-black">
              Více informací
            </Link>.
          </p>
          <p className="text-xs text-gray-500 mt-4 text-left">
            Tento web je chráněn pomocí reCAPTCHA a platí 
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white ml-1 underline">Zásady ochrany soukromí</a> a 
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white ml-1 underline">Smluvní podmínky</a> Google.
          </p>
        </div>
      </div>
    </footer>
    </Reveal>
  );
}
