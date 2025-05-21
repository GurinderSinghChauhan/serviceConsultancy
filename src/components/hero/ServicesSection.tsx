import { useRef } from "react";
import theme from "../../theme";
import { services } from "../../assets/mockData/mockData";

const ServicesSection = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <div>
      <section
        style={{ padding: "6rem 2rem", textAlign: "center" }}
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            background: "linear-gradient(to right, #7DF9FF, #D096F0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Services
        </h2>
        <p
          style={{
            color: theme.colors.secondary,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          We offer a comprehensive suite of technology services designed to
          empower your business and accelerate your digital journey.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "3rem",
            justifyContent: "center",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: theme.colors.card,
                padding: "1.5rem",
                borderRadius: "8px",
                flex: "1 1 250px",
                maxWidth: "300px",
                border: "2px solid transparent",
                boxShadow: "0 0 10px rgba(254, 252, 252, 0.68)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderImage =
                  "linear-gradient(90deg, #7DF9FF, #D096F0) 1";
                e.currentTarget.style.animation =
                  "gradient-border 3s linear infinite";

                const title = e.currentTarget.querySelector(
                  "h3"
                ) as HTMLElement;
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

                const title = e.currentTarget.querySelector(
                  "h3"
                ) as HTMLElement;
                if (title) {
                  title.style.background = "none";
                  title.style.webkitTextFillColor = theme.colors.primary;
                }
              }}
            >
              <h3 style={{ color: theme.colors.primary }}>{service.title}</h3>
              <p style={{ color: theme.colors.secondary }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
