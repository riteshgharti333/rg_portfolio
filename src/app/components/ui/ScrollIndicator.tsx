"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: "home", label: "Home", number: "01" },
    { id: "projects", label: "Projects", number: "02" },
    { id: "skills", label: "Skills", number: "03" },
    { id: "about", label: "About", number: "04" },
    { id: "services", label: "Services", number: "05" },
    { id: "contact", label: "Contact", number: "06" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show after scrolling past hero
      setIsVisible(scrollY > 300);

      // Find active section
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          <div className="flex flex-col items-end gap-3">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className="group flex items-center gap-3"
                >
                  {/* Label */}
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      isActive
                        ? "text-[var(--accent)] opacity-100 translate-x-0"
                        : "text-[var(--muted-foreground)] opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  >
                    {section.label}
                  </span>

                  {/* Dot indicator */}
                  <span className="relative flex items-center justify-center w-3 h-3">
                    {isActive && (
                      <span className="absolute inset-0 bg-[var(--accent)] animate-ping opacity-30" />
                    )}
                    <span
                      className={`relative w-2.5 h-2.5 transition-all duration-300 ${
                        isActive
                          ? "bg-[var(--accent)] scale-100"
                          : "bg-[var(--border)] scale-75 group-hover:scale-100 group-hover:bg-[var(--primary)]"
                      }`}
                    />
                  </span>

                  {/* Number */}
                  <span
                    className={`text-[9px] font-mono font-bold transition-all duration-300 ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted-foreground)]/50 group-hover:text-[var(--primary)]"
                    }`}
                  >
                    {section.number}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;