
import React from 'react';
import { MODELS } from '../constants';
import { ICONS } from '../constants';

const LiveGrid: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif font-bold italic tracking-tighter">Trending Now</h2>
            <p className="text-zinc-500 text-xl font-light">Sync globally, start private interaction with your soul muse in real-time.</p>
          </div>
          <div className="flex items-center space-x-3 overflow-x-auto pb-4 w-full md:w-auto no-scrollbar">
            {['All', 'Trending', 'Newcomers', 'VIP Only', 'Western', 'Asian', 'Couples'].map((tag) => (
              <button key={tag} className="whitespace-nowrap px-8 py-3 rounded-2xl glass border border-white/5 hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-400 transition-all text-sm font-bold tracking-wide">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {MODELS.map((model) => (
            <div key={model.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                <img 
                  src={model.imageUrl} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={model.name} 
                  loading="lazy"
                />
                
                {model.isLive && (
                  <div className="absolute top-5 left-5 bg-rose-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></span>
                    <span>Live Now</span>
                  </div>
                )}
                
                <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-lg px-3 py-1.5 rounded-full text-[10px] font-black text-white flex items-center space-x-2 border border-white/10">
                  <ICONS.User />
                  <span>{model.viewerCount?.toLocaleString() || 'Private Room'}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <p className="text-white/70 text-xs mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 italic">“{model.tags[0]} goddess, waiting for you to flirt...”</p>
                  <a href="#">
                    <button className="w-full py-4 bg-white text-black font-black rounded-2xl text-sm hover:bg-rose-600 hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 shadow-xl">
                        Watch Now
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center space-x-3 mb-1">
                    <span>{model.name}, {model.age}</span>
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                       <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.25.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    </div>
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium tracking-wide">{model.location}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                   {model.tags.slice(0, 1).map(tag => (
                     <span key={tag} className="text-[9px] bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full text-rose-400 font-black tracking-widest uppercase">{tag}</span>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <a href="#" className="inline-block">
                <button className="px-12 py-5 glass border border-white/10 text-white font-black rounded-[2rem] hover:bg-white/5 transition-all inline-flex items-center space-x-4 group shadow-xl">
                <span className="text-lg">Explore More Top Muses</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </button>
           </a>
        </div>
      </div>
    </section>
  );
};

export default LiveGrid;
