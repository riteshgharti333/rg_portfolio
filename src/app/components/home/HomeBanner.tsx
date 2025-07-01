"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { homeIcons1, homeIcons2, homeIcons3 } from "@/constants/data";
import TechIconSlider from "./TechIconSlider";
import { IoMdDownload } from "react-icons/io";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const HomeBanner = () => {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ">
      {/* Particle background canvas */}

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white font-['Poppins']">
                {"Hi, I'm "}{" "}
                <span className="text-green-300">Ritesh Gharti</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-green-200 mt-2">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-green-100 max-w-2xl"
            >
              I'm a Full Stack Developer with 1+ years of experience building
              fast, SEO-friendly, responsive web apps using modern tech —
              delivering robust solutions and great user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              >
                <IoMdDownload /> Download Resume
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
              >
                <FiFolder /> View Projects
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <div className=" md:w-1/2 flex justify-center">
            <div className="flex gap-10">
              <TechIconSlider slideData={homeIcons1} />
              <TechIconSlider slideData={homeIcons2} direction="reverse" />
              <TechIconSlider slideData={homeIcons3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
