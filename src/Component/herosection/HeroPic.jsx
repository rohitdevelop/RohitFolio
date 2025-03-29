import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HeroPic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center w-full md:w-1/2 mt-4 md:mt-0 md:ml-20"
    >
      <motion.div
        className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }} // Smooth hover effect
        layout
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-blue-900 rounded-full blur-lg opacity-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ opacity: 0.8, scale: 1.2 }}
        />
        <motion.div
          className="relative w-full h-full flex items-center justify-center rounded-full"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 40px 10px rgba(0, 255, 255, 0.6)",
          }}
          transition={{ type: "spring", stiffness: 150 }} // Smooth hover transition
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-p91wykF52aYIBzdmSb53lXSqmFNJjCi84UOkIk0KhLIjJRMsG9EyB1G&amp;s=10"
            alt="emoji"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroPic;
