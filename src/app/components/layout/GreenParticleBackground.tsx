"use client";

import { useEffect, useRef, useCallback } from "react";

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  size: number;
  opacity: number;
  trailLength: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export const GreenParticleBackground = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<Meteor[]>([]);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const colors = [
    { main: "rgba(74, 222, 128, 0.9)", trail: "rgba(34, 197, 94, 0.5)", glow: "rgba(134, 239, 172, 0.3)" },
    { main: "rgba(255, 255, 255, 0.9)", trail: "rgba(200, 200, 200, 0.5)", glow: "rgba(255, 255, 255, 0.2)" },
    { main: "rgba(147, 197, 253, 0.8)", trail: "rgba(96, 165, 250, 0.4)", glow: "rgba(191, 219, 254, 0.2)" },
    { main: "rgba(252, 211, 77, 0.8)", trail: "rgba(251, 191, 36, 0.4)", glow: "rgba(253, 230, 138, 0.2)" },
  ];

  const createMeteor = useCallback((canvasWidth: number, canvasHeight: number): Meteor => {
    const colorScheme = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * 30 + 15; // 15-45 degree angle
    
    return {
      x: Math.random() * canvasWidth * 1.5 - canvasWidth * 0.25,
      y: Math.random() * canvasHeight * 0.5,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 8 + 4,
      angle: (angle * Math.PI) / 180,
      size: Math.random() * 2.5 + 1.5,
      opacity: Math.random() * 0.5 + 0.5,
      trailLength: Math.random() * 80 + 40,
      color: colorScheme.main,
      life: 0,
      maxLife: Math.random() * 100 + 60,
    };
  }, []);

  const createStar = useCallback((canvasWidth: number, canvasHeight: number): Star => {
    return {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize stars
    const stars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push(createStar(canvas.width, canvas.height));
    }
    starsRef.current = stars;

    // Initialize meteors
    const meteors: Meteor[] = [];
    for (let i = 0; i < 15; i++) {
      meteors.push(createMeteor(canvas.width, canvas.height));
    }
    meteorsRef.current = meteors;

    // Draw star field
    const drawStars = () => {
      starsRef.current.forEach(star => {
        const twinkle = Math.sin(timeRef.current * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.opacity * (0.7 + 0.3 * twinkle);
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        
        // Add glow to larger stars
        if (star.size > 1.5) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.5})`;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    // Draw meteor with trail
    const drawMeteor = (meteor: Meteor) => {
      const { x, y, length, angle, size, opacity, trailLength, color } = meteor;
      
      // Calculate end point
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      
      // Draw trail (gradient from bright to transparent)
      const gradient = ctx.createLinearGradient(x, y, endX, endY);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.3, color.replace("0.9", "0.7"));
      gradient.addColorStop(0.7, color.replace("0.9", "0.2"));
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      
      // Draw trail line
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = size * 3;
      ctx.lineCap = "round";
      ctx.stroke();
      
      // Draw trail glow
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = size * 8;
      ctx.lineCap = "round";
      ctx.globalAlpha = 0.2;
      ctx.stroke();
      ctx.globalAlpha = 1;
      
      // Draw head (bright point)
      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      const headGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
      headGlow.addColorStop(0, "#FFFFFF");
      headGlow.addColorStop(0.3, color);
      headGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = headGlow;
      ctx.fill();
      
      // Additional outer glow
      ctx.beginPath();
      ctx.arc(x, y, size * 4, 0, Math.PI * 2);
      const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
      outerGlow.addColorStop(0, color.replace("0.9", "0.3"));
      outerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = outerGlow;
      ctx.globalAlpha = 0.5;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    // Create spark particles from meteor head
    const sparks: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }> = [];

    const createSparks = (x: number, y: number, color: string) => {
      for (let i = 0; i < 3; i++) {
        sparks.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 0,
          maxLife: Math.random() * 20 + 10,
          size: Math.random() * 1.5 + 0.5,
          color,
        });
      }
    };

    // Animation loop
    const animate = () => {
      timeRef.current += 1;
      
      // Clear with slight trail effect for smoother animation
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars first (background layer)
      drawStars();

      // Update and draw meteors
      meteorsRef.current.forEach((meteor, index) => {
        meteor.life++;
        
        // Move meteor
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        
        // Fade out as it ages
        meteor.opacity = Math.max(0, 1 - meteor.life / meteor.maxLife);
        
        // Create sparks occasionally
        if (Math.random() < 0.3 && meteor.opacity > 0.3) {
          createSparks(meteor.x, meteor.y, meteor.color);
        }
        
        drawMeteor(meteor);
        
        // Reset meteor when it goes off screen or fades out
        if (
          meteor.y > canvas.height + 100 ||
          meteor.x > canvas.width + 100 ||
          meteor.x < -100 ||
          meteor.life >= meteor.maxLife
        ) {
          meteorsRef.current[index] = createMeteor(canvas.width, canvas.height);
        }
      });

      // Add new meteors randomly
      if (Math.random() < 0.03 && meteorsRef.current.length < 25) {
        meteorsRef.current.push(createMeteor(canvas.width, canvas.height));
      }

      // Update and draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life++;
        
        const alpha = 1 - spark.life / spark.maxLife;
        
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fillStyle = spark.color.replace("0.9", String(alpha));
        ctx.fill();
        
        if (spark.life >= spark.maxLife) {
          sparks.splice(i, 1);
        }
      }

      // Remove excess meteors
      if (meteorsRef.current.length > 25) {
        meteorsRef.current = meteorsRef.current.slice(-25);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      starsRef.current = Array.from({ length: 200 }, () => 
        createStar(canvas.width, canvas.height)
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [createMeteor, createStar]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};