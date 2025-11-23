import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TiltedCard from "../aboutSection/TiltedCard";
import Spline from "@splinetool/react-spline";

const HeroPic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      {/* ---------- MOBILE VIEW IMAGE ---------- */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          flex flex-col items-center justify-center 
          w-full md:hidden 
          mt-10
        "
      >
        <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]">
          <div className="rounded-full overflow-hidden w-full h-full shadow-lg">
            <TiltedCard
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-p91wykF52aYIBzdmSb53lXSqmFNJjCi84UOkIk0KhLIjJRMsG9EyB1G&s=10"
              imageClassName="rounded-full"
              customWrapperClass="overflow-hidden w-full h-full"
              backgroundElement={null}
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.02}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </div>
        </div>
      </motion.div>

      {/* ---------- LAPTOP VIEW ROBO SPLINE ---------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex justify-center items-center w-full"
      >
        <div
          className="
          relative flex justify-center items-center
          w-[380px] h-[380px]
          md:w-[450px] md:h-[450px]
          lg:w-[520px] lg:h-[520px]
          xl:w-[600px] xl:h-[600px]
          "
        >
          <div className="absolute inset-0 ">
            <Spline
              scene="https://prod.spline.design/9zfUfWKvuzowewhe/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroPic;
