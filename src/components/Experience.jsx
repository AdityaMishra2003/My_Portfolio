import React from "react";
import { motion } from "framer-motion";

// Dummy logo URLs (Replace with real logos)
const logos = [
  "http://cdn.slidesharecdn.com/profile-photo-eInfochips_Solution-96x96.jpg?cb=1566807194",
  "https://5.imimg.com/data5/SELLER/Logo/2024/5/415654009/KV/KZ/OX/148166691/screenshot.png",
  "https://seeklogo.com/images/K/katalon-logo-0F46217B60-seeklogo.com.png",
  "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
  "https://seekvectors.com/files/download/Mulesoft-02.png",
];

const experiences = [
  
  {
    year: "June 2025 - Present",
    title: "Associate Software Engineer",
    company: "eInfochips (An Arrow Company)",
    bullets: [
      "Currently working on intelligent test automation using Selenium and .NET to test a live website, ensuring functionality, reliability, and performance",
    ],
  },
  {
    year: "Jul 2024 - Mar 2025",
    title: "Software Development Engineer",
    company: "VTS Ent. Pvt LTD",
    bullets: [
      "Contributed to building and maintaining web applications using Java Spring Boot, while collaborating with cross-functional teams, ensuring responsive design, and actively participating in code reviews.",
    ],
  },
  {
    year: "Dec 2023 - Feb 2024",
    title: "Automation Testing Intern",
    company: "Katalon",
    bullets: [
      "Built strong expertise in software testing automation through hands-on experience with leading tools and technologies. Gained up-to-date knowledge and established a solid foundation for a successful career in this field.",
    ],
  },
  {
    year: "Nov 2023 - Dec 2023",
    title: "Salesforce Dev Intern",
    company: "Salesforce",
    bullets: [
      "Completed multiple Salesforce Trailhead modules and earned prestigious Superbadges like Apex Specialist, Process Automation Specialist, and Developer Super Set. This reflects a strong command over Apex programming, Lightning components, Visualforce, and business process automation."
    ],
  },
  {
    year: "Jun 2023 - Aug 2023",
    title: "Mulesoft Developer 1",
    company: "Mulesoft",
    bullets: [
      "Hands-on experience with Anypoint Platform, including its core components, API development and deployment, Mule application building, integration with web services, and data management."
    ],
  },
  
];

const WorkExperience = () => {
  return (
    <section
      id="WorkExperience"
      style={{
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "100px 20px",
        fontFamily: "'Open Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blur Light */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,165,0,0.4), transparent)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: "36px",
          color: "#FFA500",
          textAlign: "center",
          marginBottom: "60px",
          fontWeight: "bold",
          zIndex: 2,
          position: "relative",
        }}
      >
        Work Experience
      </motion.h2>

      {/* Experience Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          const animationVariants = {
            hidden: { opacity: 0, x: isEven ? -150 : 150 },
            visible: { opacity: 1, x: 0 },
          };

          return (
            <motion.div
              key={index}
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              style={{
                background: "#111",
                borderLeft: isEven ? "4px solid #FFA500" : "none",
                borderRight: !isEven ? "4px solid #FFA500" : "none",
                padding: "25px 30px",
                borderRadius: "14px",
                maxWidth: "650px",
                width: "90%",
                boxShadow: "0 0 25px rgba(255, 165, 0, 0.2)",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Company Logo */}
              <img
                src={logos[index]}
                alt="Org Logo"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  border: "2px solid #FFA500",
                  backgroundColor: "#1a1a1a",
                  flexShrink: 0,
                }}
              />

              {/* Textual Info */}
              <div>
                <h3 style={{ fontSize: "20px", color: "#FFA500", marginBottom: "4px" }}>
                  {exp.title}
                </h3>
                <h4 style={{ fontSize: "16px", color: "#f0f0f0", marginBottom: "4px" }}>
                  {exp.company}
                </h4>
                <p style={{ fontSize: "15px", color: "#888", marginBottom: "10px" }}>
                  {exp.year}
                </p>
                <ul style={{ paddingLeft: "18px", color: "#ccc", fontSize: "15px", lineHeight: "1.6" }}>
                  {exp.bullets.map((point, idx) => (
                    <li key={idx} style={{ marginBottom: "6px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;

