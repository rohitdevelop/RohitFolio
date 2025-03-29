import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaJs, FaGitAlt, FaDatabase, FaDocker, FaAws, FaPython } from "react-icons/fa";
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
    <motion.div 
      className="w-full bg-gray-700 rounded-3xl mx-auto p-6  shadow-lg shadow-cyan-500/30"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
        {Skills.map((Skill, index) => (
          <motion.div
            key={index}
            className="rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-lg
                       transition-all duration-300 transform 
                       hover:scale-105 hover:shadow-cyan-400/50 bg-gray-800 text-white relative"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">{Skill.icon}</div>
            <h3 className="text-sm sm:text-lg font-bold">{Skill.skill}</h3>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkilsAll;
