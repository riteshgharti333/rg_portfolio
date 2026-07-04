"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const ThirdTextAnimation = ({
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
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const title1 = new SplitType(titleLine1Ref.current!, { types: "chars,words" });
    const title2 = new SplitType(titleLine2Ref.current!, { types: "chars,words" });

   const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom+=120",
        end: "top 15%",
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

    // "ABOUT" - Clip-path reveal from center outward
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

    // "ME" - Scale up from 0 with rotation
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

    // Bottom gradient line
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
    <div ref={containerRef} className="">
      {/* Subtitle with accent lines */}
      <div ref={subtitleRef} className="flex items-center justify-center gap-3 mb-6">
        <span className="w-8 h-px bg-[var(--primary)]/30" />
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--muted-foreground)]">
          {subtitle}
        </span>
        <span className="w-8 h-px bg-[var(--accent)]/30" />
      </div>

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4 text-center overflow-hidden">
        {/* ABOUT - Clip-path reveal from center */}
        <span ref={titleLine1Ref} className="block text-[var(--primary)]">
          {line1}
        </span>

        {/* ME - Scale + rotate in */}
        <span ref={titleLine2Ref} className="block text-[var(--accent)]">
          {line2}
        </span>
      </h2>
    </div>
  );
};

export default ThirdTextAnimation;