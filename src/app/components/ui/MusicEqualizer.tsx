"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const MusicEqualizer = () => {
  // Pre-calculate all bar data with useMemo to prevent recalculation on re-renders
  const bars = useMemo(() => {
    const heightPattern = [
      12, 20, 8, 20, 6, 16, 24, 10, 14, 18, 8, 22, 6, 16, 12, 20, 4, 14, 18, 8,
      24, 10, 16, 6, 20, 12, 14, 22, 8, 16,
    ];

    return Array.from({ length: 30 }, (_, i) => ({
      height: heightPattern[i % heightPattern.length],
      isEven: i % 2 === 0,
      duration: 0.6 + (i % 5) * 0.1,
    }));
  }, []);

  return (
    <div className="w-full flex justify-center my-5">
      <div className="relative h-8 w-80 flex items-center justify-center gap-1 overflow-hidden">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="w-1.5 flex items-center"
            style={{
              background: bar.isEven ? "var(--primary)" : "var(--accent)",
            }}
            animate={{
              height: [4, bar.height, 4],
            }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicEqualizer;
