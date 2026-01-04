"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiAstro,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiVercel,
  SiNpm,
  SiPhp,
  SiSymfony,
  SiNette,
  SiFigma,
  SiAdobe,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobexd,
  SiAdobeaftereffects,
  SiAffinity,
  SiDavinciresolve,
  SiGit,
} from "react-icons/si";
import { Reveal } from "./reveal";

interface TechItem {
  name: string;
  icon: React.ElementType;
}

const TECH_STACK_DATA: TechItem[] = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Astro.js", icon: SiAstro },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Sass", icon: SiSass },
  { name: "Vercel", icon: SiVercel },
  { name: "NPM", icon: SiNpm },
  { name: "PHP", icon: SiPhp },
  { name: "Symfony", icon: SiSymfony },
  { name: "Nette Framework", icon: SiNette },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Adobe", icon: SiAdobe },
  { name: "Adobe XD", icon: SiAdobexd },
  { name: "Adobe Phoshotop", icon: SiAdobephotoshop },
  { name: "Adobe Illustrator", icon: SiAdobeillustrator },
  { name: "Adobe InDesign", icon: SiAdobeindesign },
  { name: "Adobe After Effects", icon: SiAdobeaftereffects },
  { name: "Affinity", icon: SiAffinity },
  { name: "DaVinci Resolve", icon: SiDavinciresolve },
];

export default function TechStack() {
  return (
    <Reveal width="100%" delay={0.1}>
      <section className="py-16">
        <div className="mx-auto px-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={60}
            slidesPerView={4}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 5 },
              1024: { slidesPerView: 8 },
            }}
            className="tech-swiper"
          >
            {TECH_STACK_DATA.map((tech, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div
                  className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-help"
                  title={tech.name}
                  aria-label={tech.name}
                >
                  <tech.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .tech-swiper .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}</style>
      </section>
    </Reveal>
  );
}
