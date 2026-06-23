"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation19 = () => {
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
        scrub: 1.3,
      },
    });

    // FEATURED - Drop from top with rubber bounce
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        y: -300,
        scaleY: 0.4,
        scaleX: 1.6,
        filter: "blur(4px)",
      },
      {
        opacity: 1,
        y: 0,
        scaleY: 1,
        scaleX: 1,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: {
          each: 0.07,
          from: "start",
        },
        ease: "bounce.out",
      },
      0,
    );

    // Squish on landing - stretch wide then bounce back
    tl.to(
      title1.chars,
      {
        scaleY: 0.6,
        scaleX: 1.4,
        y: 8,
        duration: 0.15,
        ease: "power2.in",
      },
      0.5,
    );

    tl.to(
      title1.chars,
      {
        scaleY: 1.15,
        scaleX: 0.85,
        y: -5,
        duration: 0.12,
        ease: "power2.out",
      },
      0.65,
    );

    tl.to(
      title1.chars,
      {
        scaleY: 0.9,
        scaleX: 1.1,
        y: 3,
        duration: 0.1,
        ease: "power2.inOut",
      },
      0.77,
    );

    tl.to(
      title1.chars,
      {
        scaleY: 1,
        scaleX: 1,
        y: 0,
        duration: 0.15,
        ease: "elastic.out(1, 0.4)",
      },
      0.87,
    );

    // PROJECTS - Drop heavier with more slime wobble
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        y: -350,
        scaleY: 0.3,
        scaleX: 2,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        scaleY: 1,
        scaleX: 1,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: {
          each: 0.07,
          from: "start",
        },
        ease: "bounce.out",
      },
      0.4,
    );

    // Slime wobble - multiple squish phases
    tl.to(
      title2.chars,
      {
        scaleY: 0.5,
        scaleX: 1.6,
        y: 10,
        duration: 0.18,
        ease: "power2.in",
      },
      1.0,
    );

    tl.to(
      title2.chars,
      {
        scaleY: 1.25,
        scaleX: 0.75,
        y: -8,
        duration: 0.14,
        ease: "power2.out",
      },
      1.18,
    );

    tl.to(
      title2.chars,
      {
        scaleY: 0.85,
        scaleX: 1.2,
        y: 5,
        duration: 0.12,
        ease: "power2.inOut",
      },
      1.32,
    );

    tl.to(
      title2.chars,
      {
        scaleY: 1.1,
        scaleX: 0.9,
        y: -3,
        duration: 0.1,
        ease: "power2.inOut",
      },
      1.44,
    );

    tl.to(
      title2.chars,
      {
        scaleY: 1,
        scaleX: 1,
        y: 0,
        duration: 0.2,
        ease: "elastic.out(1, 0.3)",
      },
      1.54,
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

export default TextAnimation19;