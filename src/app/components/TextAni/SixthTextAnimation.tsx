"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const SixthTextAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const title1 = new SplitType(titleLine1Ref.current!, { types: "chars" });
    const title2 = new SplitType(titleLine2Ref.current!, { types: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        end: "bottom top+=100",
        scrub: 1.5,
      },
    });

    // FEATURED - Sine wave from center + elastic bounce
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        y: (index) => Math.sin(index * 0.8) * 100,
        x: (index) => (index < 4 ? -80 : 80),
        rotate: (index) => (index % 2 === 0 ? -45 : 45),
        scale: 0.2,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: {
          each: 0.06,
          from: "center",
        },
        ease: "elastic.out(1, 0.5)",
      },
      0,
    );

    // PROJECTS - Matrix rain drop + flip
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        y: -150,
        rotateX: 180,
        scale: 0,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.7,
        stagger: {
          each: 0.05,
          from: "edges",
        },
        ease: "power4.out",
      },
      0.3,
    );

    return () => {
      title1.revert();
      title2.revert();
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

export default SixthTextAnimation;
