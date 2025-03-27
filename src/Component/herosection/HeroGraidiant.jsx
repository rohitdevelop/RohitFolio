import React from "react";

const glowConfigs = [
  { color: "bg-orange-400" },
  { color: "bg-cyan-400" },
  { color: "bg-orange-400" },
  { color: "bg-cyan-400" },
  { color: "bg-orange-400" },
  { color: "bg-cyan-400" },
];

const HeroGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 flex justify-center">
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-16 sm:gap-72 md:gap-72">
{glowConfigs.map((glow, index) => (
          <div
            key={index}
            className={`w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px] ${glow.color} blur-3xl animate-bounce opacity-70 sm:opacity-70 md:opacity-40`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroGradient;
