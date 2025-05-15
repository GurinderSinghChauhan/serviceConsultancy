import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/assets/bg1.png",
  "/assets/bg2.png",
  "/assets/bg3.png",
  "/assets/bg4.png",
  "/assets/bg5.png",
];

const fixedPositions = [
  { top: "10%", left: "5%" },
  { top: "30%", left: "70%" },
  { top: "60%", left: "15%" },
  { top: "80%", left: "80%" },
  { top: "40%", left: "45%" },
];

const ParallaxBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = gsap.utils.toArray<HTMLImageElement>(".bg-shape");

    shapes.forEach((shape) => {
      gsap.to(shape, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="parallax-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: -2,
      }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className="bg-shape"
          style={{
            position: "absolute",
            ...fixedPositions[i],
            width: "150px",
            height: "150px",
            opacity: 0.25,
            objectFit: "contain",
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;