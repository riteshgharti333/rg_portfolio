"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const FifthTextAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const title1 = new SplitType(titleLine1Ref.current!, { types: "chars" });
    const title2 = new SplitType(titleLine2Ref.current!, { types: "chars" });

    // Split FEATURED into FEA (0-2) and TURED (3-7)
    const fea = title1.chars.slice(0, 3);      // F, E, A
    const tured = title1.chars.slice(3, 8);     // T, U, R, E, D

    // Split PROJECTS into PROJ (0-3) and ECTS (4-7)
    const proj = title2.chars.slice(0, 4);      // P, R, O, J
    const ects = title2.chars.slice(4, 8);      // E, C, T, S

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        end: "bottom top+=100",
        scrub: 1,
      },
    });

    // Subtitle
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
      0,
    );

    // FEA - comes from TOP
    tl.fromTo(
      fea,
      {
        y: -120,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        stagger: {
          each: 0.06,
          from: "start",
        },
        ease: "back.out(2)",
      },
      0.2,
    );

    // TURED - comes from RIGHT
    tl.fromTo(
      tured,
      {
        x: 150,
        opacity: 0,
        rotateY: 90,
      },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.6,
        stagger: {
          each: 0.06,
          from: "start",
        },
        ease: "back.out(2)",
      },
      0.35,
    );

    // PROJ - comes from LEFT
    tl.fromTo(
      proj,
      {
        x: -150,
        opacity: 0,
        rotateY: -90,
      },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.6,
        stagger: {
          each: 0.06,
          from: "start",
        },
        ease: "back.out(2)",
      },
      0.5,
    );

    // ECTS - comes from BOTTOM
    tl.fromTo(
      ects,
      {
        y: 120,
        opacity: 0,
        rotateX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        stagger: {
          each: 0.06,
          from: "start",
        },
        ease: "back.out(2)",
      },
      0.65,
    );

    // Separator
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
      0.9,
    );

    return () => {
      title1.revert();
      title2.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="mb-20 py-20">
      {/* Subtitle */}
      <div
        ref={subtitleRef}
        className="mb-6 flex items-center justify-center gap-4"
      >
        <div className="h-px w-10 bg-gradient-to-r from-sky-400/70 to-sky-400/20" />
        <span className="text-[10px] uppercase tracking-[0.45em] text-sky-400/60">
          Selected Work
        </span>
        <div className="h-px w-10 bg-gradient-to-l from-sky-400/70 to-sky-400/20" />
      </div>

      {/* Heading */}
      <h2
        className="text-[11vw] text-center font-black leading-[0.85] tracking-[-0.04em] lg:text-[5.5vw] overflow-hidden"
        style={{ 
          fontFamily: "'DM Serif Display', Georgia, serif",
          perspective: "1000px",
        }}
      >
        {/* FEATURED - Split: FEA (top) + TURED (right) */}
        <span ref={titleLine1Ref} className="block text-white">
          FEATURED
        </span>

        {/* PROJECTS - Split: PROJ (left) + ECTS (bottom) */}
        <span
          ref={titleLine2Ref}
          className="block"
          style={{
            WebkitTextStroke: "1.5px rgba(14,165,233,0.4)",
            color: "transparent",
          }}
        >
          PROJECTS
        </span>
      </h2>

      {/* Separator */}
      <div
        ref={lineRef}
        className="mt-10 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"
      />
    </div>
  );
};

export default FifthTextAnimation;