// components/CornerBrackets.tsx
interface CornerBracketsProps {
  variant?: "default" | "small" | "swapped";
}

const CornerBrackets = ({ variant = "default" }: CornerBracketsProps) => {
  const variants = {
    default: {
      size: "w-4 h-4",
      padding: "top-3 left-3",
      hoverSize: "group-hover:w-15 group-hover:h-7",
      color1: "var(--primary)",
      color2: "var(--accent)",
    },
    small: {
      size: "w-3 h-3",
      padding: "top-2 left-2",
      hoverSize: "group-hover:w-12 group-hover:h-6",
      color1: "var(--primary)",
      color2: "var(--accent)",
    },
    swapped: {
      size: "w-4 h-4",
      padding: "top-3 left-3",
      hoverSize: "group-hover:w-15 group-hover:h-7",
      color1: "var(--accent)",
      color2: "var(--primary)",
    },
  };

  const config = variants[variant];

  return (
    <>
      <span 
        className={`absolute ${config.padding} ${config.size} border-t-2 border-l-2 transition-all duration-300 ${config.hoverSize}`}
        style={{ borderColor: config.color1 }}
      />
      <span 
        className={`absolute ${config.padding.replace('left', 'right')} ${config.size} border-t-2 border-r-2 transition-all duration-300 ${config.hoverSize}`}
        style={{ borderColor: config.color2 }}
      />
      <span 
        className={`absolute ${config.padding.replace('top', 'bottom').replace('left', 'left')} ${config.size} border-b-2 border-l-2 transition-all duration-300 ${config.hoverSize}`}
        style={{ borderColor: config.color2 }}
      />
      <span 
        className={`absolute ${config.padding.replace('top', 'bottom').replace('left', 'right')} ${config.size} border-b-2 border-r-2 transition-all duration-300 ${config.hoverSize}`}
        style={{ borderColor: config.color1 }}
      />
    </>
  );
};

export default CornerBrackets;