import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGraidiant from "./HeroGraidiant"; // ✅ Import gradient

const HeroMain = () => {
    return (
        <div className="relative pt-44 md:pt-44 lg:pt-60 pb-16 md:pb-28">
            {/* Background Gradient */}
            <HeroGraidiant /> 

            {/* Main Content Container */}
            <div className="flex flex-col-reverse md:flex-row max-w-[1550px] mx-auto justify-between items-center px-4 md:px-8 lg:px-12 gap-8 md:gap-0">
                {/* Hero Text */}
                <div className="w-full md:w-1/2 animate-fade-up ">
                    <HeroText />
                </div>
                <br />
                {/* Hero Picture */}
                <div className="  md:w-1/2 animate-fade-up delay-100">
                    <HeroPic />
                </div>
            </div>
        </div>
    );
};

export default HeroMain;