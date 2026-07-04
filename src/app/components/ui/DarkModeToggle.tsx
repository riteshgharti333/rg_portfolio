"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    const newDark = !isDark;
    setIsDark(newDark);
    
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 1200);
  };

  return (
    <>
      {/* Sun sweep animation overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ 
              clipPath: "circle(0% at 100% 100%)",
            }}
            animate={{ 
              clipPath: "circle(150% at 100% 100%)",
            }}
            exit={{ 
              clipPath: "circle(0% at 0% 0%)",
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 z-[60] pointer-events-none"
            style={{
              background: isDark 
                ? "linear-gradient(135deg, var(--primary) 0%, #0a0a0a 100%)"
                : "linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, var(--background) 100%)",
            }}
          >
            {/* Sun rays */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0.6, 0],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.08,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute w-1 h-16 origin-bottom"
                  style={{
                    background: isDark 
                      ? "linear-gradient(to top, rgba(var(--primary-rgb), 0.3), transparent)"
                      : "linear-gradient(to top, rgba(var(--primary-rgb), 0.4), transparent)",
                    bottom: "0%",
                    right: "0%",
                    transform: `rotate(${i * 30}deg) translateY(-50%)`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[70] group flex items-center gap-3 px-4 py-3 border-2 border-[var(--accent)] bg-[var(--background)] hover:bg-[var(--primary)] transition-all duration-300"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--accent)] group-hover:border-white transition-colors" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--accent)] group-hover:border-white transition-colors" />

        {/* Icon */}
        <motion.div
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {isDark ? (
            <FiSun className="text-lg text-[var(--accent)] group-hover:text-white transition-colors" />
          ) : (
            <FiMoon className="text-lg text-[var(--foreground)] group-hover:text-white transition-colors" />
          )}
        </motion.div>

        {/* Label */}
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--foreground)] group-hover:text-white transition-colors">
          {isDark ? "Light" : "Dark"}
        </span>

        {/* Small indicator dot */}
        <span className={`w-1.5 h-1.5 transition-colors duration-300 ${
          isDark ? "bg-[var(--accent)]" : "bg-[var(--muted-foreground)]"
        }`} />
      </motion.button>
    </>
  );
};

export default DarkModeToggle;