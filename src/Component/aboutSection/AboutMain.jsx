import React from "react";
import AboutText from "./AboutText";
import AboutImange from "./AboutImange";

const AboutMain = () => {
  return (
    <div id="about" className="flex mt-11 flex-col md:flex-row w-full h-auto justify-around items-center px-8 py-12">
      {/* About Text Section */}
      <div className="w-full md:ml-36 md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <AboutText />
      </div>

      {/* About Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <AboutImange />
      </div>
    </div>
  );
};

export default AboutMain;
