"use client";

import { useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

interface OrbitingIconsProps {
  icons: string[];
  radius?: number;
  speed?: number;
  reverse?: boolean;
}

const OrbitingIcons = ({
  icons,
  radius = 280,
  speed = 60,
  reverse = false,
}: OrbitingIconsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const iconPositions = useMemo(() => {
    return icons.map((_, i) => {
      const angle = (i / icons.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { x, y, angle };
    });
  }, [icons, radius]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          mouseX.set(e.clientX - rect.left - rect.width / 2);
          mouseY.set(e.clientY - rect.top - rect.height / 2);
        }
      }}
    >
      <motion.div
        className="relative"
        style={{ x: springX, y: springY }}
        animate={{ rotate: reverse ? 360 : -360 }}
        transition={{
          rotate: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {iconPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: pos.x,
              top: pos.y,
              width: 40,
              height: 40,
              marginLeft: -20,
              marginTop: -20,
            }}
            whileHover={{
              scale: 2.2,
              filter: "drop-shadow(0 0 16px rgba(255,255,255,0.6)) brightness(1.2)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <Image
              src={icons[i]}
              alt="Tech icon"
              width={40}
              height={40}
              className="w-full h-full object-contain opacity-30 hover:opacity-100 transition-all duration-500"
              style={{
                filter: "grayscale(100%) brightness(0.8)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OrbitingIcons;