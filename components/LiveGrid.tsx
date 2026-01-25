
import React from 'react';
import { MODELS, TRACKING_LINKS, ICONS } from '../constants';

const LiveGrid: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif font-bold italic tracking-tighter">Elite Muses</h2>
            <p className="text-zinc-500 text-xl font-light max-w-md">Discover top-tier creators ready to fulfill your most intimate requests.</p>
          </div>
          <div className="flex items-center space-x-3 overflow-x-auto pb-4 w-full md:w-auto no-scrollbar scroll-smooth">
            {['All', 'Trending', 'Elite 100', 'New Arrivals', 'VIP Private'].map((tag) => (
              <button key={tag} className="whitespace-nowrap px-8 py-3.5 rounded-full glass border border-white/10 hover:border-rose-500 hover:text-rose-500 transition-all text-xs font-black tracking-widest uppercase">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {MODELS.map((model) => (
            <div key={model.id} className="group">
              <div className="relative aspect-[4/6] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 hover:shadow-rose-900/20 border border-white/5">
                <img 
                  src={model.imageUrl} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2" 
                  alt={model.name} 
                  loading="lazy"
                />
                
                {/* 状态标签 */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  {model.isLive && (
                    <div className="bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full flex items-center space-x-2 shadow-xl border border-rose-400/20">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      <span>Live</span>
                    </div>
                  )}
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-[10px] font-black text-white flex items-center space-x-2">
                    <ICONS.User />
                    <span>{model.viewerCount?.toLocaleString() || 'Exclusive'}</span>
                  </div>
                </div>

                {/* 悬停互动面板 */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 space-y-6">
                    <p className="text-white/80 text-sm font-medium italic leading-relaxed">
                      "I love exploring boundaries and creating moments that we'll both remember forever..."
                    </p>
                    <a href={TRACKING_LINKS.LIVE_WATCH}>
                      <button className="w-full py-5 bg-white text-black font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all shadow-2xl">
                          Access Private Room
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end px-2">
                <div className="space-y-1">
                  <h3 className="text-3xl font-serif font-bold italic tracking-tight text-white group-hover:text-rose-400 transition-colors">
                    {model.name} <span className="text-xl font-sans not-italic font-light opacity-50">{model.age}</span>
                  </h3>
                  <p className="text-xs text-zinc-600 font-black uppercase tracking-widest">{model.location}</p>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-rose-600/20 transition-colors cursor-pointer group-hover:border-rose-500/30">
                      <ICONS.Heart />
                   </div>
                </div>
              </div>
              
              {/* 标签展示 */}
              <div className="mt-4 flex flex-wrap gap-2 px-2">
                 {model.tags.map(tag => (
                   <span key={tag} className="text-[8px] border border-white/5 px-3 py-1.5 rounded-lg text-zinc-500 font-bold tracking-widest uppercase group-hover:text-zinc-300 transition-colors">{tag}</span>
                 ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
           <a href={TRACKING_LINKS.MAIN_CTA} className="inline-block relative group">
                <div className="absolute inset-0 bg-rose-600 blur-[30px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <button className="relative px-16 py-6 glass border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all inline-flex items-center space-x-6 group shadow-2xl">
                <span className="text-xl tracking-tight">Meet Your Favorite Muse</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
           </a>
        </div>
      </div>
    </section>
  );
};

export default LiveGrid;
