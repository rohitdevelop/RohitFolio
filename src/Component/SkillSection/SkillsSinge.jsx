import React from "react";

const SkillsSinge = ({ img, text }) => {
  return (
    <div className="hover:-translate-y-5 transition-all duration-500 w-full sm:w-1/2 px-2">
    <div className="flex flex-col items-center gap-2 relative">
      <div className="bg-white text-cyan-400 h-[80px] w-[120px] hover:text-gray-600 rounded-lg flex flex-col items-center justify-center gap-2 relative hover:scale-105 transform transition-all duration-500 text-5xl border-orange-500 border-4">
        {img}
      </div>
      <p className="text-white font-bold text-xs sm:text-sm md:text-base">{text}</p>
    </div>
    <div className="w-[120px] h-[100px] bg-orange-400 absolute top-[30px] -z-10"></div>
  </div>
  );
};

export default SkillsSinge;
