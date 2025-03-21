import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGraidiant from "./HeroGraidiant"; // ✅ Import gradient

const HeroMain = () => {
    return (
<div className="relative pt-44 md:pt-60 mb-0 md:mb-28 pb-16">

            {/* Background Gradient */}
            <HeroGraidiant /> {/* ✅ Gradient is inside HeroMain */}

            <div className="flex flex-col-reverse md:flex-row max-w-[1200px] mx-auto justify-between items-center px-4">
                {/* Hero Text */}
                <div className="animate-fade-up">
                    <HeroText />
                </div>
           <br />
           <br />
           <br />
                {/* Hero Picture */}
                <div className="animate-fade-up delay-100">
                    <HeroPic />
                </div>
            </div>
        </div>
    );
};

export default HeroMain;
