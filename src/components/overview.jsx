import React from "react";
import { motion } from "framer-motion";

// Skill items with logo URLs from Devicon
const skills = [
  {
    title: "Backend Developer",
    description: "Robust backend development with scalable APIs and enterprise-grade applications.",
    logo: "https://cdn-icons-png.flaticon.com/512/12137/12137643.png",
  },
  {
    title: "SQL Developer",
    description: "Efficient scripting and automation with a strong grip on data handling.",
    logo: "https://www.pngplay.com/wp-content/uploads/7/Mysql-Logo-PNG-Photos.png",
  },
  {
    title: "Cloud Developer",
    description: "Experience working in agile teams, open communication, and cross-functional collaboration.",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Emblem.png",
  },
  {
    title: "Intelligent Automation",
    description: "Skilled in smart automation using Selenium and .NET to enhance testing efficiency.",
    logo: "https://img.freepik.com/premium-vector/creative-modern-gear-technology-tree-logo_642210-718.jpg",
  },
];

const descriptionLines = [
  "As a driven software developer, I excel in Backend Develpoment and Intelligent Automation.",
  "I'm passionate about collaborative work, continuous learning, and innovative problem-solving.",
  "I aim to deliver high-quality solutions, expand my technical expertise, and contribute to challenging projects.",
  "Let's work together to bring your ideas to life!",
];

const OverviewSection = () => {
  return (
    <section
      id="OverviewSection"
      style={{
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "100px 20px",
        fontFamily: "'Open Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background circles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10 + i, repeat: Infinity }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 80}px`,
            height: `${20 + Math.random() * 80}px`,
            backgroundColor: "#FFA500",
            borderRadius: "50%",
            opacity: 0.1,
            zIndex: 0,
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 20 + i * 2, repeat: Infinity }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${40 + Math.random() * 60}px`,
            height: `${40 + Math.random() * 60}px`,
            backgroundColor: "#FFA500",
            borderRadius: "50%",
            filter: "blur(10px)",
            opacity: 0.2,
            zIndex: 0,
          }}
        />
      ))}

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          fontSize: "36px",
          color: "#FFA500",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
          position: "relative",
          zIndex: 1,
        }}
      >
        Overview.
      </motion.h2>

      <div
        style={{
          fontSize: "18px",
          color: "#ccc",
          maxWidth: "800px",
          margin: "0 auto 60px",
          textAlign: "center",
          lineHeight: "1.6",
          position: "relative",
          zIndex: 1,
        }}
      >
        {descriptionLines.map((line, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.3 }}
            viewport={{ once: true }}
            style={{ display: "block", marginBottom: "10px" }}
          >
            {line}
          </motion.span>
        ))}
      </div>

      {/* Skill cards with logos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            style={{
              background: "linear-gradient(145deg, #1a1a1a, #0f0f0f)",
              border: "1px solid #FFA500",
              borderRadius: "20px",
              padding: "30px 25px",
              boxShadow: "0 4px 30px rgba(255, 165, 0, 0.4)",
              textAlign: "center",
              transition: "transform 0.3s ease",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={skill.logo}
              alt={`${skill.title} logo`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
              viewport={{ once: true }}
              style={{ width: "60px", marginBottom: "15px" }}
            />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.2 }}
              viewport={{ once: true }}
              style={{ color: "#FFA500", fontSize: "22px", marginBottom: "10px" }}
            >
              {skill.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.2 }}
              viewport={{ once: true }}
              style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.5" }}
            >
              {skill.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
