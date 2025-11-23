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
      className={`
        flex flex-col lg:flex-row items-center justify-center text-center w-full
        text-white transition-all duration-300
        ${small ? "gap-2 text-[11px]" : "gap-8 text-[16px]"}
      `}
    >
      {links.map(({ name, id }) => (
        <li key={id} className="relative group">
          <Link
            to={id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            onSetActive={() => setActive(id)}
            aria-label={name}
            className={`
              relative px-3 py-1 block cursor-pointer whitespace-nowrap
              transition-all duration-300
              ${active === id ? "text-cyan-400" : "hover:text-cyan-100 hover:scale-[1.03]"}
            `}
          >
            {name}

            {/* Underline */}
            <span
              className={`
                absolute left-1/2 bottom-0 h-[2px] bg-cyan-400 
                transition-all duration-300 ease-in-out
                -translate-x-1/2
                ${active === id ? "w-full" : "w-0 group-hover:w-full"}
              `}
            ></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
