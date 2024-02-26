import { Link, Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Introduction from "./MainSections/Introduction"
import TechStack from "./MainSections/TechStack";
import { useEffect, useState } from "react";
import Projects from "./MainSections/Projects";
export default function App() {
  
  
  return (
    <div className="w-screen" >
      <Navigation/>
      <Introduction/>
      <TechStack/>
        <Projects/>
    </div>
  )
}