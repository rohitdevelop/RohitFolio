import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Footer from "./Footer.jsx";
import TiltedCard from "../aboutSection/TiltedCard";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState("");
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1 + 2,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email ❌");
      return;
    }

    setStatus("Message sent successfully! ✅");
    toast.success("Message sent successfully! ✅");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <div
        id="contact"
        className="bg-gray-950 relative overflow-hidden min-h-screen"
      >
        {/* Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-cyan-500 pt-7 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact <span className="text-white">Me</span>
          </h1>
          <div className="flex items-center justify-center w-full px-5 py-12 text-center">
            <div className="bg-gray-900/40 backdrop-blur-xl w-full max-w-4xl  rounded-3xl md:py-9 md:px-6 shadow-2xl flex flex-col md:flex-row items-center gap-10 border border-gray-600/50">
              <motion.div
                className="w-full md:w-1/3 hidden md:flex justify-center items-center"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="flex justify-center items-center">
                  <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]">
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700/40">
                      <TiltedCard
                        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-p91wykF52aYIBzdmSb53lXSqmFNJjCi84UOkIk0KhLIjJRMsG9EyB1G&s=10"
                        imageClassName="object-cover w-full h-full"
                        customWrapperClass="w-full h-full"
                        backgroundElement={null}
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={10}
                        scaleOnHover={1.03}
                        showTooltip={false}
                        displayOverlayContent={false}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-2/3 p-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="text-2xl text-orange-500 font-bold mb-2">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-2">
                  Feel free to reach out if you'd like to collaborate. You are
                  just a few clicks away!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-3 rounded border border-gray-700/50">
                    <FaUser className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-3 rounded border border-gray-700/50">
                    <FaEnvelope className="text-gray-400 mr-3" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                  <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-3 rounded border border-gray-700/50">
                    <FaPhone className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      required
                      className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full p-3 rounded bg-gray-800/50 backdrop-blur-sm text-gray-200 placeholder-gray-500 outline-none border border-gray-700/50"
                    rows="4"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
                  >
                    Send Message
                  </button>
                </form>
                {status && <p className="mt-4 text-gray-300">{status}</p>}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
