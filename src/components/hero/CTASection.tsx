import theme from "../../theme";

const CTASection = () => {
  return (
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #7DF9FF, #D096F0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1.5rem",
        }}
      >
        Let’s Build Something Great
      </h2>
      <button
        onClick={() => (window.location.href = "/contact")}
        style={{
          padding: "0.75rem 1.5rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #7DF9FF, #D096F0)",
          color: theme.colors.background,
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 20px #7DF9FF";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Contact Us
      </button>
    </section>
  );
};

export default CTASection;