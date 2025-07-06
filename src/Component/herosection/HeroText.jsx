import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRightLong } from "react-icons/fa6";

const stacksArray = ["Frontend Dev", "Backend Dev", "MERN Stack Dev"];

const HeroText = () => {
  const [stackIndex, setStackIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const currentStack = stacksArray[stackIndex];
    let timeout;

    if (!isDeleting && charIndex < currentStack.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentStack[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else {
      setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setStackIndex((prevIndex) => (prevIndex + 1) % stacksArray.length);
        }
      }, 800);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stackIndex]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.15,
            duration: 0.5,
            ease: "easeInOut",
          },
        },
      }}
      className="flex flex-col gap-3 md:gap-5 justify-center text-center md:text-left md:ml-16 lg:ml-32"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl">
          Hi There,
        </h1>
        <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl">
          I'm <span className="text-orange-500">Rohit Singh</span>
        </h1>
      </motion.div>

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-white uppercase text-lg md:text-xl lg:text-2xl"
      >
        I am into <span className="text-cyan-400">{currentText}</span>
        <span className="text-cyan-400 animate-blink">|</span>
      </motion.h2>

      <motion.div className="flex justify-center md:block mt-2 md:mt-4">
        <motion.button
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120, duration: 0.3 }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1VIAcH6dm_KdumsY0sFgh0ctmllCXRraO/view?usp=drive_link",
              "_blank"
            )
          }
          className="w-40 px-3 py-2 text-sm md:text-lg font-semibold text-white bg-orange-500 rounded-md 
            transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 group"
        >
          Resume
          <FaArrowRightLong className="transition-all duration-200 group-hover:ml-2" />
        </motion.button>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-3 md:mt-4"
      >
        {[
          {
            href: "https://www.linkedin.com/in/rohit-singh-b7777730a/",
            icon: faLinkedin,
          },
          { href: "https://github.com/rohitdevelop", icon: faGithub },
          { href: "mailto:rohitdev124421@gmail.com", icon: faEnvelope },
          { href: "https://x.com/Rohit_coder5", icon: faTwitter },
          {
            href: "https://www.instagram.com/rohit_coder5/?hl=en",
            icon: faInstagram,
          },
        ].map(({ href, icon }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.3 }}
            className="text-white hover:text-cyan-500 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white hover:border-cyan-500 hover:scale-110 hover:shadow-lg"
          >
            <FontAwesomeIcon icon={icon} className="text-lg md:text-xl" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
