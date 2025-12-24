import React, { useState, useEffect } from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { WaitlistModal } from './components/WaitlistModal';
import { ComingSoon } from './components/ComingSoon';
import { Icon, Logo } from './components/Icons';
import VideoPlayer from "./components/VideoPlayer";

/* ================================
   VIDEO URL CONFIG
===================================*/
const LOWERWEAR_MP4 = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_lowerwear.mp4";
const LOWERWEAR_WEBM = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_lowerwear.webm";
const LOWERWEAR_POSTER = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_lowerwear_poster.webp";

const UPPERWEAR_MP4 = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_upperwear.mp4";
const UPPERWEAR_WEBM = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_upperwear.webm";
const UPPERWEAR_POSTER = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_upperwear_poster.webp";

const CREATOR_MP4 = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_creator.mp4";
const CREATOR_WEBM = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_creator.webm";
const CREATOR_POSTER = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_creator_poster.webp";


/* ================================
   HERO IMAGES
===================================*/
const HERO_IMAGES = [
  "/images/topleft.webp",
  "/images/middleleft.webp",
  "/images/bottomleft.webp",
  "/images/topright.webp",
  "/images/middleright.webp",
  "/images/bottomright.webp"
];
// --- CONFIGURATION: BACKGROUND VIBRANT TILES ---
// Using slightly more colorful/vibrant images for the scrolling wall
const BACKGROUND_TILES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488161628813-99c97485fe11?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614204424926-196a80985228?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
];

// Helper to duplicate array for seamless looping
const MARQUEE_TILES = [...BACKGROUND_TILES, ...BACKGROUND_TILES, ...BACKGROUND_TILES];



