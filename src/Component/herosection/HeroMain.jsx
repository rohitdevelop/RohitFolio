import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGraidiant from "./HeroGraidiant";

const HeroMain = () => {
  return (
    <div
      id="home"
      className="relative pt-36 md:pt-44 lg:pt-56 pb-16 md:pb-20 overflow-hidden"
    >
      {/* Background Gradient */}
      {/* <HeroGraidiant /> */}

      {/* Main Content */}
      <div
        className="flex flex-col-reverse md:flex-row 
        max-w-[1600px] mx-auto 
        justify-between items-center 
        px-6 md:px-12 lg:px-16 
        gap-12 md:gap-16 lg:gap-24"
      >
        {/* LEFT Side → Hero Text */}
        <div className="w-full md:w-1/2 animate-fade-up">
          <HeroText />
        </div>

        {/* RIGHT Side → Spline Robot */}
        <div className="w-full md:w-1/2 animate-fade-up delay-100 flex justify-center">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
