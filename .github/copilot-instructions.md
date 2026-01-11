# AI Agent Instructions for nopromt.ai Waitlist Landing Page

## Project Overview
React 19 + TypeScript + Vite landing page for nopromt.ai. Purpose: collect waitlist signups via Supabase with a 7-day "Coming Soon" cooldown view stored in `localStorage`.

## Critical: Non-Standard Setup

### Tailwind via CDN (No Build Step)
**All Tailwind config lives in [index.html](index.html) (~line 100)**, not in `tailwind.config.js`. Custom theme includes:
- Colors: `bg-main`, `bg-surface`, `gold`, `gold-strong`, `brand-*` palette
- Fonts: `font-sans` (Inter), `font-serif` (Playfair Display)
- Animations: `float`, `shimmer`, `marquee`, `marquee-reverse`

### Environment Variables
Use `import.meta.env.VITE_*` only—never `process.env`. Required: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.

## Architecture

### Key Files
| File | Purpose |
|------|---------|
| [App.tsx](App.tsx) | Routes, `LandingPage` view state, all media URL constants |
| [index.html](index.html) | Tailwind config, meta tags, Schema.org, fonts |
| [supabaseClient.ts](supabaseClient.ts) | Singleton client (`persistSession: false`) |
| [components/WaitlistForm.tsx](components/WaitlistForm.tsx) | Direct Supabase insert, 4 states |

### Data Flow
```
WaitlistForm → supabase.from("waitlist").insert([{ email }])
            → localStorage.setItem("nopromt_signup_date", ISO)
            → setView("coming-soon") for 7 days
```

## Patterns & Conventions

### Media Assets
- **Videos**: Define as constants in `App.tsx` top. Always provide `.webm` + `.mp4` + `.webp` poster.
- **Images**: Use `srcSet` with `?width=400` and `?width=800` + `loading="lazy"` + `decoding="async"`.
- **Hero images**: Local in `public/images/*.webp` (6 files: topleft, middleleft, bottomleft, topright, middleright, bottomright).

### Styling
- Glass morphism: `bg-bg-surface/60 backdrop-blur-lg border border-border-subtle`
- Gold accents: `text-gold`, `bg-gold/20`, `border-gold`
- Icons: `lucide-react` via `<Icon name="CheckCircle2" />` wrapper in [Icons.tsx](components/Icons.tsx)

### Routing
`react-router-dom` v7. Legal pages use `<LegalLayout>` wrapper. `<ScrollToTop>` resets scroll on navigation.

## Commands
```bash
npm run dev      # Vite on localhost:3000
npm run build    # Production to dist/
npm run preview  # Preview production build
```

## Copy Voice
Aspirational, mystical. Use "vision," "manifest," "transform"—avoid "AI model," "processing." Example: "Your vision starts materializing" not "Processing your image."
