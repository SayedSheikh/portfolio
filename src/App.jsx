import { useEffect } from "react";
import "./App.css";
import AboutSection from "./Pages/Home/AboutSection/AboutSection";
import ConnectSection from "./Pages/Home/ConnectSection/ConnectSection";
import ContactSection from "./Pages/Home/ContactSection/ContactSection";
import Footer from "./Pages/Home/Footer/Footer";
import HeroSection from "./Pages/Home/Hero/HeroSection";
import Navbar from "./Pages/Home/Navbar/Navbar";
import ProjectsSection from "./Pages/Home/ProjectSection/ProjectsSection";
import TechnicalSkills from "./Pages/Home/TechnicalSkills/TechnicalSkills";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-[900px] mx-auto font-inter">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnicalSkills />
      <ProjectsSection />
      <ContactSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}

export default App;
