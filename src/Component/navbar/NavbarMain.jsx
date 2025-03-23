import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full mt-6 fixed left-1/2 -translate-x-1/2 z-20 flex">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black text-white items-center p-6 rounded-full border border-orange-400">
        <NavbarLogo />
        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden sm:block p-6 bg-black rounded-full border border-amber-500">
        <button className="text-2xl p-3 border border-amber-500 rounded-full text-white" onClick={toggleMenu}>
         { menuOpen ?<RxCross2 />:<LuMenu/>}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 w-full h-auto px-6 py-4 max-w-[450px]
    transition-all duration-500 ease-in-out
    ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
    bg-[#00FFFF]/20 backdrop-blur-lg rounded-lg shadow-lg border border-[#00FFFF]/30 flex justify-center items-center`}
      >
        <NavbarLinks />
      </div>

    </nav>
  );
};

export default NavbarMain;
