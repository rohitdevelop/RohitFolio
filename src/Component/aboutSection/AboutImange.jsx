import React from "react";

const AboutImage = () => {
  return (
    <div className="relative w-48 h-80 md:w-64 md:h-96 lg:w-72 lg:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      {/* Orange Borders (Left & Bottom) */}
      <div className="absolute w-full h-full">
        {/* Left Border */}
        <div className="absolute h-full w-[25px] bg-gradient-to-tr from-orange-500 to-cyan-500 left-0 bottom-0 -z-10"></div>
        {/* Bottom Border */}
        <div className="absolute w-full h-[20px] bg-gradient-to-tr from-orange-500 to-cyan-500 left-0 bottom-0 -z-10"></div>
      </div>

      {/* Image */}
      <img
        src="https://iphoneswallpapers.com/wp-content/uploads/2025/03/Lofi-Music-iPhone-Wallpaper.jpg"
        alt="Profile"
        className="w-full ml-5 pb-5 h-full object-cover relative z-10"
      />
    </div>
  );
};

export default AboutImage;
