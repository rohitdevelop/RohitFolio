import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGraidiant from "./HeroGraidiant"; // ✅ Import gradient

const HeroMain = () => {
  return (
    <div id="home" className="relative pt-44 md:pt-44 lg:pt-60 pb-16 md:pb-20">
      {/* Background Gradient */}
      <HeroGraidiant />

      {/* Main Content Container */}
      <div className="flex flex-col-reverse md:flex-row max-w-[2700px] mx-auto justify-between items-center px-6 md:px-12 lg:px-16 gap-12 md:gap-16 lg:gap-24">
        {/* Hero Text */}
        <div className="w-full md:w-1/2 animate-fade-up">
          <HeroText />
        </div>

        {/* Hero Picture */}
        <div className="w-full md:w-1/2 animate-fade-up delay-100 flex justify-center">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
