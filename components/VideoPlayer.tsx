import React, { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  mp4: string;
  webm?: string;
  poster?: string;
  alt?: string; // accessibility fallback text
  className?: string;
  loop?: boolean; // default true for short demo loops
  muted?: boolean; // default true for autoplay
  playsInline?: boolean; // default true for mobile inline play
}

/**
 * VideoPlayer
 * - Lazy-loads actual video sources only when visible (saves bandwidth).
 * - Uses poster + blurred placeholder (blur-up) until first frame is ready.
 * - Autoplays (muted) when enters viewport and pauses when out.
 * - Supports webm + mp4 sources (webm preferred).
 */
export default function VideoPlayer({
  mp4,
  webm,
  poster,
  alt = "Demo video",
  className = "",
  loop = true,
  muted = true,
  playsInline = true,
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [attached, setAttached] = useState(false); // whether <source> tags attached to video

  useEffect(() => {
    // Intersection Observer: lazy attach sources and control play/pause
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(el); // only need to attach once
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    // attach sources lazily when in view + set video to preload minimal or metadata
    if (!inView || attached || !videoRef.current) return;

    if (webm) {
      const s = document.createElement("source");
      s.src = webm;
      s.type = "video/webm";
      videoRef.current.appendChild(s);
    }
    if (mp4) {
      const s2 = document.createElement("source");
      s2.src = mp4;
      s2.type = "video/mp4";
      videoRef.current.appendChild(s2);
    }

    // tell browser to start fetching minimal data (metadata) — good compromise for above-fold demos
    try {
      videoRef.current.setAttribute("preload", "metadata");
    } catch (e) { /* ignore */ }

    setAttached(true);
  }, [inView, webm, mp4, attached]);

  useEffect(() => {
    // play/pause based on visibility and readiness
    const v = videoRef.current;
    if (!v) return;

    let playing = false;

    const tryPlay = async () => {
      if (!inView) return;
      if (!loaded) return; // wait until first frame loaded
      try {
        // muted + playsInline required for autoplay on iOS/Android
        await v.play();
        playing = true;
      } catch (e) {
        // autoplay blocked; leave paused but show controls
        playing = false;
      }
    };

    if (inView) {
      tryPlay();
    } else {
      if (!v.paused) v.pause();
    }

    return () => {
      if (v && !v.paused) v.pause();
      playing = false;
    };
  }, [inView, loaded]);

  return (
    <div
      ref={containerRef}
      className={`video-player relative rounded-2xl overflow-hidden ${className}`}
      aria-label={alt}
    >
      {/* Blurred poster background (blur-up) */}
      {poster ? (
        <div
          className="video-poster absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${poster})`,
            filter: loaded ? "blur(0px)" : "blur(18px)",
            transition: "filter 480ms ease, opacity 480ms ease",
            opacity: loaded ? 0 : 1,
          }}
          aria-hidden
        />
      ) : null}

      {/* Actual video element */}
      <video
        ref={videoRef}
        className="w-full h-auto aspect-[16/9] object-cover bg-black"
        poster={poster}
        playsInline={playsInline}
        muted={muted}
        loop={loop}
        controls={false}
        preload="none" // we set preload when attaching sources
        onLoadedData={() => setLoaded(true)}
        onError={() => setLoaded(true)} // avoid stuck state on error
        // show controls if autoplay fails on some browsers (user can then tap)
        onClick={() => {
          const v = videoRef.current;
          if (!v) return;
          if (v.paused) v.play().catch(() => v.controls = true);
          else v.pause();
        }}
      >
        {/* Sources are added dynamically to prevent early fetch; fallback in markup */}
        { /* fallback source if JS fails — still useful */ }
        {webm ? <source src={webm} type="video/webm" /> : null}
        <source src={mp4} type="video/mp4" />
        {/* Fallback link */}
        Your browser does not support the video tag. <a href={mp4}>Download video</a>
      </video>

      {/* Small overlay controls for accessibility / manual play hint */}
      <button
        className="absolute bottom-3 right-3 z-20 bg-bg-surface/90 text-gold border border-gold/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm shadow-sm hidden md:inline-flex items-center gap-2 hover:bg-bg-surface hover:text-gold-strong transition-colors"
        onClick={() => {
          const v = videoRef.current;
          if (!v) return;
          if (v.paused) {
            v.play().catch(() => (v.controls = true));
          } else {
            v.pause();
          }
        }}
        aria-label="Toggle video"
        type="button"
      >
        Play
      </button>
    </div>
  );
}
