import React, { useEffect } from 'react';
import { Icon, Logo } from './Icons';
import { WaitlistForm } from './WaitlistForm';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignupSuccess: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, onSignupSuccess }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-bg-main/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-bg-surface border border-border-subtle rounded-3xl w-full max-w-lg p-8 shadow-2xl shadow-gold/20 animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors p-2 rounded-full hover:bg-bg-main/50"
        >
          <Icon name="X" className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
             <Logo width={48} height={48} />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2 uppercase tracking-wide">Join the Innercircle</h2>
          <p className="text-text-secondary">
            Be the first to experience the "ai which requirs no prompt" when we launch.
          </p>
        </div>

        <WaitlistForm onSignupSuccess={onSignupSuccess} compact={true} />
        
        <p className="text-center text-xs text-gray-600 mt-6">
           Innercircle members get free access because we believe in Karma.
        </p>
      </div>
    </div>
  );
};