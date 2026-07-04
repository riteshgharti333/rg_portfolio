"use client"

import { FiArrowRight, FiDownload, FiPlay, FiSend, FiShoppingCart, FiHeart, FiShare2, FiPlus, FiExternalLink, FiMail, FiStar, FiZap, FiCommand, FiAnchor, FiTarget, FiCompass, FiEye, FiHexagon, FiGrid, FiCrop, FiSun, FiMoon, FiCloud, FiDroplet, FiCamera, FiDisc, FiGlobe, FiHash, FiKey, FiLoader, FiShield, FiClock, FiMapPin, FiVolume2, FiWifi, FiTrendingUp, FiLock, FiUnlock, FiUsers, FiAward } from "react-icons/fi"
import { motion } from "framer-motion"

const Buttons4 = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-32">

        {/* 1. Horizontal Scan Line */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.15em] overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Scan line moves top to bottom */}
            <span className="absolute top-0 left-0 w-full h-[3px] bg-[#e02020] group-hover:top-full transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] shadow-[0_0_20px_rgba(224,32,32,0.8)]" />
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white/50" />
            <span className="relative z-10 flex items-center gap-3 text-white">
              <FiWifi className="text-lg group-hover:scale-110 transition-transform duration-300" />
              SCAN LINE
            </span>
          </button>
        </motion.div>

        {/* 2. Expanding Rings / Radar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.2em] overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border-2 border-[#1a3fa8]" />
            {/* Radar rings expanding from center */}
            <span className="absolute top-1/2 left-1/2 w-0 h-0 border-2 border-[#e02020] -translate-x-1/2 -translate-y-1/2 group-hover:w-[60px] group-hover:h-[60px] group-hover:opacity-0 transition-all duration-600 ease-out" />
            <span className="absolute top-1/2 left-1/2 w-0 h-0 border-2 border-[#e02020] -translate-x-1/2 -translate-y-1/2 group-hover:w-[120px] group-hover:h-[120px] group-hover:opacity-0 transition-all duration-600 ease-out delay-150" />
            <span className="absolute top-1/2 left-1/2 w-0 h-0 border-2 border-[#e02020] -translate-x-1/2 -translate-y-1/2 group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-0 transition-all duration-600 ease-out delay-300" />
            <span className="relative z-10 flex items-center gap-3 text-white group-hover:text-[#e02020] transition-colors duration-300 delay-400">
              <FiMapPin className="text-lg group-hover:animate-bounce transition-transform" />
              RADAR PULSE
            </span>
          </button>
        </motion.div>

        {/* 3. Edge Light Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.25em] overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Light particle circling the border */}
            <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              style={{
                animation: 'none',
              }}
            />
            <span className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500" />
            <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-700" />
            {/* Glowing dot traveling border */}
            <span className="absolute top-0 left-0 w-3 h-3 bg-[#e02020] shadow-[0_0_10px_#e02020,0_0_20px_#e02020] opacity-0 group-hover:opacity-100 group-hover:animate-[travel_2s_linear_infinite] transition-opacity" />
            <span className="relative z-10 flex items-center gap-3 text-white">
              <FiTrendingUp className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
              EDGE FLOW
            </span>
          </button>
          <style jsx>{`
            @keyframes travel {
              0% { top: 0; left: 0; }
              25% { top: 0; left: calc(100% - 12px); }
              50% { top: calc(100% - 12px); left: calc(100% - 12px); }
              75% { top: calc(100% - 12px); left: 0; }
              100% { top: 0; left: 0; }
            }
          `}</style>
        </motion.div>

        {/* 4. Letter Spacing Explosion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-10 py-5 font-bold text-sm uppercase tracking-[0.1em] overflow-hidden">
            <span className="absolute inset-0 bg-[#e02020]" />
            <span className="absolute inset-0 bg-[#1a3fa8] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
            <span className="relative z-10 flex items-center gap-3 text-white group-hover:tracking-[0.5em] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
              <FiVolume2 className="text-lg group-hover:scale-150 transition-transform duration-400" />
              EXPLODE SPACING
            </span>
          </button>
        </motion.div>

        {/* 5. Diagonal Slice Fill */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.15em] overflow-hidden">
            <span className="absolute inset-0 bg-white" />
            {/* Diagonal slices filling */}
            <span className="absolute top-0 left-0 w-full h-full bg-[#e02020] [clip-path:polygon(0%_0%,_0%_0%,_0%_100%,_0%_100%)] group-hover:[clip-path:polygon(0%_0%,_50%_0%,_0%_100%,_0%_100%)] transition-all duration-500 ease-out" />
            <span className="absolute top-0 left-0 w-full h-full bg-[#1a3fa8] [clip-path:polygon(100%_100%,_100%_100%,_100%_0%,_100%_0%)] group-hover:[clip-path:polygon(100%_100%,_50%_0%,_100%_0%,_100%_100%)] transition-all duration-500 ease-out delay-100" />
            <span className="relative z-10 flex items-center gap-3 text-[#0a0a0a] group-hover:text-white transition-colors duration-300 delay-200">
              <FiClock className="text-lg group-hover:rotate-90 transition-transform duration-500" />
              DIAGONAL FILL
            </span>
          </button>
        </motion.div>

        {/* 6. Venetian Blinds */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.2em] overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border border-[#1a3fa8]" />
            {/* Horizontal blinds opening */}
            <span className="absolute inset-0 flex flex-col">
              {[...Array(8)].map((_, i) => (
                <span 
                  key={i}
                  className="w-full h-[12.5%] bg-[#e02020] scale-y-100 group-hover:scale-y-0 transition-transform duration-500 ease-out origin-top"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </span>
            <span className="relative z-10 flex items-center gap-3 text-white group-hover:text-[#0a0a0a] transition-colors duration-300 delay-400">
              <FiEye className="text-lg group-hover:scale-110 transition-transform duration-300" />
              VENETIAN BLIND
            </span>
          </button>
        </motion.div>

        {/* 7. Glitch Text Shuffle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.3em] overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            {/* Glitch bars */}
            <span className="absolute top-[20%] left-0 w-full h-[2px] bg-[#e02020] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-100" />
            <span className="absolute top-[40%] left-0 w-full h-[3px] bg-white opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-150 delay-50" />
            <span className="absolute top-[65%] left-0 w-full h-[2px] bg-[#e02020] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-100 delay-100" />
            <span className="absolute top-[80%] left-0 w-full h-[4px] bg-white opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 transition-all duration-200 delay-150" />
            {/* Color shift blocks */}
            <span className="absolute top-0 left-0 w-[30%] h-full bg-[#e02020] opacity-0 group-hover:opacity-80 -translate-x-full group-hover:translate-x-0 transition-all duration-300" />
            <span className="absolute top-0 right-0 w-[20%] h-full bg-white opacity-0 group-hover:opacity-60 translate-x-full group-hover:translate-x-0 transition-all duration-300 delay-100" />
            <span className="relative z-10 flex items-center gap-3 text-white group-hover:skew-x-2 transition-transform duration-200">
              <FiShield className="text-lg" />
              GLITCH TEXT
            </span>
          </button>
        </motion.div>

        {/* 8. Ink Drop Fill */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.15em] overflow-hidden">
            <span className="absolute inset-0 bg-white border border-[#1a3fa8]" />
            {/* Ink drop falls and spreads */}
            <span className="absolute top-0 left-1/2 w-4 h-4 bg-[#e02020] -translate-x-1/2 -translate-y-full group-hover:translate-y-0 group-hover:scale-[20] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
            {/* Secondary splash drops */}
            <span className="absolute top-[60%] left-[20%] w-2 h-2 bg-[#1a3fa8] rounded-none opacity-0 group-hover:opacity-100 group-hover:scale-[15] transition-all duration-500 ease-out delay-300" />
            <span className="absolute top-[40%] left-[70%] w-1 h-1 bg-[#e02020] rounded-none opacity-0 group-hover:opacity-100 group-hover:scale-[12] transition-all duration-500 ease-out delay-400" />
            <span className="relative z-10 flex items-center gap-3 text-[#0a0a0a] group-hover:text-white transition-colors duration-300 delay-500">
              <FiDroplet className="text-lg group-hover:scale-125 transition-transform duration-400" />
              INK DROP
            </span>
          </button>
        </motion.div>

        {/* 9. Lock to Unlock Transition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.2em] overflow-hidden">
            <span className="absolute inset-0 bg-[#e02020]" />
            {/* Padlock shackle morphs */}
            <span className="absolute top-2 left-1/2 w-8 h-6 border-2 border-white -translate-x-1/2 group-hover:translate-y-[-15px] group-hover:opacity-0 transition-all duration-500 ease-out" />
            {/* Lock body */}
            <span className="absolute top-4 left-1/2 w-8 h-6 bg-white -translate-x-1/2 group-hover:scale-x-0 transition-transform duration-400 ease-out delay-100" />
            {/* Unlock reveal background */}
            <span className="absolute inset-0 bg-[#1a3fa8] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out delay-200" />
            <span className="relative z-10 flex items-center gap-3 text-white">
              <span className="relative">
                <FiLock className="text-lg group-hover:opacity-0 transition-opacity duration-300 absolute" />
                <FiUnlock className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300" />
              </span>
              UNLOCK ACCESS
            </span>
          </button>
        </motion.div>

        {/* 10. Counter / Number Increment */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.25em] overflow-hidden">
            <span className="absolute inset-0 bg-[#0a0a0a] border-2 border-white/20 group-hover:border-[#e02020] transition-colors duration-300" />
            {/* Multiple thin vertical bars that fill sequentially like a counter */}
            <span className="absolute bottom-0 left-[10%] w-[4px] h-0 bg-[#e02020] group-hover:h-full transition-all duration-300 ease-out" />
            <span className="absolute bottom-0 left-[25%] w-[4px] h-0 bg-[#1a3fa8] group-hover:h-full transition-all duration-300 ease-out delay-50" />
            <span className="absolute bottom-0 left-[40%] w-[4px] h-0 bg-[#e02020] group-hover:h-full transition-all duration-300 ease-out delay-100" />
            <span className="absolute bottom-0 left-[55%] w-[4px] h-0 bg-[#1a3fa8] group-hover:h-full transition-all duration-300 ease-out delay-150" />
            <span className="absolute bottom-0 left-[70%] w-[4px] h-0 bg-[#e02020] group-hover:h-full transition-all duration-300 ease-out delay-200" />
            <span className="absolute bottom-0 left-[85%] w-[4px] h-0 bg-[#1a3fa8] group-hover:h-full transition-all duration-300 ease-out delay-250" />
            {/* Glowing number display */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#e02020] font-mono text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300">
              100%
            </span>
            <span className="relative z-10 flex items-center gap-3 text-white group-hover:text-[#e02020] transition-colors duration-300 delay-200">
              <FiUsers className="text-lg" />
              METER FILL
            </span>
          </button>
        </motion.div>

      </div>
    </div>
  )
}

export default Buttons4