"use client";

import { useState, useEffect } from "react";

const MouseGradient = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Primary glow */}
      <div
        className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 blur-[120px]"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle at center, var(--primary) 0%, transparent 70%)`,
          opacity: 0.12,
        }}
      />
      
      {/* Accent glow - slightly offset */}
      <div
        className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 blur-[80px]"
        style={{
          left: position.x + 30,
          top: position.y + 20,
          background: `radial-gradient(circle at center, var(--accent) 0%, transparent 70%)`,
          opacity: 0.1,
        }}
      />
      
      {/* Core hotspot */}
      <div
        className="absolute w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 blur-[40px]"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle at center, var(--primary) 0%, var(--accent) 50%, transparent 100%)`,
          opacity: 0.15,
        }}
      />
    </div>
  );
};

export default MouseGradient;