// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const HeroSection = () => {
//   const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

//   return (
//     <section
//       id="home"
//       style={{
//         position: "relative",
//         backgroundColor: "#000",
//         color: "white",
//         overflow: "hidden",
//         padding: "60px 20px 100px",
//         fontFamily: "'Open Sans', sans-serif",
//       }}
//     >
//       {/* Moving SVG Background */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 0,
//         }}
//       >
//         <svg
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//           style={{
//             height: "100%",
//             width: "100%",
//             animation: "waveMove 20s linear infinite",
//           }}
//         >
//           <path
//             fill="#FFA500"
//             fillOpacity="0.12"
//             d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,122.7C672,149,768,203,864,208C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L0,320Z"
//           ></path>
//         </svg>
//       </div>

//       {/* Foreground Content */}
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "40px",
//             marginBottom: "50px",
//           }}
//         >
//           {/* Left Text Section */}
//           <div style={{ maxWidth: "600px", textAlign: "left" }}>
//             <motion.p
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               style={{
//                 color: "#FFA500",
//                 fontSize: "50px",
//                 fontWeight: "1000",
//                 fontFamily: "'Open Sans', sans-serif",
//                 margin: "0",
//               }}
//             >
//               Hello
//             </motion.p>

//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               style={{
//                 fontSize: "56px",
//                 fontWeight: "bold",
//                 fontFamily: "'Poppins', sans-serif",
//                 margin: "10px 0",
//               }}
//             >
//               I'm <span style={{ color: "#FFA500" }}>Aditya Mishra</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 1 }}
//               style={{
//                 fontSize: "20px",
//                 color: "#ccc",
//                 fontFamily: "'Open Sans', sans-serif",
//                 lineHeight: "1.5",
//                 textAlign: "left",
//                 maxWidth: "600px",
//                 margin: "0 auto",
//               }}
//             >
//               A passionate Software Developer crafting delightful web
//               experiences using modern technologies.
//             </motion.p>
//           </div>

//           {/* Right Profile Section */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "30px",
//               flexDirection: isMobile ? "column" : "row", // ✅ Responsive layout
//             }}
//           >
//             {/* Quote */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1.2 }}
//               style={{
                
//                 fontStyle: "italic",
//                 color: "#aaa",
//                 fontSize: "14px",
//                 maxWidth: "150px",
//               }}
//             >
//               "Design is not just what it looks like and feels like. Design is
//               how it works."
//             </motion.div>

//             {/* Glowing + floating Profile Picture */}
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
//               style={{
//                 width: "350px",
//                 height: "350px",
//                 borderRadius: "50%",
//                 padding: "10px",
//                 backgroundColor: "#000",
//                 boxShadow:
//                   "0 0 30px 10px rgba(255,165,0,0.7), 0 0 50px 15px rgba(255,165,0,0.5)",
//                 animation:
//                   "shine 4s ease-in-out infinite, float 6s ease-in-out infinite",
//               }}
//             >
//               <img
//                 src="/Aditya2.png"
//                 alt="Profile"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                 }}
//               />
//             </motion.div>

//             {/* Social Icons with hover animation */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1.4 }}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "25px",
//                 fontSize: "32px",
//                 color: "#FFA500",
//               }}
//             >
//               <motion.a
//                 href="https://github.com/AdityaMishra2003"
//                 whileHover={{ scale: 1.2 }}
//                 style={{ color: "#FFA500" }}
//               >
//                 <FaGithub />
//               </motion.a>
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.2 }}
//                 style={{ color: "#FFA500" }}
//               >
//                 <FaLinkedin />
//               </motion.a>
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.2 }}
//                 style={{ color: "#FFA500" }}
//               >
//                 <FaEnvelope />
//               </motion.a>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes waveMove {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         @keyframes shine {
//           0% { box-shadow: 0 0 30px 10px rgba(255,165,0,0.6); }
//           50% { box-shadow: 0 0 45px 15px rgba(255,165,0,1); }
//           100% { box-shadow: 0 0 30px 10px rgba(255,165,0,0.6); }
//         }

//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//           100% { transform: translateY(0px); }
//         }

//         @keyframes typing {
//           from { width: 0 }
//           to { width: 100% }
//         }

//         @keyframes blink {
//           from, to { border-color: transparent }
//           50% { border-color: #FFA500 }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        backgroundColor: "#000",
        color: "white",
        overflow: "hidden",
        padding: "60px 20px 100px",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      {/* Moving SVG Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{
            height: "100%",
            width: "100%",
            animation: "waveMove 20s linear infinite",
          }}
        >
          <path
            fill="#FFA500"
            fillOpacity="0.12"
            d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,122.7C672,149,768,203,864,208C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Left Text Section */}
          <div style={{ maxWidth: "600px", textAlign: "left" }}>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                color: "#FFA500",
                fontSize: "50px",
                fontWeight: "1000",
                fontFamily: "'Open Sans', sans-serif",
                margin: "0",
              }}
            >
              Hello
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
                margin: "10px 0",
              }}
            >
              I'm <span style={{ color: "#FFA500" }}>Aditya Mishra</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              style={{
                fontSize: "20px",
                color: "#ccc",
                fontFamily: "'Open Sans', sans-serif",
                lineHeight: "1.5",
                textAlign: "left",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              A passionate Software Developer crafting delightful web
              experiences using modern technologies.
            </motion.p>
          </div>

          {/* Right Profile Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              flexDirection: isMobile ? "column" : "row", // ✅ Responsive layout
            }}
          >
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              style={{
                fontStyle: "italic",
                color: "#aaa",
                fontSize: "14px",
                maxWidth: "150px",
              }}
            >
              "Design is not just what it looks like and feels like. Design is
              how it works."
            </motion.div>

            {/* Glowing + floating Profile Picture */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                padding: "10px",
                backgroundColor: "#000",
                boxShadow:
                  "0 0 30px 10px rgba(255,165,0,0.7), 0 0 50px 15px rgba(255,165,0,0.5)",
                animation:
                  "shine 4s ease-in-out infinite, float 6s ease-in-out infinite",
              }}
            >
              <img
                src="/Aditya2.png"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </motion.div>

            {/* Social Icons with hover animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                fontSize: "32px",
                color: "#FFA500",
              }}
            >
              <motion.a
                href="https://github.com/AdityaMishra2003"
                whileHover={{ scale: 1.2 }}
                style={{ color: "#FFA500" }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aditya-mishra-67365722a/"
                whileHover={{ scale: 1.2 }}
                style={{ color: "#FFA500" }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=am9982061@gmail.com&su=Let%27s%20Connect&body=Hi%20Aditya,"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                style={{ color: "#FFA500" }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes shine {
          0% { box-shadow: 0 0 30px 10px rgba(255,165,0,0.6); }
          50% { box-shadow: 0 0 45px 15px rgba(255,165,0,1); }
          100% { box-shadow: 0 0 30px 10px rgba(255,165,0,0.6); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #FFA500 }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
