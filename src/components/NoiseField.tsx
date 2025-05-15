import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PARTICLE_COUNT = 75;
const MIN_SIZE = 2;
const MAX_SIZE = 5;

const NoiseField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fragment = document.createDocumentFragment();
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const el = document.createElement("div");
      el.className = "tech-particle";
      const size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
      el.style.cssText = `
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        width: ${size}px;
        height: ${size}px;
      `;
      fragment.appendChild(el);
      particles.push(el);
    }

    container.appendChild(fragment);

    animationsRef.current = particles.map((p) =>
      gsap.to(p, {
        duration: 1 + Math.random() * 2,
        x: Math.random() * 200 - 50,
        y: Math.random() * 300 - 50,
        repeat: -1,
        repeatDelay: Math.random() * 2,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      })
    );

    return () => {
      // Cleanup animations
      animationsRef.current.forEach((anim) => anim.kill());
      animationsRef.current = [];

      // Remove particles
      particles.forEach((p) => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="tech-particles-container" />;
};

export default NoiseField;