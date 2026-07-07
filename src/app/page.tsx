"use client";

import { useEffect } from "react";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import HomeBanner from "./components/home/HomeBanner";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import Services from "./components/home/Services";
import ScrollIndicator from "./components/ui/ScrollIndicator";

export default function Home() {
  useEffect(() => {
    // Inject style only for homepage
    const style = document.createElement("style");
    style.id = "homepage-scrollbar-hide";
    style.textContent = `
      html::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
        display: none !important;
      }
      html {
        scrollbar-width: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Remove when navigating away
      const el = document.getElementById("homepage-scrollbar-hide");
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="homepage-scrollbar-hide">
      <ScrollIndicator />
      <HomeBanner />
      <Projects />
      <Skills />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
