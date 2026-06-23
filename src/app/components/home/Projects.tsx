"use client";

import { useRef, useEffect } from "react";
import { homeProjectData } from "@/constants/projectData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TextAnimation13 from "../text-Animation/TextAnimation13";
import TextAnimation3 from "../text-Animation/TextAnimation3";
import TextAnimation2 from "../text-Animation/TextAnimation2";
import TextAnimation5 from "../text-Animation/TextAnimation5";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      const titleSplit = new SplitType(titleRef.current, { types: "chars" });
      const subtitleSplit = new SplitType(subtitleRef.current, { types: "chars" });

      gsap.set(titleSplit.chars, { opacity: 0, y: 60, rotateX: -90 });
      gsap.set(subtitleSplit.chars, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.to(titleSplit.chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        stagger: { each: 0.04, from: "start" },
        ease: "back.out(1.7)",
      });

      tl.to(
        subtitleSplit.chars,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: { each: 0.02, from: "start" },
          ease: "power3.out",
        },
        "-=0.3"
      );

      return () => {
        titleSplit.revert();
        subtitleSplit.revert();
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
       <TextAnimation3 />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {homeProjectData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 md:h-60 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
                
                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <FiArrowUpRight className="text-white text-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/80 transition-colors duration-300">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-sm leading-relaxed mb-6 line-clamp-3 text-white/40">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full text-white/50 border border-white/10 font-mono transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full text-white/30 border border-white/[0.05] font-mono">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.3em] text-white font-mono transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3">
              View All Projects
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg"
              >
                →
              </motion.span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:bg-white/60 transition-colors duration-300" />
            <span className="absolute bottom-0 left-0 h-px bg-white w-0 group-hover:w-full transition-all duration-500 ease-out" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;