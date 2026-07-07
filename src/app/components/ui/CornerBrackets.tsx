// components/CornerBrackets.tsx
interface CornerBracketsProps {
  variant?: "default" | "small" | "swapped";
}

const CornerBrackets = ({ variant = "default" }: CornerBracketsProps) => {
  const variants = {
    default: {
      size: "w-4 h-4",
      topPadding: "top-3",
      leftPadding: "left-3",
      rightPadding: "right-3",
      bottomPadding: "bottom-3",
      hoverSize: "group-hover:w-15 group-hover:h-7",
      color1: "var(--primary)",
      color2: "var(--accent)",
    },
    small: {
      size: "w-3 h-3",
      topPadding: "top-2",
      leftPadding: "left-2",
      rightPadding: "right-2",
      bottomPadding: "bottom-2",
      hoverSize: "group-hover:w-12 group-hover:h-6",
      color1: "var(--primary)",
      color2: "var(--accent)",
    },
    swapped: {
      size: "w-4 h-4",
      topPadding: "top-3",
      leftPadding: "left-3",
      rightPadding: "right-3",
      bottomPadding: "bottom-3",
      hoverSize: "group-hover:w-15 group-hover:h-7",
      color1: "var(--accent)",
      color2: "var(--primary)",
    },
  };

  const config = variants[variant];

  return (
    <>
      {/* Top Left */}
      <span
        className={`absolute ${config.topPadding} ${config.leftPadding} ${config.size} border-t-2 border-l-2 transition-all duration-300 ${config.hoverSize}`}
        style={{ borderColor: config.color1 }}
      />

      {/* Top Right */}
      <span
        className={`absolute ${config.topPadding} ${config.rightPadding} ${config.size} border-t-2 border-r-2 transition-all duration-300 ${config.hoverSize}`}
        style={{ borderColor: config.color2 }}
      />

      {/* Bottom Left */}
      <span
        className={`absolute ${config.bottomPadding} ${config.leftPadding} ${config.size} border-b-2 border-l-2 transition-all duration-300 ${config.hoverSize}`}
        style={{ borderColor: config.color2 }}
      />

      {/* Bottom Right */}
      <span
        className={`absolute ${config.bottomPadding} ${config.rightPadding} ${config.size} border-b-2 border-r-2 transition-all duration-300 ${config.hoverSize}`}
        style={{ borderColor: config.color1 }}
      />
    </>
  );
};

export default CornerBrackets;
