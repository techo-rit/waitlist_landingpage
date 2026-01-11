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
    
    // Store scroll position when menu opens (fixes iOS Safari position:fixed issue)
    const scrollPositionRef = React.useRef(0);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open while preserving scroll position
    useEffect(() => {
        if (isMenuOpen) {
            // Save current scroll position BEFORE locking
            scrollPositionRef.current = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            // Offset body to maintain visual position
            document.body.style.top = `-${scrollPositionRef.current}px`;
        } else {
            // Restore scroll position AFTER unlocking
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            // Restore the saved scroll position
            if (scrollPositionRef.current > 0) {
                window.scrollTo(0, scrollPositionRef.current);
            }
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
        };
    }, [isMenuOpen]);

    const handleScroll = (id: string) => {
        // Close menu first - this will restore scroll position via useEffect
        setIsMenuOpen(false);
        
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation + DOM update before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        } else {
            // Wait for menu close animation and body position restore
            // requestAnimationFrame ensures DOM has updated after state change
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            });
        }
    };

    return (
        <nav className="w-full z-50 bg-bg-main/80 backdrop-blur-md border-b border-border-subtle fixed top-0 left-0">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between relative z-50">
                <Link
                    to="/"
                    className="flex items-center gap-2 group cursor-pointer"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMenuOpen(false);
                    }}
                >
                    <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <Logo width={32} height={32} />
                    </div>
                    <span className="hidden md:block text-xl font-bold tracking-tight text-text-primary group-hover:text-gold transition-colors tracking-widest">nopromt.ai</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => handleScroll('how-it-works')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">How it works</button>
                    <button onClick={onOpenWaitlist} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">Visual Decks</button>
                    <button onClick={() => handleScroll('why-us')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">Why us</button>
                    <Link to="/pricing" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform">Pricing</Link>
                    <button
                        onClick={onOpenWaitlist}
                        className="group relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] hover:scale-105 border border-white/50"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent z-10"></div>
                        <span className="relative z-20">Get Free Access</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-text-primary hover:text-gold transition-colors z-50 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Fixed UI/UX */}
            <div
                className={`fixed inset-0 h-screen w-screen z-40 md:hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
            >
                {/* UX FIX: 
                    1. Increased blur to 3xl for better separation from hero section.
                    2. Increased opacity to /95 to prevent text bleed-through.
                    3. Added bg-black fallback if bg-bg-main is transparent.
                */}
                <div className={`absolute inset-0 bg-black/90 sm:bg-bg-main/95 backdrop-blur-3xl transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />

                {/* Ambient Glow */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />

                {/* UX FIX: Alignment Layout 
                    Changed justify-center to justify-start with pt-32.
                    This creates "Optical Centering" which looks better on mobile 
                    and prevents items from overlapping with the header/logo.
                */}
                <div className={`relative flex flex-col items-center gap-8 w-full pt-32 px-6 transition-transform duration-500 delay-75 ${isMenuOpen ? 'translate-y-0' : 'translate-y-8'}`}>
                    <button onClick={() => handleScroll('how-it-works')} className="text-3xl font-light text-white/90 hover:text-gold transition-colors tracking-tight w-full text-center">How it works</button>
                    <button onClick={onOpenWaitlist} className="text-3xl font-light text-white/90 hover:text-gold transition-colors tracking-tight w-full text-center">Visual Decks</button>
                    <button onClick={() => handleScroll('why-us')} className="text-3xl font-light text-white/90 hover:text-gold transition-colors tracking-tight w-full text-center">Why us</button>
                    <Link to="/pricing" className="text-3xl font-light text-white/90 hover:text-gold transition-colors tracking-tight w-full text-center" onClick={() => setIsMenuOpen(false)}>Pricing</Link>

                    <div className="h-px w-16 bg-white/10 my-2"></div>

                    <button
                        onClick={() => {
                            onOpenWaitlist();
                            setIsMenuOpen(false);
                        }}
                        className="group relative overflow-hidden bg-white text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
                    >
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent z-10"></div>
                        <span className="relative z-20">Get Free Access</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};