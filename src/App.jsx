import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import MoreAbout from "./pages/MoreAbout";
import Project from "./pages/Project";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Skill from "./pages/Skill";
import Showcase from "./pages/Showcase";
import Finish from "./pages/Finish";

function App() {
  
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <MoreAbout />
        <Project />
        <Showcase />
    </>
  );
}

export default App;
