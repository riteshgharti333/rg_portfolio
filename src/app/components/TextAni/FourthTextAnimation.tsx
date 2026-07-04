"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const FourthTextAnimation = ({
  subtitle = "GET TO KNOW ME",
  line1 = "ABOUT",
  line2 = "ME",
}: {
  subtitle?: string;
  line1?: string;
  line2?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const cursorRef1 = useRef<HTMLSpanElement>(null);
  const cursorRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const title1 = new SplitType(titleLine1Ref.current!, { types: "chars" });
    const title2 = new SplitType(titleLine2Ref.current!, { types: "chars" });

    // Initially hide all characters
    gsap.set(title1.chars, { opacity: 0 });
    gsap.set(title2.chars, { opacity: 0 });

    // Blinking cursor animation
    gsap.to([cursorRef1.current, cursorRef2.current], {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "steps(1)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom+=120",
        end: "top 15%",
        scrub: 1,
      },
    });

    // Subtitle - fade in
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 },
      0,
    );

    // First line - Type each character one by one
    tl.to(
      title1.chars,
      {
        opacity: 1,
        duration: 0.3,
        stagger: {
          each: 0.15,
          from: "start",
        },
        ease: "steps(1)",
      },
      0.2,
    );

    // Second line - Type each character one by one
    tl.to(
      title2.chars,
      {
        opacity: 1,
        duration: 0.3,
        stagger: {
          each: 0.15,
          from: "start",
        },
        ease: "steps(1)",
      },
      0.6,
    );

    // Hide cursors after typing complete
    tl.to(
      [cursorRef1.current, cursorRef2.current],
      {
        opacity: 0,
        duration: 0.1,
      },
      1.2,
    );

    return () => {
      title1.revert();
      title2.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* Subtitle with accent lines */}
      <div
        ref={subtitleRef}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <span className="w-8 h-px bg-[var(--primary)]/30" />
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--muted-foreground)]">
          {subtitle}
        </span>
        <span className="w-8 h-px bg-[var(--accent)]/30" />
      </div>

      {/* Heading with typing effect */}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4 text-center">
        {/* First line - Typing effect */}
        <span className="relative inline-block">
          <span ref={titleLine1Ref} className="text-[var(--primary)]">
            {line1}
          </span>
          <span
            ref={cursorRef1}
            className="inline-block w-[3px] h-[0.8em] bg-[var(--accent)] ml-1 align-middle"
            style={{ verticalAlign: "baseline" }}
          />
        </span>

        <br />

        {/* Second line - Typing effect */}
        <span className="relative inline-block">
          <span ref={titleLine2Ref} className="text-[var(--accent)]">
            {line2}
          </span>
          <span
            ref={cursorRef2}
            className="inline-block w-[3px] h-[0.8em] bg-[var(--accent)] ml-1 align-middle"
            style={{ verticalAlign: "baseline" }}
          />
        </span>
      </h2>
    </div>
  );
};

export default FourthTextAnimation;
