// components/layout/SmoothScroll.tsx
"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    // Prevent default scroll
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Set wrapper to fixed
    wrapper.style.position = "fixed";
    wrapper.style.top = "0";
    wrapper.style.left = "0";
    wrapper.style.width = "100%";
    wrapper.style.height = "100vh";

    // Create virtual scroll
    const virtualScroll = document.createElement("div");
    virtualScroll.style.position = "absolute";
    virtualScroll.style.top = "0";
    virtualScroll.style.left = "0";
    virtualScroll.style.width = "100%";
    virtualScroll.style.height = `${content.scrollHeight}px`;
    virtualScroll.style.opacity = "0";
    virtualScroll.style.pointerEvents = "none";
    document.body.appendChild(virtualScroll);

    // Smooth scroll animation
    const tl = gsap.to(content, {
      y: () => -(content.scrollHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: virtualScroll,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    // Handle resize
    const handleResize = () => {
      virtualScroll.style.height = `${content.scrollHeight}px`;
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      document.body.removeChild(virtualScroll);

      // Reset body styles
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div ref={wrapperRef}>
        <div ref={contentRef}>{children}</div>
      </div>
    </>
  );
}
