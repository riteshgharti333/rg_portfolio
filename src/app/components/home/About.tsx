"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiExternalLink,
  FiUser,
} from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";
import {
  githubLink,
  linkedinLink,
  mailLink,
  phoneNo,
} from "@/constants/linksData";
import { PiPathBold } from "react-icons/pi";

const About = () => {
  return (
    <section id="about" className="relative  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.1)_0%,_transparent_70%)]" />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 20, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-green-500"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(80px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-sm font-semibold tracking-widest text-green-400 uppercase inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Professional Profile
          </motion.span>
          <motion.h2
            className="mt-4 text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Me
            </span>
          </motion.h2>
          <motion.div
            className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-400/30 transition-all duration-300 flex flex-col">
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-400/20 group">
                {/* Replace with your image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                    RG
                  </span>
                </div>
                <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-1">
                Ritesh Gharti{" "}
              </h3>
              <p className="text-green-400 text-center mb-6">
                Full Stack Developer
              </p>

              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <FiMail className="text-green-400 text-lg" />
                  <span>{mailLink}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FiPhone className="text-green-400 text-lg" />
                  <span>{phoneNo}</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={githubLink}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all"
                >
                  <FiGithub className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={linkedinLink}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all"
                >
                  <FiLinkedin className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio and Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-400/30 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>

              <div className="space-y-6 text-gray-300 mb-8">
                <p>
                  Results-driven Full Stack Developer with 1+ years of hands-on
                  experience creating fast, scalable, and SEO-optimized web
                  applications using modern technologies like React, Node.js,
                  and MongoDB. I deliver production-ready solutions with
                  responsive UI, clean architecture, and full end-to-end
                  ownership.
                </p>
                <p>
                  I specialize in transforming ideas into robust systems — from
                  intuitive frontends to scalable backends — with CI/CD
                  pipelines, zero-downtime deployments (Vercel, Render, cPanel),
                  and a user-first mindset. Known for rapid delivery, effective
                  collaboration, and consistently exceeding client expectations.
                </p>

                <Link
                  href="/about"
                  className="flex items-center w-fit gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-medium rounded-lg hover:from-green-500 hover:to-emerald-700 cursor-pointer"
                >
                  <FiUser className="text-lg" />
                  <span>More About Me</span>
                </Link>
              </div>

              {/* Quick Links */}
              <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="projects"
                  className="p-4 bg-gray-800 hover:translate-y-[-5px] hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center text-green-400">
                    <FiExternalLink className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Featured Projects</h4>
                    <p className="text-sm text-gray-400">View my best work</p>
                  </div>
                </Link>

                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="/ritesh_resume.pdf"
                  target="_blank"
                  className="p-4 hover:translate-y-[-5px] bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center text-green-400">
                    <FaRegFileAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">View Resume</h4>
                    <p className="text-sm text-gray-400">Download PDF</p>
                  </div>
                </motion.a>

                <Link
                  href="experience"
                  className="p-4 bg-gray-800 hover:translate-y-[-5px] hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center text-green-400">
                    <PiPathBold className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Experience</h4>
                    <p className="text-sm text-gray-400">My career timeline</p>
                  </div>
                </Link>

                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="p-4 bg-gray-800 hover:translate-y-[-5px] hover:bg-gray-700 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Contact Me</h4>
                    <p className="text-sm text-gray-400">Get in touch</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
