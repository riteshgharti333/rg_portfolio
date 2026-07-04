"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const EighthTextAnimation = () => {
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

    // FEATURED - Rocket launch from bottom
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        y: 300,
        x: (index) => (index % 2 === 0 ? -60 : 60),
        rotate: (index) => (index % 2 === 0 ? -30 : 30),
        scale: 0,
        filter: "blur(10px) brightness(2)",
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 0.5,
        stagger: {
          each: 0.05,
          from: "random",
        },
        ease: "back.out(2)",
      },
      0,
    );

    // Fire trail flash on FEATURED
    tl.to(
      title1.chars,
      {
        textShadow: "0 0 40px #f59e0b, 0 0 80px #ef4444, 0 0 120px #f97316",
        duration: 0.15,
        ease: "power3.in",
      },
      0.3,
    );

    tl.to(
      title1.chars,
      {
        textShadow: "0 0 0px #f59e0b, 0 0 0px #ef4444, 0 0 0px #f97316",
        duration: 0.2,
        ease: "power3.out",
      },
      0.45,
    );

    // PROJECTS - Rocket boost with trail
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        y: 400,
        scale: 0,
        rotate: () => gsap.utils.random(-45, 45),
        filter: "blur(15px) brightness(3)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px) brightness(1)",
        duration: 0.6,
        stagger: {
          each: 0.04,
          from: "end",
        },
        ease: "back.out(3)",
      },
      0.35,
    );

    // Rocket shake on launch
    tl.to(
      container,
      {
        y: "random(-10, 10)",
        duration: 0.02,
        repeat: 8,
        yoyo: true,
        ease: "power4.inOut",
      },
      0.35,
    );

    tl.to(
      container,
      {
        y: 0,
        duration: 0.2,
        ease: "elastic.out(1, 0.5)",
      },
      0.5,
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

export default EighthTextAnimation;