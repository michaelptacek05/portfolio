import React from "react";
import { ExperienceItem } from "@/app/constants/experience";

export default function ExperienceCard({
  role,
  type,
  company,
  period,
  description,
  skills,
}: ExperienceItem) {
  return (
    <div className="p-5 group h-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] flex flex-col hover:border-white/20 transition-all duration-300 cursor-default">
      <div>
        <h3 className=" text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
          {role}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
          <span className="text-gray-300">{company}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>{type}</span>
          <br />
          <span>{period}</span>
        </div>
      </div>
      <div className="pt-5 flex flex-col flex-grow">
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white/5 border border-white/10 text-[9px] text-gray-500 px-2 py-1 rounded-full uppercase tracking-widest font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
