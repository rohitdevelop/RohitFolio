import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const ProjectCard = ({ image, name, year, link, align }) => {
  return (
    <div
      className={`flex flex-col ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-2 md:gap-12 w-full`}
    >
      {/* Image container */}
      <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden hover:scale-[1.02] transform transition-all duration-500 relative border-2 border-gray-700 hover:border-cyan-400">
        <div className="w-full h-full bg-cyan-500 opacity-30 absolute top-0 left-0 hover:opacity-0 transition-all duration-500"></div>
        <img 
          src={image} 
          alt="project" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Content container */}
      <div className={`w-full md:w-1/2 flex flex-col ${
        align === "left" ? "md:items-start" : "md:items-end"
      } items-center text-center md:text-left`}>
        <h2 className="text-orange-400 text-2xl md:text-3xl font-bold mb-2">{name}</h2>
        <p className="text-gray-300 text-lg mb-4">{year}</p>
        <a
          href={link}
          className="flex items-center gap-2 text-cyan-400 hover:text-orange-500 transition-all duration-300"
        >
          View Project
          <FaExternalLinkSquareAlt className="text-sm" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;