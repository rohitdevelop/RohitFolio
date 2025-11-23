// CustomCursor.jsx
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.1; // lower = smoother, higher = faster

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX - cursor.offsetWidth / 2;
      mouseY = e.clientY - cursor.offsetHeight / 2;
    };

    document.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-6 h-6 rounded-full border-2 border-cyan-400 fixed top-0 left-0 pointer-events-none z-50 transform transition-all duration-100"
    ></div>
  );
};

export default CustomCursor;
