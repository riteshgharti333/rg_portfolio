"use client";
import { experiences } from "@/constants/data";
import { githubLink, linkedinLink, mailLink } from "@/constants/linksData";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-sm font-semibold tracking-widest text-green-400 uppercase inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Career Timeline
          </motion.span>
          <motion.h2
            className="mt-4 text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Experience
            </span>
          </motion.h2>
          <motion.div
            className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center text-green-400 group-hover:bg-green-400/20 transition-colors">
                    <FiBriefcase className="text-xl" />
                  </div>
                  {idx !== experiences.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gray-700 my-2 group-hover:bg-green-400/30 transition-colors"></div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-green-400 mb-4">{exp.company}</p>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => {
                      return (
                        <motion.li
                          key={i}
                          className="flex"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span className="text-gray-300">
                            {point.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                              part.startsWith("**") && part.endsWith("**") ? (
                                <span
                                  key={j}
                                  className="font-medium text-green-300"
                                >
                                  {part.replace(/\*\*/g, "")}
                                </span>
                              ) : (
                                <span key={j}>{part}</span>
                              )
                            )}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Connect With Me
          </h3>
          <div className="flex gap-4 md:gap-6">
            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={githubLink}
              target="_blank"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white border border-gray-700 hover:border-green-400/30 transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={linkedinLink}
              target="_blank"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white border border-gray-700 hover:border-green-400/30 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${mailLink}`}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white border border-gray-700 hover:border-green-400/30 transition-all"
              aria-label="Email"
            >
              <FiMail className="text-xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
