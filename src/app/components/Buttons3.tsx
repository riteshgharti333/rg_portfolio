"use client"

import { FiArrowRight, FiDownload, FiPlay, FiSend, FiShoppingCart, FiHeart, FiShare2, FiPlus, FiExternalLink, FiMail, FiStar, FiZap, FiCommand, FiAnchor, FiTarget, FiCompass, FiEye, FiHexagon, FiGrid, FiCrop, FiSun, FiMoon, FiCloud, FiDroplet, FiCamera, FiDisc, FiGlobe, FiHash, FiKey, FiLoader } from "react-icons/fi"
import { motion } from "framer-motion"

const Buttons3 = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-32">

        {/* 1. Staggered Bars Fill Up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border border-white/20" />
            {/* 5 bars filling from bottom with stagger */}
            <span className="absolute bottom-0 left-0 w-[20%] h-0 bg-[#e02020] group-hover:h-full transition-all duration-400 ease-out" />
            <span className="absolute bottom-0 left-[20%] w-[20%] h-0 bg-[#1a3fa8] group-hover:h-full transition-all duration-400 ease-out delay-50" />
            <span className="absolute bottom-0 left-[40%] w-[20%] h-0 bg-[#e02020] group-hover:h-full transition-all duration-400 ease-out delay-100" />
            <span className="absolute bottom-0 left-[60%] w-[20%] h-0 bg-[#1a3fa8] group-hover:h-full transition-all duration-400 ease-out delay-150" />
            <span className="absolute bottom-0 left-[80%] w-[20%] h-0 bg-[#e02020] group-hover:h-full transition-all duration-400 ease-out delay-200" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#0a0a0a] transition-colors duration-300 delay-300">
              <FiSun className="text-lg group-hover:rotate-90 transition-transform duration-500" />
              STAGGER BARS
            </span>
          </button>
        </motion.div>

        {/* 2. Ink Bleed / Blot Spread */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.25em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Multiple blobs that scale up like ink */}
            <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#e02020] group-hover:w-[80px] group-hover:h-[80px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out" />
            <span className="absolute top-[30%] left-[20%] w-0 h-0 bg-[#e02020]/80 group-hover:w-[60px] group-hover:h-[60px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out delay-75" />
            <span className="absolute top-[70%] left-[80%] w-0 h-0 bg-[#e02020]/60 group-hover:w-[70px] group-hover:h-[70px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out delay-150" />
            <span className="absolute top-[20%] left-[70%] w-0 h-0 bg-white/30 group-hover:w-[40px] group-hover:h-[40px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out delay-200" />
            <span className="absolute top-[60%] left-[30%] w-0 h-0 bg-white/20 group-hover:w-[50px] group-hover:h-[50px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out delay-250" />
            <span className="relative z-10 flex items-center gap-3">
              <FiDroplet className="text-lg group-hover:scale-125 transition-transform duration-400" />
              INK BLEED
            </span>
          </button>
        </motion.div>

        {/* 3. Zigzag Border Draw */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.15em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a]" />
            {/* Zigzag border drawn via clip-path */}
            <span className="absolute inset-0 bg-[#e02020] [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%,_0%_0%,_10%_0%,_15%_10%,_20%_0%,_25%_10%,_30%_0%,_35%_10%,_40%_0%,_45%_10%,_50%_0%,_55%_10%,_60%_0%,_65%_10%,_70%_0%,_75%_10%,_80%_0%,_85%_10%,_90%_0%,_100%_0%)] group-hover:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] transition-all duration-500 ease-out" />
            <span className="absolute inset-[2px] bg-[#0a0a0a]" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300">
              <FiLoader className="text-lg group-hover:rotate-180 transition-transform duration-600" />
              ZIGZAG EDGE
            </span>
          </button>
        </motion.div>

        {/* 4. Spinning Border Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Rotating dashed border */}
            <span className="absolute -inset-[3px] border-[3px] border-dashed border-[#e02020] group-hover:rotate-180 transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="absolute inset-0 bg-[#1a3fa8] group-hover:bg-[#e02020] transition-colors duration-400" />
            <span className="relative z-10 flex items-center gap-3">
              <FiCamera className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
              SPIN FRAME
            </span>
          </button>
        </motion.div>

        {/* 5. Checkerboard Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.3em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border-2 border-[#1a3fa8]" />
            {/* Checkerboard pattern that fades in */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #e02020 25%, transparent 25%),
                  linear-gradient(-45deg, #e02020 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #1a3fa8 75%),
                  linear-gradient(-45deg, transparent 75%, #1a3fa8 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}
            />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300">
              <FiGrid className="text-lg" />
              CHECKERBOARD
            </span>
          </button>
        </motion.div>

        {/* 6. Elastic Stretch */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-10 py-5 font-bold text-sm uppercase tracking-[0.15em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#e02020]" />
            {/* Left and right sides stretch apart */}
            <span className="absolute left-0 top-0 w-[10%] h-full bg-[#1a3fa8] group-hover:w-[5%] transition-all duration-400 ease-out" />
            <span className="absolute right-0 top-0 w-[10%] h-full bg-[#1a3fa8] group-hover:w-[5%] transition-all duration-400 ease-out" />
            {/* Middle band stretches horizontally */}
            <span className="absolute left-[10%] top-0 w-[80%] h-full bg-[#e02020] group-hover:scale-x-110 transition-transform duration-400 ease-out" />
            <span className="relative z-10 flex items-center gap-3 group-hover:tracking-[0.3em] transition-all duration-400">
              <FiDisc className="text-lg group-hover:rotate-180 transition-transform duration-500" />
              ELASTIC
            </span>
          </button>
        </motion.div>

        {/* 7. Split Horizontal Curtains */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-white" />
            {/* Top curtain slides up */}
            <span className="absolute top-0 left-0 w-full h-1/2 bg-[#1a3fa8] group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]" />
            {/* Bottom curtain slides down */}
            <span className="absolute bottom-0 left-0 w-full h-1/2 bg-[#e02020] group-hover:translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]" />
            {/* Center line */}
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#0a0a0a] -translate-y-1/2 group-hover:scale-x-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-3 text-[#0a0a0a] group-hover:text-white transition-colors duration-300 delay-200">
              <FiCloud className="text-lg group-hover:-translate-y-2 transition-transform duration-400" />
              CURTAINS
            </span>
          </button>
        </motion.div>

        {/* 8. Morse Code Dots */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.25em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border border-white/20 group-hover:border-[#e02020] transition-colors duration-300" />
            {/* Morse code pattern of dots */}
            <span className="absolute top-[25%] left-[15%] w-[6px] h-[6px] bg-[#e02020] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-0" />
            <span className="absolute top-[25%] left-[25%] w-[6px] h-[6px] bg-[#e02020] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100" />
            <span className="absolute top-[25%] left-[35%] w-[6px] h-[6px] bg-[#e02020] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200" />
            <span className="absolute top-[25%] left-[50%] w-[14px] h-[6px] bg-[#1a3fa8] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300" />
            <span className="absolute top-[25%] left-[70%] w-[6px] h-[6px] bg-[#e02020] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-400" />
            
            <span className="absolute top-[65%] left-[20%] w-[14px] h-[6px] bg-[#1a3fa8] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150" />
            <span className="absolute top-[65%] left-[40%] w-[6px] h-[6px] bg-[#e02020] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-250" />
            <span className="absolute top-[65%] left-[55%] w-[14px] h-[6px] bg-[#1a3fa8] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-350" />
            <span className="absolute top-[65%] left-[75%] w-[6px] h-[6px] bg-[#e02020] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-450" />
            
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300">
              <FiHash className="text-lg" />
              MORSE CODE
            </span>
          </button>
        </motion.div>

        {/* 9. Prism / Light Refraction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.15em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a]" />
            {/* White light splits into red and blue */}
            <span className="absolute top-0 left-0 w-0 h-full bg-white group-hover:w-full transition-all duration-400 ease-out" />
            <span className="absolute top-0 right-0 w-0 h-full bg-[#e02020] group-hover:w-[40%] transition-all duration-400 ease-out delay-100" />
            <span className="absolute bottom-0 right-0 w-0 h-[60%] bg-[#1a3fa8] group-hover:w-[60%] transition-all duration-400 ease-out delay-200" />
            {/* Prism triangle */}
            <span className="absolute top-1/2 left-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-white/20 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#0a0a0a] transition-colors duration-300 delay-300">
              <FiSun className="text-lg group-hover:text-[#e02020] transition-colors duration-300" />
              LIGHT PRISM
            </span>
          </button>
        </motion.div>

        {/* 10. Overlapping Fold Strips */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Multiple diagonal strips folding over */}
            <span className="absolute top-0 left-0 w-full h-full bg-[#e02020] [clip-path:polygon(0%_0%,_30%_0%,_0%_100%)] group-hover:[clip-path:polygon(0%_0%,_100%_0%,_0%_100%)] transition-all duration-500 ease-out" />
            <span className="absolute top-0 left-0 w-full h-full bg-white [clip-path:polygon(100%_0%,_100%_70%,_70%_100%)] group-hover:[clip-path:polygon(100%_0%,_100%_100%,_0%_100%)] transition-all duration-500 ease-out delay-75" />
            <span className="absolute top-0 left-0 w-full h-full bg-[#1a3fa8] [clip-path:polygon(0%_100%,_30%_0%,_100%_100%)] group-hover:[clip-path:polygon(0%_100%,_0%_0%,_100%_100%)] transition-all duration-500 ease-out delay-150" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300 delay-300">
              <FiKey className="text-lg group-hover:rotate-45 transition-transform duration-400" />
              FOLD STRIPS
            </span>
          </button>
        </motion.div>

      </div>
    </div>
  )
}

export default Buttons3