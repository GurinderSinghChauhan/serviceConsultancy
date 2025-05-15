import React, { useRef, useEffect } from "react";
import theme from "../theme";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../assets/mockData/mockData";
import { industriesData } from "./Industries";
gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      sectionRefs.current.forEach((section) => {
        if (!section) return;

        const elements = section.querySelectorAll(
          "h2, h3, p, span, li, button"
        );

        gsap.from(elements, {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      });
    }, 100); // Delay to allow DOM paint

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        color: theme.colors.text,
        minHeight: "100vh",
        // width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 2rem",
        }}
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            color: theme.colors.primary,
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              color: theme.colors.primary,
              fontFamily: "Satoshi",
            }}
          >
            The Software Consulting
          </h1>
          <h2 style={{ fontWeight: "bold", fontFamily: "Satoshi" }}>
            Your Ideas, Our Expertise
          </h2>

          {/* New animated message */}
          <div
            className="animated-message"
            style={{
              marginTop: "2rem",
              fontSize: "1rem",
              lineHeight: 1.5,
            }}
          >
            <p>
              At "The Software Consulting", we empower businesses to unlock the
              full potential of technology. Whether you're a startup aiming to
              disrupt your industry or an enterprise seeking to modernize
              operations, our expert team delivers customized software solutions
              that drive results.
            </p>

            <h3 style={{ marginTop: "2rem", fontWeight: "bold" }}>
              Why Choose Us?
            </h3>
            <ul
              style={{ listStyle: "none", paddingLeft: 0, marginTop: "0.5rem" }}
            >
              <li>✔️ Deep Technical Expertise</li>
              <li>✔️ Client-First Approach</li>
              <li>✔️ End-to-End Services</li>
              <li>✔️ Scalable and Future-Proof Solutions</li>
            </ul>

            <p style={{ marginTop: "2rem", fontWeight: "500" }}>
              We don’t just build software.
              <br />
              We build partnerships to take your vision to reality - faster,
              smarter and better.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      {/* <section
        style={{ padding: "4rem 2rem", textAlign: "center" }}
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <h2 style={{ fontSize: "1.8rem", color: theme.colors.primary }}>
          Trusted By
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {[
            <FaGoogle size={40} />,
            <FaAmazon size={40} />,
            <FaFacebook size={40} />,
            <FaSalesforce size={40} />,
            <FaTiktok size={40} />,
            <FaYoutube size={40} />,
            <FaInstagram size={40} />,
            <FaPaypal size={40} />,
            <FaUber size={40} />,
            <FaReddit size={40} />,
            <FaAirbnb size={40} />,
          ].map((brand, i) => (
            <span key={i} style={{ color: theme.colors.secondary }}>
              {brand}
            </span>
          ))}
        </div>
      </section> */}

      {/* What We Offer */}
      <section
        style={{ padding: "4rem 2rem" }}
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Our Services</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: theme.colors.card,
                padding: "1.5rem",
                borderRadius: "8px",
                flex: "1 1 200px",
                border: "1px solid rgb(252, 250, 250)", // soft bluish border
                boxShadow: "0 0 10px rgba(254, 252, 252, 0.68)", // subtle glow
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* {service.icon} */}
              {/* <br /> */}
              <h3 style={{ color: theme.colors.primary }}>{service.title}</h3>
              <p style={{ color: theme.colors.secondary }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{ padding: "4rem 2rem" }}
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Industries</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {industriesData.map((industry, i) => (
            <div
              key={i}
              style={{
                backgroundColor: theme.colors.card,
                padding: "1.5rem",
                borderRadius: "8px",
                flex: "1 1 200px",
                border: "1px solid rgb(252, 250, 250)", // soft bluish border
                boxShadow: "0 0 10px rgba(254, 252, 252, 0.68)", // subtle glow
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* {service.icon} */}
              {/* <br /> */}
              <h3 style={{ color: theme.colors.primary }}>{industry.title}</h3>
              <p style={{ color: theme.colors.secondary }}>
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      {/* <section
        style={{ padding: "4rem 2rem" }}
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Featured Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              style={{
                backgroundColor: theme.colors.card,
                padding: "1.5rem",
                borderRadius: "8px",
                border: "1px solid rgba(0, 212, 255, 0.3)", // soft bluish border
                boxShadow: "0 0 10px rgba(0, 212, 255, 0.1)", // subtle glow
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              <h3 style={{ color: theme.colors.primary }}>Project {id}</h3>
              <p style={{ color: theme.colors.secondary }}>
                Summary of project {id}...
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Why Choose Us */}
      {/* <section
        style={{ padding: "4rem 2rem" }}
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Why Choose Us</h2>
        <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
          {[
            "🚀 Fast Delivery",
            "🧠 Senior Engineers",
            "💡 Idea to Execution",
            "🎨 Design First Approach",
          ].map((point, i) => (
            <li
              key={i}
              style={{ marginBottom: "0.5rem", color: theme.colors.secondary }}
            >
              {point}
            </li>
          ))}
        </ul>
      </section> */}

      {/* Tech Stack */}
      {/* <section
        style={{ padding: "4rem 2rem" }}
        ref={(el) => {
          sectionRefs.current[5] = el;
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Tech Stack</h2>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginTop: "1.5rem",
          }}
        >
          {[
            { name: "React", icon: <FaReact size={25} /> },
            { name: "Node.js", icon: <FaNodeJs size={25} /> },
            { name: "Figma", icon: <FaFigma size={25} /> },
            { name: "AWS", icon: <FaAws size={25} /> },
            { name: "Firebase", icon: <FaFire size={25} /> },
            { name: "MongoDB", icon: <FaDatabase size={25} /> },
          ].map((tool, i) => (
            <span
              key={i}
              style={{
                color: theme.colors.secondary,
                backgroundColor: theme.colors.card,
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid rgba(0, 212, 255, 0.3)", // soft bluish border
                boxShadow: "0 0 10px rgba(0, 212, 255, 0.1)", // subtle glow
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              {tool.name} {tool.icon}
            </span>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section
        style={{ padding: "4rem 2rem", textAlign: "center" }}
        ref={(el) => {
          sectionRefs.current[6] = el;
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Let’s Build Something Great
        </h2>
        <button
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Hero;
