import React from "react";
import { LuArrowDownRight as ArrowIcon } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button
      aria-label="Hire Me"
      className="px-5 py-2 rounded-full font-bold text-white border border-cyan-400 flex items-center gap-2 
                 bg-gradient-to-r from-cyan-400 to-yellow-600 
                 hover:border-amber-500 hover:scale-105 hover:rotate-1 hover:shadow-lg hover:shadow-cyan-500/50
                 transition-transform duration-300 ease-in-out"
    >
      Hire Me <ArrowIcon />
    </button>
  );
};

export default NavbarBtn;
