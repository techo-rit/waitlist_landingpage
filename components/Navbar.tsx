import React from 'react';
import { Logo } from './Icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full z-50 bg-bg-main/80 backdrop-blur-md border-b border-border-subtle fixed top-0 left-0">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                 <Logo width={32} height={32} />
            </div>
            <span className="text-xl font-bold tracking-tight text-text-primary group-hover:text-gold transition-colors uppercase tracking-widest">nopromt.ai</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleScroll('how-it-works')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">How it Works</button>
            <button onClick={onOpenWaitlist} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">Visual Decks</button>
            <button onClick={() => handleScroll('why-us')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">Why Us</button>
            <button 
              onClick={onOpenWaitlist}
              className="relative overflow-hidden bg-gold-strong text-bg-surface px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gold transition-all shadow-[0_0_15px_rgba(245,199,106,0.15)] hover:shadow-[0_0_25px_rgba(245,199,106,0.4)] hover:scale-105"
            >
              Get Free Access
            </button>
          </div>
        </div>
      </nav>
  );
};
