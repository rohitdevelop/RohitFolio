import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarMain from "./Component/navbar/NavbarMain";
import HeroMain from "./Component/herosection/HeroMain";
import SubHerosection from "./Component/herosection/SubHerosection";
import AboutMain from "./Component/aboutSection/AboutMain";
import SkillsMain from "./Component/SkillSection/SkillsMain";
import Projects from "./Component/ProjectSec/Projects";
import Contact from "./Component/ContectSec/Contact";
import Resume from "./Component/herosection/Resume";

const App = () => {
  const location = useLocation();  // Get the current route

  return (
    <div className="josefin-sans">
      {/* Hide Navbar only when on the Resume page */}
      {location.pathname !== "/resume" && <NavbarMain />}

      <Routes>
        <Route path="/" element={
          <>
            <HeroMain />
            <SubHerosection />
            <AboutMain />
            <SkillsMain />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
