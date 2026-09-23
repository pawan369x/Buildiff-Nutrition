import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export default function Banner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6">
      {/* High-Tech Metallic Silver Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[500px] bg-gradient-to-b from-white/10 via-slate-400/5 to-transparent rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] bg-gradient-to-t from-slate-500/10 to-transparent rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />
      
      {/* Precision Micro Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:44px_44px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        
        {/* Emblem Showcase with Specular Reflection Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          className="relative mb-5 sm:mb-6 group cursor-pointer"
        >
          <div className="relative w-28 h-28 sm:w-44 sm:h-44 rounded-2xl sm:rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-white/40 via-white/10 to-transparent shadow-[0_0_35px_rgba(255,255,255,0.15)] sm:shadow-[0_0_50px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_70px_rgba(255,255,255,0.3)] transition-all duration-500">
            <div className="w-full h-full rounded-[14px] sm:rounded-[22px] overflow-hidden bg-black border border-white/20">
              <img
                src="/logo.jpg"
                alt="Buildiff Nutrition Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* Subtle lightning glow ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-2xl sm:rounded-3xl blur-md sm:blur-lg opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>

        {/* Category Tag matching image style: '01 • BUILDIFF NUTRITION' */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-3 sm:mb-4"
        >
          <span>01 • THE BUILDIFF FORMULA</span>
        </motion.div>

        {/* Hero Title in Exact Luxury Editorial Serif font from the user's reference */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-[#faf5ea] mb-5 sm:mb-7 leading-[1.08] sm:leading-[1.04]"
        >
          Packed for the <span className="italic font-normal text-white">power.</span><br />
          Built for the <span className="italic font-normal text-slate-200">difference.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-slate-300/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2"
        >
          Formulated with ultra-pure pharmaceutical-grade ingredients. Zero fillers, clinical dosages,
          and unmatched bio-availability engineered to redefine your physical limits.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto mb-12 sm:mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#faf5ea] text-black font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(250,245,234,0.3)] hover:shadow-[0_0_45px_rgba(250,245,234,0.5)] transition-all flex items-center justify-center gap-2 group touch-manipulation"
          >
            <span>Explore Supplements</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-[#faf5ea] font-medium text-sm sm:text-base border border-white/20 hover:border-white/40 backdrop-blur-xl transition-all flex items-center justify-center gap-2 tracking-wide touch-manipulation"
          >
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />
            <span>Lab Certificates</span>
          </motion.button>
        </motion.div>

        {/* 4 Premium Metric Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-4xl"
        >
          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/30 transition-all">
            <span className="text-xl sm:text-3xl font-serif font-normal text-[#faf5ea]">
              0g
            </span>
            <span className="text-white text-[11px] sm:text-sm font-semibold mt-1 uppercase tracking-wider">
              Zero Fillers
            </span>
            <span className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5">100% Active Ingredients</span>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/30 transition-all">
            <span className="text-xl sm:text-3xl font-serif font-normal text-[#faf5ea]">
              100%
            </span>
            <span className="text-white text-[11px] sm:text-sm font-semibold mt-1 uppercase tracking-wider">
              Lab Certified
            </span>
            <span className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5">FSSAI & GMP Tested</span>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/30 transition-all">
            <span className="text-xl sm:text-3xl font-serif font-normal text-[#faf5ea]">
              48h
            </span>
            <span className="text-white text-[11px] sm:text-sm font-semibold mt-1 uppercase tracking-wider">
              Fast Dispatch
            </span>
            <span className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5">Pan-India Express</span>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/30 transition-all">
            <span className="text-xl sm:text-3xl font-serif font-normal text-[#faf5ea]">
              4.9★
            </span>
            <span className="text-white text-[11px] sm:text-sm font-semibold mt-1 uppercase tracking-wider">
              Top Rated
            </span>
            <span className="text-slate-400 text-[10px] sm:text-[11px] mt-0.5">25,000+ Athletes</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
