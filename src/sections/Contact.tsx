// src/screens/Contact.tsx
import React from "react";
import theme from "../theme";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div
      style={{
        color: theme.colors.text,
        minHeight: "100vh",
        width: "100vw", // Fixed from 100vw
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        boxSizing: "border-box", // Prevent padding from pushing content
        overflowX: "hidden", // Optional: ensure horizontal scroll doesn't appear
      }}
    >
      <div
        style={{
          width: "600px",
          backgroundColor: theme.colors.card,
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Contact Us
        </h1>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <FaEnvelope style={{ marginRight: "8px" }} /> gschauhan1991@gmail.com
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FaPhone style={{ marginRight: "8px" }} /> +310-259-1394
        </p>

        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "0.8rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: theme.colors.inputBackground,
              color: theme.colors.text,
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "0.8rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: theme.colors.inputBackground,
              color: theme.colors.text,
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            style={{
              padding: "0.8rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: theme.colors.inputBackground,
              color: theme.colors.text,
              resize: "none",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "0.8rem",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
            }}
          >
            Send Message
          </button>
        </form>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            fontSize: "1.4rem",
          }}
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
