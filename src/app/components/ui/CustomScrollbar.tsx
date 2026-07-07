"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode } from "react-icons/fi";

const CustomScrollbar = () => {
  const [progress, setProgress] = useState(0);
  const [flames, setFlames] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const flameId = useRef(0);

  useEffect(() => {
    const hideScrollbar = document.createElement("style");
    hideScrollbar.id = "hide-native-scrollbar";
    hideScrollbar.textContent = `
      html {
        scrollbar-width: none !important;
      }
      html::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
        display: none !important;
      }
    `;
    document.head.appendChild(hideScrollbar);

    const handleScroll = () => {
      if (isDragging.current) return;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = (scrollTop / docHeight) * 100;
      setProgress(newProgress);

      if (Math.random() > 0.5) {
        const id = flameId.current++;
        setFlames((prev) => [
          ...prev.slice(-8),
          { id, x: (Math.random() - 0.5) * 20, y: -10 - Math.random() * 15 },
        ]);
        setTimeout(() => {
          setFlames((prev) => prev.filter((f) => f.id !== id));
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      const el = document.getElementById("hide-native-scrollbar");
      if (el) el.remove();
    };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.body.style.userSelect = "none";

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: (docHeight * percentage) / 100 });
      setProgress(percentage);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleTrackClick = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percentage = (y / rect.height) * 100;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: (docHeight * percentage) / 100,
      behavior: "smooth",
    });
  };

  return (
    <div className=" hidden sm:flex fixed right-4 top-1/2 -translate-y-1/2 z-[9999]  items-center">
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative w-[4px] h-52 cursor-pointer group"
      >
        {/* Track */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/20 via-[var(--primary)]/20 to-[var(--accent)]/20">
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[var(--accent)] via-[var(--primary)] to-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.05, ease: "linear" }}
          />
        </div>

        {/* Pill with icon only */}
        <motion.div
          onMouseDown={handleMouseDown}
          className="absolute left-3 -translate-x-1/2 cursor-grab active:cursor-grabbing z-10"
          animate={{ top: `${progress}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {/* Glow */}
          <div className="absolute -inset-2 bg-[var(--accent)]/20 rounded-full blur-md group-hover:bg-[var(--primary)]/30 transition-all duration-300" />

          {/* Icon only */}
          <div className="relative flex items-center justify-center">
            <FiCode className="text-xl text-[var(--primary)] group-hover:text-[var(--accent)] group-hover:scale-125 transition-all duration-300 drop-shadow-[0_0_6px_var(--accent)]" />
          </div>

          {/* Flame particles */}
          <AnimatePresence>
            {flames.map((flame) => (
              <motion.div
                key={flame.id}
                initial={{ x: flame.x, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: flame.x + (Math.random() - 0.5) * 15,
                  y: flame.y,
                  opacity: 0,
                  scale: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 w-1 h-1 bg-[var(--accent)]"
                style={{
                  boxShadow: "0 0 4px var(--accent), 0 0 8px var(--primary)",
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
