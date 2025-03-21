import React from "react";

const HeroGraidiant = () => {
  return (
    <div className=" ">
      {/* Top Right Cyan Glow */}
      <div className="absolute top-0 right-[250px] w-[250px] h-[250px] bg-cyan-400 blur-3xl opacity-50 -z-10 animate-pulse"></div>

      {/* Top Right Orange Glow */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-orange-400 blur-3xl opacity-50 -z-10 animate-pulse"></div>

      {/* Bottom Left Cyan Glow */}
      <div className="absolute top-[300px] left-0 w-[250px] h-[250px] bg-cyan-400 blur-3xl opacity-50 -z-10"></div>

      {/* Bottom Left Orange Glow */}
      <div className="absolute top-[500px] left-0 w-[250px] h-[250px] bg-orange-400 blur-3xl opacity-50 -z-10"></div>
    </div>
  );
};

export default HeroGraidiant;
