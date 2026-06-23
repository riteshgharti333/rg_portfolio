
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation10 = () => {
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

    // FEATURED - Characters assemble from scattered particles
    tl.fromTo(
      title1.chars,
      {
        opacity: 0,
        x: (index) => gsap.utils.random(-300, 300),
        y: (index) => gsap.utils.random(-200, 200),
        rotateX: () => gsap.utils.random(-180, 180),
        rotateY: () => gsap.utils.random(-180, 180),
        rotateZ: () => gsap.utils.random(-90, 90),
        scale: 0,
        filter: "blur(15px) grayscale(1)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        filter: "blur(0px) grayscale(0)",
        duration: 0.6,
        stagger: {
          each: 0.06,
          from: "random",
        },
        ease: "power4.out",
      },
      0,
    );

    // PROJECTS - Assemble with 3D depth flip
    tl.fromTo(
      title2.chars,
      {
        opacity: 0,
        scale: 0,
        rotateX: 180,
        rotateY: () => gsap.utils.random(-90, 90),
        z: -200,
        filter: "blur(10px) brightness(0)",
      },
      {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        z: 0,
        filter: "blur(0px) brightness(1)",
        duration: 0.7,
        stagger: {
          each: 0.05,
          from: "center",
        },
        ease: "back.out(2.5)",
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

export default TextAnimation10;