import React from "react";
import { FaHtml5, FaJs, FaGitAlt } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { RiReactjsLine, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";

const SkilsAll = () => {
  const Skills = [
    { skill: "HTML", icon: FaHtml5 },
    { skill: "CSS", icon: SiCss3 },
    { skill: "JAVASCRIPT", icon: FaJs },
    { skill: "REACT.JS", icon: RiReactjsLine },
    { skill: "NEXT.JS", icon: RiNextjsFill },
    { skill: "TAILWIND.CSS", icon: RiTailwindCssFill },
    { skill: "GIT", icon: FaGitAlt },
    { skill: "NODE.JS", icon: TbBrandNodejs },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {Skills.map((Skill, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Circular Icon Container */}
          <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 shadow-md hover:scale-110">
            <Skill.icon className="text-4xl md:text-5xl text-cyan-400" />
          </div>

          {/* Rectangle Skill Name Container */}
          <div className="mt-2 px-3 py-1 bg-cyan-500 text-white text-sm md:text-base font-semibold rounded-md shadow-md">
            {Skill.skill}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkilsAll;
