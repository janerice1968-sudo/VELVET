
import React from 'react';
import { ICONS } from '../constants';

const Hero: React.FC = () => {
  // Master Tracking Link - Update this # with your actual URL
  const MASTER_LINK = "#";

  // Active user avatars
  const avatars = [
    'https://i.ibb.co/7dtXwT5z/20201014213922-fd65f.jpg',
    'https://https://i.ibb.co/nsxNfFGY/20230326221613-7e73d-thumb-400-0.jpg',
   'https://i.ibb.co/DgWrYzKR/myyf255rzvn.jpg',
    'https://i.ibb.co/zHVynr62/sljpiz0y2ht.jpg'
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-rose-900/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] -right-[5%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-bold tracking-[0.1em] uppercase text-rose-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span>12,482 Top Muses are Online</span>
          </div>
          
          <h1 className="text-7xl md:text-[92px] font-serif font-bold leading-[1] tracking-tighter text-white text-balance">
            Ultimate Private <br />
            <span className="gradient-text italic">Sensory Feast</span> <br />
            Open Now
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-lg leading-relaxed font-light">
            Velvet creates the world's most luxurious adult social map for you. Here, every breath is accompanied by a heartbeat, and every frame is a supreme tribute to desire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a href={MASTER_LINK} className="inline-block">
                <button className="w-full px-10 py-5 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-2xl transition-all text-xl shadow-[0_20px_50px_rgba(225,29,72,0.3)] flex items-center justify-center space-x-3 group active:scale-95">
                <span>Enter Now</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                </button>
            </a>
            <a href={MASTER_LINK} className="inline-block">
                <button className="w-full px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-xl border border-white/10 active:scale-95">
                Explore Live Shows
                </button>
            </a>
          </div>

          <div className="flex items-center space-x-10 pt-10 border-t border-white/5">
            <div className="flex -space-x-4">
              {avatars.map((url, i) => (
                <div key={i} className="relative group">
                  <img 
                    src={url} 
                    className="w-12 h-12 rounded-full border-[3px] border-zinc-950 object-cover shadow-xl transition-transform group-hover:-translate-y-2" 
                    alt="active user" 
                    loading="eager"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-zinc-950 rounded-full"></div>
                </div>
              ))}
              <div className="w-12 h-12 rounded-full bg-zinc-800 border-[3px] border-zinc-950 flex items-center justify-center text-xs font-black text-rose-400 shadow-xl">+5k</div>
            </div>
            <div>
              <div className="flex items-center space-x-1 text-rose-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-[0.2em] font-black">Elite Member Choice</p>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000 hidden lg:block">
          <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-[40px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10 group bg-zinc-900">
             <img 
               src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800&h=1000" 
               className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
               alt="Featured Western Muse"
               loading="eager"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
             
             <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-3xl border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                        <span className="text-sm font-black tracking-widest uppercase text-white">HOT: Valerie K</span>
                      </div>
                      <span className="text-[10px] text-rose-400 font-black bg-rose-950/40 px-3 py-1 rounded-full border border-rose-500/20">PRIVATE VIP</span>
                   </div>
                   <p className="text-sm text-zinc-300 italic font-medium leading-relaxed">“The most dangerous fantasies are the ones we keep locked inside. I have the key, and I'm waiting just for you. Shall we unlock it together? 💋”</p>
                </div>
             </div>
          </div>
          
          <div className="absolute -top-8 -right-8 glass p-6 rounded-[2rem] border border-white/10 shadow-2xl animate-float">
            <div className="text-rose-500"><ICONS.Heart /></div>
          </div>
          <div className="absolute top-1/2 -left-12 glass py-3 px-5 rounded-2xl border border-white/10 shadow-2xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white"><ICONS.Camera /></div>
            <span className="text-xs font-black text-white">4K Live Shows</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
