# AI Agent Instructions — nopromt.ai Waitlist

## Big Picture
- React + TypeScript + Vite SPA focused on collecting waitlist emails; Supabase insert happens client-side, no backend layer. Core flow: signup → localStorage timestamp → 7-day Coming Soon gate handled in `App.tsx` and `components/ComingSoon.tsx`.
- Routing via react-router-dom v7: `App.tsx` wraps all pages; legal pages use `components/LegalLayout.tsx`; `components/ScrollToTop.tsx` resets scroll on navigation.
- Styling uses Tailwind CSS with PostCSS build pipeline. Config in `tailwind.config.js`; PostCSS config in `postcss.config.js`.

## Data & Services
- Supabase client in `supabaseClient.ts` with persistSession: false and env var validation. Waitlist write: `await supabase.from("waitlist").insert([{ email }])` in `components/WaitlistForm.tsx`.
- Env: Vite-style `import.meta.env.VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` only. App fails fast with helpful errors if missing.

## UX State Machine
- Landing vs Coming Soon view tracked by localStorage key `nopromt_signup_date`; diff < 7 days → show Coming Soon. See LandingPage inside `App.tsx`.
- Signup success callback sets timestamp, scrolls to top, flips view. Coming Soon lets user navigate back without clearing cooldown.

## Components & Patterns
- `components/WaitlistForm.tsx`: states idle/loading/success/error; strict email validation; timeout protection; user-friendly error messages.
- `components/WaitlistModal.tsx`: overlay wrapper to reuse form; controlled open/close via parent state.
- `components/VideoPlayer.tsx`: IntersectionObserver lazy-load; requires `.mp4`, `.webm`, and poster props; autoplay muted when visible.
- Icons centralized in `components/Icons.tsx` via lucide-react; use `<Icon name="X" />` for consistency.

## Styling System
- Tailwind classes expected; common glass morphism stack `bg-black/60 backdrop-blur-lg border-white/10`. Brand colors in `tailwind.config.js`; fonts Inter + Playfair Display.
- Custom animations (`float`, `shimmer`, `marquee`, `marquee-reverse`) defined in `tailwind.config.js`; reuse class names, do not reimplement.
- Additional CSS in `index.css` for video sizing and `.scrollbar-hide` utility.

## Assets
- Hero uses local `/public/images/*.webp` via HERO_IMAGES array in `App.tsx`; keep srcSet with `?width=400|800&quality=80&format=webp`, `loading="lazy"`, `decoding="async"`.
- Background marquee tiles in `App.tsx` duplicated for seamless scroll (`MARQUEE_TILES`).
- Video URLs are Supabase Storage constants at top of `App.tsx`; keep `.mp4`, `.webm`, and `_poster.webp` trio naming.

## Dev Workflow
- Scripts: `npm run dev`, `npm run build`, `npm run preview`. Vite dev server binds 0.0.0.0:3000 (see `vite.config.ts`).
- Tailwind built via PostCSS with `@tailwindcss/postcss` plugin. Directives in `index.css`.

## Voice & Copy
- Product tone: manifestation, vision, clarity. Avoid technical jargon; prefer phrases like "your vision starts materializing". Hero glow text shadow in `App.tsx` is intentional; keep mystical/aspirational voice.
