import React from "react";

const SkillsSinge = ({ img, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500 ">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan-400 h-[100px] w-[100px] hover:text-gray-600 rounded-full flex flex-col items-center justify-center gap-2 relative hover:scale-105 transform transition-all duration-500 text-6xl border-orange-500 border-4">{img}</div>
        <p className="text-white font-bold ">{text}</p>
      </div>
      <div className=" w-[100px] h-[200px] bg-orange-400 absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SkillsSinge;
