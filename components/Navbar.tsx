import React, { useState, useEffect } from 'react';
import { Logo } from './Icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleScroll = (id: string) => {
        setIsMenuOpen(false);
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
                <Link 
                    to="/" 
                    className="flex items-center gap-2 group cursor-pointer z-50 relative" 
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMenuOpen(false);
                    }}
                >
                    <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <Logo width={32} height={32} />
                    </div>
                    <span className="hidden md:block text-xl font-bold tracking-tight text-text-primary group-hover:text-gold transition-colors uppercase tracking-widest">nopromt.ai</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => handleScroll('how-it-works')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">How it Works</button>
                    <button onClick={onOpenWaitlist} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">Visual Decks</button>
                    <button onClick={() => handleScroll('why-us')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">Why Us</button>
                    <Link to="/pricing" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">Pricing</Link>
                    <button
                        onClick={onOpenWaitlist}
                        className="group relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] hover:scale-105 border border-white/50"
                    >
                        {/* Shimmer effect (Silver sheen) */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent z-10"></div>

                        {/* Content */}
                        <span className="relative z-20">Get Free Access</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden z-50 text-text-primary p-2 hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-bg-main/98 backdrop-blur-2xl z-40 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                    
                    {/* Background Ambient Glow */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />

                    <div className={`flex flex-col items-center gap-8 transition-all duration-700 delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <button onClick={() => handleScroll('how-it-works')} className="text-3xl font-light text-white/90 hover:text-gold transition-colors tracking-tight">How it Works</button>
                        <button onClick={onOpenWaitlist} className="text-3xl font-light text-white/90 hover:text-gold transition-colors tracking-tight">Visual Decks</button>
                        <button onClick={() => handleScroll('why-us')} className="text-3xl font-light text-white/90 hover:text-gold transition-colors tracking-tight">Why Us</button>
                        <Link to="/pricing" className="text-3xl font-light text-white/90 hover:text-gold transition-colors tracking-tight" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                        
                        <div className="h-px w-16 bg-white/10 my-4"></div>

                        <button
                            onClick={() => {
                                onOpenWaitlist();
                                setIsMenuOpen(false);
                            }}
                            className="group relative overflow-hidden bg-white text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent z-10"></div>
                            <span className="relative z-20">Get Free Access</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
