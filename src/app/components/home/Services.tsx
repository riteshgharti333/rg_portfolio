"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiLayout,
  FiZap,
  FiShield,
} from "react-icons/fi";
import CornerBrackets from "../ui/CornerBrackets";
import TextAnimation from "../TextAni/TextAnimation";

const servicesData = [
  {
    icon: FiCode,
    title: "Full Stack Development",
    description:
      "End-to-end web applications using MERN, Next.js, and PostgreSQL with scalable architecture.",
    color: "var(--primary)",
  },
  {
    icon: FiLayout,
    title: "Frontend Development",
    description:
      "Responsive, interactive UIs with React, Next.js, TypeScript, and Tailwind CSS.",
    color: "var(--accent)",
  },
  {
    icon: FiServer,
    title: "Backend APIs",
    description:
      "RESTful and GraphQL APIs with Node.js, Express, authentication, and authorization.",
    color: "var(--primary)",
  },
  {
    icon: FiDatabase,
    title: "Database Design",
    description:
      "Schema design, optimization, and management with MongoDB, PostgreSQL, and Prisma.",
    color: "var(--accent)",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description:
      "Speed optimization, lazy loading, caching, and performance monitoring for web apps.",
    color: "var(--primary)",
  },
  {
    icon: FiShield,
    title: "Security & Authentication",
    description:
      "JWT, OAuth, role-based access control, and secure API implementation.",
    color: "var(--accent)",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        {/* Section Header */}
        <TextAnimation subtitle="WHAT I DO" line1="MY" line2="SERVICES" />
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/5 p-8 relative">
                {/* Corner brackets */}
                <CornerBrackets
                  variant={index % 2 === 0 ? "default" : "swapped"}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 border border-[var(--border)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:scale-110"
                  style={{ color: service.color }}
                >
                  <service.icon className="text-2xl" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-black uppercase tracking-tight mb-3 transition-colors duration-300 group-hover:text-[var(--primary)]"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
