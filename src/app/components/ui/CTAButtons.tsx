import { motion } from "framer-motion";

// Types
interface ButtonProps {
  href: string;
  icon: string | React.ReactNode;
  text: string;
  className?: string;
}

// 1. Venetian Blind Button
export const VenetianBlindButton: React.FC<ButtonProps> = ({ 
  href, 
  icon, 
  text, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <a
        href={href}
        className={`group relative inline-flex items-center px-6 py-3 font-bold text-xs uppercase tracking-[0.15em] overflow-hidden ${className}`}
      >
        <span className="absolute inset-0 bg-[#1a3fa8] border border-[#1a3fa8]" />
        {/* Horizontal blinds opening */}
        <span className="absolute inset-0 flex flex-col">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="w-full h-[16.66%] bg-[#e02020] scale-y-100 group-hover:scale-y-0 transition-transform duration-500 ease-out origin-top"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </span>
        <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-white transition-colors duration-300 delay-400">
          <span className="text-base group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
          {text}
        </span>
      </a>
    </motion.div>
  );
};

// 2. Magnetic Corner Button
export const MagneticCornerButton: React.FC<ButtonProps> = ({ 
  href, 
  icon, 
  text, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <a
        href={href}
        className={`group relative inline-flex items-center px-6 py-3 font-bold text-xs uppercase tracking-[0.12em] text-[#e02020] hover:text-white overflow-hidden ${className}`}
      >
        <span className="absolute inset-0 border-2 border-transparent" />
        {/* Four L-shaped corners that move inward */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#e02020] group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-400 ease-out" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#1a3fa8] group-hover:-translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-400 ease-out" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#1a3fa8] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-400 ease-out" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#e02020] group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-400 ease-out" />
        {/* Center fills on hover */}
        <span className="absolute inset-0 bg-[#e02020] scale-0 group-hover:scale-100 transition-transform duration-400 ease-out origin-center" />
        <span className="relative z-10 flex items-center gap-2">
          <span className="text-base group-hover:rotate-[360deg] transition-transform duration-700">
            {icon}
          </span>
          {text}
        </span>
      </a>
    </motion.div>
  );
};

// 3. Radial Sweep Button
export const RadialSweepButton: React.FC<ButtonProps> = ({ 
  href, 
  icon, 
  text, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <a
        href={href}
        className={`group relative inline-flex items-center px-6 py-3 font-bold text-xs uppercase tracking-[0.15em] text-white overflow-hidden ${className}`}
      >
        <span className="absolute inset-0 bg-[#1a3fa8] border border-[#1a3fa8]" />
        {/* Radial sweep that fills like a clock */}
        <span className="absolute top-0 left-0 w-full h-full bg-[#e02020] [clip-path:polygon(50%_50%,_50%_0%,_50%_0%,_50%_0%,_50%_0%,_50%_0%,_50%_0%,_50%_0%)] group-hover:[clip-path:polygon(50%_50%,_50%_0%,_100%_0%,_100%_100%,_0%_100%,_0%_0%,_50%_0%,_50%_0%)] transition-all duration-700 ease-out" />
        <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300 delay-300">
          <span className="text-base group-hover:rotate-180 group-hover:scale-125 transition-all duration-500">
            {icon}
          </span>
          {text}
        </span>
      </a>
    </motion.div>
  );
};

// 4. Combined CTA Buttons Component (default export)
const CTAButtons: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.55 }}
      className="flex flex-wrap items-center justify-center gap-3 mb-12"
    >
      <VenetianBlindButton 
        href="#contact" 
        icon="✉" 
        text="Contact Me" 
      />
      
      <MagneticCornerButton 
        href="#projects" 
        icon="◈" 
        text="View Projects" 
      />
      
      <RadialSweepButton 
        href="/ritesh_resume.pdf" 
        icon="↓" 
        text="Download Resume" 
      />
    </motion.div>
  );
};

export default CTAButtons;