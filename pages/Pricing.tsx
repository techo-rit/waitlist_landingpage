import React, { useState, useRef } from 'react';
import { Icon } from '../components/Icons';

export const Pricing = () => {
  // 1. State to track the active slide index (0 or 1)
  const [activeSlide, setActiveSlide] = useState(0);
  
  // 2. Ref to access the scrollable container
  const scrollContainerRef = useRef(null);

  // 3. Handle scroll event to update dots based on position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Calculate which slide is focused based on scroll position
      // We use Math.round to snap the index to the closest integer (0 or 1)
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.6)); 
      if (newIndex !== activeSlide && (newIndex === 0 || newIndex === 1)) {
        setActiveSlide(newIndex);
      }
    }
  };

  // 4. Function to click a dot and scroll to that section
  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const scrollAmount = index * scrollContainerRef.current.clientWidth * 0.85; // approx width of card
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  return (
    <div className="min-h-screen bg-bg-main pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight">
          UNLOCK YOUR POTENTIAL 
        </h1>
        <p className="text-xl md:text-2xl text-gold font-serif opacity-80">
          Rich thinking starts with “What's in there?”
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Mobile: Horizontal Snap Scroll | Desktop: Grid */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide"
        >
          
          {/* Plan 1: Essentials */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center relative group">
            <div className="h-full bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5">
              {/* Trust Badge */}
              <div className="mb-6 text-left">
                <span className="text-xs uppercase tracking-widest text-text-muted/60 font-medium">
                  100% refund on unused creations
                </span>
              </div>

              <h3 className="text-2xl uppercase font-serif text-text-primary mb-2">Essentials</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-text-primary">$1.55</span>
                <span className="text-text-muted">/ month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-text-secondary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>20 creations per month</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>100% refund of unused creations anytime</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>Be a part of the Innercircle to manifest</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>Standard support</span>
                </li>
              </ul>

              <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg shadow-[0_0_20px_rgba(245,199,106,0.3)] transition-all duration-200 hover:-translate-y-1  active:scale-95 relative overflow-hidden">
                Get Essentials
              </button>
            </div>
          </div>

          {/* Plan 2: Ultimate */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center relative group">
            {/* Gold Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-gold/40 to-transparent rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full bg-[#0F0F0F] border border-gold/30 rounded-2xl p-8 flex flex-col shadow-2xl shadow-gold/5 transition-all duration-300 hover:shadow-gold/10">
              
              {/* Premium Tag */}
              <div className="absolute top-0 right-0">
                <div className="bg-gold text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                  Premium
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mb-6 text-left">
                <span className="text-xs uppercase tracking-widest text-gold/60 font-medium">
                  100% refund on unused creations
                </span>
              </div>
              <h3 className="text-2xl uppercase font-serif text-gold mb-2">Ultimate</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-text-primary">$9</span>
                <span className="text-text-muted">/ month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-text-primary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>135 creations per month</span>
                </li>
                <li className="flex items-start gap-3 text-text-primary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>100% refund of unused creations anytime</span>
                </li>
                <li className="flex items-start gap-3 text-text-primary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>Be a part of the Innercircle to manifest</span>
                </li>
                <li className="flex items-start gap-3 text-text-primary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-start gap-3 text-text-primary">
                  <Icon name="CheckCircle2" className="w-5 h-5 text-gold mt-0.5" />
                  <span>Early access to “premium” features</span>
                </li>
              </ul>

              <button className="w-full py-4 rounded-xl bg-gold text-black font-bold text-lg shadow-[0_0_20px_rgba(245,199,106,0.3)] transition-all duration-200 hover:-translate-y-1  active:scale-95 relative overflow-hidden">
                <span className="relative z-10">Upgrade to Ultimate</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
        
        {/* Mobile Scroll Indicator (Dynamic Dots) */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {/* Dot 1 */}
          <button 
            onClick={() => scrollToSlide(0)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              activeSlide === 0 ? 'bg-gold w-4' : 'bg-white/20'
            }`}
          />
          {/* Dot 2 */}
          <button 
            onClick={() => scrollToSlide(1)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              activeSlide === 1 ? 'bg-gold w-4' : 'bg-white/20'
            }`}
          />
        </div>
      </div>
    </div>
  );
};