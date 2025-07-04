import React from "react";
import AboutText from "./AboutText";
import AboutImange from "./AboutImange";
import Textinfo from "./Textinfo";

const AboutMain = () => {
  return (
    <section
      id="about"
      className="w-full py-12 px-6 flex flex-col items-center  md:bg-gradient-to-tr md:from-cyan-800 md:via-black md:to-orange-900"
    >
      {/* Centered About Me */}
      <AboutText />

      {/* Image & Text Container */}
      <div className="flex flex-col md:mt-12 md:mb-12 md:flex-row items-center justify-center gap-12 w-full">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <AboutImange />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start text-left px-4">
          {/* Right: Text Section */}
          <Textinfo />
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
