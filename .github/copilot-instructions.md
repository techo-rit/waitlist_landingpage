# AI Agent Instructions for nopromt.ai Waitlist Landing Page

## Project Overview
This is a React + TypeScript + Vite waitlist landing page for nopromt.ai, a "visual manifestation" platform. The app allows users to upload images and apply style transformations through "Visual Decks". The design philosophy emphasizes intention, clarity, and manifestation.

## Architecture & Key Patterns

### Component Structure
- **[App.tsx](App.tsx)**: Main entry point. Handles routing (`react-router-dom`), global layout (Navbar, Footer), and the main `LandingPage` logic.
- **[LandingPage](App.tsx)**: Internal component managing view states (`'landing' | 'coming-soon'`) based on `localStorage` persistence.
- **Pages**: Static content routes in `pages/` (`Terms`, `Privacy`, `RefundPolicy`, `Contact`).
- **Components**: Functional components using hooks. Located in `components/`.
- **State Persistence**: `localStorage.setItem('nopromt_signup_date')` tracks signups to conditionally show the "Coming Soon" view.

### Services Architecture
- **[supabaseClient.ts](supabaseClient.ts)**: Singleton Supabase client. Uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- **[services/geminiService.ts](services/geminiService.ts)**: Handles AI image generation.
  - **Library**: `@google/genai`
  - **Model**: `gemini-3-pro-image-preview`
  - **Key**: Uses `process.env.API_KEY` (injected via Vite config).

### Environment Variables Pattern
**Critical**: This project uses a hybrid environment variable pattern:
1. **Standard Vite**: `import.meta.env.VITE_*` for Supabase config.
2. **Build-Time Injection**: `process.env.API_KEY` and `process.env.GEMINI_API_KEY` are injected via `define` in **[vite.config.ts](vite.config.ts)**.

## Styling Conventions

### Tailwind via CDN (Critical)
- **Configuration**: Tailwind is loaded via **CDN** in **[index.html](index.html)**.
- **Custom Config**: The `tailwind.config` object is defined inside a `<script>` tag in `index.html`.
  - **Colors**: Custom `brand-*`, `gold-*`, `bg-main` defined here.
  - **Fonts**: `Inter` and `Playfair Display`.
  - **Animations**: Custom `float`, `shimmer`, `marquee` keyframes defined here.
- **No Build Step**: There is NO `tailwind.config.js` or PostCSS build step for Tailwind. Edit `index.html` to change the theme.

### Common Patterns
- **Glass Morphism**: `bg-black/60 backdrop-blur-* border-white/10`.
- **Dark Theme**: Base backgrounds `bg-[#030712]` or `bg-black`.
- **Text Shadows**: Custom inline styles used for hero text glow effects (see `App.tsx`).

## Media Asset Management

### Video Handling
- **[VideoPlayer.tsx](components/VideoPlayer.tsx)**: Custom component for `.mp4` and `.webm` playback.
- **Hosting**: Assets stored in Supabase Storage. URLs are defined as constants in `App.tsx`.
- **Poster Images**: Always provide a `.webp` poster for lazy loading.

### Images
- **Lazy Loading**: Use `loading="lazy"` and `decoding="async"`.
- **Source**: Local images in `public/images/` or remote Unsplash URLs (defined in `App.tsx`).

## Development Workflow

### Commands
- `npm run dev`: Start dev server (Port 3000).
- `npm run build`: Production build.

### Key Files
- **[index.html](index.html)**: **Primary config file** for Tailwind, meta tags, and CDN scripts.
- **[vite.config.ts](vite.config.ts)**: Handles env var injection (`process.env`).
- **[constants.ts](constants.ts)**: Configuration for "Visual Decks" (styles, prompts, icons).

## Philosophical Tone
- **Keywords**: Manifestation, Intention, Clarity, Vision, Reality.
- **Voice**: "What you see clearly becomes real." Avoid technical jargon in user-facing copy.
