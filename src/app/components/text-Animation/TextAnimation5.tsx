"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation5 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const title1 = new SplitType(titleLine1Ref.current!, { types: 'chars' });
    const title2 = new SplitType(titleLine2Ref.current!, { types: 'chars' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        end: "bottom top+=100",
        scrub: 1,          // Smooth scrubbing - follows scroll position
        // Removed toggleActions since scrub handles forward/backward
      },
    });

    // Subtitle fades in
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      0
    );

    // "FEATURED" - Each character comes from LEFT
    tl.fromTo(
      title1.chars,
      { 
        x: -200, 
        opacity: 0, 
        rotateY: -90,
      },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        stagger: {
          each: 0.03,
          from: "start",
        },
        ease: "power3.out",
      },
      0.1
    );

    // "PROJECTS" - Each character comes from RIGHT
    tl.fromTo(
      title2.chars,
      { 
        x: 200, 
        opacity: 0, 
        rotateY: 90,
      },
      {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        stagger: {
          each: 0.03,
          from: "start",
        },
        ease: "power3.out",
      },
      0.3
    );

    // Separator expands
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
      0.6
    );

    return () => {
      title1.revert();
      title2.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="mb-20 py-20">
      {/* Subtitle */}
      <div ref={subtitleRef} className="mb-6 flex items-center justify-center gap-4">
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
        {/* FEATURED - comes from LEFT */}
        <span ref={titleLine1Ref} className="block text-white">
          FEATURED
        </span>

        {/* PROJECTS - comes from RIGHT */}
        <span
          ref={titleLine2Ref}
          className="block"
          style={{ 
            WebkitTextStroke: "1.5px rgba(14,165,233,0.4)", 
            color: "transparent" 
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

export default TextAnimation5;