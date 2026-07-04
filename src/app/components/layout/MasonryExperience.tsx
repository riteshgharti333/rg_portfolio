"use client";
import { useRef, useEffect } from "react";
import { experiences } from "@/constants/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MasonryExperience = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card, i) => {
      if (!card) return;

      // Floating animation
      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
          rotateX: i % 2 === 0 ? 15 : -15,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1.5,
          },
        }
      );

      // Parallax number
      const numberEl = card.querySelector(".exp-number");
      if (numberEl) {
        gsap.fromTo(
          numberEl,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
              end: "top center",
              scrub: 1,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          ref={(el) => {
            cardsRef.current[idx] = el;
          }}
          className={`relative mb-8 ${
            idx % 2 === 0
              ? "md:ml-0 md:mr-auto md:w-[65%]"
              : "md:ml-auto md:mr-0 md:w-[65%]"
          }`}
        >
          {/* Large background number */}
          <div
            className="exp-number absolute -top-5 text-[120px] font-black leading-none select-none pointer-events-none -z-10 hidden md:block"
            style={{
              color: "var(--primary)",
              opacity: 0.06,
              fontFamily: "Poppins, sans-serif",
              ...(idx % 2 === 0
                ? { right: "-200px" }
                : { left: "-200px" }),
            }}
          >
            {String(idx + 1).padStart(2, "0")}
          </div>

          {/* Main card */}
          <div className="relative z-10 border border-[var(--border)] bg-[var(--background)] transition-all duration-500 group/card hover:border-[var(--primary)] hover:shadow-[20px_20px_0px_var(--primary)]">
            {/* Top stripe */}
            <div className="flex h-2">
              <div className="w-1/3 bg-[var(--primary)]" />
              <div className="w-1/3 bg-[var(--accent)]" />
              <div className="w-1/3 bg-[var(--primary)]" />
            </div>

            <div className="p-3 md:p-7">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-black text-[var(--accent)] uppercase tracking-[0.02em] group-hover/card:text-[var(--primary)] transition-colors leading-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-4 h-[2px] bg-[var(--accent)]" />
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Duration pill */}
                <div className="relative">
                  <div className="px-4 py-2 bg-[var(--primary)]">
                    <span className="text-xs font-bold text-white uppercase tracking-[0.1em]">
                      {exp.duration}
                    </span>
                  </div>
                  {/* Corner triangle */}
                  <div className="absolute -bottom-1 right-0 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[var(--primary)]" />
                </div>
              </div>

              {/* Points with icon */}
              <div className="space-y-3 mt-5 pt-5 border-t border-[var(--border)]">
                {exp.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-[var(--foreground)]/75 leading-relaxed group/point"
                  >
                    {/* Custom bullet */}
                    <span className="mt-1 w-5 h-5 border border-[var(--accent)] flex items-center justify-center shrink-0 group-hover/point:bg-[var(--accent)] transition-colors duration-200">
                      <span className="w-1 h-1 bg-[var(--accent)] group-hover/point:bg-white transition-colors duration-200" />
                    </span>
                    <span>
                      {point.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <span
                            key={j}
                            className="font-bold text-[var(--primary)]"
                          >
                            {part.replace(/\*\*/g, "")}
                          </span>
                        ) : (
                          <span key={j}>{part}</span>
                        ),
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryExperience;