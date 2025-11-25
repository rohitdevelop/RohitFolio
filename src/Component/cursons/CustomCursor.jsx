 import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

   const DAMPING_FACTOR = 0.15;  
  const UPDATE_INTERVAL = 16;  

  useEffect(() => {
     const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
     if (!isDesktop) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return; // Safety check

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame;

 
      const updateCursorPosition = () => {
       currentX += (mouseX - currentX) * DAMPING_FACTOR;
      currentY += (mouseY - currentY) * DAMPING_FACTOR;

       cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    };
     const onMouseMove = (e) => {
       const halfWidth = cursor.offsetWidth / 2;
      const halfHeight = cursor.offsetHeight / 2;
      
      mouseX = e.clientX - halfWidth;
      mouseY = e.clientY - halfHeight;

       if (!animationFrame) {
        currentX = mouseX;
        currentY = mouseY;
        updateCursorPosition();
      }
    };

     const animate = () => {
      updateCursorPosition();
      animationFrame = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    animate();

     return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrame);  
    };
  }, [isDesktop]);  
   if (!isDesktop) {
    return null;
  }
 
  return (
    <div
      ref={cursorRef}
      className="w-6 h-6 rounded-full border-2 border-cyan-400 fixed top-0 left-0 pointer-events-none z-50"
     ></div>
  );
};

export default CustomCursor;