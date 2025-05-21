import theme from "../../theme";

const HeroSection = ({
  onScrollToServices,
  onScrollToIndustries,
}: {
  onScrollToServices: () => void;
  onScrollToIndustries: () => void;
}) => {
  return (
    <section
      style={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 2rem",
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
            // fontFamily: "Satoshi",
            fontSize: "3rem",
            background: "linear-gradient(270deg, #7DF9FF, #D096F0, #7DF9FF)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientFlowLR 6s ease-in-out infinite",
          }}
        >
          The Software Consulting
        </h1>
        <h2 style={{ fontWeight: "bold", fontFamily: "Satoshi" }}>
          Your Ideas, Our Expertise
        </h2>

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
          <button
            style={{
              padding: "0.75rem 1.5rem",
              background: "linear-gradient(270deg, #7DF9FF, #D096F0, #7DF9FF)",
              backgroundSize: "600% 600%",
              color: "#121212",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              animation: "gradientFlow 8s ease infinite",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onClick={onScrollToServices}
          >
            Explore our Services
          </button>
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
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Explore our Services */}

          {/* Industries We Serve */}
          <button
            style={{
              padding: "0.75rem 1.5rem",
              background: "linear-gradient(270deg, #7DF9FF, #D096F0, #7DF9FF)",
              backgroundSize: "600% 600%",
              color: "#121212",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              animation: "gradientFlow 8s ease infinite",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onClick={onScrollToIndustries}
          >
            Industries we Serve
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
