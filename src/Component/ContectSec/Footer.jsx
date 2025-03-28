import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope,FaPhone, FaMapMarkerAlt  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        {/* About Me Section */}
        <div>
          <h2 className="text-xl font-bold  text-orange-400">Rohit Singh</h2>
          <p className="mt-3 text-gray-400 mb-4">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. 
          </p>
            <p className="text-gray-400">Keep Rising 🚀. Connect with me over live chat!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
 
<h3 className="text-lg font-semibold text-cyan-400">Get in Touch</h3>
<p className="mt-3 text-gray-400 flex items-center gap-2">
  <FaPhone className="text-cyan-400" /> +91 8287-xxxx-xx
</p>
<p className="text-gray-400 flex items-center gap-2">
  <FaEnvelope className="text-cyan-400" /> rohitdev124421@gmail.com
</p>
<p className="text-gray-400 flex items-center gap-2">
  <FaMapMarkerAlt  className="text-cyan-400" /> Delhi,india
</p>


          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/rohitdevelop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-singh-b7777730a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/Rohit_coder5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:rohitdev124421@gmail.com"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4  text-gray-500 text-sm">
      Designed by Rohit Singh ❤️
      </div>
    </footer>
  );
};

export default Footer;
