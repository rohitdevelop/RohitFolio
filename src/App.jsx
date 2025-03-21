import React from "react";
import NavbarMain from "./Component/navbar/NavbarMain";
import HeroMain from "./Component/herosection/HeroMain";
import SubHerosection from "./Component/herosection/SubHerosection";
 
const App = () => {
  return (
    <div>
      <main className="font-[Josefin Sans]">
        <NavbarMain />
      </main>
      <HeroMain />
      
       <SubHerosection />
    </div>
  );
};

export default App;
