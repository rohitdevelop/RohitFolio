import React from "react";
import SkillText from "./SkillText";
import SkilsAll from "./SkilsAll";

const SkillsMain = () => {
  return (
    <div id="skills" className="py-12">
      <div className="max-w-[1200px] px-4 mx-auto relative">
        <SkillText />
        <div className="flex justify-center mt-10">
          <SkilsAll />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
