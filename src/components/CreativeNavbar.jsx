import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Zap, Menu, X, ShieldCheck } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'supplements', label: 'Supplements', href: '#supplements' },
  { id: 'products', label: 'All Products', href: '#products' },
  { id: 'deals', label: 'Best Deals', href: '#deals', badge: 'PRO DEALS' },
];

export default function CreativeNavbar({ onCartClick, cartCount = 2 }) {
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [count, setCount] = useState(cartCount);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="w-full max-w-5xl relative flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-full backdrop-blur-2xl bg-black/85 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)]"
      >
        {/* Brand Logo with Buildiff Metallic Image */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:border-white transition-all duration-300 group-hover:scale-105 bg-black shrink-0">
            <img
              src="/logo.jpg"
              alt="Buildiff Nutrition"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 text-lg leading-tight uppercase font-['Syne']">
              BUILDIFF
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-slate-400 -mt-0.5 uppercase">
              NUTRITION
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div 
          className="hidden md:flex items-center gap-1 relative"
          onMouseLeave={() => setHoveredTab(null)}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={() => setHoveredTab(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 z-10 flex items-center gap-1.5 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {/* Hover Pill Background */}
                {hoveredTab === item.id && (
                  <motion.div
                    layoutId="hover-pill"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  />
                )}

                {/* Active Indicator Glow Pill */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.55 }}
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-slate-300/15 to-white/20 border border-white/40 rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                  />
                )}

                <span>{item.label}</span>

                {/* Deal Tag */}
                {item.badge && (
                  <span className="text-[9px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r from-slate-200 to-white text-black shadow-sm">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action: Verified Badge + Cart Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Lab Tested Pill (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>100% Pure Lab Grade</span>
          </div>

          {/* Cart Icon Button with Micro-interactions */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              setCount((prev) => prev + 1);
              if (onCartClick) onCartClick();
            }}
            className="relative p-2.5 rounded-full bg-neutral-900 border border-white/20 text-slate-200 hover:text-white hover:border-white transition-all shadow-[0_4px_16px_rgba(0,0,0,0.5)] group"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5 transition-transform group-hover:-rotate-6 text-white" />

            {/* Cart Counter Bubble */}
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0.5, y: -4 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-gradient-to-r from-slate-100 to-white text-black text-[11px] font-black flex items-center justify-center border-2 border-black shadow-lg"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-3 p-4 rounded-3xl bg-black/95 backdrop-blur-3xl border border-white/15 flex flex-col gap-2 md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                    activeTab === item.id
                      ? 'bg-white/10 text-white border border-white/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-black font-extrabold uppercase">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
