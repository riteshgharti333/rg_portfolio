"use client"

import { FiArrowRight, FiDownload, FiPlay, FiSend, FiShoppingCart, FiHeart, FiShare2, FiPlus, FiExternalLink, FiMail, FiStar, FiZap, FiCommand, FiAnchor, FiTarget, FiCompass, FiEye, FiHexagon, FiGrid, FiCrop } from "react-icons/fi"
import Link from "next/link"
import { motion } from "framer-motion"

const Buttons2 = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-32">

        {/* 1. Pixel Shift / Glitch Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white">
            {/* Shadow blocks that shift on hover */}
            <span className="absolute inset-0 bg-[#1a3fa8] translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-200" />
            <span className="absolute inset-0 bg-[#e02020] translate-x-1 translate-y-1 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200 delay-50" />
            <span className="absolute inset-0 bg-white" />
            <span className="relative z-10 flex items-center gap-3 text-[#0a0a0a] group-hover:text-[#e02020] transition-colors duration-200">
              <FiZap className="text-lg group-hover:translate-x-1 transition-transform duration-200" />
              PIXEL SHIFT
            </span>
          </button>
        </motion.div>

        {/* 2. Top & Bottom Bar Compression */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.25em] text-white overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[3px] bg-[#e02020] group-hover:h-full transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1a3fa8] group-hover:h-full transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 flex items-center gap-3">
              <FiCommand className="text-lg group-hover:rotate-180 transition-transform duration-500" />
              COMPRESS
            </span>
          </button>
        </motion.div>

        {/* 3. Spinning Diagonal Slash */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.15em] text-[#e02020] overflow-hidden">
            <span className="absolute inset-0 border-2 border-[#1a3fa8]" />
            {/* Diagonal line that rotates */}
            <span className="absolute top-1/2 left-1/2 w-[200%] h-[2px] bg-[#e02020] -translate-x-1/2 -translate-y-1/2 rotate-[-30deg] group-hover:rotate-[30deg] transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="absolute top-1/2 left-1/2 w-[200%] h-[2px] bg-[#1a3fa8] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] group-hover:rotate-[-30deg] transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 flex items-center gap-3 bg-[#0a0a0a] px-4 py-2 group-hover:text-white transition-colors duration-300">
              <FiTarget className="text-lg" />
              DIAGONAL
            </span>
          </button>
        </motion.div>

        {/* 4. Typewriter Cursor Expand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-10 py-5 font-bold text-sm uppercase tracking-[0.15em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Cursor block that expands */}
            <span className="absolute right-0 top-0 w-[3px] h-full bg-[#e02020] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 flex items-center gap-3">
              <span className="inline-block w-2 h-5 bg-white animate-pulse group-hover:bg-[#1a3fa8] transition-colors duration-300" />
              TYPEWRITER
              <FiArrowRight className="text-lg group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>

        {/* 5. Expanding Corner Triangles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border border-white/20" />
            {/* Corner triangles that grow */}
            <span className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-[#e02020] border-r-[20px] border-r-transparent group-hover:border-t-[60px] group-hover:border-r-[60px] transition-all duration-400 ease-out" />
            <span className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-[#1a3fa8] border-l-[20px] border-l-transparent group-hover:border-t-[60px] group-hover:border-l-[60px] transition-all duration-400 ease-out" />
            <span className="absolute bottom-0 left-0 w-0 h-0 border-b-[20px] border-b-[#1a3fa8] border-r-[20px] border-r-transparent group-hover:border-b-[60px] group-hover:border-r-[60px] transition-all duration-400 ease-out" />
            <span className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-[#e02020] border-l-[20px] border-l-transparent group-hover:border-b-[60px] group-hover:border-l-[60px] transition-all duration-400 ease-out" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300">
              <FiHexagon className="text-lg group-hover:rotate-90 transition-transform duration-500" />
              TRIANGLES
            </span>
          </button>
        </motion.div>

        {/* 6. 3D Flip Book */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.25em] text-white overflow-visible">
            {/* Base layer */}
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Multiple flipping layers */}
            <span className="absolute inset-0 bg-[#e02020] origin-bottom group-hover:[transform:rotateX(-90deg)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="absolute inset-0 bg-white origin-top [transform:rotateX(90deg)] group-hover:[transform:rotateX(0deg)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#0a0a0a] transition-colors duration-300 delay-200">
              <FiEye className="text-lg" />
              FLIP BOOK
            </span>
          </button>
        </motion.div>

        {/* 7. Magnetic Corners Attract */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.15em] text-white overflow-hidden">
            <span className="absolute inset-0 border-2 border-transparent" />
            {/* Four L-shaped corners that move inward */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#e02020] group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-400 ease-out" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#1a3fa8] group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-400 ease-out" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#1a3fa8] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-400 ease-out" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#e02020] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-400 ease-out" />
            {/* Center fills on hover */}
            <span className="absolute inset-0 bg-[#e02020] scale-0 group-hover:scale-100 transition-transform duration-400 ease-out origin-center" />
            <span className="relative z-10 flex items-center gap-3">
              <FiCompass className="text-lg group-hover:rotate-[360deg] transition-transform duration-700" />
              MAGNETIC
            </span>
          </button>
        </motion.div>

        {/* 8. Static Noise / Dot Grid Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.3em] text-white overflow-hidden">
            {/* Background grid of tiny dots */}
            <span className="absolute inset-0 bg-[radial-gradient(circle,_#1a3fa8_1px,_transparent_1px)] bg-[size:8px_8px] opacity-30 group-hover:opacity-0 transition-opacity duration-400" />
            <span className="absolute inset-0 bg-[radial-gradient(circle,_#e02020_1px,_transparent_1px)] bg-[size:4px_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <span className="absolute inset-0 border border-[#1a3fa8]/50" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300">
              <FiGrid className="text-lg" />
              DOT MATRIX
            </span>
          </button>
        </motion.div>

        {/* 9. Vertical Slice Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.15em] overflow-hidden">
            <span className="absolute inset-0 bg-white" />
            {/* Multiple vertical slices */}
            <span className="absolute left-0 top-0 w-[12.5%] h-full bg-[#e02020] group-hover:h-0 transition-all duration-400 ease-out" />
            <span className="absolute left-[12.5%] top-0 w-[12.5%] h-full bg-[#1a3fa8] group-hover:h-0 transition-all duration-400 ease-out delay-50" />
            <span className="absolute left-[25%] top-0 w-[12.5%] h-full bg-[#e02020] group-hover:h-0 transition-all duration-400 ease-out delay-100" />
            <span className="absolute left-[37.5%] top-0 w-[12.5%] h-full bg-[#1a3fa8] group-hover:h-0 transition-all duration-400 ease-out delay-150" />
            <span className="absolute left-[50%] top-0 w-[12.5%] h-full bg-[#e02020] group-hover:h-0 transition-all duration-400 ease-out delay-200" />
            <span className="absolute left-[62.5%] top-0 w-[12.5%] h-full bg-[#1a3fa8] group-hover:h-0 transition-all duration-400 ease-out delay-250" />
            <span className="absolute left-[75%] top-0 w-[12.5%] h-full bg-[#e02020] group-hover:h-0 transition-all duration-400 ease-out delay-300" />
            <span className="absolute left-[87.5%] top-0 w-[12.5%] h-full bg-[#1a3fa8] group-hover:h-0 transition-all duration-400 ease-out delay-350" />
            <span className="relative z-10 flex items-center gap-3 text-[#0a0a0a] group-hover:text-[#e02020] transition-colors duration-300 delay-500">
              <FiCrop className="text-lg" />
              SLICE REVEAL
            </span>
          </button>
        </motion.div>

        {/* 10. Radial Sweep Clock */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border border-[#1a3fa8]" />
            {/* Radial sweep that fills like a clock */}
            <span className="absolute top-0 left-0 w-full h-full bg-[#e02020] [clip-path:polygon(50%_50%,_50%_0%,_50%_0%,_50%_0%,_50%_0%,_50%_0%,_50%_0%,_50%_0%)] group-hover:[clip-path:polygon(50%_50%,_50%_0%,_100%_0%,_100%_100%,_0%_100%,_0%_0%,_50%_0%,_50%_0%)] transition-all duration-700 ease-out" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#0a0a0a] transition-colors duration-300 delay-300">
              <FiStar className="text-lg group-hover:rotate-180 group-hover:scale-125 transition-all duration-500" />
              RADIAL SWEEP
            </span>
          </button>
        </motion.div>

        {/* 11. Cascading Dots Fill */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.25em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Bubbles/dots that rise and fill */}
            <span className="absolute bottom-0 left-[10%] w-3 h-3 bg-[#e02020] group-hover:translate-y-[-100px] group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
            <span className="absolute bottom-0 left-[30%] w-2 h-2 bg-white group-hover:translate-y-[-120px] group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75" />
            <span className="absolute bottom-0 left-[50%] w-4 h-4 bg-[#e02020] group-hover:translate-y-[-80px] group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-150" />
            <span className="absolute bottom-0 left-[70%] w-2 h-2 bg-white group-hover:translate-y-[-140px] group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-200" />
            <span className="absolute bottom-0 left-[90%] w-3 h-3 bg-[#e02020] group-hover:translate-y-[-90px] group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-250" />
            <span className="relative z-10 flex items-center gap-3">
              <FiPlus className="text-lg group-hover:rotate-45 transition-transform duration-400" />
              BUBBLE FILL
            </span>
          </button>
        </motion.div>

        {/* 12. Skew Stripe Pass */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.15em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border-2 border-white/20 group-hover:border-[#e02020] transition-colors duration-300" />
            {/* Diagonal stripes that slide across */}
            <span className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,_#e02020_0px,_#e02020_2px,_transparent_2px,_transparent_10px)] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(-45deg,_#1a3fa8_0px,_#1a3fa8_2px,_transparent_2px,_transparent_10px)] translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300">
              <FiAnchor className="text-lg group-hover:translate-y-1 transition-transform duration-300" />
              STRIPE PASS
            </span>
          </button>
        </motion.div>

      </div>
    </div>
  )
}

export default Buttons2