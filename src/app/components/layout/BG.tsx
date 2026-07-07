"use client"

import { useEffect, useRef } from 'react';

const BG = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    // Detect dark mode
    const isDarkMode = () => document.documentElement.classList.contains('dark');

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      // Smooth follow
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      // Clear canvas (transparent - no background)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dark = isDarkMode();

      // Primary blue glow - follows mouse
      const blueGradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 400);
      blueGradient.addColorStop(0, dark ? 'rgba(26, 63, 168, 0.2)' : 'rgba(26, 63, 168, 0.15)');
      blueGradient.addColorStop(0.5, dark ? 'rgba(26, 63, 168, 0.08)' : 'rgba(26, 63, 168, 0.05)');
      blueGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = blueGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Accent red glow - opposite side of mouse
      const redX = canvas.width - currentX;
      const redY = canvas.height - currentY;
      
      const redGradient = ctx.createRadialGradient(redX, redY, 0, redX, redY, 350);
      redGradient.addColorStop(0, dark ? 'rgba(224, 32, 32, 0.15)' : 'rgba(224, 32, 32, 0.1)');
      redGradient.addColorStop(0.5, dark ? 'rgba(224, 32, 32, 0.05)' : 'rgba(224, 32, 32, 0.03)');
      redGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = redGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default BG;