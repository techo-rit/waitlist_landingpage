import React from 'react';
import { Icon, Logo } from './Icons';

// Reuse vibrant images for the background flow
const BACKGROUND_TILES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488161628813-99c97485fe11?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614204424926-196a80985228?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
];

// Duplicate for seamless loop
const MARQUEE_TILES = [...BACKGROUND_TILES, ...BACKGROUND_TILES, ...BACKGROUND_TILES];

interface ComingSoonProps {
  onBack: () => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* === Background Lava Flow === */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[150vh] -mt-20">
           {/* Column 1 - Scroll Down */}
           <div className="flex flex-col gap-4 animate-marquee">
             {MARQUEE_TILES.map((src, i) => (
               <div key={`c1-${i}`} className="relative rounded-lg overflow-hidden flex-shrink-0 w-full aspect-[2/3]">
                 <img src={src} alt="bg" className="w-full h-full object-cover grayscale-[20%]" />
               </div>
             ))}
           </div>
           {/* Column 2 - Scroll Up */}
           <div className="flex flex-col gap-4 animate-marquee-reverse">
             {MARQUEE_TILES.reverse().map((src, i) => (
               <div key={`c2-${i}`} className="relative rounded-lg overflow-hidden flex-shrink-0 w-full aspect-[2/3]">
                 <img src={src} alt="bg" className="w-full h-full object-cover grayscale-[20%]" />
               </div>
             ))}
           </div>
           {/* Column 3 - Scroll Down (Hidden on mobile) */}
           <div className="hidden md:flex flex-col gap-4 animate-marquee">
             {MARQUEE_TILES.map((src, i) => (
               <div key={`c3-${i}`} className="relative rounded-lg overflow-hidden flex-shrink-0 w-full aspect-[2/3]">
                 <img src={src} alt="bg" className="w-full h-full object-cover grayscale-[20%]" />
               </div>
             ))}
           </div>
           {/* Column 4 - Scroll Up (Hidden on mobile) */}
           <div className="hidden md:flex flex-col gap-4 animate-marquee-reverse">
             {MARQUEE_TILES.reverse().map((src, i) => (
               <div key={`c4-${i}`} className="relative rounded-lg overflow-hidden flex-shrink-0 w-full aspect-[2/3]">
                 <img src={src} alt="bg" className="w-full h-full object-cover grayscale-[20%]" />
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Lava Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-red-900/60 via-orange-900/40 to-black/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-full hover:bg-black/50 border border-transparent hover:border-white/10 backdrop-blur-md"
      >
        <Icon name="ArrowLeft" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </button>

      <div className="max-w-2xl w-full relative z-10 text-center animate-in fade-in zoom-in duration-500">
        
        {/* Logo Icon */}
        <div className="mx-auto mb-8 animate-float flex justify-center">
             <Logo width={96} height={96} className="drop-shadow-2xl" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
          Arriving Soon.
        </h1>
        
        <div className="bg-black/60 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl mb-8 shadow-2xl relative overflow-hidden group">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-brand-300 mb-4 flex items-center justify-center gap-2">
                    <Icon name="CheckCircle2" className="w-6 h-6 text-green-400" />
                    Spot Reserved
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed font-medium">
                    Thank you for joining the <strong>nopromt.ai</strong> revolution. 
                    We are currently in a private beta and will be opening the doors to no prompt ai next week.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-2 bg-green-900/30 px-3 py-1 rounded-full border border-green-500/20 text-green-400">
                        <Icon name="CheckCircle2" className="w-4 h-4" />
                        Priority Access
                    </span>
                </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/30 transition-colors"></div>
        </div>
        
        <p className="text-gray-500 text-sm">
            Questions? <a href="mailto:hello@nopromt.ai" className="text-gray-400 hover:text-white underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
};