import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
      <footer className="w-full py-8 border-t border-border-subtle bg-bg-main">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          
          {/* LEFT SIDE: Copyright Text (Matches the reference image style) */}
          <div className="text-text-muted text-sm tracking-wide">
            <span>&copy; 2025 All Rights Reserved, </span>
            <span className="font-semibold text-text-primary">nopromt.ai</span>
          </div>
          
          {/* RIGHT SIDE: Links with Vertical Dividers */}
          <div className="flex flex-wrap justify-center md:justify-end items-center text-sm text-text-muted">
            
            <Link to="/privacy" className="hover:text-text-primary transition-colors px-3 md:px-4 border-r border-border-subtle last:border-r-0 last:pr-0">
              Privacy Policy
            </Link>
            
            <Link to="/terms" className="hover:text-text-primary transition-colors px-3 md:px-4 border-r border-border-subtle last:border-r-0 last:pr-0">
              Terms of Service
            </Link>
            
            <Link to="/refund-policy" className="hover:text-text-primary transition-colors px-3 md:px-4 border-r border-border-subtle last:border-r-0 last:pr-0">
              Refund Policy
            </Link>

            <Link to="/contact" className="hover:text-text-primary transition-colors px-3 md:px-4 last:pr-0">
              Contact
            </Link>
            
          </div>

        </div>
      </footer>
  );
};