"use client";

import {
  FiGithub,
  FiExternalLink,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectData } from "@/constants/projectData";
import React from "react";

const BoldableText = ({ text }: { text: string }) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-[var(--accent)] font-bold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
};

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);

  const project = projectData.find((proj) => proj.slug === slug);
  if (!project) return notFound();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-2 sm:px-4 sm:px-6 lg:px-8 min-h-screen bg-[var(--background)]"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative border border-[var(--border)] overflow-hidden group"
        >
          <Image
            src={project.bannerImage}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          {/* Overlay corner accents */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)] z-10" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--accent)] z-10" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--accent)] z-10" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)] z-10" />
        </motion.div>

        {/* Project Title & Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
              PROJECT
            </span>
            <span className="w-8 h-[2px] bg-[var(--primary)]" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] uppercase tracking-[0.03em]">
            {project.title}
          </h1>

          {/* Links */}
          <div className="flex flex-col gap-3 mt-6">
            {project.isFullStack ? (
              <>
                {/* Code Links Row */}
                <div className="flex flex-wrap gap-3">
                  {project.fullStackCodeLink.map((item, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={item.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                    >
                      <FiGithub className="text-sm" />
                      <span>{item.name}</span>
                      <span className="absolute top-0 right-0 w-0 h-0 border-t-[6px] border-r-[6px] border-t-[var(--accent)] border-r-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>

                {/* Live Links Row */}
                <div className="flex flex-wrap gap-3">
                  {project.fullStackLiveLink.map((item, index) => (
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={item.liveLink}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white bg-[var(--primary)] hover:bg-[var(--accent)] transition-all duration-300"
                    >
                      <FiExternalLink className="text-sm" />
                      <span>{item.name}</span>
                      <FiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Code & Live single project */}
                <div className="flex flex-wrap gap-3">
                  {project.githubLink && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                    >
                      <FiGithub className="text-sm" />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white bg-[var(--primary)] hover:bg-[var(--accent)] transition-all duration-300"
                    >
                      <FiExternalLink className="text-sm" />
                      <span>Live Demo</span>
                      <FiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  )}
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
              01
            </span>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Overview
            </h2>
          </div>
          {project.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-[var(--muted-foreground)] leading-relaxed"
            >
              <BoldableText text={paragraph} />
            </p>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative border border-[var(--border)] p-2 sm:p-6 bg-[var(--background)] hover:border-[var(--primary)]/50 transition-all duration-300"
        >
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--accent)]" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--accent)]" />

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
              02
            </span>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Key Features
            </h2>
          </div>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start text-[var(--muted-foreground)]"
              >
                <span className="text-[var(--accent)] mr-3 mt-0.5 flex-shrink-0">
                  ▹
                </span>
                <span>
                  <BoldableText text={feature} />
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {/* Impact */}
        {project.impact && project.impact.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative border border-[var(--border)] p-2 sm:p-6 bg-[var(--background)] hover:border-[var(--primary)]/50 transition-all duration-300"
          >
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)]" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--accent)]" />

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
                03
              </span>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Impact
              </h2>
            </div>
            <ul className="space-y-3">
              {project.impact.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start text-[var(--muted-foreground)]"
                >
                  <span className="text-[var(--accent)] mr-3 mt-0.5 flex-shrink-0">
                    ▹
                  </span>
                  <span>
                    <BoldableText text={item} />
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative border border-[var(--border)] p-2 sm:p-6 bg-[var(--background)] hover:border-[var(--primary)]/50 transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--accent)]" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--accent)]" />

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
                04
              </span>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Challenges Overcome
              </h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start text-[var(--muted-foreground)]"
                >
                  <span className="text-[var(--accent)] mr-3 mt-0.5 flex-shrink-0">
                    ▹
                  </span>
                  <span>
                    <BoldableText text={challenge} />
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative border border-[var(--border)] p-4 sm:p-6 bg-[var(--background)] hover:border-[var(--primary)]/50 transition-all duration-300"
        >
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)]" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--accent)]" />

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--muted)] px-2 py-1">
              05
            </span>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Tech Stack
            </h2>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="group/tech flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 border border-[var(--border)] flex items-center justify-center p-2 bg-[var(--muted)] group-hover/tech:border-[var(--primary)] transition-all duration-300">
                  <Image
                    src={tech.img}
                    alt={tech.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="text-[var(--foreground)]/70 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] group-hover/tech:text-[var(--primary)] transition-colors text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-[var(--border)] flex justify-center"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white bg-[var(--primary)] hover:bg-[var(--accent)] transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--accent)]" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--accent)]" />
            <span className="flex items-center gap-2">
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              All Projects
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
