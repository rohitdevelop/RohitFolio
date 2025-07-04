import React, { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(false); // No shrink on mobile
      }
    };

    handleScroll(); // On load
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full mt-6 fixed left-1/2 -translate-x-1/2 z-20 flex transition-all duration-300">
      <div
        className={`flex justify-between items-center w-full 
        ${isScrolled ? "max-w-[800px] p-3 border-orange-500" : "max-w-[1200px] p-6 border-orange-400"} 
        mx-auto bg-black text-white rounded-full border transition-all duration-300 ease-in-out`}
      >
        <NavbarLogo small={isScrolled} />
        <div className="hidden lg:flex">
          <NavbarLinks small={isScrolled} />
        </div>
        <NavbarBtn small={isScrolled} />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden sm:block p-6 bg-black rounded-full border border-amber-500 ml-2">
          <button
          className={`text-2xl p-3 border border-amber-500 rounded-full text-white 
      transition-all duration-300 ease-in-out 
      ${
        menuOpen
          ? "scale-125 rotate-180 border-cyan-400 shadow-cyan-400 shadow-lg"
          : "scale-100"
      }
      hover:scale-110 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-500`}
          onClick={toggleMenu}
        >
          {menuOpen ? <RxCross2 /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 w-full h-auto px-6 py-4 max-w-[450px]
          transition-all duration-500 ease-in-out
          ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          bg-[#00FFFF]/20 backdrop-blur-lg rounded-lg shadow-lg border border-[#00FFFF]/30 
          flex justify-center items-center`}
      >
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default NavbarMain;
