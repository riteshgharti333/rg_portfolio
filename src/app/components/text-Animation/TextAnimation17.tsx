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

    // FEATURED - Characters snap to center like iron filings to magnet
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        x: (index) => gsap.utils.random(-350, 350),
        y: (index) => gsap.utils.random(-250, 250),
        rotate: (index) => gsap.utils.random(-180, 180),
        scale: (index) => gsap.utils.random(0.2, 0.8),
        filter: "blur(15px) brightness(0.3)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 0.7,
        stagger: {
          each: 0.06,
          from: "random",
        },
        ease: "power3.in",
      },
      0,
    );

    // Magnetic wobble after snapping
    tl.to(
      title1.chars,
      {
        x: (index) => gsap.utils.random(-6, 6),
        y: (index) => gsap.utils.random(-4, 4),
        rotate: (index) => gsap.utils.random(-8, 8),
        duration: 0.15,
        ease: "power2.inOut",
      },
      0.5,
    );

    tl.to(
      title1.chars,
      {
        x: (index) => gsap.utils.random(-3, 3),
        y: (index) => gsap.utils.random(-2, 2),
        duration: 0.12,
        ease: "power2.inOut",
      },
      0.65,
    );

    tl.to(
      title1.chars,
      {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.2,
        ease: "elastic.out(1, 0.6)",
      },
      0.77,
    );

    // PROJECTS - Pulled by opposite magnetic pole
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        x: (index) => gsap.utils.random(-350, 350),
        y: (index) => gsap.utils.random(-250, 250),
        rotate: (index) => gsap.utils.random(-180, 180),
        scale: (index) => gsap.utils.random(0.2, 0.8),
        filter: "blur(15px) brightness(0.3)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 0.7,
        stagger: {
          each: 0.06,
          from: "random",
        },
        ease: "power3.in",
      },
      0.4,
    );

    // Magnetic wobble for PROJECTS
    tl.to(
      title2.chars,
      {
        x: (index) => gsap.utils.random(-7, 7),
        y: (index) => gsap.utils.random(-5, 5),
        rotate: (index) => gsap.utils.random(-10, 10),
        duration: 0.15,
        ease: "power2.inOut",
      },
      0.9,
    );

    tl.to(
      title2.chars,
      {
        x: (index) => gsap.utils.random(-3, 3),
        y: (index) => gsap.utils.random(-2, 2),
        duration: 0.12,
        ease: "power2.inOut",
      },
      1.05,
    );

    tl.to(
      title2.chars,
      {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.25,
        ease: "elastic.out(1, 0.5)",
      },
      1.17,
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