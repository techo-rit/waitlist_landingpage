import React from 'react';
import { Logo } from './Icons';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
      <footer className="py-12 border-t border-border-subtle bg-bg-main">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <Logo width={24} height={24} />
            <span className="font-semibold text-text-muted">nopromt.ai</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <Link to="/terms" className="hover:text-text-primary transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-text-primary transition-colors">Privacy</Link>
            <Link to="/refund-policy" className="hover:text-text-primary transition-colors">Refunds</Link>
            <Link to="/contact" className="hover:text-text-primary transition-colors">Contact</Link>
          </div>

          <div className="text-text-muted text-sm">
            © 2025 nopromt.ai.
          </div>
          <div className="flex gap-6">
            <a href="https://x.com/noprompt1111" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors hover:scale-110 transform">Twitter</a>
            <a href="https://www.instagram.com/nopromt1111/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors hover:scale-110 transform">Instagram</a>
          </div>
        </div>
      </footer>
  );
};
