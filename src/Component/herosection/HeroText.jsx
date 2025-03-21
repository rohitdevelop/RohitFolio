import React from "react";

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
    </div>
  );
};

export default HeroText;
