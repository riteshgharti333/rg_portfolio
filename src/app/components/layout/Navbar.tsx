"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const currentScrollY = window.scrollY;
      const scrollDirection =
        currentScrollY > lastScrollY.current ? "down" : "up";
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScrollY / pageHeight) * 100;

      // Always show navbar at top of page
      if (currentScrollY < 50) {
        setVisible(true);
        setScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Set scrolled state for styling
      setScrolled(currentScrollY > 10);

      // Hide navbar only if:
      // - Scrolling down AND
      // - Past 40% of page height OR
      // - Scrolled more than 100px down
      if (
        scrollDirection === "down" &&
        (scrollPercentage > 40 || currentScrollY - lastScrollY.current > 100)
      ) {
        setVisible(false);
      } else if (scrollDirection === "up") {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Set timeout to ensure navbar stays visible after scroll stops
      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 1500);
    };

    // Add passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className={`fixed w-full  z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-black-900/90 backdrop-blur-md py-4 shadow-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white tracking-tight"
            >
              RG.
              <span className="text-green-300 group-hover:text-green-200 transition-colors duration-300">
                Dev
              </span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.path} className="uppercase">
                  <NavLink href={item.path} isActive={pathname === item.path}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-3">
                {navItems.map((item) => (
                  <MobileNavLink
                    key={item.path}
                    href={item.path}
                    isActive={pathname === item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </MobileNavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// NavLink component remains the same as previous example
const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <Link href={href} passHref>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group px-2 py-1"
      >
        <span
          className={`relative z-10 font-medium transition-colors duration-300 ${
            isActive ? "text-green-300" : "text-white hover:text-green-200"
          }`}
        >
          {children}
        </span>
        {isActive && (
          <motion.span
            layoutId="navActive"
            className="absolute left-0 bottom-0 w-full h-[2px] bg-green-300"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
          />
        )}
        {!isActive && (
          <motion.span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-300 group-hover:w-full transition-all duration-300" />
        )}
      </motion.div>
    </Link>
  );
};

// MobileNavLink component remains the same as previous example
const MobileNavLink = ({
  href,
  children,
  onClick,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <Link href={href} passHref>
      <motion.div
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
          isActive
            ? "bg-green-700 text-white"
            : "bg-green-800/30 text-white hover:bg-green-700/50"
        }`}
      >
        <motion.div
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          {isActive && (
            <motion.div
              layoutId="mobileActive"
              className="w-1 h-6 bg-green-300 rounded-full mr-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          <span>{children}</span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Navbar;
