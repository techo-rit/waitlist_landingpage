import React, { useState } from 'react';
import { Icon } from './Icons';
import { supabase } from '../supabaseClient';

interface WaitlistFormProps {
  onSignupSuccess?: () => void;
  className?: string;
  compact?: boolean;
  variant?: 'default' | 'hero';
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  onSignupSuccess,
  className = "",
  compact = false,
  variant = 'default'
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (error) {
        console.error("Supabase Error:", error);
        setStatus("error");
        setErrorMessage(error.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");

      if (onSignupSuccess) {
        setTimeout(() => onSignupSuccess(), 1500);
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };


  if (status === 'success') {
    return (
      <div className={`text-center animate-in fade-in zoom-in duration-300 ${compact ? 'p-4' : variant === 'hero' ? 'p-4 bg-bg-surface/40 rounded-2xl backdrop-blur-md border border-border-subtle' : 'p-8 glass-panel rounded-2xl max-w-md mx-auto'}`}>
        <div className="w-12 h-12 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle2" className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Welcome aboard!</h3>
        <p className="text-text-secondary mb-4 text-sm">
          Redirecting you to your reservation status...
        </p>
        <div className="flex justify-center">
          <Icon name="Loader2" className="w-5 h-5 animate-spin text-gold" />
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`w-full max-w-xl mx-auto ${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full bg-bg-surface border border-border-subtle rounded-full px-6 py-4 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all shadow-xl disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-gold-strong text-bg-surface font-bold px-8 py-4 rounded-full hover:bg-gold transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-gold/20"
          >
            {status === 'loading' ? (
              <Icon name="Loader2" className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Join
                <Icon name="ArrowRight" className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
        {status === 'error' && (
          <p className="mt-3 text-red-400 text-sm flex items-center gap-2">
            <Icon name="XCircle" className="w-4 h-4" />
            {errorMessage}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative w-full">
        <div className="relative flex items-center group w-full">
          {/* Icon */}
          <Icon
            name="Sparkles"
            className="absolute left-4 w-5 h-5 text-text-muted group-focus-within:text-gold transition-colors z-10"
          />

          {/* Input Field */}
          <input
            type="email"
            placeholder="email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            // CHANGE 1: Reduced pr-36 to pr-10. 
            // This gives more space for the email text on mobile while still preventing overlap with the button.
            className={`w-full pl-12 pr-10 py-4 bg-bg-surface/80 border ${status === 'error' ? 'border-red-500/50' : 'border-border-subtle'
              } rounded-full text-text-primary placeholder-text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all shadow-xl disabled:opacity-60`}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            // CHANGE 2: Added 'w-fit' and 'whitespace-nowrap'.
            // This ensures the button width is exactly based on the content ("Join" or Loader).
            className="group absolute right-2 top-2 bottom-2 w-fit whitespace-nowrap overflow-hidden bg-white text-black font-medium px-6 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] border border-white/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent z-10"></div>

            {/* Content */}
            <span className="relative z-20 flex items-center gap-2">
              {status === 'loading' ? <Icon name="Loader2" className="w-4 h-4 animate-spin" /> : 'Join'}
            </span>
          </button>
        </div>

        {status === 'error' ? (
          <p className="text-center text-red-400 text-sm mt-4 animate-in fade-in slide-in-from-top-2">
            {errorMessage}
          </p>
        ) : !compact && (
          <p className="text-center text-text-muted text-sm mt-4">
            Join the Innercircle to access exclusive content and updates.
          </p>
        )}
      </form>
    </div>
  );
};
