"use client";

import { useState, useEffect, useRef } from "react";
import { motion,animate } from "framer-motion";
import CTAButtons from "../ui/CTAButtons";
import MusicEqualizer from "../ui/MusicEqualizer";
import SplitType from "split-type";
import gsap from "gsap";

/* ─── constants ─── */

const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
  "API Developer",
  "Performance Optimizer",
  "SEO Specialist",
];

const STATS = [
  { end: 20, suffix: "+", label: "Projects\nCompleted" },
  { end: 2, suffix: "+", label: "Years of\nExperience" },
  { end: 15, suffix: "+", label: "Technologies\nMastered" },
  { end: 90, suffix: "%", label: "Client\nSatisfaction" },
];

const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Redux",
  "GraphQL",
  "Docker",
  "AWS",
  "Firebase",
  "Prisma",
  "REST APIs",
  "Git",
  "Figma",
];

/* ─── hooks ─── */
function useTypewriter(words: string[], speed = 85, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[wi];
    let t: ReturnType<typeof setTimeout>;

    if (!del && ci <= w.length) {
      t = setTimeout(() => {
        setDisplay(w.slice(0, ci));
        setCi((c) => c + 1);
      }, speed);
    } else if (!del) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && ci > 0) {
      t = setTimeout(() => {
        setDisplay(w.slice(0, ci - 1));
        setCi((c) => c - 1);
      }, speed / 2.2);
    } else {
      setDel(false);
      setWi((v) => (v + 1) % words.length);
    }

    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);

  return display;
}


function useCountUp(end: number, duration = 1.8, delay = 0) {
  const [val, setVal] = useState(0);
  const controlsRef = useRef<any>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Reset state when component mounts
    setVal(0);
    hasStartedRef.current = false;

    const timeout = setTimeout(() => {
      // Prevent double animation in StrictMode
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      controlsRef.current = animate(0, end, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest: number) => {
          setVal(Math.round(latest));
        },
      });
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (controlsRef.current) {
        controlsRef.current.stop();
      }
    };
  }, [end, duration, delay]); // Re-run if props change

  return val;
}

