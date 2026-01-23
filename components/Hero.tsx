
import React from 'react';
import { GLOBAL_CONFIG } from '../constants';

const Hero: React.FC = () => {
  const handleAction = () => {
    window.open(GLOBAL_CONFIG.TRACKING_LINK, '_blank');
  };

  return (
    <section className="relative pt-48 pb-32 overflow-hidden vignette">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-950/10 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-indigo-950/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-12 border border-white/[0.03] rounded-full bg-white/[0.02] backdrop-blur-xl">
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-rose-800/80">Private Membership</span>
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-serif font-light leading-[0.85] mb-14 tracking-tighter gradient-text italic">
          Taste the <br /> <span className="not-italic opacity-90">Forbidden.</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-sm md:text-base text-white/30 mb-20 font-light leading-relaxed tracking-[0.1em]">
          Strip away the social masks and dive into the shadows where instinct rules. Here, every whisper is allowed, and every secret is cherished by the flesh.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button 
            onClick={handleAction}
            className="btn-velvet w-full sm:w-auto px-16 py-6 rounded-full text-[11px] font-bold letter-spacing-xl uppercase text-white/90"
          >
            Dive In Now
          </button>
          <button 
            onClick={handleAction}
            className="btn-outline w-full sm:w-auto px-16 py-6 rounded-full text-[11px] font-bold letter-spacing-xl uppercase text-white/40"
          >
            Explore Deeper
          </button>
        </div>

        <div className="mt-32 grid grid-cols-3 gap-12 max-w-xl mx-auto border-t border-white/[0.03] pt-16">
          {[
            ['40K+', 'Obsessions'],
            ['24/7', 'Intimacy'],
            ['100%', 'Discrete']
          ].map(([val, label]) => (
            <div key={label} className="flex flex-col">
              <span className="text-3xl font-serif text-white/60 font-extralight tracking-tighter">{val}</span>
              <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 mt-3">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
