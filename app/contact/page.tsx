"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FiMail, FiPhone, FiMapPin, FiLoader } from "react-icons/fi"; // Odebrán FiSend
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { PrimaryButton } from "@/app/components/button";

// --- Zbytek logiky validace zůstává stejný ---
const contactSchema = z.object({
  fullName: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  company: z.string().optional(),
  email: z.string().email("Zadejte platný email"),
  phone: z.string().min(9, "Zadejte platné telefonní číslo").optional().or(z.literal("")),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// --- Komponenta Formuláře ---
function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // 1. Kontrola, zda je reCAPTCHA načtená
    if (!executeRecaptcha) {
      console.log("ReCaptcha not yet available");
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Získání tokenu (tohle tam zůstává)
      const token = await executeRecaptcha("contact_form");

      // --- TADY ZAČÍNÁ ZMĚNA ---
      // 3. Odeslání dat na tvůj vlastní backend (/api/send-email)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Mapování dat z formuláře na to, co očekává backend:
          name: data.fullName, // Ve formuláři je to 'fullName', backend čeká 'name'
          email: data.email,
          // Protože backend čeká jen "message", sloučíme tam i firmu a telefon, ať se neztratí
          message: `Firma: ${data.company || '-'} \nTelefon: ${data.phone || '-'}\n\nZpráva:\n${data.message}`,
          recaptchaToken: token,
        }),
      });

      // 4. Kontrola, jestli se to povedlo (status 200 OK)
      if (response.ok) {
        setSubmitStatus('success');
        reset(); // Vymaže formulář
      } else {
        // Pokud server vrátí chybu (např. 400 nebo 500)
        console.error("Chyba při odesílání");
        setSubmitStatus('error');
      }
      // --- KONEC ZMĚNY ---

    } catch (error) {
      console.error("Kritická chyba:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      
      {/* Řádek 1: Jméno a Firma */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-400 ml-3 font-medium">Jméno a příjmení</label>
          <input
            {...register("fullName")}
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Jan Novák"
          />
          {errors.fullName && <p className="text-red-400 text-xs ml-3 mt-1">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400 ml-3 font-medium">Firma (volitelné)</label>
          <input
            {...register("company")}
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Vaše firma s.r.o."
          />
        </div>
      </div>

      {/* Řádek 2: Email a Telefon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-400 ml-3 font-medium">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="jan@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs ml-3 mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400 ml-3 font-medium">Telefon</label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="+420 777 000 000"
          />
          {errors.phone && <p className="text-red-400 text-xs ml-3 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Zpráva */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400 ml-3 font-medium">Zpráva</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
          placeholder="Napište mi, s čím potřebujete pomoci..."
        />
        {errors.message && <p className="text-red-400 text-xs ml-3 mt-1">{errors.message.message}</p>}
      </div>

      {/* 2. POUŽITÍ TVOJÍ KOMPONENTY PRIMARYBUTTON */}
      <div className="pt-4">
        <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto justify-center text-base"
        >
          {isSubmitting ? (
            <>
              <FiLoader className="animate-spin" /> Odesílám...
            </>
          ) : (
            "Odeslat zprávu"
          )}
        </PrimaryButton>
      </div>

      {/* Status hlášky */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 text-sm text-center">
          Děkuji! Zpráva byla úspěšně odeslána. Brzy se vám ozvu.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm text-center">
          Něco se pokazilo. Zkuste to prosím znovu nebo mi napište přímo na email.
        </div>
      )}
    </form>
  );
}

// --- Hlavní Page Komponenta ---
export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "TEST_KEY_PLACEHOLDER"}>
      <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        
        {/* Ambientní Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* 3. NOVÝ LAYOUT - Grid místo karty */}
          
          {/* Hlavní nadpis sekce */}
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl mb-4 tracking-tight">
              Kontaktujte mě
            </h1>
            <p className="text-gray-400 leading-relaxed mb-10 text-center lg:text-left">
              Zaujala vás moje práce? Potřebujete pomoci s novým projektem nebo máte dotaz? Napište mi a probereme to.
            </p>
          </div>

          {/* Grid rozdělení: Vlevo info, Vpravo formulář */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Levá strana - Kontaktní údaje (nyní bez pozadí karty) */}
            <div className="lg:col-span-5 space-y-12">
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-white/30 transition-colors shrink-0">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:info@michaelptacek.com" className="text-gray-400 hover:text-white transition-colors text-lg">
                      mptacek005@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-white/30 transition-colors shrink-0">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefon</h3>
                    <a href="tel:+420123456789" className="text-gray-400 hover:text-white transition-colors text-lg">
                      +420 775 435 808
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-white/30 transition-colors shrink-0">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Lokalita</h3>
                    <span className="text-gray-400 text-lg">Praha, Česká republika</span>
                    <p className="text-sm text-gray-500 mt-2">Možnost schůzky v Praze.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Pravá strana - Formulář (sedí přímo na pozadí) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </main>
    </GoogleReCaptchaProvider>
  );
}