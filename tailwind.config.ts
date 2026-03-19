import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDF8F3',
        surface: '#FAF5EF',
        primary: '#3D3229',
        secondary: '#6B5D4D',
        accent: {
          DEFAULT: '#C4A77D',
          hover: '#B39668',
          light: '#D4BC95',
        },
        border: '#E8DFD4',
        highlight: '#F5EDE4',
        muted: '#8B7B6B',
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(61, 50, 41, 0.08)',
        'soft-lg': '0 8px 30px rgba(61, 50, 41, 0.12)',
        'glow': '0 0 20px rgba(196, 167, 125, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
