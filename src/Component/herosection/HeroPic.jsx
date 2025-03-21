import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 mt-8 md:mt-0">
      {/* Hexagonal Background with Animation */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center -z-10">
        <PiHexagonThin
          className="h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px]
                     text-cyan-400 blur-lg animate-[spin_20s_linear_infinite] opacity-50"
        />
      </div>

      {/* Profile Picture inside Hexagon */}
      <img
        src="/images/rohit.png"
        alt="Rohit Singh"
        className="w-[130px] sm:w-[160px] md:w-[200px] lg:w-[250px] rounded-lg shadow-lg border-4 border-yellow-400"
      />
    </div>
  );
};

export default HeroPic;
