import React from "react";
import { motion } from "framer-motion";

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
    { text: " I’m a Full-Stack Web Developer based in India, currently pursuing my BCA. Over the past year, I’ve been sincerely learning and building real-world web development projects from home. I’ve completed a professional MERN stack course from GeeksforGeeks, where I gained strong hands-on experience with the MERN Stack. I’m passionate about improving my coding skills and love building responsive, user-friendly applications and full-stack clones. I enjoy working on projects independently to sharpen my skills and am always eager to learn and grow in a real development environment." },
    { text: "💎 Email:", link: "mailto:rohitdev124421@gmail.com", linkText: "rohitdev124421@gmail.com" },
    { text: "🏠 Home: Delhi, India - 412206" }
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
          <h2 className="text-3xl font-bold text-orange-500">{item.heading}</h2>
          <h3 className="font-bold text-cyan-500">{item.subHeading}</h3>
        </div>
      )}

      {item.text && !item.link && (
        <p className="text-base md:text-lg leading-relaxed">{item.text}</p>
      )}

      {item.link && (
        <p className="text-base md:text-lg leading-relaxed">
          {item.text}{" "}
          <a href={item.link} className="text-blue-400 hover:text-blue-500 underline transition duration-200">
            {item.linkText}
          </a>
        </p>
      )}
    </motion.div>
  ))}
</div>

  );
};

export default Textinfo;