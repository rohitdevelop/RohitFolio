import React, { useRef } from "react";
 import TiltedCard from "../aboutSection/TiltedCard";
import Spline from "@splinetool/react-spline";

const HeroPic = () => {
  const ref = useRef(null);
 
  return (
    <div
      ref={ref}
      className="w-full flex justify-center items-center flex-col md:flex-row"
    >
      {/* ---------- MOBILE VIEW IMAGE ---------- */}
      <div
       
        className="flex flex-col items-center justify-center w-full md:hidden mt-15"
      >
        <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px]">
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
      </div>

      {/* ---------- DESKTOP / LAPTOP VIEW ROBO SPLINE ---------- */}
      < div
      
        className="hidden md:flex justify-center items-center w-full mt-8 md:mt-0"
      >
        <div
          className="
            relative flex justify-center items-center
            w-[380px] h-[380px]
            md:w-[450px] md:h-[450px]
            lg:w-[500px] lg:h-[500px]
            xl:w-[550px] xl:h-[550px]
          "
        >
          <div className="absolute inset-0   overflow-hidden  ">
            <Spline
              scene="https://prod.spline.design/9zfUfWKvuzowewhe/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </ div>
    </div>
  );
};

export default HeroPic;
