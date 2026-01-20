
import React from 'react';
import { ICONS } from '../constants';

const Features: React.FC = () => {
  const featureList = [
    {
      title: "Zero-Distance Sensory Transmission",
      description: "Using ultra-low latency streaming technology, making every interaction as real and shocking as being there.",
      icon: <ICONS.Camera />
    },
    {
      title: "Absolute Invisible Stealth",
      description: "From access to interaction, we provide full-link traceless protection, ensuring your desires only exist in the moment.",
      icon: <ICONS.Shield />
    },
    {
      title: "Deep Soul Matching",
      description: "Algorithm beyond appearance, selecting the muse who understands you best, letting every minute be immersed in pleasure.",
      icon: <ICONS.Heart />
    },
    {
      title: "Exclusive Privilege Entrance",
      description: "A private club for those pursuing ultimate experiences, unlocking taboo fields unreachable by ordinary users.",
      icon: <ICONS.User />
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif font-bold italic text-rose-500 tracking-tight">Velvet Ultimate Experience</h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">Here, we don't talk about material things, we only care about the connection and heartbeat you crave deep in your heart.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {featureList.map((item, idx) => (
            <div key={idx} className="group space-y-6 p-8 rounded-3xl glass border border-white/5 hover:border-rose-500/30 transition-all cursor-default">
              <div className="w-14 h-14 bg-rose-900/20 text-rose-500 rounded-2xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
