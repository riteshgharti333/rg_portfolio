"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation17 = () => {
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

    // FEATURED - Comets streaking from top-left with trails
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        x: -300,
        y: -200,
        rotate: 45,
        scale: 0,
        skewX: 30,
        filter: "blur(3px) brightness(3)",
        textShadow: "0 0 40px #fbbf24, 0 0 80px #f59e0b, 0 0 120px #ef4444",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        skewX: 0,
        filter: "blur(0px) brightness(1)",
        textShadow: "0 0 0px #fbbf24, 0 0 0px #f59e0b, 0 0 0px #ef4444",
        duration: 0.5,
        stagger: {
          each: 0.06,
          from: "start",
        },
        ease: "power4.out",
      },
      0,
    );

    // Comet flash on arrival
    tl.to(
      title1.chars,
      {
        textShadow: "0 0 60px #ffffff, 0 0 100px #fbbf24, 0 0 150px #f59e0b",
        filter: "brightness(2)",
        duration: 0.1,
        ease: "power3.in",
      },
      0.4,
    );

    tl.to(
      title1.chars,
      {
        textShadow: "0 0 0px #ffffff, 0 0 0px #fbbf24, 0 0 0px #f59e0b",
        filter: "brightness(1)",
        duration: 0.2,
        ease: "power3.out",
      },
      0.5,
    );

    // PROJECTS - Comets streaking from top-right with longer tails
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        x: 300,
        y: -250,
        rotate: -35,
        scale: 0,
        skewX: -25,
        filter: "blur(5px) brightness(3)",
        textShadow: "0 0 50px #38bdf8, 0 0 90px #0ea5e9, 0 0 130px #6366f1",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        skewX: 0,
        filter: "blur(0px) brightness(1)",
        textShadow: "0 0 0px #38bdf8, 0 0 0px #0ea5e9, 0 0 0px #6366f1",
        duration: 0.5,
        stagger: {
          each: 0.06,
          from: "start",
        },
        ease: "power4.out",
      },
      0.3,
    );

    // Comet flash for PROJECTS
    tl.to(
      title2.chars,
      {
        textShadow: "0 0 70px #ffffff, 0 0 110px #38bdf8, 0 0 160px #0ea5e9",
        filter: "brightness(2.5)",
        duration: 0.1,
        ease: "power3.in",
      },
      0.7,
    );

    tl.to(
      title2.chars,
      {
        textShadow: "0 0 0px #ffffff, 0 0 0px #38bdf8, 0 0 0px #0ea5e9",
        filter: "brightness(1)",
        duration: 0.25,
        ease: "power3.out",
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

export default TextAnimation17;