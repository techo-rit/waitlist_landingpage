/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#020202',
        'bg-surface': '#111111',
        'text-primary': '#FFFFFF',
        'text-secondary': '#E5E5E5',
        'text-muted': '#B3B3B3',
        'border-subtle': '#262626',
        'gold': '#F5C76A',
        'gold-strong': '#F1B942',
        'gold-soft': '#FFE7B0',
        brand: {
          50: '#fbf8f2',
          100: '#f5ebd6',
          200: '#ebdcb0',
          300: '#e0c885',
          400: '#F5C76A',
          500: '#F1B942',
          600: '#d99f2b',
          700: '#b37e1f',
          800: '#8f621b',
          900: '#704b18',
          950: '#422a0a',
        },
        accent: {
          DEFAULT: '#F1B942',
          glow: '#FFE7B0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.1em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
