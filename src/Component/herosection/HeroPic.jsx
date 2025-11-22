import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroPic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center w-full md:w-3xl mt-4 md:mt-0 md:ml-20"
    >
      <div className="relative flex justify-center items-center
                      w-[200px] h-[200px]
                      sm:w-[260px] sm:h-[260px]
                      md:w-[350px] md:h-[350px]
                      lg:w-[350px] lg:h-[350px]">

        {/* Circle frame */}
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl">
          {/* Spline Robot */}
          <Spline
            scene="https://prod.spline.design/9zfUfWKvuzowewhe/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
