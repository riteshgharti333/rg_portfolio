"use client";

import { homeProjectData } from "@/constants/projectData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import ThirdTextAnimation from "../TextAni/ThirdTextAnimation";
import SecondTextAnimation from "../TextAni/SecondTextAnimation";
import TextAnimation from "../TextAni/TextAnimation";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 bg-[var(--background)] overflow-hidden"
    >
     

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <TextAnimation
          subtitle="Selected Work"
          line1="FEATURED"
          line2="PROJECTS"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {homeProjectData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/5 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-[var(--muted)]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/90 via-[var(--primary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="w-10 h-10 bg-[var(--background)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                    >
                      <FiExternalLink className="text-lg" />
                    </Link>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="w-10 h-10 bg-[var(--background)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                    >
                      <FiGithub className="text-lg" />
                    </Link>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-4 h-4 bg-[var(--accent)]"
                    style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Title */}
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-[var(--accent)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300 tracking-tight uppercase">
                    {project.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">
                    TECH STACK:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-[var(--border)] text-[var(--accent)] group-hover:border-[var(--primary)]/20 group-hover:text-[var(--primary)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <div className="mt-auto pt-4 border-t border-[var(--border)]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300 group/link"
                  >
                    VIEW DETAILS
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center px-12 py-5 text-white font-bold text-sm uppercase tracking-[0.1em] overflow-hidden"
          >
            {/* Background */}
            <span className="absolute inset-0 bg-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--background)]" />

            {/* Corner brackets */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--accent)] group-hover:border-[var(--primary)] group-hover:w-30 group-hover:h-6 transition-all duration-300" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)] group-hover:border-[var(--primary)] group-hover:w-30 group-hover:h-4 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--accent)] group-hover:border-[var(--primary)] group-hover:w-30 group-hover:h-6 transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--accent)] group-hover:border-[var(--primary)] group-hover:w-30 group-hover:h-6 transition-all duration-300" />

            {/* Text wrapper */}
            <span className="relative z-10 block h-[1.2em] overflow-hidden">
              {/* Default */}
              <span className="flex items-center gap-3 transition-transform duration-400 group-hover:-translate-y-full">
                EXPLORE MORE PROJECTS
                <FiArrowRight className="text-lg" />
              </span>

              {/* Same text slides up */}
              <span className="absolute top-full left-0 flex items-center gap-3 transition-transform duration-400 group-hover:-translate-y-full text-[var(--accent)]">
                EXPLORE MORE PROJECTS
                <FiArrowRight className="text-lg" />
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
