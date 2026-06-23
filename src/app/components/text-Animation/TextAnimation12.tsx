"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation12 = () => {
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
        start: "top 50%",
        end: "top 80%",
        scrub: 1.5,
      },
    });

    // FEATURED - Odd chars orbit from left, even chars flip from right
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? 200 : -200),
        y: (index) => (index % 2 === 0 ? 100 : -100),
        rotation: (index) => (index % 2 === 0 ? 360 : -360),
        scale: (index) => (index % 2 === 0 ? 0 : 1.5),
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: {
          each: 0.06,
          from: "edges",
        },
        ease: "power3.inOut",
      },
      0,
    );

    // PROJECTS - Even chars orbit, odd chars flip with depth
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -250 : 250),
        y: (index) => (index % 2 === 0 ? -120 : 120),
        rotateX: (index) => (index % 2 === 0 ? 0 : 180),
        rotateY: (index) => (index % 2 === 0 ? 180 : 0),
        rotateZ: (index) => (index % 2 === 0 ? -180 : 180),
        scale: (index) => (index % 2 === 0 ? 1.8 : 0.2),
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: {
          each: 0.05,
          from: "center",
        },
        ease: "back.out(1.5)",
      },
      0.3,
    );

    return () => {
      title1.revert();
      title2.revert();
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div ref={containerRef} className="">
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

export default TextAnimation12;
