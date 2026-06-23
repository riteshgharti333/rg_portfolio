"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation15 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    document.body.style.overflowX = "hidden";

    const title1 = new SplitType(titleLine1Ref.current!, { types: "chars" });
    const title2 = new SplitType(titleLine2Ref.current!, { types: "chars" });

    gsap.set([title1.chars, title2.chars], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        end: "bottom top+=100",
        scrub: 1.2,
      },
    });

    // FEATURED - Hologram flicker slices from top and bottom
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        y: (index) => (index % 3 === 0 ? -80 : index % 3 === 1 ? 80 : 0),
        x: (index) => (index % 3 === 0 ? -30 : index % 3 === 1 ? 30 : 0),
        scaleY: (index) => (index % 2 === 0 ? 3 : 0.3),
        scaleX: (index) => (index % 2 === 0 ? 0.3 : 3),
        skewX: (index) => gsap.utils.random(-20, 20),
        filter: "blur(6px) brightness(2) saturate(0)",
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scaleY: 1,
        scaleX: 1,
        skewX: 0,
        filter: "blur(0px) brightness(1) saturate(1)",
        duration: 0.5,
        stagger: {
          each: 0.05,
          from: "random",
        },
        ease: "power3.inOut",
      },
      0,
    );

    // Glitch flicker on FEATURED
    tl.to(
      title1.chars,
      {
        opacity: 0.3,
        skewX: (index) => gsap.utils.random(-5, 5),
        scaleY: 1.1,
        filter: "blur(2px) brightness(1.5)",
        duration: 0.08,
        ease: "steps(1)",
      },
      0.4,
    );

    tl.to(
      title1.chars,
      {
        opacity: 1,
        skewX: 0,
        scaleY: 1,
        filter: "blur(0px) brightness(1)",
        duration: 0.08,
        ease: "steps(1)",
      },
      0.48,
    );

    // Second glitch flicker
    tl.to(
      title1.chars,
      {
        opacity: 0.2,
        skewX: (index) => gsap.utils.random(-8, 8),
        scaleX: 1.15,
        filter: "blur(3px) brightness(2)",
        duration: 0.06,
        ease: "steps(1)",
      },
      0.6,
    );

    tl.to(
      title1.chars,
      {
        opacity: 1,
        skewX: 0,
        scaleX: 1,
        filter: "blur(0px) brightness(1)",
        duration: 0.1,
        ease: "steps(1)",
      },
      0.66,
    );

    // PROJECTS - Scan lines building from bottom
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        y: (index) => (index % 2 === 0 ? 60 : -60),
        clipPath: (index) =>
          index % 3 === 0
            ? "inset(0 0 80% 0)"
            : index % 3 === 1
            ? "inset(80% 0 0 0)"
            : "inset(40% 0 40% 0)",
        filter: "blur(4px) contrast(2) brightness(0.5)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0 0)",
        filter: "blur(0px) contrast(1) brightness(1)",
        duration: 0.6,
        stagger: {
          each: 0.06,
          from: "edges",
        },
        ease: "power4.out",
      },
      0.5,
    );

    // Scan line refresh on PROJECTS
    tl.to(
      title2.chars,
      {
        clipPath: (index) =>
          index % 2 === 0 ? "inset(0 0 0 0)" : "inset(40% 0 40% 0)",
        duration: 0.15,
        ease: "steps(2)",
      },
      1.0,
    );

    tl.to(
      title2.chars,
      {
        clipPath: "inset(0 0 0 0)",
        duration: 0.1,
        ease: "steps(1)",
      },
      1.15,
    );

    return () => {
      title1.revert();
      title2.revert();
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div ref={containerRef} className="mb-20 py-20">
      <h2
        className="text-[11vw] text-center font-black leading-[0.85] tracking-[-0.04em] lg:text-[5.5vw]"
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          perspective: "1000px",
        }}
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
    </div>
  );
};

export default TextAnimation15;