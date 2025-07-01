"use client";

import { skills } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidde">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.1)_0%,_transparent_70%)]" />
      </div>

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
            My Technical Skills
          </motion.span>
          <motion.h2
            className="mt-4 text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Stack
            </span>
          </motion.h2>
          <motion.div
            className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.languages.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.frameworks.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Developer Tools */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              Developer Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.tools.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Databases & Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              Databases & Cloud
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.databases.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  skill,
  index,
}: {
  skill: { name: string; icon: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="flex flex-col items-center hover:-translate-y-2 p-4 bg-gray-800 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
    >
      <div className="relative w-16 h-16 mb-3">
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50px, 64px"
        />
        <div className="absolute inset-0  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default Skills;
