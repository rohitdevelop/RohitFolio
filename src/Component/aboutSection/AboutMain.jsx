import React from "react";
import AboutText from "./AboutText";
import AboutImange from "./AboutImange";
import Textinfo from "./Textinfo";
import { motion } from "framer-motion";

const AboutMain = () => {
  const leftToRight = {
      hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 2,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 20,
        mass: 0.6,
        duration: 1.2,
      },
    },
  };

  const rightToLeft = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 2,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 20,
        mass: 0.6,
        duration: 1.2,
      },
    },
  };

  return (
 <section
  id="about"
  className="w-full py-12 px-6 flex flex-col items-center overflow-x-hidden md:bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950"
>

      {/* Centered Title */}
      <AboutText />

      {/* Image & Text Container */}
      <div className="flex flex-col md:mt-12 md:mb-12 md:flex-row items-center justify-center gap-12 w-full">
        
        {/* LEFT — Image animates left → right */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutImange />
        </motion.div>

        {/* RIGHT — Text animates right → left */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start text-left px-4"
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Textinfo />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMain;
