import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
function App() {
  

  return (
    <>
      <CustomNavbar />
      <HeroSection />
    </>
  );
}

export default App;
