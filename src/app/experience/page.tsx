"use client";
import { useRef, useEffect } from "react";
import { experiences } from "@/constants/data";
import { githubLink, linkedinLink, mailLink } from "@/constants/linksData";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import PageHeading from "../components/ui/PageHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MasonryExperience from "../components/layout/MasonryExperience";
import CornerBrackets from "../components/ui/CornerBrackets";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card, i) => {
      if (!card) return;

      // Floating animation
      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
          rotateX: i % 2 === 0 ? 15 : -15,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1.5,
          },
        },
      );

      // Parallax number
      const numberEl = card.querySelector(".exp-number");
      if (numberEl) {
        gsap.fromTo(
          numberEl,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
              end: "top center",
              scrub: 1,
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 bg-[var(--background)] overflow-hidden group"
    >
      <CornerBrackets variant="default" />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <PageHeading
          subtitle="Career Timeline"
          line1="Work"
          line2="Experience"
        />

        {/* Masonry-style cards */}
        <MasonryExperience />

        {/* Current status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[var(--accent)] bg-[var(--background)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 bg-[var(--accent)]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--primary)]">
              Open to opportunities
            </span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-6">
            Connect With Me
          </span>
          <div className="flex gap-3">
            {[
              { icon: FiGithub, href: githubLink, label: "GitHub" },
              { icon: FiLinkedin, href: linkedinLink, label: "LinkedIn" },
              { icon: FiMail, href: `mailto:${mailLink}`, label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                className="group/social relative w-12 h-12 flex items-center justify-center border border-[var(--border)] text-[var(--accent)] hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="text-lg" />
                <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--accent)] opacity-0 group-hover/social:opacity-100 transition-opacity" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--accent)] opacity-0 group-hover/social:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
