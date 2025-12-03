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
      <div className={`text-center animate-in fade-in zoom-in duration-300 ${compact ? 'p-4' : variant === 'hero' ? 'p-4 bg-black/40 rounded-2xl backdrop-blur-md border border-white/10' : 'p-8 glass-panel rounded-2xl max-w-md mx-auto'}`}>
        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle2" className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Welcome aboard!</h3>
        <p className="text-gray-300 mb-4 text-sm">
          Redirecting you to your reservation status...
        </p>
        <div className="flex justify-center">
            <Icon name="Loader2" className="w-5 h-5 animate-spin text-brand-400" />
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
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full bg-[#1a1d26] border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-xl disabled:opacity-60"
            />
          </div>
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-purple-500/20"
          >
            {status === 'loading' ? (
              <Icon name="Loader2" className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Join Waitlist 
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
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center group">
          <Icon name="Sparkles" className="absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-brand-400 transition-colors z-10" />
          <input 
            type="email" 
            placeholder="Enter your email address..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            className={`w-full pl-12 pr-36 py-4 bg-gray-900/80 border ${status === 'error' ? 'border-red-500/50' : 'border-gray-700'} rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all shadow-xl disabled:opacity-60`}
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-2 bottom-2 bg-white text-black hover:bg-gray-200 font-bold px-6 rounded-full transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {status === 'loading' ? <Icon name="Loader2" className="w-5 h-5 animate-spin" /> : 'Join List'}
          </button>
        </div>
        
        {status === 'error' ? (
           <p className="text-center text-red-400 text-sm mt-4 animate-in fade-in slide-in-from-top-2">
             {errorMessage}
           </p>
        ) : !compact && (
          <p className="text-center text-gray-500 text-sm mt-4">
            Join 2,000+ creators. We launch next week.
          </p>
        )}
      </form>
    </div>
  );
};