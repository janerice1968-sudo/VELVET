
import React, { useState, useEffect } from 'react';
import { TRACKING_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-3xl py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="w-10 h-10 bg-rose-600 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(225,29,72,0.4)] transition-transform group-hover:scale-110 group-hover:rotate-6">
            <span className="text-white font-black text-xl">V</span>
          </div>
          <span className="text-3xl font-serif font-bold tracking-tighter text-white group-hover:text-rose-500 transition-colors">Velvet</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-12 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
          <a href={TRACKING_LINKS.MAIN_CTA} className="hover:text-white transition-colors relative group">
            Dating
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose-600 transition-all group-hover:w-full"></span>
          </a>
          <a href={TRACKING_LINKS.MAIN_CTA} className="hover:text-white transition-colors relative group">
            Live Shows
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose-600 transition-all group-hover:w-full"></span>
          </a>
          <a href={TRACKING_LINKS.MAIN_CTA} className="hover:text-white transition-colors relative group">
            VIP Elite
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose-600 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="hidden sm:block text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Log In</button>
          <a href={TRACKING_LINKS.NAV_JOIN}>
            <button className="bg-rose-600 hover:bg-rose-500 text-white text-sm font-black px-8 py-3.5 rounded-full transition-all shadow-xl shadow-rose-900/20 active:scale-95 border-t border-rose-400/20">
                Join Free
            </button>
          </a>
        </div>
      </div>
      
      {/* 极细进度条效果 */}
      <div className={`absolute bottom-0 left-0 h-[1px] bg-rose-600/30 transition-all duration-300 ${scrolled ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
    </nav>
  );
};

export default Navbar;
