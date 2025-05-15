// src/components/MatrixStars.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MatrixStars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < 120; i++) {
      const el = document.createElement("div");
      el.className = "matrix-star";
      el.style.left = `${Math.random() * 100}vw`;
      el.style.top = `${100 + Math.random() * 100}vh`;
      el.style.width = "1px";
      el.style.height = `${10 + Math.random() * 30}px`;
      el.style.opacity = `${0.3 + Math.random() * 0.7}`;
      containerRef.current?.appendChild(el);
      stars.push(el);
    }

    stars.forEach((star) => {
      gsap.to(star, {
        y: "-120vh",
        duration: 6 + Math.random() * 4,
        ease: "linear",
        repeat: -1,
        delay: Math.random() * 4,
      });
    });
  }, []);

  return <div ref={containerRef} className="matrix-stars-container" />;
};

export default MatrixStars;