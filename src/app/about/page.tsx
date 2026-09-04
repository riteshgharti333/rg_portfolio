"use client";
import {
  githubLink,
  linkedinLink,
  mailLink,
  phoneNo,
} from "@/constants/linksData";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiDownload,
  FiBook,
  FiAward,
  FiArrowRight,
  FiMapPin,
  FiCalendar,
  FiStar,
  FiCode,
  FiLayers,
  FiTool,
  FiDatabase,
} from "react-icons/fi";
import Image from "next/image";
import PageHeading from "../components/ui/PageHeading";
import MasonryExperience from "../components/layout/MasonryExperience";
import { skills } from "@/constants/data";
import { BsFillSuitClubFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";

import { FiLayout, FiServer, FiZap, FiShield } from "react-icons/fi";
import CornerBrackets from "../components/ui/CornerBrackets";
import SEO from "../components/SEO";

const About = () => {
  const education = {
    institution: "Bahra University Solan, H.P, India",
    degree: "BCA (Bachelor of Computer Applications)",
    grade: "CGPA: 8.27/10",
    duration: "Aug 2021 – Jun 2024",
  };

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management",
    "Operating Systems",
    "Computer Networks",
  ];

  const skillCategories = [
    {
      key: "languages",
      title: "Languages",
      icon: FiCode,
      data: skills.languages,
    },
    {
      key: "frameworks",
      title: "Frameworks",
      icon: FiLayers,
      data: skills.frameworks,
    },
    { key: "tools", title: "Tools", icon: FiTool, data: skills.tools },
    {
      key: "databases",
      title: "Databases",
      icon: FiDatabase,
      data: skills.databases,
    },
  ];

  return (
    <>
      <SEO
        title="About Ritesh Gharti | Full Stack Developer"
        description="Learn more about Ritesh Gharti, a Full Stack Developer specializing in MERN, Next.js, TypeScript, PostgreSQL, scalable web applications, secure APIs, and modern software development."
        canonical="https://ritesh-gharti-portfolio.vercel.app/about"
      />
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
          <PageHeading subtitle="Who I Am" line1="About" line2="me" />

          {/* Hero Summary - Split Layout */}
          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
                01
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Summary
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left - About Text */}
              <div className="relative border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)] transition-all duration-300">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--accent)]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--accent)]" />

                <div className="p-6 md:p-8">
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    Hi, I&apos;m{" "}
                    <span className="font-bold text-[var(--primary)]">
                      Ritesh Gharti
                    </span>{" "}
                    — a Full Stack Developer passionate about building modern,
                    scalable, and production-ready web applications. I
                    specialize in{" "}
                    <span className="font-bold text-[var(--accent)]">MERN</span>
                    ,{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Next.js
                    </span>
                    ,{" "}
                    <span className="font-bold text-[var(--accent)]">
                      TypeScript
                    </span>
                    , and{" "}
                    <span className="font-bold text-[var(--accent)]">
                      PostgreSQL
                    </span>
                    , creating fast, responsive, and user-focused digital
                    experiences.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--foreground)]">
                    My expertise includes developing secure authentication
                    systems, RESTful APIs, database-driven applications,
                    responsive interfaces, and SEO-optimized websites. I enjoy
                    transforming complex ideas into clean, intuitive products
                    with maintainable architecture and attention to performance.
                  </p>
                </div>
              </div>

              {/* Right - Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { end: 20, suffix: "+", label: "Projects\nCompleted" },
                  { end: 2, suffix: "+", label: "Years of\nExperience" },
                  { end: 15, suffix: "+", label: "Technologies\nMastered" },
                  { end: 90, suffix: "%", label: "Client\nSatisfaction" },
                ].map((stat, i) => {
                  const isAccent = i === 0 || i === 3;

                  return (
                    <div
                      key={i}
                      className="group relative border border-[var(--border)] bg-[var(--background)] p-4 flex flex-col justify-center transition-all duration-300 hover:border-[var(--primary)] hover:-translate-y-1"
                    >
                      <div className="flex items-baseline gap-0.5">
                        <span
                          className={`text-3xl md:text-4xl font-black transition-colors tabular-nums group-hover:text-[var(--primary)] ${
                            isAccent
                              ? "text-[var(--accent)]"
                              : "text-[var(--primary)]"
                          }`}
                        >
                          {stat.end}
                        </span>
                        <span
                          className={`text-lg font-bold transition-colors group-hover:text-[var(--primary)] ${
                            isAccent
                              ? "text-[var(--primary)]"
                              : "text-[var(--accent)]"
                          }`}
                        >
                          {stat.suffix}
                        </span>
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)] mt-1.5 leading-tight whitespace-pre-line">
                        {stat.label}
                      </p>

                      <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Education - Timeline Style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
                02
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)] flex items-center gap-2">
                <FiBook className="text-[var(--accent)]" />
                Education
              </h3>
            </div>

            <div className="relative pl-4 md:pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--primary)] to-[var(--border)]" />
              <div className="absolute left-[-5px] top-0 w-3 h-3 bg-[var(--accent)] rotate-45" />

              <div className="relative border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)] transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-3 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FiMapPin className="text-[var(--accent)] text-sm" />
                        <h4 className="text-lg font-bold text-[var(--foreground)] uppercase tracking-[0.03em]">
                          {education.institution}
                        </h4>
                      </div>
                      <p className="text-[var(--primary)] font-bold text-sm uppercase tracking-[0.1em] ml-6">
                        {education.degree}
                      </p>
                    </div>

                    <div className="flex gap-4 ml-6 md:ml-0">
                      <div className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
                        <FiStar className="text-[var(--accent)]" />
                        <span className="font-bold text-[var(--foreground)]">
                          {education.grade}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
                        <FiCalendar className="text-[var(--accent)]" />
                        <span>{education.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[var(--border)] pt-5">
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)] flex items-center gap-2 mb-4">
                      <FiAward className="text-[var(--accent)]" />
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ y: -2, scale: 1.05 }}
                          className="relative px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--primary)] bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 cursor-default"
                        >
                          {course}
                          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[var(--accent)] opacity-0 hover:opacity-100 transition-opacity" />
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <div className="">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
                03
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)] flex items-center gap-2">
                <FaBriefcase className="text-[var(--accent)]" />
                Technical Skills
              </h3>
            </div>
            <MasonryExperience />
          </div>

          {/* Skills Section - Inline */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
                04
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)] flex items-center gap-2">
                <FiCode className="text-[var(--accent)]" />
                Technical Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.map((category, catIdx) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: catIdx * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="group relative border border-[var(--border)] bg-[var(--background)] transition-all duration-300 hover:border-[var(--primary)]"
                >
                  {/* Top accent line */}
                  <div className="h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Category Header */}
                  <div className="flex items-center gap-3 p-4 border-b border-[var(--border)]">
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-300">
                      <category.icon className="text-sm text-[var(--accent)] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      {category.title}
                    </h4>
                    <span className="ml-auto text-[10px] font-mono text-[var(--muted-foreground)]">
                      {String(category.data.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-3">
                      {category.data.map((skill, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -3, scale: 1.05 }}
                          className="flex flex-col items-center gap-1.5 p-2 border border-transparent hover:border-[var(--border)] hover:bg-[var(--muted)] transition-all duration-200 group/skill"
                        >
                          <div className="w-10 h-10 flex items-center justify-center">
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="object-contain group-hover/skill:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--muted-foreground)] group-hover/skill:text-[var(--primary)] transition-colors text-center leading-tight">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <span className="absolute bottom-0 right-0 w-0 h-0 border-b-[8px] border-r-[8px] border-b-transparent border-r-transparent group-hover:border-b-[var(--accent)]/20 group-hover:border-r-[var(--accent)]/20 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Section Header */}
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
                05
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Services
              </h3>
            </div>
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  icon: FiCode,
                  title: "Full Stack Development",
                  description:
                    "End-to-end web applications using MERN, Next.js, and PostgreSQL with scalable architecture.",
                  iconColor: "var(--primary)",
                  textColor: "var(--accent)",
                },
                {
                  icon: FiLayout,
                  title: "Frontend Development",
                  description:
                    "Responsive, interactive UIs with React, Next.js, TypeScript, and Tailwind CSS.",
                  iconColor: "var(--accent)",
                  textColor: "var(--primary)",
                },
                {
                  icon: FiServer,
                  title: "Backend APIs",
                  description:
                    "RESTful and GraphQL APIs with Node.js, Express, authentication, and authorization.",
                  iconColor: "var(--primary)",
                  textColor: "var(--accent)",
                },
                {
                  icon: FiDatabase,
                  title: "Database Design",
                  description:
                    "Schema design, optimization, and management with MongoDB, PostgreSQL, and Prisma.",
                  iconColor: "var(--accent)",
                  textColor: "var(--primary)",
                },
                {
                  icon: FiZap,
                  title: "Performance Optimization",
                  description:
                    "Speed optimization, lazy loading, caching, and performance monitoring for web apps.",
                  iconColor: "var(--primary)",
                  textColor: "var(--accent)",
                },
                {
                  icon: FiShield,
                  title: "Security & Authentication",
                  description:
                    "JWT, OAuth, role-based access control, and secure API implementation.",
                  iconColor: "var(--accent)",
                  textColor: "var(--primary)",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group relative border border-[var(--border)] bg-[var(--background)] p-5 transition-all duration-300 hover:border-[var(--primary)]"
                  style={
                    {
                      ["--icon" as string]: service.iconColor,
                      ["--text" as string]: service.textColor,
                    } as React.CSSProperties
                  }
                >
                  {/* Icon - fills with textColor, icon turns white */}
                  <div
                    className="w-10 h-10 flex items-center justify-center border mb-4 transition-all duration-300 group-hover:bg-[--text] group-hover:border-[--text] group-hover:-translate-y-1"
                    style={{ borderColor: "var(--icon)" }}
                  >
                    <service.icon
                      className="text-lg transition-all duration-300 group-hover:text-white group-hover:scale-110"
                      style={{ color: "var(--icon)" }}
                    />
                  </div>

                  {/* Title - reverses to iconColor on hover */}
                  <h4
                    className="text-sm font-bold uppercase tracking-[0.05em] mb-2 transition-colors duration-300 group-hover:text-[--icon]"
                    style={{ color: "var(--text)" }}
                  >
                    {service.title}
                  </h4>

                  <p className="text-xs text-[var(--foreground)]/60 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom line - uses iconColor, grows on hover */}
                  <div
                    className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-400 group-hover:w-full"
                    style={{ backgroundColor: "var(--icon)" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10 justify-center">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
                06
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Let&apos;s Connect
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: FiMail,
                    label: "Email",
                    value: mailLink,
                    href: `mailto:${mailLink}`,
                  },
                  {
                    icon: FiPhone,
                    label: "Phone",
                    value: phoneNo,
                    href: `tel:${phoneNo}`,
                  },
                  {
                    icon: FiGithub,
                    label: "GitHub",
                    value: "github/riteshgharti",
                    href: githubLink,
                  },
                  {
                    icon: FiLinkedin,
                    label: "LinkedIn",
                    value: "in/riteshgharti",
                    href: linkedinLink,
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3 }}
                    href={item.href}
                    target="_blank"
                    className="group relative flex items-center gap-3 p-4 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)] transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-300 shrink-0">
                      <item.icon className="text-sm text-[var(--accent)] group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                        {item.label}
                      </p>
                      <p className="text-xs text-[var(--foreground)] font-medium mt-0.5 truncate">
                        {item.value}
                      </p>
                    </div>
                    <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>

              <div className="relative border-2 border-[var(--primary)] bg-[var(--background)] p-6 flex flex-col items-center justify-center text-center group hover:border-[var(--accent)] transition-all duration-300">
                <div className="w-16 h-16 border-2 border-[var(--primary)] group-hover:border-[var(--accent)] flex items-center justify-center mb-4 transition-all duration-300 rotate-45">
                  <FiDownload className="text-xl text-[var(--primary)] group-hover:text-[var(--accent)] -rotate-45 transition-colors" />
                </div>

                <h4 className="text-sm font-black uppercase tracking-[0.05em] text-[var(--accent)] group-hover:text-[var(--accent)] hover: mb-1">
                  Download CV
                </h4>
                <p className="text-[10px] text-[var(--muted-foreground)] mb-4 uppercase tracking-[0.1em]">
                  • PDF •
                </p>

                <a
                  href="/ritesh_resume.pdf"
                  download
                  className="group/btn relative inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white bg-[var(--primary)] hover:bg-[var(--accent)] transition-all duration-300"
                >
                  <span>Download</span>
                  <FiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
