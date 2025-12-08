import React from "react";
import { IoCodeWorkingSharp } from "react-icons/io5";

const NavbarLogo = ({ small = false }) => {
  return (
    <>

      {/* ====================== DESKTOP VERSION ====================== */}
      <h1
        className={`
          hidden md:flex
          font-bold text-white bg-orange-700/30 backdrop-blur-lg border border-orange-400/70 cursor-pointer 
          rounded-full select-none
          items-center justify-center gap-1
          hover:brightness-90 hover:scale-105 transition-all duration-300 ease-in-out
          ${small ? "px-4 py-1 text-sm" : "px-6 py-2 text-base"}
        `}
      >
        Rohit
        <IoCodeWorkingSharp className="text-white text-xl" />
        Folio
      </h1>

      {/* ====================== MOBILE VERSION ====================== */}
      <h1
        className="
          md:hidden flex items-center gap-1 
          bg-transparent select-none
          text-xl font-bold
        "
      >
        <span className="text-orange-500">R</span>
        <IoCodeWorkingSharp className="text-white text-xl" />
        <span className="text-cyan-400">F</span>
      </h1>

    </>
  );
};

export default NavbarLogo;
