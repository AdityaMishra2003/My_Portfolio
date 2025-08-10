import React from "react";
import { motion } from "framer-motion";

const tools = [
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Java & Spring Boot",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "VS Professional",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Cloud",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Eclipse",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: ".Net",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "Selenium",
    image: "https://tse4.mm.bing.net/th/id/OIP.6gflGytuDYjCnPt1y3VkjwAAAA?pid=Api&P=0&h=180",
  },





];

const TechTools = () => {
  return (
    <section
      id="tech-tools"
      style={{
        position: "relative",
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "100px 20px",
        fontFamily: "'Open Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Smooth animated background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,165,0,0.08), transparent 60%)",
          animation: "floatBackground 12s ease-in-out infinite",
          zIndex: 0,
        }}
      />

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
          position: "relative",
          zIndex: 2,
        }}
      >
        Tech Tools
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            style={{
              background: "#111",
              borderRadius: "15px",
              padding: "20px 30px",
              minWidth: "150px",
              textAlign: "center",
              fontSize: "18px",
              color: "#fff",
              border: "2px solid #FFA500",
              boxShadow: "0 0 20px rgba(255, 165, 0, 0.4)",
              animation: "glowBorder 4s linear infinite",
              position: "relative",
            }}
          >
            <img
              src={tool.image}
              alt={tool.name}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "10px",
                objectFit: "contain",
                filter: "brightness(1.2)",
              }}
            />
            <div>{tool.name}</div>
          </motion.div>
        ))}
      </div>

      {/* Keyframes for animation */}
      <style>
        {`
          @keyframes glowBorder {
            0% { box-shadow: 0 0 8px #FFA500; }
            50% { box-shadow: 0 0 20px #FFA500; }
            100% { box-shadow: 0 0 8px #FFA500; }
          }

          @keyframes floatBackground {
            0% { background-position: 20% 20%; }
            50% { background-position: 80% 80%; }
            100% { background-position: 20% 20%; }
          }
        `}
      </style>
    </section>
  );
};

export default TechTools;

