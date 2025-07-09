import React, { useState } from "react";
import { Link } from "react-scroll";

const links = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Expirence", id: "expirence" },
  { name: "Contact", id: "contact" },
];

const NavbarLinks = ({ small = false }) => {
  const [active, setActive] = useState(null);

  return (
    <ul
      className={`flex flex-col lg:flex-row items-center justify-center text-center w-full text-white transition-all duration-300
      ${small ? "gap-2 text-[10px]" : "gap-8 text-base"}`}
    >
      {links.map(({ name, id }) => (
        <li key={name} className="relative group">
          <Link
            to={id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            onSetActive={() => setActive(id)}
            aria-label={name}
            className={`relative px-4 py-2 block transition duration-300 cursor-pointer whitespace-nowrap
              ${active === id ? "text-cyan-400" : "hover:text-cyan-400 hover:scale-105"}`}
            onClick={() => setActive(id)}
          >
            {name}
            <span
              className={`absolute bottom-0 left-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-in-out transform -translate-x-1/2 
              ${active === id ? "w-full -translate-x-0 left-0" : "group-hover:w-full"}`}
            ></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
