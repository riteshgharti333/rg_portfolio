"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullStackRef = useRef<HTMLHeadingElement>(null);
  const developerRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const fullStack = fullStackRef.current;
    const developer = developerRef.current;
    const name = nameRef.current;
    if (!container) return;

    // ===== ENTRANCE ANIMATION — all from left, one by one =====
    const entranceTl = gsap.timeline();

    entranceTl.fromTo(
      fullStack,
      { x: "-100vw", opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );

    entranceTl.fromTo(
      name,
      { x: "-100vw", opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.6"
    );

    entranceTl.fromTo(
      developer,
      { x: "-100vw", opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.6"
    );

    // ===== SCROLL SETTLE =====
    const settleTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // FULL STACK → top center
    settleTl.to(
      fullStack,
      {
        top: "5%",
        left: "50%",
        xPercent: -50,
        fontSize: "clamp(3rem, 6vw, 5rem)",
        color: "rgba(255,255,255,0.8)",
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    // DEVELOPER → bottom center
    settleTl.to(
      developer,
      {
        bottom: "5%",
        right: "auto",
        left: "50%",
        xPercent: -50,
        fontSize: "clamp(3rem, 6vw, 5rem)",
        color: "rgba(255,255,255,0.8)",
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    // Name shrinks slightly
    settleTl.to(
      name,
      {
        scale: 0.7,
        y: -20,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    return () => {
      entranceTl.kill();
      settleTl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* ========== "FULL STACK" ========== */}
        <h1
          ref={fullStackRef}
          className="absolute text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold leading-none tracking-tighter whitespace-nowrap select-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(255,255,255,0.06)",
            letterSpacing: "-0.04em",
            top: "15%",
            left: "5%",
          }}
        >
          FULL STACK
        </h1>

        {/* ========== "DEVELOPER" ========== */}
        <h1
          ref={developerRef}
          className="absolute text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold leading-none tracking-tighter whitespace-nowrap select-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(255,255,255,0.06)",
            letterSpacing: "-0.04em",
            bottom: "15%",
            right: "5%",
          }}
        >
          DEVELOPER
        </h1>

        {/* ========== NAME ========== */}
        <h2
          ref={nameRef}
          className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold leading-none tracking-tighter text-center select-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "#FFFFFF",
            textShadow: "0 0 80px rgba(255,255,255,0.15)",
            letterSpacing: "-0.04em",
          }}
        >
          RITESH GHARTI
        </h2>

      </div>
    </section>
  );
};

export default HomeBanner;