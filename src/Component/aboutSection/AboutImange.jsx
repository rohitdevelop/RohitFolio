import React from "react";

const AboutImange = () => {
  return (
    <div className="relative w-48 h-80 md:w-64 md:h-96 lg:w-72 lg:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <img
        src="/IMG_20250308_081819462.jpg"
        alt="Profile"
        className="w-full h-full border-4 border-amber-300 object-cover relative z-10"
      />
    </div>
  );
};

export default AboutImange;
