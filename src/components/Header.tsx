import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import theme from "../theme";
import {
  aboutData,
  industriesData,
  insightsData,
  services,
} from "../assets/mockData/mockData";
import brainlogo from "../assets/brain-logo.jpeg";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Header: React.FC = () => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);
  const [selected, setSelected] = useState(aboutData[0]);
  const [selectedInsight, setSelectedInsight] = useState(insightsData?.[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.85)",
        color: theme.colors.background,
      }}
      className="header-with-gradient-border"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <img
              src={brainlogo}
              alt="Logo"
              className="header-logo"
              style={{
                borderRadius: "50%",
                width: 40,
                height: 40,
                boxShadow: `0 0 8px ${theme.colors.primary}`,
              }}
            />
            <span
              style={{
                color: theme.colors.primary,
                fontWeight: "bold",
                fontFamily: "monospace",
                textShadow: `0 0 8px ${theme.colors.primary}`,
                fontSize: "1.2rem",
              }}
            >
              The Software Consulting
            </span>
          </div>
        </Link>

        {/* Hamburger Icon */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", cursor: "pointer" }}
        >
          {menuOpen ? (
            <FiX size={24} color={theme.colors.text} />
          ) : (
            <FiMenu size={24} color={theme.colors.text} />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links" style={{ display: "flex", gap: "2rem" }}>
          {["Industries", "Services", "Insights", "About"].map((label) => (
            <span
              key={label}
              onMouseEnter={() => setHoveredNav(label.toLowerCase())}
              onClick={() => {
                navigate(`/${label.toLowerCase()}`);
                setHoveredNav(null);
              }}
              style={{
                color: theme.colors.text,
                position: "relative",
                cursor: "pointer",
              }}
              className="nav-link"
            >
              {label}
              <span className="underline" />
            </span>
          ))}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 2rem",
              backgroundColor: theme.colors.background,
            }}
          >
            {["Industries", "Services", "Insights", "About"].map((label) => (
              <span
                key={label}
                onClick={() => {
                  setMenuOpen(false);
                  navigate(`/${label.toLowerCase()}`);
                }}
                style={{
                  color: theme.colors.text,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {label}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Dropdowns */}
      {hoveredNav === "services" && (
        <div
          onMouseLeave={() => setHoveredNav(null)}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          {/* Centered Modal Box */}
          <div
            style={{
              display: "flex",
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              border: `1px solid ${theme.colors.secondary}`,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              padding: "2rem",
              width: "100%",
              maxWidth: "1200px",
              maxHeight: "70vh",
              overflowY: "auto",
            }}
          >
            {/* Left Column */}
            <div
              style={{
                width: "250px",
                paddingRight: "2rem",
                borderRight: "1px solid #ddd",
              }}
            >
              <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {services.map((service, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: "0.5rem 0.5rem",
                      color: theme.colors.primary,
                      borderBottom: "1px solid #eee",
                      cursor: "pointer",
                      transition: "background 0.3s",
                      backgroundColor:
                        selectedService?.title === service.title
                          ? theme.colors.secondary
                          : "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        theme.colors.secondary)
                    }
                    onMouseLeave={(e) => {
                      if (selectedService?.title !== service.title) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                    onClick={() => {
                      setSelectedService(service);
                    }}
                  >
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Column */}
            <div style={{ flex: 1, padding: "0 2rem" }}>
              <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                Featured
              </h4>
              <div
                style={{
                  // display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                {/* Middle Column */}
                <div style={{ flex: 1, padding: "0 2rem" }}>
                  <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                    Details
                  </h4>
                  <div>
                    <h5 style={{ color: theme.colors.primary }}>
                      {selectedService.title}
                    </h5>
                    {selectedService.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          color: theme.colors.text,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              style={{
                width: "250px",
                paddingLeft: "2rem",
                borderLeft: "1px solid #ddd",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h5 style={{ color: theme.colors.primary }}>
                  Explore All Services
                </h5>
                <p style={{ fontSize: "0.9rem", color: theme.colors.text }}>
                  Discover how we deliver scalable, impactful solutions across
                  industries.
                </p>
              </div>
              <button
                onClick={() => {
                  setHoveredNav(null);
                  navigate("/services");
                }}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      )}
      {hoveredNav === "industries" && (
        <div
          onMouseLeave={() => setHoveredNav(null)}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              border: `1px solid ${theme.colors.secondary}`,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              padding: "2rem",
              width: "100%",
              maxWidth: "1200px",
              maxHeight: "70vh",
              overflowY: "auto",
            }}
          >
            {/* Left Column */}
            <div
              style={{
                width: "250px",
                paddingRight: "2rem",
                borderRight: "1px solid #ddd",
              }}
            >
              <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                Industries
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {industriesData.map((industry, idx) => (
                  <li
                    key={idx}
                    onClick={() => setSelectedIndustry(industry)}
                    style={{
                      padding: "0.5rem 0.5rem",
                      color: theme.colors.primary,
                      borderBottom: "1px solid #eee",
                      cursor: "pointer",
                      backgroundColor:
                        selectedIndustry?.name === industry.name
                          ? theme.colors.secondary
                          : "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        theme.colors.secondary)
                    }
                    onMouseLeave={(e) => {
                      if (selectedIndustry?.name !== industry.name) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {industry.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Column */}
            <div style={{ flex: 1, padding: "0 2rem" }}>
              <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                Overview
              </h4>
              {selectedIndustry && (
                <div>
                  <h5 style={{ color: theme.colors.primary }}>
                    {selectedIndustry.name}
                  </h5>
                  <p>{selectedIndustry.description}</p>
                  <ul>
                    {selectedIndustry.capabilities.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          color: theme.colors.text,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div
              style={{
                width: "250px",
                paddingLeft: "2rem",
                borderLeft: "1px solid #ddd",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h5 style={{ color: theme.colors.primary }}>
                  Explore All Industries
                </h5>
                <p style={{ fontSize: "0.9rem", color: theme.colors.text }}>
                  Learn how we’re transforming industries with digital
                  innovation.
                </p>
              </div>
              <button
                onClick={() => {
                  setHoveredNav(null);
                  navigate("/industries");
                }}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                View All Industries
              </button>
            </div>
          </div>
        </div>
      )}
      {hoveredNav === "about" && (
        <div
          onMouseLeave={() => setHoveredNav(null)}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              border: `1px solid ${theme.colors.secondary}`,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              padding: "2rem",
              width: "100%",
              maxWidth: "1200px",
              maxHeight: "70vh",
              overflowY: "auto",
            }}
          >
            {/* Left Column: Sections */}
            <div
              style={{
                width: "250px",
                paddingRight: "2rem",
                borderRight: "1px solid #ddd",
              }}
            >
              <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                About Us
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {aboutData.map((item) => (
                  <li
                    key={item.title}
                    onClick={() => setSelected(item)}
                    style={{
                      padding: "0.5rem 0.5rem",
                      color: theme.colors.primary,
                      borderBottom: "1px solid #eee",
                      cursor: "pointer",
                      backgroundColor:
                        selected.title === item.title
                          ? theme.colors.secondary
                          : "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        theme.colors.secondary)
                    }
                    onMouseLeave={(e) => {
                      if (selected.title !== item.title) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Column: Description */}
            <div style={{ flex: 1, padding: "0 2rem" }}>
              <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                Details
              </h4>
              <div>
                <h5 style={{ color: theme.colors.primary }}>
                  {selected.title}
                </h5>
                <p style={{ marginTop: "0.5rem", color: theme.colors.text }}>
                  {selected.description}
                </p>
              </div>
            </div>

            {/* Right Column: Links */}
            <div
              style={{
                width: "250px",
                paddingLeft: "2rem",
                borderLeft: "1px solid #ddd",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h5 style={{ color: theme.colors.primary }}>Explore More</h5>
                <ul
                  style={{
                    marginTop: "1rem",
                    paddingLeft: 0,
                    listStyle: "none",
                  }}
                >
                  {selected.links.map((link) => (
                    <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                      <a
                        // href={link.href}
                        style={{
                          color: theme.colors.primary,
                          textDecoration: "none",
                          cursor: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.textDecoration = "underline")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.textDecoration = "none")
                        }
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setHoveredNav(null);
                  navigate("/about");
                }}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                View About Page
              </button>
            </div>
          </div>
        </div>
      )}
      {hoveredNav === "insights" && (
        <div
          onMouseLeave={() => setHoveredNav(null)}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              border: `1px solid ${theme.colors.secondary}`,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              padding: "2rem",
              width: "100%",
              maxWidth: "1200px",
              maxHeight: "70vh",
              overflowY: "auto",
            }}
          >
            {/* Left Column */}
            <div
              style={{
                width: "250px",
                paddingRight: "2rem",
                borderRight: "1px solid #ddd",
              }}
            >
              <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                Insights
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  {
                    title: "Blogs",
                    description:
                      "Explore our latest insights, trends, and thought leadership articles on technology and digital transformation.",
                    content: `Here is a full-length blog post discussing modern approaches to digital transformation, including the role of AI, cloud computing, and design thinking...`,
                  },
                  {
                    title: "Case Studies",
                    description:
                      "Discover how we have helped organizations across various industries achieve their digital transformation goals.",
                    content: `In this case study, we dive deep into how we helped a global bank transition to microservices architecture, resulting in a 40% faster deployment cycle...`,
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => setSelectedInsight(item)}
                    style={{
                      padding: "0.5rem",
                      cursor: "pointer",
                      color: theme.colors.primary,
                      backgroundColor:
                        selectedInsight.title === item.title
                          ? theme.colors.secondary
                          : "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        theme.colors.secondary)
                    }
                    onMouseLeave={(e) => {
                      if (selectedInsight.title !== item.title) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Column */}
            <div style={{ flex: 1, padding: "0 2rem" }}>
              <h4 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                Details
              </h4>
              <div>
                <h5 style={{ color: theme.colors.primary }}>
                  {selectedInsight.title}
                </h5>
                <p style={{ fontSize: "0.95rem" }}>
                  {selectedInsight.description}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div
              style={{
                width: "250px",
                paddingLeft: "2rem",
                borderLeft: "1px solid #ddd",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h5 style={{ color: theme.colors.primary }}>
                  Explore All Insights
                </h5>
                <p style={{ fontSize: "0.9rem", color: theme.colors.text }}>
                  Stay updated with thought leadership, case studies, and
                  trends.
                </p>
              </div>
              <button
                onClick={() => {
                  setHoveredNav(null);
                  navigate("/insights");
                }}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                View All Insights
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Hover underline animation */}
      <style>{`
        .nav-link {
          padding-bottom: 4px;
        }
        .nav-link .underline {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background-color: ${theme.colors.primary};
          transition: width 0.3s ease;
        }
        .nav-link:hover .underline {
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-icon {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
