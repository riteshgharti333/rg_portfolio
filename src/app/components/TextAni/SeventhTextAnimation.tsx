"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const SeventhTextAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prevent horizontal scroll during shake
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

    // FEATURED - Lightning strike from top
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        y: -200,
        scale: 0,
        filter: "blur(20px) brightness(3)",
        color: "#ffffff",
        textShadow: "0 0 60px #0ea5e9, 0 0 120px #0ea5e9, 0 0 200px #38bdf8",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px) brightness(1)",
        color: "#ffffff",
        textShadow: "0 0 0px #0ea5e9, 0 0 0px #0ea5e9, 0 0 0px #38bdf8",
        duration: 0.3,
        stagger: {
          each: 0.03,
          from: "random",
        },
        ease: "power4.in",
      },
      0,
    );

    // Quick thunder flash on FEATURED
    tl.to(
      title1.chars,
      {
        filter: "blur(0px) brightness(5)",
        textShadow: "0 0 100px #ffffff, 0 0 200px #0ea5e9, 0 0 300px #38bdf8",
        duration: 0.05,
        ease: "power4.in",
      },
      0.3,
    );

    tl.to(
      title1.chars,
      {
        filter: "blur(0px) brightness(1)",
        textShadow: "0 0 0px #0ea5e9, 0 0 0px #0ea5e9, 0 0 0px #38bdf8",
        duration: 0.1,
        ease: "power4.out",
      },
      0.35,
    );

    // PROJECTS - Thunder rumble shake + appear
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        y: -100,
        x: (index) => (index % 2 === 0 ? -40 : 40),
        rotate: (index) => (index % 2 === 0 ? -20 : 20),
        scale: 0,
        filter: "blur(15px) brightness(2)",
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 0.4,
        stagger: {
          each: 0.04,
          from: "random",
        },
        ease: "elastic.out(1, 0.3)",
      },
      0.4,
    );

    // Shake effect on container
    tl.to(
      container,
      {
        x: "random(-8, 8)",
        y: "random(-4, 4)",
        duration: 0.03,
        repeat: 5,
        yoyo: true,
        ease: "power4.inOut",
      },
      0.4,
    );

    tl.to(
      container,
      {
        x: 0,
        y: 0,
        duration: 0.1,
        ease: "power2.out",
      },
      0.55,
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

export default SeventhTextAnimation;
