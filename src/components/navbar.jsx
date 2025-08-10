import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jfif";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    padding: "16px 20px",
    position: "sticky",
    top: 0,
    zIndex: 999,
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    flexWrap: "wrap",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const logoStyle = {
    height: "32px",
    width: "32px",
    objectFit: "contain",
  };

  const navLinkStyle = {
    color: "#FFA500",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "16px",
    padding: "10px",
  };

  const mobileMenuStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "10px",
    backgroundColor: "#000",
  };

  const hamburgerStyle = {
    fontSize: "24px",
    color: "#FFA500",
    cursor: "pointer",
    display: isMobile ? "block" : "none",
    border: "none",
    background: "none",
  };

  return (
    <nav style={navStyle}>
      {/* Left Section */}
      <div style={leftStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <span style={{ color: "#FFA500", fontSize: "18px" }}>|</span>
        <span style={{ color: "#FFA500", fontSize: "18px", fontWeight: "bold" }}>Aditya Mishra</span>
      </div>

      {/* Hamburger for Mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={hamburgerStyle}>
        ☰
      </button>

      {/* Navigation Links */}
      {isMobile ? (
        menuOpen && (
          <div style={mobileMenuStyle}>
            <a href="#home" style={navLinkStyle}>Home</a>
            <a href="#OverviewSection" style={navLinkStyle}>About</a>
            <a href="#WorkExperience" style={navLinkStyle}>Experience</a>
            <a href="#ProjectsSection" style={navLinkStyle}>Projects</a>
            <a href="#ContactSection" style={navLinkStyle}>Contact</a>
          </div>
        )
      ) : (
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#home" style={navLinkStyle}>Home</a>
          <a href="#OverviewSection" style={navLinkStyle}>About</a>
          <a href="#WorkExperience" style={navLinkStyle}>Experience</a>
          <a href="#ProjectsSection" style={navLinkStyle}>Projects</a>
          <a href="#ContactSection" style={navLinkStyle}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