/* ─── sub-components ─── */
function StatCard({
  end,
  suffix,
  label,
  delay,
  color,
}: {
  end: number;
  suffix: string;
  label: string;
  delay: number;
  color: string;
}) {
  const val = useCountUp(end, 2.5, delay);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay + 1.4,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col items-center gap-1 group"
    >
      <span
        className="text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-none tabular-nums"
        style={{ color }}
      >
        {val}
        {suffix}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-center leading-tight whitespace-pre-line text-[var(--muted-foreground)]">
        {label}
      </span>
      <motion.div
        className="h-0.5 w-6 rounded-full mt-1"
        style={{ background: color }}
        whileHover={{ width: 40 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}


/* ─── main ─── */
const HomeBanner = () => {
  const role = useTypewriter(ROLES);
  const [mounted, setMounted] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  // GSAP SplitType animation for name
  useEffect(() => {
    if (!nameRef.current) return;

    const nameElement = nameRef.current;
    
    // Use SplitType to split text into characters
    const split = new SplitType(nameElement, { 
      types: 'chars,words',
      tagName: 'span'
    });

    // Set initial state - all chars invisible and shifted down
    gsap.set(split.chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      transformOrigin: "50% 0%"
    });

    // Animate each character with stagger
    gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      stagger: {
        each: 0.04,
        from: "start"
      },
      ease: "back.out(1.2)",
      delay: 0.3
    });

    return () => {
      split.revert();
    };
  }, []);

  // GSAP animation for stats
  useEffect(() => {
    if (!statsRef.current) return;

    const statElements = statsRef.current.querySelectorAll('.stat-item');
    
    gsap.fromTo(statElements, 
      {
        opacity: 0,
        y: 50,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.4)",
        delay: 1.8
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center" id="home">
     

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-2 sm:px-6 py-20 flex flex-col items-center text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center gap-2 px-6 py-2.5 mb-10 text-xs font-bold tracking-widest uppercase overflow-hidden group"
        >
          {/* Corner borders */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--primary)] transition-all duration-300 group-hover:w-10 group-hover:h-4" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)] transition-all duration-300 group-hover:w-10 group-hover:h-4" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--accent)] transition-all duration-300 group-hover:w-10 group-hover:h-4" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--primary)] transition-all duration-300 group-hover:w-10 group-hover:h-4" />

          <span className="relative z-10 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
            Available for work
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-[var(--accent)]" />
          </span>
        </motion.div>

        {/* Giant name with GSAP character animation */}
        <div
          ref={nameRef}
          className="font-black leading-none select-none text-center mb-6"
          style={{
            fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)",
            letterSpacing: "-0.01em",
          }}
        >
          {/* Line 1 */}
          <span className="text-[var(--primary)]" style={{ display: "inline-block" }}>RITESH</span>
          {/* Desktop gap / Mobile break */}
          <span className="hidden sm:inline">&nbsp;</span>
          <br className="sm:hidden" />
          {/* Line 2 */}
          <span
            style={{
              WebkitTextStroke: "2.5px var(--accent)",
              color: "transparent",
              display: "inline-block"
            }}
          >
            GHARTI
          </span>
        </div>

        {/* Animated underline - Music Equalizer Bars (Two-way) */}
        <MusicEqualizer />

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-10 flex items-center justify-center gap-3 mb-8"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-accent"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span className="font-bold text-xl md:text-2xl tracking-tight text-[var(--accent)] uppercase">
            {role}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="ml-0.5 inline-block text-[var(--primary)]"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-sm md:text-[15px] leading-relaxed max-w-xl mb-10 text-[var(--muted-foreground)]"
        >
          I build{" "}
          <span className="font-bold text-[var(--primary)]">
            fast, scalable
          </span>{" "}
          and{" "}
          <span className="font-bold text-[var(--primary)]">SEO-optimized</span>{" "}
          full-stack web applications with{" "}
          <span className="font-bold text-[var(--accent)]">
            modern frontend experiences
          </span>{" "}
          and{" "}
          <span className="font-bold text-[var(--accent)]">
            secure backend architectures
          </span>
          . From intuitive user interfaces to reliable APIs, I transform ideas
          into{" "}
          <span className="font-bold text-[var(--primary)]">
            production-ready digital products
          </span>
          .
        </motion.p>

        {/* CTA buttons */}
        <CTAButtons />

        {/* ── Tech Stack Scrolling Animation ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mb-12 overflow-hidden py-4 border-y border-[var(--border)] relative"
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex gap-8 animate-scroll-horizontal whitespace-nowrap">
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-8 group cursor-default"
              >
                {/* Tech name */}
                <span
                  className="text-sm md:text-base font-black uppercase tracking-[0.05em] transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: i % 2 === 0 ? "var(--primary)" : "transparent",
                    WebkitTextStroke:
                      i % 2 === 0 ? "none" : "1.5px var(--accent)",
                  }}
                >
                  {tech}
                </span>

                {/* Separator diamond */}
                <span
                  className="w-1.5 h-1.5 rotate-45 opacity-40"
                  style={{
                    backgroundColor:
                      i % 2 === 0 ? "var(--accent)" : "var(--primary)",
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats divider */}
        <motion.div
          className="w-full flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400">
            Quick Stats
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
        </motion.div>

        {/* Stats with GSAP animation */}
        <div 
          ref={statsRef}
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="stat-item">
              <StatCard
                end={s.end}
                suffix={s.suffix}
                label={s.label}
                delay={i * 0.12}
                color={i % 2 === 0 ? "var(--primary)" : "var(--accent)"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Corner brackets */}
      {[
        { top: 20, left: 20, rotate: 0 },
        { top: 20, right: 20, rotate: 90 },
        { bottom: 20, left: 20, rotate: -90 },
        { bottom: 20, right: 20, rotate: 180 },
      ].map((pos, i) => (
        <motion.svg
          key={i}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="absolute pointer-events-none"
          style={{
            ...pos,
            rotate: `${pos.rotate}deg`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
        >
          <path
            d="M2 18 L2 2 L18 2"
            stroke={i % 2 === 0 ? "#1a3fa8" : "#e02020"}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}
    </section>
  );
};

export default HomeBanner;