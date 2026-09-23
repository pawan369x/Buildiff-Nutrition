import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Award, Flame, CheckCircle2 } from 'lucide-react';

export default function Banner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-36 sm:pt-44 pb-20 px-4 sm:px-6">
      {/* High-Tech Metallic Silver Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/10 via-slate-400/5 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-slate-500/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
      
      {/* Precision Micro Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Emblem Showcase with Specular Reflection Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          className="relative mb-6 group cursor-pointer"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-white/40 via-white/10 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_70px_rgba(255,255,255,0.3)] transition-all duration-500">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-black border border-white/20">
              <img
                src="/logo.jpg"
                alt="Buildiff Nutrition Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* Subtle lightning glow ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>

        {/* Brand Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/20 text-slate-200 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
        >
          <Zap className="w-3.5 h-3.5 text-white animate-pulse" />
          <span>OFFICIAL BUILDIFF NUTRITION LABS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          <span className="text-slate-400 font-medium">EST. 2026</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase leading-[0.95] font-['Syne']"
        >
          FUEL THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-[0_4px_25px_rgba(255,255,255,0.25)]">BEAST.</span><br />
          DEFINE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">DIFFERENCE.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Formulated with ultra-pure pharmaceutical-grade ingredients. Zero fillers, clinical dosages,
          and unmatched bio-availability designed to forge championship physiques and explosive strength.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-300 text-black font-black text-base shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all flex items-center gap-2.5 uppercase tracking-wide group"
          >
            <span>Explore Supplements</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-base border border-white/20 hover:border-white/40 backdrop-blur-xl transition-all flex items-center gap-2 tracking-wide"
          >
            <ShieldCheck className="w-5 h-5 text-slate-300" />
            <span>View Lab Certificates</span>
          </motion.button>
        </motion.div>

        {/* 4 Premium Metric Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-4xl"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/30 transition-all group">
            <span className="text-2xl sm:text-3xl font-black text-white font-['Syne'] group-hover:text-slate-200">
              0g
            </span>
            <span className="text-white text-xs sm:text-sm font-bold mt-1 uppercase tracking-wide">
              Fillers or Binders
            </span>
            <span className="text-slate-500 text-[11px] mt-0.5">100% Pure Active Ingredients</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/30 transition-all group">
            <span className="text-2xl sm:text-3xl font-black text-white font-['Syne'] group-hover:text-slate-200">
              100%
            </span>
            <span className="text-white text-xs sm:text-sm font-bold mt-1 uppercase tracking-wide">
              Lab Tested & Certified
            </span>
            <span className="text-slate-500 text-[11px] mt-0.5">FSSAI & GMP Compliant</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/30 transition-all group">
            <span className="text-2xl sm:text-3xl font-black text-white font-['Syne'] group-hover:text-slate-200">
              48h
            </span>
            <span className="text-white text-xs sm:text-sm font-bold mt-1 uppercase tracking-wide">
              Pan-India Dispatch
            </span>
            <span className="text-slate-500 text-[11px] mt-0.5">Insured Express Shipping</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/30 transition-all group">
            <span className="text-2xl sm:text-3xl font-black text-white font-['Syne'] group-hover:text-slate-200">
              4.9★
            </span>
            <span className="text-white text-xs sm:text-sm font-bold mt-1 uppercase tracking-wide">
              Athlete Approved
            </span>
            <span className="text-slate-500 text-[11px] mt-0.5">Trusted by 25,000+ Lifters</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
