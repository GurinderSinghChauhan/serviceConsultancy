// src/screens/About.tsx
import React from "react";
import theme from "../theme";

const About: React.FC = () => (
  <div
    style={{
      // backgroundColor: theme.colors.background,
      color: theme.colors.text,
      // minHeight: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* About Us Section */}
    <section
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
      }}
    >
      <h1>About Us</h1>
      <p>
        We are a team of developers passionate about building great products.
      </p>
    </section>

    {/* Founding Story Timeline */}
    {/* <section style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Our Journey</h2>
      <ul
        style={{
          maxWidth: "600px",
          margin: "2rem auto",
          padding: 0,
          listStyle: "none",
        }}
      >
        <li>
          <strong>2019:</strong> Founded with the goal of modernizing business
          software.
        </li>
        <li>
          <strong>2020:</strong> Completed 10+ successful client projects.
        </li>
        <li>
          <strong>2021:</strong> Expanded into mobile development and cloud
          solutions.
        </li>
        <li>
          <strong>2023:</strong> Trusted by clients in 5+ countries.
        </li>
      </ul>
    </section> */}

    {/* Meet the Team */}
    {/* <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Meet the Team</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {[
          { name: "Rishu Sharma", role: "Founder & Lead Developer" },
          { name: "Sneha Sharma", role: "Project Manager" },
          { name: "Karan Verma", role: "UI/UX Designer" },
        ].map((member, idx) => (
          <div
            key={idx}
            style={{
              textAlign: "center",
              borderRadius: "50%",
              width: "150px",
              padding: "1rem",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: theme.colors.primary,
                margin: "0 auto 1rem",
              }}
            ></div>
            <strong>{member.name}</strong>
            <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section> */}

    {/* Core Values Section */}
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Our Core Values</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {[
          { icon: "💡", title: "Innovation" },
          { icon: "🤝", title: "Trust" },
          { icon: "🎯", title: "Quality" },
        ].map((value, idx) => (
          <div
            key={idx}
            style={{
              width: "200px",
              padding: "1rem",
              border: `1px solid ${theme.colors.primary}`,
              borderRadius: "12px",
            }}
          >
            <div style={{ fontSize: "2rem" }}>{value.icon}</div>
            <h4>{value.title}</h4>
          </div>
        ))}
      </div>
    </section>

    {/* Achievements & Stats */}
    {/* <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Our Achievements</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {[
          { stat: "5+", label: "Years of Experience" },
          { stat: "50+", label: "Projects Delivered" },
          { stat: "20+", label: "Happy Clients" },
        ].map((item, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "2rem", color: theme.colors.primary }}>
              {item.stat}
            </h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section> */}
  </div>
);

export default About;
