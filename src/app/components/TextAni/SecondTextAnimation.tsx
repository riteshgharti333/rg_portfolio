"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const SecondTextAnimation = ({
  subtitle = "Selected Work",
  line1 = "FEATURED",
  line2 = "PROJECTS",
}: {
  subtitle?: string;
  line1?: string;
  line2?: string;
}) => {
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

      const tl = gsap.timeline({
         scrollTrigger: {
           trigger: container,
           start: "top bottom+=120",
           end: "top 15%",
           scrub: 1,
         },
       });

    // Subtitle fades in
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      0,
    );

    // First line - characters fly from LEFT
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
      0.1,
    );

    // Second line - characters fly from RIGHT
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
      0.3,
    );

    // Separator expands from center
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
      0.6,
    );

    return () => {
      title1.revert();
      title2.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="">
      {/* Subtitle */}
      <div ref={subtitleRef} className="mb-6 flex items-center justify-center gap-4">
        <div className="h-px w-10 bg-gradient-to-r from-[var(--primary)]/70 to-[var(--primary)]/20" />
        <span className="text-[10px] uppercase tracking-[0.45em] text-[var(--accent)]/80 font-semibold">
          {subtitle}
        </span>
        <div className="h-px w-10 bg-gradient-to-l from-[var(--accent)]/70 to-[var(--accent)]/20" />
      </div>

      {/* Heading */}
      <h2 className="text-6xl md:text-7xl lg:text-8xl text-center font-black leading-[0.85] tracking-[-0.03em] overflow-hidden">
        {/* First line - flies from LEFT */}
        <span ref={titleLine1Ref} className="block text-[var(--primary)]">
          {line1}
        </span>

        {/* Second line - flies from RIGHT (outline style) */}
        <span
          ref={titleLine2Ref}
          className="block"
          style={{
            WebkitTextStroke: "2px var(--accent)",
            color: "transparent",
          }}
        >
          {line2}
        </span>
      </h2>

      
    </div>
  );
};

export default SecondTextAnimation;