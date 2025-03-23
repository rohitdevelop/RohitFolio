import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 mt-8 md:mt-0 md:ml-40">
      {/* Hexagonal Background with Animation */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center -z-10">
        <PiHexagonThin
          className="h-[90vh] w-[90vw] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[550px] lg:w-[550px]
                     text-cyan-400 blur-[10px] animate-[spin_20s_linear_infinite] opacity-100"
        />
      </div> */}

      {/* Hexagonal Image Container */}
      <div className="hexagon">
        <img
          src="/images/rohit.png"
          alt="Rohit Singh"
          className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] rounded-lg  shadow-lg border-4 border-yellow-400"
        />
      </div>
    </div>
  );
};

export default HeroPic;