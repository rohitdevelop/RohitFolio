import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "About Me", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 text-lg lg:text-base text-white text-center w-full">
      {links.map(({ name, path }) => (
        <li key={name} className="relative group w-full">
          <Link
            to={path}
            aria-label={name}
            className="relative px-5 py-4 block transition duration-300 hover:text-cyan-400 hover:scale-105 whitespace-nowrap"
          >
            {name}
            {/* Underline Effect */}
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
