import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="max-w-6xl mx-auto px-5 py-12 text-center">
      <h1 className="text-cyan-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        Contact Me
      </h1>

      <div className="bg-amber-900 rounded-3xl py-9 px-4 shadow-lg shadow-cyan-500/50">
        <div className="md:grid-cols-2 gap-8 flex flex-col md:flex-row items-center justify-between">
          {/* Contact Form */}
          <div className="p-8 w-full md:w-1/2">
            <div className="flex flex-col items-start">
              <h3 className="text-2xl text-orange-500 font-bold mb-1">
                Get In Touch
              </h3>
              <p className="mb-4 text-gray-300">
                Feel free to reach out if you'd like to collaborate. You are
                just a few clicks away!
              </p>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-cyan-500 cursor-pointer hover:bg-orange-500 transition-all duration-300 p-3 rounded text-white font-semibold shadow-md shadow-cyan-500/40"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="p-8 w-full md:w-1/2 text-left bg-gray-800 rounded-lg shadow-lg shadow-cyan-400/40">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-3xl" />
                <div>
                  <p className="text-lg text-white">Email</p>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-cyan-400 hover:text-orange-400 transition"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-3xl" />
                <div>
                  <p className="text-lg text-white">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-cyan-400 hover:text-orange-400 transition"
                  >
                    +123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-3xl" />
                <div>
                  <p className="text-lg text-white">Location</p>
                  <p className="text-gray-400">Noida, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 bg-gray-900 text-gray-400 text-center shadow-md shadow-cyan-500/50">
        <p>&copy; {new Date().getFullYear()} Rohit Singh. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
