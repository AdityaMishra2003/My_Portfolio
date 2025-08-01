import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yq9qlim",
        "template_o182cwn",
        formRef.current,
        "CDGm0xJ9iDdks0ZE2"
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  const handleMouseMove = (e) => {
    const form = e.currentTarget;
    const rect = form.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      id="ContactSection"
      style={{
        position: "relative",
        padding: "100px 20px",
        background: "#0a0a0a",
        color: "white",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Background Animation */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,165,0,0.1), transparent), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05), transparent)",
            animation: "moveBackground 20s infinite linear",
          }}
        />
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Earth GIF Centered */}
      <img
        src="/earth.gif"
        alt="Earth"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          opacity: 0.12,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Main Form with Rotation on Mouse */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          margin: "auto",
          textAlign: "center",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.1s ease",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#FFA500",
          }}
        >
          Let's Connect 🌐
        </h2>
        <p style={{ color: "#ccc", marginBottom: "40px" }}>
          Got a project, query, or idea to share? No matter where you are on this planet — I’m just a message away!
        </p>

        <form ref={formRef} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input type="text" name="user_name" placeholder="Your Name" required style={inputStyle} />
          <input type="email" name="user_email" placeholder="Your Email" required style={inputStyle} />
          <textarea name="message" placeholder="Your Message" required rows="5" style={{ ...inputStyle, resize: "none" }}></textarea>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.08,
              backgroundColor: "#FFA500",
              color: "#000",
              boxShadow: "0 0 35px rgba(255, 165, 0, 0.7)",
              border: "2px solid #fff",
            }}
            whileTap={{ scale: 0.95 }}
            style={buttonStyle}
          >
            Send Message
          </motion.button>
        </form>

        {sent && <p style={{ marginTop: "20px", color: "#00ff7f" }}>✅ Message Sent Successfully!</p>}
      </motion.div>

      <style>{`
        @keyframes moveBackground {
          0% { background-position: 0 0, 100% 100%; }
          50% { background-position: 100% 0, 0 100%; }
          100% { background-position: 0 0, 100% 100%; }
        }
        .drop {
          position: absolute;
          top: -20px;
          width: 4px;
          height: 12px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation-name: fallDrop;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes fallDrop {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

const inputStyle = {
  padding: "14px 20px",
  borderRadius: "10px",
  border: "1px solid #555",
  background: "#1a1a1a",
  color: "white",
  fontSize: "1rem",
  outline: "none",
  boxShadow: "inset 0 0 8px rgba(255,165,0,0.2)",
};

const buttonStyle = {
  background: "rgba(255, 165, 0, 0.15)",
  color: "#FFA500",
  border: "2px solid #FFA500",
  borderRadius: "12px",
  padding: "14px 30px",
  fontSize: "1.1rem",
  fontWeight: "bold",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  boxShadow: "0 0 15px rgba(255, 165, 0, 0.3)",
  transition: "all 0.4s ease-in-out",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

export default ContactSection;
