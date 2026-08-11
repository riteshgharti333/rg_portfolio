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
    // Hide scrollbar
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

    // SEO - Page Title
    const originalTitle = document.title;
    document.title = "Ritesh Gharti | Full-Stack Developer - Portfolio";

    // SEO - Meta Description
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Full-stack developer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL. Building scalable web applications with modern technologies.";
    metaDesc.setAttribute("data-homepage-seo", "true");
    document.head.appendChild(metaDesc);

    // SEO - Meta Keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "full-stack developer, React, Next.js, TypeScript, Node.js, PostgreSQL, web development, portfolio";
    metaKeywords.setAttribute("data-homepage-seo", "true");
    document.head.appendChild(metaKeywords);

    // SEO - Open Graph
    const ogTags = [
      { property: "og:title", content: "Ritesh Gharti | Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack developer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
    ];

    ogTags.forEach(({ property, content }) => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", property);
      tag.setAttribute("content", content);
      tag.setAttribute("data-homepage-seo", "true");
      document.head.appendChild(tag);
    });

    // SEO - Twitter Card
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Ritesh Gharti | Full-Stack Developer",
      },
      {
        name: "twitter:description",
        content:
          "Full-stack developer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL.",
      },
    ];

    twitterTags.forEach(({ name, content }) => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", name);
      tag.setAttribute("content", content);
      tag.setAttribute("data-homepage-seo", "true");
      document.head.appendChild(tag);
    });

    return () => {
      // Remove scrollbar style
      const el = document.getElementById("homepage-scrollbar-hide");
      if (el) el.remove();

      // Restore original title
      document.title = originalTitle;

      // Remove all homepage SEO meta tags
      document
        .querySelectorAll('[data-homepage-seo="true"]')
        .forEach((tag) => tag.remove());
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