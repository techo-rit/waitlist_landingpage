import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center px-6 text-center">
      {/* Large 404 text */}
      <h1 className="text-[150px] md:text-[200px] font-bold text-gold/20 leading-none select-none">
        404
      </h1>
      
      {/* Error message */}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 -mt-8">
        Page Not Found
      </h2>
      
      <p className="text-text-secondary text-lg max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. 
        Let's get you back on track.
      </p>
      
      {/* Back to home button */}
      <Link
        to="/"
        className="group relative overflow-hidden bg-gold-strong text-bg-surface font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-gold/30 flex items-center gap-2"
      >
        <Icon name="ArrowLeft" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};