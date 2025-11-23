import React from "react";
import TiltedCard from "./TiltedCard";

const AboutImage = () => {
  return (
    <div className="relative w-48 h-80 md:w-64 md:h-96 lg:w-72 lg:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <TiltedCard
        imageSrc="/src/images/codepic.png.jpg" // Corrected way to use public folder image
        altText="MERN Stack Learning"
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={15}
        scaleOnHover={1.0}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={false}
     
      />
    </div>
  );
};

export default AboutImage;
