"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScrollY / pageHeight) * 100;

      if (currentScrollY < 50) {
        setVisible(true);
        setScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      setScrolled(currentScrollY > 10);

      if (scrollDirection === "down" && (scrollPercentage > 40 || currentScrollY - lastScrollY.current > 100)) {
        setVisible(false);
      } else if (scrollDirection === "up") {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        !visible ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          
          {/* Desktop Navigation */}
          <div className="hidden md:block relative">
            <motion.div
              className={`relative flex items-center gap-0 px-2 py-1.5 transition-all duration-500 ${
                scrolled 
                  ? "bg-[var(--background)]/90 backdrop-blur-xl shadow-[0_4px_24px_var(--border)] border-b border-[var(--border)]" 
                  : "bg-transparent"
              }`}
            >
              {/* Decorative top line */}
              <span className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

              {navItems.map((item, index) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.path}
                    className={`relative block px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      pathname === item.path
                        ? "text-[var(--primary)]"
                        : "text-[var(--accent)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {/* Hover background */}
                    <span
                      className={`absolute inset-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        pathname === item.path
                          ? "bg-[var(--secondary)]"
                          : hoveredItem === item.path
                          ? "bg-[var(--muted)]"
                          : "bg-transparent"
                      }`}
                    />

                    {/* Active bottom bar */}
                    {pathname === item.path && (
                      <span className="absolute bottom-0 left-2 right-2 h-[3px] bg-[var(--accent)]" />
                    )}

                    {/* Text with number */}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className={`text-[10px] font-mono transition-colors duration-300 ${
                        pathname === item.path 
                          ? "text-[var(--accent)]" 
                          : "text-[var(--muted-foreground)] group-hover:text-[var(--accent)]"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.name}
                      
                      {/* Active dot */}
                      {pathname === item.path && (
                        <span className="w-1 h-1 bg-[var(--accent)] animate-pulse" />
                      )}
                    </span>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative z-50 w-11 h-11 flex items-center justify-center transition-all duration-300 border-2 ${
              mobileMenuOpen 
                ? "border-[var(--accent)] bg-[var(--background)]" 
                : scrolled 
                  ? "border-[var(--border)] bg-[var(--background)]/90" 
                  : "border-[var(--border)] bg-[var(--background)]/80"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 w-full h-[2px] transition-all duration-300 ${
                  mobileMenuOpen 
                    ? "top-1.5 rotate-45 bg-[var(--accent)]" 
                    : "top-0 bg-[var(--primary)]"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 w-full h-[2px] bg-[var(--primary)] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[2px] transition-all duration-300 ${
                  mobileMenuOpen 
                    ? "top-1.5 -rotate-45 bg-[var(--accent)]" 
                    : "top-3 bg-[var(--primary)]"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-2"
            >
              <div className="bg-[var(--background)] border border-[var(--border)] p-1.5 space-y-0.5 shadow-[0_8px_32px_var(--border)]">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group relative flex items-center gap-4 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      pathname === item.path
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                        : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                    }`}
                  >
                    <span className={`text-[10px] font-mono w-6 ${
                      pathname === item.path 
                        ? "text-[var(--accent)]" 
                        : "text-[var(--muted-foreground)]/50 group-hover:text-[var(--accent)]"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    
                    {item.name}

                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 text-[var(--accent)]">
                      →
                    </span>

                    {/* Active indicator */}
                    {pathname === item.path && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--accent)] animate-pulse" />
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;