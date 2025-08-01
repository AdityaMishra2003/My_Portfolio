import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart-Health-Care",
    description: "This healthcare appointment scheduling system offers numerous benefits, including streamlined scheduling and communication.",
    image: "/project1.jpg",
    github: "https://github.com/AdityaMishra2003/Smart_Healthcare_Management",
    techStack: ["springboot", "thymleaf", "MySQL"],
  },
  {
    title: "Task Management System",
    description: "SThis task management project enables managers to create and assign tasks, track status, and monitor progress.",
    image: "/project2.jpg",
    github: "https://github.com/AdityaMishra2003/Task_Management",
    techStack: ["Spring Boot", "restapi", "MySQL"],
  },
  {
    title: "Travel Agency",
    description: "A comprehensive travel booking platform that allows users to book travel tickets, and offers seamless booking experience.",
    image: "/project3.jpg",
    github: "https://github.com/AdityaMishra2003/Ticket_Booking_Website",
    techStack: ["Spring Boot", "restapi", "MySQL"],
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="ProjectsSection"
      style={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "100px 20px",
        fontFamily: "'Open Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Circles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: ["0%", "100%"], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i,
            }}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(255,165,0,0.2)",
              borderRadius: "50%",
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
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
        Projects
      </motion.h2>

      {/* Section Description */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px auto",
          textAlign: "center",
          color: "#ddd",
          fontSize: "18px",
          lineHeight: "1.6",
          zIndex: 2,
          position: "relative",
        }}
      >
        Following projects showcase my skills and experience through real-world examples of my work.
        Each project is briefly described with links to code repositories and live demos in it.
        It reflects my ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>

      

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          zIndex: 2,
          position: "relative",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.06, rotate: 1, zIndex: 10 }}
            style={{
              backgroundColor: "#111",
              borderRadius: "15px",
              width: "300px",
              padding: "20px",
              boxShadow: "0 0 25px rgba(255,165,0,0.3)",
              border: "2px solid rgba(255,165,0,0.5)",
              transition: "transform 0.4s ease",
              position: "relative",
              zIndex: 2,
              backdropFilter: "blur(3px)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontSize: "20px",
                color: "#FFA500",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#ccc",
                marginBottom: "12px",
              }}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div style={{ marginBottom: "15px" }}>
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#222",
                    color: "#FFA500",
                    padding: "5px 10px",
                    margin: "2px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    border: "1px solid #FFA500",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Unique Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "radial-gradient(circle at top left, #ff8008, #ffc837)",
                color: "#000",
                padding: "10px 18px",
                borderRadius: "50px",
                fontWeight: "bold",
                textDecoration: "none",
                boxShadow: "0 0 15px rgba(255,165,0,0.6)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 25px #FFA500";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(255,165,0,0.6)";
              }}
            >
              <FaGithub style={{ marginRight: "8px" }} /> 
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
