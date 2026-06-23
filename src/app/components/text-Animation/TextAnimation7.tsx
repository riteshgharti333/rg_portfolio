"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation7 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    document.body.style.overflowX = "hidden";

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

    // FEATURED - Spiral into center from all directions
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        x: (index) => Math.cos(index * 0.8) * 250,
        y: (index) => Math.sin(index * 0.8) * 250,
        rotate: (index) => index * 90,
        scale: 0,
        filter: "blur(20px) hue-rotate(180deg)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px) hue-rotate(0deg)",
        duration: 0.7,
        stagger: {
          each: 0.05,
          from: "edges",
        },
        ease: "power3.inOut",
      },
      0,
    );

    // Gravity compression on FEATURED
    tl.to(
      title1.chars,
      {
        scale: 0.7,
        x: (index) => (index < 4 ? 15 : -15),
        skewX: 5,
        duration: 0.2,
        ease: "power2.in",
      },
      0.4,
    );

    // Release and bounce back
    tl.to(
      title1.chars,
      {
        scale: 1,
        x: 0,
        skewX: 0,
        duration: 0.3,
        ease: "elastic.out(1, 0.4)",
      },
      0.6,
    );

    // PROJECTS - Stretch and snap like spaghettification
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        scaleX: 0.1,
        scaleY: 3,
        y: (index) => (index % 2 === 0 ? 100 : -100),
        x: (index) => (index % 2 === 0 ? -80 : 80),
        filter: "blur(15px) saturate(0)",
      },
      {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        y: 0,
        x: 0,
        filter: "blur(0px) saturate(1)",
        duration: 0.6,
        stagger: {
          each: 0.04,
          from: "random",
        },
        ease: "elastic.out(1, 0.6)",
      },
      0.5,
    );

    // Time warp shake
    tl.to(
      container,
      {
        scale: 0.85,
        duration: 0.3,
        ease: "power3.in",
      },
      0.5,
    );

    tl.to(
      container,
      {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      },
      0.8,
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

export default TextAnimation7;