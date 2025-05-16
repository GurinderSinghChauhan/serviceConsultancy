// src/screens/Services.tsx
import React, { useEffect, useRef } from "react";
import theme from "../theme";
import { services } from "../assets/mockData/mockData";
import { FaProjectDiagram, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";

const Services: React.FC = () => {
  const serviceRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      serviceRefs.current,
      { opacity: 0, y: 40, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      style={{
        // backgroundColor: theme.colors.background,
        color: theme.colors.text,
        minHeight: "100vh",
        minWidth: "100vw",
        padding: "2rem",
        paddingTop: "4rem",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        Our Consulting Services
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            // className="service-card"
            key={index}
            // whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              // border: `1px solid ${theme.colors.primary}`,
              // borderRadius: "12px",
              padding: "1.5rem",
              background: "#111",
              // boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
              // transition: "all 0.3s ease",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid rgba(255, 255, 255, 0.8)", // soft bluish border
              boxShadow: "0 0 10px rgba(196, 203, 204, 0.8)", // subtle glow
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
            ref={(el) => {
              if (el) {
                serviceRefs.current[index] = el;
              }
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                marginBottom: "1rem",
                color: theme.colors.primary,
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <FaTools /> {service.title}
            </h2>

            <ul
              style={{
                padding: 0,
                margin: 0,
                listStyle: "none",
                opacity: 0.9,
              }}
            >
              {service.items.map((item, i) => (
                <li
                  key={i}
                  style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}
                >
                  • {item}
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.85rem",
                opacity: 0.6,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>
                <FaProjectDiagram style={{ marginRight: 4 }} />
                {service.projects || Math.floor(Math.random() * 100)} projects
              </p>
              <p>{service.years || Math.floor(Math.random() * 10) + 1} yrs</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                color: "white",
                backgroundColor: theme.colors.card,
                border: `1px solid ${theme.colors.cardBorder}`,
                borderRadius: "6px",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
              onClick={() => alert("Open case study modal or redirect")}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
