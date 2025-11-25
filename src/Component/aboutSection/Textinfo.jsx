import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6"; // <-- import the arrow icon

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Textinfo = () => {
  return (
    <div className="flex flex-col text-left gap-6 px-4">
      {[
        { heading: "I'm Rohit Singh", subHeading: "MERN Stack Developer" },
        {
          text: "I’m a Full-Stack Web Developer from India, pursuing my BCA. I’ve completed a professional MERN stack course from GeeksforGeeks and built real-world projects to gain hands-on experience. I enjoy creating responsive, user-friendly applications and full-stack clones, and I’m passionate about continuously improving my coding skills.",
        },
        {
          text: "💎 Email:",
          link: "mailto:rohitdev124421@gmail.com",
          linkText: "rohitdev124421@gmail.com",
        },
        { text: "🏠 Home: Delhi, India - 412206" },
      ].map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
          className="text-white font-semibold"
        >
          {item.heading && (
            <div className="mb-2">
              <h2 className="text-3xl font-bold text-orange-500">
                {item.heading}
              </h2>
              <h3 className="font-bold text-cyan-500">{item.subHeading}</h3>
            </div>
          )}

          {item.text && !item.link && (
            <p className="text-base md:text-lg leading-relaxed">{item.text}</p>
          )}

          {item.link && (
            <p className="text-base md:text-lg leading-relaxed">
              {item.text}{" "}
              <a
                href={item.link}
                className="text-blue-400 hover:text-blue-500 underline transition duration-200"
              >
                {item.linkText}
              </a>
            </p>
          )}
        </motion.div>
      ))}

      {/* ---------- RESUME BUTTON AFTER HOME ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120, duration: 0.3 }}
          onClick={() => {
            const projectSection = document.getElementById("projects");
            if (projectSection) {
              projectSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-40 px-3 py-2 text-sm md:text-lg font-semibold text-white bg-orange-500 rounded-md 
             transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 
             flex items-center justify-center cursor-pointer gap-2 mt-2"
        >
          Projects
          <FaArrowRightLong className="transition-all duration-200 group-hover:ml-2" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Textinfo;
