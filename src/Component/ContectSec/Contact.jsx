import React from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div id="contact" className="bg-white">
        <h1 className="text-cyan-500 pt-7 bg-white text-center text-3xl sm:text-4xl md:text-5xl font-bold  ">
          Contact <span className="text-black">Me</span>
        </h1>
        <div className="flex items-center justify-center w-full mx-auto px-5 py-12 text-center bg-white">
          <div className="bg-gray-100 w-full max-w-4xl rounded-3xl py-9 px-6 shadow-lg shadow-gray-400 flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image - Hidden on small screens */}
            <div className="w-full md:w-1/3 flex justify-center hidden md:flex">
  <img
    src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360"
    alt="Cartoon"
    className="w-72 h-72 rounded-lg shadow-md object-cover transition-all duration-300 hover:border-4 hover:border-cyan-400"
  />
</div>


            {/* Contact Form */}
            <div className="w-full md:w-2/3 p-6">
              <div className="text-left mb-6">
                <h3 className="text-2xl text-orange-500 font-bold mb-2">
                  Get In Touch
                </h3>
                <p className="text-black">
                  Feel free to reach out if you'd like to collaborate. You are
                  just a few clicks away!
                </p>
              </div>
              <form className="flex flex-col gap-4">
  <div className="flex items-center bg-gray-200 p-3 rounded focus-within:border-2 focus-within:border-cyan-400">
    <FaUser className="text-gray-500 mr-3" />
    <input
      type="text"
      placeholder="Your Name"
      className="w-full bg-transparent outline-none text-gray-800"
    />
  </div>

  <div className="flex items-center bg-gray-200 p-3 rounded focus-within:border-2 focus-within:border-cyan-400">
    <FaEnvelope className="text-gray-500 mr-3" />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full bg-transparent outline-none text-gray-800"
    />
  </div>

  <div className="flex items-center bg-gray-200 p-3 rounded focus-within:border-2 focus-within:border-cyan-400">
    <FaPhone className="text-gray-500 mr-3" />
    <input
      type="text"
      placeholder="Your Phone"
      className="w-full bg-transparent outline-none text-gray-800"
    />
  </div>

  <textarea
    placeholder="Your Message"
    className="w-full p-3 rounded bg-gray-200 text-gray-800 outline-none focus:border-2 focus:border-cyan-400"
    rows="4"
  ></textarea>

  <button
 
    type="submit"
    className="w-full md:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
  >
    Send Message
  </button>
</form>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
