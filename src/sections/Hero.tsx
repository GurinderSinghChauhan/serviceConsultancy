import React, { useRef } from "react";
import theme from "../theme";
import IndustriesSection from "../components/hero/IndustriesSection";
import ServicesSection from "../components/hero/ServicesSection";
import HeroSection from "../components/hero/HeroBanner";
import CTASection from "../components/hero/CTASection";

const Hero: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "relative",
        color: theme.colors.text,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <HeroSection
        onScrollToServices={() => {
          if (servicesRef) {
            scrollToSection(servicesRef);
          }
        }}
        onScrollToIndustries={() =>
          industriesRef && scrollToSection(industriesRef)
        }
      />

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <div ref={industriesRef}>
        <IndustriesSection />
      </div>
     <CTASection/>
    </div>
  );
};

export default Hero;
