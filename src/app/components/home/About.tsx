"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiExternalLink,
  FiUser,
  FiAward,
  FiBriefcase,
  FiCode,
  FiHeart,
} from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";
import {
  githubLink,
  linkedinLink,
  mailLink,
  phoneNo,
} from "@/constants/linksData";
import CornerBrackets from "../ui/CornerBrackets";
import ThirdTextAnimation from "../TextAni/ThirdTextAnimation";
import TextAnimation from "../TextAni/TextAnimation";

const About = () => {
  return (
    <section id="about" className="relative py-24  overflow-hidden">
      {/* Background decoration */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <TextAnimation subtitle="GET TO KNOW ME" line1="ABOUT" line2="ME" />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row: Profile + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="h-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/5 p-8 relative group">
                {/* Corner brackets - inside card */}

                <CornerBrackets variant="default" />

                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 border-2 border-[var(--border)] mb-4 overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--muted)] flex items-center justify-center">
                      <span className="text-5xl font-black bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
                        RG
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-[var(--primary)] tracking-tight">
                    Ritesh Gharti
                  </h3>
                  <p className="text-[var(--accent)] font-bold uppercase tracking-wider text-sm mt-1">
                    Full Stack Developer
                  </p>

                  <div className="w-full mt-6 space-y-3 pt-6 border-t border-[var(--border)]">
                    <div className="flex items-center gap-3 text-[var(--muted-foreground)] text-sm">
                      <FiMail className="text-[var(--primary)] text-base" />
                      <span>{mailLink}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[var(--muted-foreground)] text-sm">
                      <FiPhone className="text-[var(--accent)] text-base" />
                      <span>{phoneNo}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6 pt-6 border-t border-[var(--border)] w-full justify-center">
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={githubLink}
                      target="_blank"
                      className="w-10 h-10 border border-[var(--border)] hover:border-[var(--primary)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-all duration-300"
                    >
                      <FiGithub className="text-lg" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={linkedinLink}
                      target="_blank"
                      className="w-10 h-10 border border-[var(--border)] hover:border-[var(--accent)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-all duration-300"
                    >
                      <FiLinkedin className="text-lg" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="h-full grid grid-cols-2 gap-4">
                {[
                  {
                    icon: FiBriefcase,
                    label: "Projects",
                    value: "20+",
                    color: "var(--primary)",
                  },
                  {
                    icon: FiCode,
                    label: "Technologies",
                    value: "15+",
                    color: "var(--accent)",
                  },
                  {
                    icon: FiAward,
                    label: "Experience",
                    value: "2+ Years",
                    color: "var(--primary)",
                  },
                  {
                    icon: FiHeart,
                    label: "Satisfaction",
                    value: "90%",
                    color: "var(--accent)",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6 flex flex-col items-center justify-center relative group"
                  >
                    {/* Corner brackets - inside card */}
                    <CornerBrackets variant="default" />

                    <stat.icon
                      className="text-3xl mb-2"
                      style={{ color: stat.color }}
                    />
                    <span
                      className="text-3xl font-black"
                      style={{
                        color:
                          index % 2 === 0 ? "var(--accent)" : "var(--primary)",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Journey + Quick Links */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Journey Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="h-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--accent)]/5 p-8 relative group">
                {/* Corner brackets - inside card */}
                <CornerBrackets variant="swapped" />

                <h3 className="text-xl font-black text-[var(--primary)] mb-4 tracking-tight">
                  My Journey
                </h3>

                <div className="space-y-3 text-[var(--muted-foreground)]">
                  <p className="text-sm leading-relaxed">
                    Hi, I'm Ritesh Gharti — a Full Stack Developer with
                    practical experience building production-level web
                    applications using the MERN stack, Next.js, and PostgreSQL.
                  </p>
                  <p className="text-sm leading-relaxed">
                    I've developed and delivered full-stack projects including
                    admin dashboards, invoicing systems, and content platforms —
                    all focused on scalability, performance, and clean UI/UX.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--primary)] text-white font-bold uppercase tracking-wider text-xs hover:bg-[var(--accent)] transition-colors duration-300"
                  >
                    <FiUser className="text-sm" />
                    More About Me
                  </Link>
                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    href="/ritesh_resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--border)] text-[var(--primary)] font-bold uppercase tracking-wider text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                  >
                    <FaRegFileAlt className="text-sm" />
                    Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="h-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/5 p-8 relative group">
                {/* Corner brackets - inside card */}
                <CornerBrackets variant="swapped" />

                <h3 className="text-xl font-black text-[var(--accent)] mb-4 tracking-tight">
                  Quick Links
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      icon: FiExternalLink,
                      label: "Featured Projects",
                      href: "/projects",
                    },
                    {
                      icon: FiBriefcase,
                      label: "My Experience",
                      href: "/experience",
                    },
                    { icon: FiMail, label: "Contact Me", href: "#contact" },
                  ].map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 p-3 border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 border border-[var(--border)] group-hover:border-[var(--accent)] flex items-center justify-center text-[var(--primary)] transition-all duration-300">
                          <link.icon className="text-sm" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
