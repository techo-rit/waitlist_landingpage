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
    <div className="min-h-screen bg-bg-main flex items-center justify-center p-6 relative overflow-hidden">
      
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
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-gold/20 via-bg-main/80 to-bg-main mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-bg-main/60 backdrop-blur-sm"></div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors group px-4 py-2 rounded-full hover:bg-bg-surface/50 border border-transparent hover:border-border-subtle backdrop-blur-md"
      >
        <Icon name="ArrowLeft" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </button>

      <div className="max-w-2xl w-full relative z-10 text-center animate-in fade-in zoom-in duration-500">
        
        {/* Logo Icon */}
        <div className="mx-auto mb-8 animate-float flex justify-center">
             <Logo width={96} height={96} className="drop-shadow-2xl" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-6 tracking-tight drop-shadow-2xl uppercase tracking-luxury">
          Arriving Soon.
        </h1>
        
        <div className="bg-bg-surface/60 border border-border-subtle rounded-3xl p-8 backdrop-blur-2xl mb-8 shadow-2xl relative overflow-hidden group">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gold mb-4 flex items-center justify-center gap-2 uppercase tracking-wide">
                    <Icon name="CheckCircle2" className="w-6 h-6 text-gold" />
                    Spot Reserved
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed font-medium">
                    Thank you for joining the <strong>nopromt.ai</strong> revolution. 
                    We are currently in a private beta and will be opening the doors to no prompt ai next week.
                </p>
                <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-2 bg-gold/10 px-3 py-1 rounded-full border border-gold/20 text-gold">
                        <Icon name="CheckCircle2" className="w-4 h-4" />
Welcome to the Inner Circle.                    </span>
                </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gold/20 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/30 transition-colors"></div>
        </div>
        
        <p className="text-text-muted text-sm">
            Questions? <a href="mailto:hello@nopromt.ai" className="text-text-muted hover:text-text-primary underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
};