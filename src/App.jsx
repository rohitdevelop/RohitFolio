import React from "react";
import NavbarMain from "./Component/navbar/NavbarMain";
import HeroMain from "./Component/herosection/HeroMain";
import SubHerosection from "./Component/herosection/SubHerosection";
import AboutMain from "./Component/aboutSection/AboutMain";
import SkillsMain from "./Component/SkillSection/SkillsMain";
import Projects from "./Component/ProjectSec/Projects";
import Contact from "./Component/ContectSec/Contact";
 

const App = () => {
  return (
    <div className="josefin-sans">
      <main>
        <NavbarMain />
      </main>
      <HeroMain />
       <SubHerosection />
       <div>
       <AboutMain />
       </div>
       <SkillsMain />
       <Projects />
      <Contact />
    </div>
  );
};

export default App;
