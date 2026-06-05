import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fbc8c8',
          300: '#f6a0a0',
          400: '#ee6767',
          500: '#e33a3a',
          600: '#c41e1e',
          700: '#a41717',
          800: '#8B0000', // Main brand color (bordeaux)
          900: '#731616',
        },
        gold: {
          50: '#fefaec',
          100: '#fdf0c8',
          200: '#fbe08d',
          300: '#f8cb52',
          400: '#f5b829',
          500: '#C9A227', // Main gold
          600: '#a67c12',
          700: '#845a0e',
          800: '#6d4712',
          900: '#5b3b14',
        },
        cream: '#FAFAF8', // warm white background
        ink: '#1A1A2E', // near-black text
        whatsapp: '#25D366',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
