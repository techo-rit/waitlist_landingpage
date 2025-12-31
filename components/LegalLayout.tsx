import React from 'react';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
  date?: string;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, children, date }) => {
  return (
    <div className="min-h-screen bg-bg-main text-text-primary pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary uppercase tracking-wide">{title}</h1>
        {date && <p className="text-text-muted mb-12 uppercase tracking-wider text-sm font-medium border-b border-border-subtle pb-6">{date}</p>}
        <div className="space-y-8 text-text-secondary leading-relaxed text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};
