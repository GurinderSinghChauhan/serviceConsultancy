import React from "react";
import theme from "../theme";
import { motion } from "framer-motion";
import { portfolioData } from "../assets/mockData/mockData";

const Portfolio: React.FC = () => {
  return (
    <div
      style={{
        color: theme.colors.text,
        minHeight: "100vh",
        width: "100vw",
        padding: "4rem 2rem",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* <ParallaxBackground/> */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Portfolio
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {portfolioData.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  backgroundColor: theme.colors.card,
                  // border: `1px solid ${theme.colors.cardBorder}`,
                  padding: "1.5rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(251, 254, 255, 0.71)", // soft bluish border
                  boxShadow: "0 0 10px rgba(248, 249, 249, 0.69)", // subtle glow
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
              >
                <h3
                  style={{
                    color: theme.colors.primary,
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: theme.colors.secondary }}>
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: theme.colors.cardBorder,
                        color: theme.colors.text,
                        padding: "0.3rem 0.6rem",
                        borderRadius: "4px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
