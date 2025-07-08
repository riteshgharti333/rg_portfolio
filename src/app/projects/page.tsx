"use client";

import { projectSmData } from "@/constants/projectData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <motion.span
            className="text-sm font-semibold tracking-widest text-green-400 uppercase inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Creative Works
          </motion.span>
          <motion.h2
            className="mt-4 text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Projects
            </span>
          </motion.h2>
          <motion.div
            className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectSmData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative rounded-2xl overflow-hidden group bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-green-500/30 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.bannerImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors cursor-pointer">
            {project.title}
          </h3>
        </Link>

        <p className="text-gray-300 mb-6 flex-1 line-clamp-3">{project.desc}</p>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="text-xs text-gray-400 mb-2">Tech Stack:</div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full group-hover:bg-gray-700 group-hover:text-green-400 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={`projects/${project.slug}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-lg transition-all"
          >
            <FiSearch className="text-lg" /> <span>Explore More</span>
          </Link>
        </div>
      </div>

      {/* Glow on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.1)_0%,_transparent_70%)]" />
      </div>
    </motion.div>
  );
};

export default Projects;
