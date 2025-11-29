import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="relative bg-black text-center text-white py-12 px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-20 left-70 w-[150px] animate-pulse h-[150px] md:w-[250px] md:h-[250px] bg-cyan-400 blur-[120px] opacity-40"></div>
      <div className="absolute bottom-10 right-70 w-[150px] animate-pulse h-[150px] md:w-[250px] md:h-[250px] bg-orange-500 blur-[120px] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
          ROHIT SINGH
        </h1>

        <div className="w-24 h-[3px] mx-auto mt-2 bg-gradient-to-r from-yellow-400 to-cyan-500 rounded-full"></div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-5 mt-6">

          {[
            { href: "https://www.linkedin.com/in/rohit-singh-b7777730a/", icon: faLinkedin },
            { href: "https://github.com/rohitdevelop", icon: faGithub },
            { href: "mailto:rohitdev124421@gmail.com", icon: faEnvelope },
            { href: "https://x.com/Rohit_coder5", icon: faTwitter },
            { href: "https://www.instagram.com/rohit_coder5/?hl=en", icon: faInstagram },
          ].map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border 
                         border-white hover:border-cyan-400 text-white hover:text-cyan-400
                         hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <FontAwesomeIcon icon={icon} className="text-lg" />
            </a>
          ))}

        </div>

        {/* Quote */}
        <p className="mt-6 italic text-gray-400 text-sm sm:text-base">
          "Success is when preparation meets opportunity"
        </p>

        {/* Copyright */}
        <p className="text-xs mt-4 text-gray-500">
          © 2025 Rohit Singh. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
