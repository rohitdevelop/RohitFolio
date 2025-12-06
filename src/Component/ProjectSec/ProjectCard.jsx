import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkSquareAlt, FaCode } from "react-icons/fa";

const ProjectCard = ({ image, name, link, about }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col bg-gray-900 rounded-b-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-500 m-4"
    >
      {/* Image */}
      <div className="w-full h-48 md:h-52 lg:h-56 overflow-hidden group border-8 border-gray-900">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col gap-3">
        <div className="flex justify-between items-center ">
        <h2 className="text-orange-400 text-lg md:text-xl font-bold">{name}</h2>
 <div className="flex gap-3 mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-cyan-500 text-white rounded-lg hover:bg-orange-500 transition-all duration-300"
          >
            View <FaExternalLinkSquareAlt />
          </a>
          <a
            href="https://github.com/rohitdevelop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 text-white rounded-lg hover:bg-orange-500 transition-all duration-300"
          >
            Code <FaCode />
          </a>
        </div>
        </div>
        <p className="text-gray-300 text-sm md:text-base">{about}</p>
 
       
      </div>
    </motion.div>
  );
};

export default ProjectCard;
