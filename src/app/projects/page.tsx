"use client";

import { projectSmData } from "@/constants/projectData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import PageHeading from "../components/ui/PageHeading";
import CornerBrackets from "../components/ui/CornerBrackets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-[var(--background)] group"
    >
      <CornerBrackets variant="default" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <PageHeading
          subtitle="Selected Works"
          line1="FEATURED"
          line2="PROJECTS"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectSmData.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="group relative flex flex-col border border-[var(--border)] bg-[var(--background)] transition-all duration-400 hover:border-[var(--primary)]"
            >
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all duration-300 z-20" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all duration-300 z-20" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all duration-300 z-20" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all duration-300 z-20" />

              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.bannerImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/80 transition-all duration-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2">
                    View Project
                    <FiArrowRight className="text-lg" />
                  </span>
                </div>

                {/* Number tag */}
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold text-white bg-[var(--primary)] px-2 py-1 z-10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                {/* Title */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/title"
                >
                  <h3 className="text-lg font-bold text-[var(--primary)] uppercase tracking-[0.05em] group-hover/title:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-[var(--muted-foreground)] text-sm mt-3 line-clamp-3 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--primary)] bg-[var(--secondary)] border border-[var(--border)] group-hover:border-[var(--primary)]/30 group-hover:text-[var(--accent)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="px-6 pb-6 mt-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/btn relative flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--primary-foreground)] bg-[var(--primary)] overflow-hidden transition-all duration-300 hover:bg-[var(--accent)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Project
                    <FiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  <FiExternalLink className="relative z-10 text-sm" />

                  {/* Hover slash effect */}
                  <span className="absolute inset-0 bg-[var(--accent)] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </Link>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[var(--primary)]/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
