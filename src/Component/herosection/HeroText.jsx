import React, { useState, useEffect } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRightLong } from "react-icons/fa6";

const stacksArray = ["Frontend Developer", "Backend Developer", "MERN Stack Developer"];

const HeroText = () => {
   const [stackIndex, setStackIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentStack = stacksArray[stackIndex];
    let timeout;
    
    if (!isDeleting && charIndex < currentStack.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentStack[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setStackIndex((prevIndex) => (prevIndex + 1) % stacksArray.length);
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stackIndex]);

  return (
    <div className="flex flex-col gap-4 md:gap-6 justify-center text-center md:text-left md:ml-16 lg:ml-32">
      <div className="space-y-1 md:space-y-3">
        <h1 className="font-bold font-special text-white text-3xl md:text-5xl lg:text-6xl">Hi There,</h1>
        <h1 className="font-bold font-special text-white text-3xl md:text-5xl lg:text-6xl">
          I'm <span className="text-orange-500">Rohit Singh</span>
        </h1>
        <h2 className="text-white uppercase text-lg md:text-xl lg:text-2xl">
          I am into <span className="text-cyan-400">{currentText}</span>
          <span className="text-cyan-400 animate-blink">|</span>
        </h2>
      </div>

      <div className="flex md:block items-center justify-center mt-2 md:mt-4">
      <button  
  onClick={() => window.open("https://drive.google.com/file/d/1CR-Ph4nH6Fq_wlA2s33VVVfKDSQ9WeHR/view?usp=sharing", "_blank")}
  className="w-40 px-3 py-1.5 text-sm md:text-lg font-semibold text-white bg-orange-500 rounded-md 
  transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 group">
  Resume 
  <FaArrowRightLong className="transition-all duration-300 group-hover:ml-2" />
</button>

      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-3 md:mt-4">
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
            className="text-white hover:text-cyan-500 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white 
            hover:border-cyan-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={icon} className="text-lg md:text-xl" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
