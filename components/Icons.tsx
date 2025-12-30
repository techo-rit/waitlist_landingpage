import React from 'react';
import { Trophy, Sparkles, Gem, Film, Cpu, Zap, Upload, Wand2, ChevronRight, Loader2, CheckCircle2, XCircle, X, ArrowLeft, ArrowRight, Layers } from 'lucide-react';

export const Logo = ({ className, width = 40, height = 40 }: { className?: string, width?: number | string, height?: number | string }) => (
<svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="32" fill="#000000" />
    <path
      d="M21 46V29C21 20 32 20 32 29V46M32 21C42 21 47 25 47 31C47 37 42 41 32 41"
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
</svg>
);

export const Icon = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'Trophy': return <Trophy className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Diamond': return <Gem className={className} />;
    case 'Film': return <Film className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Upload': return <Upload className={className} />;
    case 'Wand2': return <Wand2 className={className} />;
    case 'ChevronRight': return <ChevronRight className={className} />;
    case 'Loader2': return <Loader2 className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    case 'XCircle': return <XCircle className={className} />;
    case 'X': return <X className={className} />;
    case 'ArrowLeft': return <ArrowLeft className={className} />;
    case 'ArrowRight': return <ArrowRight className={className} />;
    case 'Layers': return <Layers className={className} />;
    default: return <Sparkles className={className} />;
  }
};