function App() {
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<'landing' | 'coming-soon'>('landing');
  const [isLoading, setIsLoading] = useState(true);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('nopromt_signup_date');
    if (stored) {
      const diff = (Date.now() - new Date(stored).getTime()) / (1000 * 60 * 60 * 24);
      if (diff < 7) setView("coming-soon");
    }
    setIsLoading(false);
  }, []);

  const handleSignupSuccess = () => {
    localStorage.setItem("nopromt_signup_date", new Date().toISOString());
    setIsWaitlistOpen(false);
    setView("coming-soon");
    window.scrollTo(0, 0);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  if (isLoading) return null;
  if (view === "coming-soon") return <ComingSoon onBack={() => setView("landing")} />;

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans overflow-x-hidden relative">

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        onSignupSuccess={handleSignupSuccess}
      />

      {/* Navbar */}
      <nav className="w-full z-50 bg-[#000000]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                 <Logo width={32} height={32} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors">nopromt.ai</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform">How it Works</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsWaitlistOpen(true); }} className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform">Visual Decks</a>
            <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }} className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:scale-105 transform">Why Us</a>
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-105"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-12 overflow-hidden">
        
        {/* === Foreground Floating Templates === */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          
          {/* Global Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>

          {/* Floating Composition */}
          <div className="relative w-full max-w-[1400px] h-full opacity-80">
            
           {/* Left Side Images */}
{/* 1. Top Left */}
<div className="absolute left-[5%] top-[15%] w-[200px] h-[280px] md:w-[240px] md:h-[340px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl -rotate-12 animate-float hover:scale-110 hover:z-20 hover:brightness-110 transition-all duration-500 brightness-90">
  <img
    src={`${HERO_IMAGES[0]}?width=800&quality=80&format=webp`}
    alt="Template 1"
    loading="lazy"
    onLoad={() => setLoaded(true)}
    style={{
      filter: loaded ? "blur(0)" : "blur(20px)",
      transition: "filter 0.4s ease",
    }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
</div>

{/* 2. Middle Left */}
<div className="absolute left-[-2%] top-[45%] w-[220px] h-[300px] md:w-[260px] md:h-[360px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl rotate-6 animate-float-delayed hover:scale-110 hover:z-20 hover:brightness-110 transition-all duration-500 brightness-90">
  <img
    src={`${HERO_IMAGES[1]}?width=800&quality=80&format=webp`}
    alt="Template 2"
    loading="lazy"
    onLoad={() => setLoaded(true)}
    style={{
      filter: loaded ? "blur(0)" : "blur(20px)",
      transition: "filter 0.4s ease",
    }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
</div>

{/* 3. Bottom Left */}
<div className="absolute left-[10%] bottom-[10%] w-[180px] h-[250px] md:w-[220px] md:h-[300px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl -rotate-6 animate-float hover:scale-110 hover:z-20 hover:brightness-110 transition-all duration-500 brightness-90">
  <img
    src={`${HERO_IMAGES[2]}?width=800&quality=80&format=webp`}
    alt="Template 3"
    loading="lazy"
    onLoad={() => setLoaded(true)}
    style={{
      filter: loaded ? "blur(0)" : "blur(20px)",
      transition: "filter 0.4s ease",
    }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
</div>

{/* Right Side Images */}
{/* 4. Top Right */}
<div className="absolute right-[5%] top-[12%] w-[210px] h-[290px] md:w-[250px] md:h-[350px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl rotate-12 animate-float-delayed hover:scale-110 hover:z-20 hover:brightness-110 transition-all duration-500 brightness-90">
  <img
    src={`${HERO_IMAGES[3]}?width=800&quality=80&format=webp`}
    alt="Template 4"
    loading="lazy"
    onLoad={() => setLoaded(true)}
    style={{
      filter: loaded ? "blur(0)" : "blur(20px)",
      transition: "filter 0.4s ease",
    }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
</div>

{/* 5. Middle Right */}
<div className="absolute right-[-2%] top-[48%] w-[230px] h-[320px] md:w-[280px] md:h-[400px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl -rotate-3 animate-float hover:scale-110 hover:z-20 hover:brightness-110 transition-all duration-500 brightness-90">
  <img
    src={`${HERO_IMAGES[4]}?width=800&quality=80&format=webp`}
    alt="Template 5"
    loading="lazy"
    onLoad={() => setLoaded(true)}
    style={{
      filter: loaded ? "blur(0)" : "blur(20px)",
      transition: "filter 0.4s ease",
    }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
</div>

{/* 6. Bottom Right */}
<div className="absolute right-[12%] bottom-[5%] w-[190px] h-[260px] md:w-[230px] md:h-[320px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl rotate-12 animate-float-delayed hover:scale-110 hover:z-20 hover:brightness-110 transition-all duration-500 brightness-90">
  <img
    src={`${HERO_IMAGES[5]}?width=800&quality=80&format=webp`}
    alt="Template 6"
    loading="lazy"
    onLoad={() => setLoaded(true)}
    style={{
      filter: loaded ? "blur(0)" : "blur(20px)",
      transition: "filter 0.4s ease",
    }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
</div>


          </div>

          {/* Fade out to black at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent z-20"></div>
          
          {/* Fade out to black at top */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#030712]/90 to-transparent z-20"></div>
        </div>
        {/* === End Background Section === */}


        <div className="container mx-auto px-6 text-center relative z-30 flex flex-col items-center">
          
          <h1
  className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9]"
  style={{
    textShadow: `
      2px 2px 0 #000,
      -2px 2px 0 #000,
      2px -2px 0 #000,
      -2px -2px 0 #000,
      0 0 6px #000
    `
  }}
>
Where intention<br/>
becomes real

</h1>


          {/* Description Box */}
          <div className="max-w-2xl mb-12">
<p
  className="text-lg md:text-xl text-gray-100 leading-relaxed font-medium"
  style={{
    textShadow: `
      1px 1px 0 #000,
      -1px 1px 0 #000,
      1px -1px 0 #000,
      -1px -1px 0 #000,
      0 0 3px #000
    `
  }}
>
  Everything in life begins as a thought.
  What you focus on grows.
  What you clearly visualise starts shaping itself into reality.
  nopromt.ai is built on this principle — a space where intention becomes visible,
  and vision moves closer to existence.
</p>





          </div>

          <button 
            onClick={() => setIsWaitlistOpen(true)}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold px-10 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-500/30 flex items-center gap-2"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
            
            <span className="relative z-20">Get Started</span>
            <Icon name="ArrowRight" className="w-5 h-5 relative z-20 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

       <section className="py-24 bg-[#050505] relative">
        <div className="container mx-auto px-6 max-w-6xl space-y-24">
        {/* CREATOR MODE */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-3">Creator Mode</h2>
              <p className="text-gray-400 text-lg max-w-md">
  Creation starts when your inner vision becomes clear.
  Here, you intentionally bring ideas closer to form.
</p>

            </div>
            <div className="flex-1">
              <VideoPlayer
                mp4={CREATOR_MP4}
                webm={CREATOR_WEBM}
                poster={CREATOR_POSTER}
              />
            </div>
          </div>
          
          {/* LOWERWEAR */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-3">Try-On: Lowerwear</h2>
              <p className="text-gray-400 text-lg max-w-md">
  Before reality catches up, the mind must see it first.
  Visualise outcomes clearly — grounded, realistic, and aligned with how you see yourself.
</p>

            </div>
            <div className="flex-1">
              <VideoPlayer
                mp4={LOWERWEAR_MP4}
                webm={LOWERWEAR_WEBM}
                poster={LOWERWEAR_POSTER}
              />
            </div>
          </div>

          {/* UPPERWEAR */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-3">Try-On: Upperwear</h2>
              <p className="text-gray-400 text-lg max-w-md">
  Manifestation works best when the image feels real.
  When you see it clearly, the mind accepts it as possible.
</p>

            </div>
            <div className="flex-1">
              <VideoPlayer
                mp4={UPPERWEAR_MP4}
                webm={UPPERWEAR_WEBM}
                poster={UPPERWEAR_POSTER}
              />
            </div>
          </div>

          

        </div>
      </section>


      {/* Revamp in 3 Clicks (Value Proposition) */}
      <section id="how-it-works" className="scroll-mt-20 py-24 bg-black/50 backdrop-blur-sm border-y border-white/5 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Revamp in 3 Clicks.</h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
  Manifestation is not about effort.
  It is about clarity.
  When intention is clear, the path simplifies itself.
</p>


              <div className="space-y-10">
                {/* Step 1 */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold border border-white/10 shadow-lg group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">Upload Image</h3>
<p className="text-gray-400">
  Begin with your current reality.
</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold border border-white/10 shadow-lg group-hover:border-pink-500/50 group-hover:text-pink-400 transition-colors">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">Pick a Visual Deck</h3>
<p className="text-gray-400">
  Choose the version that aligns with your inner vision.
</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold border border-white/10 shadow-lg group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">Instant Revamp</h3>
<p className="text-gray-400">
  When vision and intention align, results appear faster.
</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Mockup */}
            <div className="relative group perspective-1000">
              {/* Main Window */}
              <div className="bg-[#0f0f11] rounded-2xl border border-white/10 p-6 shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:rotate-y-2 group-hover:scale-[1.02]">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] hover:scale-125 transition-transform"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:scale-125 transition-transform"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840] hover:scale-125 transition-transform"></div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                  {/* Left: Input Image */}
                  <div className="col-span-5 aspect-[3/4] rounded-xl border-2 border-dashed border-white/10 bg-[#1a1a1a] flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <span className="text-gray-500 text-sm font-medium">Your Photo</span>
                  </div>

                  {/* Right: Controls */}
                  <div className="col-span-7 flex flex-col justify-between">
                     <div className="h-4 bg-[#1a1a1a] rounded w-full mb-4 opacity-50"></div>
                     
                     <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="aspect-square rounded-lg bg-[#1a1a1a] border border-white/5 hover:bg-white/5 transition-colors cursor-pointer"></div>
                        <div className="aspect-square rounded-lg bg-[#1a1a0f] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] relative cursor-pointer transform scale-105">
                          <div className="absolute inset-0 bg-purple-500/10"></div>
                        </div>
                        <div className="aspect-square rounded-lg bg-[#1a1a1a] border border-white/5 hover:bg-white/5 transition-colors cursor-pointer"></div>
                     </div>

                     <div className="mt-auto">
                        <div className="w-full py-3 bg-[#8b5cf6] rounded-lg font-bold text-white text-center shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-default animate-pulse">
                           Revamp Now
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
               <div className="absolute -bottom-6 -right-6 z-20 bg-[#1a1a1a] border border-white/10 rounded-xl p-3 px-4 flex items-center gap-3 shadow-xl animate-float-delayed">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Icon name="CheckCircle2" className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Status</div>
                    <div className="text-white font-bold">100% Realistic</div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Section (Why NoPromt?) */}
      <section id="why-us" className="scroll-mt-20 py-24 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why NoPromt?</h2>
            <p className="text-xl text-gray-400">It's not a changing room, it's a tranformation room</p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
            {/* Header */}
            <div className="grid grid-cols-12 border-b border-white/10 bg-white/5 p-6 md:p-8">
              <div className="col-span-4 text-gray-400 font-bold text-lg">Feature</div>
              <div className="col-span-4 text-gray-400 font-bold text-lg text-center md:text-left pl-2">Other AI Tools</div>
              <div className="col-span-4 text-purple-400 font-bold text-lg pl-2">NoPromt.ai</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-12 border-b border-white/10 p-6 md:p-8 items-center hover:bg-white/5 transition-colors group">
              <div className="col-span-4 text-white font-bold text-lg group-hover:text-purple-200 transition-colors">Ease of Use</div>
              <div className="col-span-4 flex items-center gap-3 text-gray-500">
                <span>Hell of a confusion</span>
              </div>
              <div className="col-span-4 flex items-center gap-3 text-white font-bold">
                <span>3 Clicks Max</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 border-b border-white/10 p-6 md:p-8 items-center hover:bg-white/5 transition-colors group">
              <div className="col-span-4 text-white font-bold text-lg group-hover:text-purple-200 transition-colors">Knowledge Required</div>
              <div className="col-span-4 flex items-center gap-3 text-gray-500">
<span>Mental effort</span>
              </div>
              <div className="col-span-4 flex items-center gap-3 text-white font-bold">
<span>Intentional selection</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-12 border-b border-white/10 p-6 md:p-8 items-center hover:bg-white/5 transition-colors group">
              <div className="col-span-4 text-white font-bold text-lg group-hover:text-purple-200 transition-colors">Output Style</div>
              <div className="col-span-4 flex items-center gap-3 text-gray-500">
<span>Disconnected</span>
              </div>
              <div className="col-span-4 flex items-center gap-3 text-white font-bold">
<span>Believable & grounded</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-12 p-6 md:p-8 items-center hover:bg-white/5 transition-colors group">
              <div className="col-span-4 text-white font-bold text-lg group-hover:text-purple-200 transition-colors">Experience</div>
              <div className="col-span-4 flex items-center gap-3 text-gray-500">
                <span>Toolbox</span>
              </div>
              <div className="col-span-4 flex items-center gap-3 text-white font-bold">
                <span>Discovery</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="join" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-950/20"></div>
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-900/10 rounded-full blur-[100px] animate-pulse-slow"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block p-3 rounded-full bg-brand-900/30 border border-brand-500/30 mb-6 animate-float">
             <Icon name="Sparkles" className="w-6 h-6 text-brand-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join to evolve</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
  Manifestation works faster when you are surrounded by the right energy.
  The inner circle is for early believers — people who understand that clarity
  comes before results, and vision comes before reality.
  Join early to align, influence what is being built,
  and step into the experience before it opens to everyone.
</p>

          <div className="max-w-xl mx-auto">
             <WaitlistForm onSignupSuccess={handleSignupSuccess} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#02040a]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <Logo width={24} height={24} />
            <span className="font-semibold text-gray-300">nopromt.ai</span>
          </div>
          <div className="text-gray-600 text-sm">
            © 2025 nopromt.ai.
          </div>
          <div className="flex gap-6">
            <a href="https://x.com/noprompt1111" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform">Twitter</a>
            <a href="https://www.instagram.com/nopromt1111/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
