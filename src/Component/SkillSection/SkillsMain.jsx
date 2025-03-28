import React from "react";
import SkillText from "./SkillText";
import SkilsAll from "./SkilsAll";

const SkillsMain = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 relative">
        <SkillText />
        <div className="flex justify-center mt-10">
          <SkilsAll />
        </div>
      </div>
    </section>
  );
};

export default SkillsMain;
