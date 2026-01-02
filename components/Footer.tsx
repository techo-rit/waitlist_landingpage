import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 border-t border-border-subtle bg-bg-main">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-6">

        {/* LEFT SIDE: Copyright Text */}
        {/* Mobile: Centered | Desktop: Left aligned */}
        <div className="text-text-muted text-sm tracking-wide text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved, </span>
          <span className="font-semibold text-text-primary">nopromt.ai</span>
        </div>

        {/* RIGHT SIDE: Links */}
        {/* Mobile: Wrapped cluster with spacing (No borders) */}
        {/* Desktop: Horizontal list with vertical dividers */}
        <div className="flex flex-wrap justify-center md:justify-end items-center text-sm text-text-muted gap-x-6 gap-y-2 md:gap-0">

          <Link 
            to="/privacy" 
            className="hover:text-text-primary transition-colors md:px-4 md:border-r md:border-border-subtle"
          >
            Privacy Policy
          </Link>

          <Link 
            to="/terms" 
            className="hover:text-text-primary transition-colors md:px-4 md:border-r md:border-border-subtle"
          >
            Terms of Service
          </Link>

          <Link 
            to="/refund-policy" 
            className="hover:text-text-primary transition-colors md:px-4 md:border-r md:border-border-subtle"
          >
            Refund Policy
          </Link>

          <Link 
            to="/contact" 
            className="hover:text-text-primary transition-colors md:px-4 md:pl-4"
          >
            Contact
          </Link>

        </div>

      </div>
    </footer>
  );
};