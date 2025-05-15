// src/App.tsx
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import CursorFollower from "./components/CursorFollower";
import Industries from "./sections/Industries";
import NoiseField from "./components/NoiseField";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "./components/ScrollToTop";
import Insights from "./sections/Insights";
import bgImage from "./assets/bg-image.jpeg";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  return (
    <div style={{}} className="app-container">
      <Router>
        <CursorFollower />
        <NoiseField />
        <img
          src={bgImage}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none",
            opacity: 0.1,
            objectFit: "cover", // ensures the image scales well
          }}
        />
        <ScrollToTop />
        <Header />
        <section style={{ paddingTop: "2rem" }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
