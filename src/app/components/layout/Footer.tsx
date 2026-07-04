"use client";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowUp,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  githubLink,
  linkedinLink,
  mailLink,
  phoneNo,
} from "@/constants/linksData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[var(--background)]">
      {/* Top gradient line */}
      <div className="h-[3px] bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Brand with decorative brackets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-[var(--primary)]/40" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                <span className="text-[var(--primary)]">RITESH</span>
                <span className="text-[var(--accent)]"> GHARTI</span>
              </h2>
              <span className="w-12 h-[2px] bg-[var(--accent)]/40" />
            </div>
            <p className="text-sm text-[var(--muted-foreground)] max-w-md mx-auto leading-relaxed">
              Full Stack Developer crafting modern, scalable web applications with clean UI/UX.
            </p>
          </motion.div>

          {/* Big CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              <span className="text-[var(--accent)]">Let&apos;s</span>{" "}
              <span className="relative">
                <span className="text-[var(--primary)]">Work</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[var(--accent)]" />
              </span>{" "}
              <span className="text-[var(--accent)]">Together</span>
            </h3>
          </motion.div>

          {/* Contact Cards - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <a
              href={`mailto:${mailLink}`}
              className="group flex items-center gap-3 px-5 py-3 border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-300">
                <FiMail className="text-xs text-[var(--accent)] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs text-[var(--foreground)]/70 group-hover:text-[var(--primary)] transition-colors">
                {mailLink}
              </span>
            </a>

            <a
              href={`tel:${phoneNo}`}
              className="group flex items-center gap-3 px-5 py-3 border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-[var(--primary)] group-hover:bg-[var(--primary)] transition-all duration-300">
                <FiPhone className="text-xs text-[var(--primary)] group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs text-[var(--foreground)]/70 group-hover:text-[var(--accent)] transition-colors">
                {phoneNo}
              </span>
            </a>
          </motion.div>

          {/* Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12"
          >
            {quickLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-xs font-bold uppercase tracking-[0.15em] text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300"
              >
                <span className="text-[10px] text-[var(--accent)]/50 mr-1">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </motion.div>

          {/* Social Icons with large design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {[
              { icon: FiGithub, href: githubLink, label: "GitHub" },
              { icon: FiLinkedin, href: linkedinLink, label: "LinkedIn" },
              { icon: FiMail, href: `mailto:${mailLink}`, label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                className="group relative w-14 h-14 flex items-center justify-center border-2 border-[var(--border)] text-[var(--muted-foreground)] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="text-xl group-hover:text-[var(--primary)] transition-colors" />
                {/* Corner accents on hover */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-[var(--border)] flex flex-col items-center gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              © {currentYear} Ritesh Gharti. All Rights Reserved.
            </p>

            {/* Scroll to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-300"
            >
              <FiArrowUp className="text-sm group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-[3px] bg-gradient-to-r from-[var(--accent)] via-[var(--primary)] to-[var(--accent)]" />
    </footer>
  );
};

export default Footer;