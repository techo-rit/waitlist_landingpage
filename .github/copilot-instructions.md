# AI Agent Instructions for nopromt.ai Waitlist Landing Page

## Project Overview
React + TypeScript + Vite waitlist landing page for nopromt.ai, an AI style transformation platform. Core purpose: collect waitlist signups via Supabase, with a time-gated "Coming Soon" view. Design philosophy: manifestation, intention, visual clarity over technical complexity.

## Architecture & Data Flow

### Component Hierarchy
- **[App.tsx](App.tsx)**: Root component. `<Router>` wraps all routes, `<Navbar>` and `<Footer>` are global.
  - `<LandingPage>`: Internal component with view state machine (`'landing' | 'coming-soon'`) driven by `localStorage`.
  - State transition: After signup → `localStorage.setItem('nopromt_signup_date')` → redirects to "Coming Soon" for 7 days.
- **Components** (`components/`): All functional with hooks. Key patterns:
  - **[WaitlistForm.tsx](components/WaitlistForm.tsx)**: 3 states (`idle`, `loading`, `success`). Direct Supabase insert, no API layer.
  - **[VideoPlayer.tsx](components/VideoPlayer.tsx)**: Lazy-loads video sources on `IntersectionObserver`, autoplay when visible. Always provide `.webm` + `.mp4` + poster.
  - **[WaitlistModal.tsx](components/WaitlistModal.tsx)**: Reusable modal wrapper for waitlist form in overlay contexts.
- **Pages** (`pages/`): Static legal/info routes (`Terms`, `Privacy`, `Contact`, `Pricing`). Use `<LegalLayout>` wrapper component.

### Data & Services
- **[supabaseClient.ts](supabaseClient.ts)**: Singleton client with `persistSession: false` (no auth needed). All database calls are direct (no service layer):
  ```tsx
  await supabase.from("waitlist").insert([{ email }])
  ```
- **[constants.ts](constants.ts)**: Config for "Visual Decks" (style categories). Structure:
  ```tsx
  { id, name, category: StackCategory, promptModifier, iconName, color }
  ```
- **[types.ts](types.ts)**: `StackCategory` enum + `VisualDeck` interface. Type-first approach.

### Environment Variables (Vite)
- **CRITICAL**: Use `import.meta.env.VITE_*` only. Never `process.env` (will break).
- Required: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.

## Styling Architecture (Non-Standard)

### Tailwind via CDN (No Build Step)
- **Configuration location**: `<script>` tag in **[index.html](index.html)** line ~100.
- **Custom theme**: `brand` color palette (gold shades), `font-sans: Inter`, `font-serif: Playfair Display`.
- **Custom animations**: `float`, `shimmer`, `marquee`, `marquee-reverse` (all defined inline).
- **To change theme**: Edit `tailwind.config` object in `index.html`. No `tailwind.config.js` exists.

### Design Patterns
- **Glass Morphism**: `bg-black/60 backdrop-blur-lg border-white/10` (ubiquitous).
- **Color Palette**: Dark base (`bg-[#030712]`, `bg-black`), gold accents (`text-gold`, `bg-gold/20`).
- **Text Effects**: Hero uses inline `textShadow` for glow (see `App.tsx` hero section).
- **Responsive Images**: Always use `srcSet` with `?width=400` and `?width=800` variants + `loading="lazy"` + `decoding="async"`.

### Custom CSS ([index.css](index.css))
- VideoPlayer support styles (`.video-player`, `.aspect-[16/9]`).
- Scrollbar hiding utility (`.scrollbar-hide`).

## Media Asset Patterns

### Video
- **Sources**: Supabase Storage URLs (defined as constants at top of `App.tsx`).
- **Naming**: `LOWERWEAR_MP4`, `LOWERWEAR_WEBM`, `LOWERWEAR_POSTER` pattern.
- **Usage**: Always provide both formats + poster for cross-browser support.

### Images
- **Hero**: Local (`/images/*.webp` in `public/`). 6 floating templates hardcoded in `HERO_IMAGES` array.
- **Background Tiles**: Unsplash URLs in `BACKGROUND_TILES` array, duplicated 3x for marquee loop.
- **Optimization**: Use `?width=X&quality=80&format=webp` query params on Unsplash URLs.

## Development Workflow

### Commands
- `npm run dev` → Vite dev server on `localhost:3000` (configured in [vite.config.ts](vite.config.ts)).
- `npm run build` → Production build (static files to `dist/`).
- `npm run preview` → Preview production build locally.

### Key Files
1. **[index.html](index.html)**: **Most important config file**. Contains:
   - Tailwind CDN + inline config (~350 lines)
   - Meta tags (OG, Twitter, Schema.org)
   - Font loading (Google Fonts)
   - Analytics (Google Tag Manager)
2. **[vite.config.ts](vite.config.ts)**: Dev server config (port 3000, host `0.0.0.0` for Docker), `@` alias for root imports.
3. **[App.tsx](App.tsx)**: All media URLs + hero layout + routing logic (607 lines).

## Non-Obvious Patterns

### localStorage State Management
- **Signup tracking**: 7-day cooldown enforced client-side via timestamp diff:
  ```tsx
  const diff = (Date.now() - new Date(stored).getTime()) / (1000 * 60 * 60 * 24);
  if (diff < 7) setView("coming-soon");
  ```
- **Key**: `nopromt_signup_date` (ISO string).

### Routing
- Uses `react-router-dom` v7. `<ScrollToTop>` component resets scroll on route change.
- **Pattern**: `<Route path="/legal/terms" element={<Terms />} />` for static pages.

### Icon System ([components/Icons.tsx](components/Icons.tsx))
- Uses `lucide-react`. `<Icon name="CheckCircle2" />` wrapper component for consistent sizing.

## Philosophical Tone (User-Facing Copy)
- **Core message**: "What you see clearly becomes real."
- **Voice**: Aspirational, mystical, non-technical. Avoid jargon like "AI model" (use "vision" instead).
- **Keywords**: Manifestation, Intention, Clarity, Transform, Visualize.
- **Example**: "Your vision starts materializing" vs "Processing your image".
