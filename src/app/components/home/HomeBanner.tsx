"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { homeIcons1, homeIcons2, homeIcons3 } from "@/constants/data";
import TechIconSlider from "./TechIconSlider";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const HomeBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const colors = [
      "rgba(74, 222, 128, 0.3)",
      "rgba(34, 197, 94, 0.4)",
      "rgba(22, 163, 74, 0.5)",
    ];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset particles that go off screen
        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                 {"Hi, I'm "} <span className="text-green-300">Ritesh Gharti</span>
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
              I craft exceptional digital experiences with modern technologies.
              Specializing in React, Next.js, Node.js, and cloud solutions, I
              build performant, scalable applications with beautiful interfaces.
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
                <FaFileDownload /> Download Resume
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
              <TechIconSlider slideData={homeIcons1}  />
              <TechIconSlider slideData={homeIcons2}  direction="reverse" />
              <TechIconSlider slideData={homeIcons3} />
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-green-400 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeBanner;
