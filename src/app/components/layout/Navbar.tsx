"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate vertical line on mount
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.5, ease: "power3.inOut", delay: 0.5 }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed right-8 md:right-8 top-0 h-full z-50 flex items-center transition-opacity duration-500 ${
        scrolled ? "opacity-100" : "opacity-100"
      }`}
    >
      <div className="flex items-center h-[80vh] gap-8">
        
        {/* Navigation Links */}
        <ul className="flex flex-col items-end gap-6 md:gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`group relative text-xs md:text-sm uppercase tracking-[0.3em] transition-all duration-300 ${
                  pathname === item.path
                    ? "text-red-600"
                    : "text-red-600 hover:text-red-600"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {/* Active indicator */}
                {pathname === item.path && (
                  <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white" />
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Vertical Line */}
        <div className="relative h-full w-px bg-white/10">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 w-full bg-white/30 origin-top"
            style={{ height: "100%" }}
          />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;