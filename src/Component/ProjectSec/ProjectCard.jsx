import React from "react";
import { FaExternalLinkSquareAlt, FaCode } from "react-icons/fa";

const ProjectCard = ({ image, name, year, link, codeLink, align,about }) => {
  return (
    <div
      className={`flex flex-col ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-6 md:gap-12 w-full`}
    >
      {/* Image container with Half Box */}
      <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden transition-all duration-700 ease-in-out transform hover:scale-[1.05] border-2 border-gray-600 hover:border-cyan-400 group">
        {/* Image */}
        <img
          src={image}
          alt="project"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Half Overlay Box with Smooth Hover Effect */}
        <div className="absolute bottom-0 left-0 w-full h-[60%]  backdrop-blur-xl bg-white/10 border-t border-gray-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex flex-col items-center justify-center gap-6 ">
        <div className="flex flex-col items-start text-left">
            <h2 className="text-orange-400 text-lg md:text-xl font-bold">{name}</h2>
               <p className="text-gray-300 text-sm">{about}</p>
            </div>

          <div className="flex gap-12">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg flex items-center gap-2 hover:bg-orange-500 transition-all duration-300 shadow-md"
            >
              View <FaExternalLinkSquareAlt />
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-orange-500 transition-all duration-300 shadow-md"
            >
              Code <FaCode />
            </a>
          </div>
        </div>
      </div>

      {/* Content container */}
      <div
        className={`w-full md:w-1/2 flex flex-col ${
          align === "left" ? "md:items-start" : "md:items-end"
        } items-center text-center md:text-left`}
      >
        <h2 className="text-orange-400 text-2xl md:text-3xl font-bold mb-2">
          {name}
        </h2>
        <p className="text-gray-300 text-lg mb-4">{year}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
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
