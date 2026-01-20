
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.4)]">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">Velvet</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Global leading high-end private social platform. Redefining intimate interaction with technology, providing infinite possibilities for your late night.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center cursor-pointer hover:text-rose-400 transition-all font-bold">𝕏</div>
              <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center cursor-pointer hover:text-rose-400 transition-all font-bold">IG</div>
              <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center cursor-pointer hover:text-rose-400 transition-all font-bold">TT</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Recommended Muses</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Private Live</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Popular Events</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Privilege Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Privacy & Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Safety Guide</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Privacy Encryption</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Service Agreement</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Privacy Protection</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">2257 Records</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Traceless Tech</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center">
          <div className="inline-block px-6 py-2 rounded-full border border-rose-500/20 text-rose-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            Adults Only (18+)
          </div>
          <p className="text-gray-600 text-xs leading-relaxed max-w-4xl mx-auto">
            This platform contains explicit adult interactive content. You must be at least 18 years old (or the legal age in your jurisdiction) to access. Entering means you promise you have reached the legal age and are willing to abide by our private interaction rules.
          </p>
          <p className="mt-6 text-gray-700 text-[10px]">© {new Date().getFullYear()} Velvet Social Club. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
