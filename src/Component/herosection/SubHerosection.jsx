import React from "react";
import {
  FaGitAlt,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const techStack = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const SubHerosection = () => {
  return (
    <div className="relative w-full bg-[#0d0d0d] overflow-hidden border-y border-gray-700 py-6">
      {/* Gradient edges */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

      <div className="flex gap-10 w-max animate-loop px-8">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white hover:scale-125 transition-transform duration-300"
            title={tech.name}
          >
            <span className="text-3xl md:text-4xl">{tech.icon}</span>
            <p className="text-sm opacity-50 mt-1 hidden md:block">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHerosection;
