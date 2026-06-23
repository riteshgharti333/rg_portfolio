"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation16 = () => {
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

    // FEATURED - Droplet ripples expanding outward
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        scale: 0,
        y: (index) => Math.abs(index - 3.5) * 30,
        x: (index) => (index - 3.5) * 40,
        rotate: (index) => (index - 3.5) * 15,
        filter: "blur(10px)",
        transformOrigin: "center center",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        rotate: 0,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: {
          each: 0.08,
          from: "center",
        },
        ease: "power2.out",
      },
      0,
    );

    // Ripple bounce - characters pulse outward then settle
    tl.to(
      title1.chars,
      {
        scale: 1.1,
        y: (index) => Math.abs(index - 3.5) * 8,
        duration: 0.3,
        ease: "sine.out",
      },
      0.6,
    );

    tl.to(
      title1.chars,
      {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      },
      0.9,
    );

    // PROJECTS - Stone skipping across water
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        y: (index) => Math.sin(index * 0.9) * 60,
        x: (index) => -Math.cos(index * 0.9) * 80,
        scale: 0,
        rotate: (index) => index * 30,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: {
          each: 0.07,
          from: "start",
        },
        ease: "power4.out",
      },
      0.5,
    );

    // Skip bounce - each char bounces at different height
    tl.to(
      title2.chars,
      {
        y: (index) => Math.sin(index * 0.6) * -15,
        scale: (index) => 1 - Math.abs(Math.sin(index * 0.6)) * 0.1,
        duration: 0.5,
        stagger: {
          each: 0.04,
          from: "start",
        },
        ease: "sine.inOut",
      },
      1.0,
    );

    tl.to(
      title2.chars,
      {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
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

export default TextAnimation16;