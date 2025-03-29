import React from "react";
import photo from '/public/images/codepic.png.jpg'
const AboutImange = () => {
  return (
    <div className="relative w-48 h-80 md:w-64 md:h-96 lg:w-72 lg:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <img
        src={photo}
        alt="Profile"
        className="w-full h-full mt-8 border-4 border-amber-300 object-fill relative z-10"
      />
    </div>
  );
};

export default AboutImange;
