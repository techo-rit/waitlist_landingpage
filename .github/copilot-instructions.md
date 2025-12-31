# AI Agent Instructions for nopromt.ai Waitlist Landing Page

## Project Overview
This is a React + TypeScript + Vite waitlist landing page for nopromt.ai, a "visual manifestation" platform that lets users upload images and apply style transformations through "Visual Decks." The landing page emphasizes philosophical messaging around intention, clarity, and manifestation.

## Architecture & Key Patterns

### Component Structure
- **[App.tsx](App.tsx)**: Main entry point using `react-router-dom`. Handles global layout (Navbar, Footer, Modal) and routing configuration.
- **[LandingPage](App.tsx)**: Internal component defined in `App.tsx` handling view state (`'landing' | 'coming-soon'`) based on `localStorage`.
- **Pages**: `pages/` directory contains static content routes (`Terms`, `Privacy`, `RefundPolicy`, `Contact`).
- **Components**: Functional components with hooks (`useState`, `useEffect`). No class components.
- **State Persistence**: Uses `localStorage.setItem('nopromt_signup_date')` to track user signups and conditionally show the Coming Soon view for 7 days.

### Services Architecture
- **[supabaseClient.ts](supabaseClient.ts)**: Exports a singleton Supabase client using env vars `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Uses `persistSession: false` for anonymous submissions.
- **[services/geminiService.ts](services/geminiService.ts)**: Handles Google Gemini AI image generation using `@google/genai`. Contains `fileToGenerativePart()` for file-to-base64 conversion and `generateRemix()` which calls `gemini-3-pro-image-preview` model with image + text prompt.

### Environment Variables Pattern
**Critical**: This project uses **TWO different env patterns**:
1. **Vite standard**: `import.meta.env.VITE_*` (used in [supabaseClient.ts](supabaseClient.ts))
2. **Custom build-time injection**: `process.env.API_KEY` and `process.env.GEMINI_API_KEY` (defined in [vite.config.ts](vite.config.ts#L8-L10))

Create `.env.local` or `.env` with:
```bash
VITE_SUPABASE_URL=<your-url>
VITE_SUPABASE_ANON_KEY=<your-key>
GEMINI_API_KEY=<your-key>
```

### Data Models
- **[types.ts](types.ts)**: Defines `StackCategory` enum and `VisualDeck` interface
- **[constants.ts](constants.ts)**: Contains `VISUAL_DECKS` array with 12+ pre-configured style transformation decks (GQ Sports, Vaporwave, Old Money, Cyberpunk, etc.)

## Styling Conventions

### Tailwind-First Approach
- **No external CSS frameworks**: Pure Tailwind with custom utilities
- **Dark theme base**: `bg-[#030712]` or `bg-black` backgrounds throughout
- **Glass morphism**: `.glass-panel` utility (assumed in CSS) and `backdrop-blur-*` classes
- **Custom color palette**: Uses `brand-*` utility classes (e.g., `text-brand-400`, `bg-brand-900`) defined in Tailwind config
- **Animation classes**: Custom animations like `animate-float`, `animate-marquee`, `animate-marquee-reverse` defined in [index.css](index.css)

### Component Styling Patterns
```tsx
// Hero variant form styling
variant === 'hero' ? 'bg-[#1a1d26] border border-white/10 rounded-xl' : '...'

// Glass panel pattern
className="bg-black/60 border border-white/10 rounded-3xl backdrop-blur-2xl"

// Gradient buttons
className="bg-gradient-to-r from-purple-600 to-pink-600"
```

### Text Shadow Pattern for Hero Text
```tsx
style={{
  textShadow: `
    2px 2px 0 #000,
    -2px 2px 0 #000,
    2px -2px 0 #000,
    -2px -2px 0 #000,
    0 0 6px #000
  `
}}
```

## Media Asset Management

### Lazy Loading Pattern
```tsx
<img
  src={`${url}?width=800&quality=80&format=webp`}
  loading="lazy"
  decoding="async"
  srcSet={`
    ${url}?width=400&quality=80&format=webp 400w,
    ${url}?width=800&quality=80&format=webp 800w
  `}
  sizes="(max-width: 640px) 200px, 240px"
/>
```

### Video Handling
- **[VideoPlayer.tsx](components/VideoPlayer.tsx)**: Custom component accepting `mp4`, `webm`, and `poster` props
- Provides both formats for cross-browser compatibility
- All videos hosted on Supabase storage: `https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/`

## Development Workflow

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 3000)
npm run build        # Production build (output to dist/)
npm run preview      # Preview production build locally
```

### Dev Server Config
- **Port**: 3000 (hardcoded in [vite.config.ts](vite.config.ts))
- **Host**: `0.0.0.0`
- **HMR**: Hot Module Replacement enabled

### Key Dependencies
- `react-router-dom`: Client-side routing
- `react@19.2.0`: UI library
- `vite@^6.2.0`: Build tool
- `lucide-react`: Icons
- `@supabase/supabase-js`: Backend/Database
- `@google/genai`: AI Image Generation

## Important Conventions

### Icon Usage
```tsx
import { Icon } from './components/Icons';
<Icon name="ArrowRight" className="w-5 h-5" />
```
All icons come from `lucide-react`. Valid names: `CheckCircle2`, `ArrowRight`, `Loader2`, `Sparkles`, etc.

### Form Submission Flow
1. User enters email in `<WaitlistForm />`
2. Submits to Supabase `waitlist` table via `.from("waitlist").insert([{ email }])`
3. On success, triggers `onSignupSuccess` callback
4. Sets localStorage date and redirects to Coming Soon view
5. Modal closes automatically after 1.5s

### Navigation Pattern
- **Routing**: Uses `react-router-dom` for pages (`/`, `/terms`, `/contact`).
- **Scroll**: `element.scrollIntoView({ behavior: 'smooth' })` for on-page navigation.
- **Offset**: Use `scroll-mt-20` class for sections to account for fixed navbar.
- **Anchors**: IDs used for landing page sections: `#how-it-works`, `#why-us`, `#join`.

