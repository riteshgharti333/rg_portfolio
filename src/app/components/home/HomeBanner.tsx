"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import CTAButtons from "../ui/CTAButtons";
import MusicEqualizer from "../ui/MusicEqualizer";

/* ─── constants ─── */
const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "UI/UX Craftsman",
];
const NAME_CHARS = "RITESH GHARTI".split("");
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
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    const t = setTimeout(() => {
      const controls = animate(0, end, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setVal(Math.round(v)),
      });
      return controls.stop;
    }, delay);

    return () => clearTimeout(t);
  }, [end, duration, delay]);

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
  const val = useCountUp(end, 1.6, delay);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay / 1000 + 1.4,
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
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-center leading-tight whitespace-pre-line text-gray-500">
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

function MagneticButton({
  children,
  variant = "primary",
  href = "#",
}: {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline";
  href?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 25 });
  const sy = useSpring(y, { stiffness: 300, damping: 25 });
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-primary text-white border-none",
    accent: "bg-accent text-white border-none",
    outline: "bg-transparent text-primary border-2 border-primary",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      className={`relative overflow-hidden px-8 py-3.5 font-bold text-sm tracking-widest uppercase cursor-pointer select-none inline-flex items-center gap-2 transition-shadow duration-300 hover:shadow-2xl ${variants[variant]}`}
    >
      {children}
    </motion.a>
  );
}

/* ─── main ─── */
const HomeBanner = () => {
  const role = useTypewriter(ROLES);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background geometric shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
       

        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 2 === 0 ? 8 : 5,
              height: i % 2 === 0 ? 8 : 5,
              background:
                i % 3 === 0 ? "#1a3fa8" : i % 3 === 1 ? "#e02020" : "#6b7280",
              top: `${15 + i * 13}%`,
              left: `${5 + i * 15}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
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

          <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        </motion.div>

        {/* Giant name */}
        <div className="mb-4 overflow-visible leading-none">
          <div className="flex flex-wrap justify-center gap-[0.02em]">
            {NAME_CHARS.map((char, i) =>
              char === " " ? (
                <span key={i} className="w-[0.35em]" />
              ) : (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + i * 0.045,
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block font-black leading-none select-none"
                    style={{
                      fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)",
                      color: i < 6 ? "#1a3fa8" : "transparent",
                      WebkitTextStroke: i < 6 ? "none" : "2.5px #e02020",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {char}
                  </motion.span>
                </div>
              ),
            )}
          </div>
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

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-sm md:text-[15px] leading-relaxed max-w-xl mb-10 text-[var(--muted-foreground)]"
        >
          Passionate about creating{" "}
          <span className="font-bold text-[var(--primary)]">
            modern, responsive
          </span>
          , and{" "}
          <span className="font-bold text-[var(--primary)]">
            high-performance
          </span>{" "}
          web applications. Specializing in{" "}
          <span className="font-bold text-[var(--accent)]">
            secure backend systems
          </span>
          ,{" "}
          <span className="font-bold text-[var(--accent)]">
            intuitive interfaces
          </span>
          , and{" "}
          <span className="font-bold text-[var(--primary)]">
            scalable digital solutions
          </span>
          .
        </motion.p>

        {/* CTA buttons */}
        <CTAButtons />

        {/* ── Tech Stack Scrolling Animation ── */}
        {/* ── Tech Stack Scroll ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mb-12 overflow-hidden py-4"
        >
          <div className="flex gap-8 animate-scroll-horizontal whitespace-nowrap">
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span
                key={i}
                className="text-lg font-bold uppercase tracking-wider flex items-center gap-3"
                style={{ color: i % 2 === 0 ? "#1a3fa8" : "#e02020" }}
              >
                {tech}
                <span className="text-gray-300 font-light">•</span>
              </span>
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

        {/* Stats */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <StatCard
              key={s.label}
              end={s.end}
              suffix={s.suffix}
              label={s.label}
              delay={i * 120}
              color={i % 2 === 0 ? "#1a3fa8" : "#e02020"}
            />
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
