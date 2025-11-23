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
      // Shrink only on desktop
      if (window.innerWidth >= 1024) {
        setIsScrolled(window.scrollY > 100);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-full px-2 flex justify-center transition-all duration-500 ease-in-out">

      {/* Shrinkable Navbar */}
      <div
        className={`
          relative flex justify-between items-center
          bg-black/80 text-white backdrop-blur-md rounded-full border border-white/30
          transition-all duration-500 ease-in-out
          ${isScrolled ? "w-[500px] py-2 px-4 gap-x-4" : "w-[1200px] py-3 px-6 gap-x-8"}
        `}
      >
        {/* Logo (always visible on mobile) */}
        <div
          className={`transition-all duration-500 ease-in-out flex items-center ${
            isScrolled ? "lg:opacity-0 lg:scale-90" : "opacity-100 scale-100"
          }`}
        >
          <NavbarLogo small={isScrolled} />
        </div>

        {/* Centered Links */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
          <NavbarLinks small={isScrolled} />
        </div>

        {/* Button (always visible on mobile) */}
        <div
          className={`transition-all duration-500 ease-in-out flex items-center ${
            isScrolled ? "lg:opacity-0 lg:scale-90" : "opacity-100 scale-100"
          }`}
        >
          <NavbarBtn small={isScrolled} />
        </div>
      </div>

      {/* Mobile Menu Button (Always Visible) */}
      <div className="lg:hidden ml-2 flex items-center justify-center">
        <button
          onClick={toggleMenu}
          className={`
            text-2xl p-4 rounded-full border text-white bg-black
            border-white transition-transform duration-300 ease-in-out
            ${menuOpen ? "scale-125 rotate-180 shadow-cyan-200 shadow-lg" : "scale-100"}
            hover:scale-110 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-500
          `}
        >
          {menuOpen ? <RxCross2 /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
  className={`
    absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[380px]
    px-4 py-2 flex flex-col items-center
    transition-all duration-300 ease-in-out
    ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
    bg-[#00FFFF]/10 backdrop-blur-md rounded-xl shadow-md border border-[#00FFFF]/20
  `}
>
  <NavbarLinks />
</div>

    </nav>
  );
};

export default NavbarMain;
