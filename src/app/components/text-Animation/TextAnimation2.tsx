"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Split text into CHARACTERS
    const title1 = new SplitType(titleLine1Ref.current!, { types: "chars" });
    const title2 = new SplitType(titleLine2Ref.current!, { types: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        end: "bottom top+=100",
        scrub: 1,              // Smooth scrubbing - follows scroll
      },
    });

    // Subtitle
    tl.fromTo(
      subtitleRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      0,
    );

    // Each CHARACTER drops from top - F E A T U R E D
    tl.fromTo(
      title1.chars,
      {
        y: -100,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        stagger: {
          each: 0.04,
          from: "start",
        },
        ease: "back.out(2)",
      },
      0.2,
    );

    // Each CHARACTER drops from top - P R O J E C T S
    tl.fromTo(
      title2.chars,
      {
        y: -100,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        stagger: {
          each: 0.04,
          from: "start",
        },
        ease: "back.out(2)",
      },
      0.5,
    );

    // Separator
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
      0.8,
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
      </div>

      {/* Heading */}
      <h2
        className="text-[11vw] text-center font-black leading-[0.85] tracking-[-0.04em] lg:text-[5.5vw] overflow-hidden"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
      >
        <span ref={titleLine1Ref} className="block text-white">
          FEATURED
        </span>
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
        className="mt-10 h-px bg-gradient-to-r from-white/[0.08] via-sky-400/20 to-transparent"
      />
    </div>
  );
};

export default TextAnimation2;