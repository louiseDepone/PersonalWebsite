import { Link, Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Introduction from "./MainSections/Introduction"
import TechStack from "./MainSections/TechStack";
import { useEffect, useState } from "react";
import Projects from "./MainSections/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Aboutme from "./Components/Aboutme";
export default function App() {
  const [cursor, setcursor] = useState({top:0, left:0})
  useEffect(() => {

  })
  
  return (
    <div className="w-page relative "  
    // onMouseMove={(e) =>{
    //   console.log(e)
    //   setcursor({
    //     top: e.pageY - 100,
    //     left: e.pageX - 100
    //   })
    // }}
    
    >
       {/* <div className="pp absolute" style={cursor}>

</div> */}
      <Navigation/>
      <Introduction/>
      <TechStack/>
      <Aboutme/>
     <Education/>
      <Projects/>  
      <Contact/>
    </div>
  )
}