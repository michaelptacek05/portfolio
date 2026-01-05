"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../constants/links";
import { Reveal } from "./reveal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="hidden md:flex items-center gap-6 bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-3 rounded-full shadow-2xl">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-gray-400 font-medium hover:text-white transition"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex md:hidden w-full justify-end relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-black/50 backdrop-blur-lg border border-white/10 p-3 rounded-2xl shadow-xl focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 right-0 w-64 bg-[#111] border border-white/10 rounded-2xl p-2 shadow-2xl animate-in fade-in zoom-in duration-200 origin-top-right">
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition text-base font-medium border-b border-white/5 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 p-2">
                <button className="w-full border border-white/10 bg-white/5 px-4 py-3 rounded-xl hover:bg-white hover:text-black transition text-sm font-bold text-white uppercase tracking-wider">
                  Spojit se ↗
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute right-10 top-1 hidden md:block">
        <button className="flex items-center gap-2 border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition duration-300 text-white font-medium text-sm">
          spojit se <span className="text-xs">↗</span>
        </button>
      </div>
    </nav>
  );
}
