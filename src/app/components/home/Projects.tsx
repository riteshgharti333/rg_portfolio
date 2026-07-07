"use client";

import { homeProjectData } from "@/constants/projectData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import TextAnimation from "../TextAni/TextAnimation";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <TextAnimation
          subtitle="Selected Work"
          line1="FEATURED"
          line2="PROJECTS"
        />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {homeProjectData.map((project, index) => (
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
         <div className="relative w-full overflow-hidden bg-[var(--background)]">
           <Image
             src={project.img}
             alt={project.title}
             width={500}
             height={300}
             className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           />
           {/* Overlay on hover */}
           <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/80 transition-all duration-400 flex items-center justify-center">
             <span className="text-white font-bold text-sm uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2">
               View Project
               <FiArrowRight className="text-lg" />
             </span>
           </div>
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
             {project.description}
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
            <span className="absolute inset-0 bg-[var(--primary)] transition-colors duration-300 group-hover:bg-transparent" />

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
