import React from "react";

const HeroPic = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 mt-4 md:mt-0 md:ml-20">
      <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-blue-900 rounded-full blur-lg opacity-50 transition-all duration-500 group-hover:blur-2xl"></div>

        {/* Image Container with Hover & Shadow Effects */}
        <div className="relative w-full h-full flex items-center justify-center rounded-full transition-all duration-500 group hover:scale-110 hover:shadow-[0px_0px_40px_10px_rgba(0,255,255,0.6)]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-p91wykF52aYIBzdmSb53lXSqmFNJjCi84UOkIk0KhLIjJRMsG9EyB1G&amp;s=10"
            alt="emoji"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPic;
