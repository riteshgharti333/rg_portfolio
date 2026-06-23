"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation20 = () => {
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

    // FEATURED - Fast drop with tilt, domino cascade
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        y: -250,
        rotate: -40,
        scale: 0.6,
        filter: "blur(5px)",
        transformOrigin: "bottom center",
      },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.4,
        stagger: {
          each: 0.05,
          from: "start",
        },
        ease: "power3.in",
      },
      0,
    );

    // Impact wobble - tilt overshoot then correct
    tl.to(
      title1.chars,
      {
        rotate: 12,
        y: 4,
        duration: 0.1,
        ease: "power2.out",
      },
      0.3,
    );

    tl.to(
      title1.chars,
      {
        rotate: -6,
        y: -2,
        duration: 0.08,
        ease: "power2.inOut",
      },
      0.4,
    );

    tl.to(
      title1.chars,
      {
        rotate: 3,
        y: 1,
        duration: 0.06,
        ease: "power2.inOut",
      },
      0.48,
    );

    tl.to(
      title1.chars,
      {
        rotate: 0,
        y: 0,
        duration: 0.1,
        ease: "elastic.out(1, 0.5)",
      },
      0.54,
    );

    // PROJECTS - Faster tilt from opposite side
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        y: -280,
        rotate: 35,
        scale: 0.5,
        filter: "blur(6px)",
        transformOrigin: "bottom center",
      },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.35,
        stagger: {
          each: 0.04,
          from: "start",
        },
        ease: "power3.in",
      },
      0.35,
    );

    // Harder impact with more wobble
    tl.to(
      title2.chars,
      {
        rotate: -15,
        y: 6,
        scaleX: 1.1,
        scaleY: 0.9,
        duration: 0.12,
        ease: "power2.out",
      },
      0.6,
    );

    tl.to(
      title2.chars,
      {
        rotate: 8,
        y: -3,
        scaleX: 0.9,
        scaleY: 1.1,
        duration: 0.1,
        ease: "power2.inOut",
      },
      0.72,
    );

    tl.to(
      title2.chars,
      {
        rotate: -4,
        y: 2,
        scaleX: 1.05,
        scaleY: 0.95,
        duration: 0.08,
        ease: "power2.inOut",
      },
      0.82,
    );

    tl.to(
      title2.chars,
      {
        rotate: 2,
        y: -1,
        scaleX: 0.98,
        scaleY: 1.02,
        duration: 0.06,
        ease: "power2.inOut",
      },
      0.9,
    );

    tl.to(
      title2.chars,
      {
        rotate: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 0.12,
        ease: "elastic.out(1, 0.4)",
      },
      0.96,
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

export default TextAnimation20;
