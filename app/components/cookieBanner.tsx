"use client";

import { useState, useEffect } from "react";
import { FiCode, FiX } from "react-icons/fi";
import { clarity } from "react-microsoft-clarity";

const CLARITY_ID = "uw8agem8wi";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Zkontrolujeme, jestli už uživatel neodsouhlasil
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Pokud ne, po chvilce zobrazíme banner (aby to nebylo hned "do obličeje")
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
    
    if (clarity.hasStarted() === false) {
      clarity.init(CLARITY_ID);
      console.log("Clarity spuštěno po souhlasu.");
    }
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md w-full p-4 md:p-0 sm:flex-center">
      {/* Hlavní karta */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        
        {/* Dekorativní glow efekt na pozadí */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="flex flex-col gap-4 relative z-10">
          
          {/* Hlavička s ikonou */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                <FiCode className="text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Sušenky? 🍪</h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  Používám pouze nezbytné cookies pro fungování webu a anonymní statistiky pro zlepšení požitku. Žádné sledování pro reklamu.
                </p>
              </div>
            </div>
            
            {/* Křížek pro zavření (volitelné) */}
            <button 
              onClick={declineCookies}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Tlačítka */}
          <div className="flex gap-3 pt-2">
            {/* Tlačítko PŘIJMOUT (Primary style) */}
            <button
              onClick={acceptCookies}
              className="flex-1 bg-white text-black font-medium py-2.5 px-4 rounded-xl hover:bg-gray-200 transition-colors text-sm"
            >
              V pořádku
            </button>

            {/* Tlačítko ODMÍTNOUT (Secondary style) */}
            <button
              onClick={declineCookies}
              className="flex-1 bg-white/5 text-white border border-white/10 font-medium py-2.5 px-4 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Jen nezbytné
            </button>
          </div>
          
          {/* Odkaz na Zásady (volitelné) */}
          <div className="text-center">
            <a href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 underline transition-colors">
              Přečíst zásady ochrany soukromí
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}