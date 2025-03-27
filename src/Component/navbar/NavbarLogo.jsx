import React from "react";

const NavbarLogo = () => {
  return (
    <h1
      className="relative text-3xl font-bold items-center space-x-2 cursor-pointer 
      transition-all duration-500 ease-out hover:scale-105 hover:skew-x-6"
    >
      {/* Gradient Shimmer Effect */}
      <span className="hidden md:inline bg-gradient-to-r from-cyan-400 to-yellow-500 bg-clip-text text-transparent 
        hover:animate-[shimmer_1.5s_linear_infinite] hover:blur-sm">
        RohitFolio
      </span>

      {/* Short logo for mobile */}
      <span className="md:hidden text-cyan-400 hover:text-yellow-500 transition-all duration-300">
        RF
      </span>

      {/* Animated Background Effect */}
      <span className="absolute inset-0 -z-10  text-cyan-400  duration-500">
        RohitFolio
      </span>
    </h1>
  );
};

export default NavbarLogo;
