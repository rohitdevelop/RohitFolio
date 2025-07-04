import React from "react";

const NavbarLogo = ({ small = false }) => {
  return (
    <h1
      className={`relative font-bold items-center transition-all duration-300 
      ${small ? "text-xl" : "text-3xl"}`}
    >
      {/* Gradient Shimmer Effect for Desktop */}
      <span className="hidden md:inline bg-gradient-to-r from-cyan-400 to-yellow-500 bg-clip-text text-transparent">
        RohitFolio
      </span>

      {/* Short logo for Mobile */}
      <span className="md:hidden text-cyan-400">
        RF
      </span>

      {/* Animated Glow Background (Optional Visual Layer) */}
      <span className="absolute inset-0 -z-10 text-cyan-400 opacity-0 duration-500">
        RohitFolio
      </span>
    </h1>
  );
};

export default NavbarLogo;
