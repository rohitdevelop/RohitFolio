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
          group
          ${small ? "px-4 py-1 text-sm" : "px-6 py-2 text-base"}
        `}
      >
       <span className='group-hover:ml-1 transition-all duration-300'>Rohit</span>
        <IoCodeWorkingSharp className="text-white text-xl group-hover:ml-1 transition-all duration-300" />
        <span className='group-hover:ml-1 transition-all duration-300'>Folio</span>
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