### Philosophical Tone
All copy emphasizes "manifestation," "clarity," "intention," and "vision → reality." When writing new content, match this tone:
- ✅ "When intention is clear, the path simplifies itself."
- ✅ "Everything in life begins as a thought."
- ❌ "Our AI uses advanced algorithms..."

## Common Tasks

### Adding a New Visual Deck
1. Add entry to `VISUAL_DECKS` in [constants.ts](constants.ts)
2. Include: `id`, `name`, `category`, `description`, `promptModifier`, `iconName`, `color`
3. Ensure `iconName` matches a valid Lucide icon

### Modifying Environment Variables
- Add to `.env.local`
- For Vite access: prefix with `VITE_`
- For build-time injection: add to [vite.config.ts](vite.config.ts) `define` object

### Updating Video Assets
Video URLs are stored as constants at the top of [App.tsx](App.tsx). Follow this naming pattern:
```tsx
const LOWERWEAR_MP4 = "https://ducufhqcxdhqcuhrpnrb.supabase.co/storage/v1/object/public/assets/landingpage/fitit_lowerwear.mp4";
```

### Component Prop Patterns
- `onSignupSuccess?: () => void` for success callbacks
- `className?: string` for style overrides
- `variant?: 'default' | 'hero'` for component variants
- `compact?: boolean` for size toggles

## Async & Error Handling Patterns

### Form Submission Error Handling (WaitlistForm)
```tsx
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
const [errorMessage, setErrorMessage] = useState('');
```

### Gemini AI Integration Error Handling
- `generateRemix()` uses try-catch for API failures
- Validates file MIME type before conversion with `fileToGenerativePart()`
- Gracefully handles `window.aistudio` API key selection (playground environment)
