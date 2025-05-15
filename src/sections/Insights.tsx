// src/screens/Insights.tsx
import React, { useState } from "react";
import theme from "../theme";
import { insightsData } from "../assets/mockData/mockData";
import { motion } from "framer-motion";

const categories = ["Blogs", "Case Studies", "News"];

const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Blogs");

  const filteredInsights =
    activeCategory === "All"
      ? insightsData
      : insightsData.filter((item) =>
          item.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <div
      style={{
        // backgroundColor: theme.colors.background,
        color: theme.colors.text,
        minHeight: "100vh",
        width: "100vw",
        padding: "4rem 2rem",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Insights
        </h1>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderBottom:
                  activeCategory === cat
                    ? `2px solid ${theme.colors.primary}`
                    : "none",
                background: "transparent",
                color: theme.colors.text,
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Section */}
        <div style={{ marginBottom: "3rem" }}>
          {/* <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            Featured Insights
          </h2> */}
        </div>

        {/* Insights Grid */}
        <div
          style={{
            // display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredInsights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: theme.colors.card,
                padding: "1.5rem",
                borderRadius: "8px",
                marginBottom: "2rem",
                border: "1px solid rgba(0, 212, 255, 0.3)", // soft bluish border
                boxShadow: "0 0 10px rgba(0, 212, 255, 0.1)", // subtle glow
                transition: "box-shadow 0.3s ease, transform 0.3s ease",

              }}
            >
              <h3 style={{ color: theme.colors.primary }}>{item.title}</h3>
              <p
                style={{
                  color: theme.colors.secondary,
                  marginTop: "0.75rem",
                  lineHeight: "1.6",
                }}
              >
                {item.description}
              </p>
              <p
                style={{
                  color: theme.colors.text,
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
