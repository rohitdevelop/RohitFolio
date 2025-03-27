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
    <div className="w-full bg-gray-400 border-y py-4 overflow-hidden">
      <div className="flex gap-8 w-max animate-loop">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 text-black"
          >
            <span
              className="text-3xl md:text-4xl transition-transform duration-300 hover:scale-110"
              loading="eager"
            >
              {tech.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHerosection;
