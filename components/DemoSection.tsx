import React, { useState, useRef } from 'react';
import { VISUAL_DECKS } from '../constants';
import { VisualDeck } from '../types';
import { Icon } from './Icons';
import { generateRemix } from '../services/geminiService';

export const DemoSection: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedDeck, setSelectedDeck] = useState<VisualDeck>(VISUAL_DECKS[0]);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setGeneratedImage(null);
      setError(null);
    }
  };

  const handleGenerate = async () => {
    if (!selectedFile) return;

    setIsGenerating(true);
    setError(null);

    try {
      // Check for API Key permission flow for Veo/Pro Image models
      // @ts-ignore
      if (window.aistudio && window.aistudio.openSelectKey) {
        // @ts-ignore
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
           // @ts-ignore
           await window.aistudio.openSelectKey();
        }
      }

      const result = await generateRemix(selectedFile, selectedDeck.promptModifier);
      setGeneratedImage(result);
    } catch (err: any) {
      setError(err.message || "Something went wrong during generation. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-950/50 skew-y-3 transform origin-bottom-right z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Experience the <span className="text-brand-400">Magic</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Try our "Visual Decks" technology powered by Nano Banana Pro. 
            Upload a photo, pick a vibe, and watch it transform in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left: Controls */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Step 1: Upload */}
            <div className="glass-panel rounded-2xl p-6 transition-all hover:border-brand-500/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">1. Input Image</h3>
                <span className="text-xs font-mono text-brand-400 border border-brand-500/20 px-2 py-1 rounded">ORIGINAL</span>
              </div>
              
              <div 
                className={`border-2 border-dashed rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer transition-colors ${selectedFile ? 'border-brand-500 bg-brand-900/20' : 'border-gray-700 hover:border-gray-500 hover:bg-gray-800/50'}`}
                onClick={() => fileInputRef.current?.click()}
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="h-full w-full object-cover rounded-lg" />
                ) : (
                  <>
                    <Icon name="Upload" className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-400">Click to upload photo</p>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Step 2: Select Deck */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">2. Pick Visual Deck</h3>
                <span className="text-xs font-mono text-accent border border-accent/20 px-2 py-1 rounded">STYLE</span>
              </div>

              <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto custom-scrollbar pr-1">
                {VISUAL_DECKS.map((deck) => (
                  <button
                    key={deck.id}
                    onClick={() => setSelectedDeck(deck)}
                    className={`p-3 rounded-xl text-left transition-all border ${selectedDeck.id === deck.id ? 'bg-brand-900/40 border-brand-400 ring-1 ring-brand-400' : 'bg-gray-800/40 border-transparent hover:bg-gray-800'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${deck.color} text-white`}>
                       <Icon name={deck.iconName} className="w-4 h-4" />
                    </div>
                    <div className="font-medium text-sm text-white">{deck.name}</div>
                    <div className="text-xs text-gray-400 truncate">{deck.category}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Generate Action */}
            <button
              onClick={handleGenerate}
              disabled={!selectedFile || isGenerating}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
                !selectedFile || isGenerating 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-brand-600 to-accent text-white hover:scale-[1.02] shadow-brand-500/25'
              }`}
            >
              {isGenerating ? (
                <>
                  <Icon name="Loader2" className="w-6 h-6 animate-spin" />
                  Revamping...
                </>
              ) : (
                <>
                  <Icon name="Wand2" className="w-6 h-6" />
                  Revamp Photo
                </>
              )}
            </button>
            {error && (
               <div className="p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200 text-sm mt-2">
                 {error}
               </div>
            )}
          </div>

          {/* Right: Result */}
          <div className="lg:col-span-8">
            <div className="h-full min-h-[500px] glass-panel rounded-3xl p-4 md:p-8 flex items-center justify-center relative overflow-hidden group">
              
              {/* Decorative Background */}
              <div className="absolute inset-0 mesh-gradient opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

              {generatedImage ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center animate-in zoom-in duration-500">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 max-h-[600px]">
                     <img src={generatedImage} alt="Revamped Result" className="w-full h-full object-contain" />
                     <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-brand-300 border border-brand-500/30 flex items-center gap-2">
                        <Icon name="Sparkles" className="w-3 h-3" />
                        GENERATED WITH {selectedDeck.name.toUpperCase()}
                     </div>
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                     <a 
                       href={generatedImage} 
                       download={`nopromt-revamp-${Date.now()}.png`}
                       className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
                     >
                       Download Image
                       <Icon name="Upload" className="w-4 h-4 rotate-180" />
                     </a>
                     <button 
                        onClick={() => setGeneratedImage(null)}
                        className="px-6 py-2 rounded-full font-bold text-sm text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/30"
                     >
                        Reset
                     </button>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8 max-w-md mx-auto">
                   {previewUrl ? (
                      <div className="relative mb-6 mx-auto w-64 h-64 rounded-xl overflow-hidden border border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
                         <img src={previewUrl} alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                         <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <span className="text-xs font-mono bg-black/50 px-2 py-1 rounded text-gray-300 backdrop-blur-sm">PREVIEW</span>
                         </div>
                      </div>
                   ) : (
                     <div className="w-32 h-32 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                        <Icon name="Sparkles" className="w-12 h-12 text-gray-600 group-hover:text-brand-400 transition-colors" />
                     </div>
                   )}
                   
                   <h3 className="text-2xl font-bold text-gray-300 mb-2">
                     {previewUrl ? "Ready to Revamp" : "Waiting for Magic"}
                   </h3>
                   <p className="text-gray-500">
                     {previewUrl 
                       ? "Select a Visual Deck on the left and hit 'Revamp Photo' to transform this image."
                       : "Upload an image and select a style to see the power of nopromt.ai"}
                   </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
