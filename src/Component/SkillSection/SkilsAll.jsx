import React from "react";
import { FaHtml5, FaJs, FaGitAlt } from "react-icons/fa";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";

const SkilsAll = () => {
  const Skills = [
    { skill: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { skill: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { skill: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { skill: "ReactJS", icon: <RiReactjsLine className="text-cyan-400" /> },
    { skill: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { skill: "NextJS", icon: <RiNextjsFill className="text-white" /> },
    { skill: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { skill: "Node.js", icon: <TbBrandNodejs className="text-green-500" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* 2 columns on mobile, 3 on medium, 4 on large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Skills.map((Skill, index) => (
          <div
            key={index}
            className="rounded-xl p-6 flex flex-col items-center shadow-lg
                       transition-transform duration-300 transform 
                       hover:scale-105 hover:shadow-cyan-400/50 relative"
          >
            <div className="text-5xl mb-3">{Skill.icon}</div>
            <h3 className="text-lg text-white font-bold">{Skill.skill}</h3>

            {/* Percentage Effect on Hover */}
            <div className="absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkilsAll;
