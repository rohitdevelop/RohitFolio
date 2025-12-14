import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGraidiant from "./HeroGraidiant";
import { motion } from "framer-motion";

const HeroMain = () => {

  // SUPER SMOOTH: Left → Right
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

  // SUPER SMOOTH: Right → Left
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
    <div
      id="home"
      className="relative pt-20 md:pb-6 pb-15 overflow-hidden"
    >
      <HeroGraidiant />

      {/* Main Content */}
      <div
        className="
        flex flex-col-reverse md:flex-row
        max-w-[1600px] mx-auto
        justify-between items-center
        px-6 md:px-12 lg:px-16
        gap-12 md:gap-16 lg:gap-24"
      >
        
        {/* TEXT (left → right) */}
        <motion.div
          className="w-full md:w-1/2"
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HeroText />
        </motion.div>

        {/* PIC (right → left) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HeroPic />
        </motion.div>

      </div>
    </div>
  );
};

export default HeroMain;
