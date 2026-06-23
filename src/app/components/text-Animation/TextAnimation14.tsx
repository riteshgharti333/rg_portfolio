"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation14 = () => {
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

    // FEATURED - Portal open (expand from singularity)
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
        rotateX: 180,
        rotateY: 180,
        filter: "blur(20px) brightness(3) contrast(2)",
        transformOrigin: "center center",
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        filter: "blur(0px) brightness(1) contrast(1)",
        duration: 0.8,
        stagger: {
          each: 0.08,
          from: "center",
        },
        ease: "power4.out",
      },
      0,
    );

    // Ring ripple outward on FEATURED
    tl.to(
      title1.chars,
      {
        scale: 1.2,
        filter: "blur(2px) brightness(1.5)",
        duration: 0.2,
        ease: "power3.out",
      },
      0.6,
    );

    tl.to(
      title1.chars,
      {
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 0.3,
        ease: "power2.inOut",
      },
      0.8,
    );

    // PROJECTS - Fade in from different dimension
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        scale: 2,
        rotateX: -180,
        rotateY: (index) => (index % 2 === 0 ? 90 : -90),
        rotateZ: (index) => gsap.utils.random(-45, 45),
        filter: "blur(15px) hue-rotate(180deg) brightness(0)",
        transformOrigin: "center center",
      },
      {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        filter: "blur(0px) hue-rotate(0deg) brightness(1)",
        duration: 0.7,
        stagger: {
          each: 0.06,
          from: "random",
        },
        ease: "back.out(1.5)",
      },
      0.5,
    );

    // Energy pulse on PROJECTS after arrival
    tl.to(
      title2.chars,
      {
        filter: "blur(3px) brightness(1.8)",
        duration: 0.15,
        ease: "power4.in",
      },
      1.0,
    );

    tl.to(
      title2.chars,
      {
        filter: "blur(0px) brightness(1)",
        duration: 0.25,
        ease: "power3.out",
      },
      1.15,
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

export default TextAnimation14;