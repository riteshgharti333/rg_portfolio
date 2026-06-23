"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation13 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    document.body.style.overflowX = "hidden";

    const title1 = new SplitType(titleLine1Ref.current!, { types: "chars" });
    const title2 = new SplitType(titleLine2Ref.current!, { types: "chars" });

    // Initially hide all characters
    gsap.set([title1.chars, title2.chars], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        end: "bottom top+=100",
        scrub: 1.2,
      },
    });

    // FEATURED - DNA helix twist from sides
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        x: (index) => Math.cos(index * 1.5) * 200,
        y: (index) => Math.sin(index * 1.5) * 80,
        rotateY: (index) => index * 60,
        rotateZ: (index) => (index % 2 === 0 ? 90 : -90),
        scale: 0,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: {
          each: 0.07,
          from: "center",
        },
        ease: "power3.inOut",
      },
      0,
    );

    // Helix twist motion on FEATURED
    tl.to(
      title1.chars,
      {
        x: (index) => Math.sin(index * 0.8) * 15,
        rotateY: (index) => Math.sin(index * 0.8) * 10,
        duration: 0.6,
        ease: "sine.inOut",
      },
      0.5,
    );

    tl.to(
      title1.chars,
      {
        x: 0,
        rotateY: 0,
        duration: 0.4,
        ease: "sine.inOut",
      },
      1.1,
    );

    // PROJECTS - Counter helix from opposite side
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        x: (index) => -Math.cos(index * 1.5) * 200,
        y: (index) => -Math.sin(index * 1.5) * 80,
        rotateY: (index) => -index * 60,
        rotateZ: (index) => (index % 2 === 0 ? -90 : 90),
        scale: 0,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: {
          each: 0.07,
          from: "center",
        },
        ease: "power3.inOut",
      },
      0.4,
    );

    // Counter helix twist on PROJECTS
    tl.to(
      title2.chars,
      {
        x: (index) => -Math.sin(index * 0.8) * 15,
        rotateY: (index) => -Math.sin(index * 0.8) * 10,
        duration: 0.6,
        ease: "sine.inOut",
      },
      0.9,
    );

    tl.to(
      title2.chars,
      {
        x: 0,
        rotateY: 0,
        duration: 0.4,
        ease: "sine.inOut",
      },
      1.5,
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
          perspective: "1200px",
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

export default TextAnimation13;