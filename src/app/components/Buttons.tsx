"use client"

import { FiArrowRight, FiDownload, FiPlay, FiSend, FiShoppingCart, FiHeart, FiShare2, FiPlus, FiExternalLink, FiMail } from "react-icons/fi"
import Link from "next/link"
import { motion } from "framer-motion"

const Buttons = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-32">
        
        {/* 1. Original Style - Corner Brackets */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center px-12 py-5 text-white font-bold text-sm uppercase tracking-[0.1em] overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#1a3fa8] transition-colors duration-300 group-hover:bg-white" />
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#e02020] group-hover:border-[#1a3fa8] group-hover:w-8 group-hover:h-6 transition-all duration-300" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#e02020] group-hover:border-[#1a3fa8] group-hover:w-8 group-hover:h-4 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#e02020] group-hover:border-[#1a3fa8] group-hover:w-8 group-hover:h-6 transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#e02020] group-hover:border-[#1a3fa8] group-hover:w-8 group-hover:h-6 transition-all duration-300" />
            <span className="relative z-10 block h-[1.2em] overflow-hidden">
              <span className="flex items-center gap-3 transition-transform duration-400 group-hover:-translate-y-full">
                EXPLORE PROJECTS
                <FiArrowRight className="text-lg" />
              </span>
              <span className="absolute top-full left-0 flex items-center gap-3 transition-transform duration-400 group-hover:-translate-y-full text-[#e02020]">
                EXPLORE PROJECTS
                <FiArrowRight className="text-lg" />
              </span>
            </span>
          </Link>
        </motion.div>

        {/* 2. Glow Pulse Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-base uppercase tracking-[0.15em] text-white overflow-hidden rounded-full">
            <span className="absolute inset-0 bg-[#1a3fa8] rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#e02020] blur-xl" />
            <span className="absolute inset-[2px] bg-[#0a0a0a] rounded-full" />
            <span className="relative z-10 flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
              <FiDownload className="text-lg" />
              DOWNLOAD NOW
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e02020] group-hover:w-full transition-all duration-500" />
            </span>
          </button>
        </motion.div>

        {/* 3. Sliding Fill Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 text-[#e02020] font-bold text-sm uppercase tracking-[0.15em] border-2 border-[#e02020] overflow-hidden">
            <span className="absolute inset-0 bg-[#e02020] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]" />
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
              <FiPlay className="text-lg" />
              WATCH DEMO
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e02020] group-hover:bg-white transition-colors duration-300" />
            </span>
          </button>
        </motion.div>

        {/* 4. Diagonal Split Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            <span className="absolute inset-0 bg-[#e02020] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute -inset-1 bg-[#e02020] opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              <FiSend className="text-lg transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              SEND MESSAGE
            </span>
          </button>
        </motion.div>

        {/* 5. Border Trail Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 text-white font-bold text-sm uppercase tracking-[0.15em] bg-transparent overflow-hidden">
            <span className="absolute inset-0 border-2 border-white/20 group-hover:border-[#1a3fa8] transition-colors duration-300" />
            <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e02020] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e02020] to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
            <span className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#1a3fa8] to-transparent translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-300" />
            <span className="absolute right-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#1a3fa8] to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 delay-300" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300">
              <FiShoppingCart className="text-lg" />
              ADD TO CART
            </span>
          </button>
        </motion.div>

        {/* 6. Horizontal Split Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] overflow-hidden">
            <span className="absolute left-0 top-0 w-1/2 h-full bg-[#e02020] group-hover:-translate-x-full transition-transform duration-500 ease-out" />
            <span className="absolute right-0 top-0 w-1/2 h-full bg-[#1a3fa8] group-hover:translate-x-full transition-transform duration-500 ease-out" />
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
            <span className="relative z-10 flex items-center gap-3 text-white group-hover:text-[#0a0a0a] transition-colors duration-300 delay-200">
              <FiHeart className="text-lg group-hover:scale-125 group-hover:text-[#e02020] transition-all duration-300" />
              ADD TO FAVORITES
            </span>
          </button>
        </motion.div>

        {/* 7. Corner Fold Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.15em] text-[#0a0a0a] overflow-hidden">
            <span className="absolute inset-0 bg-[#1a3fa8]" />
            <span className="absolute top-0 right-0 w-8 h-full bg-[#0a0a0a] origin-right transform skew-x-[20deg] group-hover:skew-x-[0deg] group-hover:w-0 transition-all duration-500 ease-out" />
            <span className="absolute bottom-0 left-0 w-full h-8 bg-[#e02020] origin-bottom transform skew-y-[-20deg] group-hover:skew-y-[0deg] group-hover:h-0 transition-all duration-500 ease-out delay-100" />
            <span className="relative z-10 flex items-center gap-3 text-white group-hover:scale-105 transition-transform duration-300">
              <FiShare2 className="text-lg" />
              SHARE PROJECT
            </span>
          </button>
        </motion.div>

        {/* 8. Neon Outline Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.2em] text-[#1a3fa8] overflow-hidden rounded-lg">
            <span className="absolute inset-0 border-2 border-[#1a3fa8] rounded-lg opacity-50 group-hover:opacity-100 group-hover:border-[#e02020] transition-all duration-300" />
            <span className="absolute inset-0 bg-[#1a3fa8]/10 rounded-lg group-hover:bg-[#e02020]/20 transition-colors duration-300" />
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(224,32,32,0.5),0_0_60px_rgba(224,32,32,0.3)]" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-[#e02020] transition-colors duration-300">
              <FiPlus className="text-lg" />
              CREATE NEW
              <span className="inline-block w-2 h-2 rounded-full bg-[#e02020] animate-ping absolute -right-4 top-1/2 -translate-y-1/2" />
            </span>
          </button>
        </motion.div>

        {/* 9. Expanding Circle Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-14 py-5 font-bold text-sm uppercase tracking-[0.15em] text-white overflow-hidden">
            <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#e02020] rounded-full group-hover:w-[500px] group-hover:h-[500px] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-700 ease-out" />
            <span className="relative z-10 flex items-center gap-3">
              <FiExternalLink className="text-lg group-hover:rotate-45 transition-transform duration-500" />
              VISIT WEBSITE
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 group-hover:bg-[#1a3fa8] transition-colors duration-300" />
            </span>
          </button>
        </motion.div>

        {/* 10. Glitch/Duplicate Text Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center px-12 py-5 font-bold text-sm uppercase tracking-[0.3em] text-white overflow-hidden">
            <span className="absolute inset-0 border border-[#1a3fa8]/30 group-hover:border-[#1a3fa8] transition-colors duration-300" />
            <span className="absolute inset-0 bg-[#1a3fa8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              <FiMail className="text-lg" />
              CONTACT US
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="absolute text-[#e02020] group-hover:translate-x-[2px] group-hover:animate-pulse transition-transform">
                  CONTACT US
                </span>
                <span className="absolute text-white group-hover:-translate-x-[2px] group-hover:animate-pulse transition-transform delay-75">
                  CONTACT US
                </span>
              </span>
            </span>
          </button>
        </motion.div>

      </div>
    </div>
  )
}

export default Buttons