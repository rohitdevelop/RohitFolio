import React from "react";
import AboutText from "./AboutText";
import AboutImange from "./AboutImange";

const AboutMain = () => {
  return (
    <section
      id="about"
      className="w-full py-12 px-6 flex flex-col items-center"
    >
      {/* Centered About Me */}
      <div className="w-full flex justify-center mb-8">
        <AboutText />
      </div>

      {/* Image & Text Container */}
      <div className="flex flex-col  md:mt-12 md:mb-12  md:flex-row items-center justify-center gap-12 w-full">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <AboutImange />
        </div>

        {/* Right: Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6 text-left px-4">
          <div className="">
            <h2 className="text-3xl font-bold text-orange-500 ">
              I'm Rohit singh
            </h2>
            <h3 className="font-bold text-cyan-500 ">MERN Stack devlopment</h3>
          </div>
          <p className="text-white text-base md:text-lg leading-relaxed">
            I am a Full-Stack developer based in Pune, India. I am an
            Information Technology undergraduate from SPPU. I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <div className="">

          <p className="text-white font-semibold ">
            📧 Email:&nbsp;
            <a
              href="mailto:rohitdev124421@gmail.com"
              className="text-blue-500 hover:underline"
              >
              rohitdev124421@gmail.com
            </a>
          </p>

          <p className="text-white font-semibold">
            🏠 Home:&nbsp;
            <span className="text-blue-500">Delhi, India - 412206</span>
          </p>
              </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
