import { motion } from "framer-motion";

const PageHeading = ({
  subtitle = "Selected Works",
  line1 = "FEATURED",
  line2 = "PROJECTS",
}: {
  subtitle?: string;
  line1?: string;
  line2?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <span className="w-8 h-px bg-[var(--primary)]/30" />
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--muted-foreground)]">
          {subtitle}
        </span>
        <span className="w-8 h-px bg-[var(--accent)]/30" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-4 uppercase"
      >
        <span className="block text-[var(--primary)]">
          {line1}
        </span>
        <span
          className="block"
          style={{
            WebkitTextStroke: "2px var(--accent)",
            color: "transparent",
          }}
        >
          {line2}
        </span>
      </motion.h2>

      {/* Bottom accent */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="h-1 mx-auto bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
      />
    </motion.div>
  );
};

export default PageHeading;