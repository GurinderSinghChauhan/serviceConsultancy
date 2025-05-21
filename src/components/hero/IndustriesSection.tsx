import { useRef } from "react";
import { industriesData } from "../../sections/Industries";
import theme from "../../theme";

const IndustriesSection = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <section
      style={{ padding: "6rem 2rem" }}
      ref={(el) => {
        sectionRefs.current[2] = el;
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(90deg, #7DF9FF, #D096F0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}
      >
        Industries We Serve
      </h2>
      <p
        style={{
          textAlign: "center",
          color: theme.colors.secondary,
          maxWidth: "800px",
          margin: "0 auto 3rem auto",
        }}
      >
        Discover how we help diverse industries drive digital transformation
        through tailored solutions and innovative technologies.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {industriesData.map((industry, i) => (
          <div
            key={i}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderImage =
                "linear-gradient(90deg, #7DF9FF, #D096F0) 1";
              e.currentTarget.style.animation =
                "gradient-border 3s linear infinite";

              const title = e.currentTarget.querySelector("h3") as HTMLElement;
              if (title) {
                title.style.background =
                  "linear-gradient(90deg, #7DF9FF, #D096F0)";
                title.style.webkitBackgroundClip = "text";
                title.style.webkitTextFillColor = "transparent";
                title.style.transition = "all 0.3s ease";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderImage = "none";
              e.currentTarget.style.animation = "none";

              const title = e.currentTarget.querySelector("h3") as HTMLElement;
              if (title) {
                title.style.background = "none";
                title.style.webkitTextFillColor = theme.colors.primary;
              }
            }}
            style={{
              backgroundColor: theme.colors.card,
              padding: "1.5rem",
              borderRadius: "12px",
              flex: "1 1 250px",
              maxWidth: "300px",
              border: "1px solid rgb(252, 250, 250)",
              boxShadow: "0 0 10px rgba(254, 252, 252, 0.68)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              cursor: "default",
            }}
          >
            <h3 style={{ color: theme.colors.primary }}>{industry.title}</h3>
            <p style={{ color: theme.colors.secondary }}>
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
