"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({
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

    // Subtitle
    tl.fromTo(
      subtitleRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      0,
    );

    // Each CHARACTER drops from top
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

    // Each CHARACTER drops from top
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

    return () => {
      title1.revert();
      title2.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="pb-5">
      {/* Subtitle */}
      <div ref={subtitleRef} className="mb-6 flex items-center justify-center gap-4">
        <div className="h-px w-10 bg-gradient-to-r from-[var(--primary)]/70 to-[var(--primary)]/20" />
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--muted-foreground)]">
          {subtitle}
        </span>
        <div className="h-px w-10 bg-gradient-to-l from-[var(--accent)]/70 to-[var(--accent)]/20" />
      </div>

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl lg:text-7xl text-center font-black tracking-tight leading-none mb-4 overflow-hidden">
        <span ref={titleLine1Ref} className="block text-[var(--primary)]">
          {line1}
        </span>
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

export default TextAnimation;