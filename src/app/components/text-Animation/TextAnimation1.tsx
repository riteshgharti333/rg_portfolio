"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const title1 = new SplitType(titleLine1Ref.current!, { types: "chars,words" });
    const title2 = new SplitType(titleLine2Ref.current!, { types: "chars,words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        end: "bottom top+=100",
        scrub: 1,
      },
    });

    // Subtitle - scale up from center
    tl.fromTo(
      subtitleRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" },
      0,
    );

    // "FEATURED" - Clip-path reveal from center outward
    tl.fromTo(
      title1.words,
      {
        clipPath: "inset(0 50% 0 50%)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0% 0 0%)",
        opacity: 1,
        duration: 0.8,
        stagger: {
          each: 0.15,
          from: "center",
        },
        ease: "power3.inOut",
      },
      0.2,
    );

    // "PROJECTS" - Scale up from 0 with rotation
    tl.fromTo(
      title2.chars,
      {
        scale: 0,
        opacity: 0,
        rotate: 180,
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 0.6,
        stagger: {
          each: 0.05,
          from: "random",
        },
        ease: "back.out(2)",
      },
      0.5,
    );

    // Separator - grows from center
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
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
        <div className="h-px w-10 bg-gradient-to-l from-sky-400/70 to-sky-400/20" />
      </div>

      {/* Heading */}
      <h2
        className="text-[11vw] text-center font-black leading-[0.85] tracking-[-0.04em] lg:text-[5.5vw] overflow-hidden"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
      >
        {/* FEATURED - Clip-path reveal */}
        <span ref={titleLine1Ref} className="block text-white">
          FEATURED
        </span>

        {/* PROJECTS - Scale + rotate */}
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

export default TextAnimation1;