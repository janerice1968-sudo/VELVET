
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.5)]">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-white">Velvet</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-rose-500 transition-colors">Dating</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Live Shows</a>
          <a href="#" className="hover:text-rose-500 transition-colors">VIP Club</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Privacy</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-sm font-semibold text-white px-4 py-2 hover:text-rose-400 transition-colors">Login</button>
          <button className="bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-rose-900/20 active:scale-95">
            Join Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
