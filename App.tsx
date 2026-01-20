
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveGrid from './components/LiveGrid';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // REPLACE THIS WITH YOUR MASTER TRACKING LINK
  const GLOBAL_TRACKING_LINK = "#";

  return (
    <div className="min-h-screen selection:bg-rose-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <section className="bg-zinc-900 py-12 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-32 items-center grayscale opacity-30 hover:opacity-80 transition-opacity duration-500">
              <span className="text-2xl font-black tracking-tighter">PRIVATE ACCESS</span>
              <span className="text-2xl font-black tracking-tighter">VELVET ELITE</span>
              <span className="text-2xl font-black tracking-tighter">HD UNLOCKED</span>
              <span className="text-2xl font-black tracking-tighter">ANONYMOUS CONNECT</span>
           </div>
        </section>

        <LiveGrid />
        
        {/* Precision Matching Section */}
        <section className="py-32 bg-black overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="relative rounded-[4rem] overflow-hidden glass border border-white/5 p-16 md:p-32 shadow-[0_0_80px_rgba(225,29,72,0.1)]">
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-900/20 to-transparent pointer-events-none"></div>
                 
                 <div className="relative z-10 max-w-xl space-y-10">
                    <h2 className="text-6xl md:text-[80px] font-serif font-bold italic text-white leading-[0.9] tracking-tighter">
                      Unleash Your <br /> 
                      <span className="gradient-text">Primal Desires</span>
                    </h2>
                    <p className="text-2xl text-zinc-400 font-light leading-relaxed">
                      In the silence of the night, your exclusive muse is waiting behind the screen. Skip the small talk and dive straight into deep, soul-stirring interactions.
                    </p>
                    
                    <div className="space-y-8">
                       <div className="flex flex-wrap gap-3">
                          {['Sophisticated', 'Wild & Free', 'Sweet Neighbor', 'Luxury Elite', 'Uniform Play', 'Artistic Muse'].map(tag => (
                            <button key={tag} className="px-6 py-3 glass rounded-2xl text-sm font-bold hover:bg-rose-600 hover:border-rose-600 transition-all">
                               {tag}
                            </button>
                          ))}
                       </div>
                       <a href={GLOBAL_TRACKING_LINK} className="inline-block w-full sm:w-auto">
                        <button className="w-full px-12 py-6 bg-rose-600 text-white font-black rounded-3xl hover:bg-rose-500 transition-all text-xl shadow-[0_20px_50px_rgba(225,29,72,0.4)] active:scale-95">
                            Open Private Channel
                        </button>
                       </a>
                    </div>
                 </div>

                 {/* Decorative Mobile Preview - Updated with ultra-reliable image */}
                 <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] h-[700px]">
                    <div className="relative w-full h-full rotate-[15deg] group bg-zinc-900 rounded-[5rem]">
                       <img 
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800&h=800" 
                        className="w-full h-full object-cover rounded-[5rem] border-[10px] border-zinc-950 shadow-[0_50px_100px_rgba(0,0,0,0.8)] transition-transform duration-1000 group-hover:rotate-[-5deg] opacity-0 animate-in fade-in fill-mode-forwards" 
                        alt="Private Interaction Preview" 
                        onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                       />
                       <div className="absolute inset-0 rounded-[5rem] bg-gradient-to-tr from-rose-500/20 to-transparent pointer-events-none"></div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <Features />

        {/* Final Call to Action */}
        <section className="py-40 relative text-center">
           <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/10 to-black"></div>
           <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-6xl md:text-[100px] font-serif font-bold mb-10 italic tracking-tighter text-white">Taboo Unlocked</h2>
              <p className="text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light text-balance">
                Right now, the world's most captivating voices are calling for you. No excuses needed. Just one click to enter the space where only you two exist.
              </p>
              
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-rose-600 blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <a href={GLOBAL_TRACKING_LINK}>
                  <button className="relative px-16 py-8 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-full text-3xl transition-all shadow-2xl hover:scale-105 active:scale-95">
                    Unlock Private Entrance
                  </button>
                </a>
              </div>

              <p className="mt-12 text-sm text-zinc-500 flex items-center justify-center space-x-3 font-bold uppercase tracking-widest">
                 <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/></svg>
                 <span>End-to-End Encryption • 100% Anonymous • Total Privacy</span>
              </p>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
