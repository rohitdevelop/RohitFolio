import React from "react";
import { FaHtml5, FaJs, FaGitAlt, FaDatabase, FaDocker,FaAws, FaPython } from "react-icons/fa";
import { SiCss3, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiTypescript, SiGraphql, SiFirebase } from "react-icons/si";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";

const SkilsAll = () => {
  const Skills = [
    { skill: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { skill: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { skill: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { skill: "ReactJS", icon: <RiReactjsLine className="text-cyan-400" /> },
    { skill: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { skill: "NextJS", icon: <RiNextjsFill className="text-white" /> },
    { skill: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { skill: "Node.js", icon: <TbBrandNodejs className="text-green-500" /> },
    { skill: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { skill: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { skill: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { skill: "SQL", icon: <FaDatabase className="text-gray-400" /> },
    { skill: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { skill: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { skill: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { skill: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { skill: "AWS", icon: <FaAws className="text-orange-400" /> },
    { skill: "Python", icon: <FaPython className="text-blue-500" /> },
  ];

  return (
    <div className="max-w-6xl bg-gray-700 rounded-3xl mx-auto p-8 shadow-lg shadow-cyan-500/30">
      {/* Responsive Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6  gap-6">
        {Skills.map((Skill, index) => (
          <div
            key={index}
            className="rounded-xl p-6 flex flex-col items-center shadow-lg
                       transition-all duration-300 transform 
                       hover:scale-105 hover:shadow-cyan-400/50 bg-gray-800 text-white relative"
          >
            <div className="text-5xl mb-3">{Skill.icon}</div>
            <h3 className="text-lg font-bold">{Skill.skill}</h3>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0  bg-cyan-400 opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkilsAll;