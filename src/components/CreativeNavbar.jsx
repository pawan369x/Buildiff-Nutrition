import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag, Zap, Menu, X, Search, Heart, User, ChevronDown,
  Flame, ShieldCheck, ArrowRight, Sparkles
} from 'lucide-react';

const supplementCategories = [
  { name: '100% Whey Protein Isolate', tag: 'Bestseller', href: '#supplements' },
  { name: 'Creapure Micronized Creatine', tag: 'Strength', href: '#supplements' },
  { name: 'Pre-Workout Explosive Pump', tag: 'High Energy', href: '#supplements' },
  { name: 'BCAA & Intra-Workout Recovery', tag: 'Fast Repair', href: '#supplements' },
];

export default function CreativeNavbar({ onCartClick, cartCount = 2 }) {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupplementsDropdownOpen, setIsSupplementsDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [count, setCount] = useState(cartCount);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col font-['Outfit']">
      {/* 1. Top Sleek Announcement Ticker */}
      <div className="w-full bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-b border-white/10 text-xs py-2 px-4 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-300">
          <div className="hidden md:flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-200" />
            <span>100% Authentic Pharmaceutical Grade</span>
          </div>

          <div className="flex items-center gap-2 mx-auto md:mx-0 font-medium">
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-bold text-[10px] tracking-wider uppercase border border-white/20">
              FLASH OFFER
            </span>
            <span>Extra 20% OFF Everything with code:</span>
            <strong className="text-white font-black tracking-wider bg-white/10 px-1.5 py-0.5 rounded">
              BUILDIFF20
            </strong>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-slate-400 text-xs">
            <span className="flex items-center gap-1 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-white" /> Free Express Shipping Over ₹1,499
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main High-End Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-2xl border-b border-white/15 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.9)]'
            : 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          
          {/* Brand Logo & Wordmark */}
          <a href="#home" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-white via-slate-400 to-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-[10px] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="Buildiff Nutrition"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="font-['Syne'] font-black tracking-wider text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 leading-none">
                BUILDIFF
              </span>
              <span className="text-[10px] font-extrabold tracking-[0.3em] text-slate-400 uppercase mt-0.5">
                NUTRITION LABS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <a
              href="#home"
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeTab === 'home'
                  ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              HOME
            </a>

            {/* Supplements Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsSupplementsDropdownOpen(true)}
              onMouseLeave={() => setIsSupplementsDropdownOpen(false)}
            >
              <button
                onClick={() => setActiveTab('supplements')}
                className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide flex items-center gap-1.5 transition-all ${
                  activeTab === 'supplements' || isSupplementsDropdownOpen
                    ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>SUPPLEMENTS</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isSupplementsDropdownOpen ? 'rotate-180 text-white' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Mega Dropdown Card */}
              <AnimatePresence>
                {isSupplementsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-80 p-3 rounded-2xl bg-neutral-950/95 backdrop-blur-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50 flex flex-col gap-1.5"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-white/10">
                      Elite Formulations
                    </div>
                    {supplementCategories.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-white">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                          {item.tag}
                        </span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#products"
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeTab === 'products'
                  ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              ALL PRODUCTS
            </a>

            <a
              href="#deals"
              onClick={() => setActiveTab('deals')}
              className="px-4 py-2 rounded-full text-sm font-bold tracking-wide flex items-center gap-1.5 text-white hover:bg-white/10 transition-all group"
            >
              <Flame className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
              <span>HOT DEALS</span>
              <span className="px-1.5 py-0.5 text-[10px] font-black uppercase rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white">
                20% OFF
              </span>
            </a>
          </nav>

          {/* Right Action Icons & Interactive Cart Pill */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Search Input Box */}
            <div className="relative hidden sm:flex items-center">
              <div className="flex items-center bg-white/5 hover:bg-white/10 border border-white/15 focus-within:border-white focus-within:bg-neutral-900 rounded-full px-3.5 py-2 transition-all w-48 focus-within:w-64">
                <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Search Whey, Creatine..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-xs text-white placeholder-slate-500 outline-none w-full"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Wishlist Button */}
            <button
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all"
              aria-label="Wishlist"
              title="Saved Items"
            >
              <Heart className="w-4 h-4" />
            </button>

            {/* VIP Athlete Pass Trigger */}
            <button
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-bold transition-all"
              title="Athlete VIP Status"
            >
              <User className="w-4 h-4 text-slate-300" />
              <span className="hidden xl:inline text-slate-400">PRO VIP</span>
            </button>

            {/* Advance Cart Button with Live Counter */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCount((prev) => prev + 1);
                if (onCartClick) onCartClick();
              }}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white via-slate-100 to-slate-200 text-black font-black text-xs sm:text-sm tracking-wider shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] transition-all group"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-black group-hover:-rotate-6 transition-transform" />
              <span className="uppercase font-extrabold">CART</span>

              {/* Cart Counter Bubble */}
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="min-w-[20px] h-5 px-1 rounded-full bg-black text-white text-[11px] font-black flex items-center justify-center border border-black/20"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/15 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-3xl px-4 py-6 flex flex-col gap-3 shadow-2xl"
            >
              {/* Mobile Search Bar */}
              <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-3.5 py-3 mb-2">
                <Search className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search Whey, Creatine, Pre-Workout..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-sm text-white placeholder-slate-400 outline-none w-full"
                />
              </div>

              <a
                href="#home"
                onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-base flex items-center justify-between"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#supplements"
                onClick={() => { setActiveTab('supplements'); setIsMobileMenuOpen(false); }}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-base flex items-center justify-between"
              >
                <span>Supplements & Whey</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white text-black font-extrabold uppercase">
                  Bestseller
                </span>
              </a>

              <a
                href="#products"
                onClick={() => { setActiveTab('products'); setIsMobileMenuOpen(false); }}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-base flex items-center justify-between"
              >
                <span>All Products</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#deals"
                onClick={() => { setActiveTab('deals'); setIsMobileMenuOpen(false); }}
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500/20 to-rose-500/20 border border-orange-500/30 text-orange-400 font-bold text-base flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <span>Hot Deals (20% OFF)</span>
                </div>
                <span className="text-xs font-black">USE: BUILDIFF20</span>
              </a>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Free Pan-India Delivery on ₹1,499+</span>
                <span className="text-white font-bold">100% Lab Tested</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
