import React from "react";
import logo from "../assets/logo.jfif"; // Adjust the path to your logo image

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000", // black background
    padding: "16px 40px",
    position: "sticky",
    top: 0,
    zIndex: 999,
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flex: 1,
  };

  const centerStyle = {
    display: "flex",
    gap: "24px",
    justifyContent: "center",
    flex: 2,
  };

  const navLinkStyle = {
    color: "#FFA500", // sweet orange
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "16px",
  };

  const logoStyle = {
    height: "32px",
    width: "32px",
    objectFit: "contain",
  };

  const nameStyle = {
    fontWeight: "bold",
    color: "white",
    fontSize: "18px",
  };

  return (
    <nav style={navStyle}>
      {/* Left: Logo | Name */}
      <div style={leftStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <span style={{ color: "#FFA500", fontSize: "18px" }}>|</span>
        <span style={{ color: "#FFA500", fontSize: "18px", fontWeight: "bold" }}>Aditya Mishra</span>
      </div>

      {/* Center: Navigation */}
      <div style={centerStyle}>
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#OverviewSection" style={navLinkStyle}>About</a>
        <a href="#WorkExperience" style={navLinkStyle}>Experience</a>
        <a href="#ProjectsSection " style={navLinkStyle}>Projects</a>
        <a href="#ContactSection" style={navLinkStyle}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
