"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectData } from "@/constants/projectData";

const BoldableText = ({ text }: { text: string }) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-green-400 font-bold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData.find((proj) => proj.slug === params.slug);
  if (!project) return notFound();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Banner Image */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <Image
            src={project.bannerImage}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Title with Gradient */}
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          {project.title}
        </h1>

        {/* Description */}
        <div className="space-y-4">
          {project.description.map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed">
              <BoldableText text={paragraph} />
            </p>
          ))}
        </div>

        {/* Features */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <span className="text-green-400 mr-2">▹</span>
                <span className="text-gray-300">
                  <BoldableText text={feature} />
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Impact</h2>
          <ul className="space-y-3">
            {project.impact.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <span className="text-green-400 mr-2">▹</span>
                <span className="text-gray-300">
                  <BoldableText text={item} />
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            Challenges Overcome
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <span className="text-green-400 mr-2">▹</span>
                <span className="text-gray-300">
                  <BoldableText text={challenge} />
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center p-2">
                  <Image
                    src={tech.img}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-300 mt-2 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
          >
            <FiGithub className="text-lg" />
            <span>View Code</span>
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
          >
            <FiExternalLink className="text-lg" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
