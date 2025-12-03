import React from 'react';
import { Icon } from './Icons';

const STACKS = [
  {
    title: "Sports Stack",
    description: "High energy, dynamic motion, gritty realism.",
    icon: "Zap",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
    hoverBorder: "hover:border-yellow-500/50",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
  },
  {
    title: "Aesthetics Stack",
    description: "Soft lighting, cinematic tones, pure vibe.",
    icon: "Sparkles",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    hoverBorder: "hover:border-pink-500/50",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]"
  },
  {
    title: "Flex Stack",
    description: "Bold, confident, street style influence.",
    icon: "Layers",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
  },
  {
    title: "Animation Stack",
    description: "Stylized 3D and 2D conversions that look expensive.",
    icon: "Wand2",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    hoverBorder: "hover:border-green-500/50",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
  }
];

interface DeckShowcaseProps {
  onJoinWaitlist?: () => void;
}

export const DeckShowcase: React.FC<DeckShowcaseProps> = ({ onJoinWaitlist }) => {
  return (
    <section id="showcase" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* === POPPY DYNAMIC BACKGROUND === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Yellow Orb (Sports) */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[120px] animate-float mix-blend-screen opacity-60"></div>
        
        {/* Pink Orb (Aesthetics) */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[130px] animate-float-delayed mix-blend-screen opacity-60"></div>
        
        {/* Blue Orb (Flex) */}
        <div className="absolute top-1/2 right-[-100px] w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen opacity-50"></div>
        
        {/* Green Orb (Animation) */}
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] animate-float mix-blend-screen opacity-50"></div>
        
        {/* Noise Texture Overlay for grittiness */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Choose your visual deck
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed font-medium">
            You don't need to know *how* to ask for a style. Just find the vibe you like in our visual decks. 
            It's like shopping for clothes, but for your photos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {STACKS.map((stack, index) => (
            <div 
              key={index}
              onClick={onJoinWaitlist}
              className={`group bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#161616] ${stack.hoverBorder} ${stack.hoverShadow} cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-xl ${stack.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/5`}>
                <Icon name={stack.icon} className={`w-6 h-6 ${stack.iconColor}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{stack.title}</h3>
              <p className="text-gray-400 mb-8 h-12 group-hover:text-gray-300 transition-colors">
                {stack.description}
              </p>
              
              <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                Browse Deck 
                <Icon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};