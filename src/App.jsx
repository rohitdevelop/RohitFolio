import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarMain from "./Component/navbar/NavbarMain";
import HeroMain from "./Component/herosection/HeroMain";
import SubHerosection from "./Component/herosection/SubHerosection";
import AboutMain from "./Component/aboutSection/AboutMain";
import SkillsMain from "./Component/SkillSection/SkillsMain";
import Projects from "./Component/ProjectSec/Projects";
import Expmain from "./Component/Expirence/Expmain";
import Contact from "./Component/ContectSec/Contact";
import ManyProjects from "./Component/ProjectSec/ManyProjects";

const App = () => {
  return (
    <div className="josefin-sans">
 
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
            <NavbarMain />
              <HeroMain />
              <SubHerosection />
              <AboutMain />
              <SkillsMain />
              <Projects />
              <Expmain />
              <Contact />
            </>
          }
        />

        {/* Many Projects page */}
        <Route path="/manyproject" element={<ManyProjects />} />
      </Routes>
    </div>
  );
};

export default App;
