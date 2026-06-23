"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation11 = () => {
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

    // FEATURED - Each char blows in like wind, staggered wave
    title1.chars.forEach((char, index) => {
      const delay = index * 0.1;

      gsap.fromTo(
        char,
        {
          opacity: 0,
          x: 200,
          y: Math.sin(index * 0.5) * 60,
          rotation: gsap.utils.random(-30, 30),
          scale: 0.5,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top bottom-=100",
            end: "bottom top+=100",
            scrub: 1.5,
          },
        },
        delay,
      );
    });

    // PROJECTS - Blows in from opposite direction, floating
    title2.chars.forEach((char, index) => {
      const delay = index * 0.08;

      gsap.fromTo(
        char,
        {
          opacity: 0,
          x: -200,
          y: Math.cos(index * 0.5) * 60,
          rotation: gsap.utils.random(-20, 20),
          scale: 0.3,
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top bottom-=100",
            end: "bottom top+=100",
            scrub: 1.5,
          },
        },
        delay,
      );
    });

    // Floating breeze effect on FEATURED after arrival
    title1.chars.forEach((char, index) => {
      gsap.to(char, {
        y: Math.sin(index * 0.4) * 8,
        rotation: Math.sin(index * 0.3) * 3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=100",
          end: "bottom top+=100",
          scrub: 1,
        },
      });
    });

    // Floating breeze effect on PROJECTS after arrival
    title2.chars.forEach((char, index) => {
      gsap.to(char, {
        y: Math.cos(index * 0.4) * 6,
        rotation: Math.cos(index * 0.3) * 2,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=100",
          end: "bottom top+=100",
          scrub: 1,
        },
      });
    });

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

export default TextAnimation11;