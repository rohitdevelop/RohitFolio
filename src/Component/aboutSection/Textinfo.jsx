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
        { text: "I am a Full-Stack developer based in Pune, India. I am an Information Technology undergraduate from SPPU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones." },
        { text: "💎 Email: ", link: "mailto:rohitdev124421@gmail.com", linkText: "rohitdev124421@gmail.com" },
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
            <>
              <h2 className="text-3xl font-bold text-orange-500">{item.heading}</h2>
              <h3 className="font-bold text-cyan-500">{item.subHeading}</h3>
            </>
          )}
          {item.text && <p className="text-base md:text-lg leading-relaxed">{item.text}</p>}
          {item.link && (
            <p>
              {item.text}
              <a href={item.link} className="text-blue-500 hover:underline">
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