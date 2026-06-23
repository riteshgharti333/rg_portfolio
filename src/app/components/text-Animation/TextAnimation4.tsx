"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const HomeBanner = () => {
  const fullStackRef = useRef<HTMLHeadingElement>(null);
  const developerRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fullStack = fullStackRef.current;
    const developer = developerRef.current;
    const name = nameRef.current;

    // Set initial states
    gsap.set(fullStack, { x: "-100vw", opacity: 0 });
    gsap.set(developer, { x: "100vw", opacity: 0 });
    gsap.set(name, { scale: 0, opacity: 0 });

    // Animate in sequence
    const tl = gsap.timeline();

    tl.to(fullStack, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    tl.to(
      developer,
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8",
    );

    // Name — scale up from center instead of two pieces colliding
    tl.to(
      name,
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.6",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* ========== "FULL STACK" - FROM LEFT ========== */}
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

      {/* ========== "DEVELOPER" - FROM RIGHT ========== */}
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

      {/* ========== NAME - SCALE UP ========== */}
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

    </section>
  );
};

export default HomeBanner;