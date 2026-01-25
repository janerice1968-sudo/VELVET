
import React from 'react';
import { ICONS, TRACKING_LINKS, GLOBAL_CONFIG, ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12 relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center space-x-3 bg-rose-600/10 backdrop-blur-xl border border-rose-500/20 px-5 py-2.5 rounded-full mx-auto lg:mx-0">
            <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_#f43f5e]"></span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-rose-400">3,492 Creators Are Live</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-[75px] md:text-[130px] font-serif font-bold italic leading-[0.8] tracking-tighter text-white">
              {GLOBAL_CONFIG.SITE_NAME} <br />
              <span className="text-rose-600 drop-shadow-[0_0_30px_rgba(225,29,72,0.3)]">Secrets.</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-lg leading-relaxed mx-auto lg:mx-0">
            The {GLOBAL_CONFIG.REGION}'s premier digital sanctuary for intimate connection and unfiltered exploration. Discretion is our priority.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
            <a href={TRACKING_LINKS.MAIN_CTA} className="w-full sm:w-auto">
              <button className="w-full px-16 py-7 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-3xl text-2xl transition-all shadow-[0_25px_60px_rgba(225,29,72,0.4)] active:scale-95 border-t border-rose-400/20">
                Start Exploring
              </button>
            </a>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {ASSETS.AVATARS.map((url, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-900 overflow-hidden bg-zinc-800 shadow-xl">
                    <img 
                      src={url} 
                      alt="Member" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-white">+1,240 Online</div>
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">In Your Region</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/5 max-w-md mx-auto lg:mx-0">
            <div className="space-y-1">
               <div className="text-xl font-bold text-white flex items-center gap-2">
                 <span className="text-rose-500">4K</span> 
                 <span className="hidden md:inline">Ultra</span>
               </div>
               <div className="text-[9px] text-zinc-500 font-black uppercase tracking-widest">Streaming</div>
            </div>
            <div className="space-y-1">
               <div className="text-xl font-bold text-white">100%</div>
               <div className="text-[9px] text-zinc-500 font-black uppercase tracking-widest">Incognito</div>
            </div>
            <div className="space-y-1">
               <div className="text-xl font-bold text-white">24h</div>
               <div className="text-[9px] text-zinc-500 font-black uppercase tracking-widest">Concierge</div>
            </div>
          </div>
        </div>

        {/* 右侧装饰性元素 - 视觉暗示 */}
        <div className="hidden lg:block relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px]"></div>
           <div className="relative glass border border-white/10 p-4 rounded-[4rem] rotate-3 shadow-2xl overflow-hidden group">
              <img 
                src={ASSETS.MAIN_BACKGROUND} 
                alt="Elite Showcase" 
                className="w-full h-full object-cover rounded-[3.5rem] brightness-90 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-12 left-12 right-12 p-8 glass rounded-3xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <div className="flex justify-between items-center">
                    <div>
                       <div className="text-2xl font-bold">Featured Goddess</div>
                       <div className="text-rose-400 text-sm font-medium italic">Available for private chat</div>
                    </div>
                    <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                       <ICONS.Camera />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* 滚动提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30 animate-bounce">
         <span className="text-[10px] font-black tracking-[0.3em] uppercase">Scroll</span>
         <div className="w-px h-12 bg-gradient-to-b from-rose-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
