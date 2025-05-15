import { useEffect } from "react";

const CursorFollower = () => {
  useEffect(() => {
    const follower = document.getElementById("cursor-follower");
    const moveCursor = (e: MouseEvent) => {
      if (follower) {
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div id="cursor-follower" />;
};

export default CursorFollower;
