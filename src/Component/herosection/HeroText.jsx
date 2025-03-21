import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 justify-center text-center md:text-left md:w-1/2 animate-fade-up">
      {/* Name & Title Together */}
      <div>
        <h2 className="text-cyan-400 uppercase text-lg md:text-xl lg:text-2xl">
          Front-End Web Developer
        </h2>
        <h1 className="font-bold font-special text-orange-500 text-3xl md:text-5xl lg:text-6xl">
          Rohit Singh
        </h1>
      </div>

      {/* Description */}
      <p className="text-white text-base md:text-lg lg:text-xl mt-4 leading-relaxed">
        A passionate web developer and aspiring instructor,  
        eager to build innovative web experiences and  
        share knowledge with others.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
  <a
    href="https://www.linkedin.com/in/rohit-singh-b7777730a/"
    className="text-white hover:text-red-500 transition duration-300"
  >
    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
  </a>
  <a
    href="https://github.com/rohitdevelop"
    className="text-white hover:text-red-500 transition duration-300"
  >
    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
  </a>
  <a
    href="mailto:rohitdev124421@gmail.com"
    className="text-white hover:text-red-500 transition duration-300"
  >
    <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
  </a>
  <a
    href="https://x.com/Rohit_coder5"
    className="text-white hover:text-red-500 transition duration-300"
  >
    <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
  </a>
  <a
    href="https://www.instagram.com/rohit_coder5/?hl=en"
    className="text-white hover:text-red-500 transition duration-300"
  >
    <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
  </a>
</div>

    </div>
  );
};

export default HeroText;
