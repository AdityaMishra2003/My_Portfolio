// App.jsx
import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/overview";
import WorkExperience from "./components/Experience";
import ToolsSection from "./components/Tool";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/Contact";

const App = () => {
  return (
    <div className="bg-[#f6f6f6] min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <WorkExperience />
      <ToolsSection />
      <ProjectsSection />
      <ContactSection />
      {/* Add other sections like Projects, Contact, etc. here */}

    </div>
  );
};

export default App;