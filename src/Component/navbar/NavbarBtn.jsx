import React from "react";
import { scroller } from "react-scroll";
import { LuArrowDownRight as ArrowIcon } from "react-icons/lu";

const NavbarBtn = ({ small = false }) => {
  const handleScroll = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
      offset: -50, // Adjust for navbar height
    });
  };

  return (
    <button
      onClick={handleScroll}
      className={`rounded-full font-medium text-white cursor-pointer 
      bg-orange-600
      hover:brightness-90 hover:scale-105 transition-all duration-300 ease-in-out 
      flex items-center gap-2
      ${small ? "px-4 py-1 text-sm" : "px-6 py-2 text-base"}`}
    >
      Hire Me <ArrowIcon />
    </button>
  );
};

export default NavbarBtn;
