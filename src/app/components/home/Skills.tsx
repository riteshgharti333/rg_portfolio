"use client";

import { skills } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";
import SecondTextAnimation from "../TextAni/SecondTextAnimation";
import TextAnimation from "../TextAni/TextAnimation";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-[var(--background)] overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}

        <TextAnimation
          subtitle="MY TECHNICAL SKILLS"
          line1="TECH"
          line2="STACK"
        />

        {/* Skills Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/20 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--primary)]/5"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-[var(--primary)] mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--primary)]" />
              LANGUAGES
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.languages.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)]/20 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--accent)]/5"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-[var(--accent)] mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--accent)]" />
              FRAMEWORKS & LIBRARIES
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.frameworks.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Developer Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/20 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--primary)]/5"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-[var(--primary)] mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--primary)]" />
              DEVELOPER TOOLS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.tools.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Databases & Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)]/20 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--accent)]/5"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-[var(--accent)] mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-[var(--accent)]" />
              DATABASES & CLOUD
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col items-center group p-4 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative w-14 h-14 mb-3">
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
          sizes="56px"
        />
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors duration-300 text-center">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default Skills;
